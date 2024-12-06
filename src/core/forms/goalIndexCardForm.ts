import { FileManager, TFile } from "obsidian";
import { GoalIndexCard } from "../indexcards/goalIndexCard";
import { dateFormatter, flattenedTags } from "src/utils/utils";
import { emptyString, WrapperType } from "../types/types";
import { FormFieldId as field, FormFieldId, resolveField } from "../webbuilder/formFieldTypes";
import { HtmlTags } from "../webbuilder/htmlElementTypes";
import { NodeBuilder } from "../webbuilder/nodebuilder";
import { HtmlAttributes as attrib, HtmlAttributes } from "../webbuilder/htmlAttributeTypes";
import { UserMessageId } from "../i18n";
import { ICreateICForm } from "../types/interfaces";
import { AttribSettingsId } from "../webbuilder/AtrribSettingsTypes";
import { Settings } from "src/settings/Settings";
import { GenericPlanningForm } from "./genericPlanningForm";

export class CreateGoalForm extends GenericPlanningForm implements ICreateICForm {

    buildForm(parent: HTMLElement): void {
        super.buildForm(parent);
    }

    configureForCreateMode(settings: Settings): void {
        const nodeBuilder: NodeBuilder = new NodeBuilder();

        // Add the CategoryTag options
        const goalCategoryTag: HTMLSelectElement = document.getElementById(resolveField(FormFieldId.GF_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement
        settings.categoryTags.forEach(
            (tag: string) => {
                const element = nodeBuilder.createElement(HtmlTags.OPTION, [
                    [HtmlAttributes.INNERTEXT, tag],
                ]) as HTMLOptionElement;
                goalCategoryTag.appendChild(element);
            }
        )

        // Hide the Status Tag section
        const statusTagsDiv = document.getElementById(resolveField(FormFieldId.GF_STATUS_TAG_SECTION, WrapperType.NONE));
        nodeBuilder.setAttributes(statusTagsDiv, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);

        const expectedDateSectionDiv = document.getElementById(resolveField(FormFieldId.GF_EXPECTED_DATE_SECTION, WrapperType.NONE));
        nodeBuilder.setAttributes(expectedDateSectionDiv, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);

        const completedDateSectionDiv = document.getElementById(resolveField(FormFieldId.GF_COMPLETED_DATE_SECTION, WrapperType.NONE));
        nodeBuilder.setAttributes(completedDateSectionDiv, [[HtmlAttributes.CLASS, FormFieldId.STYLE_DIV_HIDDEN]]);
    }

    async configureForIndexCardMode(settings: Settings, fileManager: FileManager, file: TFile): Promise<void> {
        const nodeBuilder: NodeBuilder = new NodeBuilder();
        const goalIndexCard = new GoalIndexCard();

        // Add the CategoryTag options
        const goalCategoryTag: HTMLSelectElement = document.getElementById(resolveField(FormFieldId.GF_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement
        settings.categoryTags.forEach(
            (tag: string) => {
                const element = nodeBuilder.createElement(HtmlTags.OPTION, [
                    [HtmlAttributes.INNERTEXT, tag],
                ]) as HTMLOptionElement;
                goalCategoryTag.appendChild(element);
            }
        )

        // Add the StatusTag options
        const goalStatusTag: HTMLSelectElement = document.getElementById(resolveField(FormFieldId.GF_STATUS_TAG, WrapperType.NONE)) as HTMLSelectElement
        settings.statusTags.forEach(
            (tag: string) => {
                const element = nodeBuilder.createElement(HtmlTags.OPTION, [
                    [HtmlAttributes.INNERTEXT, tag],
                ]) as HTMLOptionElement;
                goalStatusTag.appendChild(element);
            }
        )

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
}