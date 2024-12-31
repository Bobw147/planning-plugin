import { FileManager, TFile } from 'obsidian';
import { dateFormatter, flattenedTags, getNameOptions } from 'src/utils/utils';

import { GenericPlanningForm, IPlanningForm } from '../base-classes/generic-planning-form';
import { FormBuilderr } from '../form-builder/form-builder';
import { FormFieldId } from '../form-builder/form-field-types';
import { HtmlAttributes } from '../form-builder/html-attribute-types';
import { UserMessageId } from '../form-builder/i18n';
import { IProjectIndexCard } from '../types/interfaces/i-project-index-card';
import { emptyString, identTags } from '../types/types';

export class ProjectFormBuilder extends GenericPlanningForm implements IPlanningForm {

    buildForm(parent: HTMLElement): void {
        super.buildForm(parent);
    }

    configureForCreateMode(projectIndexCard: IProjectIndexCard): void {
        const formBuilder = new FormBuilderr();

        // Populate the Status selector options with the list contained in the plugin settings
        formBuilder.addOptions(FormFieldId.GF_CATEGORY_TAG, this.settings.categoryTags, emptyString, false);
        formBuilder.addOptions(FormFieldId.GF_STATUS_TAG, this.settings.statusTags, emptyString, false);
        formBuilder.addOptions(FormFieldId.GF_MEMBER_OF_NAME, getNameOptions(this.app, this.settings.goalsFolder, identTags.PLANNING_GOAL), projectIndexCard.name, false);

        // Set the label for the Name and Member Of field
        formBuilder.setInnerText(FormFieldId.GF_NAME_LABEL, UserMessageId.PROJECT_NAME_LABEL);
        formBuilder.setInnerText(FormFieldId.GF_MEMBER_OF_LABEL, UserMessageId.PARENT_GOAL_LABEL);
        formBuilder.setInnerText(FormFieldId.GF_CREATE_BUTTON, UserMessageId.PROJECT_CREATE_BUTTON_TEXT);
        
        formBuilder.hide([
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
        const formBuilder: FormBuilderr = new FormBuilderr();

        // Populate the Status selector options with the list contained in the plugin settings
        formBuilder.addOptions(FormFieldId.GF_CATEGORY_TAG, this.settings.categoryTags, projectIndexCard.categoryTag, true);
        formBuilder.addOptions(FormFieldId.GF_STATUS_TAG, this.settings.statusTags, projectIndexCard.statusTag, true);
        formBuilder.addOptions(FormFieldId.GF_MEMBER_OF_NAME, getNameOptions(this.app, this.settings.goalsFolder, identTags.PLANNING_GOAL), projectIndexCard.parentGoal, false)
    
         // Hide unwanted items
         formBuilder.hide([
             FormFieldId.GF_BUTTONS,
             FormFieldId.GF_SUBTASK_CHECKBOX_SECTION,
         ])
     
         formBuilder.disable([
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
         formBuilder.setElementAttributes(FormFieldId.GF_NAME, [
             [HtmlAttributes.VALUE, projectIndexCard.name],
         ]);
         
         formBuilder.setInnerText(FormFieldId.GF_MEMBER_OF_LABEL, UserMessageId.PARENT_GOAL_LABEL);

         formBuilder.setElementAttributes(FormFieldId.GF_MEMBER_OF_NAME, [
            [HtmlAttributes.VALUE, projectIndexCard.parentGoal],
        ]);
 
         formBuilder.setElementAttributes(FormFieldId.GF_TARGET_DATE, [
             [HtmlAttributes.VALUE, (projectIndexCard.targetDate != null) ? dateFormatter(projectIndexCard.targetDate) : emptyString],
         ]);
 
         formBuilder.setElementAttributes(FormFieldId.GF_EXPECTED_DATE, [
             [HtmlAttributes.VALUE, (projectIndexCard.expectedDate != null) ? dateFormatter(projectIndexCard.expectedDate) : emptyString],
         ]);
 
         formBuilder.setElementAttributes(FormFieldId.GF_COMPLETED_DATE, [
             [HtmlAttributes.VALUE, (projectIndexCard.completedDate != null) ? dateFormatter(projectIndexCard.completedDate) : emptyString],
         ]);
 
         formBuilder.setElementAttributes(FormFieldId.GF_USER_TAGS, [
             [HtmlAttributes.VALUE, flattenedTags(projectIndexCard.userTags)],
         ]);
    }

    updateIndexCard(indexCard: IProjectIndexCard): void {
        super.updateIndexCard(indexCard);
        indexCard.parentGoal = (this.parentSection !== undefined) ? this.parentSection?.settingEl.getText() : "";
    }
}
