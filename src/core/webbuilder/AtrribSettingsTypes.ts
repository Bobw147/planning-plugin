export enum AttribSettingsId {
    DATE = 'attrib_setting_date',
    FALSE = 'attrib_setting_false',
    TEXT = 'attrib_setting_text',
    TRUE = 'attrib_setting_true',
    LOCK = 'attrib_setting_lock',
    UNLOCK = 'attrib_settings_unlock',
}

interface IAttribSettingTypes {
    [AttribSettingsId.DATE]: string;
    [AttribSettingsId.FALSE]: string;
    [AttribSettingsId.TEXT]: string;
    [AttribSettingsId.TRUE]: string;
    [AttribSettingsId.LOCK]: string;
    [AttribSettingsId.UNLOCK]: string;
}

const attributeSettingsDictionary: IAttribSettingTypes = {
    [AttribSettingsId.DATE]: 'date',
    [AttribSettingsId.FALSE]: 'false',
    [AttribSettingsId.TEXT]: 'text',
    [AttribSettingsId.TRUE]: 'true',
    [AttribSettingsId.LOCK]: 'lock',
    [AttribSettingsId.UNLOCK]: 'lock-open',
}

export function resolveAttribSetting(attribSettingId: AttribSettingsId): string {
    return attributeSettingsDictionary[attribSettingId];
}