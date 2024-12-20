import { IPlanningIndexCard } from './i-planning-index-card';

export interface IModalForm {

    open(): void;
    updateIndexCard(indexCard: IPlanningIndexCard): void;
}