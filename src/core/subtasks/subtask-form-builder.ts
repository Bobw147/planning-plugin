import { FileManager, TFile } from 'obsidian';
import { dateFormatter, flattenedTags, getNameOptions } from 'src/utils/utils';

import { GenericPlanningForm, IPlanningForm } from '../base-classes/generic-planning-form';
import { FormBuilderr } from '../form-builder/form-builder';
import { FormFieldId } from '../form-builder/form-field-types';
import { HtmlAttributes } from '../form-builder/html-attribute-types';
import { translate, UserMessageId } from '../form-builder/i18n';
import { ISubtaskIndexCard } from '../types/interfaces/i-subtask-index-card';
import { emptyString, identTags } from '../types/types';

export class SubtaskFormBuilder extends GenericPlanningForm implements IPlanningForm {

    buildForm(parent: HTMLElement): void {
        super.buildForm(parent);
    }

    configureForCreateMode(subtaskIndexCard: ISubtaskIndexCard): void {
        const formBuilderr: FormBuilderr = new FormBuilderr();

        // Populate the selector options with the list contained in the plugin settings
        formBuilderr.addOptions(FormFieldId.GF_CATEGORY_TAG, this.settings.categoryTags, subtaskIndexCard.categoryTag, false);
        formBuilderr.addOptions(FormFieldId.GF_STATUS_TAG, this.settings.statusTags, subtaskIndexCard.statusTag, false);
        formBuilderr.addOptions(FormFieldId.GF_MEMBER_OF_NAME, 
            getNameOptions(this.app, this.settings.tasksFolder, identTags.PLANNING_TASK), emptyString, false);

        // Set the label for the name field
        formBuilderr.setElementAttributes(FormFieldId.GF_NAME_LABEL, [
            [HtmlAttributes.INNERTEXT, UserMessageId.SUBTASK_NAME_LABEL],
        ]);

        formBuilderr.setElementAttributes(FormFieldId.GF_NAME, [
            [HtmlAttributes.VALUE, subtaskIndexCard.name],
        ])

        // Set the label for the Member Of field
        formBuilderr.setElementAttributes(FormFieldId.GF_MEMBER_OF_LABEL, [
            [HtmlAttributes.INNERTEXT, UserMessageId.PARENT_TASK_LABEL],
        ]);

        formBuilderr.setElementAttributes(FormFieldId.GF_TARGET_DATE, [
            [HtmlAttributes.VALUE, (subtaskIndexCard.targetDate != null) ? dateFormatter(subtaskIndexCard.targetDate) : emptyString],
        ]);

        formBuilderr.setElementAttributes(FormFieldId.GF_EXPECTED_DATE, [
            [HtmlAttributes.VALUE, (subtaskIndexCard.expectedDate != null) ? dateFormatter(subtaskIndexCard.expectedDate) : emptyString],
        ]);

        formBuilderr.setElementAttributes(FormFieldId.GF_COMPLETED_DATE, [
            [HtmlAttributes.VALUE, (subtaskIndexCard.completedDate != null) ? dateFormatter(subtaskIndexCard.completedDate) : emptyString],
        ]);

        formBuilderr.setElementAttributes(FormFieldId.GF_USER_TAGS, [
            [HtmlAttributes.VALUE, flattenedTags(subtaskIndexCard.userTags)],
        ]);

        // Set the prompt on the Create button
        formBuilderr.setElementAttributes(FormFieldId.GF_CREATE_BUTTON, [
            [HtmlAttributes.INNERTEXT, UserMessageId.SUBTASK_CREATE_BUTTON_TEXT],
        ]);

        // Hide the unused sections & icons
        formBuilderr.hide([
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

    async configureForIndexCardMode(subtaskIndexCard: ISubtaskIndexCard, fileManager: FileManager, file: TFile): Promise<void> {
        const formBuilderr: FormBuilderr = new FormBuilderr();

        // Add the CategoryTag, statusTag and Member of options
        formBuilderr.addOptions(FormFieldId.GF_CATEGORY_TAG, this.settings.categoryTags, subtaskIndexCard.categoryTag, false);
        formBuilderr.addOptions(FormFieldId.GF_STATUS_TAG, this.settings.statusTags, subtaskIndexCard.statusTag, false);
        formBuilderr.addOptions(FormFieldId.GF_MEMBER_OF_NAME, 
                getNameOptions(this.app, this.settings.tasksFolder, identTags.PLANNING_TASK),
                 subtaskIndexCard.parentTask, false);

        // Hide the Create and Cancel buttons
        formBuilderr.hide([
            FormFieldId.GF_BUTTONS,
            FormFieldId.GF_SUBTASK_CHECKBOX_SECTION,
        ])

        formBuilderr.setElementAttributes(FormFieldId.GF_NAME, [
            [HtmlAttributes.VALUE, subtaskIndexCard.name],
        ])

        formBuilderr.setElementAttributes(FormFieldId.GF_MEMBER_OF_LABEL, [
            [HtmlAttributes.INNERTEXT, translate(UserMessageId.PARENT_TASK_LABEL)],
        ]);

        formBuilderr.setElementAttributes(FormFieldId.GF_TARGET_DATE, [
            [HtmlAttributes.VALUE, (subtaskIndexCard.targetDate != null) ? dateFormatter(subtaskIndexCard.targetDate) : emptyString],
        ]);

        formBuilderr.setElementAttributes(FormFieldId.GF_EXPECTED_DATE, [
            [HtmlAttributes.VALUE, (subtaskIndexCard.expectedDate != null) ? dateFormatter(subtaskIndexCard.expectedDate) : emptyString],
        ]);

        formBuilderr.setElementAttributes(FormFieldId.GF_COMPLETED_DATE, [
            [HtmlAttributes.VALUE, (subtaskIndexCard.completedDate != null) ? dateFormatter(subtaskIndexCard.completedDate) : emptyString],
        ]);

        formBuilderr.setElementAttributes(FormFieldId.GF_USER_TAGS, [
            [HtmlAttributes.VALUE, flattenedTags(subtaskIndexCard.userTags)],
        ]);

        formBuilderr.disable([
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
