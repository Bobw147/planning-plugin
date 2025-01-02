import {
    AbstractTextComponent, App, DropdownComponent, FileManager, Setting, TFile
} from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { AttribSettingsId } from '../form-builder/atrrib-settings-types';
import { FormBuilderr } from '../form-builder/form-builder';
import { FormFieldId as field } from '../form-builder/form-field-types';
import { HtmlAttributes as attrib } from '../form-builder/html-attribute-types';
import { HtmlTags } from '../form-builder/html-element-types';
import { UserMessageId } from '../types/i18n';
import { IPlanningIndexCard } from '../types/interfaces/i-planning-index-card';

/* eslint-disable no-magic-numbers, @typescript-eslint/no-magic-numbers */
export enum DisplayMode {
    INDEX_CARD_MODE = 0,
    CREATE_MODE = 1,
}
/* eslint-enable no-magic-numbers, @typescript-eslint/no-magic-numbers */

export abstract class GenericPlanningForm implements IPlanningForm {
    protected app: App;
    protected settings: Settings;
    private _nameSection?: Setting;
    private _parentSection?: Setting;
    private _subtaskToggleSection?: Setting;
    private _categoryTagSection?: Setting;
    private _statusTagSection?: Setting;
    private _targetDateSection?: Setting;
    private _expectedDateSection?: Setting;
    private _completedDateSection?: Setting;
    private _userTagsSection?: Setting;
    private _buttonsSection?: Setting;

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

    constructor(app: App, settings: Settings) {
        this.app = app;
        this.settings = settings;
    }
    
    buildForm(parent: HTMLElement): void{
        // Put all of the form together regardless of how it is being used
        this._nameSection = new Setting(parent)
            .setName("Enter new goal name")
            .setDesc("Also used as the title and filename")
            .addText(text =>
                text
            );
            this._nameSection.settingEl.id = 'pl-name-div';
   
        this._parentSection = new Setting(parent)
            .setName("Select the parent goal")
            .setDesc("Identifies the nature of the goal")
            .addDropdown(DropdownComponent =>
                DropdownComponent
                    .addOption('something', '#planning/goal')
            );

        this._subtaskToggleSection = new Setting(parent)
            .setName("Some name or other")
            .setDesc("This is it's description")
            .addToggle(toggle => 
                toggle
                    .setValue(true)
        );
        this._subtaskToggleSection.settingEl.id = 'toggle-setting';

        this._categoryTagSection = new Setting(parent)
            .setName("Select goal category")
            .setDesc("Identifies the nature of the goal")
            .addDropdown(dropdownComponent =>
                this.addOptions(dropdownComponent, this.settings.categoryTags, '', true)
        );

        this._statusTagSection = new Setting(parent)
            .setName("Select goal category")
            .setDesc("Identifies the nature of the goal")
            .addDropdown(dropdownComponent =>
                this.addOptions(dropdownComponent, this.settings.statusTags, '', true)
            )

        this._targetDateSection = new Setting(parent)
            .setName("Target Date")
            .setDesc("Date by which the Goal should be completed")
            .addText(text =>   
                text.inputEl.setAttr('type', 'date')
            );

        this._expectedDateSection = new Setting(parent)
            .setName("Expected Date")
            .setDesc("Earliest date the Goal is now expected to be completed")
            .addText(text =>
                text.inputEl.setAttribute('type', 'date')
            );

        this._completedDateSection = new Setting(parent)
            .setName("Completion Date")
            .setDesc("The date the Goal was actually completed")
            .addText(text =>
                text.inputEl.setAttribute('type', 'date')
            );

        this._buttonsSection = new Setting(parent)
            .addButton(button =>
                button.setButtonText('Create & Open')
            )
            .addButton(button =>
                button.setButtonText('Create only')
            )
            .addButton(button =>
                button.setButtonText('Cancel')
            );
    }

    addOptions(dropdown: DropdownComponent, optionList: string[], selectedOption: string, clearFirst: boolean):void {
        if (clearFirst)
            dropdown.selectEl.empty();
    
        let index: number = 0;
        optionList.forEach((option) => {
            dropdown.addOption(option, option)
            if (option == selectedOption)
//                selectElement.selectedIndex = index;
            index++;
        });
    }

    configureForCreateMode(indexCard: IPlanningIndexCard): void {

    }

    async configureForIndexCardMode(indexCard: IPlanningIndexCard, fileManager: FileManager, file: TFile): Promise<void> {

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

    updateIndexCard(indexCard: IPlanningIndexCard): void {
        indexCard.name = (this.nameSection !== undefined) ? this.nameSection.settingEl.getText() : "";
        indexCard.categoryTag = (this.categoryTagSection !== undefined) ? this.categoryTagSection.settingEl.getText() : "";
        indexCard.statusTag = (this.statusTagSection !== undefined)? this.statusTagSection?.settingEl.getText() : "" ;
                
        indexCard.targetDate = (this.targetDateSection !== undefined && this.targetDateSection.settingEl.getText() != "")
            ? new Date(this.targetDateSection.settingEl.getText()) : null;
        
            indexCard.expectedDate = (this.expectedDateSection !== undefined && this.expectedDateSection.settingEl.getText() != "")
            ? new Date(this.expectedDateSection.settingEl.getText()) : null;
                
            indexCard.completedDate = (this.completedDateSection !== undefined && this.completedDateSection.settingEl.getText() != "")
            ? new Date(this.completedDateSection.settingEl.getText()) : null;
    }
}

