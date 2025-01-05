import { FrontMatterCache } from 'obsidian';

import { UUID } from '../types';
import { IPlanningIndexCard } from './i-planning-index-card';
import { ITaskIndexCard } from './i-task-index-card';

export interface ISubtaskIndexCard extends IPlanningIndexCard {
    get parentTask(): UUID;
    set parentTask(value: UUID);

    copyInto(taskIndexCard: ITaskIndexCard): void;
    loadFromFrontMatter(frontMatter: FrontMatterCache): void;
}
