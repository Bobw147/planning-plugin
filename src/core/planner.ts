import PlanningPlugin from "src/main"
import { CreateGoalsModal } from "./goals";
import { ProjectsModal } from "./projects";
import { TasksModal } from "./tasks";
import { GoalIndexCard } from "./indexcards/goalIndexCard";

export class Planner {
    private goals_modal?: CreateGoalsModal | null;
    private projects_modal?: ProjectsModal | null;
    private tasks_modal?: TasksModal | null;

    constructor(private plugin: PlanningPlugin){
      this.plugin = plugin;
    }

    create_goal(): void {
        this.goals_modal = new CreateGoalsModal(this.plugin.app, this.plugin.app.vault, this.plugin.settings, new GoalIndexCard());
        this.goals_modal.display();
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