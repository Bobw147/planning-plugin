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
    ModeTag: typeof mode_tag_type;
    IdentTag: typeof ident_tag_type;
    StatusTag: typeof status_tag_type;
    TargetDate: Date | null;
    PredictedDate: Date | null;
    UserTags: Array<string>;
    constructor(){
        this.Name = "";
        this.ModeTag = [];
        this.IdentTag = ident_tag_type;
        this.StatusTag = [];
        this.TargetDate = null;
        this.PredictedDate = null;
        this.UserTags = [];
    }
}

var instance: GoalsModal;
export class GoalsModal extends Modal {
	goalIndexCard: GoalIndexCard;
    callbackFunc: (result: boolean) => void;

    constructor(app: App) {
		super(app);
    };

    display(goal_index_card: GoalIndexCard, callback: (result: boolean) => void) {
        this.callbackFunc = callback;
        this.goalIndexCard = goal_index_card;

        this.contentEl.empty();
        this.setTitle("Create a new Goal");
        this.contentEl.innerHTML = goalForm;
        this.open();

        (document.getElementById("create_goal") as HTMLButtonElement).onclick = () => {
            this.goalIndexCard.Name = (document.getElementById("goal_name") as HTMLInputElement).value;
    //        this.goalIndexCard.ModeTag = (document.getElementById("mode_tag") as HTMLSelectElement).value;
            this.callbackFunc(true);
            this.close();
        }
        (document.getElementById("cancel_create") as HTMLButtonElement).onclick = () => {
            this.callbackFunc(false);
            this.close();
        }
    }
}