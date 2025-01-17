import { FileManager, Setting, TFile } from 'obsidian';

import { IPlanningIndexCard } from './i-planning-index-card';

export interface IPlanningForm {
    buildForm(parent: HTMLElement) : void;
    configureForCreateMode(indexCard: IPlanningIndexCard): void;
    configureForIndexCardMode(indexCard: IPlanningIndexCard, fileManager: FileManager, file: TFile): Promise<void>;
    updateIndexCard(indexCard: IPlanningIndexCard): void;

    get nameSection(): Setting;
    get parentSection(): Setting;
    get subtaskToggleSection(): Setting;
    get categoryTagSection(): Setting;
    get statusTagSection(): Setting;
    get targetDateSection(): Setting;
    get expectedDateSection(): Setting;
    get completedDateSection(): Setting;
    get userTagsSection(): Setting;
    get buttonsSection(): Setting;
}
