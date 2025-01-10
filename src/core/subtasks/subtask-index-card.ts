import { FileManager, FrontMatterCache, TFile } from 'obsidian';
import { UUID } from 'src/utils/uuid-generator';

import { PlanningIndexCard } from '../base-classes/planning-index-card';
import { ISubtaskIndexCard } from '../types/interfaces/i-subtask-index-card';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { emptyString, identTags } from '../types/types';

export const SubtaskFieldNames = {
    PARENT_TASK_REFID: "pl-parent",
}

export type SubtaskFieldNames = typeof SubtaskFieldNames[keyof typeof SubtaskFieldNames];

export class SubtaskIndexCard extends PlanningIndexCard implements ISubtaskIndexCard {
    private _parentTaskRefId: UUID;

    constructor(){
        super(identTags.PLANNING_SUBTASK);
        this._parentTaskRefId = "";
    }

    public get parentTaskRefId(): string {
        return this._parentTaskRefId;
    }

    public set parentTaskRefId(value: string) {
        this._parentTaskRefId = value;
    }

    copyInto(taskIndexCard: ITaskIndexCard): void {
        taskIndexCard.name = this.name;
        taskIndexCard.parentProject = emptyString;
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
                this.parentTaskRefId = frontMatter[SubtaskFieldNames.PARENT_TASK_REFID];
        })
    }

    loadFromFrontMatter(frontMatter: FrontMatterCache): void {
        super.loadFromFrontMatter(frontMatter);
        this.parentTaskRefId = frontMatter[SubtaskFieldNames.PARENT_TASK_REFID];
    }

    async save(fileManager: FileManager, file: TFile) : Promise<void> {
        debugger;
        await super.save(fileManager, file);
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter)
                frontMatter[SubtaskFieldNames.PARENT_TASK_REFID] = this.parentTaskRefId;
        })
    }
}
