import { Ident, MessageId, wrapMessage } from "../types"
import { Settings } from "src/settings/Settings";
import { assignOptions } from "src/utils/utils";

export const newIdentFragment  = ' \
<div> \
    <div id='+wrapMessage(MessageId.ID_CF_GOAL_BLOCK, "\"")+' class='+wrapMessage(MessageId.STYLE_DIV_HIDDEN, "\"")+'> \
        <div> \
            <label style="margin-inline: 12px">Enter the name of the Goal :</label> \
            <input typ="text" id='+wrapMessage(MessageId.ID_CF_GOAL_NAME, "\"")+' autofocus style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Select the Category type :</label> \
            <select id='+wrapMessage(MessageId.ID_CF_GOAL_CATEGORY_TAG, "\"")+' style="margin-bottom: 12px"> \
                <option>#planning/business</option> \
                <option>#planning/personal</option> \
                <option>#planning/domestic</option> \
            </select> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Target Date</label> \
            <input type="date" id='+wrapMessage(MessageId.ID_CF_GOAL_TARGET_DATE, "\"")+' style="margin-bottom: 12px""> \
        </div> \
        <div> \
            <button id='+wrapMessage(MessageId.ID_CF_GOAL_CREATE_BUTTON, "\"")+' type="button">Create Goal</button> \
            <button id='+wrapMessage(MessageId.ID_CF_GOAL_CANCEL_BUTTON, "\"")+' type="button">Cancel</button> \
        </div> \
    </div> \
    <br> \
    <div id='+wrapMessage(MessageId.ID_CF_PROJECT_BLOCK, "\"")+'class='+wrapMessage(MessageId.STYLE_DIV_HIDDEN, "\"")+'> \
        <div> \
            <label style="margin-inline: 12px">Enter the name of the Project :</label> \
            <input type="text" id='+wrapMessage(MessageId.ID_CF_PROJECT_NAME, "\"")+' autofocus style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Belongs to goal :</label> \
            <input type="text" id='+wrapMessage(MessageId.ID_CF_PROJECT_GOAL_NAME, "\"")+' autofocus style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Select the Catogory type :</label> \
            <select id='+wrapMessage(MessageId.ID_CF_PROJECT_CATEGORY_TAG, "\"")+' style="margin-bottom: 12px"> \
                <option>#planning/business</option> \
                <option>#planning/personal</option> \
                <option>#planning/domestic</option> \
            </select> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Target Date</label> \
            <input type="date" id='+wrapMessage(MessageId.ID_CF_PROJECT_TARGET_DATE, "\"")+' style="margin-bottom: 12px""> \
        </div> \
        <div> \
            <button id='+wrapMessage(MessageId.ID_CF_PROJECT_CREATE_BUTTON, "\"")+' type="button">Create Project</button> \
            <button id='+wrapMessage(MessageId.ID_CF_PROJECT_CANCEL_BUTTON, "\"")+' type="button">Cancel</button> \
        </div> \
    </div> \
    <br> \
    <div id='+wrapMessage(MessageId.ID_CF_TASK_BLOCK, "\"")+'class='+wrapMessage(MessageId.STYLE_DIV_HIDDEN, "\"")+'> \
        <div> \
            <label style="margin-inline: 12px">Enter the name of the Task :</label> \
            <input type="text" id='+wrapMessage(MessageId.ID_CF_TASK_NAME, "\"")+' autofocus style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Belongs to Project :</label> \
            <input type="text" id='+wrapMessage(MessageId.ID_CF_TASK_PROJECT_NAME, "\"")+' autofocus style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Select the Category type :</label> \
            <select id='+wrapMessage(MessageId.ID_CF_TASK_CATEGORY_TAG, "\"")+' style="margin-bottom: 12px"> \
                <option>#planning/business</option> \
                <option>#planning/personal</option> \
                <option>#planning/domestic</option> \
            </select> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Target Date</label> \
            <input type="date" id='+wrapMessage(MessageId.ID_CF_TASK_TARGET_DATE, "\"")+' style="margin-bottom: 12px""> \
        </div> \
        <div> \
            <button id='+wrapMessage(MessageId.ID_CF_TASK_CREATE_BUTTON, "\"")+' type="button">Create Task</button> \
            <button id='+wrapMessage(MessageId.ID_CF_TASK_CANCEL_BUTTON, "\"")+' type="button">Cancel</button> \
        </div> \
    </div> \
</div>'

export function initIdentFragment(target: Ident, settings: Settings) {
    let targetTagDiv: HTMLSelectElement | null = null;
    const goalDiv: HTMLDivElement = document.getElementById(wrapMessage(MessageId.ID_CF_GOAL_BLOCK, "")) as HTMLDivElement;
    const projectDiv: HTMLDivElement = document.getElementById(wrapMessage(MessageId.ID_CF_PROJECT_BLOCK, "")) as HTMLDivElement;
    const taskDiv: HTMLDivElement = document.getElementById(wrapMessage(MessageId.ID_CF_TASK_BLOCK, "")) as HTMLDivElement;

    switch (target) {
        case Ident.GOAL:
            goalDiv.className = wrapMessage(MessageId.STYLE_DIV_VISIBLE, "");
            projectDiv.className = wrapMessage(MessageId.STYLE_DIV_HIDDEN, "");
            taskDiv.className = wrapMessage(MessageId.STYLE_DIV_HIDDEN, "");

            // Populate the Category & Status selectors with options the list contained in the plugin settings
            targetTagDiv = document.getElementById(wrapMessage(MessageId.ID_CF_GOAL_CATEGORY_TAG, "")) as HTMLSelectElement;           
            assignOptions(targetTagDiv, settings.categoryTags)
            break;

        case Ident.PROJECT:
            goalDiv.className = wrapMessage(MessageId.STYLE_DIV_HIDDEN, "");
            projectDiv.className = wrapMessage(MessageId.STYLE_DIV_VISIBLE, "");
            taskDiv.className = wrapMessage(MessageId.STYLE_DIV_HIDDEN, "");

            // Populate the Category & Status selectors with options the list contained in the plugin settings
            targetTagDiv = document.getElementById(wrapMessage(MessageId.ID_CF_PROJECT_CATEGORY_TAG, "")) as HTMLSelectElement;           
            assignOptions(targetTagDiv, settings.categoryTags)
            break;

        case Ident.TASK:
            goalDiv.className = wrapMessage(MessageId.STYLE_DIV_HIDDEN, "");
            projectDiv.className = wrapMessage(MessageId.STYLE_DIV_HIDDEN, "");
            taskDiv.className = wrapMessage(MessageId.STYLE_DIV_VISIBLE, "");

            // Populate the Category & Status selectors with options the list contained in the plugin settings
            targetTagDiv = document.getElementById(wrapMessage(MessageId.ID_CF_TASK_CATEGORY_TAG, "")) as HTMLSelectElement;           
            assignOptions(targetTagDiv, settings.categoryTags)
            break;
    }
}