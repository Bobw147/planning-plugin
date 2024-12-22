import { FrontMatterCache } from 'obsidian';

import { IPlanningIndexCard } from './i-planning-index-card';

export interface IGoalIndexCard extends IPlanningIndexCard {
    
    loadFromFrontMatter(frontMatter: FrontMatterCache): void;
}
