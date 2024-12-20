import { ISubtaskIndexCard } from './i-subtask-index-card';
import { ITaskIndexCard } from './i-task-index-card';

export interface IPlanner {

    createGoal(): void;
    createProject(): void;
    createSubtask(subtaskIndexCard?: ISubtaskIndexCard): void;
    createTask(taskIndexCard?: ITaskIndexCard): void;
    showGoalIndexCard(): Promise<void>;
    showProjectIndexCard(): Promise<void>;
    showSubtaskIndexCard(subtaskIndexCard?: ISubtaskIndexCard): Promise<void>;
    showTaskIndexCard(taskIndexCard?: ITaskIndexCard): Promise<void>;
};