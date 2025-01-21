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

    get nameSection(): Setting| LockableTextSetting;
    get parentSection(): Setting | LockableDropdownSetting;
    get subtaskToggleSection(): Setting;
    get categoryTagSection(): Setting |  LockableDropdownSetting;
    get statusTagSection(): Setting | LockableDropdownSetting;
    get targetDateSection(): Setting | LockableDateSetting;
    get expectedDateSection(): Setting | LockableDateSetting;
    get completedDateSection(): Setting | LockableDateSetting;
    get userTagsSection(): Setting;
    get buttonsSection(): Setting;
}
