export enum AttribSettingsId {
    DATE = 'attrib_setting_date',
    FALSE = 'attrib_setting_false',
    TEXT = 'attrib_setting_text',
    TRUE = 'attribg_setting_true',
}

interface IAttribSettingTypes {
    [AttribSettingsId.DATE]: string;
    [AttribSettingsId.FALSE]: string;
    [AttribSettingsId.TEXT]: string;
    [AttribSettingsId.TRUE]: string;
}

const attributeSettingsDictionary: IAttribSettingTypes = {
    [AttribSettingsId.DATE]: 'date',
    [AttribSettingsId.FALSE]: 'false',
    [AttribSettingsId.TEXT]: 'text',
    [AttribSettingsId.TRUE]: 'true',
}

export function resolveAttribSetting(attribSettingId: AttribSettingsId): string {
    return attributeSettingsDictionary[attribSettingId];
}