import { App, Notice } from "obsidian";
import PlanningPlugin from "src/main"
import { status_tag_type } from "./tags";
import { GoalsModal } from "./goals";
import { GoalIndexCard } from "./goals";

export class Planner{
    private goals_modal: GoalsModal;
    private goalIndexCard: GoalIndexCard; 

    constructor(private plugin: PlanningPlugin){
      this.goals_modal = new GoalsModal(this.plugin.app);
    }

    async setup(): Promise<void>{  

    }

    create_goal(): void {
//        this.goals_modal = new GoalsModal(this.plugin.app);
//        goals_modal.submit = this.create_goal_response
        this.goals_modal.show(this.create_goal_response);
    }

    create_goal_response(result: GoalIndexCard | null): void {
      if (result == null){
        alert("Goal creation cancelled");
      }
      else{
        alert("Goal creation confirmed");
      }
    }

    create_project(): void {
		new Notice('Creates a new Project');
    }

    create_task(): void{
		new Notice('Creates a new Task or SubTask');
    }
}