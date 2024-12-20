import { FileManager, TFile } from 'obsidian';
import { dateFormatter, flattenedTags } from 'src/utils/utils';

import { GenericPlanningForm, IPlanningForm } from '../base-classes/generic-planning-form';
import { FormFieldId } from '../form-builder/form-field-types';
import { HtmlAttributes } from '../form-builder/html-attribute-types';
import { NodeBuilder } from '../form-builder/node-builder';
import { IGoalIndexCard } from '../types/interfaces/i-goal-index-card';
import { emptyString } from '../types/types';

export class GoalFormBuilder extends GenericPlanningForm implements IPlanningForm {

    buildForm(parent: HTMLElement): void {
        super.buildForm(parent);
    }

    configureForCreateMode(goalIndexCard: IGoalIndexCard): void {
        const nodeBuilder: NodeBuilder = new NodeBuilder();

        // Populate the Status selector options with the list contained in the plugin settings
        nodeBuilder.addOptions(FormFieldId.GF_CATEGORY_TAG, this.settings.categoryTags, goalIndexCard.name, false);

        nodeBuilder.hide([
                FormFieldId.GF_STATUS_TAG_SECTION,                
                FormFieldId.GF_SUBTASK_CHECKBOX_SECTION,
                FormFieldId.GF_MEMBER_OF_SECTION,
                FormFieldId.GF_EXPECTED_DATE_SECTION,
                FormFieldId.GF_COMPLETED_DATE_SECTION,
                FormFieldId.GF_NAME_ICON,
                FormFieldId.GF_CATEGORY_TAG_ICON,
                FormFieldId.GF_TARGET_DATE_ICON,
                FormFieldId.GF_USER_TAGS_ICON,
            ]);
    }

    async configureForIndexCardMode(goalIndexCard: IGoalIndexCard, fileManager: FileManager, file: TFile): Promise<void> {
        const nodeBuilder: NodeBuilder = new NodeBuilder();

       // Populate the Status selector options with the list contained in the plugin settings
       nodeBuilder.addOptions(FormFieldId.GF_CATEGORY_TAG, this.settings.categoryTags, goalIndexCard.categoryTag, true);
       nodeBuilder.addOptions(FormFieldId.GF_STATUS_TAG, this.settings.statusTags, goalIndexCard.statusTag, true);
   
        // Hide unwanted items
        nodeBuilder.hide([
            FormFieldId.GF_BUTTONS,
            FormFieldId.GF_SUBTASK_CHECKBOX_SECTION,
            FormFieldId.GF_MEMBER_OF_SECTION,
        ])
    
        nodeBuilder.disable([
            FormFieldId.GF_NAME,
            FormFieldId.GF_CATEGORY_TAG,
            FormFieldId.GF_STATUS_TAG,
            FormFieldId.GF_TARGET_DATE,
            FormFieldId.GF_EXPECTED_DATE,
            FormFieldId.GF_COMPLETED_DATE,
            FormFieldId.GF_USER_TAGS,
        ])

        // Populate the form fields and make them read-only
        nodeBuilder.setElementAttributes(FormFieldId.GF_NAME, [
            [HtmlAttributes.VALUE, goalIndexCard.name],
        ]);

        nodeBuilder.setElementAttributes(FormFieldId.GF_TARGET_DATE, [
            [HtmlAttributes.VALUE, (goalIndexCard.targetDate != null) ? dateFormatter(goalIndexCard.targetDate) : emptyString],
        ]);

        nodeBuilder.setElementAttributes(FormFieldId.GF_EXPECTED_DATE, [
            [HtmlAttributes.VALUE, (goalIndexCard.expectedDate != null) ? dateFormatter(goalIndexCard.expectedDate) : emptyString],
        ]);

        nodeBuilder.setElementAttributes(FormFieldId.GF_COMPLETED_DATE, [
            [HtmlAttributes.VALUE, (goalIndexCard.completedDate != null) ? dateFormatter(goalIndexCard.completedDate) : emptyString],

        ]);

        nodeBuilder.setElementAttributes(FormFieldId.GF_USER_TAGS, [
            [HtmlAttributes.VALUE, flattenedTags(goalIndexCard.userTags)],
        ]);
    }
}