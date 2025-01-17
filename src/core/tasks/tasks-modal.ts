import { App, ButtonComponent, DropdownComponent, Setting } from 'obsidian';
import { Settings } from 'src/settings/Settings';
import { uuid, UUID } from 'src/utils/uuid-generator';

import { IndexCardManager } from '../planner/index-card-manager';
import { PlanningModal } from '../planner/planning-modal';
import { translate, UserMessageId } from '../types/i18n';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { DisplayMode, identTags, zerothItem } from '../types/types';

export class TasksModal extends PlanningModal implements IModalForm{
    private displayMode: DisplayMode;
    private taskIndexCard: ITaskIndexCard;
    private onSubmit;
    private onSwitchToSubtaskMode;

    constructor(
        app: App, 
        settings: Settings, 
        taskIndexCard: ITaskIndexCard, 
        indexCardManager: IndexCardManager, 
        displayMode: DisplayMode, 
        onSubmit: (hasChanged: boolean, openFile: boolean, app:App, settings: Settings) => void,
        onSwitchToSubtaskMode: (taskIndexCard: ITaskIndexCard) => void) {
            super(app, settings, indexCardManager);
            this.displayMode = displayMode;
            this.taskIndexCard = taskIndexCard;
            this.onSubmit = onSubmit;
            this.onSwitchToSubtaskMode = onSwitchToSubtaskMode;
    }

    open(): void {
        super.open();

        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.setTitle(translate(UserMessageId.CREATE_TASK_TITLE));
            
            this.nameSection?.setName(translate(UserMessageId.TASK_NAME_LABEL_CREATE));
            this.nameSection?.setDesc(translate(UserMessageId.TASK_NAME_DESCRIPTION_CREATE));
            this.nameSection?.addText(()=>{});

            this.parentSection
                .setName(translate(UserMessageId.TASK_PARENT_LABEL_CREATE))
                .setDesc(translate(UserMessageId.TASK_PARENT_DESCRIPTION_CREATE))
                .addDropdown(dropdown =>
                    this.addNames(dropdown, this.settings.projectsFolder, identTags.PLANNING_PROJECT,
                        (dropdown, name) => {
                            dropdown.addOption(this.indexCardManager.getProjectRefId(name).getRefId(), name);
                        }
                    )
                );

            this.subtaskToggleSection
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
            this.statusTagSection.addDropdown(dropdownComponent =>
                this.addOptions(dropdownComponent, this.settings.statusTags, '', true)
            )
    
            this.targetDateSection?.setName(translate(UserMessageId.TASK_TARGET_DATE_LABEL_CREATE));
            this.targetDateSection?.setDesc(translate(UserMessageId.TASK_TARGET_DATE_DESCRIPTION_CREATE));
            this.targetDateSection.addText(text =>   
                text.inputEl.setAttr('type', 'date')
            );
    
            this.buttonsSection.addButton(button =>
                button
                    .setButtonText(translate(UserMessageId.CREATE_AND_OPEN_BUTTON_TEXT))
                    .onClick(async () => {
                        this.updateIndexCard(this.taskIndexCard);
                        this.onSubmit(true, true, this.app, this.settings);
                    })
            )
            .addButton(button =>
                button
                    .setButtonText(translate(UserMessageId.CREATE_ONLY_BUTTON_TEXT))
                    .onClick(async () => {
                        this.updateIndexCard(this.taskIndexCard);
                        this.onSubmit(true, false, this.app, this.settings);
                    })
            )
            .addButton(button =>
                button
                    .setButtonText(translate(UserMessageId.CANCEL_BUTTON_TEXT))
                    .onClick(async () => {
                        this.onSubmit(false, false, this.app, this.settings);
                    })
            );

            this.hide([
                this.categoryTagSection,
                this.expectedDateSection,
                this.completedDateSection,
            ]);
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.TASK_INDEX_CARD_TITLE));

            this.nameSection?.setName(translate(UserMessageId.TASK_NAME_LABEL_IC));
            this.nameSection?.setDesc(translate(UserMessageId.TASK_NAME_LABEL_DESCRIPTION_IC))
            this.nameSection?.addText(()=>{});

            const parentSetting: Setting | undefined = this._parentSection
            parentSetting?.setName(translate(UserMessageId.TASK_PARENT_LABEL_IC))
                .setDesc(translate(UserMessageId.TASK_PARENT_DESCRIPTION_IC))
                .addDropdown(dropdown =>
                    this.addNames(dropdown, this.settings.projectsFolder, identTags.PLANNING_PROJECT,
                        (dropdown, name) => {
                            dropdown.addOption(this.indexCardManager.getProjectRefId(name).getRefId(), name);
                        }
                    )
                );

            this.categoryTagSection?.setName(translate(UserMessageId.TASK_CATEGORY_LABEL_IC));
            this.categoryTagSection?.setDesc(translate(UserMessageId.TASK_CATEGORY_DESCRIPTION_IC));
            this.categoryTagSection.addDropdown(dropdownComponent =>
                super.addOptions(dropdownComponent, this.settings.categoryTags, '', true)
            );

            this.statusTagSection?.setName(translate(UserMessageId.TASK_STATUS_LABEL_IC));
            this.statusTagSection?.setDesc(translate(UserMessageId.TASK_STATUS_DESCRIPTION_IC))
            this.statusTagSection.addDropdown(dropdownComponent =>
                super.addOptions(dropdownComponent, this.settings.statusTags, '', true)
            )

            this.targetDateSection?.setName(translate(UserMessageId.TASK_TARGET_DATE_LABEL_IC));
            this.targetDateSection?.setDesc(translate(UserMessageId.TASK_TARGET_DATE_DESCRIPTION_IC));
            this.targetDateSection.addText(text =>   
                text.inputEl.setAttr('type', 'date')
            );

            this.expectedDateSection?.setName(translate(UserMessageId.TASK_EXPECTED_DATE_LABEL_IC));
            this.expectedDateSection?.setDesc(translate(UserMessageId.TASK_EXPECTED_DATE_DESCRIPTION_IC));
            this.expectedDateSection.addText(text =>   
                text.inputEl.setAttr('type', 'date')
            );

            this.completedDateSection?.setName(translate(UserMessageId.TASK_COMPLETED_DATE_LABEL_IC));
            this.completedDateSection?.setDesc(translate(UserMessageId.TASK_COMPLETED_DATE_DESCRIPTION_IC));
            this.completedDateSection.addText(text =>   
                text.inputEl.setAttr('type', 'date')
            );
    
            this.hide([
                this.subtaskToggleSection,
                this.buttonsSection,
            ])

            this.disable([
                this.nameSection,
                this.parentSection,
                this.categoryTagSection,
                this.statusTagSection,
                this.targetDateSection,
                this.expectedDateSection,
                this.completedDateSection,
                this.userTagsSection,
            ]);
        }
        this.showCurrentValues(this.taskIndexCard);
    }
        
    showCurrentValues(indexCard: ITaskIndexCard): void {
        super.showCurrentValues(indexCard);
        (this.parentSection.components[zerothItem] as DropdownComponent)
            .setValue(indexCard.parentProjectRefId.getRefId())
    }
    
    updateIndexCard(indexCard: ITaskIndexCard): void {
        super.updateIndexCard(indexCard);
        indexCard.parentProjectRefId = new UUID(false, (this.parentSection.components[zerothItem] as DropdownComponent).getValue() as uuid);
    }
}
