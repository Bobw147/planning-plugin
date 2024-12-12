import { App, FileManager, TFile } from 'obsidian';
import { Settings } from 'src/settings/Settings';
import { assignNameOptions, assignTagOptions, dateFormatter, flattenedTags } from 'src/utils/utils';

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
import { emptyString, identTags, WrapperType } from '../types/types';
import { TaskIndexCard } from './task-index-card';

export class TaskFormBuilder extends GenericPlanningForm implements IPlanningForm {

    buildForm(parent: HTMLElement): void {
        super.buildForm(parent);
    }

    configureForCreateMode(app: App, settings: Settings): void {
        const nodeBuilder: NodeBuilder = new NodeBuilder();

        // Populate the Category & Status selectors with options the list contained in the plugin settings
        const categorySelect = document.getElementById(resolveField(FormFieldId.GF_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement;           
        assignTagOptions(categorySelect, settings.categoryTags);

        const statusSelect = document.getElementById(resolveField(FormFieldId.GF_STATUS_TAG, WrapperType.NONE)) as HTMLSelectElement;           
        assignTagOptions(statusSelect, settings.statusTags);

        // Set the label for the name field
        nodeBuilder.setElementAttributes(FormFieldId.GF_NAME_LABEL, [[HtmlAttributes.INNERTEXT, UserMessageId.TASK_NAME_LABEL]]);

        // Set the label for the Member Of field
        nodeBuilder.setElementAttributes(FormFieldId.GF_MEMBER_OF_LABEL, [[HtmlAttributes.INNERTEXT, UserMessageId.PARENT_PROJECT_LABEL]]);

        const memberOf = document.getElementById(resolveField(FormFieldId.GF_MEMBER_OF_NAME, WrapperType.NONE)) as HTMLSelectElement;
        assignNameOptions(memberOf, app, settings.projectsFolder, identTags.PLANNING_PROJECT);

        // Set the prompt on the Create button
        nodeBuilder.setElementAttributes(FormFieldId.GF_CREATE_BUTTON, [
            [HtmlAttributes.INNERTEXT, UserMessageId.TASK_CREATE_BUTTON_TEXT],
        ]);

        // Hide the unused sections & icons
        nodeBuilder.setElementsAttributes([
            FormFieldId.GF_EXPECTED_DATE_SECTION,
            FormFieldId.GF_COMPLETED_DATE_SECTION,
            FormFieldId.GF_NAME_ICON,
            FormFieldId.GF_MEMBER_OF_ICON,
            FormFieldId.GF_CATEGORY_TAG_ICON,
            FormFieldId.GF_STATUS_TAG_ICON,
            FormFieldId.GF_TARGET_DATE_ICON,
            FormFieldId.GF_USER_TAGS_ICON,         
        ], [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);

        const checkbox = document.getElementById(resolveField(FormFieldId.GF_SUBTASK_CHECKBOX, WrapperType.NONE)) as HTMLInputElement;
            checkbox.addEventListener('click', () => {
            nodeBuilder.clearOptions(FormFieldId.GF_MEMBER_OF_NAME)
            if (checkbox.checked) {
                assignNameOptions(memberOf, app, settings.tasksFolder, identTags.PLANNING_TASK);
                nodeBuilder.setElementAttributes(FormFieldId.GF_MEMBER_OF_LABEL, [[HtmlAttributes.INNERTEXT, UserMessageId.PARENT_TASK_LABEL]])
            }
            else {
                assignNameOptions(memberOf, app, settings.projectsFolder, identTags.PLANNING_PROJECT);
                nodeBuilder.setElementAttributes(FormFieldId.GF_MEMBER_OF_LABEL, [[HtmlAttributes.INNERTEXT, UserMessageId.PARENT_PROJECT_LABEL]])
            }
        })
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
        nodeBuilder.setElementAttributes(FormFieldId.GF_NAME, [
            [HtmlAttributes.VALUE, taskIndexCard.name],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(FormFieldId.GF_CATEGORY_TAG, [
            [HtmlAttributes.VALUE, taskIndexCard.categoryTag],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(FormFieldId.GF_STATUS_TAG, [
            [HtmlAttributes.VALUE, taskIndexCard.statusTag],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(FormFieldId.GF_TARGET_DATE, [
            [HtmlAttributes.VALUE, (taskIndexCard.targetDate != null) ? dateFormatter(taskIndexCard.targetDate) : emptyString],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(FormFieldId.GF_EXPECTED_DATE, [
            [HtmlAttributes.VALUE, (taskIndexCard.expectedDate != null) ? dateFormatter(taskIndexCard.expectedDate) : emptyString],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(FormFieldId.GF_COMPLETED_DATE, [
            [HtmlAttributes.VALUE, (taskIndexCard.completedDate != null) ? dateFormatter(taskIndexCard.completedDate) : emptyString],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(FormFieldId.GF_USER_TAGS, [
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
