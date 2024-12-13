import { TFile } from 'obsidian';
import PlanningPlugin from 'src/main';
import { createFolder } from 'src/utils/utils';

import { DisplayMode } from './base-classes/generic-planning-form';
import { GoalsModal } from './goals/goals-modal';
import { ProjectsModal } from './projects/projects-modal';
import { goalPageContent } from './scripts/dataview-goal';
import { projectPageContent } from './scripts/dataview-project';
import { taskPageContent } from './scripts/dataview-task';
import { SubtaskIndexCard } from './tasks/subtask-index-card';
import { TaskIndexCard } from './tasks/task-index-card';
import { TasksModal } from './tasks/tasks-modal';
import { IGoalIndexCard } from './types/interfaces/i-goal-index-card';
import { IPlanningIndexCard } from './types/interfaces/i-planning-index-card';
import { IProjectIndexCard } from './types/interfaces/i-project-index-card';
import { ISubtaskIndexCard } from './types/interfaces/i-subtask-index-card';
import { ITaskIndexCard } from './types/interfaces/i-task-index-card';
import { emptyString, identTags } from './types/types';

export interface IPlanner {

    create_goal(displyMode: DisplayMode): void;
    create_project(displayMode: DisplayMode): void;
    create_task(displayMode: DisplayMode): void;
    show_index_card(indexCard: IPlanningIndexCard): void;
}
export class Planner {
    private goalsModal?: GoalsModal | null;
    private projects_modal?: ProjectsModal | null;
    private tasks_modal?: TasksModal | null;

    constructor(private plugin: PlanningPlugin){
      this.plugin = plugin;
    }

    create_goal(displayMode: DisplayMode): void {
        this.goalsModal = new GoalsModal(this.plugin.app, this.plugin.app.vault, this.plugin.settings, 
            displayMode, async (goalIndexCard: IGoalIndexCard | null) => {
                if (goalIndexCard !== null) {
                    // Make sure the target folder exists then create the file
                    await createFolder(this.plugin.app.vault, this.plugin.settings.goalsFolder);
                    const file: TFile = await this.plugin.app.vault.create(this.plugin.settings.goalsFolder + "/" + goalIndexCard.name + ".md", emptyString);
            
                    // Write the dataview script into the file then add the frontmatter properties. 
                    await this.plugin.app.vault.modify(file, goalPageContent());
                    await goalIndexCard.save(this.plugin.app.fileManager, file, identTags.PLANNING_GOAL);
                }
        });
        this.goalsModal.display();
    }

    create_project(displayMode: DisplayMode): void {
        this.projects_modal = new ProjectsModal(this.plugin.app, this.plugin.app.vault, this.plugin.settings,
            displayMode, async (projectIndexCard: IProjectIndexCard | null) => {
                if (projectIndexCard !== null) {
                    await createFolder(this.plugin.app.vault, this.plugin.settings.projectsFolder);
                    const file: TFile = await this.plugin.app.vault.create(this.plugin.settings.projectsFolder + "/" + projectIndexCard.name + ".md", emptyString)
            
                    // Write the dataview script into the file then add the frontmatter properties. 
                    await this.plugin.app.vault.modify(file, projectPageContent());
                    await projectIndexCard.save(this.plugin.app.fileManager, file, identTags.PLANNING_PROJECT);
                }
        });
        this.projects_modal.display();
    }

    create_task(displayMode: DisplayMode): void{
        this.tasks_modal = new TasksModal(this.plugin.app, this.plugin.app.vault, this.plugin.settings,
            displayMode, async (indexCard: ITaskIndexCard | ISubtaskIndexCard | null) => {
                if (indexCard === null) return;
                if (indexCard instanceof TaskIndexCard)  {
                    const taskIndexCard = indexCard as TaskIndexCard;
                    await createFolder(this.plugin.app.vault, this.plugin.settings.tasksFolder);
                    const file: TFile = await this.plugin.app.vault.create(this.plugin.settings.tasksFolder + "/" + taskIndexCard.name + ".md", emptyString);

                    // Save the data from the form into the files frontmatter then write the dataviw script
                    await this.plugin.app.vault.modify(file, taskPageContent(taskIndexCard))
                    await taskIndexCard.save(this.plugin.app.fileManager, file, identTags.PLANNING_TASK);
                }
                else if (indexCard instanceof SubtaskIndexCard) {
                    const subtaskIndexCard = indexCard as SubtaskIndexCard;
                    await createFolder(this.plugin.app.vault, this.plugin.settings.subtasksFolder);
                    const file: TFile = await this.plugin.app.vault.create(this.plugin.settings.subtasksFolder + "/" + subtaskIndexCard.name + ".md", emptyString);

                    // Save the data from the form into the files frontmatter then write the dataviw script
                    await this.plugin.app.vault.modify(file, taskPageContent(subtaskIndexCard))
                    await subtaskIndexCard.save(this.plugin.app.fileManager, file, identTags.PLANNING_TASK);
                }
        }); 
        this.tasks_modal.display();
    }

    show_index_card(indexCard: IPlanningIndexCard): void{

    }
}