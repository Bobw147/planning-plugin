import { FrontMatterCache } from 'obsidian';

import { IPlanningIndexCard } from './i-planning-index-card';

export interface IProjectIndexCard extends IPlanningIndexCard{
    get parentGoal() : string;
    set parentGoal(value: string);

    loadFromFrontMatter(frontMatter: FrontMatterCache): void;
}
