import { IPlanningIndexCard } from "./i-planning-index-card";

export interface ITaskIndexCard extends IPlanningIndexCard {
    get parentProject(): string;
    set parentProject(value: string);
}
