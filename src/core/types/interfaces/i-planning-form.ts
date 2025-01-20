import { FileManager, Setting, TFile } from 'obsidian';
import { LockableDateSetting } from 'src/core/custom-components/lockable-date-component';
import { LockableDropdownSetting } from 'src/core/custom-components/lockable-dropdown-component';
import { LockableTextSetting } from 'src/core/custom-components/lockable-text-component';

import { IPlanningIndexCard } from './i-planning-index-card';

export interface IPlanningForm {
    buildForm(parent: HTMLElement) : void;
    configureForCreateMode(indexCard: IPlanningIndexCard): void;
    configureForIndexCardMode(indexCard: IPlanningIndexCard, fileManager: FileManager, file: TFile): Promise<void>;
    updateIndexCard(indexCard: IPlanningIndexCard): void;

    get nameSection(): LockableTextSetting;
    get parentSection(): Setting;
    get subtaskToggleSection(): Setting;
    get categoryTagSection(): LockableDropdownSetting;
    get statusTagSection(): LockableDropdownSetting;
    get targetDateSection(): LockableDateSetting;
    get expectedDateSection(): Setting;
    get completedDateSection(): Setting;
    get userTagsSection(): Setting;
    get buttonsSection(): Setting;
}
