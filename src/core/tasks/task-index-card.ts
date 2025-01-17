import { FileManager, FrontMatterCache, TFile } from 'obsidian';
import { UUID } from 'src/utils/uuid-generator';

import { PlanningIndexCard } from '../planner/planning-index-card';
import { SubtaskIndexCard } from '../subtasks/subtask-index-card';
import { ISubtaskIndexCard } from '../types/interfaces/i-subtask-index-card';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { identTags, nullDate } from '../types/types';

const taskFieldNames = {
    PARENT_PROJECT_REFID: "plparent"
}

export class TaskIndexCard extends PlanningIndexCard implements ITaskIndexCard {
    private _parentProjectRefId: UUID;

    constructor(){
        super(identTags.PLANNING_TASK);
        this._parentProjectRefId = new UUID(false);
    }

    public get parentProjectRefId(): UUID {
        return this._parentProjectRefId;
    }

    public set parentProjectRefId(value: UUID) {
        this._parentProjectRefId = value;
    }

    copyInto(subtaskIndexCard: ISubtaskIndexCard): void {
        subtaskIndexCard.name = this.name;
        subtaskIndexCard.parentTaskRefId = new UUID(false);
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
                this.parentProjectRefId = new UUID(false, frontMatter[taskFieldNames.PARENT_PROJECT_REFID]);
            }
        })
    }

    loadFromFrontMatter(frontMatter: FrontMatterCache): void {
        super.loadFromFrontMatter(frontMatter);
        this.parentProjectRefId = new UUID(false, frontMatter[taskFieldNames.PARENT_PROJECT_REFID]);
    }

    async save(fileManager: FileManager, file: TFile) : Promise<void> {
        await super.save(fileManager, file);
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter)
                frontMatter[taskFieldNames.PARENT_PROJECT_REFID] = this.parentProjectRefId.getRefId();
        })
    }
    
    refreshExpectedDates(subtask: ISubtaskIndexCard): void {
        if (subtask.expectedDate > this.expectedDate) {
            this.expectedDate = subtask.expectedDate;
        }
    }

    updateExpectedDate() : void {
        let mostDistantDate = nullDate;
        for (const subtaskRefId in this.downStreamLinks) {
            const subtaskIndexCard: SubtaskIndexCard = <SubtaskIndexCard> this.downStreamLinks[subtaskRefId];
            
            // Update this task index cards expected date from its downstream links
            subtaskIndexCard.updateExpectedDate();

            // See if it is the latest running so far
            if (subtaskIndexCard.expectedDate > mostDistantDate)
                mostDistantDate = subtaskIndexCard.expectedDate;
        }
        if (this.expectedDate > mostDistantDate) {
            this.expectedDate = mostDistantDate;
        }    
    }
}
