import { FileManager, TFile } from "obsidian";
import { MessageId, wrapMessage } from "../types/types";
import { dateFormatter, flattenedTags } from "src/utils/utils";
import { TaskIndexCard } from "../indexcards/taskIndexCard";

const _taskIndexCardForm = '<div id='+wrapMessage(MessageId.ID_IC_TASK_INDEX_CARD, "\"")+' style="border-width: 2px; border-style: solid; border-color: gray;"> \
    <div> \
        <label style="margin-inline: 12px">Project :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_TASK_NAME, "\"")+' readonly style="margin-bottom: 12px"> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Category :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_TASK_CATEGORY_TAG, "\"")+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div style="display:none"> \
        <label style="margin-inline: 12px">Ident :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_TASK_IDENT_TAG, "\"")+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Status :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_TASK_STATUS_TAG, "\"")+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Target Date</label> \
        <input type="date" id='+wrapMessage(MessageId.ID_IC_TASK_TARGET_DATE, "\"")+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Anticipated Date</label> \
        <input type="date" id='+wrapMessage(MessageId.ID_IC_TASK_EXPECTED_DATE, "\"")+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Completed Date</label> \
        <input type="date" id='+wrapMessage(MessageId.ID_IC_TASK_COMPLETED_DATE, "\"")+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">User Tags</label> \
        <input type="input" id='+wrapMessage(MessageId.ID_IC_TASK_USER_TAGS, "\"")+' readonly style="margin-bottom: 12px""> \
    </div> \
<div>'

export function taskIndexCardForm() : string {
    return _taskIndexCardForm;
}

export async function populateTaskIndexCardForm(fileManager: FileManager, file: TFile): Promise<void> {
    const projectIndexCard = new TaskIndexCard();

    // Populate the project index card
    await fileManager.processFrontMatter(file, (frontmatter) => {
        projectIndexCard.load(frontmatter, file);
    });
    // Populate the form fields
    (document.getElementById(wrapMessage(MessageId.ID_IC_TASK_NAME, "")) as HTMLInputElement).value = projectIndexCard.name;
    (document.getElementById(wrapMessage(MessageId.ID_IC_TASK_CATEGORY_TAG, "")) as HTMLInputElement).value = projectIndexCard.categoryTag;
    (document.getElementById(wrapMessage(MessageId.ID_IC_TASK_IDENT_TAG, "")) as HTMLInputElement).value = projectIndexCard.identTag;
    (document.getElementById(wrapMessage(MessageId.ID_IC_TASK_STATUS_TAG, "")) as HTMLInputElement).value = projectIndexCard.statusTag;
    (document.getElementById(wrapMessage(MessageId.ID_IC_TASK_TARGET_DATE, "")) as HTMLInputElement).value = (projectIndexCard.targetDate != null) ? dateFormatter(projectIndexCard.targetDate) : "";
    (document.getElementById(wrapMessage(MessageId.ID_IC_TASK_EXPECTED_DATE, "")) as HTMLInputElement).value = (projectIndexCard.expectedDate != null) ? dateFormatter(projectIndexCard.expectedDate) : "";
    (document.getElementById(wrapMessage(MessageId.ID_IC_TASK_COMPLETED_DATE, "")) as HTMLInputElement).value = (projectIndexCard.completedDate != null) ? dateFormatter(projectIndexCard.completedDate) : "";
    (document.getElementById(wrapMessage(MessageId.ID_IC_TASK_USER_TAGS, "")) as HTMLInputElement).value = flattenedTags(projectIndexCard.userTags);
}
