import { PlanningIndexCard } from "./indexcard";
import { App, Modal } from "obsidian";
import { Planner } from "./planner";
import { taskForm } from "./forms/task_form";
import { ident_tags } from "./tags";

var goal_link: string;

export class TaskIndexCard implements PlanningIndexCard{
    Name: string;
    Parent: string;
    ModeTag: string;
    IdentTag: string;
    StatusTag: string;
    TargetDate: Date | null;
    AnticipatedDate: Date | null;
    CompletedDate: Date |  null;
    UserTags: Array<string>;
    constructor(){
        this.Name = "";
        this.Parent = "";
        this.ModeTag = "";
        this.IdentTag = ident_tags.PLANNING_TASK;
        this.StatusTag = "";
        this.TargetDate = null;
        this.AnticipatedDate = null;
        this.CompletedDate = null;
        this.UserTags = [];
    }
}

export class TasksModal extends Modal {
	taskIndexCard: PlanningIndexCard;
    callbackFunc: (result: boolean, plannerInstance: Planner) => void;
    planner_instance: Planner;

    constructor(app: App) {
		super(app);
    };

    display(task_index_card: TaskIndexCard, planner_instance: Planner, callback: (result: boolean, planner: Planner) => void) {
        this.callbackFunc = callback;
        this.taskIndexCard = task_index_card;
        this.open()
        this.contentEl.empty();
        this.setTitle("Create a new Task");
        this.contentEl.innerHTML = taskForm;
        this.planner_instance = planner_instance;

        (document.getElementById("createTask") as HTMLButtonElement).onclick = () => {
            this.taskIndexCard.Name = (document.getElementById("task-name") as HTMLInputElement).value;
            this.taskIndexCard.ModeTag = (document.getElementById("mode-tag") as HTMLSelectElement).value;
            this.taskIndexCard.TargetDate = new Date((document.getElementById("target-date")as HTMLDataElement).value);

            this.callbackFunc(true,  this.planner_instance);
            this.close();
        }
        (document.getElementById("cancelCreate") as HTMLButtonElement).onclick = () => {
            this.callbackFunc(false, this.planner_instance);
            this.close();
        }
    }
}
