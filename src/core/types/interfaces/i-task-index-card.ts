import { FrontMatterCache } from 'obsidian';
import { UUID } from 'src/utils/uuid-generator';

import { IPlanningIndexCard } from './i-planning-index-card';
import { ISubtaskIndexCard } from './i-subtask-index-card';

export interface ITaskIndexCard extends IPlanningIndexCard {

    get parentProjectRefId(): UUID;
    set parentProjectRefId(value: UUID);

    copyInto(subTaskIndexCard: ISubtaskIndexCard): void;
    loadFromFrontMatter(frontMatter: FrontMatterCache): void;
    refreshDates(subtask: ISubtaskIndexCard): void;
}
