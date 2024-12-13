export const AttribSettingsId = {
    CHECKBOX: 'checkbox',
    DATE: 'date',
    FALSE: 'false',
    NONE: 'none',
    TEXT: 'text',
    TRUE: 'true',
    LOCK: 'lock',
    UNLOCK: 'unlock',
} as const;

export type AttribSettingsId = typeof AttribSettingsId[keyof typeof AttribSettingsId];
