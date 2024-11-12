import { Vault, Notice } from "obsidian";
import PlanningPlugin from "src/main"
import { GoalsModal, GoalIndexCard } from "./goals";
import { ProjectsModal, ProjectIndexCard } from "./projects";
import { TasksModal, TaskIndexCard } from "./tasks";
import { goal_page_content} from "./scripts/dataview_goal";
import { project_page_content } from "./scripts/dataview_project";
import { task_page_content } from "./scripts/dataview_task";

type callbackFunction = (result: boolean, plannerInstance: Planner) => void;

export class Planner{
    private goals_modal: GoalsModal | null;
    private projects_modal: ProjectsModal | null;
    private tasks_modal: TasksModal | null;
    private goalIndexCard: GoalIndexCard; 
    private projectIndexCard: ProjectIndexCard;
    private taskIndexCard: TaskIndexCard;

    constructor(private plugin: PlanningPlugin){
      this.plugin = plugin;
    }

    create_goal(): void {
        this.goalIndexCard = new GoalIndexCard();
        this.goals_modal = new GoalsModal(this.plugin.app);
        this.goals_modal.display(this.goalIndexCard, this, this.create_goal_response);
    }
          
    async create_goal_response(result: boolean, inst: Planner): Promise<void> {
        if (result){
            let goals_folder: string;
            let vault: Vault;

            // Typescript has context switched 'this' to be that of the caller.
            // 'inst' is the correct object reference.
            goals_folder = inst.plugin.settings.goalsFolder;
            vault = inst.plugin.app.vault;

            await inst.plugin.app.vault.createFolder(goals_folder)
            vault.modify(await vault.create(goals_folder + "/" + inst.goalIndexCard.Name + ".md", ""), goal_page_content(inst.goalIndexCard))
        }
        this.goals_modal = null;
    };

    create_project(): void {
      this.projectIndexCard = new ProjectIndexCard();
      this.projects_modal = new ProjectsModal(this.plugin.app);
      this.projects_modal.display(this.projectIndexCard, this, this.create_project_response);
    }

    async create_project_response(result: boolean, inst: Planner) {
        if (result) {
          let projects_folder: string;
          let vault: Vault;

          // Typescript has context switched 'this' to be that of the caller.
          // 'inst' is the correct object reference.
          projects_folder = inst.plugin.settings.projectsFolder;
          vault = inst.plugin.app.vault;

          await inst.plugin.app.vault.createFolder(projects_folder)
          vault.modify(await vault.create(projects_folder + "/" + inst.projectIndexCard.Name + ".md", ""), project_page_content(inst.projectIndexCard))
      }
        this.projects_modal = null;
    }

    create_task(): void{
      this.taskIndexCard = new TaskIndexCard();
      this.tasks_modal = new TasksModal(this.plugin.app);
      this.tasks_modal.display(this.taskIndexCard, this, this.create_task_response);
    }

    async create_task_response(result: boolean, inst: Planner) {
      if (result) {
        let tasks_folder: string;
        let vault: Vault;

        // Typescript has context switched 'this' to be that of the caller.
        // 'inst' is the correct object reference.
        tasks_folder = inst.plugin.settings.tasksFolder;
        vault = inst.plugin.app.vault;

        await inst.plugin.app.vault.createFolder(tasks_folder)
        vault.modify(await vault.create(tasks_folder + "/" + inst.taskIndexCard.Name + ".md", ""), task_page_content(inst.taskIndexCard))
      }
      this.tasks_modal = null;
    }
}