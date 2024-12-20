import { FileManager, TFile } from 'obsidian';
import { dateFormatter, flattenedTags, getNameOptions } from 'src/utils/utils';

import { GenericPlanningForm, IPlanningForm } from '../base-classes/generic-planning-form';
import { NodeBuilder } from '../form-builder/form-builder';
import { FormFieldId } from '../form-builder/form-field-types';
import { HtmlAttributes } from '../form-builder/html-attribute-types';
import { translate, UserMessageId } from '../form-builder/i18n';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { emptyString, identTags } from '../types/types';

export class TaskFormBuilder extends GenericPlanningForm implements IPlanningForm {
    private subtaskIsChecked: boolean = false;

    get isSubtask() : boolean {
        return this.subtaskIsChecked;
    }

    buildForm(parent: HTMLElement): void {
        super.buildForm(parent);
    }

    configureForCreateMode(taskIndexCard: ITaskIndexCard): void {
        const nodeBuilder: NodeBuilder = new NodeBuilder();

        // Populate the selector options with the list contained in the plugin settings
        nodeBuilder.addOptions(FormFieldId.GF_CATEGORY_TAG, this.settings.categoryTags, taskIndexCard.categoryTag, false);
        nodeBuilder.addOptions(FormFieldId.GF_STATUS_TAG, this.settings.statusTags, taskIndexCard.statusTag, false);
        nodeBuilder.addOptions(FormFieldId.GF_MEMBER_OF_NAME, 
            getNameOptions(this.app, this.settings.projectsFolder, identTags.PLANNING_PROJECT), emptyString, false);

        // Set the label for the name field
        nodeBuilder.setElementAttributes(FormFieldId.GF_NAME_LABEL, [
            [HtmlAttributes.INNERTEXT, UserMessageId.TASK_NAME_LABEL],
        ]);

        nodeBuilder.setElementAttributes(FormFieldId.GF_NAME, [
            [HtmlAttributes.VALUE, taskIndexCard.name],
        ])
        nodeBuilder.setElementAttributes(FormFieldId.GF_TARGET_DATE, [
            [HtmlAttributes.VALUE, (taskIndexCard.targetDate != null) ? dateFormatter(taskIndexCard.targetDate) : emptyString],
        ]);

        nodeBuilder.setElementAttributes(FormFieldId.GF_EXPECTED_DATE, [
            [HtmlAttributes.VALUE, (taskIndexCard.expectedDate != null) ? dateFormatter(taskIndexCard.expectedDate) : emptyString],
        ]);

        nodeBuilder.setElementAttributes(FormFieldId.GF_COMPLETED_DATE, [
            [HtmlAttributes.VALUE, (taskIndexCard.completedDate != null) ? dateFormatter(taskIndexCard.completedDate) : emptyString],
        ]);

        nodeBuilder.setElementAttributes(FormFieldId.GF_USER_TAGS, [
            [HtmlAttributes.VALUE, flattenedTags(taskIndexCard.userTags)],
        ]);

        // Set the label for the Member Of field
        nodeBuilder.setElementAttributes(FormFieldId.GF_MEMBER_OF_LABEL, [
            [HtmlAttributes.INNERTEXT, UserMessageId.PARENT_PROJECT_LABEL],
        ]);

        // Set the prompt on the Create button
        nodeBuilder.setElementAttributes(FormFieldId.GF_CREATE_BUTTON, [
            [HtmlAttributes.INNERTEXT, UserMessageId.TASK_CREATE_BUTTON_TEXT],
        ]);

        // Hide the unused sections & icons
        nodeBuilder.hide([
            FormFieldId.GF_CATEGORY_TAG_SECTION,
            FormFieldId.GF_COMPLETED_DATE_SECTION,
            FormFieldId.GF_NAME_ICON,
            FormFieldId.GF_MEMBER_OF_ICON,
            FormFieldId.GF_CATEGORY_TAG_ICON,
            FormFieldId.GF_STATUS_TAG_ICON,
            FormFieldId.GF_TARGET_DATE_ICON,
            FormFieldId.GF_USER_TAGS_ICON,         
        ]);
    }

    async configureForIndexCardMode(taskIndexCard: ITaskIndexCard, fileManager: FileManager, file: TFile): Promise<void> {
        const nodeBuilder: NodeBuilder = new NodeBuilder();

        // Add the CategoryTag, statusTag and Member of options
        nodeBuilder.addOptions(FormFieldId.GF_CATEGORY_TAG, this.settings.categoryTags, taskIndexCard.categoryTag, false);
        nodeBuilder.addOptions(FormFieldId.GF_STATUS_TAG, this.settings.statusTags, taskIndexCard.statusTag, false);
        nodeBuilder.addOptions(FormFieldId.GF_MEMBER_OF_NAME, 
                getNameOptions(this.app, this.settings.projectsFolder, identTags.PLANNING_PROJECT),
                taskIndexCard.parentProject, false);

        // Hide the Create and Cancel buttons
        nodeBuilder.hide([
            FormFieldId.GF_BUTTONS,
            FormFieldId.GF_SUBTASK_CHECKBOX_SECTION,
        ])

        nodeBuilder.setElementAttributes(FormFieldId.GF_NAME, [
            [HtmlAttributes.VALUE, taskIndexCard.name],
        ])
        
        nodeBuilder.setElementAttributes(FormFieldId.GF_MEMBER_OF_LABEL, [
            [HtmlAttributes.INNERTEXT, translate(UserMessageId.PARENT_PROJECT_LABEL)],
        ]);

        nodeBuilder.setElementAttributes(FormFieldId.GF_TARGET_DATE, [
            [HtmlAttributes.VALUE, (taskIndexCard.targetDate != null) ? dateFormatter(taskIndexCard.targetDate) : emptyString],
        ]);

        nodeBuilder.setElementAttributes(FormFieldId.GF_EXPECTED_DATE, [
            [HtmlAttributes.VALUE, (taskIndexCard.expectedDate != null) ? dateFormatter(taskIndexCard.expectedDate) : emptyString],
        ]);

        nodeBuilder.setElementAttributes(FormFieldId.GF_COMPLETED_DATE, [
            [HtmlAttributes.VALUE, (taskIndexCard.completedDate != null) ? dateFormatter(taskIndexCard.completedDate) : emptyString],
        ]);

        nodeBuilder.setElementAttributes(FormFieldId.GF_USER_TAGS, [
            [HtmlAttributes.VALUE, flattenedTags(taskIndexCard.userTags)],
        ]);

        nodeBuilder.disable([
            FormFieldId.GF_NAME,
            FormFieldId.GF_CATEGORY_TAG,
            FormFieldId.GF_STATUS_TAG,
            FormFieldId.GF_TARGET_DATE,
            FormFieldId.GF_EXPECTED_DATE,
            FormFieldId.GF_COMPLETED_DATE,
            FormFieldId.GF_USER_TAGS,
        ]);
    }
}
