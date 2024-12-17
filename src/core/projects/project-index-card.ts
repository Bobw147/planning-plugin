import { FileManager, TFile } from 'obsidian';

import { PlanningIndexCard } from '../base-classes/planning-index-card';
import { IProjectIndexCard } from '../types/interfaces/i-project-index-card';
import { identTags } from '../types/types';

const projectFieldNames = {
    PARENT_GOAL: "plparent"
}

export class ProjectIndexCard extends PlanningIndexCard implements IProjectIndexCard {
    private _parentGoal: string;
    
    constructor() {
        super(identTags.PLANNING_GOAL);
        this._parentGoal = "";
    }

    async load(fileManager: FileManager, file: TFile): Promise<void> {
        super.load(fileManager, file);
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter)
                this.parentGoal = frontMatter[projectFieldNames.PARENT_GOAL];
        });
    }

    async save(fileManager: FileManager, file: TFile) : Promise<void> {
        await super.save(fileManager, file);
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter)
                frontMatter[projectFieldNames.PARENT_GOAL] = this.parentGoal;
        });
    }

    public get parentGoal(): string {
        return this._parentGoal;
    }

    public set parentGoal(value: string)  {
        this._parentGoal = value;
    }
}
