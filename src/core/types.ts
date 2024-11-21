export enum Ident {
    GOAL,
    PROJECT,
    TASK,
    SUBTASK
}

export const enum MessageId {
    DIV_VISIBLE = "div_visible",
    DIV_HIDDEN = "div_hidden",
    ID_GOAL_NAME = "id_goal_name",
    ID_GOAL_CATEGORY_TAG = "id_goal_category_tag",
    ID_GOAL_TARGET_DATE = "id_goal_target_date",
    ID_CREATE_GOAL_BUTTON = "id_create_goal",
    ID_CANCEL_GOAL_BUTTON = "id_cancel_goal",
}

interface IMessageDictionaryType{
    [MessageId.DIV_VISIBLE]: string;
    [MessageId.DIV_HIDDEN]: string;
    [MessageId.ID_GOAL_NAME]: string;
    [MessageId.ID_GOAL_CATEGORY_TAG]: string;
    [MessageId.ID_GOAL_TARGET_DATE]: string;
    [MessageId.ID_CREATE_GOAL_BUTTON]: string;
    [MessageId.ID_CANCEL_GOAL_BUTTON]: string;
}

export const MessageDictionary: IMessageDictionaryType = {
    [MessageId.DIV_VISIBLE]: "pl-visible",
    [MessageId.DIV_HIDDEN]: "pl-hidden",
    [MessageId.ID_GOAL_NAME]: "goal-name",
    [MessageId.ID_GOAL_CATEGORY_TAG]: "goal-category-tag",
    [MessageId.ID_GOAL_TARGET_DATE]: "goal-target-date",
    [MessageId.ID_CREATE_GOAL_BUTTON]: "create-goal-button",
    [MessageId.ID_CANCEL_GOAL_BUTTON]: "cancel-goal-button",
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

// This wrapper is necessary 
export function wrapMessage(messageId: MessageId, wrapper: string){
    return wrapper + MessageDictionary[messageId] + wrapper;
}

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

export const CategoryLockStates = {
    HARD_LOCK: "hard lock",
    SOFT_LOCK: "Soft loack",
}