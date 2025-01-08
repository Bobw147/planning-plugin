import { FrontMatterCache } from 'obsidian';

import { UUID } from '../types';
import { IPlanningIndexCard } from './i-planning-index-card';

export interface IProjectIndexCard extends IPlanningIndexCard{
    parentGoalRefs: UUID[];

    get parentGoal() : string;
    set parentGoal(value: string);

    loadFromFrontMatter(frontMatter: FrontMatterCache): void;
}
