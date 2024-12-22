import { FrontMatterCache } from 'obsidian';

import { IPlanningIndexCard } from './i-planning-index-card';
import { ITaskIndexCard } from './i-task-index-card';

export interface ISubtaskIndexCard extends IPlanningIndexCard {
    get parentTask(): string;
    set parentTask(value: string);

    copyInto(taskIndexCard: ITaskIndexCard): void;
    loadFromFrontMatter(frontMatter: FrontMatterCache): void;
}
