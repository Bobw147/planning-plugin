import { Notice } from "obsidian";
import PlanningPlugin from "src/main"
import { GoalsModal } from "./goals";
import { GoalIndexCard } from "./goals";
import { Vault } from "obsidian";

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
    
    ensure_folder_exists(): void {
            let goals_folder: string;
      //      let base_path: string;
      
            alert("Checking folder")
            goals_folder = this.plugin.settings.goalsFolder;
            this.plugin.app.vault.createFolder(goals_folder);
            alert("Created folder");
      }
      
    create_goal_response(result: boolean, thisInstance: Planner): void {
      if (result){
        thisInstance.ensure_folder_exists();
        alert("Processing folder")
        var goalName = "Goal Name is : " + this.goalIndexCard.Name;
      }
      else {
          alert("Goal creation cancelled");
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