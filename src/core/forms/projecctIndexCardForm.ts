import { FileManager, TFile } from "obsidian";
import { dateFormatter, flattenedTags } from "src/utils/utils";
import { MessageId, wrapMessage } from "../types/types";
import { ProjectIndexCard } from "../indexcards/projectindexcard";

const _projectIndexCardForm = '<div id='+wrapMessage(MessageId.ID_IC_PROJECT_INDEX_CARD, "\"")+' style="border-width: 2px; border-style: solid; border-color: gray;"> \
    <div> \
        <label style="margin-inline: 12px">Project :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_PROJECT_NAME, "\"")+' readonly style="margin-bottom: 12px"> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Category :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_PROJECT_CATEGORY_TAG, "\"")+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div style="display:none"> \
        <label style="margin-inline: 12px">Ident :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_PROJECT_IDENT_TAG, "\"")+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Status :</label> \
        <input type="text" id='+wrapMessage(MessageId.ID_IC_PROJECT_STATUS_TAG, "\"")+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Target Date</label> \
        <input type="date" id='+wrapMessage(MessageId.ID_IC_PROJECT_TARGET_DATE, "\"")+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Anticipated Date</label> \
        <input type="date" id='+wrapMessage(MessageId.ID_IC_PROJECT_EXPECTED_DATE, "\"")+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Completed Date</label> \
        <input type="date" id='+wrapMessage(MessageId.ID_IC_PROJECT_COMPLETED_DATE, "\"")+' readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">User Tags</label> \
        <input type="input" id='+wrapMessage(MessageId.ID_IC_PROJECT_USER_TAGS, "\"")+' readonly style="margin-bottom: 12px""> \
    </div> \
<div>'

export function projectIndexCardForm() : string {
    return _projectIndexCardForm;
}

export async function populateProjectIndexCardForm(fileManager: FileManager, file: TFile): Promise<void> {
    const projectIndexCard = new ProjectIndexCard();

    // Populate the project index card
    await fileManager.processFrontMatter(file, (frontmatter) => {
        projectIndexCard.load(frontmatter);
    });
    // Populate the form fields
    (document.getElementById(wrapMessage(MessageId.ID_IC_PROJECT_NAME, "")) as HTMLInputElement).value = projectIndexCard.name;
    (document.getElementById(wrapMessage(MessageId.ID_IC_PROJECT_CATEGORY_TAG, "")) as HTMLInputElement).value = projectIndexCard.categoryTag;
    (document.getElementById(wrapMessage(MessageId.ID_IC_PROJECT_IDENT_TAG, "")) as HTMLInputElement).value = projectIndexCard.identTag;
    (document.getElementById(wrapMessage(MessageId.ID_IC_PROJECT_STATUS_TAG, "")) as HTMLInputElement).value = projectIndexCard.statusTag;
    (document.getElementById(wrapMessage(MessageId.ID_IC_PROJECT_TARGET_DATE, "")) as HTMLInputElement).value = (projectIndexCard.targetDate != null) ? dateFormatter(projectIndexCard.targetDate) : "";
    (document.getElementById(wrapMessage(MessageId.ID_IC_PROJECT_EXPECTED_DATE, "")) as HTMLInputElement).value = (projectIndexCard.expectedDate != null) ? dateFormatter(projectIndexCard.expectedDate) : "";
    (document.getElementById(wrapMessage(MessageId.ID_IC_PROJECT_COMPLETED_DATE, "")) as HTMLInputElement).value = (projectIndexCard.completedDate != null) ? dateFormatter(projectIndexCard.completedDate) : "";
    (document.getElementById(wrapMessage(MessageId.ID_IC_PROJECT_USER_TAGS, "")) as HTMLInputElement).value = flattenedTags(projectIndexCard.userTags);
}
