import { PlanningIndexCard } from "./indexcard";
import { App, Modal } from "obsidian";
import { Planner } from "./planner";
import { projectForm } from "./forms/project_form";
import { ident_tags } from "./tags";

var goal_link: string;

export class ProjectIndexCard implements PlanningIndexCard{
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
        this.IdentTag = ident_tags.PLANNING_PROJECT;
        this.StatusTag = "";
        this.TargetDate = null;
        this.AnticipatedDate = null;
        this.CompletedDate = null;
        this.UserTags = [];
    }
}

export class ProjectsModal extends Modal {
	projectIndexCard: PlanningIndexCard;
    callbackFunc: (result: boolean, plannerInstance: Planner) => void;
    planner_instance: Planner;

    constructor(app: App) {
		super(app);
    };

    display(project_index_card: ProjectIndexCard, planner_instance: Planner, callback: (result: boolean, planner: Planner) => void) {
        this.callbackFunc = callback;
        this.projectIndexCard = project_index_card;
        this.open()
        this.contentEl.empty();
        this.setTitle("Create a new Project");
        this.contentEl.innerHTML = projectForm;
        this.planner_instance = planner_instance;

        (document.getElementById("createProject") as HTMLButtonElement).onclick = () => {
            this.projectIndexCard.Name = (document.getElementById("project-name") as HTMLInputElement).value;
            this.projectIndexCard.ModeTag = (document.getElementById("mode-tag") as HTMLSelectElement).value;
            this.projectIndexCard.TargetDate = new Date((document.getElementById("target-date")as HTMLDataElement).value);

            this.callbackFunc(true,  this.planner_instance);
            this.close();
        }
        (document.getElementById("cancelCreate") as HTMLButtonElement).onclick = () => {
            this.callbackFunc(false, this.planner_instance);
            this.close();
        }
    }
}
