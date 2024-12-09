import { FileManager, FrontMatterCache, TFile } from 'obsidian';

import { PlanningIndexCard } from '../base-classes/index-card';
import { IPlanningIndexCard } from '../types/interfaces/i-planning-index-card';
import { identTags } from '../types/types';

export class GoalIndexCard extends PlanningIndexCard implements IPlanningIndexCard {
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

