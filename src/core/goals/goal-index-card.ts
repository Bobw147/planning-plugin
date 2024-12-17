import { PlanningIndexCard } from '../base-classes/index-card';
import { IGoalIndexCard } from '../types/interfaces/i-goal-index-card';
import { identTags } from '../types/types';

export class GoalIndexCard extends PlanningIndexCard implements IGoalIndexCard {
    constructor(){
        super(identTags.PLANNING_GOAL);
    }
}