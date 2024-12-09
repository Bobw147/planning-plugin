import { FileManager, TFile } from "obsidian";
import { GoalIndexCard } from "./goal-index-card";
import { dateFormatter, flattenedTags } from "src/utils/utils";
import { emptyString, WrapperType } from "../types/types";
import { FormFieldId as field, FormFieldId, resolveField } from "../form-builder/form-field-types";
import { HtmlTags } from "../form-builder/html-element-types";
import { NodeBuilder } from "../form-builder/node-builder";
import { HtmlAttributes } from "../form-builder/html-attribute-types";
import { DisplayMode, IPlanningForm } from "../base-classes/generic-planning-form";
import { AttribSettingsId } from "../form-builder/atrrib-settings-types";
import { Settings } from "src/settings/Settings";
import { GenericPlanningForm } from "../base-classes/generic-planning-form";
import { assignTagOptions } from "src/utils/utils";

export class GoalFormBuilder extends GenericPlanningForm implements IPlanningForm {

    buildForm(parent: HTMLElement): void {
        super.buildForm(parent);
    }

    configureForCreateMode(settings: Settings): void {
        const nodeBuilder: NodeBuilder = new NodeBuilder();

        // Populate the Category & Status selectors with options the list contained in the plugin settings
        const categorySelect = document.getElementById(resolveField(FormFieldId.GF_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement;           
        assignTagOptions(categorySelect, settings.categoryTags)

        const statusTagsDiv = document.getElementById(resolveField(FormFieldId.GF_STATUS_TAG_SECTION, WrapperType.NONE));
        nodeBuilder.setAttributes(statusTagsDiv, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);

        // Hide the unused sections
        const memberOfDiv = document.getElementById(resolveField(FormFieldId.GF_MEMBER_OF_SECTION, WrapperType.NONE));
        nodeBuilder.setAttributes(memberOfDiv, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);

        const expectedDateSectionDiv = document.getElementById(resolveField(FormFieldId.GF_EXPECTED_DATE_SECTION, WrapperType.NONE));
        nodeBuilder.setAttributes(expectedDateSectionDiv, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);

        const completedDateSectionDiv = document.getElementById(resolveField(FormFieldId.GF_COMPLETED_DATE_SECTION, WrapperType.NONE));
        nodeBuilder.setAttributes(completedDateSectionDiv, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);
    }

    async configureForIndexCardMode(settings: Settings, goalIndexCard: GoalIndexCard, fileManager: FileManager, file: TFile): Promise<void> {
        const nodeBuilder: NodeBuilder = new NodeBuilder();

        // Add the CategoryTag options
        const goalCategorySelect: HTMLSelectElement = document.getElementById(resolveField(FormFieldId.GF_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement
        assignTagOptions(goalCategorySelect, settings.categoryTags);
    
        // Add the StatusTag options
        const goalStatusSelect: HTMLSelectElement = document.getElementById(resolveField(FormFieldId.GF_STATUS_TAG, WrapperType.NONE)) as HTMLSelectElement
        assignTagOptions(goalStatusSelect, settings.statusTags);

        // Hide the Create and Cancel buttons
        nodeBuilder.setElementAttributes(FormFieldId.GF_BUTTONS, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);

        // Populate the goal index card
        await fileManager.processFrontMatter(file, (frontmatter) => {
            goalIndexCard.load(frontmatter);
        });

        // Populate the form fields and make them read-only
        nodeBuilder.setElementAttributes(field.GF_NAME, [
            [HtmlAttributes.VALUE, goalIndexCard.name],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.GF_CATEGORY_TAG, [
            [HtmlAttributes.VALUE, goalIndexCard.categoryTag],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.GF_STATUS_TAG, [
            [HtmlAttributes.VALUE, goalIndexCard.statusTag],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.GF_TARGET_DATE, [
            [HtmlAttributes.VALUE, (goalIndexCard.targetDate != null) ? dateFormatter(goalIndexCard.targetDate) : emptyString],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.GF_EXPECTED_DATE, [
            [HtmlAttributes.VALUE, (goalIndexCard.expectedDate != null) ? dateFormatter(goalIndexCard.expectedDate) : emptyString],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.GF_COMPLETED_DATE, [
            [HtmlAttributes.VALUE, (goalIndexCard.completedDate != null) ? dateFormatter(goalIndexCard.completedDate) : emptyString],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
        nodeBuilder.setElementAttributes(field.GF_USER_TAGS, [
            [HtmlAttributes.VALUE, flattenedTags(goalIndexCard.userTags)],
            [HtmlAttributes.DISABLED, AttribSettingsId.TRUE],
        ]);
    }

    updateIndexCard(goalIndexCard: GoalIndexCard, displayMode: DisplayMode): void {
        goalIndexCard.name = NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_NAME, HtmlAttributes.VALUE);
        goalIndexCard.categoryTag = NodeBuilder.getElementInfo(HtmlTags.SELECT, FormFieldId.GF_CATEGORY_TAG, HtmlAttributes.VALUE);
        goalIndexCard.targetDate = new Date(NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_TARGET_DATE, HtmlAttributes.VALUE));
        if (displayMode == DisplayMode.INDEX_CARD_MODE) {

        }
    }
}