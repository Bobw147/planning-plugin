export enum AttribSettingsId {
    
    CHECKBOX = 'attrib_setting_checkbox',
    DATE = 'attrib_setting_date',
    FALSE = 'attrib_setting_false',
    NONE = 'attrib_setting_none',
    TEXT = 'attrib_setting_text',
    TRUE = 'attrib_setting_true',
    LOCK = 'attrib_setting_lock',
    UNLOCK = 'attrib_settings_unlock',
}

interface IAttribSettingTypes {
    [AttribSettingsId.CHECKBOX]: string;
    [AttribSettingsId.DATE]: string;
    [AttribSettingsId.FALSE]: string;
    [AttribSettingsId.NONE]: string;
    [AttribSettingsId.TEXT]: string;
    [AttribSettingsId.TRUE]: string;
    [AttribSettingsId.LOCK]: string;
    [AttribSettingsId.UNLOCK]: string;

}

const attributeSettingsDictionary: IAttribSettingTypes = {
    [AttribSettingsId.CHECKBOX]: 'checkbox',
    [AttribSettingsId.DATE]: 'date',
    [AttribSettingsId.FALSE]: 'false',
    [AttribSettingsId.TEXT]: 'text',
    [AttribSettingsId.NONE]: 'none',
    [AttribSettingsId.TRUE]: 'true',
    [AttribSettingsId.LOCK]: 'lock',
    [AttribSettingsId.UNLOCK]: 'lock-open',
}

export function resolveAttribSetting(attribSettingId: AttribSettingsId): string {
    return attributeSettingsDictionary[attribSettingId];
}