import { App, FrontMatterCache, TFile } from 'obsidian';

import { PlanningIndexCard } from '../planner/planning-index-card';
import { ProjectIndexCard } from '../projects/project-index-card';
import { IGoalIndexCard } from '../types/interfaces/i-goal-index-card';
import { identTags, nullDate } from '../types/types';

export class GoalIndexCard extends PlanningIndexCard implements IGoalIndexCard {
  
    constructor(app: App) {
        super(app, identTags.PLANNING_GOAL);
    }

    loadFromFrontMatter(frontMatter: FrontMatterCache): void {
        super.loadFromFrontMatter(frontMatter);
    }

    updateCategoryTag(categoryTag: identTags): void {
        Object.entries(this.downStreamLinks).forEach(([projectRefId, projectIndexCard]) => {
            projectIndexCard.categoryTag = categoryTag;
            projectIndexCard.save(this.app.fileManager, projectIndexCard.file as TFile);
            projectIndexCard.updateCategoryTag(categoryTag);
        });
    }
    
    updateExpectedDate() : void {
        let mostDistantDate = nullDate;
        for (const projectRefId in this.downStreamLinks) {
            const projectIndexCard: ProjectIndexCard = <ProjectIndexCard> this.downStreamLinks[projectRefId];
            
            // Update this project index cards expected date from its downstream links
            projectIndexCard.updateExpectedDate();

            // See if it is the latest running so far
            if (projectIndexCard.expectedDate > mostDistantDate)
                mostDistantDate = projectIndexCard.expectedDate;
        }
        if (this.expectedDate > mostDistantDate) {
            this.expectedDate = mostDistantDate;
        }    
    }
}