import { FileManager, TFile } from "obsidian";
import { GoalIndexCard } from "../indexcards/goalIndexCard";
import { dateFormatter, flattenedTags } from "src/utils/utils";
import { emptyString, WrapperType } from "../types/types";
import { FormFieldId as field, FormFieldId, resolveField } from "../webbuilder/formFieldTypes";
import { HtmlTags } from "../webbuilder/htmlElementTypes";
import { NodeBuilder } from "../webbuilder/nodebuilder";
import { HtmlAttributes as attrib, HtmlAttributes } from "../webbuilder/htmlAttributeTypes";
import { UserMessageId } from "../i18n";
import { ICreateICForm } from "../types/interfaces";
import { AttribSettingsId } from "../webbuilder/AtrribSettingsTypes";
import { Settings } from "src/settings/Settings";

export enum DisplayMode {
    INDEX_CARD_MODE,
    CREATE_MODE,
}

export class CreateGoalForm implements ICreateICForm {

    buildForm(parent: HTMLElement): void
    {
        const nodeBuilder = new NodeBuilder();

    // Put all of the form together regardless of how it is being used
        try {
/*          const containerDiv1 = nodeBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.ID_IC_GOAL_INDEX_CARD],
            ]).appendChild(nodeBuilder.createElement(HtmlTags.DIV) as HTMLDivElement)
                .appendChild(
                    nodeBuilder.createElement(HtmlTags.LABEL, [
                        [attrib.ID, field.ID_IC_GOAL_NAME_LABEL],
                        [attrib.INNERTEXT, UserMessageId.GOAL_NAME_LABEL],
                    ])
                ).parentElement?.appendChild(
                    nodeBuilder.createElement(HtmlTags.INPUT, [
                        [attrib.ID, field.ID_CF_GOAL_NAME]
                    ])
                );
            if (containerDiv1 !== undefined)
                parent?.appendChild(containerDiv1);
*/
            const containerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.ID_IC_GOAL_INDEX_CARD],
            ]);

            /*==== Create the GoalName section ====*/
            const goalNameContainerDiv = nodeBuilder.createElement(HtmlTags.DIV);
            goalNameContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.ID_IC_GOAL_NAME_LABEL],
                    [attrib.INNERTEXT, UserMessageId.GOAL_NAME_LABEL],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.INPUT, [
                    [attrib.ID, field.ID_IC_GOAL_NAME],
                    [attrib.TYPE, AttribSettingsId.TEXT]
                ])
            );
            containerDiv?.appendChild(goalNameContainerDiv);

            /*==== Create the CategoryTag section ====*/
            const goalCategoryTagContainerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, FormFieldId.ID_IC_GOAL_CATEGORY_TAG_SECTION],
            ]);
            goalCategoryTagContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.ID_IC_GOAL_CATEGORY_TAG_LABEL],
                    [attrib.INNERTEXT, UserMessageId.CATEGORY_TAG_LABEL],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.SELECT, [
                    [attrib.ID, field.ID_IC_GOAL_CATEGORY_TAG]
                ])
            );
            containerDiv?.appendChild(goalCategoryTagContainerDiv);
 
            /*==== Create the StatusTag section ====*/
            const goalStatusTagContainerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, FormFieldId.ID_IC_GOAL_STATUS_TAG_SECTION],
            ]);
            goalStatusTagContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.ID_IC_GOAL_STATUS_TAG_LABEL],
                    [attrib.INNERTEXT, UserMessageId.STATUS_TAG_LABEL],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.SELECT, [
                    [attrib.ID, field.ID_IC_GOAL_STATUS_TAG]
                ])
            );
            containerDiv?.appendChild(goalStatusTagContainerDiv);

            /*==== Create the TargetDate section ====*/
            const goalTargetDateContainerDiv = nodeBuilder.createElement(HtmlTags.DIV);
            goalTargetDateContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.ID_IC_GOAL_TARGET_DATE_LABEL],
                    [attrib.INNERTEXT, UserMessageId.TARGET_DATE_LABEL],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.INPUT, [
                    [attrib.ID, field.ID_IC_GOAL_TARGET_DATE],
                    [attrib.TYPE, AttribSettingsId.DATE],
                ])
            );
            containerDiv?.appendChild(goalTargetDateContainerDiv);

            /*==== Create the ExpectedDate field fragment ====*/
            const goalExpectedDateContainerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, FormFieldId.ID_IC_GOAL_EXPECTED_DATE_SECTION],
            ]);
            goalExpectedDateContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.ID_IC_GOAL_EXPECTED_DATE_LABEL],
                    [attrib.INNERTEXT, UserMessageId.EXPECTED_DATE_LABEL],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.INPUT, [
                    [attrib.ID, field.ID_IC_GOAL_EXPECTED_DATE],
                    [attrib.TYPE, AttribSettingsId.DATE],
                ])
            );
            containerDiv?.appendChild(goalExpectedDateContainerDiv);

            /*==== Create the CompletedDate field fragment ====*/
            const goalCompletedDateContainerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, FormFieldId.ID_IC_GOAL_COMPLETED_DATE_SECTION],
            ]);
            goalCompletedDateContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.LABEL, [
                    [attrib.ID, field.ID_IC_GOAL_COMPLETED_DATE_LABEL],
                    [attrib.INNERTEXT, UserMessageId.COMPLETED_DATE_LABEL],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.INPUT, [
                 [attrib.ID, field.ID_IC_GOAL_COMPLETED_DATE],
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
                    [attrib.ID, field.ID_IC_GOAL_USER_TAGS],
                ])
            );
            containerDiv?.appendChild(goalUserTagsContainerDiv);

            /*==== Create the Buttons section ====*/
            const goalButtonsContainerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
                [attrib.ID, field.ID_IC_GOAL_BUTTONS]
            ]);
            goalButtonsContainerDiv.appendChild(
                nodeBuilder.createElement(HtmlTags.BUTTON, [
                    [attrib.ID, field.ID_IC_GOAL_CREATE_BUTTON],
                    [attrib.INNERTEXT, UserMessageId.GOAL_CREATE_BUTTON_TEXT],
                ])
            ).parentElement?.appendChild(
                nodeBuilder.createElement(HtmlTags.BUTTON, [
                    [attrib.ID, field.ID_IC_GOAL_CREATE_BUTTON],
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
        const nodeBuilder: NodeBuilder = new NodeBuilder();

        // Add the CategoryTag options
        const goalCategoryTag: HTMLSelectElement = document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement
        settings.categoryTags.forEach(
            (tag: string) => {
                const element = nodeBuilder.createElement(HtmlTags.OPTION, [
                        [HtmlAttributes.INNERTEXT, tag],
                ]) as HTMLOptionElement;
                goalCategoryTag.appendChild(element);
            }
        )

        // Hide the Status Tag section
        const statusTagsDiv = document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_STATUS_TAG_SECTION, WrapperType.NONE));
        nodeBuilder.setAttributes(statusTagsDiv, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);

        const expectedDateSectionDiv = document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_EXPECTED_DATE_SECTION, WrapperType.NONE));
        nodeBuilder.setAttributes(expectedDateSectionDiv, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);

        const completedDateSectionDiv = document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_COMPLETED_DATE_SECTION, WrapperType.NONE));
        nodeBuilder.setAttributes(completedDateSectionDiv, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);
        }
    
    async configureForIndexCardMode(settings: Settings, fileManager: FileManager, file: TFile): Promise<void> {
        const nodeBuilder: NodeBuilder = new NodeBuilder();
        const goalIndexCard = new GoalIndexCard();
 
        // Add the CategoryTag options
        const goalCategoryTag: HTMLSelectElement = document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement
        settings.categoryTags.forEach(
            (tag: string) => {
                const element = nodeBuilder.createElement(HtmlTags.OPTION, [
                        [HtmlAttributes.INNERTEXT, tag],
                ]) as HTMLOptionElement;
                goalCategoryTag.appendChild(element);
            }
        )

        // Add the StatusTag options
        const goalStatusTag: HTMLSelectElement = document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_STATUS_TAG, WrapperType.NONE)) as HTMLSelectElement
        settings.statusTags.forEach(
            (tag: string) => {
                const element = nodeBuilder.createElement(HtmlTags.OPTION, [
                        [HtmlAttributes.INNERTEXT, tag],
                ]) as HTMLOptionElement;
                goalStatusTag.appendChild(element);
            }
        )

        // Hide the Create and Cancel buttons
        nodeBuilder.setElementAttributes(FormFieldId.ID_IC_GOAL_BUTTONS, [[HtmlAttributes.CLASS,  FormFieldId.STYLE_DIV_HIDDEN]]);

        // Populate the goal index card
        await fileManager.processFrontMatter(file, (frontmatter) => {
            goalIndexCard.load(frontmatter);
        });

        // Populate the form fields and make them read-only
        nodeBuilder.setElementAttributes(field.ID_IC_GOAL_NAME, [
            [HtmlAttributes.VALUE, goalIndexCard.name],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.ID_IC_GOAL_CATEGORY_TAG, [
            [HtmlAttributes.VALUE, goalIndexCard.categoryTag],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.ID_IC_GOAL_STATUS_TAG, [
            [HtmlAttributes.VALUE, goalIndexCard.statusTag],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.ID_IC_GOAL_TARGET_DATE, [
            [HtmlAttributes.VALUE, (goalIndexCard.targetDate != null) ? dateFormatter(goalIndexCard.targetDate) : emptyString],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.ID_IC_GOAL_EXPECTED_DATE, [
            [HtmlAttributes.VALUE, (goalIndexCard.expectedDate != null) ? dateFormatter(goalIndexCard.expectedDate) : emptyString],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.ID_IC_GOAL_COMPLETED_DATE, [
            [HtmlAttributes.VALUE, (goalIndexCard.completedDate != null) ? dateFormatter(goalIndexCard.completedDate) : emptyString],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.ID_IC_GOAL_USER_TAGS, [
            [HtmlAttributes.VALUE, flattenedTags(goalIndexCard.userTags)],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
    }
}