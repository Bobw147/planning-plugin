import { FileManager, TFile } from "obsidian";
import { dateFormatter, flattenedTags } from "src/utils/utils";
import { FormFieldId, resolveField } from "../webbuilder/formFieldTypes";
import { ProjectIndexCard } from "../indexcards/projectindexcard";
import { emptyString, WrapperType } from "../types/types";

const _projectIndexCardForm = '<div id='+resolveField(FormFieldId.ID_IC_PROJECT_INDEX_CARD, WrapperType.SINGLE_QUOTE)+' style="border-width: 2px; border-style: solid; border-color: gray;"> \
    <div> \
        <label style="margin-inline: 12px">Project :</label> \
        <input type="text" id='+resolveField(FormFieldId.ID_IC_PROJECT_NAME, WrapperType.SINGLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Category :</label> \
        <input type="text" id='+resolveField(FormFieldId.ID_IC_PROJECT_CATEGORY_TAG, WrapperType.SINGLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div style="display:none"> \
        <label style="margin-inline: 12px">Ident :</label> \
        <input type="text" id='+resolveField(FormFieldId.ID_IC_PROJECT_IDENT_TAG, WrapperType.SINGLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Status :</label> \
        <input type="text" id='+resolveField(FormFieldId.ID_IC_PROJECT_STATUS_TAG, WrapperType.SINGLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Target Date</label> \
        <input type="date" id='+resolveField(FormFieldId.ID_IC_PROJECT_TARGET_DATE, WrapperType.SINGLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Anticipated Date</label> \
        <input type="date" id='+resolveField(FormFieldId.ID_IC_PROJECT_EXPECTED_DATE, WrapperType.SINGLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Completed Date</label> \
        <input type="date" id='+resolveField(FormFieldId.ID_IC_PROJECT_COMPLETED_DATE, WrapperType.SINGLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">User Tags</label> \
        <input type="input" id='+resolveField(FormFieldId.ID_IC_PROJECT_USER_TAGS, WrapperType.SINGLE_QUOTE)+' readonly style="margin-bottom: 12px"> \
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
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_NAME, WrapperType.NONE)) as HTMLInputElement).value = projectIndexCard.name;
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_CATEGORY_TAG, WrapperType.NONE)) as HTMLInputElement).value = projectIndexCard.categoryTag;
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_IDENT_TAG, WrapperType.NONE)) as HTMLInputElement).value = projectIndexCard.identTag;
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_STATUS_TAG, WrapperType.NONE)) as HTMLInputElement).value = projectIndexCard.statusTag;
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_TARGET_DATE, WrapperType.NONE)) as HTMLInputElement).value = (projectIndexCard.targetDate != null) ? dateFormatter(projectIndexCard.targetDate) : emptyString;
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_EXPECTED_DATE, WrapperType.NONE)) as HTMLInputElement).value = (projectIndexCard.expectedDate != null) ? dateFormatter(projectIndexCard.expectedDate) : emptyString;
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_COMPLETED_DATE, WrapperType.NONE)) as HTMLInputElement).value = (projectIndexCard.completedDate != null) ? dateFormatter(projectIndexCard.completedDate) : emptyString;
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_USER_TAGS, WrapperType.NONE)) as HTMLInputElement).value = flattenedTags(projectIndexCard.userTags);
}
