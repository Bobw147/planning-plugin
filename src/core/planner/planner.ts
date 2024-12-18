import { randomUUID } from 'crypto';
import { App, TFile } from 'obsidian';
import PlanningPlugin from 'src/main';
import { Settings } from 'src/settings/Settings';
import { createFolder } from 'src/utils/utils';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { GoalIndexCard } from '../goals/goal-index-card';
import { GoalsModal } from '../goals/goals-modal';
import { ProjectIndexCard } from '../projects/project-index-card';
import { ProjectsModal } from '../projects/projects-modal';
import { goalPageContent } from '../scripts/dataview-goal';
import { projectPageContent } from '../scripts/dataview-project';
import { taskPageContent } from '../scripts/dataview-task';
import { SubtaskIndexCard } from '../tasks/subtask-index-card';
import { TaskIndexCard } from '../tasks/task-index-card';
import { TasksModal } from '../tasks/tasks-modal';
import { IGoalIndexCard } from '../types/interfaces/i-goal-index-card';
import { IPlanningIndexCard } from '../types/interfaces/i-planning-index-card';
import { IProjectIndexCard } from '../types/interfaces/i-project-index-card';
import { ISubtaskIndexCard } from '../types/interfaces/i-subtask-index-card';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { emptyString } from '../types/types';
import { IndexCardManager } from './index-card-manager';

export interface IPlanner {
    createGoal(displyMode: DisplayMode): void;
    createProject(displayMode: DisplayMode): void;
    createTask(displayMode: DisplayMode): void;
    show_index_card(indexCard: IPlanningIndexCard): void;
}

export class Planner {
    private goalsModal?: GoalsModal | null;
    private projectsModal?: ProjectsModal | null;
    private tasksModal?: TasksModal | null;
    private app: App;
    private settings: Settings;
    private indexCardManager;
 
    constructor(private plugin: PlanningPlugin){
        this.plugin = plugin;
        this.app = this.plugin.app;
        this.settings = this.plugin.settings;
        this.indexCardManager = new IndexCardManager(this.app);
    }

    createGoal(displayMode: DisplayMode): void {
        const goalIndexCard: IGoalIndexCard = new GoalIndexCard();
        this.goalsModal = new GoalsModal(this.app, this.app.vault, this.settings, 
            goalIndexCard, displayMode, async (hasChanged: boolean, app, settings: Settings) => {
            if (hasChanged) {
                // Make sure the target folder exists then create the file
                await createFolder(app.vault, settings.goalsFolder);
                const file: TFile = await app.vault.create(settings.goalsFolder + "/" + goalIndexCard.name + ".md", emptyString);
            
                // Write the dataview script into the file then add the frontmatter properties. 
                await app.vault.modify(file, goalPageContent());
                await goalIndexCard.save(app.fileManager, file);
                this.indexCardManager.add(goalIndexCard);
                this.goalsModal?.close();
                this.goalsModal = null;
            }
        });
        this.goalsModal.open();
    }

    createProject(displayMode: DisplayMode): void {
        const projectIndexCard: IProjectIndexCard = new ProjectIndexCard();
        this.projectsModal = new ProjectsModal(this.app, this.app.vault, this.settings,
            projectIndexCard, displayMode, async (hasChanged: boolean, app: App, settings: Settings) => {
                if (hasChanged) {
                    await createFolder(app.vault, settings.projectsFolder);
                    const file: TFile = await app.vault.create(settings.projectsFolder + "/" + projectIndexCard.name + ".md", emptyString);
            
                    // Write the dataview script into the file then add the frontmatter properties. 
                    await app.vault.modify(file, projectPageContent());
                    await projectIndexCard.save(app.fileManager, file);
                    this.indexCardManager.add(projectIndexCard);
                    this.projectsModal?.close();
                    this.projectsModal = null;
                }
        });
        this.projectsModal.open();
    }

    createTask(displayMode: DisplayMode): void{
        this.tasksModal = new TasksModal(this.app, this.app.vault, this.settings,
            displayMode, async (indexCard: ITaskIndexCard | ISubtaskIndexCard | null, app: App, settings: Settings) => {
                if (indexCard === null) return;
                if (indexCard instanceof TaskIndexCard)  {
                    debugger;
                    const taskIndexCard = indexCard as TaskIndexCard;
                    await createFolder(app.vault, settings.tasksFolder);
                    const file: TFile = await app.vault.create(settings.tasksFolder + "/" + taskIndexCard.name + ".md", emptyString);

                    // Save the data from the form into the files frontmatter then write the dataviw script
                    await app.vault.modify(file, taskPageContent(taskIndexCard))
                    await taskIndexCard.save(app.fileManager, file);
                    this.indexCardManager.add(taskIndexCard);
                }
                else if (indexCard instanceof SubtaskIndexCard) {
                    const subtaskIndexCard = indexCard as SubtaskIndexCard;
                    await createFolder(pp.vault, settings.subtasksFolder);
                    const file: TFile = await app.vault.create(settings.subtasksFolder + "/" + subtaskIndexCard.name + ".md", emptyString);

                    // Save the data from the form into the files frontmatter then write the dataviw script
                    await app.vault.modify(file, taskPageContent(subtaskIndexCard))
                    await subtaskIndexCard.save(app.fileManager, file);
                    this.indexCardManager.add(subtaskIndexCard);
                }
        }); 
        this.tasksModal.open();
    }

    async showGoalIndexCard(): Promise<void>{
        const activeFile: TFile | null = this.app.workspace.getActiveFile();
        if (activeFile !== null) {
            const goalIndexCard: GoalIndexCard = new GoalIndexCard()
            await goalIndexCard.load(this.app.fileManager, activeFile);
            this.goalsModal = new GoalsModal(this.plugin.app, this.plugin.app.vault, this.plugin.settings, 
                goalIndexCard, DisplayMode.INDEX_CARD_MODE, async (result: boolean) => {
                // This callback occurs when the modal is closing.
                if (result) {
                    this.goalsModal?.updateIndexCard(goalIndexCard,  DisplayMode.INDEX_CARD_MODE);
                }
            });
            this.goalsModal.open();
        }
    }

    async showProjectIndexCard(): Promise<void> {
        const activeFile: TFile | null = this.app.workspace.getActiveFile();
        if (activeFile !== null) {
            const projectIndexCard: IProjectIndexCard = new ProjectIndexCard()
            await projectIndexCard.load(this.app.fileManager, activeFile);
            this.projectsModal = new ProjectsModal(this.plugin.app, this.plugin.app.vault, this.plugin.settings, 
                projectIndexCard, DisplayMode.INDEX_CARD_MODE, async (result: boolean) => {
                // This callback occurs when the modal is closing.
                if (result) {
                    this.goalsModal?.updateIndexCard(projectIndexCard,  DisplayMode.INDEX_CARD_MODE);
                }
            });
            this.projectsModal.open();
        }
    }

    async showTaskIndexCard(): Promise<void> {

    }

    async showSubtaskIndexCard(): Promise<void> {

    }
}