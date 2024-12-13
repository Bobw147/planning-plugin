import { FileManager, FrontMatterCache, TFile } from 'obsidian';

import { PlanningIndexCard } from '../base-classes/index-card';
import { IGoalIndexCard } from '../types/interfaces/i-goal-index-card';
import { identTags } from '../types/types';

export class GoalIndexCard extends PlanningIndexCard implements IGoalIndexCard {
    constructor(){
        super(identTags.PLANNING_GOAL);
    }

    async load(frontmatter: FrontMatterCache): Promise<void> {
        super.load(frontmatter);
    }

    async save(filemanager: FileManager, file: TFile, ident?: typeof this.identTag): Promise<void> {
        super.save(filemanager, file, ident);
    }
}

