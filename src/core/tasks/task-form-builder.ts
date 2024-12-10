import { FileManager, TFile } from 'obsidian';
import { Settings } from 'src/settings/Settings';
import { assignTagOptions, dateFormatter, flattenedTags } from 'src/utils/utils';

import {
    DisplayMode, GenericPlanningForm, IPlanningForm
} from '../base-classes/generic-planning-form';
import { fieldNames } from '../base-classes/index-card';
import { AttribSettingsId } from '../form-builder/atrrib-settings-types';
import { FormFieldId, resolveField } from '../form-builder/form-field-types';
import { HtmlAttributes } from '../form-builder/html-attribute-types';
import { HtmlTags } from '../form-builder/html-element-types';
import { UserMessageId } from '../form-builder/i18n';
import { NodeBuilder } from '../form-builder/node-builder';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { emptyString, WrapperType } from '../types/types';
import { TaskIndexCard } from './task-index-card';

export class TaskFormBuilder extends GenericPlanningForm implements IPlanningForm {

    buildForm(parent: HTMLElement): void {
        super.buildForm(parent);
    }

    configureForCreateMode(settings: Settings): void {
        const nodeBuilder: NodeBuilder = new NodeBuilder();

        // Populate the Category & Status selectors with options the list contained in the plugin settings
        const categorySelect = document.getElementById(resolveField(FormFieldId.GF_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement;           
        assignTagOptions(categorySelect, settings.categoryTags);

        const statusSelect = document.getElementById(resolveField(FormFieldId.GF_STATUS_TAG, WrapperType.NONE)) as HTMLSelectElement;           
        assignTagOptions(statusSelect, settings.statusTags);

        // Set the label for the Member Of field
        nodeBuilder.setElementAttributes(FormFieldId.GF_MEMBER_OF_LABEL, [[HtmlAttributes.INNERTEXT, UserMessageId.PARENT_PROJECT_LABEL]]);

        // Hide the unused sections
        nodeBuilder.setElementsAttributes([
            FormFieldId.GF_EXPECTED_DATE_SECTION,
            FormFieldId.GF_COMPLETED_DATE_SECTION, [HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]
        ]);

        // Hide the icons
        nodeBuilder.setElementsAttributes([
            FormFieldId.GF_COMPLETED_DATE_SECTION,
            FormFieldId.GF_NAME_ICON,
            FormFieldId.GF_MEMBER_OF_ICON,
            FormFieldId.GF_CATEGORY_TAG_ICON,
            FormFieldId.GF_STATUS_TAG_ICON,
            FormFieldId.GF_TARGET_DATE_ICON,
            FormFieldId.GF_USER_TAGS_ICON,         
        ], [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);
    }

    async configureForIndexCardMode(settings: Settings, taskIndexCard: TaskIndexCard, fileManager: FileManager, file: TFile): Promise<void> {
        const nodeBuilder: NodeBuilder = new NodeBuilder();

        // Add the CategoryTag options
        const taskCategorySelect: HTMLSelectElement = document.getElementById(resolveField(FormFieldId.GF_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement
        assignTagOptions(taskCategorySelect, settings.categoryTags);
    
        // Add the StatusTag options
        const taskStatusSelect: HTMLSelectElement = document.getElementById(resolveField(FormFieldId.GF_STATUS_TAG, WrapperType.NONE)) as HTMLSelectElement
        assignTagOptions(taskStatusSelect, settings.statusTags);

        // Hide the Create and Cancel buttons
        nodeBuilder.setElementAttributes(FormFieldId.GF_BUTTONS, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);

        // Populate the task index card
        await fileManager.processFrontMatter(file, (frontmatter) => {
            taskIndexCard.load(frontmatter);
        });

        // Populate the form fields and make them read-only
        nodeBuilder.setElementAttributes(field.GF_NAME, [
            [HtmlAttributes.VALUE, taskIndexCard.name],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.GF_CATEGORY_TAG, [
            [HtmlAttributes.VALUE, taskIndexCard.categoryTag],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.GF_STATUS_TAG, [
            [HtmlAttributes.VALUE, taskIndexCard.statusTag],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.GF_TARGET_DATE, [
            [HtmlAttributes.VALUE, (taskIndexCard.targetDate != null) ? dateFormatter(taskIndexCard.targetDate) : emptyString],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.GF_EXPECTED_DATE, [
            [HtmlAttributes.VALUE, (taskIndexCard.expectedDate != null) ? dateFormatter(taskIndexCard.expectedDate) : emptyString],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.GF_COMPLETED_DATE, [
            [HtmlAttributes.VALUE, (taskIndexCard.completedDate != null) ? dateFormatter(taskIndexCard.completedDate) : emptyString],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.GF_USER_TAGS, [
            [HtmlAttributes.VALUE, flattenedTags(taskIndexCard.userTags)],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
    }

    updateIndexCard(taskIndexCard: ITaskIndexCard, displayMode: DisplayMode): void {
        taskIndexCard.name = NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_NAME, HtmlAttributes.VALUE);
        taskIndexCard.categoryTag = NodeBuilder.getElementInfo(HtmlTags.SELECT, FormFieldId.GF_CATEGORY_TAG, HtmlAttributes.VALUE);
        taskIndexCard.targetDate = new Date(NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_TARGET_DATE, HtmlAttributes.VALUE));
        if (displayMode == DisplayMode.INDEX_CARD_MODE) {

        }
    }
}
