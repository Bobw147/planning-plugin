import PlanningPlugin from 'src/main';

import { DisplayMode } from './base-classes/generic-planning-form';
import { GoalIndexCard } from './goals/goal-index-card';
import { GoalsModal } from './goals/goals';
import { ProjectIndexCard } from './projects/project-index-card';
import { ProjectsModal } from './projects/projects';
import { TaskIndexCard } from './tasks/task-index-card';
import { TasksModal } from './tasks/tasks';

export class Planner {
    private goals_modal?: GoalsModal | null;
    private projects_modal?: ProjectsModal | null;
    private tasks_modal?: TasksModal | null;

    constructor(private plugin: PlanningPlugin){
      this.plugin = plugin;
    }

    create_goal(displayMode: DisplayMode): void {
        this.goals_modal = new GoalsModal(this.plugin.app, this.plugin.app.vault, this.plugin.settings, new GoalIndexCard(), displayMode);
        this.goals_modal.display();
    }

    create_project(displayMode: DisplayMode): void {
      this.projects_modal = new ProjectsModal(this.plugin.app, this.plugin.app.vault, this.plugin.settings, new ProjectIndexCard(), displayMode);
      this.projects_modal.display();
    }

    create_task(displayMode: DisplayMode): void{
      this.tasks_modal = new TasksModal(this.plugin.app, this.plugin.app.vault, this.plugin.settings, new TaskIndexCard(), displayMode);
      this.tasks_modal.display();
    }
}