import { WrapperType } from "../types/types";

export enum FormFieldId {
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
    ID_IC_GOAL_CATEGORY_TAG_LABEL = "id_ic_goal_category_tag_label",
    ID_IC_GOAL_CATEGORY_TAG_SECTION =  "id_ic_goal_category_section",
    ID_IC_GOAL_STATUS_TAG = "id_ic_goal_status_tag",
    ID_IC_GOAL_STATUS_TAG_LABEL = "id_ic_goal_status_tag_label",
    ID_IC_GOAL_STATUS_TAG_SECTION = "id_ic_status_tag_section",
    ID_IC_GOAL_IDENT_TAG = "id_ic_goal_ident_tag",
    ID_IC_GOAL_IDENT_TAG_LABEL = "id_ic_goal_ident_tag_label",
    ID_IC_GOAL_TARGET_DATE = "id_ic_goal_target_date",
    ID_IC_GOAL_TARGET_DATE_LABEL = "id_ic_goal_target_date_label",
    ID_IC_GOAL_EXPECTED_DATE = "id_ic_goal_expected_date",
    ID_IC_GOAL_EXPECTED_DATE_LABEL = "id_ic_goal_expected_date_label",
    ID_IC_GOAL_EXPECTED_DATE_SECTION = "id_ic_goal_expected_date_section",
    ID_IC_GOAL_COMPLETED_DATE = "id_ic_goal_completed_date",
    ID_IC_GOAL_COMPLETED_DATE_LABEL = "id_ic_goal_completed_date_label",
    ID_IC_GOAL_COMPLETED_DATE_SECTION = "id_ic_goal_completed_date_section",
    ID_IC_GOAL_USER_TAGS = "id_ic_goal_user_tags",
    ID_IC_GOAL_USER_TAGS_LABEL = "id_ic_goal_user_tags_label",

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
    ID_IC_GOAL_BUTTONS = "id_ic_goal_buttons",
    ID_IC_GOAL_CREATE_BUTTON = "id_ic_goal_create_button",
    ID_IC_GOAL_CANCEL_BUTTON = "id_ic_goal_cancel_button",
}

interface IFormFieldDictionaryType{
    [FormFieldId.STYLE_DIV_VISIBLE]: string;
    [FormFieldId.STYLE_DIV_HIDDEN]: string;

    // Goal Creation Form
    [FormFieldId.ID_CF_GOAL_BLOCK]: string;
    [FormFieldId.ID_CF_GOAL_NAME]: string;
    [FormFieldId.ID_CF_GOAL_CATEGORY_TAG]: string;
    [FormFieldId.ID_CF_GOAL_TARGET_DATE]: string;
    [FormFieldId.ID_CF_GOAL_CREATE_BUTTON]: string;
    [FormFieldId.ID_CF_GOAL_CANCEL_BUTTON]: string;

    // Project Creation Form
    [FormFieldId.ID_CF_PROJECT_BLOCK]: string;
    [FormFieldId.ID_CF_PROJECT_NAME]: string;
    [FormFieldId.ID_CF_PROJECT_GOAL_NAME]: string;
    [FormFieldId.ID_CF_PROJECT_CATEGORY_TAG]: string;
    [FormFieldId.ID_CF_PROJECT_TARGET_DATE]: string;
    [FormFieldId.ID_CF_PROJECT_CREATE_BUTTON]: string;
    [FormFieldId.ID_CF_PROJECT_CANCEL_BUTTON]: string;

    // Task Creation Form
    [FormFieldId.ID_CF_TASK_BLOCK]: string;
    [FormFieldId.ID_CF_TASK_NAME]: string;
    [FormFieldId.ID_CF_TASK_PROJECT_NAME]: string;
    [FormFieldId.ID_CF_TASK_CATEGORY_TAG]: string;
    [FormFieldId.ID_CF_TASK_TARGET_DATE]: string;
    [FormFieldId.ID_CF_TASK_CREATE_BUTTON]: string;
    [FormFieldId.ID_CF_TASK_CANCEL_BUTTON]: string;

    // Goal Index Card Form
    [FormFieldId.ID_IC_GOAL_INDEX_CARD]: string;
    [FormFieldId.ID_IC_GOAL_NAME]: string;
    [FormFieldId.ID_IC_GOAL_NAME_LABEL]: string;
    [FormFieldId.ID_IC_GOAL_CATEGORY_TAG]: string;
    [FormFieldId.ID_IC_GOAL_CATEGORY_TAG_LABEL]: string;
    [FormFieldId.ID_IC_GOAL_CATEGORY_TAG_SECTION]: string;
    [FormFieldId.ID_IC_GOAL_STATUS_TAG_SECTION]: string;
    [FormFieldId.ID_IC_GOAL_STATUS_TAG]: string;
    [FormFieldId.ID_IC_GOAL_STATUS_TAG_LABEL]: string;
    [FormFieldId.ID_IC_GOAL_IDENT_TAG]: string;
    [FormFieldId.ID_IC_GOAL_IDENT_TAG_LABEL]: string;
    [FormFieldId.ID_IC_GOAL_TARGET_DATE]: string;
    [FormFieldId.ID_IC_GOAL_TARGET_DATE_LABEL]: string;
    [FormFieldId.ID_IC_GOAL_EXPECTED_DATE]: string;
    [FormFieldId.ID_IC_GOAL_EXPECTED_DATE_LABEL]: string;
    [FormFieldId.ID_IC_GOAL_EXPECTED_DATE_SECTION]: string;
    [FormFieldId.ID_IC_GOAL_COMPLETED_DATE]: string;
    [FormFieldId.ID_IC_GOAL_COMPLETED_DATE_LABEL]: string;
    [FormFieldId.ID_IC_GOAL_COMPLETED_DATE_SECTION]: string;
    [FormFieldId.ID_IC_GOAL_USER_TAGS] : string;
    [FormFieldId.ID_IC_GOAL_USER_TAGS_LABEL] : string;
    [FormFieldId.ID_IC_GOAL_BUTTONS]: string;
    [FormFieldId.ID_IC_GOAL_CREATE_BUTTON]: string;
    [FormFieldId.ID_IC_GOAL_CANCEL_BUTTON]: string;

    // Project Index Card Form
    [FormFieldId.ID_IC_PROJECT_INDEX_CARD]: string;
    [FormFieldId.ID_IC_PROJECT_NAME]: string;
    [FormFieldId.ID_IC_PROJECT_GOAL_NAME]: string;
    [FormFieldId.ID_IC_PROJECT_CATEGORY_TAG]: string;
    [FormFieldId.ID_IC_PROJECT_STATUS_TAG]: string;
    [FormFieldId.ID_IC_PROJECT_IDENT_TAG]: string;
    [FormFieldId.ID_IC_PROJECT_TARGET_DATE]: string;
    [FormFieldId.ID_IC_PROJECT_EXPECTED_DATE]: string;
    [FormFieldId.ID_IC_PROJECT_COMPLETED_DATE]: string;
    [FormFieldId.ID_IC_PROJECT_USER_TAGS] : string;

    // Task Index Card Form
    [FormFieldId.ID_IC_TASK_INDEX_CARD]: string;
    [FormFieldId.ID_IC_TASK_NAME]: string;
    [FormFieldId.ID_IC_TASK_PROJECT_NAME]: string;
    [FormFieldId.ID_IC_TASK_CATEGORY_TAG]: string;
    [FormFieldId.ID_IC_TASK_STATUS_TAG]: string;
    [FormFieldId.ID_IC_TASK_IDENT_TAG]: string;
    [FormFieldId.ID_IC_TASK_TARGET_DATE]: string;
    [FormFieldId.ID_IC_TASK_EXPECTED_DATE]: string;
    [FormFieldId.ID_IC_TASK_COMPLETED_DATE]: string;
    [FormFieldId.ID_IC_TASK_USER_TAGS] : string;
}

const formFieldDictionary: IFormFieldDictionaryType = {
    [FormFieldId.STYLE_DIV_VISIBLE]: 'cf-pl-visible',
    [FormFieldId.STYLE_DIV_HIDDEN]: 'cf-pl-hidden',

    // Goal Rreation Form
    [FormFieldId.ID_CF_GOAL_BLOCK]: 'cf-goal-block',
    [FormFieldId.ID_CF_GOAL_NAME]: 'cf-goal-name',
    [FormFieldId.ID_CF_GOAL_CATEGORY_TAG]: 'cf-goal-category-tag',
    [FormFieldId.ID_CF_GOAL_TARGET_DATE]: 'cf-goal-target-date',
    [FormFieldId.ID_CF_GOAL_CREATE_BUTTON]: 'cf-create-goal-button',
    [FormFieldId.ID_CF_GOAL_CANCEL_BUTTON]: 'cf-cancel-goal-button',

    // Project Creation Form
    [FormFieldId.ID_CF_PROJECT_BLOCK]: 'cf-project-block',
    [FormFieldId.ID_CF_PROJECT_NAME]: 'cf-project-name',
    [FormFieldId.ID_CF_PROJECT_GOAL_NAME]: 'cf-project-goal-name',
    [FormFieldId.ID_CF_PROJECT_CATEGORY_TAG]: 'cf-project-category-tag',
    [FormFieldId.ID_CF_PROJECT_TARGET_DATE]: 'cf-project-target-date',
    [FormFieldId.ID_CF_PROJECT_CREATE_BUTTON]: 'cf-create-project-button',
    [FormFieldId.ID_CF_PROJECT_CANCEL_BUTTON]: 'cf-cancel-project-button',

    // Task Creation Form
    [FormFieldId.ID_CF_TASK_BLOCK]: 'cf-task-block',
    [FormFieldId.ID_CF_TASK_NAME]: 'cf-task-name',
    [FormFieldId.ID_CF_TASK_PROJECT_NAME]: 'cf-task-project-name',
    [FormFieldId.ID_CF_TASK_CATEGORY_TAG]: 'cf-task-category-tag',
    [FormFieldId.ID_CF_TASK_TARGET_DATE]: 'cf-task-target-date',
    [FormFieldId.ID_CF_TASK_CREATE_BUTTON]: 'cf-create-task-button',
    [FormFieldId.ID_CF_TASK_CANCEL_BUTTON]: 'cf-cancel-task-button',

    // Goal Index Card Form
    [FormFieldId.ID_IC_GOAL_INDEX_CARD]: 'ic-goal-index-card',
    [FormFieldId.ID_IC_GOAL_NAME]: 'ic-goal-name',
    [FormFieldId.ID_IC_GOAL_NAME_LABEL]: 'ic-goal-name-label',
    [FormFieldId.ID_IC_GOAL_CATEGORY_TAG]: 'ic-goal-category-tag',
    [FormFieldId.ID_IC_GOAL_CATEGORY_TAG_LABEL]: 'ic-goal-category-tag=label',
    [FormFieldId.ID_IC_GOAL_CATEGORY_TAG_SECTION]: 'ic-goal-catgory-section',
    [FormFieldId.ID_IC_GOAL_IDENT_TAG]: 'ic-goal-ident-tag',
    [FormFieldId.ID_IC_GOAL_IDENT_TAG_LABEL]: 'ic-goal-ident-tag=label',
    [FormFieldId.ID_IC_GOAL_STATUS_TAG]: 'ic-goal-status-tag',
    [FormFieldId.ID_IC_GOAL_STATUS_TAG_LABEL]: 'ic-goal-status-tag=label',
    [FormFieldId.ID_IC_GOAL_STATUS_TAG_SECTION]: 'id-ic-status-tag-section',
    [FormFieldId.ID_IC_GOAL_TARGET_DATE]: 'ic-goal-target-date',
    [FormFieldId.ID_IC_GOAL_TARGET_DATE_LABEL]: 'ic-goal-target-date=label',
    [FormFieldId.ID_IC_GOAL_EXPECTED_DATE]: 'ic-goal-expected-date',
    [FormFieldId.ID_IC_GOAL_EXPECTED_DATE_LABEL]: 'ic-goal-expected-date-label',
    [FormFieldId.ID_IC_GOAL_EXPECTED_DATE_SECTION]: 'id-ic-expected=date-section',
    [FormFieldId.ID_IC_GOAL_COMPLETED_DATE]: 'ic-goal-completed-date',
    [FormFieldId.ID_IC_GOAL_COMPLETED_DATE_LABEL]: 'ic-goal-completed-date-label',
    [FormFieldId.ID_IC_GOAL_COMPLETED_DATE_SECTION]: 'id-ic-completed-date-section',
    [FormFieldId.ID_IC_GOAL_USER_TAGS]: 'ic-goal-user-tags',
    [FormFieldId.ID_IC_GOAL_USER_TAGS_LABEL]: 'ic-goal-user-tags-label',
    [FormFieldId.ID_IC_GOAL_BUTTONS]: 'id-ic-goal-buttons',
    [FormFieldId.ID_IC_GOAL_CREATE_BUTTON]: 'id-ic-goal-create-button',
    [FormFieldId.ID_IC_GOAL_CANCEL_BUTTON]: 'id=ic=goal-cancel-button',

    // Project Index Card Form
    [FormFieldId.ID_IC_PROJECT_INDEX_CARD]: 'ic-project-index-card',
    [FormFieldId.ID_IC_PROJECT_NAME]: 'ic-project-name',
    [FormFieldId.ID_IC_PROJECT_GOAL_NAME]: 'ic-project-goal-name',
    [FormFieldId.ID_IC_PROJECT_CATEGORY_TAG]: 'ic-project-category-tag',
    [FormFieldId.ID_IC_PROJECT_IDENT_TAG]: 'ic-project-ident-tag',
    [FormFieldId.ID_IC_PROJECT_STATUS_TAG]: 'ic-project-status-tag',
    [FormFieldId.ID_IC_PROJECT_TARGET_DATE]: 'ic-project-target-date',
    [FormFieldId.ID_IC_PROJECT_EXPECTED_DATE]: 'ic-project-expected-date',
    [FormFieldId.ID_IC_PROJECT_COMPLETED_DATE]: 'ic-project-completed-date',
    [FormFieldId.ID_IC_PROJECT_USER_TAGS]: 'ic-project-user-tags',

    // Task index Card Form
    [FormFieldId.ID_IC_TASK_INDEX_CARD]: 'ic-task-index-card',
    [FormFieldId.ID_IC_TASK_NAME]: 'ic-task-name',
    [FormFieldId.ID_IC_TASK_PROJECT_NAME]: 'ic-task-project-name',
    [FormFieldId.ID_IC_TASK_CATEGORY_TAG]: 'ic-task-category-tag',
    [FormFieldId.ID_IC_TASK_IDENT_TAG]: 'ic-task-ident-tag',
    [FormFieldId.ID_IC_TASK_STATUS_TAG]: 'ic-task-status-tag',
    [FormFieldId.ID_IC_TASK_TARGET_DATE]: 'ic-task-target-date',
    [FormFieldId.ID_IC_TASK_EXPECTED_DATE]: 'ic-task-expected-date',
    [FormFieldId.ID_IC_TASK_COMPLETED_DATE]: 'ic-task-completed-date',
    [FormFieldId.ID_IC_TASK_USER_TAGS]: 'ic-task-user-tags',

}

// This wrapper is necessary 
export function resolveField(fieldId: FormFieldId, wrapper: WrapperType): string{
    return wrapper + formFieldDictionary[fieldId] + wrapper;
}
