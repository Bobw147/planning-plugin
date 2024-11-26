export enum Ident {
    GOAL,
    PROJECT,
    TASK,
    SUBTASK
}

export const enum ElementId {
    DIV = 'div',
    LABEL = 'label',
    SELECT = 'select',
    OPTION = 'option',
    INPUT = 'input',
}

export enum WrapperType {
    NONE = "\"\"",      // Reduces via """" to ""
    QUOTE = "\"\\\"\"",     // Reduces via ""\""to "\""
}

alert("wrapperType reductions are : " + WrapperType.NONE + " and " + WrapperType.QUOTE);

export const enum MessageId {

    // Style class names
    STYLE_DIV_VISIBLE = "style_div_visible",
    STYLE_DIV_HIDDEN = "style_div_hidden",

    // Goal Creation Form
    ID_CF_GOAL_BLOCK = "id_cf_goal_block",
    ID_CF_GOAL_NAME = "id_cf_goal_name",
    ID_CF_GOAL_CATEGORY_TAG = "id_cf_goal_category_tag",
    ID_CF_GOAL_TARGET_DATE = "id_cf_goal_target_date",
    ID_CF_GOAL_CREATE_BUTTON = "id_cf_create_goal",
    ID_CF_GOAL_CANCEL_BUTTON = "id_cf_cancel_goal",

    // Project Creation Form
    ID_CF_PROJECT_BLOCK = "id_cf_project_block",
    ID_CF_PROJECT_NAME = "id_cf_project_name",
    ID_CF_PROJECT_GOAL_NAME = "id_cf_project_goal_name",
    ID_CF_PROJECT_CATEGORY_TAG = "id_cf_project_category_tag",
    ID_CF_PROJECT_TARGET_DATE = "id_cf_project_target_date",
    ID_CF_PROJECT_CREATE_BUTTON = "id_cf_project_create_button",
    ID_CF_PROJECT_CANCEL_BUTTON = "id_cf_project_cancel_button",

    // Task Creation Form
    ID_CF_TASK_BLOCK = "id_cf_task_block",
    ID_CF_TASK_NAME = "id_cf_task_name",
    ID_CF_TASK_PROJECT_NAME = "id_cf_task_project_name",
    ID_CF_TASK_CATEGORY_TAG = "id_cf_task_category_tag",
    ID_CF_TASK_TARGET_DATE = "id_cf_task_target_date",
    ID_CF_TASK_CREATE_BUTTON = "id_cf_task_create_button",
    ID_CF_TASK_CANCEL_BUTTON = "id_cf_task_cancel_button",

    // Goal Index Card Form
    ID_IC_GOAL_INDEX_CARD = "id_ic_goal_index_card",
    ID_IC_GOAL_NAME_LABEL = "id_ic_goal_name_label",
    ID_IC_GOAL_NAME = "id_ic_goal_name",
    ID_IC_GOAL_CATEGORY_TAG = "id_ic_goal_category_tag",
    ID_IC_GOAL_STATUS_TAG = "id_ic_goal_status_tag",
    ID_IC_GOAL_IDENT_TAG = "id_ic_goal_ident_tag",
    ID_IC_GOAL_TARGET_DATE = "id_ic_goal_target_date",
    ID_IC_GOAL_EXPECTED_DATE = "id_ic_goal_expected_date",
    ID_IC_GOAL_COMPLETED_DATE = "id_ic_goal_completed_date",
    ID_IC_GOAL_USER_TAGS = "id_ic_goal_user_tags",

    // Project Index Card Form
    ID_IC_PROJECT_INDEX_CARD = "id_ic_project_index_card",
    ID_IC_PROJECT_NAME = "id_ic_project_name",
    ID_IC_PROJECT_GOAL_NAME = "id_ic_project_goal_name",
    ID_IC_PROJECT_CATEGORY_TAG = "id_ic_project_category_tag",
    ID_IC_PROJECT_STATUS_TAG = "id_ic_project_status_tag",
    ID_IC_PROJECT_IDENT_TAG = "id_ic_project_ident_tag",
    ID_IC_PROJECT_TARGET_DATE = "id_ic_project_target_date",
    ID_IC_PROJECT_EXPECTED_DATE = "id_ic_gproject_expected_date",
    ID_IC_PROJECT_COMPLETED_DATE = "id_ic_project_completed_date",
    ID_IC_PROJECT_USER_TAGS = "id_ic_project_user_tags",

    // Task Index Card Form
    ID_IC_TASK_INDEX_CARD = "id_ic_task_index_card",
    ID_IC_TASK_NAME = "id_ic_task_name",
    ID_IC_TASK_PROJECT_NAME = "id_ic_task_project_name",
    ID_IC_TASK_CATEGORY_TAG = "id_ic_task_category_tag",
    ID_IC_TASK_STATUS_TAG = "id_ic_task_status_tag",
    ID_IC_TASK_IDENT_TAG = "id_ic_task_ident_tag",
    ID_IC_TASK_TARGET_DATE = "id_ic_task_target_date",
    ID_IC_TASK_EXPECTED_DATE = "id_ic_task_expected_date",
    ID_IC_TASK_COMPLETED_DATE = "id_ic_task_completed_date",
    ID_IC_TASK_USER_TAGS = "id_ic_task_user_tags",
}

interface IMessageDictionaryType{
    [MessageId.STYLE_DIV_VISIBLE]: string;
    [MessageId.STYLE_DIV_HIDDEN]: string;

    // Goal Creation Form
    [MessageId.ID_CF_GOAL_BLOCK]: string;
    [MessageId.ID_CF_GOAL_NAME]: string;
    [MessageId.ID_CF_GOAL_CATEGORY_TAG]: string;
    [MessageId.ID_CF_GOAL_TARGET_DATE]: string;
    [MessageId.ID_CF_GOAL_CREATE_BUTTON]: string;
    [MessageId.ID_CF_GOAL_CANCEL_BUTTON]: string;

    // Project Creation Form
    [MessageId.ID_CF_PROJECT_BLOCK]: string;
    [MessageId.ID_CF_PROJECT_NAME]: string;
    [MessageId.ID_CF_PROJECT_GOAL_NAME]: string;
    [MessageId.ID_CF_PROJECT_CATEGORY_TAG]: string;
    [MessageId.ID_CF_PROJECT_TARGET_DATE]: string;
    [MessageId.ID_CF_PROJECT_CREATE_BUTTON]: string;
    [MessageId.ID_CF_PROJECT_CANCEL_BUTTON]: string;

    // Task Creation Form
    [MessageId.ID_CF_TASK_BLOCK]: string;
    [MessageId.ID_CF_TASK_NAME]: string;
    [MessageId.ID_CF_TASK_PROJECT_NAME]: string;
    [MessageId.ID_CF_TASK_CATEGORY_TAG]: string;
    [MessageId.ID_CF_TASK_TARGET_DATE]: string;
    [MessageId.ID_CF_TASK_CREATE_BUTTON]: string;
    [MessageId.ID_CF_TASK_CANCEL_BUTTON]: string;

    // Goal Index Card Form
    [MessageId.ID_IC_GOAL_INDEX_CARD]: string;
    [MessageId.ID_IC_GOAL_NAME]: string;
    [MessageId.ID_IC_GOAL_NAME_LABEL] : string;
    [MessageId.ID_IC_GOAL_CATEGORY_TAG]: string;
    [MessageId.ID_IC_GOAL_STATUS_TAG]: string;
    [MessageId.ID_IC_GOAL_IDENT_TAG]: string;
    [MessageId.ID_IC_GOAL_TARGET_DATE]: string;
    [MessageId.ID_IC_GOAL_EXPECTED_DATE]: string;
    [MessageId.ID_IC_GOAL_COMPLETED_DATE]: string;
    [MessageId.ID_IC_GOAL_USER_TAGS] : string;

    // Project Index Card Form
    [MessageId.ID_IC_PROJECT_INDEX_CARD]: string;
    [MessageId.ID_IC_PROJECT_NAME]: string;
    [MessageId.ID_IC_PROJECT_GOAL_NAME]: string;
    [MessageId.ID_IC_PROJECT_CATEGORY_TAG]: string;
    [MessageId.ID_IC_PROJECT_STATUS_TAG]: string;
    [MessageId.ID_IC_PROJECT_IDENT_TAG]: string;
    [MessageId.ID_IC_PROJECT_TARGET_DATE]: string;
    [MessageId.ID_IC_PROJECT_EXPECTED_DATE]: string;
    [MessageId.ID_IC_PROJECT_COMPLETED_DATE]: string;
    [MessageId.ID_IC_PROJECT_USER_TAGS] : string;

    // Task Index Card Form
    [MessageId.ID_IC_TASK_INDEX_CARD]: string;
    [MessageId.ID_IC_TASK_NAME]: string;
    [MessageId.ID_IC_TASK_PROJECT_NAME]: string;
    [MessageId.ID_IC_TASK_CATEGORY_TAG]: string;
    [MessageId.ID_IC_TASK_STATUS_TAG]: string;
    [MessageId.ID_IC_TASK_IDENT_TAG]: string;
    [MessageId.ID_IC_TASK_TARGET_DATE]: string;
    [MessageId.ID_IC_TASK_EXPECTED_DATE]: string;
    [MessageId.ID_IC_TASK_COMPLETED_DATE]: string;
    [MessageId.ID_IC_TASK_USER_TAGS] : string;
}

export const messageDictionary: IMessageDictionaryType = {
    [MessageId.STYLE_DIV_VISIBLE]: "cf-pl-visible",
    [MessageId.STYLE_DIV_HIDDEN]: "cf-pl-hidden",

    // Goal Rreation Form
    [MessageId.ID_CF_GOAL_BLOCK]: "cf-goal-block",
    [MessageId.ID_CF_GOAL_NAME]: "cf-goal-name",
    [MessageId.ID_CF_GOAL_CATEGORY_TAG]: "cf-goal-category-tag",
    [MessageId.ID_CF_GOAL_TARGET_DATE]: "cf-goal-target-date",
    [MessageId.ID_CF_GOAL_CREATE_BUTTON]: "cf-create-goal-button",
    [MessageId.ID_CF_GOAL_CANCEL_BUTTON]: "cf-cancel-goal-button",

    // Project Creation Form
    [MessageId.ID_CF_PROJECT_BLOCK]: "cf-project-block",
    [MessageId.ID_CF_PROJECT_NAME]: "cf-project-name",
    [MessageId.ID_CF_PROJECT_GOAL_NAME]: "cf-project-goal-name",
    [MessageId.ID_CF_PROJECT_CATEGORY_TAG]: "cf-project-category-tag",
    [MessageId.ID_CF_PROJECT_TARGET_DATE]: "cf-project-target-date",
    [MessageId.ID_CF_PROJECT_CREATE_BUTTON]: "cf-create-project-button",
    [MessageId.ID_CF_PROJECT_CANCEL_BUTTON]: "cf-cancel-project-button",

    // Task Creation Form
    [MessageId.ID_CF_TASK_BLOCK]: "cf-task-block",
    [MessageId.ID_CF_TASK_NAME]: "cf-task-name",
    [MessageId.ID_CF_TASK_PROJECT_NAME]: "cf-task-project-name",
    [MessageId.ID_CF_TASK_CATEGORY_TAG]: "cf-task-category-tag",
    [MessageId.ID_CF_TASK_TARGET_DATE]: "cf-task-target-date",
    [MessageId.ID_CF_TASK_CREATE_BUTTON]: "cf-create-task-button",
    [MessageId.ID_CF_TASK_CANCEL_BUTTON]: "cf-cancel-task-button",

    // Goal Index Card Form
    [MessageId.ID_IC_GOAL_INDEX_CARD]: "ic-goal-index-card",
    [MessageId.ID_IC_GOAL_NAME]: "ic-goal-name",
    [MessageId.ID_IC_GOAL_NAME_LABEL]: "ic-goal-name-label",
    [MessageId.ID_IC_GOAL_CATEGORY_TAG]: "ic-goal-category-tag",
    [MessageId.ID_IC_GOAL_IDENT_TAG]: "ic-goal-ident-tag",
    [MessageId.ID_IC_GOAL_STATUS_TAG]: "ic-goal-status-tag",
    [MessageId.ID_IC_GOAL_TARGET_DATE]: "ic-goal-target-date",
    [MessageId.ID_IC_GOAL_EXPECTED_DATE]: "ic-goal-expected-date",
    [MessageId.ID_IC_GOAL_COMPLETED_DATE]: "ic-goal-completed-date",
    [MessageId.ID_IC_GOAL_USER_TAGS]: "ic-goal-user-tags",

    // Project Index Card Form
    [MessageId.ID_IC_PROJECT_INDEX_CARD]: "ic-project-index-card",
    [MessageId.ID_IC_PROJECT_NAME]: "ic-project-name",
    [MessageId.ID_IC_PROJECT_GOAL_NAME]: "ic-project-goal-name",
    [MessageId.ID_IC_PROJECT_CATEGORY_TAG]: "ic-project-category-tag",
    [MessageId.ID_IC_PROJECT_IDENT_TAG]: "ic-project-ident-tag",
    [MessageId.ID_IC_PROJECT_STATUS_TAG]: "ic-project-status-tag",
    [MessageId.ID_IC_PROJECT_TARGET_DATE]: "ic-project-target-date",
    [MessageId.ID_IC_PROJECT_EXPECTED_DATE]: "ic-project-expected-date",
    [MessageId.ID_IC_PROJECT_COMPLETED_DATE]: "ic-project-completed-date",
    [MessageId.ID_IC_PROJECT_USER_TAGS]: "ic-project-user-tags",

    // Task index Card Form
    [MessageId.ID_IC_TASK_INDEX_CARD]: "ic-task-index-card",
    [MessageId.ID_IC_TASK_NAME]: "ic-task-name",
    [MessageId.ID_IC_TASK_PROJECT_NAME]: "ic-task-project-name",
    [MessageId.ID_IC_TASK_CATEGORY_TAG]: "ic-task-category-tag",
    [MessageId.ID_IC_TASK_IDENT_TAG]: "ic-task-ident-tag",
    [MessageId.ID_IC_TASK_STATUS_TAG]: "ic-task-status-tag",
    [MessageId.ID_IC_TASK_TARGET_DATE]: "ic-task-target-date",
    [MessageId.ID_IC_TASK_EXPECTED_DATE]: "ic-task-expected-date",
    [MessageId.ID_IC_TASK_COMPLETED_DATE]: "ic-task-completed-date",
    [MessageId.ID_IC_TASK_USER_TAGS]: "ic-task-user-tags",
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
export function wrapMessage(messageId: MessageId, wrapper: string): string{
    return wrapper + messageDictionary[messageId] + wrapper;
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

export const categoryLockStates = {
    HARD_LOCK: "hard lock",
    SOFT_LOCK: "Soft loack",
}