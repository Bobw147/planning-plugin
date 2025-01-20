import {
    App, CachedMetadata, DropdownComponent, FrontMatterCache, Modal, Setting, TAbstractFile,
    TextComponent, TFile, TFolder, Vault
} from 'obsidian';
import { LockableDateSetting } from 'src/core/custom-components/lockable-date-component';
import { LockableTextSetting } from 'src/core/custom-components/lockable-text-component';
import { Settings } from 'src/settings/Settings';
import { dateFormatter } from 'src/utils/utils';

import { LockableDropdownSetting } from '../custom-components/lockable-dropdown-component';
import { IndexCardManager } from '../planner/index-card-manager';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { IPlanningIndexCard } from '../types/interfaces/i-planning-index-card';
import { emptyString, IDictionary, nullDate, nullDateTimestamp, zerothItem } from '../types/types';
import { FieldNames } from './planning-index-card';

export abstract class PlanningModal extends Modal implements IModalForm {
    protected settings: Settings;
    protected indexCardManager: IndexCardManager;
    private _nameSection: LockableTextSetting;
    protected _parentSection: Setting;
    protected _subtaskToggleSection: Setting;
    private _categoryTagSection: LockableDropdownSetting;
    private _statusTagSection: LockableDropdownSetting;
    private _targetDateSection: LockableDateSetting;
    private _expectedDateSection: LockableDateSetting;
    private _completedDateSection: LockableDateSetting;
    private _userTagsSection: Setting;
    private _buttonsSection: Setting;

    constructor(app: App, settings: Settings, indexCardManager: IndexCardManager) {
        super(app);
        this.settings = settings;
        this.indexCardManager = indexCardManager;

        // The form component section placeholders MUST be in the sequnce they appear in the forms.
        this.contentEl.empty();
        this._nameSection = new LockableTextSetting(this.contentEl);
        this._parentSection = new Setting(this.contentEl);
        this._subtaskToggleSection = new Setting(this.contentEl);
        this._categoryTagSection = new LockableDropdownSetting(this.contentEl);
        this._statusTagSection = new LockableDropdownSetting(this.contentEl);
        this._targetDateSection = new LockableDateSetting(this.contentEl);
        this._expectedDateSection = new LockableDateSetting(this.contentEl);
        this._completedDateSection = new LockableDateSetting(this.contentEl);
        this._userTagsSection = new Setting(this.contentEl);
        this._buttonsSection = new Setting(this.contentEl);
    }

    get nameSection(): LockableTextSetting
    {
        return this._nameSection;
    }

    get parentSection(): Setting {
        return this._parentSection;
    }

    get subtaskToggleSection(): Setting {
        return this._subtaskToggleSection;
    }

    get categoryTagSection(): LockableDropdownSetting {
        return this._categoryTagSection;
    }

    get statusTagSection(): LockableDropdownSetting {
        return this._statusTagSection;
    }

    get targetDateSection(): LockableDateSetting {
        return this._targetDateSection;
    }

    get expectedDateSection(): LockableDateSetting {
        return this._expectedDateSection;
    }

    get completedDateSection(): LockableDateSetting {
        return this._completedDateSection;
    }

    get userTagsSection(): Setting {
        return this._userTagsSection;
    }

    get buttonsSection(): Setting {
        return this._buttonsSection;
    }
    
    protected addNames(dropdown: DropdownComponent, rootPath: string, searchTag: string, 
                        callback: (dropdown: DropdownComponent, parentName: string) => void): void {
        const rootFolder: TFolder | null = this.app.vault.getFolderByPath(rootPath);
        if (rootFolder == null)
            return;
    
        Vault.recurseChildren(rootFolder, (child:TAbstractFile) => {
            // Make sure what we have is a file and not a folder. The latter is ignored
            if (child instanceof TFile) {
                // Get the frontmatter for the file
                const cache: CachedMetadata | null = this.app.metadataCache.getCache((child.path));
                const frontmatter: FrontMatterCache | undefined = cache?.frontmatter as IDictionary<string>;
                if (frontmatter[FieldNames.IDENT_TAG_FIELD] == searchTag) {
                    callback(dropdown, child.basename)
                }
            }
        });
    }

    protected addOptions(dropdown: DropdownComponent, optionList: string[], selectedOption: string, clearFirst: boolean): void {
        debugger;
        if (clearFirst)
            dropdown.selectEl.empty();
    
        optionList.forEach((option) => {
            dropdown.addOption(option, option)
        });
    }

    disable(settings: Array<Setting>): void {
        settings.forEach((setting: Setting) => {
            setting.setDisabled(true);
        })
    }

    hide(settings:Array<Setting>): void {
        settings.forEach((setting: Setting) => {
            setting.settingEl.hide();
        })
    }

    open(): void {
        super.open();
    }

    showCurrentValues(indexCard: IPlanningIndexCard): void {

        (this.nameSection.components[zerothItem] as TextComponent).setValue(indexCard.name);
        (this.categoryTagSection.components[zerothItem] as DropdownComponent).setValue(indexCard.categoryTag);
        (this.statusTagSection.components[zerothItem] as DropdownComponent).setValue(indexCard.statusTag);

        (this.targetDateSection.components[zerothItem] as TextComponent)
            .setValue((indexCard.targetDate != nullDate) ? dateFormatter(indexCard.targetDate) : emptyString);

        (this.expectedDateSection.components[zerothItem] as TextComponent)
            .setValue((indexCard.expectedDate != nullDate) ? dateFormatter(indexCard.expectedDate) : emptyString);

        (this.completedDateSection.components[zerothItem] as TextComponent)
            .setValue((indexCard.completedDate != nullDate) ? dateFormatter(indexCard.completedDate) : emptyString);
    }

    updateIndexCard(indexCard: IPlanningIndexCard): void {
        indexCard.name = (this.nameSection !== undefined) 
            ? (this.nameSection.components[zerothItem] as TextComponent).getValue() : emptyString;

        indexCard.categoryTag = (this.categoryTagSection.components.length > 0)
            ? (this.categoryTagSection.components[zerothItem] as DropdownComponent).getValue() : emptyString;

        indexCard.statusTag = (this.statusTagSection.components.length > 0)
            ? (this.statusTagSection.components[zerothItem] as DropdownComponent).getValue() : emptyString ;
                
        if (this.targetDateSection !== undefined) {
            const targetDate = (this.targetDateSection.components[zerothItem] as TextComponent).getValue();
            indexCard.targetDate = (targetDate != emptyString) ? new Date(targetDate) : new Date(nullDateTimestamp);
        }
                
        if (this.expectedDateSection.components.length > 0) {
            const expectedDate = (this.expectedDateSection.components[zerothItem] as TextComponent).getValue();
            indexCard.expectedDate = (expectedDate != emptyString) ? new Date(expectedDate) : new Date(nullDateTimestamp);
        }
                
        if (this.completedDateSection.components.length > 0) {
            const completedDate = (this.completedDateSection.components[zerothItem] as TextComponent).getValue();
            indexCard.completedDate = (completedDate != emptyString) ? new Date(completedDate) : new Date(nullDateTimestamp);
        }
    }
}