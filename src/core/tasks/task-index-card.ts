import { FileManager, FrontMatterCache, TFile } from 'obsidian';
import { UUID } from 'src/utils/uuid-generator';

import { PlanningIndexCard } from '../planner/planning-index-card';
import { ISubtaskIndexCard } from '../types/interfaces/i-subtask-index-card';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { emptyString, identTags } from '../types/types';

const taskFieldNames = {
    PARENT_PROJECT_REFID: "plparent"
}

export class TaskIndexCard extends PlanningIndexCard implements ITaskIndexCard {
    private _parentProjectRefId: UUID;

    constructor(){
        super(identTags.PLANNING_TASK);
        this._parentProjectRefId = "";
    }

    public getParentProjectRefId(): string {
        return this._parentProjectRefId;
    }

    public set parentProjectRefId(value: string) {
        this._parentProjectRefId = value;
    }

    copyInto(subtaskIndexCard: ISubtaskIndexCard): void {
        subtaskIndexCard.name = this.name;
        subtaskIndexCard.parentTaskRefId = emptyString;
        subtaskIndexCard.categoryTag = this.categoryTag;
        subtaskIndexCard.statusTag = this.statusTag;
        subtaskIndexCard.targetDate = this.targetDate;
        subtaskIndexCard.expectedDate = this.expectedDate;
        subtaskIndexCard.completedDate = this.completedDate;
        subtaskIndexCard.userTags = this.userTags;
    }

    async load(fileManager: FileManager, file: TFile): Promise<void> {
        super.load(fileManager, file);
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter) {
                this.parentProjectRefId = frontMatter[taskFieldNames.PARENT_PROJECT_REFID];
            }
        })
    }

    loadFromFrontMatter(frontMatter: FrontMatterCache): void {
        super.loadFromFrontMatter(frontMatter);
        this.parentProjectRefId = frontMatter[taskFieldNames.PARENT_PROJECT_REFID];
    }

    async save(fileManager: FileManager, file: TFile) : Promise<void> {
        await super.save(fileManager, file);
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter)
                frontMatter[taskFieldNames.PARENT_PROJECT_REFID] = this.parentProjectRefId;
        })
    }
}
