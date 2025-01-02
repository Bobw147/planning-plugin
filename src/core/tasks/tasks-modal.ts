import { App, ButtonComponent, DropdownComponent, Setting } from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { PlanningModal } from '../base-classes/planning-modal';
import { translate, UserMessageId } from '../types/i18n';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { DisplayMode, emptyString, identTags, zerothItem } from '../types/types';

export class TasksModal extends PlanningModal implements IModalForm{
    private displayMode: DisplayMode;
    private taskIndexCard: ITaskIndexCard;
    private onSubmit;
    private onSwitchToSubtaskMode;

    constructor(app: App, settings: Settings, taskIndexCard: ITaskIndexCard, displayMode: DisplayMode, 
        onSubmit: (hasChanged: boolean, openFile: boolean, app:App, settings: Settings) => void,
        onSwitchToSubtaskMode: (taskIndexCard: ITaskIndexCard) => void) {
		super(app, settings);
        this.displayMode = displayMode;
        this.taskIndexCard = taskIndexCard;
        this.onSubmit = onSubmit;
        this.onSwitchToSubtaskMode = onSwitchToSubtaskMode;
    }

    open(): void {
        this.contentEl.empty();
        super.open();
        super.buildForm(this.contentEl);

        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.setTitle(translate(UserMessageId.CREATE_TASK_TITLE));
            
            this.nameSection?.setName(translate(UserMessageId.TASK_NAME_LABEL_CREATE));
            this.nameSection?.setDesc(translate(UserMessageId.TASK_NAME_DESCRIPTION_CREATE));

            (this.parentSection as Setting)
                .setName(translate(UserMessageId.TASK_PARENT_LABEL_CREATE))
                .setDesc(translate(UserMessageId.TASK_PARENT_DESCRIPTION_CREATE))
                .addDropdown(dropdown =>
                    this.addNames(dropdown, this.settings.projectsFolder, identTags.PLANNING_PROJECT)
                );


            (this.subtaskToggleSection as Setting)
                .setName(translate(UserMessageId.TASK_SUBTASK_CHECKBOX_LABEL_CREATE))
                .setDesc(translate(UserMessageId.TASK_SUBTASK_CHECKBOX_DESCRIPTION_CREATE))
                .addToggle(toggle =>
                    toggle
                        .setValue(false)
                        .onChange(() => {
                            this.updateIndexCard(this.taskIndexCard);
                            this.onSwitchToSubtaskMode(this.taskIndexCard);
                        })
                );


            this.statusTagSection?.setName(translate(UserMessageId.TASK_STATUS_LABEL_CREATE));
            this.statusTagSection?.setDesc(translate(UserMessageId.TASK_STATUS_DESCRIPTION_CREATE));

            this.targetDateSection?.setName(translate(UserMessageId.TASK_TARGET_DATE_LABEL_CREATE));
            this.targetDateSection?.setDesc(translate(UserMessageId.TASK_TARGET_DATE_DESCRIPTION_CREATE));

            this.hide([
                this.categoryTagSection,
                this.expectedDateSection,
                this.completedDateSection,
            ]);

            if (this.buttonsSection !== undefined) {
                //  Add a handler to the 'Create & Open' button
                (this.buttonsSection.components[zerothItem] as ButtonComponent).onClick(async () => {
                    this.updateIndexCard(this.taskIndexCard);
                    this.onSubmit(true, true, this.app, this.settings);
                });

                //  Add a handler to the 'Create' button
                (this.buttonsSection.components[1] as ButtonComponent).onClick(async () => {
                    this.updateIndexCard(this.taskIndexCard);
                    this.onSubmit(true, false, this.app, this.settings);
                });
                
                //  Add a handler to the 'Cancel' button
                (this.buttonsSection.components[2] as ButtonComponent).onClick(async () => {
                    this.onSubmit(false, false, this.app, this.settings);
                });
            }
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.TASK_INDEX_CARD_TITLE));

            this.nameSection?.setName(translate(UserMessageId.TASK_NAME_LABEL_IC));
            this.nameSection?.setDesc(translate(UserMessageId.TASK_NAME_LABEL_DESCRIPTION_IC))

            const parentSetting: Setting | undefined = this._parentSection
            parentSetting?.setName(translate(UserMessageId.TASK_PARENT_LABEL_IC))
                .setDesc(translate(UserMessageId.TASK_PARENT_DESCRIPTION_IC))
                .addDropdown(dropdown =>
                    this.addNames(dropdown, this.settings.projectsFolder, identTags.PLANNING_PROJECT)
                );

            this.categoryTagSection?.setName(translate(UserMessageId.TASK_CATEGORY_LABEL_IC));
            this.categoryTagSection?.setDesc(translate(UserMessageId.TASK_CATEGORY_DESCRIPTION_IC));

            this.statusTagSection?.setName(translate(UserMessageId.TASK_STATUS_LABEL_IC));
            this.statusTagSection?.setDesc(translate(UserMessageId.TASK_STATUS_DESCRIPTION_IC))

            this.targetDateSection?.setName(translate(UserMessageId.TASK_TARGET_DATE_LABEL_IC));
            this.targetDateSection?.setDesc(translate(UserMessageId.TASK_TARGET_DATE_DESCRIPTION_IC));

            this.expectedDateSection?.setName(translate(UserMessageId.TASK_EXPECTED_DATE_LABEL_IC));
            this.expectedDateSection?.setDesc(translate(UserMessageId.TASK_EXPECTED_DATE_DESCRIPTION_IC));

            this.completedDateSection?.setName(translate(UserMessageId.TASK_COMPLETED_DATE_LABEL_IC));
            this.completedDateSection?.setDesc(translate(UserMessageId.TASK_COMPLETED_DATE_DESCRIPTION_IC));
    
            this.hide([
                this.subtaskToggleSection,
                this.buttonsSection,
            ])
        }
        this.showCurrentValues(this.taskIndexCard);
    }
        
    showCurrentValues(indexCard: ITaskIndexCard): void {
        super.showCurrentValues(indexCard);
        if (this.parentSection !== undefined)
            (this.parentSection.components[zerothItem] as DropdownComponent).setValue(indexCard.parentProject)
    }
    
    updateIndexCard(indexCard: ITaskIndexCard): void {
        super.updateIndexCard(indexCard);
        indexCard.parentProject = (this.parentSection !== undefined)
            ? (this.parentSection.components[zerothItem] as DropdownComponent).getValue() : emptyString;
    }
}
