import PlanningPlugin from "src/main"
import { CreateGoalsModal } from "./goals/goals";
import { ProjectsModal } from "./projects/projects";
import { TasksModal } from "./tasks/tasks";
import { GoalIndexCard } from "./goals/goalIndexCard";
import { DisplayMode } from "./baseclasses/genericPlanningForm";
export class Planner {
    private goals_modal?: CreateGoalsModal | null;
    private projects_modal?: ProjectsModal | null;
    private tasks_modal?: TasksModal | null;

    constructor(private plugin: PlanningPlugin){
      this.plugin = plugin;
    }

    create_goal(displayMode: DisplayMode): void {
        this.goals_modal = new CreateGoalsModal(this.plugin.app, this.plugin.app.vault, this.plugin.settings, new GoalIndexCard(), displayMode);
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