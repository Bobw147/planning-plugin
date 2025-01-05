import { FrontMatterCache } from 'obsidian';

import { UUID } from '../types';
import { IPlanningIndexCard } from './i-planning-index-card';

export interface IProjectIndexCard extends IPlanningIndexCard{
    get parentGoal() : UUID;
    set parentGoal(value: UUID);

    loadFromFrontMatter(frontMatter: FrontMatterCache): void;
}
