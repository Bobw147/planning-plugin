import { IPlanningIndexCard } from './i-planning-index-card';

export interface ISubtaskIndexCard extends IPlanningIndexCard {
    get parentTask(): string;
    set parentTask(value: string);
}
