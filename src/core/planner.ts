import PlanningPlugin from "src/main"
import { GoalsModal } from "./goals";
import { ProjectsModal } from "./projects";
import { TasksModal } from "./tasks";

export class Planner {
    private goals_modal?: GoalsModal | null;
    private projects_modal?: ProjectsModal | null;
    private tasks_modal?: TasksModal | null;

    constructor(private plugin: PlanningPlugin){
      this.plugin = plugin;
    }

    create_goal(): void {
        this.goals_modal = new GoalsModal(this.plugin.app, this.plugin.app.vault, this.plugin.settings);
        this.goals_modal.display();
    }

    showGoalIndexCard(): void {

    }
    
    create_project(): void {
      this.projects_modal = new ProjectsModal(this.plugin.app, this.plugin.app.vault, this.plugin.settings);
      this.projects_modal.display();
    }

    create_task(): void{
      this.tasks_modal = new TasksModal(this.plugin.app, this.plugin.app.vault, this.plugin.settings);
      this.tasks_modal.display();
    }
}