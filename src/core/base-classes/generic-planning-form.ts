import {
    AbstractTextComponent, App, DropdownComponent, FileManager, Setting, TFile
} from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { AttribSettingsId } from '../form-builder/atrrib-settings-types';
import { FormBuilderr } from '../form-builder/form-builder';
import { FormFieldId as field } from '../form-builder/form-field-types';
import { HtmlAttributes as attrib } from '../form-builder/html-attribute-types';
import { HtmlTags } from '../form-builder/html-element-types';
import { UserMessageId } from '../form-builder/i18n';
import { IPlanningIndexCard } from '../types/interfaces/i-planning-index-card';

/* eslint-disable no-magic-numbers, @typescript-eslint/no-magic-numbers */
export enum DisplayMode {
    INDEX_CARD_MODE = 0,
    CREATE_MODE = 1,
}
/* eslint-enable no-magic-numbers, @typescript-eslint/no-magic-numbers */

export interface IPlanningForm {
    buildForm(parent: HTMLElement) : void;
    configureForCreateMode(indexCard: IPlanningIndexCard): void;
    configureForIndexCardMode(indexCard: IPlanningIndexCard, fileManager: FileManager, file: TFile): Promise<void>;
    updateIndexCard(indexCard: IPlanningIndexCard): void;
}

export abstract class GenericPlanningForm implements IPlanningForm {
    protected app: App;
    protected settings: Settings;
    private nameSection?: Setting;
    private parentSection?: Setting;
    private subtaskToggleSection?: Setting;
    private categoryTagSection?: Setting;
    private statusTagSection?: Setting;
    private targetDateSection?: Setting;
    private expectedDateSection?: Setting;
    private completedDateSection?: Setting;
    private userTagsSection?: Setting;

    constructor(app: App, settings: Settings) {
        this.app = app;
        this.settings = settings;
    }
    
    buildForm(parent: HTMLElement): void{
        const formBuilder = new FormBuilderr();

        // Put all of the form together regardless of how it is being used
        try {
            this.nameSection = new Setting(parent)
                .setName("Enter new goal name")
                .setDesc("Also used as the title and filename")
                .addText(text =>
                    text
                );
                this.nameSection.settingEl.id = 'pl-name-div';
   
            this.parentSection = new Setting(parent)
                .setName("Select the parent goal")
                .setDesc("Identifies the nature of the goal")
                .addDropdown(DropdownComponent =>
                    DropdownComponent
                        .addOption('something', '#planning/goal')
                );

            this.subtaskToggleSection = new Setting(parent)
                .setName("Some name or other")
                .setDesc("This is it's description")
                .addToggle(toggle => 
                    toggle
                        .setValue(true)
                );
                this.subtaskToggleSection.settingEl.id = 'toggle-setting';

             this.categoryTagSection = new Setting(parent)
                .setName("Select goal category")
                .setDesc("Identifies the nature of the goal")
                .addDropdown(DropdownComponent =>
                    DropdownComponent
                        .addOption('someting', '#planning/goal')
                );

            this.statusTagSection = new Setting(parent)
                .setName("Select goal category")
                .setDesc("Identifies the nature of the goal")
                .addDropdown(DropdownComponent =>
                    DropdownComponent
                        .addOptions({'something': '#status/inbox'})
                );

            this.targetDateSection = new Setting(parent)
                .setName("Target Date")
                .setDesc("Date by which the Goal should be completed")
                .addText(text => 
                    text.inputEl.setAttr('type', 'date')
                );

            this.expectedDateSection = new Setting(parent)
                .setName("Expected Date")
                .setDesc("Earliest date the Goal is now expected to be completed")
                .addText(text =>
                    text.inputEl.setAttribute('type', 'date')
                );

            this.completedDateSection = new Setting(parent)
                .setName("Completion Date")
                .setDesc("The date the Goal was actually completed")
                .addText(text =>
                    text.inputEl.setAttribute('type', 'date')
                );

            const containerDiv = formBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_INDEX_CARD],
            ]);

            /*==== Create the GoalName section ====*/
            const nameContainerDiv = formBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_NAME_SECTION],
            ]);
            nameContainerDiv.appendChild(
                formBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.GF_NAME_LABEL],
                    [attrib.INNERTEXT, UserMessageId.GOAL_NAME_LABEL],
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.INPUT, [
                    [attrib.ID, field.GF_NAME],
                    [attrib.TYPE, AttribSettingsId.TEXT]
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.I, [
                    [attrib.ID, field.GF_NAME_ICON],
                    [attrib.ICON, AttribSettingsId.LOCK],
                ])
            );
            containerDiv?.appendChild(nameContainerDiv);

            /*==== Create the subtask checkbox section ====*/
            const subtaskCheckboxDiv = formBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_SUBTASK_CHECKBOX_SECTION],
                [attrib.CLASS, "setting-item-mod-toggle"],
            ])
            subtaskCheckboxDiv.appendChild(
                formBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.INNERTEXT, UserMessageId.SUBTASK_CHECKBOX_LABEL],
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.INPUT, [
                    [attrib.ID, field.GF_SUBTASK_CHECKBOX],
                    [attrib.TYPE, AttribSettingsId.CHECKBOX],
                ])
            );
            containerDiv.appendChild(subtaskCheckboxDiv);

            /*==== Create the Member of section ====*/
            const memberOfContainerDiv = formBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_MEMBER_OF_SECTION]
            ]);
            memberOfContainerDiv.appendChild(
                formBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.GF_MEMBER_OF_LABEL],
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.SELECT,[
                    [attrib.ID, field.GF_MEMBER_OF_NAME],
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.I, [
                    [attrib.ID, field.GF_MEMBER_OF_ICON],
                    [attrib.ICON, AttribSettingsId.LOCK]
                ])
            );
            containerDiv?.appendChild(memberOfContainerDiv);

            /*==== Create the CategoryTag section ====*/
            const categoryTagContainerDiv = formBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_CATEGORY_TAG_SECTION],
            ]);
            categoryTagContainerDiv.appendChild(
                formBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.GF_CATEGORY_TAG_LABEL],
                    [attrib.INNERTEXT, UserMessageId.CATEGORY_TAG_LABEL],
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.SELECT, [
                    [attrib.ID, field.GF_CATEGORY_TAG]
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.I, [
                    [attrib.ID, field.GF_CATEGORY_TAG_ICON],
                    [attrib.ICON, AttribSettingsId.LOCK],
                ])
            );
            containerDiv?.appendChild(categoryTagContainerDiv);
 
            /*==== Create the StatusTag section ====*/
            const statusTagContainerDiv = formBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_STATUS_TAG_SECTION],
            ]);
            statusTagContainerDiv.appendChild(
                formBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.GF_STATUS_TAG_LABEL],
                    [attrib.INNERTEXT, UserMessageId.STATUS_TAG_LABEL],
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.SELECT, [
                    [attrib.ID, field.GF_STATUS_TAG]
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.I, [
                    [attrib.ID, field.GF_STATUS_TAG_ICON],
                    [attrib.ICON, AttribSettingsId.LOCK],
                ])
            );
            containerDiv?.appendChild(statusTagContainerDiv);

            /*==== Create the TargetDate section ====*/
            const targetDateContainerDiv = formBuilder.createElement(HtmlTags.DIV);
            targetDateContainerDiv.appendChild(
                formBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.GF_TARGET_DATE_LABEL],
                    [attrib.INNERTEXT, UserMessageId.TARGET_DATE_LABEL],
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.INPUT, [
                    [attrib.ID, field.GF_TARGET_DATE],
                    [attrib.TYPE, AttribSettingsId.DATE],
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.I, [
                    [attrib.ID, field.GF_TARGET_DATE_ICON],
                    [attrib.ICON, AttribSettingsId.LOCK],
                ])
            );
            containerDiv?.appendChild(targetDateContainerDiv);

            /*==== Create the ExpectedDate field fragment ====*/
            const expectedDateContainerDiv = formBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_EXPECTED_DATE_SECTION],
            ]);
            expectedDateContainerDiv.appendChild(
                formBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.GF_EXPECTED_DATE_LABEL],
                    [attrib.INNERTEXT, UserMessageId.EXPECTED_DATE_LABEL],
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.INPUT, [
                    [attrib.ID, field.GF_EXPECTED_DATE],
                    [attrib.TYPE, AttribSettingsId.DATE],
                ])
            );
            containerDiv?.appendChild(expectedDateContainerDiv);

            /*==== Create the CompletedDate field fragment ====*/
            const completedDateContainerDiv = formBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_COMPLETED_DATE_SECTION],
            ]);
            completedDateContainerDiv.appendChild(
                formBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.GF_COMPLETED_DATE_LABEL],
                    [attrib.INNERTEXT, UserMessageId.COMPLETED_DATE_LABEL],
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.INPUT, [
                 [attrib.ID, field.GF_COMPLETED_DATE],
                 [attrib.TYPE, AttribSettingsId.DATE],
                ])
            );
            containerDiv?.appendChild(completedDateContainerDiv);

            /*==== Create UserTags field section ====*/
            const userTagsContainerDiv = formBuilder.createElement(HtmlTags.DIV);
            userTagsContainerDiv.appendChild(
                formBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.INNERTEXT, UserMessageId.USER_TAGS_LABEL],
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.INPUT, [
                    [attrib.ID, field.GF_USER_TAGS],
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.I, [
                    [attrib.ID, field.GF_USER_TAGS_ICON],
                    [attrib.ICON, AttribSettingsId.LOCK],
                ])
                
            )
            containerDiv?.appendChild(userTagsContainerDiv);

            /*==== Create the Buttons section ====*/
            const buttonsContainerDiv = formBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_BUTTONS]
            ]);
            buttonsContainerDiv.appendChild(
                formBuilder.createElement(HtmlTags.BUTTON, [
                    [attrib.ID, field.GF_CREATE_BUTTON],
                    [attrib.INNERTEXT, UserMessageId.GOAL_CREATE_BUTTON_TEXT],
                ])
            ).parentElement?.appendChild(
                formBuilder.createElement(HtmlTags.BUTTON, [
                    [attrib.ID, field.GF_CANCEL_BUTTON],
                    [attrib.INNERTEXT, UserMessageId.CANCEL_BUTTON_TEXT],
                ])
            );
            containerDiv?.appendChild(buttonsContainerDiv);

            if (containerDiv !== undefined) {
            parent.appendChild(containerDiv);
            }
        }
        catch (DOMNodeBuildError) {
            //TODO Determine what to do here
            alert("DOMNodeBuildError Exception");
            return;
        }

    }
    
    configureForCreateMode(indexCard: IPlanningIndexCard): void {

    }

    async configureForIndexCardMode(indexCard: IPlanningIndexCard, fileManager: FileManager, file: TFile): Promise<void> {

    }

    updateIndexCard(indexCard: IPlanningIndexCard): void {

    }
}

