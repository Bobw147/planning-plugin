import { FileManager, FrontMatterCache, TFile } from 'obsidian';
import { UUID } from 'src/utils/uuid-generator';

import { PlanningIndexCard } from '../base-classes/planning-index-card';
import { IProjectIndexCard } from '../types/interfaces/i-project-index-card';
import { identTags } from '../types/types';

const projectFieldNames = {
    PARENT_GOAL_REFID: "plparent"
}

export class ProjectIndexCard extends PlanningIndexCard implements IProjectIndexCard {
    private _parentGoalRefId: string;

    constructor() {
        super(identTags.PLANNING_PROJECT);
        this._parentGoalRefId = "";
    }

    public get parentGoalRefId(): string {
        return this._parentGoalRefId;
    }

    public set parentGoalRefId(value: string)  {
        this._parentGoalRefId = value;
    }

    async load(fileManager: FileManager, file: TFile): Promise<void> {
        super.load(fileManager, file);
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter)
                this.parentGoalRefId = frontMatter[projectFieldNames.PARENT_GOAL_REFID];
        });
    }

    loadFromFrontMatter(frontMatter: FrontMatterCache): void {
        super.loadFromFrontMatter(frontMatter);
        this.parentGoalRefId = frontMatter[projectFieldNames.PARENT_GOAL_REFID];
    }

    async save(fileManager: FileManager, file: TFile) : Promise<void> {
        await super.save(fileManager, file);
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter)
                frontMatter[projectFieldNames.PARENT_GOAL_REFID] = this.parentGoalRefId;
        });
    }
}
