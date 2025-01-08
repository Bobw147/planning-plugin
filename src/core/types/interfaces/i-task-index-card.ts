import { FrontMatterCache } from 'obsidian';

import { UUID } from '../types';
import { IPlanningIndexCard } from './i-planning-index-card';
import { ISubtaskIndexCard } from './i-subtask-index-card';

export interface ITaskIndexCard extends IPlanningIndexCard {
    parentProjectRefs: UUID[];

    get parentProject(): string;
    set parentProject(value: string);

    copyInto(subTaskIndexCard: ISubtaskIndexCard): void;
    loadFromFrontMatter(frontMatter: FrontMatterCache): void;
}
