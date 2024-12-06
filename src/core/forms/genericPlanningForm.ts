import { Settings } from "src/settings/Settings";
import { FileManager, TFile } from "obsidian";
import { HtmlTags } from "../webbuilder/htmlElementTypes";
import { NodeBuilder } from "../webbuilder/nodebuilder";
import { HtmlAttributes as attrib } from "../webbuilder/htmlAttributeTypes";
import { FormFieldId as field } from "../webbuilder/formFieldTypes";
import { UserMessageId } from "../i18n";
import { AttribSettingsId } from "../webbuilder/AtrribSettingsTypes";
import { IPlanningIndexCard } from "../indexcards/indexcard";

export enum DisplayMode {
    INDEX_CARD_MODE,
    CREATE_MODE,
}

export interface IPlanningForm {
    mode:DisplayMode;

    buildForm(parent: HTMLElement) : void;
    configureForCreateMode(settings: Settings): void
    configureForIndexCardMode(settings: Settings, fileManager: FileManager, file: TFile): Promise<void>;
    updateIndexCard(indexCard: IPlanningIndexCard): void;
}


export abstract class GenericPlanningForm implements IPlanningForm {
    mode: DisplayMode;

    constructor(displayMode: DisplayMode) {
        this.mode = displayMode;
    }
    
    buildForm(parent: HTMLElement): void{
        const nodeBuilder = new NodeBuilder();

        // Put all of the form together regardless of how it is being used
        try {

            const containerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_INDEX_CARD],
            ]);

            /*==== Create the GoalName section ====*/
            const goalNameContainerDiv = nodeBuilder.createElement(HtmlTags.DIV);
            goalNameContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.GF_NAME_LABEL],
                    [attrib.INNERTEXT, UserMessageId.GOAL_NAME_LABEL],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.INPUT, [
                    [attrib.ID, field.GF_NAME],
                    [attrib.TYPE, AttribSettingsId.TEXT]
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.I, [
                    [attrib.ID, field.GF_NAME_ICON],
                    [attrib.ICON, AttribSettingsId.LOCK],
                    [attrib.CLASS, field.STYLE_DIV_HIDDEN],
                ])
            );
            containerDiv?.appendChild(goalNameContainerDiv);

            /*==== Create the CategoryTag section ====*/
            const goalCategoryTagContainerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_CATEGORY_TAG_SECTION],
            ]);
            goalCategoryTagContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.GF_CATEGORY_TAG_LABEL],
                    [attrib.INNERTEXT, UserMessageId.CATEGORY_TAG_LABEL],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.SELECT, [
                    [attrib.ID, field.GF_CATEGORY_TAG]
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.I, [
                    [attrib.ID, field.GF_CATEGORY_TAG_ICON],
                    [attrib.ICON, AttribSettingsId.LOCK],
                    [attrib.CLASS, field.STYLE_DIV_HIDDEN],
                ])
            );
            containerDiv?.appendChild(goalCategoryTagContainerDiv);
 
            /*==== Create the StatusTag section ====*/
            const goalStatusTagContainerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_STATUS_TAG_SECTION],
            ]);
            goalStatusTagContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.GF_STATUS_TAG_LABEL],
                    [attrib.INNERTEXT, UserMessageId.STATUS_TAG_LABEL],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.SELECT, [
                    [attrib.ID, field.GF_STATUS_TAG]
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.I, [
                    [attrib.ID, field.GF_STATUS_TAG_ICON],
                    [attrib.ICON, AttribSettingsId.LOCK],
                    [attrib.CLASS, field.STYLE_DIV_HIDDEN],
                ])
            );
            containerDiv?.appendChild(goalStatusTagContainerDiv);

            /*==== Create the TargetDate section ====*/
            const goalTargetDateContainerDiv = nodeBuilder.createElement(HtmlTags.DIV);
            goalTargetDateContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.GF_TARGET_DATE_LABEL],
                    [attrib.INNERTEXT, UserMessageId.TARGET_DATE_LABEL],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.INPUT, [
                    [attrib.ID, field.GF_TARGET_DATE],
                    [attrib.TYPE, AttribSettingsId.DATE],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.I, [
                    [attrib.ID, field.GF_STATUS_TAG_ICON],
                    [attrib.ICON, AttribSettingsId.LOCK],
                    [attrib.CLASS, field.STYLE_DIV_HIDDEN],
                ])
            );
            containerDiv?.appendChild(goalTargetDateContainerDiv);

            /*==== Create the ExpectedDate field fragment ====*/
            const goalExpectedDateContainerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_EXPECTED_DATE_SECTION],
            ]);
            goalExpectedDateContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.GF_EXPECTED_DATE_LABEL],
                    [attrib.INNERTEXT, UserMessageId.EXPECTED_DATE_LABEL],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.INPUT, [
                    [attrib.ID, field.GF_EXPECTED_DATE],
                    [attrib.TYPE, AttribSettingsId.DATE],
                ])
            );
            containerDiv?.appendChild(goalExpectedDateContainerDiv);

            /*==== Create the CompletedDate field fragment ====*/
            const goalCompletedDateContainerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_COMPLETED_DATE_SECTION],
            ]);
            goalCompletedDateContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.GF_COMPLETED_DATE_LABEL],
                    [attrib.INNERTEXT, UserMessageId.COMPLETED_DATE_LABEL],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.INPUT, [
                 [attrib.ID, field.GF_COMPLETED_DATE],
                 [attrib.TYPE, AttribSettingsId.DATE],
                ])
            );
            containerDiv?.appendChild(goalCompletedDateContainerDiv);

            /*==== Create UserTags field section ====*/
            const goalUserTagsContainerDiv = nodeBuilder.createElement(HtmlTags.DIV);
            goalUserTagsContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.INNERTEXT, UserMessageId.USER_TAGS_LABEL],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.INPUT, [
                    [attrib.ID, field.GF_USER_TAGS],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.I, [
                    [attrib.ID, field.GF_STATUS_TAG_ICON],
                    [attrib.ICON, AttribSettingsId.LOCK],
                    [attrib.CLASS, field.STYLE_DIV_HIDDEN],
                ])
                
            )
            containerDiv?.appendChild(goalUserTagsContainerDiv);

            /*==== Create the Buttons section ====*/
            const goalButtonsContainerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.GF_BUTTONS]
            ]);
            goalButtonsContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.BUTTON, [
                    [attrib.ID, field.GF_CREATE_BUTTON],
                    [attrib.INNERTEXT, UserMessageId.GOAL_CREATE_BUTTON_TEXT],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.BUTTON, [
                    [attrib.ID, field.GF_CREATE_BUTTON],
                    [attrib.INNERTEXT, UserMessageId.CANCEL_BUTTON_TEXT],
                ])
            );
            containerDiv?.appendChild(goalButtonsContainerDiv);

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
    
    configureForCreateMode(settings: Settings): void {

    }

    async configureForIndexCardMode(settings: Settings, fileManager: FileManager, file: TFile): Promise<void> {

    }
}

