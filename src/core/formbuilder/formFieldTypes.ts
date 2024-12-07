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
    ID_IC_GOAL_NAME_ICON = "id_ic_goal_name_icon",
    ID_IC_GOAL_CATEGORY_TAG = "id_ic_goal_category_tag",
    ID_IC_GOAL_CATEGORY_TAG_LABEL = "id_ic_goal_category_tag_label",
    ID_IC_GOAL_CATEGORY_TAG_SECTION =  "id_ic_goal_category_section",
    ID_IC_GOAL_CATEGORY_TAG_ICON = "id_ic_goal_category_icon",
    ID_IC_GOAL_STATUS_TAG = "id_ic_goal_status_tag",
    ID_IC_GOAL_STATUS_TAG_LABEL = "id_ic_goal_status_tag_label",
    ID_IC_GOAL_STATUS_TAG_SECTION = "id_ic_goal_status_tag_section",
    ID_IC_GOAL_STATUS_TAG_ICON = "id_ic_goal_status_tag_icon",
    ID_IC_GOAL_IDENT_TAG = "id_ic_goal_ident_tag",
    ID_IC_GOAL_IDENT_TAG_LABEL = "id_ic_goal_ident_tag_label",
    ID_IC_GOAL_TARGET_DATE = "id_ic_goal_target_date",
    ID_IC_GOAL_TARGET_DATE_ICON = "id_goal_target_date_icon",
    ID_IC_GOAL_TARGET_DATE_LABEL = "id_ic_goal_target_date_label",
    ID_IC_GOAL_EXPECTED_DATE = "id_ic_goal_expected_date",
    ID_IC_GOAL_EXPECTED_DATE_LABEL = "id_ic_goal_expected_date_label",
    ID_IC_GOAL_EXPECTED_DATE_SECTION = "id_ic_goal_expected_date_section",
    ID_IC_GOAL_COMPLETED_DATE = "id_ic_goal_completed_date",
    ID_IC_GOAL_COMPLETED_DATE_LABEL = "id_ic_goal_completed_date_label",
    ID_IC_GOAL_COMPLETED_DATE_SECTION = "id_ic_goal_completed_date_section",
    ID_IC_GOAL_USER_TAGS = "id_ic_goal_user_tags",
    ID_IC_GOAL_USER_TAGS_ICON = "id_ic_user_tags_icon",
    ID_IC_GOAL_USER_TAGS_LABEL = "id_ic_goal_user_tags_label",
    ID_IC_GOAL_BUTTONS = "id_ic_goal_button",
    ID_IC_GOAL_CREATE_BUTTON = "id_ic_goal_create_button",
    ID_IC_GOAL_CANCEL_BUTTON = "id_ic_goal_cancel_button",

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

    // genericForm version
    GF_INDEX_CARD = "id_index_card",
    GF_NAME_LABEL = "id_name_label",
    GF_NAME = "id_name",
    GF_NAME_ICON = "id_name_icon",
    GF_MEMBER_OF_SECTION =  "id_member_of_section",
    GF_MEMBER_OF_LABEL = "id_member_of_label",
    GF_MEMBER_OF_NAME = "id_member_of_name",
    GF_MEMBER_OF_ICON = "id_member_of_icon",
    GF_CATEGORY_TAG = "id_category_tag",
    GF_CATEGORY_TAG_LABEL = "ic_category_tag_label",
    GF_CATEGORY_TAG_SECTION =  "id_category_section",
    GF_CATEGORY_TAG_ICON = "id_category_icon",
    GF_STATUS_TAG = "id_status_tag",
    GF_STATUS_TAG_LABEL = "id_status_tag_label",
    GF_STATUS_TAG_SECTION = "id_status_tag_section",
    GF_STATUS_TAG_ICON = "id_status_tag_icon",
    GF_IDENT_TAG = "id_ident_tag",
    GF_IDENT_TAG_LABEL = "id_ident_tag_label",
    GF_TARGET_DATE = "id_target_date",
    GF_TARGET_DATE_ICON = "id_target_date_icon",
    GF_TARGET_DATE_LABEL = "id_target_date_label",
    GF_EXPECTED_DATE = "id_expected_date",
    GF_EXPECTED_DATE_LABEL = "id_expected_date_label",
    GF_EXPECTED_DATE_SECTION = "id_expected_date_section",
    GF_COMPLETED_DATE = "id_completed_date",
    GF_COMPLETED_DATE_LABEL = "id_completed_date_label",
    GF_COMPLETED_DATE_SECTION = "id_completed_date_section",
    GF_USER_TAGS = "id_user_tags",
    GF_USER_TAGS_ICON = "id_user_tags_icon",
    GF_USER_TAGS_LABEL = "id_user_tags_label",
    GF_BUTTONS = "id_buttons",
    GF_CREATE_BUTTON = "id_create_button",
    GF_CANCEL_BUTTON = "id_cancel_button",
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
    [FormFieldId.ID_IC_GOAL_NAME_ICON]: string;
    [FormFieldId.ID_IC_GOAL_NAME_LABEL]: string;
    [FormFieldId.ID_IC_GOAL_CATEGORY_TAG]: string;
    [FormFieldId.ID_IC_GOAL_CATEGORY_TAG_ICON]: string;
    [FormFieldId.ID_IC_GOAL_CATEGORY_TAG_LABEL]: string;
    [FormFieldId.ID_IC_GOAL_CATEGORY_TAG_SECTION]: string;
    [FormFieldId.ID_IC_GOAL_STATUS_TAG_SECTION]: string;
    [FormFieldId.ID_IC_GOAL_STATUS_TAG]: string;
    [FormFieldId.ID_IC_GOAL_STATUS_TAG_ICON]: string;
    [FormFieldId.ID_IC_GOAL_STATUS_TAG_LABEL]: string;
    [FormFieldId.ID_IC_GOAL_IDENT_TAG]: string;
    [FormFieldId.ID_IC_GOAL_IDENT_TAG_LABEL]: string;
    [FormFieldId.ID_IC_GOAL_TARGET_DATE]: string;
    [FormFieldId.ID_IC_GOAL_TARGET_DATE_ICON]: string;
    [FormFieldId.ID_IC_GOAL_TARGET_DATE_LABEL]: string;
    [FormFieldId.ID_IC_GOAL_EXPECTED_DATE]: string;
    [FormFieldId.ID_IC_GOAL_EXPECTED_DATE_LABEL]: string;
    [FormFieldId.ID_IC_GOAL_EXPECTED_DATE_SECTION]: string;
    [FormFieldId.ID_IC_GOAL_COMPLETED_DATE]: string;
    [FormFieldId.ID_IC_GOAL_COMPLETED_DATE_LABEL]: string;
    [FormFieldId.ID_IC_GOAL_COMPLETED_DATE_SECTION]: string;
    [FormFieldId.ID_IC_GOAL_USER_TAGS] : string;
    [FormFieldId.ID_IC_GOAL_USER_TAGS_ICON]: string;
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

    // genericForm versions
    [FormFieldId.GF_INDEX_CARD]: string;

    [FormFieldId.GF_MEMBER_OF_SECTION]: string;
    [FormFieldId.GF_NAME_LABEL]: string;
    [FormFieldId.GF_NAME]: string;
    [FormFieldId.GF_NAME_ICON]: string;

    [FormFieldId.GF_MEMBER_OF_SECTION]: string;
    [FormFieldId.GF_MEMBER_OF_LABEL]: string;
    [FormFieldId.GF_MEMBER_OF_NAME]: string;
    [FormFieldId.GF_MEMBER_OF_ICON]: string;

    [FormFieldId.GF_CATEGORY_TAG_SECTION]: string;
    [FormFieldId.GF_CATEGORY_TAG_LABEL]: string;
    [FormFieldId.GF_CATEGORY_TAG]: string;
    [FormFieldId.GF_CATEGORY_TAG_ICON]: string;

    [FormFieldId.GF_IDENT_TAG]: string;
    [FormFieldId.GF_IDENT_TAG_LABEL]: string;
    [FormFieldId.GF_STATUS_TAG]: string;
    [FormFieldId.GF_STATUS_TAG_ICON]: string;
    [FormFieldId.GF_STATUS_TAG_LABEL]: string;
    [FormFieldId.GF_STATUS_TAG_SECTION]: string;
    [FormFieldId.GF_TARGET_DATE]: string;
    [FormFieldId.GF_TARGET_DATE_ICON]: string;
    [FormFieldId.GF_TARGET_DATE_LABEL]: string;
    [FormFieldId.GF_EXPECTED_DATE]: string;
    [FormFieldId.GF_EXPECTED_DATE_LABEL]: string;
    [FormFieldId.GF_EXPECTED_DATE_SECTION]: string;
    [FormFieldId.GF_COMPLETED_DATE]: string;
    [FormFieldId.GF_COMPLETED_DATE_LABEL]: string;
    [FormFieldId.GF_COMPLETED_DATE_SECTION]: string;
    [FormFieldId.GF_USER_TAGS]: string;
    [FormFieldId.GF_USER_TAGS_ICON]: string;
    [FormFieldId.GF_USER_TAGS_LABEL]: string;
    [FormFieldId.GF_BUTTONS]: string;
    [FormFieldId.GF_CREATE_BUTTON]: string;
    [FormFieldId.GF_CANCEL_BUTTON]: string;    

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
    [FormFieldId.ID_IC_GOAL_NAME_ICON]: 'ic-goal-icon',
    [FormFieldId.ID_IC_GOAL_NAME_LABEL]: 'ic-goal-name-label',
    [FormFieldId.ID_IC_GOAL_CATEGORY_TAG]: 'ic-goal-category-tag',
    [FormFieldId.ID_IC_GOAL_CATEGORY_TAG_ICON]: 'ic-goal-category-icon',
    [FormFieldId.ID_IC_GOAL_CATEGORY_TAG_LABEL]: 'ic-goal-category-tag=label',
    [FormFieldId.ID_IC_GOAL_CATEGORY_TAG_SECTION]: 'ic-goal-catgory-section',
    [FormFieldId.ID_IC_GOAL_IDENT_TAG]: 'ic-goal-ident-tag',
    [FormFieldId.ID_IC_GOAL_IDENT_TAG_LABEL]: 'ic-goal-ident-tag=label',
    [FormFieldId.ID_IC_GOAL_STATUS_TAG]: 'ic-goal-status-tag',
    [FormFieldId.ID_IC_GOAL_STATUS_TAG_ICON]: 'ic-goal-status-icon',
    [FormFieldId.ID_IC_GOAL_STATUS_TAG_LABEL]: 'ic-goal-status-tag-label',
    [FormFieldId.ID_IC_GOAL_STATUS_TAG_SECTION]: 'ic-goal-status-tag-section',
    [FormFieldId.ID_IC_GOAL_TARGET_DATE]: 'ic-goal-target-date',
    [FormFieldId.ID_IC_GOAL_TARGET_DATE_LABEL]: 'ic-goal-target-date-label',
    [FormFieldId.ID_IC_GOAL_TARGET_DATE_ICON]: 'ic-goal-target-date-icon',
    [FormFieldId.ID_IC_GOAL_EXPECTED_DATE]: 'ic-goal-expected-date',
    [FormFieldId.ID_IC_GOAL_EXPECTED_DATE_LABEL]: 'ic-goal-expected-date-label',
    [FormFieldId.ID_IC_GOAL_EXPECTED_DATE_SECTION]: 'id-ic-expected=date-section',
    [FormFieldId.ID_IC_GOAL_COMPLETED_DATE]: 'ic-goal-completed-date',
    [FormFieldId.ID_IC_GOAL_COMPLETED_DATE_LABEL]: 'ic-goal-completed-date-label',
    [FormFieldId.ID_IC_GOAL_COMPLETED_DATE_SECTION]: 'id-ic-completed-date-section',
    [FormFieldId.ID_IC_GOAL_USER_TAGS]: 'ic-goal-user-tags',
    [FormFieldId.ID_IC_GOAL_USER_TAGS_ICON]: 'ic-goal-user-tags-icon',
    [FormFieldId.ID_IC_GOAL_USER_TAGS_LABEL]: 'ic-goal-user-tags-label',
    [FormFieldId.ID_IC_GOAL_BUTTONS]: 'id-ic-goal-buttons',
    [FormFieldId.ID_IC_GOAL_CREATE_BUTTON]: 'id-ic-goal-create-button',
    [FormFieldId.ID_IC_GOAL_CANCEL_BUTTON]: 'id-ic-cancel-button',

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

        // genericForm
    [FormFieldId.GF_INDEX_CARD]: 'ic-index-card',

    [FormFieldId.GF_NAME]: 'ic-name',
    [FormFieldId.GF_NAME_ICON]: 'ic-icon',
    [FormFieldId.GF_NAME_LABEL]: 'ic-name-label',

    [FormFieldId.GF_MEMBER_OF_SECTION]: 'gf-member-of-section',
    [FormFieldId.GF_MEMBER_OF_LABEL]: 'gf-member-of-label',
    [FormFieldId.GF_MEMBER_OF_NAME]: 'gf-member-of-name',
    [FormFieldId.GF_MEMBER_OF_ICON]: 'gf-member-of-icon',
    
    [FormFieldId.GF_CATEGORY_TAG]: 'ic-category-tag',
    [FormFieldId.GF_CATEGORY_TAG_ICON]: 'ic-category-icon',
    [FormFieldId.GF_CATEGORY_TAG_LABEL]: 'ic-category-tag=label',
    [FormFieldId.GF_CATEGORY_TAG_SECTION]: 'ic-catgory-section',

    [FormFieldId.GF_IDENT_TAG]: 'ic-ident-tag',
    [FormFieldId.GF_IDENT_TAG_LABEL]: 'ic-ident-tag=label',

    [FormFieldId.GF_STATUS_TAG]: 'ic-status-tag',
    [FormFieldId.GF_STATUS_TAG_ICON]: 'ic-status-icon',
    [FormFieldId.GF_STATUS_TAG_LABEL]: 'ic-status-tag-label',
    [FormFieldId.GF_STATUS_TAG_SECTION]: 'ic-status-tag-section',

    [FormFieldId.GF_TARGET_DATE]: 'ic-target-date',
    [FormFieldId.GF_TARGET_DATE_ICON]: 'ic-target-date-icon',
    [FormFieldId.GF_TARGET_DATE_LABEL]: 'ic-target-date-label',

    [FormFieldId.GF_EXPECTED_DATE]: 'ic-expected-date',
    [FormFieldId.GF_EXPECTED_DATE_LABEL]: 'ic-expected-date-label',
    [FormFieldId.GF_EXPECTED_DATE_SECTION]: 'id-ic-expected=date-section',

    [FormFieldId.GF_COMPLETED_DATE]: 'ic-completed-date',
    [FormFieldId.GF_COMPLETED_DATE_LABEL]: 'ic-completed-date-label',
    [FormFieldId.GF_COMPLETED_DATE_SECTION]: 'id-ic-completed-date-section',

    [FormFieldId.GF_USER_TAGS]: 'ic-user-tags',
    [FormFieldId.GF_USER_TAGS_ICON]: 'ic-user-tags-icon',
    [FormFieldId.GF_USER_TAGS_LABEL]: 'ic-user-tags-label',

    [FormFieldId.GF_BUTTONS]: 'id-ic-buttons',
    [FormFieldId.GF_CREATE_BUTTON]: 'id-ic-create-button',
    [FormFieldId.GF_CANCEL_BUTTON]: 'ic-cancel-button',    
}

// This wrapper is necessary 
export function resolveField(fieldId: FormFieldId, wrapper: WrapperType): string{
    return wrapper + formFieldDictionary[fieldId] + wrapper;
}
