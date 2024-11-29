export interface IDictionary<T> {
    [key: string]: T;
}

export enum Ident {
    GOAL,
    PROJECT,
    TASK,
    SUBTASK
}

export const emptyString: string = "";

export enum WrapperType {
    NONE = "\"\"",      // Reduces via """" to ""
    SINGLE_QUOTE = '\'\\\'\'',      // Reduces via '('\'')' to '\'' ...brackets are forclarification only
    DOUBLE_QUOTE = "\"\\\"\"",      // Reduces via "("\"")" to "\"" ...brackets are for clarfication only
}

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