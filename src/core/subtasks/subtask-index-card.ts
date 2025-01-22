import { App, FileManager, FrontMatterCache, TFile } from 'obsidian';
import { UUID } from 'src/utils/uuid-generator';

import { PlanningIndexCard } from '../planner/planning-index-card';
import { ISubtaskIndexCard } from '../types/interfaces/i-subtask-index-card';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { identTags } from '../types/types';

export const SubtaskFieldNames = {
    PARENT_TASK_REFID: "pl-parent",
}

export type SubtaskFieldNames = typeof SubtaskFieldNames[keyof typeof SubtaskFieldNames];

export class SubtaskIndexCard extends PlanningIndexCard implements ISubtaskIndexCard {
    private _parentTaskRefId: UUID;

    constructor(app: App){
        super(app, identTags.PLANNING_SUBTASK);
        this._parentTaskRefId = new UUID(false);
    }

    public get parentTaskRefId(): UUID {
        return this._parentTaskRefId;
    }

    public set parentTaskRefId(value: UUID) {
        this._parentTaskRefId = value;
    }

    copyInto(taskIndexCard: ITaskIndexCard): void {
        taskIndexCard.name = this.name;
        taskIndexCard.parentProjectRefId = new UUID(false);
        taskIndexCard.categoryTag  = this.categoryTag;
        taskIndexCard.statusTag = this.statusTag;
        taskIndexCard.targetDate = this.targetDate;
        taskIndexCard.expectedDate = this.expectedDate;
        taskIndexCard.completedDate = this.completedDate;
        taskIndexCard.userTags = this.userTags;
    }

    async load(fileManager: FileManager, file: TFile): Promise<void> {
        await super.load(fileManager, file);
        fileManager.processFrontMatter(file,(frontMatter) => {
            if (frontMatter)
                this.parentTaskRefId = new UUID(false, frontMatter[SubtaskFieldNames.PARENT_TASK_REFID]);
        })
    }

    loadFromFrontMatter(frontMatter: FrontMatterCache): void {
        super.loadFromFrontMatter(frontMatter);
        this.parentTaskRefId = new UUID(false, frontMatter[SubtaskFieldNames.PARENT_TASK_REFID]);
    }

    async save(fileManager: FileManager, file: TFile) : Promise<void> {
        await super.save(fileManager, file);
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter)
                frontMatter[SubtaskFieldNames.PARENT_TASK_REFID] = this.parentTaskRefId.getRefId();
        })
    }

    updateCategoryTag(categoryTag: identTags): void {}
    updateExpectedDate(): void {}
}
