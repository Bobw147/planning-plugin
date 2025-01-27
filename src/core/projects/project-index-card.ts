import { App, FileManager, FrontMatterCache, TFile } from 'obsidian';
import { UUID } from 'src/utils/uuid-generator';

import { PlanningIndexCard } from '../planner/planning-index-card';
import { TaskIndexCard } from '../tasks/task-index-card';
import { IProjectIndexCard } from '../types/interfaces/i-project-index-card';
import { identTags, nullDate } from '../types/types';

const projectFieldNames = {
    PARENT_GOAL_REFID: "plparent"
}

export class ProjectIndexCard extends PlanningIndexCard implements IProjectIndexCard {
    private _parentGoalRefId: UUID;

    constructor(app: App) {
        super(app, identTags.PLANNING_PROJECT);
        this._parentGoalRefId = new UUID(false);
    }

    public get parentGoalRefId(): UUID {
        return this._parentGoalRefId;
    }

    public set parentGoalRefId(value: UUID)  {
        this._parentGoalRefId = value;
    }

    async load(fileManager: FileManager, file: TFile): Promise<void> {
        super.load(fileManager, file);
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter)
                this.parentGoalRefId = new UUID(false, frontMatter[projectFieldNames.PARENT_GOAL_REFID]);
        });
    }

    loadFromFrontMatter(frontMatter: FrontMatterCache): void {
        super.loadFromFrontMatter(frontMatter);
        this.parentGoalRefId = new UUID(false, frontMatter[projectFieldNames.PARENT_GOAL_REFID]);
    }

    async save(fileManager: FileManager, file: TFile) : Promise<void> {
        await super.save(fileManager, file);
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter)
                frontMatter[projectFieldNames.PARENT_GOAL_REFID] = this.parentGoalRefId.getRefId();
        });
    }

    updateCategoryTag(categoryTag: identTags): void {
        Object.entries(this.downStreamLinks).forEach(([taskRefId, taskIndexCard]) => {
            taskIndexCard.categoryTag = categoryTag;
            taskIndexCard.save(this.app.fileManager, taskIndexCard.file as TFile);
            taskIndexCard.updateCategoryTag(categoryTag);
        });
    }

    updateExpectedDate() : void {
        let mostDistantDate = nullDate;
        for (const taskRefId in this.downStreamLinks) {
            const taskIndexCard: TaskIndexCard = <TaskIndexCard> this.downStreamLinks[taskRefId];
            
            // Update this task index cards expected date from its downstream links
            taskIndexCard.updateExpectedDate();

            // See if it is the latest running so far
            if (taskIndexCard.expectedDate > mostDistantDate)
                mostDistantDate = taskIndexCard.expectedDate;
        }
        if (this.expectedDate > mostDistantDate) {
            this.expectedDate = mostDistantDate;
        }    
    }
}
