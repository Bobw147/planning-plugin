import { Ident, identTags, WrapperType } from "../types/types"
import { Settings } from "src/settings/Settings";
import { assignTagOptions, assignNameOptions } from "src/utils/utils";
import { App } from "obsidian";
import { FormFieldId, resolveField } from "../webbuilder/formFieldTypes";

export const newIdentFragment  = ' \
<div> \
    <div id='+resolveField(FormFieldId.ID_CF_GOAL_BLOCK, WrapperType.SINGLE_QUOTE)+' class='+resolveField(FormFieldId.STYLE_DIV_HIDDEN, WrapperType.SINGLE_QUOTE)+'> \
        <div> \
            <label style="margin-inline: 12px">Enter the name of the Goal :</label> \
            <input typ="text" id='+resolveField(FormFieldId.ID_CF_GOAL_NAME, WrapperType.SINGLE_QUOTE)+' autofocus style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Select the Category type :</label> \
            <select id='+resolveField(FormFieldId.ID_CF_GOAL_CATEGORY_TAG, WrapperType.SINGLE_QUOTE)+' style="margin-bottom: 12px"> \
            </select> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Target Date</label> \
            <input type="date" id='+resolveField(FormFieldId.ID_CF_GOAL_TARGET_DATE, WrapperType.SINGLE_QUOTE)+' style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <button id='+resolveField(FormFieldId.ID_CF_GOAL_CREATE_BUTTON, WrapperType.SINGLE_QUOTE)+' type="button">Create Goal</button> \
            <button id='+resolveField(FormFieldId.ID_CF_GOAL_CANCEL_BUTTON, WrapperType.SINGLE_QUOTE)+' type="button">Cancel</button> \
        </div> \
    </div> \
    <br> \
    <div id='+resolveField(FormFieldId.ID_CF_PROJECT_BLOCK, WrapperType.SINGLE_QUOTE)+'class='+resolveField(FormFieldId.STYLE_DIV_HIDDEN, WrapperType.SINGLE_QUOTE)+'> \
        <div> \
            <label style="margin-inline: 12px">Enter the name of the Project :</label> \
            <input type="text" id='+resolveField(FormFieldId.ID_CF_PROJECT_NAME, WrapperType.SINGLE_QUOTE)+' autofocus style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Belongs to goal :</label> \
            <select id='+resolveField(FormFieldId.ID_CF_PROJECT_GOAL_NAME, WrapperType.SINGLE_QUOTE)+' style="margin-bottom: 12px"> \
            </select> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Select the Catogory type :</label> \
            <select id='+resolveField(FormFieldId.ID_CF_PROJECT_CATEGORY_TAG, WrapperType.SINGLE_QUOTE)+' style="margin-bottom: 12px"> \
            </select> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Target Date</label> \
            <input type="date" id='+resolveField(FormFieldId.ID_CF_PROJECT_TARGET_DATE, WrapperType.SINGLE_QUOTE)+' style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <button id='+resolveField(FormFieldId.ID_CF_PROJECT_CREATE_BUTTON, WrapperType.SINGLE_QUOTE)+' type="button">Create Project</button> \
            <button id='+resolveField(FormFieldId.ID_CF_PROJECT_CANCEL_BUTTON, WrapperType.SINGLE_QUOTE)+' type="button">Cancel</button> \
        </div> \
    </div> \
    <br> \
    <div id='+resolveField(FormFieldId.ID_CF_TASK_BLOCK, WrapperType.SINGLE_QUOTE)+'class='+resolveField(FormFieldId.STYLE_DIV_HIDDEN, WrapperType.SINGLE_QUOTE)+'> \
        <div> \
            <label style="margin-inline: 12px">Enter the name of the Task :</label> \
            <input type="text" id='+resolveField(FormFieldId.ID_CF_TASK_NAME, WrapperType.SINGLE_QUOTE)+' autofocus style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Belongs to Project :</label> \
            <select id='+resolveField(FormFieldId.ID_CF_TASK_PROJECT_NAME, WrapperType.SINGLE_QUOTE)+' style="margin-bottom: 12px"> \
            </select> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Select the Category type :</label> \
            <select id='+resolveField(FormFieldId.ID_CF_TASK_CATEGORY_TAG, WrapperType.SINGLE_QUOTE)+' style="margin-bottom: 12px"> \
            </select> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Target Date</label> \
            <input type="date" id='+resolveField(FormFieldId.ID_CF_TASK_TARGET_DATE, WrapperType.SINGLE_QUOTE)+' style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <button id='+resolveField(FormFieldId.ID_CF_TASK_CREATE_BUTTON, WrapperType.SINGLE_QUOTE)+' type="button">Create Task</button> \
            <button id='+resolveField(FormFieldId.ID_CF_TASK_CANCEL_BUTTON, WrapperType.SINGLE_QUOTE)+' type="button">Cancel</button> \
        </div> \
    </div> \
</div>'

export function initIdentFragment(target: Ident, settings: Settings, app: App) {
    let targetSelect: HTMLSelectElement | null = null;
    const goalDiv: HTMLDivElement = document.getElementById(resolveField(FormFieldId.ID_CF_GOAL_BLOCK, WrapperType.NONE)) as HTMLDivElement;
    const projectDiv: HTMLDivElement = document.getElementById(resolveField(FormFieldId.ID_CF_PROJECT_BLOCK, WrapperType.NONE)) as HTMLDivElement;
    const taskDiv: HTMLDivElement = document.getElementById(resolveField(FormFieldId.ID_CF_TASK_BLOCK, WrapperType.NONE)) as HTMLDivElement;

    switch (target) {
        case Ident.GOAL:
            goalDiv.className = resolveField(FormFieldId.STYLE_DIV_VISIBLE, WrapperType.NONE);
            projectDiv.className = resolveField(FormFieldId.STYLE_DIV_HIDDEN, WrapperType.NONE);
            taskDiv.className = resolveField(FormFieldId.STYLE_DIV_HIDDEN, WrapperType.NONE);

            // Populate the Category & Status selectors with options the list contained in the plugin settings
            targetSelect = document.getElementById(resolveField(FormFieldId.ID_CF_GOAL_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement;           
            assignTagOptions(targetSelect, settings.categoryTags)
            break;

        case Ident.PROJECT:
            goalDiv.className = resolveField(FormFieldId.STYLE_DIV_HIDDEN, WrapperType.NONE);
            projectDiv.className = resolveField(FormFieldId.STYLE_DIV_VISIBLE, WrapperType.NONE);
            taskDiv.className = resolveField(FormFieldId.STYLE_DIV_HIDDEN, WrapperType.NONE);

            // Populate the Category & Status selectors with options the list contained in the plugin settings
            targetSelect = document.getElementById(resolveField(FormFieldId.ID_CF_PROJECT_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement;           
            assignTagOptions(targetSelect, settings.categoryTags)

            targetSelect = document.getElementById(resolveField(FormFieldId.ID_CF_PROJECT_GOAL_NAME, WrapperType.NONE)) as HTMLSelectElement;
            assignNameOptions(targetSelect, app, settings.goalsFolder, identTags.PLANNING_GOAL);
            break;

        case Ident.TASK:
            goalDiv.className = resolveField(FormFieldId.STYLE_DIV_HIDDEN, WrapperType.NONE);
            projectDiv.className = resolveField(FormFieldId.STYLE_DIV_HIDDEN, WrapperType.NONE);
            taskDiv.className = resolveField(FormFieldId.STYLE_DIV_VISIBLE, WrapperType.NONE);

            // Populate the Category & Status selectors with options the list contained in the plugin settings
            targetSelect = document.getElementById(resolveField(FormFieldId.ID_CF_TASK_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement;           
            assignTagOptions(targetSelect, settings.categoryTags)

            targetSelect = document.getElementById(resolveField(FormFieldId.ID_CF_TASK_PROJECT_NAME, WrapperType.NONE)) as HTMLSelectElement;
            assignNameOptions(targetSelect, app, settings.projectsFolder, identTags.PLANNING_PROJECT);
            break;
    }
}