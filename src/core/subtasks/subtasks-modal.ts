import { App, ButtonComponent, DropdownComponent, Setting } from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { PlanningModal } from '../base-classes/planning-modal';
import { translate, UserMessageId } from '../types/i18n';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { ISubtaskIndexCard } from '../types/interfaces/i-subtask-index-card';
import { emptyString, identTags, zerothItem } from '../types/types';

export class SubtasksModal extends PlanningModal implements IModalForm {
    private displayMode: DisplayMode;
    private subtaskIndexCard: ISubtaskIndexCard;
    private onSubmit;
    private onSwitchToTaskMode;

    constructor(app: App, settings: Settings, subtaskIndexCard: ISubtaskIndexCard, displayMode: DisplayMode, 
        onSubmit: (hasChanged: boolean, app:App, settings: Settings) => void,
        onSwitchToTaskMode: (subtaskIndexCard: ISubtaskIndexCard) => void) {
        super(app, settings);
        this.displayMode = displayMode;
        this.subtaskIndexCard = subtaskIndexCard;
        this.onSubmit = onSubmit;
        this.onSwitchToTaskMode = onSwitchToTaskMode;
    }

    open(): void {
        this.contentEl.empty();
        super.open();
        super.buildForm(this.contentEl);

        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Task part of the form
        super.open();

        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.setTitle(translate(UserMessageId.CREATE_SUBTASK_TITLE));
            
            this.nameSection?.setName(translate(UserMessageId.SUBTASK_NAME_LABEL_CREATE));
            this.nameSection?.setDesc(translate(UserMessageId.SUBTASK_NAME_DESCRIPTION_CREATE));

            (this.parentSection as Setting)
                .setName(translate(UserMessageId.SUBTASK_PARENT_LABEL_CREATE))
                .setDesc(translate(UserMessageId.SUBTASK_PARENT_DESCRIPTION_CREATE))
                .addDropdown(dropdown =>
                    this.addNames(dropdown, this.settings.tasksFolder, identTags.PLANNING_TASK)
                );

            (this.subtaskToggleSection as Setting)
                .setName(translate(UserMessageId.SUBTASK_CHECKBOX_LABEL_CREATE))
                .setDesc(translate(UserMessageId.SUBTASK_CHECKBOX_DESCRIPTION_CREATE))
                .addToggle(toggle =>
                    toggle
                        .setValue(true)
                        .onChange(async () => {
                            this.updateIndexCard(this.subtaskIndexCard);
                            this.onSwitchToTaskMode(this.subtaskIndexCard);
                        })
                );

    
            this.subtaskToggleSection?.setName(translate(UserMessageId.SUBTASK_CHECKBOX_LABEL_CREATE));
            this.subtaskToggleSection?.setDesc(translate(UserMessageId.SUBTASK_CHECKBOX_DESCRIPTION_CREATE));

            this.statusTagSection?.setName(translate(UserMessageId.SUBTASK_STATUS_LABEL_CREATE));
            this.statusTagSection?.setDesc(translate(UserMessageId.SUBTASK_STATUS_DESCRIPTION_CREATE));

            this.targetDateSection?.setName(translate(UserMessageId.SUBTASK_TARGET_DATE_LABEL_CREATE));
            this.targetDateSection?.setDesc(translate(UserMessageId.SUBTASK_TARGET_DATE_DESCRIPTION_CREATE));

            this.hide([
                this.categoryTagSection,
                this.expectedDateSection,
                this.completedDateSection,
            ]);

            if (this.buttonsSection !== undefined) {
                //  Add a handler to the 'Create & Open' button
                (this.buttonsSection.components[zerothItem] as ButtonComponent).onClick(async () => {
                    this.updateIndexCard(this.subtaskIndexCard);
                    this.onSubmit(true, this.app, this.settings);
                });

                //  Add a handler to the 'Create' button
                (this.buttonsSection.components[1] as ButtonComponent).onClick(async () => {
                    this.updateIndexCard(this.subtaskIndexCard);
                    this.onSubmit(true, this.app, this.settings);
                });
                
                //  Add a handler to the 'Cancel' button
                (this.buttonsSection.components[2] as ButtonComponent).onClick(async () => {
                    this.onSubmit(false, this.app, this.settings);
                });
            }
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.SUBTASK_INDEX_CARD_TITLE));

            this.nameSection?.setName(translate(UserMessageId.SUBTASK_NAME_LABEL_IC));
            this.nameSection?.setDesc(translate(UserMessageId.SUBTASK_NAME_LABEL_DESCRIPTION_IC))

            const parentSetting: Setting | undefined = this._parentSection
            parentSetting?.setName(translate(UserMessageId.SUBTASK_PARENT_LABEL_IC))
                .setDesc(translate(UserMessageId.SUBTASK_PARENT_DESCRIPTION_IC))
                .addDropdown(dropdown =>
                    this.addNames(dropdown, this.settings.tasksFolder, identTags.PLANNING_TASK)
                );

            this.categoryTagSection?.setName(translate(UserMessageId.SUBTASK_CATEGORY_LABEL_IC));
            this.categoryTagSection?.setDesc(translate(UserMessageId.SUBTASK_CATEGORY_DESCRIPTION_IC));

            this.statusTagSection?.setName(translate(UserMessageId.SUBTASK_STATUS_LABEL_IC));
            this.statusTagSection?.setDesc(translate(UserMessageId.SUBTASK_STATUS_DESCRIPTION_IC))

            this.targetDateSection?.setName(translate(UserMessageId.SUBTASK_TARGET_DATE_LABEL_IC));
            this.targetDateSection?.setDesc(translate(UserMessageId.SUBTASK_TARGET_DATE_DESCRIPTION_IC));

            this.expectedDateSection?.setName(translate(UserMessageId.SUBTASK_EXPECTED_DATE_LABEL_IC));
            this.expectedDateSection?.setDesc(translate(UserMessageId.SUBTASK_EXPECTED_DATE_DESCRIPTION_IC));

            this.completedDateSection?.setName(translate(UserMessageId.SUBTASK_COMPLETED_DATE_LABEL_IC));
            this.completedDateSection?.setDesc(translate(UserMessageId.SUBTASK_COMPLETED_DATE_DESCRIPTION_IC));
    
            this.hide([
                this.subtaskToggleSection,
                this.buttonsSection,
            ])
        }
        this.showCurrentValues(this.subtaskIndexCard);
    }
        
    showCurrentValues(indexCard: ISubtaskIndexCard): void {
        super.showCurrentValues(indexCard);
        if (this.parentSection !== undefined)
            (this.parentSection.components[zerothItem] as DropdownComponent).setValue(indexCard.parentTask)
    }
    
    updateIndexCard(indexCard: ISubtaskIndexCard): void {
        super.updateIndexCard(indexCard);
        indexCard.parentTask = (this.parentSection !== undefined)
            ? (this.parentSection.components[zerothItem] as DropdownComponent).getValue() : emptyString;
    }
}
