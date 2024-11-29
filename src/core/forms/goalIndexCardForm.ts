import { FileManager, TFile } from "obsidian";
import { GoalIndexCard } from "../indexcards/goalIndexCard";
import { dateFormatter, flattenedTags } from "src/utils/utils";
import { emptyString, WrapperType } from "../types/types";
import { FormFieldId, resolveField } from "../webbuilder/formFieldTypes";
import { HtmlTags, resolveTag } from "../webbuilder/htmlElementTypes";

const _goalIndexCardForm = '<div id='+resolveField(FormFieldId.ID_IC_GOAL_INDEX_CARD, WrapperType.DOUBLE_QUOTE)+' style="border-width: 2px; border-style: solid; border-color: gray;"> \
    <div> \
        <label style="margin-inline: 12px">Goal :</label> \
        <input type="text" id='+resolveField(FormFieldId.ID_IC_GOAL_NAME, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Category :</label> \
        <input type="text" id='+resolveField(FormFieldId.ID_IC_GOAL_CATEGORY_TAG, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div style="display:none"> \
        <label style="margin-inline: 12px">Ident :</label> \
        <input type="text" id='+resolveField(FormFieldId.ID_IC_GOAL_IDENT_TAG, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Status :</label> \
        <input type="text" id='+resolveField(FormFieldId.ID_IC_GOAL_STATUS_TAG, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Target Date</label> \
        <input type="date" id='+resolveField(FormFieldId.ID_IC_GOAL_TARGET_DATE, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Anticipated Date</label> \
        <input type="date" id='+resolveField(FormFieldId.ID_IC_GOAL_EXPECTED_DATE, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Completed Date</label> \
        <input type="date" id='+resolveField(FormFieldId.ID_IC_GOAL_COMPLETED_DATE, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">User Tags</label> \
        <input type="input" id='+resolveField(FormFieldId.ID_IC_GOAL_USER_TAGS, WrapperType.DOUBLE_QUOTE)+' readonly style="margin-bottom: 12px""> \
    </div> \
<div>'

/*
function htmlFactory(elementId: HtmlTags, options: IDictionary<string>) {
    let newElement: HTMLElement;

    switch (elementId) {
        case HtmlTags.DIV:
            newElement = document.createElement(elementId) as HTMLDivElement;
   //         apply_options(, newELement, options)
            return newElement;
            break;

        case HtmlTags.INPUT:
            break;

        case HtmlTags.LABEL:
            break;

        case HtmlTags.OPTION:
            break;

        case HtmlTags.SELECT:
            break;
    }

}
    */
/*
function applyOptions(element: HTMLElement, options: IDictionary<string>)
{
    if (Object.entries(options).length > 0) {
        options.forEach((option) => {
            switch (option)
                case 
        }
    });
}
*/
function buildGoalIndexCard(parent: HTMLElement): void
{
//    const myElement: HTMLDivElement = htmlFactory(HtmlTags.DIV).i;

    const containerDiv = document.createElement(HtmlTags.DIV) as HTMLDivElement;
    containerDiv.id = resolveField(FormFieldId.ID_IC_GOAL_INDEX_CARD, WrapperType.DOUBLE_QUOTE);

    /*==== Create the GoalName input fragment ====*/
    const goalNameDiv = document.createElement(HtmlTags.DIV) as HTMLDivElement;

    // Input field label
    const goalNameLabel = document.createElement(HtmlTags.LABEL) as HTMLLabelElement;
    goalNameLabel.id = resolveField(FormFieldId.ID_IC_GOAL_NAME_LABEL, WrapperType.DOUBLE_QUOTE);
    goalNameDiv.appendChild(goalNameLabel);

    // Input field element
    const goalNameInput = document.createElement(HtmlTags.INPUT) as HTMLInputElement;
    goalNameInput.id = resolveField(FormFieldId.ID_IC_GOAL_NAME, WrapperType.DOUBLE_QUOTE);
    goalNameDiv.appendChild(goalNameInput);
 
    /*==== Create the CategoryTag fragment ====*/
    const goalCategoryTagDiv = document.createElement(HtmlTags.DIV) as HTMLDivElement;

    // Tag label field fragment
    const goalCategoryTabLabel = document.createElement(HtmlTags.LABEL) as HTMLLabelElement;
    goalCategoryTagDiv.appendChild(goalCategoryTabLabel);

    // CategoryTag field fragment

    const goalCategoryTag = document.createElement(HtmlTags.SELECT) as HTMLSelectElement;
    goalCategoryTag.id = resolveField(FormFieldId.ID_IC_GOAL_CATEGORY_TAG, WrapperType.DOUBLE_QUOTE);
    goalCategoryTagDiv.appendChild(goalCategoryTag);

    /*==== Create the StatusTag field fragment ====*/
    const goalStatusTagDiv = document.createElement(HtmlTags.DIV) as HTMLDivElement;

    // Lebel field fragment
    const goalStatusTabLabel = document.createElement(HtmlTags.LABEL) as HTMLLabelElement;
    goalStatusTagDiv.appendChild(goalStatusTabLabel);

    // StatusTag field div
    const goalStatusTag = document.createElement(HtmlTags.SELECT) as HTMLSelectElement;
    goalStatusTag.id = resolveField(FormFieldId.ID_IC_GOAL_STATUS_TAG, WrapperType.DOUBLE_QUOTE);
    goalStatusTagDiv.appendChild(goalStatusTag);

    /*==== Create the TargetDate field fragment ====*/
    const goalTargetDateDiv = document.createElement(HtmlTags.DIV) as HTMLDivElement;

    // Lebel field fragment
    const goalTargetDateLabel = document.createElement(HtmlTags.LABEL) as HTMLLabelElement;
    goalTargetDateDiv.appendChild(goalTargetDateLabel);

    // Date field fragment
    const goalTargetDate = document.createElement(HtmlTags.INPUT) as HTMLInputElement;
    goalTargetDate.id = resolveField(FormFieldId.ID_IC_GOAL_TARGET_DATE, WrapperType.DOUBLE_QUOTE);
    goalTargetDateDiv.appendChild(goalTargetDate);

    /*==== Create the ExpectedDate field fragment ====*/
    const goalExpectedDateDiv = document.createElement(HtmlTags.DIV) as HTMLDivElement;

    // Lebel field fragment
    const goalExpectedDateLabel = document.createElement(HtmlTags.LABEL) as HTMLLabelElement;
    goalTargetDateDiv.appendChild(goalExpectedDateLabel);

    // Date field fragment
    const goalExpectedDate = document.createElement(HtmlTags.INPUT) as HTMLInputElement;
    goalExpectedDate.id = resolveField(FormFieldId.ID_IC_GOAL_EXPECTED_DATE, WrapperType.DOUBLE_QUOTE);
    goalExpectedDateDiv.appendChild(goalExpectedDate);

    /*==== Create the CompletedDate field fragment ====*/
    const goalCompletedDateDiv = document.createElement(HtmlTags.DIV) as HTMLDivElement;

    // Lebel field fragment
    const goalCompletedDateLabel = document.createElement(HtmlTags.LABEL) as HTMLLabelElement;
    goalCompletedDateDiv.appendChild(goalCompletedDateLabel);

    // Date field fragment
    const goalCompletedDate = document.createElement(HtmlTags.INPUT) as HTMLInputElement;
    goalCompletedDate.id = resolveField(FormFieldId.ID_IC_GOAL_COMPLETED_DATE, WrapperType.DOUBLE_QUOTE);
    goalTargetDateDiv.appendChild(goalTargetDate);

    /*==== Create UserTags field fragment ====*/
    const goalUserTagsDiv = document.createElement(HtmlTags.DIV) as HTMLDivElement;

    // Lebel field fragment
    const goalUserTagsLabel = document.createElement(HtmlTags.LABEL) as HTMLLabelElement;
    goalUserTagsDiv.appendChild(goalUserTagsLabel);

    // Date field fragment
    const goalUserTags = document.createElement(HtmlTags.INPUT) as HTMLInputElement;
    goalUserTags.id = resolveField(FormFieldId.ID_IC_GOAL_USER_TAGS, WrapperType.DOUBLE_QUOTE);
    goalUserTagsDiv.appendChild(goalTargetDate);

    parent.appendChild(containerDiv);
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
    (document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_NAME, WrapperType.NONE)) as HTMLInputElement).value = goalIndexCard.name;
    (document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_CATEGORY_TAG, WrapperType.NONE)) as HTMLInputElement).value = goalIndexCard.categoryTag;
    (document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_IDENT_TAG, WrapperType.NONE)) as HTMLInputElement).value = goalIndexCard.identTag;
    (document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_STATUS_TAG, WrapperType.NONE)) as HTMLInputElement).value = goalIndexCard.statusTag;
    (document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_TARGET_DATE, WrapperType.NONE)) as HTMLInputElement).value = (goalIndexCard.targetDate != null) ? dateFormatter(goalIndexCard.targetDate) : emptyString;
    (document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_EXPECTED_DATE, WrapperType.NONE)) as HTMLInputElement).value = (goalIndexCard.expectedDate != null) ? dateFormatter(goalIndexCard.expectedDate) : emptyString;
    (document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_COMPLETED_DATE, WrapperType.NONE)) as HTMLInputElement).value = (goalIndexCard.completedDate != null) ? dateFormatter(goalIndexCard.completedDate) : emptyString;
    (document.getElementById(resolveField(FormFieldId.ID_IC_GOAL_USER_TAGS, WrapperType.NONE)) as HTMLInputElement).value = flattenedTags(goalIndexCard.userTags);
}
