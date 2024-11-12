import { App, Modal, Setting } from "obsidian";
import { PlanningIndexCard } from "./indexcard";
import { ident_tags } from "./tags";
import { goalForm } from "./forms/goal_form";
import { Planner } from "./planner";

export class GoalIndexCard implements PlanningIndexCard{
    Name: string;
    ModeTag: string;
    IdentTag: string;
    StatusTag: string;
    TargetDate: Date | null;
    AnticipatedDate: Date | null;
    CompletedDate: Date | null;
    UserTags: Array<string>;
    constructor(){
        this.Name = "";
        this.ModeTag = "";
        this.IdentTag = ident_tags.PLANNING_GOAL;
        this.StatusTag = "";
        this.TargetDate = null;
        this.AnticipatedDate = null;
        this.CompletedDate = null;
        this.UserTags = [];
    }
}

var instance: GoalsModal;
export class GoalsModal extends Modal {
	goalIndexCard: GoalIndexCard;
    callbackFunc: (result: boolean, plannerInstance: Planner) => void;
    planner_instance: Planner;

    constructor(app: App) {
		super(app);
    };

    display(goal_index_card: GoalIndexCard, planner_instance: Planner, callback: (result: boolean, planner: Planner) => void) {
        this.callbackFunc = callback;
        this.goalIndexCard = goal_index_card;
        this.open()
        this.contentEl.empty();
        this.setTitle("Create a new Goal");
        this.contentEl.innerHTML = goalForm;
        this.planner_instance = planner_instance;

        (document.getElementById("createGoal") as HTMLButtonElement).onclick = () => {
            this.goalIndexCard.Name = (document.getElementById("goal-name") as HTMLInputElement).value;
            this.goalIndexCard.ModeTag = (document.getElementById("mode-tag") as HTMLSelectElement).value;
            this.goalIndexCard.TargetDate = new Date((document.getElementById("target-date")as HTMLDataElement).value);

            this.callbackFunc(true,  this.planner_instance);
            this.close();
        }
        (document.getElementById("cancelCreate") as HTMLButtonElement).onclick = () => {
            this.callbackFunc(false, this.planner_instance);
            this.close();
        }
    }
}