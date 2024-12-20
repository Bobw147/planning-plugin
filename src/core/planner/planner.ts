import { App, TFile } from 'obsidian';
import PlanningPlugin from 'src/main';
import { Settings } from 'src/settings/Settings';
import { createFolder } from 'src/utils/utils';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { goalPageContent } from '../code-blocks/goal-code-block';
import { projectPageContent } from '../code-blocks/project-code-block';
import { taskPageContent } from '../code-blocks/task-code-block';
import { GoalIndexCard } from '../goals/goal-index-card';
import { GoalsModal } from '../goals/goals-modal';
import { ProjectIndexCard } from '../projects/project-index-card';
import { ProjectsModal } from '../projects/projects-modal';
import { SubtaskIndexCard } from '../subtasks/subtask-index-card';
import { SubtasksModal } from '../subtasks/subtasks-modal';
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

var thisModal: Planner;

export type taskToSubtaskModeSwitcher = (taskIndexCard: ITaskIndexCard) => void;

export class Planner {
    private goalsModal?: GoalsModal | null;
    private projectsModal?: ProjectsModal | null;
    private tasksModal?: TasksModal | null;
    private subtasksModal : SubtasksModal | null;
    private app: App;
    private settings: Settings;
    private indexCardManager;
 
    constructor(private plugin: PlanningPlugin){
        this.plugin = plugin;
        this.app = this.plugin.app;
        this.settings = this.plugin.settings;
        this.indexCardManager = new IndexCardManager(this.app);
        thisModal = this;
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

    createTask(giventaskIndexCard: ITaskIndexCard | null): void{
        // Make sure there is a valid taskINdexCard im play
        const taskIndexCard: ITaskIndexCard = (giventaskIndexCard === null) ? new TaskIndexCard() : giventaskIndexCard;
 
        this.tasksModal = new TasksModal(this.app, this.settings, taskIndexCard, DisplayMode.CREATE_MODE, 
        async (hasChanged: boolean, app: App, settings: Settings) => {
            if (hasChanged) {
                await createFolder(app.vault, settings.tasksFolder);
                const file: TFile = await app.vault.create(settings.tasksFolder + "/" + taskIndexCard.name + ".md", emptyString);

                // Save the data from the form into the files frontmatter then write the dataviw script
                await app.vault.modify(file, taskPageContent())
                await taskIndexCard.save(app.fileManager, file);
                this.indexCardManager.add(taskIndexCard);
                this.tasksModal?.close();
                this.tasksModal = null;
            }
        },
        (taskIndexCard: ITaskIndexCard) => {
            debugger;
            const subtaskIndexCard: ISubtaskIndexCard = new SubtaskIndexCard();
            taskIndexCard.copyInto(subtaskIndexCard);
            this.tasksModal?.close();
            this.tasksModal = null;
            this.createSubtask(subtaskIndexCard, DisplayMode.CREATE_MODE);
        });
        this.tasksModal.open();
    }

    createSubtask(givenSubtaskIndexCard: ISubtaskIndexCard, displayMode: DisplayMode): void{
        const subtaskIndexCard = (givenSubtaskIndexCard === null) ? new SubtaskIndexCard : givenSubtaskIndexCard

        this.subtasksModal = new SubtasksModal(this.app, this.settings, subtaskIndexCard, DisplayMode.CREATE_MODE, 
        async (hasChanged: boolean, app: App, settings: Settings) => {
            
            if (hasChanged) {
                await createFolder(app.vault, settings.tasksFolder);
                const file: TFile = await app.vault.create(settings.tasksFolder + "/" + subtaskIndexCard.name + ".md", emptyString);

                // Save the data from the form into the files frontmatter then write the dataviw script
                await app.vault.modify(file, taskPageContent())
                await subtaskIndexCard.save(app.fileManager, file);
                this.indexCardManager.add(subtaskIndexCard);
                this.tasksModal?.close();
                this.tasksModal = null;
            }
        },
        (subtaskIndexCard: ISubtaskIndexCard) => {
            const taskIndexCard: ITaskIndexCard = new TaskIndexCard();
            subtaskIndexCard.copyInto(taskIndexCard);
            this.subtasksModal?.close();
            this.subtasksModal = null;
            this.createTask(taskIndexCard);
        });
        this.subtasksModal.open();
    }

    async showGoalIndexCard(): Promise<void>{
        const activeFile: TFile | null = this.app.workspace.getActiveFile();
        if (activeFile !== null) {
            const goalIndexCard: GoalIndexCard = new GoalIndexCard()
            await goalIndexCard.load(this.app.fileManager, activeFile);
            this.goalsModal = new GoalsModal(this.app, this.app.vault, this.settings, 
                goalIndexCard, DisplayMode.INDEX_CARD_MODE, async (hasChanged: boolean, app: App, settings: Settings) => {
                // This callback occurs when the modal is closing.
                if (hasChanged) {
                    this.goalsModal?.updateIndexCard(goalIndexCard);
                }
                this.goalsModal?.close();
                this.goalsModal = null;
            });
            this.goalsModal.open();
        }
    }

    async showProjectIndexCard(): Promise<void> {
        const activeFile: TFile | null = this.app.workspace.getActiveFile();
        if (activeFile !== null) {
            const projectIndexCard: IProjectIndexCard = new ProjectIndexCard()
            await projectIndexCard.load(this.app.fileManager, activeFile);
            this.projectsModal = new ProjectsModal(this.app, this.app.vault, this.settings, 
                projectIndexCard, DisplayMode.INDEX_CARD_MODE, async (hasChanged: boolean, app: App, settings: Settings) => {
                // This callback occurs when the modal is closing.
                if (hasChanged) {
                    this.projectsModal?.updateIndexCard(projectIndexCard);
                }
                this.projectsModal?.close();
                this.projectsModal = null;
            });
            this.projectsModal.open();
        }
    }

    async showTaskIndexCard(givenTaskIndexCard?: ITaskIndexCard): Promise<void> {
        const activeFile: TFile | null = this.app.workspace.getActiveFile();
        if (activeFile !== null) {
            // Make sure we have the correct typwe ofindex card loaded
            const taskIndexCard: ITaskIndexCard = (typeof givenTaskIndexCard === 'undefined')
            ? new TaskIndexCard() : givenTaskIndexCard;
            await taskIndexCard.load(this.app.fileManager, activeFile);

            this.tasksModal = new TasksModal(this.app, this.settings, taskIndexCard, DisplayMode.INDEX_CARD_MODE, 
                async (hasChanged: boolean, app: App, settings: Settings) => {
                    // This callback occurs when the modal is closing.
                    if (hasChanged) {
                        thisModal.tasksModal?.updateIndexCard(taskIndexCard);
                    }
                    thisModal.tasksModal?.close();
                    thisModal.tasksModal = null;
                 },
                async (taskIndexCard: ITaskIndexCard) => {
                    const subtaskIndexCard: ISubtaskIndexCard = new SubtaskIndexCard();
                    taskIndexCard.copyInto(subtaskIndexCard);
                    thisModal.tasksModal?.close();
                    thisModal.tasksModal = null;
                    this.showSubtaskIndexCard(subtaskIndexCard);
                }
            )
            this.tasksModal.open();
        }
    }

    async showSubtaskIndexCard(givenSubtaskIndexCard?: ISubtaskIndexCard): Promise<void> {
        const activeFile: TFile | null = this.app.workspace.getActiveFile();
        if (activeFile !== null) {
            // Make sure we have the correct typwe ofindex card loaded
            const subtaskIndexCard: ISubtaskIndexCard = (typeof givenSubtaskIndexCard === 'undefined') 
            ? new SubtaskIndexCard() : givenSubtaskIndexCard;
            await subtaskIndexCard.load(this.app.fileManager, activeFile);

            this.subtasksModal = new SubtasksModal(this.app, this.settings, subtaskIndexCard, DisplayMode.INDEX_CARD_MODE, 
                async (hasChanged: boolean, app: App, settings: Settings) => {
                    // This callback occurs when the modal is closing.
                    if (hasChanged) {
                        thisModal.subtasksModal?.updateIndexCard(subtaskIndexCard);
                    }
                    thisModal.tasksModal?.close();
                    thisModal.tasksModal = null;
                 },
                async (subtaskindexCard: ISubtaskIndexCard) => {
                    const taskIndexCard: ITaskIndexCard = new TaskIndexCard();
                    subtaskIndexCard.copyInto(taskIndexCard);
                    this.subtasksModal?.close();
                    this.subtasksModal = null;
                    this.createTask(taskIndexCard);
                }
            );
            this.subtasksModal.open();
        }
    }
}