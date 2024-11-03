import { App, Notice } from "obsidian";
import PlanningPlugin from "src/main"
import { status_tag_type } from "./tags";
import { GoalsModal } from "./goals";
import { GoalIndexCard } from "./goals";

type callbackFunction = (result: boolean) => void;

export class Planner{
    private goals_modal: GoalsModal | null;
    private goalIndexCard: GoalIndexCard; 

    constructor(private plugin: PlanningPlugin){
    }

    async setup(): Promise<void>{  

    }

    create_goal(): void {
        this.goalIndexCard = new GoalIndexCard();
        this.goals_modal = new GoalsModal(this.plugin.app);
        this.goals_modal.show(this.goalIndexCard, this.create_goal_response);
    }

    create_goal_response(result: boolean): void {
      if (result){
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