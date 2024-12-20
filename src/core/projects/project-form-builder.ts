import { FileManager, TFile } from 'obsidian';
import { dateFormatter, flattenedTags, getNameOptions } from 'src/utils/utils';

import { GenericPlanningForm, IPlanningForm } from '../base-classes/generic-planning-form';
import { FormFieldId } from '../form-builder/form-field-types';
import { HtmlAttributes } from '../form-builder/html-attribute-types';
import { UserMessageId } from '../form-builder/i18n';
import { NodeBuilder } from '../form-builder/node-builder';
import { IProjectIndexCard } from '../types/interfaces/i-project-index-card';
import { emptyString, identTags } from '../types/types';

export class ProjectFormBuilder extends GenericPlanningForm implements IPlanningForm {

    buildForm(parent: HTMLElement): void {
        super.buildForm(parent);
    }

    configureForCreateMode(projectIndexCard: IProjectIndexCard): void {
        const nodeBuilder = new NodeBuilder();

        // Populate the Status selector options with the list contained in the plugin settings
        nodeBuilder.addOptions(FormFieldId.GF_CATEGORY_TAG, this.settings.categoryTags, emptyString, false);
        nodeBuilder.addOptions(FormFieldId.GF_STATUS_TAG, this.settings.statusTags, emptyString, false);
        nodeBuilder.addOptions(FormFieldId.GF_MEMBER_OF_NAME, getNameOptions(this.app, this.settings.goalsFolder, identTags.PLANNING_GOAL), projectIndexCard.name, false);

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

    async configureForIndexCardMode(projectIndexCard: IProjectIndexCard, fileManager: FileManager, file: TFile): Promise<void> {
        const nodeBuilder: NodeBuilder = new NodeBuilder();

        // Populate the Status selector options with the list contained in the plugin settings
        nodeBuilder.addOptions(FormFieldId.GF_CATEGORY_TAG, this.settings.categoryTags, projectIndexCard.categoryTag, true);
        nodeBuilder.addOptions(FormFieldId.GF_STATUS_TAG, this.settings.statusTags, projectIndexCard.statusTag, true);
        nodeBuilder.addOptions(FormFieldId.GF_MEMBER_OF_NAME, getNameOptions(this.app, this.settings.goalsFolder, identTags.PLANNING_GOAL), projectIndexCard.parentGoal, false)
    
         // Hide unwanted items
         nodeBuilder.hide([
             FormFieldId.GF_BUTTONS,
             FormFieldId.GF_SUBTASK_CHECKBOX_SECTION,
         ])
     
         nodeBuilder.disable([
             FormFieldId.GF_NAME,
             FormFieldId.GF_MEMBER_OF_NAME,
             FormFieldId.GF_CATEGORY_TAG,
             FormFieldId.GF_STATUS_TAG,
             FormFieldId.GF_TARGET_DATE,
             FormFieldId.GF_EXPECTED_DATE,
             FormFieldId.GF_COMPLETED_DATE,
             FormFieldId.GF_USER_TAGS,
         ])
 
         // Populate the form fields and make them read-only
         nodeBuilder.setElementAttributes(FormFieldId.GF_NAME, [
             [HtmlAttributes.VALUE, projectIndexCard.name],
         ]);
         
         nodeBuilder.setElementAttributes(FormFieldId.GF_MEMBER_OF_LABEL, [
            [HtmlAttributes.INNERTEXT, UserMessageId.PARENT_GOAL_LABEL],
        ]);

         nodeBuilder.setElementAttributes(FormFieldId.GF_MEMBER_OF_NAME, [
            [HtmlAttributes.VALUE, projectIndexCard.parentGoal],
        ]);
 
         nodeBuilder.setElementAttributes(FormFieldId.GF_TARGET_DATE, [
             [HtmlAttributes.VALUE, (projectIndexCard.targetDate != null) ? dateFormatter(projectIndexCard.targetDate) : emptyString],
         ]);
 
         nodeBuilder.setElementAttributes(FormFieldId.GF_EXPECTED_DATE, [
             [HtmlAttributes.VALUE, (projectIndexCard.expectedDate != null) ? dateFormatter(projectIndexCard.expectedDate) : emptyString],
         ]);
 
         nodeBuilder.setElementAttributes(FormFieldId.GF_COMPLETED_DATE, [
             [HtmlAttributes.VALUE, (projectIndexCard.completedDate != null) ? dateFormatter(projectIndexCard.completedDate) : emptyString],
         ]);
 
         nodeBuilder.setElementAttributes(FormFieldId.GF_USER_TAGS, [
             [HtmlAttributes.VALUE, flattenedTags(projectIndexCard.userTags)],
         ]);
    }
}
