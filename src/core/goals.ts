import { App, Modal, Setting } from "obsidian";
import { PlanningIndexCard } from "./indexcard";
import { mode_tag_type, ident_tag_type, status_tag_type } from "./tags";
import { readFileSync } from 'fs';
import { join } from 'path';
import { goalForm } from "./forms/goal_form";

function readHtmlFile(filename: string): string {
    const filePath = join(__dirname, filename);
    const fileContents = readFileSync(filePath, 'utf-8');
    return fileContents;
}

export class GoalIndexCard implements PlanningIndexCard{
    Name: string;
    ModeTag: mode_tag_type | null;
    IdentTag: ident_tag_type | null;
    StatusTag: status_tag_type | null;
    TargetDate: Date | null;
    PredictedDate: Date | null;
    UserTags: Array<string>;
    constructor(){
        this.Name = "";
        this.ModeTag = null;
        this.IdentTag = ident_tag_type.PLANNING_GOAL;
        this.StatusTag = null;
        this.TargetDate = null;
        this.PredictedDate = null;
        this.UserTags = [];
    }
}

var instance: GoalsModal;
export class GoalsModal extends Modal {
	goalIndexCard: GoalIndexCard;
    goal_setting: string;
    submit: (result: GoalIndexCard | null) => void;
    callbackFunc: (result: GoalIndexCard | null) => void;

    constructor(app: App) {
		super(app);
    };

    show(callback: (indexCard: GoalIndexCard | null) => void) {
        this.callbackFunc = callback;
        this.goalIndexCard = new GoalIndexCard();

        this.contentEl.empty();
        this.setTitle("Create a new Goal");
        this.contentEl.innerHTML = goalForm;
        this.open();
        const create_goal = document.getElementById("create_goal") as HTMLButtonElement;
        create_goal.onclick = () => this.callbackFunc(this.goalIndexCard);
        const cancel_goal = document.getElementById("cancel_create") as HTMLButtonElement;
        cancel_goal.onclick = () => this.callbackFunc(null);

    }
}