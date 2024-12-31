export interface IDictionary<T> {
    [key: string]: T;
}

export const Ident = {
    GOAL: 0,
    PROJECT: 1,
    TASK: 2,
    SUBTASK: 3
} as const;
;

export type Ident = typeof Ident[keyof typeof Ident]
export const emptyString: string = "";
export const zerothItem = 0;

export const defaultStatusTags: Array<string> = [
    "#status/inbox",
    "#status/next",
    "#status/in-progress",
    "#status/waiting-for",
    "#status/completed",
    "#status/delivered",
    "#status/archived",
    "#status/deprecated",
]

export const identTags = {
    PLANNING_GOAL: "#planning/goal",
    PLANNING_PROJECT: "#planning/project",
    PLANNING_TASK: "#planning/task",
    PLANNING_SUBTASK: "#planning/subtask",
}

export const defaultCategoryTags: Array<string>  = [
    "#planning/business",
    "#planning/personal",
    "#planning/domestic",
]

export const categoryLockStates = {
    HARD_LOCK: "hard lock",
    SOFT_LOCK: "Soft loack",
}

