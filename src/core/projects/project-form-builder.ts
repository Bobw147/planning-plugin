import { FileManager, TFile } from 'obsidian';
import { Settings } from 'src/settings/Settings';
import { assignTagOptions, dateFormatter, flattenedTags } from 'src/utils/utils';

import {
    DisplayMode, GenericPlanningForm, IPlanningForm
} from '../base-classes/generic-planning-form';
import { FormFieldId, resolveField } from '../form-builder/form-field-types';
import { HtmlAttributes } from '../form-builder/html-attribute-types';
import { HtmlTags } from '../form-builder/html-element-types';
import { NodeBuilder } from '../form-builder/node-builder';
import { emptyString, WrapperType } from '../types/types';
import { IProjectIndexCard, ProjectIndexCard } from './project-index-card';

export class ProjectFormBuilder extends GenericPlanningForm implements IPlanningForm {

    buildForm(parent: HTMLElement): void {
        super.buildForm(parent);
    }

    configureForCreateMode(settings: Settings): void {
        const nodeBuilder = new NodeBuilder();

        // Populate the Category and Status Tag Selects
        const categorySelect = document.getElementById(resolveField(FormFieldId.GF_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement;           
        assignTagOptions(categorySelect, settings.categoryTags)

        const statusSelect = document.getElementById(resolveField(FormFieldId.GF_STATUS_TAG, WrapperType.NONE)) as HTMLSelectElement;           
        assignTagOptions(statusSelect, settings.statusTags)

        // Hide the subtask checkbox
        nodeBuilder.setElementAttributes(FormFieldId.GF_SUBTASK_CHECKBOX_SECTION, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);

        // Hide the icons
        nodeBuilder.setElementAttributes(FormFieldId.GF_NAME_ICON, [[HtmlAttributes.CLASS, FormFieldId.STYLE_ICON_HIDDEN]]);
        nodeBuilder.setElementAttributes(FormFieldId.GF_MEMBER_OF_ICON, [[HtmlAttributes.CLASS, FormFieldId.STYLE_ICON_HIDDEN]]);
        nodeBuilder.setElementAttributes(FormFieldId.GF_CATEGORY_TAG_ICON, [[HtmlAttributes.CLASS, FormFieldId.STYLE_ICON_HIDDEN]]);
        nodeBuilder.setElementAttributes(FormFieldId.GF_STATUS_TAG_ICON, [[HtmlAttributes.CLASS, FormFieldId.STYLE_ICON_HIDDEN]]);
        nodeBuilder.setElementAttributes(FormFieldId.GF_TARGET_DATE_ICON, [[HtmlAttributes.CLASS, FormFieldId.STYLE_ICON_HIDDEN]]);
        nodeBuilder.setElementAttributes(FormFieldId.GF_USER_TAGS_ICON, [[HtmlAttributes.CLASS, FormFieldId.STYLE_ICON_HIDDEN]]);

    }

    async configureForIndexCardMode(settings: Settings, projectIndexCard: ProjectIndexCard, fileManager: FileManager, file: TFile): Promise<void> {

    }

    updateIndexCard(projectIndexCard: IProjectIndexCard, displayMode: DisplayMode) {
        projectIndexCard.name = NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_NAME, HtmlAttributes.VALUE);
        projectIndexCard.parentGoal = NodeBuilder.getElementInfo(HtmlTags.SELECT, FormFieldId.GF_MEMBER_OF_NAME, HtmlAttributes.VALUE);
        projectIndexCard.categoryTag = NodeBuilder.getElementInfo(HtmlTags.SELECT, FormFieldId.GF_CATEGORY_TAG, HtmlAttributes.VALUE);
        projectIndexCard.targetDate = new Date(NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_TARGET_DATE, HtmlAttributes.VALUE));
        if (displayMode == DisplayMode.INDEX_CARD_MODE) {
    
        }
    }
}


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
/*
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_NAME, WrapperType.NONE)) as HTMLInputElement).value = projectIndexCard.name;
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_CATEGORY_TAG, WrapperType.NONE)) as HTMLInputElement).value = projectIndexCard.categoryTag;
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_IDENT_TAG, WrapperType.NONE)) as HTMLInputElement).value = projectIndexCard.identTag;
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_STATUS_TAG, WrapperType.NONE)) as HTMLInputElement).value = projectIndexCard.statusTag;
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_TARGET_DATE, WrapperType.NONE)) as HTMLInputElement).value = (projectIndexCard.targetDate != null) ? dateFormatter(projectIndexCard.targetDate) : emptyString;
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_EXPECTED_DATE, WrapperType.NONE)) as HTMLInputElement).value = (projectIndexCard.expectedDate != null) ? dateFormatter(projectIndexCard.expectedDate) : emptyString;
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_COMPLETED_DATE, WrapperType.NONE)) as HTMLInputElement).value = (projectIndexCard.completedDate != null) ? dateFormatter(projectIndexCard.completedDate) : emptyString;
    (document.getElementById(resolveField(FormFieldId.ID_IC_PROJECT_USER_TAGS, WrapperType.NONE)) as HTMLInputElement).value = flattenedTags(projectIndexCard.userTags);
*/
}
