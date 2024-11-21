import { Ident, MessageDictionary, MessageId, wrapMessage } from "../types"

export const newIdentFragment  = ' \
<div> \
    <div id="goal-block"> \
        <div> \
            <label style="margin-inline: 12px">Enter the name of the Goal :</label> \
            <input type="text" id='+wrapMessage(MessageId.ID_GOAL_NAME, "\"")+' autofocus style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Select the Category type :</label> \
           <select id='+wrapMessage(MessageId.ID_GOAL_CATEGORY_TAG, "\"")+' style="margin-bottom: 12px"> \
                <option>#planning/business</option> \
                <option>#planning/personal</option> \
                <option>#planning/domestic</option> \
           </select> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Target Date</label> \
            <input type="date" id='+wrapMessage(MessageId.ID_GOAL_TARGET_DATE, "\"")+' style="margin-bottom: 12px""> \
        </div> \
        <div> \
            <button id='+wrapMessage(MessageId.ID_CREATE_GOAL_BUTTON, "\"")+' type="button">Create Goal</button> \
            <button id='+wrapMessage(MessageId.ID_CANCEL_GOAL_BUTTON, "\"")+' type="button">Cancel</button> \
        </div> \
    </div> \
    <br> \
    <div id="project-block" style="border-width: 2px; border-style: solid; border-color: gray;"> \
        <div id="project-creation"> \
            <label style="margin-inline: 12px">Enter the name of the Project :</label> \
            <input type="text" id="project-name" autofocus style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Belongs to goal :</label> \
            <input type="text" id="project-goal-name" autofocus style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Select the Catogory type :</label> \
            <select id="project-category-tag" style="margin-bottom: 12px"> \
                <option>#planning/business</option> \
                <option>#planning/personal</option> \
                <option>#planning/domestic</option> \
            </select> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Target Date</label> \
            <input type="date" id="project-target-date" style="margin-bottom: 12px""> \
        </div> \
        <div> \
            <button id="createProject" type="button">Create Project</button> \
            <button id="cancelCreateProject" type="button">Cancel</button> \
        </div> \
    </div> \
    <br> \
    <div id="task-block" style="border-width: 2px; border-style: solid; border-color: gray;"> \
        <div id="task-creation"> \
            <label style="margin-inline: 12px">Enter the name of the Task :</label> \
            <input type="text" id="task-name" autofocus style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Belongs to Project :</label> \
            <input type="text" id="task-project-name" autofocus style="margin-bottom: 12px"> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Select the Category type :</label> \
            <select id="project-category-tag" style="margin-bottom: 12px"> \
                <option>#planning/business</option> \
                <option>#planning/personal</option> \
                <option>#planning/domestic</option> \
            </select> \
        </div> \
        <div> \
            <label style="margin-inline: 12px">Target Date</label> \
            <input type="date" id="task=target-date" style="margin-bottom: 12px""> \
        </div> \
        <div> \
            <button id="createTask" type="button">Create Task</button> \
            <button id="cancelCreateTask" type="button">Cancel</button> \
        </div> \
    </div> \
</div>'

export function initIdentFragment(target: Ident) {
    const goal_div: HTMLDivElement = document.getElementById("goal-block") as HTMLDivElement;
    const project_div: HTMLDivElement = document.getElementById("project-block") as HTMLDivElement;
    const task_div: HTMLDivElement = document.getElementById("task-block") as HTMLDivElement;


    switch (target) {
        case Ident.GOAL:
            goal_div.className = MessageDictionary[MessageId.STYLE_DIV_VISIBLE];
            project_div.className = MessageDictionary[MessageId.STYLE_DIV_HIDDEN];
            task_div.className = MessageDictionary[MessageId.STYLE_DIV_HIDDEN];
            break;

        case Ident.PROJECT:
            goal_div.className = MessageDictionary[MessageId.STYLE_DIV_HIDDEN];
            project_div.className = MessageDictionary[MessageId.STYLE_DIV_VISIBLE];
            task_div.className = MessageDictionary[MessageId.STYLE_DIV_HIDDEN];
            break;

        case Ident.TASK:
            goal_div.className = MessageDictionary[MessageId.STYLE_DIV_HIDDEN];
            project_div.className = MessageDictionary[MessageId.STYLE_DIV_HIDDEN];
            task_div.className = MessageDictionary[MessageId.STYLE_DIV_VISIBLE];
            break;
    }
}