import {
    App, CachedMetadata, DropdownComponent, FrontMatterCache, Modal, Setting, TAbstractFile,
    TextComponent, TFile, TFolder, Vault
} from 'obsidian';
import { Settings } from 'src/settings/Settings';
import { dateFormatter } from 'src/utils/utils';

import { translate, UserMessageId } from '../types/i18n';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { IPlanningIndexCard } from '../types/interfaces/i-planning-index-card';
import { emptyString, IDictionary, zerothItem } from '../types/types';
import { fieldNames } from './planning-index-card';

export abstract class PlanningModal extends Modal implements IModalForm {
    public app: App;
    protected settings: Settings;
    private _nameSection?: Setting;
    protected _parentSection?: Setting;
    protected _subtaskToggleSection?: Setting;
    private _categoryTagSection?: Setting;
    private _statusTagSection?: Setting;
    private _targetDateSection?: Setting;
    private _expectedDateSection?: Setting;
    private _completedDateSection?: Setting;
    private _userTagsSection?: Setting;
    private _buttonsSection?: Setting;

    constructor(app: App, settings: Settings) {
        super(app);
        this.app = app;
        this.settings = settings;
    }

    get nameSection(): Setting | undefined {
        return this._nameSection;
    }

    get parentSection(): Setting | undefined{
        return this._parentSection;
    }

    get subtaskToggleSection(): Setting | undefined {
        return this._subtaskToggleSection;
    }

    get categoryTagSection(): Setting | undefined {
        return this._categoryTagSection;
    }

    get statusTagSection(): Setting | undefined {
        return this._statusTagSection;
    }

    get targetDateSection(): Setting | undefined {
        return this._targetDateSection;
    }

    get expectedDateSection(): Setting | undefined {
        return this._expectedDateSection;
    }

    get completedDateSection(): Setting | undefined{
        return this._completedDateSection;
    }

    get userTagsSection(): Setting | undefined {
        return this._userTagsSection;
    }
    get buttonsSection(): Setting | undefined {
        return this._buttonsSection;
    }
    
    protected addNames(dropdown: DropdownComponent, rootPath: string, searchTag: string): void {
        const rootFolder: TFolder | null = this.app.vault.getFolderByPath(rootPath);
    
        if (rootFolder == null)
            return;
    
        Vault.recurseChildren(rootFolder, (child:TAbstractFile) => {
            // Make sure what we have is a file and not a folder. The latter is ignored
            if (child instanceof TFile) {
                // Get the frontmatter for the file
                const cache: CachedMetadata | null = this.app.metadataCache.getCache((child.path));
                const frontmatter: FrontMatterCache | undefined = cache?.frontmatter as IDictionary<string>;
                if (frontmatter[fieldNames.IDENT_TAG_FIELD] == searchTag) {
                    dropdown.addOption(frontmatter[fieldNames.NAME_FIELD], frontmatter[fieldNames.NAME_FIELD]);
                }
            }
        });
    }

    private addOptions(dropdown: DropdownComponent, optionList: string[], selectedOption: string, clearFirst: boolean): void {
        if (clearFirst)
            dropdown.selectEl.empty();
    
        let index: number = 0;
        optionList.forEach((option) => {
            dropdown.addOption(option, option)
            if (option == selectedOption)
//                option.selectedIndex = index;
            index++;
        });
    }

    buildForm(parent: HTMLElement): void{
        // Put all of the form together regardless of how it is being used
        this._nameSection = new Setting(parent)
            .addText(text =>
                text
            );

        // Create a parentSection dropdown setting as a hierarchical placeholder.
        // It will be initialised as required in a derived modal 
        this._parentSection = new Setting(parent);

        // Ditto the toggle switch
        this._subtaskToggleSection = new Setting(parent);

        this._categoryTagSection = new Setting(parent)
            .addDropdown(dropdownComponent =>
                this.addOptions(dropdownComponent, this.settings.categoryTags, '', true)
        );

        this._statusTagSection = new Setting(parent)
            .addDropdown(dropdownComponent =>
                this.addOptions(dropdownComponent, this.settings.statusTags, '', true)
            )

        this._targetDateSection = new Setting(parent)
            .addText(text =>   
                text.inputEl.setAttr('type', 'date')
            );

        this._expectedDateSection = new Setting(parent)
            .addText(text =>
                text.inputEl.setAttribute('type', 'date')
            );

        this._completedDateSection = new Setting(parent)
            .addText(text =>
                text.inputEl.setAttribute('type', 'date')
            );

        this._buttonsSection = new Setting(parent)
            .addButton(button =>
                button
                    .setButtonText(translate(UserMessageId.CREATE_AND_OPEN_BUTTON_TEXT))
            )
            .addButton(button =>
                button
                    .setButtonText(translate(UserMessageId.CREATE_ONLY_BUTTON_TEXT))
            )
            .addButton(button =>
                button
                    .setButtonText(translate(UserMessageId.CANCEL_BUTTON_TEXT))
            );
    }

    disable(settings: Array<Setting | undefined>): void {
        settings.forEach((setting: Setting | undefined) => {
            setting?.setDisabled(true);
        })
    }

    hide(settings:Array<Setting | undefined>): void {
        settings.forEach((setting: Setting | undefined) => {
            setting?.settingEl.hide();
        })
    }

    open(): void {
        super.open();
    }

    showCurrentValues(indexCard: IPlanningIndexCard): void {
        if (this.nameSection !== undefined)
            (this.nameSection.components[zerothItem] as TextComponent).setValue(indexCard.name);

        if (this.categoryTagSection !== undefined)
            (this.categoryTagSection.components[zerothItem] as DropdownComponent).setValue(indexCard.categoryTag);

        if (this.statusTagSection !== undefined)
            (this.statusTagSection.components[zerothItem] as DropdownComponent).setValue(indexCard.statusTag);

        if (this.targetDateSection !== undefined && indexCard.targetDate)
            (this.targetDateSection.components[zerothItem] as TextComponent)
            .setValue((indexCard.targetDate != null) ? dateFormatter(indexCard.targetDate) : emptyString);

        if (this.expectedDateSection !== undefined && indexCard.expectedDate)
            (this.expectedDateSection.components[zerothItem] as TextComponent)
            .setValue((indexCard.expectedDate != null) ? dateFormatter(indexCard.expectedDate) : emptyString);

        if (this.completedDateSection !== undefined && indexCard.completedDate)
            (this.completedDateSection.components[zerothItem] as TextComponent)
            .setValue((indexCard.completedDate != null) ? dateFormatter(indexCard.completedDate) : emptyString);
    }

    updateIndexCard(indexCard: IPlanningIndexCard): void {
        indexCard.name = (this.nameSection !== undefined) 
            ? (this.nameSection.components[zerothItem] as TextComponent).getValue() : emptyString;

        indexCard.categoryTag = (this.categoryTagSection !== undefined)
            ? (this.categoryTagSection.components[zerothItem] as DropdownComponent).getValue() : emptyString;

        indexCard.statusTag = (this.statusTagSection !== undefined)
            ? (this.statusTagSection.components[zerothItem] as DropdownComponent).getValue() : emptyString ;
                
        if (this.targetDateSection !== undefined) {
            const targetDate = (this.targetDateSection.components[zerothItem] as TextComponent).getValue();
            indexCard.targetDate = (targetDate != emptyString) ? new Date(targetDate) : null;
        }
                
        if (this.expectedDateSection !== undefined) {
            const expectedDate = (this.expectedDateSection.components[zerothItem] as TextComponent).getValue();
            indexCard.expectedDate = (expectedDate != emptyString) ? new Date(expectedDate) : null;
        }
                
        if (this.completedDateSection !== undefined) {
            const completedDate = (this.completedDateSection.components[zerothItem] as TextComponent).getValue();
            indexCard.completedDate = (completedDate != emptyString) ? new Date(completedDate) : null;
        }
    }
}