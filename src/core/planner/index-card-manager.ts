import { App } from 'obsidian';

import { IGoalIndexCard } from '../types/interfaces/i-goal-index-card';
import { IPlanningIndexCard } from '../types/interfaces/i-planning-index-card';
import { IProjectIndexCard } from '../types/interfaces/i-project-index-card';
import { ISubtaskIndexCard } from '../types/interfaces/i-subtask-index-card';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { identTags } from '../types/types';

export class IndexCardManager {
    private app: App;
    private goalIndexCards: {[index: string]: IGoalIndexCard};
    private projectIndexCards: {[index: string]: IGoalIndexCard};
    private taskIndexCards: {[index: string]: IGoalIndexCard};
    private subtaskIndexCards: {[index: string]: IGoalIndexCard};

    constructor(app: App){
        this.app = app;
        this.goalIndexCards = {};
        this.projectIndexCards = {};
        this.taskIndexCards = {};
        this.subtaskIndexCards = {};
    }

    add(indexCard: IPlanningIndexCard): void {
        switch (indexCard.identTag) {
            case identTags.PLANNING_GOAL:
                this.goalIndexCards[indexCard.refId] = indexCard as IGoalIndexCard;
                this.goalIndexCards[indexCard.name] = indexCard as IGoalIndexCard;
                break;

            case identTags.PLANNING_PROJECT:
                this.projectIndexCards[indexCard.refId] = indexCard as IProjectIndexCard;
                this.projectIndexCards[indexCard.name] = indexCard as IProjectIndexCard;
                break;

            case identTags.PLANNING_TASK:
                this.taskIndexCards[indexCard.refId] = indexCard as ITaskIndexCard;
                this.taskIndexCards[indexCard.name] = indexCard as ITaskIndexCard;
                break;

            case identTags.PLANNING_SUBTASK:
                this.subtaskIndexCards[indexCard.refId] = indexCard as ISubtaskIndexCard;
                this.subtaskIndexCards[indexCard.name] = indexCard as ISubtaskIndexCard;
                break;
        }
    }

    private isMemberOf(indexCards: Record<string, IPlanningIndexCard>, indexCardKey: string): IPlanningIndexCard | null {
        const indexCard: IPlanningIndexCard | undefined = this.goalIndexCards[indexCardKey];
        return (indexCard !== undefined) ? indexCard : null;
    }
    
    remove(indexCardKey: string) {
        let indexCardName: string = "";
        let indexCardRefId: string = "";
        let indexCard: IPlanningIndexCard | null = null;
        
        indexCard = this.isMemberOf(this.goalIndexCards, indexCardKey)
        if (indexCard != null) {
            indexCardName = indexCard.name;
            indexCardRefId = indexCard.refId;

            delete this.goalIndexCards[indexCardName];
            delete this.goalIndexCards[indexCardRefId];
            return;
       }

       indexCard = this.isMemberOf(this.projectIndexCards, indexCardKey)
       if (indexCard != null) {
           indexCardName = indexCard.name;
           indexCardRefId = indexCard.refId;

           delete this.projectIndexCards[indexCardName];
           delete this.projectIndexCards[indexCardRefId];
           return;
      }

        indexCard = this.isMemberOf(this.taskIndexCards, indexCardKey)
        if (indexCard != null) {
            indexCardName = indexCard.name;
            indexCardRefId = indexCard.refId;

            delete this.taskIndexCards[indexCardName];
            delete this.taskIndexCards[indexCardRefId];
            return;
       }

       indexCard = this.isMemberOf(this.subtaskIndexCards, indexCardKey)
       if (indexCard != null) {
           indexCardName = indexCard.name;
           indexCardRefId = indexCard.refId;

           delete this.subtaskIndexCards[indexCardName];
           delete this.subtaskIndexCards[indexCardRefId];
           return;
      }
   }
}