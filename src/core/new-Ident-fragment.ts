import { App } from 'obsidian';
import { Settings } from 'src/settings/Settings';
import { assignNameOptions, assignTagOptions } from 'src/utils/utils';

import { FormFieldId, resolveField } from './form-builder/form-field-types';
import { Ident, identTags } from './types/types';

export function initIdentFragment(target: Ident, settings: Settings, app: App) {
    let targetSelect: HTMLSelectElement | null = null;
    const goalDiv: HTMLDivElement = document.getElementById(resolveField(FormFieldId.ID_CF_GOAL_BLOCK)) as HTMLDivElement;
    const projectDiv: HTMLDivElement = document.getElementById(resolveField(FormFieldId.ID_CF_PROJECT_BLOCK)) as HTMLDivElement;
    const taskDiv: HTMLDivElement = document.getElementById(resolveField(FormFieldId.ID_CF_TASK_BLOCK)) as HTMLDivElement;

    switch (target) {
        case Ident.GOAL:
            goalDiv.className = resolveField(FormFieldId.STYLE_DIV_VISIBLE);
            projectDiv.className = resolveField(FormFieldId.STYLE_DIV_HIDDEN);
            taskDiv.className = resolveField(FormFieldId.STYLE_DIV_HIDDEN);

            // Populate the Category & Status selectors with options the list contained in the plugin settings
            targetSelect = document.getElementById(resolveField(FormFieldId.ID_CF_GOAL_CATEGORY_TAG)) as HTMLSelectElement;           
            assignTagOptions(targetSelect, settings.categoryTags)
            break;

        case Ident.PROJECT:
            goalDiv.className = resolveField(FormFieldId.STYLE_DIV_HIDDEN);
            projectDiv.className = resolveField(FormFieldId.STYLE_DIV_VISIBLE);
            taskDiv.className = resolveField(FormFieldId.STYLE_DIV_HIDDEN);

            // Populate the Category & Status selectors with options the list contained in the plugin settings
            targetSelect = document.getElementById(resolveField(FormFieldId.ID_CF_PROJECT_CATEGORY_TAG)) as HTMLSelectElement;           
            assignTagOptions(targetSelect, settings.categoryTags)

            targetSelect = document.getElementById(resolveField(FormFieldId.ID_CF_PROJECT_GOAL_NAME)) as HTMLSelectElement;
            assignNameOptions(targetSelect, app, settings.goalsFolder, identTags.PLANNING_GOAL);
            break;

        case Ident.TASK:
            goalDiv.className = resolveField(FormFieldId.STYLE_DIV_HIDDEN);
            projectDiv.className = resolveField(FormFieldId.STYLE_DIV_HIDDEN);
            taskDiv.className = resolveField(FormFieldId.STYLE_DIV_VISIBLE);

            // Populate the Category & Status selectors with options the list contained in the plugin settings
            targetSelect = document.getElementById(resolveField(FormFieldId.ID_CF_TASK_CATEGORY_TAG)) as HTMLSelectElement;           
            assignTagOptions(targetSelect, settings.categoryTags)

            targetSelect = document.getElementById(resolveField(FormFieldId.ID_CF_TASK_PROJECT_NAME)) as HTMLSelectElement;
            assignNameOptions(targetSelect, app, settings.projectsFolder, identTags.PLANNING_PROJECT);
            break;
    }
}