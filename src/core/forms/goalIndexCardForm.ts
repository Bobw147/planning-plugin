import { FileManager, TFile } from "obsidian";
import { GoalIndexCard } from "../indexcards/goalIndexCard";
import { dateFormatter, flattenedTags } from "src/utils/utils";
import { ElementId, IDictionary, MessageId, wrapMessage, WrapperType } from "../types/types";

const _goalIndexCardForm = '<div id='+wrapMessage(MessageId.ID_IC_GOAL_INDEX_CARD, WrapperType.QUOTE)+' style="border-width: 2px; border-style: solid; border-color: gray;"> \
    <div> \
        <label style="margin-inline: 12px">Goal :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_GOAL_NAME, WrapperType.QUOTE)+' readonly style="margin-bottom: 12px"> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Category :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_GOAL_CATEGORY_TAG, WrapperType.QUOTE)+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div style="display:none"> \
        <label style="margin-inline: 12px">Ident :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_GOAL_IDENT_TAG, WrapperType.QUOTE)+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Status :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_GOAL_STATUS_TAG, WrapperType.QUOTE)+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Target Date</label> \
        <input type="date" id='+wrapMessage(MessageId.ID_IC_GOAL_TARGET_DATE, WrapperType.QUOTE)+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Anticipated Date</label> \
        <input type="date" id='+wrapMessage(MessageId.ID_IC_GOAL_EXPECTED_DATE, WrapperType.QUOTE)+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Completed Date</label> \
        <input type="date" id='+wrapMessage(MessageId.ID_IC_GOAL_COMPLETED_DATE, WrapperType.QUOTE)+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">User Tags</label> \
        <input type="input" id='+wrapMessage(MessageId.ID_IC_GOAL_USER_TAGS, WrapperType.QUOTE)+' readonly style="margin-bottom: 12px""> \
    </div> \
<div>'

function htmlFactory(elementId: ElementId, options: IDictionary<string>) {
    let newElement: HTMLElement;

    switch (elementId) {
        case ElementId.DIV:
            newElement = document.createElement(elementId) as HTMLDivElement;
            apply_options(, newELement, options)
            return newElement;
            break;

        case ElementId.INPUT:
            break;

        case ElementId.LABEL:
            break;

        case ElementId.OPTION:
            break;

        case ElementId.SELECT:
            break;
    }

}

function applyOptions(element: HTMLElement, options: IDictionary<string>)
{
    if (Object.entries(options).length > 0) {
        options.forEach((option) => {
            switch (option)
                case 
        }
    });
}

function buildGoalIndexCard(parent: HTMLElement): void
{
//    const myElement: HTMLDivElement = htmlFactory(ElementId.DIV).i;

    const containerDiv = document.createElement(ElementId.DIV) as HTMLDivElement;
    containerDiv.id = wrapMessage(MessageId.ID_IC_GOAL_INDEX_CARD, WrapperType.QUOTE);

    /*==== Create the GoalName input fragment ====*/
    const goalNameDiv = document.createElement(ElementId.DIV) as HTMLDivElement;

    // Input field label
    const goalNameLabel = document.createElement(ElementId.LABEL) as HTMLLabelElement;
    goalNameLabel.id = wrapMessage(MessageId.ID_IC_GOAL_NAME_LABEL, WrapperType.QUOTE);
    goalNameDiv.appendChild(goalNameLabel);

    // Input field element
    const goalNameInput = document.createElement(ElementId.INPUT) as HTMLInputElement;
    goalNameInput.id = wrapMessage(MessageId.ID_IC_GOAL_NAME, WrapperType.QUOTE);
    goalNameDiv.appendChild(goalNameInput);
 
    /*==== Create the CategoryTag fragment ====*/
    const goalCategoryTagDiv = document.createElement(ElementId.DIV) as HTMLDivElement;

    // Tag label field fragment
    const goalCategoryTabLabel = document.createElement(ElementId.LABEL) as HTMLLabelElement;
    goalCategoryTagDiv.appendChild(goalCategoryTabLabel);

    // CategoryTag field fragment

    const goalCategoryTag = document.createElement(ElementId.SELECT) as HTMLSelectElement;
    goalCategoryTag.id = wrapMessage(MessageId.ID_IC_GOAL_CATEGORY_TAG, WrapperType.QUOTE);
    goalCategoryTagDiv.appendChild(goalCategoryTag);

    /*==== Create the StatusTag field fragment ====*/
    const goalStatusTagDiv = document.createElement(ElementId.DIV) as HTMLDivElement;

    // Lebel field fragment
    const goalStatusTabLabel = document.createElement(ElementId.LABEL) as HTMLLabelElement;
    goalStatusTagDiv.appendChild(goalStatusTabLabel);

    // StatusTag field div
    const goalStatusTag = document.createElement(ElementId.SELECT) as HTMLSelectElement;
    goalStatusTag.id = wrapMessage(MessageId.ID_IC_GOAL_STATUS_TAG, WrapperType.QUOTE);
    goalStatusTagDiv.appendChild(goalStatusTag);

    /*==== Create the TargetDate field fragment ====*/
    const goalTargetDateDiv = document.createElement(ElementId.DIV) as HTMLDivElement;

    // Lebel field fragment
    const goalTargetDateLabel = document.createElement(ElementId.LABEL) as HTMLLabelElement;
    goalTargetDateDiv.appendChild(goalTargetDateLabel);

    // Date field fragment
    const goalTargetDate = document.createElement(ElementId.INPUT) as HTMLInputElement;
    goalTargetDate.id = wrapMessage(MessageId.ID_IC_GOAL_TARGET_DATE, WrapperType.QUOTE);
    goalTargetDateDiv.appendChild(goalTargetDate);

    /*==== Create the ExpectedDate field fragment ====*/
    const goalExpectedDateDiv = document.createElement(ElementId.DIV) as HTMLDivElement;

    // Lebel field fragment
    const goalExpectedDateLabel = document.createElement(ElementId.LABEL) as HTMLLabelElement;
    goalTargetDateDiv.appendChild(goalExpectedDateLabel);

    // Date field fragment
    const goalExpectedDate = document.createElement(ElementId.INPUT) as HTMLInputElement;
    goalExpectedDate.id = wrapMessage(MessageId.ID_IC_GOAL_EXPECTED_DATE, WrapperType.QUOTE);
    goalExpectedDateDiv.appendChild(goalExpectedDate);

    /*==== Create the CompletedDate field fragment ====*/
    const goalCompletedDateDiv = document.createElement(ElementId.DIV) as HTMLDivElement;

    // Lebel field fragment
    const goalCompletedDateLabel = document.createElement(ElementId.LABEL) as HTMLLabelElement;
    goalCompletedDateDiv.appendChild(goalCompletedDateLabel);

    // Date field fragment
    const goalCompletedDate = document.createElement(ElementId.INPUT) as HTMLInputElement;
    goalCompletedDate.id = wrapMessage(MessageId.ID_IC_GOAL_COMPLETED_DATE, WrapperType.QUOTE);
    goalTargetDateDiv.appendChild(goalTargetDate);

    /*==== Create UserTags field fragment ====*/
    const goalUserTagsDiv = document.createElement(ElementId.DIV) as HTMLDivElement;

    // Lebel field fragment
    const goalUserTagsLabel = document.createElement(ElementId.LABEL) as HTMLLabelElement;
    goalUserTagsDiv.appendChild(goalUserTagsLabel);

    // Date field fragment
    const goalUserTags = document.createElement(ElementId.INPUT) as HTMLInputElement;
    goalUserTags.id = wrapMessage(MessageId.ID_IC_GOAL_USER_TAGS, WrapperType.QUOTE);
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
    (document.getElementById(wrapMessage(MessageId.ID_IC_GOAL_NAME, "")) as HTMLInputElement).value = goalIndexCard.name;
    (document.getElementById(wrapMessage(MessageId.ID_IC_GOAL_CATEGORY_TAG, "")) as HTMLInputElement).value = goalIndexCard.categoryTag;
    (document.getElementById(wrapMessage(MessageId.ID_IC_GOAL_IDENT_TAG, "")) as HTMLInputElement).value = goalIndexCard.identTag;
    (document.getElementById(wrapMessage(MessageId.ID_IC_GOAL_STATUS_TAG, "")) as HTMLInputElement).value = goalIndexCard.statusTag;
    (document.getElementById(wrapMessage(MessageId.ID_IC_GOAL_TARGET_DATE, "")) as HTMLInputElement).value = (goalIndexCard.targetDate != null) ? dateFormatter(goalIndexCard.targetDate) : "";
    (document.getElementById(wrapMessage(MessageId.ID_IC_GOAL_EXPECTED_DATE, "")) as HTMLInputElement).value = (goalIndexCard.expectedDate != null) ? dateFormatter(goalIndexCard.expectedDate) : "";
    (document.getElementById(wrapMessage(MessageId.ID_IC_GOAL_COMPLETED_DATE, "")) as HTMLInputElement).value = (goalIndexCard.completedDate != null) ? dateFormatter(goalIndexCard.completedDate) : "";
    (document.getElementById(wrapMessage(MessageId.ID_IC_GOAL_USER_TAGS, "")) as HTMLInputElement).value = flattenedTags(goalIndexCard.userTags);
}
