import { FileManager, Setting, TFile } from 'obsidian';

import { IPlanningIndexCard } from './i-planning-index-card';

export interface IPlanningForm {
    buildForm(parent: HTMLElement) : void;
    configureForCreateMode(indexCard: IPlanningIndexCard): void;
    configureForIndexCardMode(indexCard: IPlanningIndexCard, fileManager: FileManager, file: TFile): Promise<void>;
    updateIndexCard(indexCard: IPlanningIndexCard): void;

    get nameSection(): Setting | undefined;
    get parentSection(): Setting | undefined;
    get subtaskToggleSection(): Setting | undefined;
    get categoryTagSection(): Setting | undefined;
    get statusTagSection(): Setting | undefined;
    get targetDateSection(): Setting | undefined;
    get expectedDateSection(): Setting | undefined;
    get completedDateSection(): Setting | undefined;
    get userTagsSection(): Setting | undefined;
    get buttonsSection(): Setting | undefined;
}
