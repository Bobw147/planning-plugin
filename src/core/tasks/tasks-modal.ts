import { App, ButtonComponent, DropdownComponent, Setting, ToggleComponent } from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { PlanningModal } from '../base-classes/planning-modal';
import { translate, UserMessageId } from '../form-builder/i18n';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { emptyString, identTags, zerothItem } from '../types/types';

export class TasksModal extends PlanningModal implements IModalForm{
    private displayMode: DisplayMode;
    private taskIndexCard: ITaskIndexCard;
    private onSubmit;
    private onSwitchToSubtaskMode;

    constructor(app: App, settings: Settings, taskIndexCard: ITaskIndexCard, displayMode: DisplayMode, 
        onSubmit: (hasChanged: boolean, app:App, settings: Settings) => void,
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

            this._parentSection = new Setting(this.contentEl)
                .setName(translate(UserMessageId.TASK_PARENT_LABEL_CREATE))
                .setDesc(translate(UserMessageId.TASK_PARENT_DESCRIPTION_CREATE))
                .addDropdown(dropdown =>
                    this.addNames(dropdown, this.settings.projectsFolder, identTags.PLANNING_TASK)
                );

            this.subtaskToggleSection?.setName(translate(UserMessageId.TASK_SUBTASK_CHECKBOX_LABEL_CREATE));
            this.subtaskToggleSection?.setDesc(translate(UserMessageId.TASK_SUBTASK_CHECKBOX_DESCRIPTION_CREATE));
            this.subtaskToggleSection?.controlEl.onClickEvent(async () =>{
                this.updateIndexCard(this.taskIndexCard);
                this.onSwitchToSubtaskMode(this.taskIndexCard);
            });

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
                    this.onSubmit(true, this.app, this.settings);
                });

                //  Add a handler to the 'Create' button
                (this.buttonsSection.components[1] as ButtonComponent).onClick(async () => {
                    this.updateIndexCard(this.taskIndexCard);
                    this.onSubmit(true, this.app, this.settings);
                });
                
                //  Add a handler to the 'Cancel' button
                (this.buttonsSection.components[2] as ButtonComponent).onClick(async () => {
                    this.onSubmit(false, this.app, this.settings);
                });
            }
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.TASK_INDEX_CARD_TITLE));

            this.nameSection?.setName(translate(UserMessageId.TASK_NAME_LABEL_IC));
            this.nameSection?.setDesc(translate(UserMessageId.TASK_NAME_LABEL_DESCRIPTION_IC))

            this.parentSection?.setName(translate(UserMessageId.TASK_PARENT_LABEL_IC));
            this.parentSection?.setDesc(translate(UserMessageId.TASK_PARENT_DESCRIPTION_IC))

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
            this.showCurrentValues(this.taskIndexCard);
        }
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
