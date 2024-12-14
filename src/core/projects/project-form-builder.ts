import { App, FileManager, TFile } from 'obsidian';
import { Settings } from 'src/settings/Settings';
import { assignNameOptions, assignTagOptions, dateFormatter, flattenedTags } from 'src/utils/utils';

import {
    DisplayMode, GenericPlanningForm, IPlanningForm
} from '../base-classes/generic-planning-form';
import { FormFieldId } from '../form-builder/form-field-types';
import { HtmlAttributes } from '../form-builder/html-attribute-types';
import { HtmlTags } from '../form-builder/html-element-types';
import { UserMessageId } from '../form-builder/i18n';
import { NodeBuilder } from '../form-builder/node-builder';
import { IProjectIndexCard } from '../types/interfaces/i-project-index-card';
import { emptyString, identTags } from '../types/types';
import { ProjectIndexCard } from './project-index-card';

export class ProjectFormBuilder extends GenericPlanningForm implements IPlanningForm {

    buildForm(parent: HTMLElement): void {
        super.buildForm(parent);
    }

    configureForCreateMode(app: App, settings: Settings): void {
        const nodeBuilder = new NodeBuilder();

        // Populate the Category and Status Tag Selects
        const categorySelect = document.getElementById(FormFieldId.GF_CATEGORY_TAG) as HTMLSelectElement;           
        assignTagOptions(categorySelect, settings.categoryTags)

        const statusSelect = document.getElementById(FormFieldId.GF_STATUS_TAG) as HTMLSelectElement;           
        assignTagOptions(statusSelect, settings.statusTags)

        const memberOf = document.getElementById(FormFieldId.GF_MEMBER_OF_NAME) as HTMLSelectElement;
        assignNameOptions(memberOf, app, settings.goalsFolder, identTags.PLANNING_GOAL);

        // Set the label for the Name and Member Of field
        nodeBuilder.setElementAttributes(FormFieldId.GF_NAME_LABEL, [[HtmlAttributes.INNERTEXT, UserMessageId.PROJECT_NAME_LABEL]])
        nodeBuilder.setElementAttributes(FormFieldId.GF_MEMBER_OF_LABEL, [[HtmlAttributes.INNERTEXT, UserMessageId.PARENT_GOAL_LABEL]]);

        // Set the prompt on the Create button
        nodeBuilder.setElementAttributes(FormFieldId.GF_CREATE_BUTTON, [
            [HtmlAttributes.INNERTEXT, UserMessageId.PROJECT_CREATE_BUTTON_TEXT],
        ]);

        nodeBuilder.hide([
            FormFieldId.GF_STATUS_TAG_SECTION,
            FormFieldId.GF_EXPECTED_DATE_SECTION,
            FormFieldId.GF_COMPLETED_DATE_SECTION,
            FormFieldId.GF_SUBTASK_CHECKBOX_SECTION,
            FormFieldId.GF_NAME_ICON,
            FormFieldId.GF_MEMBER_OF_ICON,
            FormFieldId.GF_CATEGORY_TAG_ICON,
            FormFieldId.GF_TARGET_DATE_ICON,
            FormFieldId.GF_USER_TAGS_ICON,
        ]);
    }

    async configureForIndexCardMode(settings: Settings, projectIndexCard: IProjectIndexCard, fileManager: FileManager, file: TFile): Promise<void> {

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

export async function populateProjectIndexCardForm(fileManager: FileManager, file: TFile): Promise<void> {
    const projectIndexCard = new ProjectIndexCard();

    // Populate the project index card
    await fileManager.processFrontMatter(file, (frontmatter) => {
        projectIndexCard.load(frontmatter);
    });
    // Populate the form fields

    (document.getElementById(FormFieldId.GF_NAME) as HTMLInputElement).value = projectIndexCard.name;
    (document.getElementById(FormFieldId.GF_CATEGORY_TAG) as HTMLInputElement).value = projectIndexCard.categoryTag;
    (document.getElementById(FormFieldId.GF_STATUS_TAG) as HTMLInputElement).value = projectIndexCard.statusTag;
    (document.getElementById(FormFieldId.GF_TARGET_DATE) as HTMLInputElement).value = (projectIndexCard.targetDate != null) ? dateFormatter(projectIndexCard.targetDate) : emptyString;
    (document.getElementById(FormFieldId.GF_EXPECTED_DATE) as HTMLInputElement).value = (projectIndexCard.expectedDate != null) ? dateFormatter(projectIndexCard.expectedDate) : emptyString;
    (document.getElementById(FormFieldId.GF_COMPLETED_DATE) as HTMLInputElement).value = (projectIndexCard.completedDate != null) ? dateFormatter(projectIndexCard.completedDate) : emptyString;
    (document.getElementById(FormFieldId.GF_USER_TAGS) as HTMLInputElement).value = flattenedTags(projectIndexCard.userTags);
}
