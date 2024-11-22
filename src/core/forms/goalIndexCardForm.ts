import { FileManager, TFile } from "obsidian";
import { GoalIndexCard } from "../indexcards/goalIndexCard";
import { dateFormatter, flattenedTags } from "src/utils/utils";
import { MessageId, wrapMessage } from "../types";

const _goalIndexCardForm = '<div id='+wrapMessage(MessageId.ID_IC_GOAL_INDEX_CARD, "\"")+' style="border-width: 2px; border-style: solid; border-color: gray;"> \
    <div> \
        <label style="margin-inline: 12px">Goal :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_GOAL_NAME, "\"")+' readonly style="margin-bottom: 12px"> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Category :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_GOAL_CATEGORY_TAG, "\"")+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div style="display:none"> \
        <label style="margin-inline: 12px">Ident :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_GOAL_IDENT_TAG, "\"")+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Status :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_GOAL_STATUS_TAG, "\"")+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Target Date</label> \
        <input type="date" id='+wrapMessage(MessageId.ID_IC_GOAL_TARGET_DATE, "\"")+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Anticipated Date</label> \
        <input type="date" id='+wrapMessage(MessageId.ID_IC_GOAL_EXPECTED_DATE, "\"")+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Completed Date</label> \
        <input type="date" id='+wrapMessage(MessageId.ID_IC_GOAL_COMPLETED_DATE, "\"")+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">User Tags</label> \
        <input type="input" id='+wrapMessage(MessageId.ID_IC_GOAL_USER_TAGS, "\"")+' readonly style="margin-bottom: 12px""> \
    </div> \
<div>'

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
