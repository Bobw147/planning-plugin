import { IPlanningIndexCard } from './i-planning-index-card';
import { ISubtaskIndexCard } from './i-subtask-index-card';

export interface ITaskIndexCard extends IPlanningIndexCard {
    get parentProject(): string;
    set parentProject(value: string);

    copyInto(subTaskIndexCard: ISubtaskIndexCard): void;
}
