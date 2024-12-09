import { FileManager, TFile } from "obsidian";
import { FormFieldId, resolveField } from "../form-builder/form-field-types";
import { dateFormatter, flattenedTags } from "src/utils/utils";
import { TaskIndexCard } from "./task-index-card";
import { emptyString, WrapperType } from "../types/types";
import { GenericPlanningForm, IPlanningForm } from "../base-classes/generic-planning-form";
import { Settings } from "src/settings/Settings";
import { NodeBuilder } from "../form-builder/node-builder";
import { assignTagOptions } from "src/utils/utils";
import { HtmlAttributes } from "../form-builder/html-attribute-types";
import { HtmlTags } from "../form-builder/html-element-types";
import { FormFieldId as field} from "../form-builder/form-field-types";
import { DisplayMode } from "../base-classes/generic-planning-form";
import { AttribSettingsId } from "../form-builder/atrrib-settings-types";

export class TaskFormBuilder extends GenericPlanningForm implements IPlanningForm {

    buildForm(parent: HTMLElement): void {
        super.buildForm(parent);
    }

    configureForCreateMode(settings: Settings): void {
        const nodeBuilder: NodeBuilder = new NodeBuilder();

        // Populate the Category & Status selectors with options the list contained in the plugin settings
        const categorySelect = document.getElementById(resolveField(FormFieldId.GF_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement;           
        assignTagOptions(categorySelect, settings.categoryTags)

        // Hide the unused sections
        const memberOfDiv = document.getElementById(resolveField(FormFieldId.GF_MEMBER_OF_SECTION, WrapperType.NONE));
        nodeBuilder.setAttributes(memberOfDiv, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);

        const expectedDateSectionDiv = document.getElementById(resolveField(FormFieldId.GF_EXPECTED_DATE_SECTION, WrapperType.NONE));
        nodeBuilder.setAttributes(expectedDateSectionDiv, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);

        const completedDateSectionDiv = document.getElementById(resolveField(FormFieldId.GF_COMPLETED_DATE_SECTION, WrapperType.NONE));
        nodeBuilder.setAttributes(completedDateSectionDiv, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);
    }

    async configureForIndexCardMode(settings: Settings, taskIndexCard: TaskIndexCard, fileManager: FileManager, file: TFile): Promise<void> {
        const nodeBuilder: NodeBuilder = new NodeBuilder();
        const taskIndexCard = new TaskIndexCard();

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

    updateIndexCard(taskIndexCard: TaskIndexCard, displayMode: DisplayMode): void {
        taskIndexCard.name = NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_NAME, HtmlAttributes.VALUE);
        taskIndexCard.categoryTag = NodeBuilder.getElementInfo(HtmlTags.SELECT, FormFieldId.GF_CATEGORY_TAG, HtmlAttributes.VALUE);
        taskIndexCard.targetDate = new Date(NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_TARGET_DATE, HtmlAttributes.VALUE));
        if (displayMode == DisplayMode.INDEX_CARD_MODE) {

        }
    }
}
