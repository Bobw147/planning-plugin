
export const FormFieldId = {
    STYLE_DIV_VISIBLE: "div.cf-pl-visible",
    STYLE_DIV_HIDDEN: "div.cf-pl-hidden",
    STYLE_ICON_HIDDEN: "i.cf-pl-hidden",
    
    // genericForm
    GF_INDEX_CARD: 'gf-index-card',

    GF_NAME: 'gf-name',
    GF_NAME_ICON: 'gf-icon',
    GF_NAME_LABEL: 'gf-name-label',
    GF_NAME_SECTION: 'gf-name-section',

    GF_SUBTASK_CHECKBOX_SECTION: 'gf-subtask-checkbox-section',
    GF_SUBTASK_CHECKBOX: 'gf-subtask-checkbox',
    GF_SUBTASK_LABEL: 'gf-subtask-checkbox-label',
    GF_MEMBER_OF_SECTION: 'gf-member-of-section',
    GF_MEMBER_OF_LABEL: 'gf-member-of-label',
    GF_MEMBER_OF_NAME: 'gf-member-of-name',
    GF_MEMBER_OF_ICON: 'gf-member-of-icon',
    
    GF_CATEGORY_TAG: 'gf-category-tag',
    GF_CATEGORY_TAG_ICON: 'gf-category-icon',
    GF_CATEGORY_TAG_LABEL: 'gf-category-tag=label',
    GF_CATEGORY_TAG_SECTION: 'gf-catgory-section',

    GF_IDENT_TAG: 'gf-ident-tag',
    GF_IDENT_TAG_LABEL: 'gf-ident-tag=label',

    GF_STATUS_TAG: 'gf-status-tag',
    GF_STATUS_TAG_ICON: 'gf-status-icon',
    GF_STATUS_TAG_LABEL: 'gf-status-tag-label',
    GF_STATUS_TAG_SECTION: 'gf-status-tag-section',

    GF_TARGET_DATE: 'gf-target-date',
    GF_TARGET_DATE_ICON: 'gf-target-date-icon',
    GF_TARGET_DATE_LABEL: 'gf-target-date-label',

    GF_EXPECTED_DATE: 'gf-expected-date',
    GF_EXPECTED_DATE_LABEL: 'gf-expected-date-label',
    GF_EXPECTED_DATE_SECTION: 'gf-expected=date-section',

    GF_COMPLETED_DATE: 'gf-completed-date',
    GF_COMPLETED_DATE_LABEL: 'gf-completed-date-label',
    GF_COMPLETED_DATE_SECTION: 'gf-completed-date-section',

    GF_USER_TAGS: 'gf-user-tags',
    GF_USER_TAGS_ICON: 'gf-user-tags-icon',
    GF_USER_TAGS_LABEL: 'gf-user-tags-label',

    GF_BUTTONS: 'gf-buttons',
    GF_CREATE_BUTTON: 'gf-create-button',
    GF_CANCEL_BUTTON: 'gf-cancel-button',    
} as const;

export type FormFieldId = typeof FormFieldId[keyof typeof FormFieldId];
