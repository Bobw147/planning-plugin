import { Editor, Notice } from "obsidian";
import PlanningPlugin from "src/main"
import { GoalsModal } from "./goals";
import { GoalIndexCard } from "./goals";
import { DataviewApi } from "obsidian-dataview";
import { TFile } from "obsidian";
import { goal_page_content} from "./scripts/dataview_goal";

type callbackFunction = (result: boolean, plannerInstance: Planner) => void;

export class Planner{
    private goals_modal: GoalsModal | null;
    private goalIndexCard: GoalIndexCard; 

    constructor(private plugin: PlanningPlugin){
      this.plugin = plugin;
    }

    async setup(): Promise<void>{  

    }

    create_goal(): void {
        this.goalIndexCard = new GoalIndexCard();
        this.goals_modal = new GoalsModal(this.plugin.app);
        this.goals_modal.display(this.goalIndexCard, this, this.create_goal_response);
    }
    
    async create_file(): Promise<void> {
      let goals_folder: string;
      let goal_file: TFile;

      goals_folder = this.plugin.settings.goalsFolder;
      this.plugin.app.vault.createFolder(goals_folder);
      goal_file = await this.plugin.app.vault.create(goals_folder + '/' + this.goalIndexCard.Name + ".md", "");

      await this.plugin.app.vault.modify(goal_file, goal_page_content(this.goalIndexCard));
    }
      
    create_goal_response(result: boolean, thisInstance: Planner): void {
        if (result){
            thisInstance.create_file();
        }
        this.goals_modal = null;
    };

    create_project(): void {
		new Notice('Creates a new Project');
    }

    create_task(): void{
		new Notice('Creates a new Task or SubTask');
    }
}