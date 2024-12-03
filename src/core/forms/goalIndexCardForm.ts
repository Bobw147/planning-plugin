import { FileManager, TFile, Settings } from "obsidian";
import { GoalIndexCard } from "../indexcards/goalIndexCard";
import { dateFormatter, flattenedTags } from "src/utils/utils";
import { emptyString, WrapperType } from "../types/types";
import { FormFieldId as field, FormFieldId, resolveField } from "../webbuilder/formFieldTypes";
import { HtmlTags } from "../webbuilder/htmlElementTypes";
import { NodeBuilder } from "../webbuilder/nodebuilder";
import { HtmlAttributes as attrib, HtmlAttributes } from "../webbuilder/htmlAttributeTypes";;
import { UserMessageId } from "../i18n";
import { InputTypes } from "../webbuilder/inputtypes";

export enum DisplayMode {
    INDEX_CARD_MODE,
    CREATE_MODE,
}

const _goalIndexCardForm = '<div id='+resolveField(field.ID_IC_GOAL_INDEX_CARD, WrapperType.DOUBLE_QUOTE)+' style="border-width: 2px; border-style: solid; border-color: gray;"> \
    <div> \
        <label style="margin-inline: 12px">Goal :</label> \
        <input type="text" id='+resolveField(field.ID_IC_GOAL_NAME, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Category :</label> \
        <input type="text" id='+resolveField(field.ID_IC_GOAL_CATEGORY_TAG, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div style="display:none"> \
        <label style="margin-inline: 12px">Ident :</label> \
        <input type="text" id='+resolveField(field.ID_IC_GOAL_IDENT_TAG, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Status :</label> \
        <input type="text" id='+resolveField(field.ID_IC_GOAL_STATUS_TAG, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Target Date</label> \
        <input type="date" id='+resolveField(field.ID_IC_GOAL_TARGET_DATE, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Anticipated Date</label> \
        <input type="date" id='+resolveField(field.ID_IC_GOAL_EXPECTED_DATE, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Completed Date</label> \
        <input type="date" id='+resolveField(field.ID_IC_GOAL_COMPLETED_DATE, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">User Tags</label> \
        <input type="input" id='+resolveField(field.ID_IC_GOAL_USER_TAGS, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px""> \
    </div> \
<div>'

/**
 * 
 * @param parent 
 * @param mode 
 * @returns 
 What I would like....
 (
 const formBuilder = new FormBuilder()

    formBuilder.createChild(){
    }.createDiv(){
    }.
*/

export function buildGoalIndexCard(parent: HTMLElement, mode: DisplayMode, settings: Settings): void
{
    const nodeBuilder = new NodeBuilder();

    // Put all of the form together regardless of how it is being used
    try {
/*        const containerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
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
                [attrib.TYPE, InputTypes.TEXT]
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
            [HtmlAttributes.ID, FormFieldId.ID_IC_GOAL_STATUS_TAG_SECTION],
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
                [attrib.TYPE, InputTypes.DATE],
            ])
        );
        containerDiv?.appendChild(goalTargetDateContainerDiv);

        /*==== Create the ExpectedDate field fragment ====*/
        const goalExpectedDateContainerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
            [HtmlAttributes.ID, FormFieldId.ID_IC_GOAL_EXPECTED_DATE_SECTION],
        ]);
        goalExpectedDateContainerDiv.appendChild(
            nodeBuilder.createElement(HtmlTags.LABEL, [
                [attrib.ID, field.ID_IC_GOAL_EXPECTED_DATE_LABEL],
                [attrib.INNERTEXT, UserMessageId.EXPECTED_DATE_LABEL],
            ])
        ).parentElement?.appendChild(
            nodeBuilder.createElement(HtmlTags.INPUT, [
                [attrib.ID, field.ID_IC_GOAL_EXPECTED_DATE],
                [attrib.TYPE, InputTypes.DATE],
            ])
        );
        containerDiv?.appendChild(goalExpectedDateContainerDiv);

        /*==== Create the CompletedDate field fragment ====*/
        const goalCompletedDateContainerDiv = nodeBuilder.createElement(HtmlTags.DIV, [
            [HtmlAttributes.ID, FormFieldId.ID_IC_GOAL_COMPLETED_DATE_SECTION],
        ]);
        goalCompletedDateContainerDiv.appendChild(
            nodeBuilder.createElement(HtmlTags.LABEL, [
                [attrib.ID, field.ID_IC_GOAL_COMPLETED_DATE_LABEL],
                [attrib.INNERTEXT, UserMessageId.COMPLETED_DATE_LABEL],
            ])
        ).parentElement?.appendChild(
            nodeBuilder.createElement(HtmlTags.INPUT, [
             [attrib.ID, field.ID_IC_GOAL_COMPLETED_DATE],
             [attrib.TYPE, InputTypes.DATE],
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
            [HtmlAttributes.ID, field.ID_IC_GOAL_BUTTONS]
        ]);
        goalButtonsContainerDiv.appendChild(
            nodeBuilder.createElement(HtmlTags.BUTTON, [
                [HtmlAttributes.ID, field.ID_CF_GOAL_CREATE_BUTTON],
             [attrib.INNERTEXT, UserMessageId.GOAL_CREATE_BUTTON_TEXT],
            ])
        ).parentElement?.appendChild(
            nodeBuilder.createElement(HtmlTags.BUTTON, [
                [HtmlAttributes.ID, field.ID_CF_GOAL_CREATE_BUTTON],
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
    
export function configureForCreateMode(settings: Settings): void {
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
    nodeBuilder.setAttribute(statusTagsDiv, HtmlAttributes.CLASS, resolveField(FormFieldId.STYLE_DIV_HIDDEN, WrapperType.NONE));

    const expectedDateSectionDiv = document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_EXPECTED_DATE_SECTION, WrapperType.NONE));
    nodeBuilder.setAttribute(expectedDateSectionDiv, HtmlAttributes.CLASS, resolveField(FormFieldId.STYLE_DIV_HIDDEN, WrapperType.NONE));

    const completedDateSectionDiv = document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_COMPLETED_DATE_SECTION, WrapperType.NONE));
    nodeBuilder.setAttribute(completedDateSectionDiv, HtmlAttributes.CLASS, resolveField(FormFieldId.STYLE_DIV_HIDDEN, WrapperType.NONE));
}
    
function configureForIndexCardMode(container: HTMLElement,settings: Settings): void {

}

export function goalIndexCardForm() : string {
    return _goalIndexCardForm;
}

export async function populateGoalIndexCardForm(fileManager: FileManager, file: TFile): Promise<void> {
    const goalIndexCard = new GoalIndexCard();

    // Populate the goal index card
    await fileManager.processFrontMatter(file, (frontmatter) => {
        goalIndexCard.load(frontmatter);
    });

    // Populate the form fields
    (document.getElementById(resolveField(field.ID_IC_GOAL_NAME, WrapperType.NONE)) as HTMLInputElement).value = goalIndexCard.name;
    (document.getElementById(resolveField(field.ID_IC_GOAL_CATEGORY_TAG, WrapperType.NONE)) as HTMLInputElement).value = goalIndexCard.categoryTag;
    (document.getElementById(resolveField(field.ID_IC_GOAL_IDENT_TAG, WrapperType.NONE)) as HTMLInputElement).value = goalIndexCard.identTag;
    (document.getElementById(resolveField(field.ID_IC_GOAL_STATUS_TAG, WrapperType.NONE)) as HTMLInputElement).value = goalIndexCard.statusTag;
    (document.getElementById(resolveField(field.ID_IC_GOAL_TARGET_DATE, WrapperType.NONE)) as HTMLInputElement).value = (goalIndexCard.targetDate != null) ? dateFormatter(goalIndexCard.targetDate) : emptyString;
    (document.getElementById(resolveField(field.ID_IC_GOAL_EXPECTED_DATE, WrapperType.NONE)) as HTMLInputElement).value = (goalIndexCard.expectedDate != null) ? dateFormatter(goalIndexCard.expectedDate) : emptyString;
    (document.getElementById(resolveField(field.ID_IC_GOAL_COMPLETED_DATE, WrapperType.NONE)) as HTMLInputElement).value = (goalIndexCard.completedDate != null) ? dateFormatter(goalIndexCard.completedDate) : emptyString;
    (document.getElementById(resolveField(field.ID_IC_GOAL_USER_TAGS, WrapperType.NONE)) as HTMLInputElement).value = flattenedTags(goalIndexCard.userTags);
}
