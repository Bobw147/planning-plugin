import { App, DropdownComponent, TFile } from 'obsidian';
import { Settings } from 'src/settings/Settings';
import { uuid, UUID } from 'src/utils/uuid-generator';

import { LockableDateSetting } from '../custom-components/lockable-date-component';
import { LockableDropdownSetting } from '../custom-components/lockable-dropdown-component';
import { LockableTextSetting } from '../custom-components/lockable-text-component';
import { IndexCardManager } from '../planner/index-card-manager';
import { PlanningModal } from '../planner/planning-modal';
import { translate, UserMessageId } from '../types/i18n';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { DisplayMode, FirstItem, identTags } from '../types/types';

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
            super(app, settings, indexCardManager, displayMode);
            this.displayMode = displayMode;
            this.taskIndexCard = taskIndexCard;
            this.onSubmit = onSubmit;
            this.onSwitchToSubtaskMode = onSwitchToSubtaskMode;
    }

    open(): void {
        super.open();

        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.setTitle(translate(UserMessageId.CREATE_TASK_TITLE));
            
            this.nameSection.setName(translate(UserMessageId.TASK_NAME_LABEL_CREATE));
            this.nameSection.setDesc(translate(UserMessageId.TASK_NAME_DESCRIPTION_CREATE));
            this.nameSection.addText(()=>{});

            this.parentSection
                .setName(translate(UserMessageId.TASK_PARENT_LABEL_CREATE))
                .setDesc(translate(UserMessageId.TASK_PARENT_DESCRIPTION_CREATE))
                .addDropdown(dropdown =>
                    this.addNames(dropdown, this.settings.projectsFolder, identTags.PLANNING_PROJECT,
                        (dropdown, name) => {
                            dropdown.addOption(this.indexCardManager.getProjectUUID(name).getRefId(), name);
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
                            this.indexCardManager.updateDateDependencies();
                            this.updateIndexCard(this.taskIndexCard);
                            this.onSwitchToSubtaskMode(this.taskIndexCard);
                        })
                );
    
            this.statusTagSection.setName(translate(UserMessageId.TASK_STATUS_LABEL_CREATE));
            this.statusTagSection.setDesc(translate(UserMessageId.TASK_STATUS_DESCRIPTION_CREATE));
            this.statusTagSection.addDropdown(dropdownComponent =>
                this.addOptions(dropdownComponent, this.settings.statusTags, '', true)
            )
    
            this.targetDateSection.setName(translate(UserMessageId.TASK_TARGET_DATE_LABEL_CREATE));
            this.targetDateSection.setDesc(translate(UserMessageId.TASK_TARGET_DATE_DESCRIPTION_CREATE));
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
                this.userTagsSection,
            ]);
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.TASK_INDEX_CARD_TITLE));

            this.nameSection.setName(translate(UserMessageId.TASK_NAME_LABEL_IC));
            this.nameSection.setDesc(translate(UserMessageId.TASK_NAME_LABEL_DESCRIPTION_IC));
            (<LockableTextSetting> this.nameSection).addLockableTextComponent((text) => {
                text.onChange(async (value) => {
                    this.taskIndexCard.name = value;
                    await this.taskIndexCard.save(this.app.fileManager, this.taskIndexCard.file as TFile)
                })
            });

            this.parentSection.setName(translate(UserMessageId.TASK_PARENT_LABEL_IC));
            this.parentSection.setDesc(translate(UserMessageId.TASK_PARENT_DESCRIPTION_IC));
            (<LockableDropdownSetting> this.parentSection).addLockableDropdownComponent((dropdown) => {
                this.addNames(dropdown, this.settings.projectsFolder, identTags.PLANNING_PROJECT, 
                    (dropdown, name) => {
                        dropdown.addOption(this.indexCardManager.getProjectUUID(name).getRefId(), name);
                    })
                dropdown.onChange(async (value) => {
                    this.taskIndexCard.parentProjectRefId = new UUID(false, value as uuid);
                    await this.taskIndexCard.save(this.app.fileManager, this.taskIndexCard.file as TFile)
                })
            });       

            this.categoryTagSection.setName(translate(UserMessageId.TASK_CATEGORY_LABEL_IC));
            this.categoryTagSection.setDesc(translate(UserMessageId.TASK_CATEGORY_DESCRIPTION_IC));
            this.categoryTagSection.addDropdown(dropdownComponent =>
                this.addOptions(dropdownComponent, this.settings.categoryTags, '', true)
            );

            this.statusTagSection.setName(translate(UserMessageId.TASK_STATUS_LABEL_IC));
            this.statusTagSection.setDesc(translate(UserMessageId.TASK_STATUS_DESCRIPTION_IC));
            (<LockableDropdownSetting> this.statusTagSection)
                .addLockableDropdownComponent((dropdown) => {
                    this.addOptions(dropdown, this.settings.statusTags, '', true)
                    dropdown.onChange(async (value) => {
                        this.taskIndexCard.statusTag = value;
                        await this.taskIndexCard.save(this.app.fileManager, this.taskIndexCard.file as TFile)
                    })
            });

            this.targetDateSection.setName(translate(UserMessageId.TASK_TARGET_DATE_LABEL_IC));
            this.targetDateSection.setDesc(translate(UserMessageId.TASK_TARGET_DATE_DESCRIPTION_IC));
            (<LockableDateSetting> this.targetDateSection)
                .addLockableDateComponent((date) => {
                    date.onChange(async(value) => { 
                        this.taskIndexCard.targetDate = new Date(value);
                        await this.taskIndexCard.save(this.app.fileManager, this.taskIndexCard.file as TFile)
                    })
            });

            this.expectedDateSection.setName(translate(UserMessageId.TASK_EXPECTED_DATE_LABEL_IC));
            this.expectedDateSection.setDesc(translate(UserMessageId.TASK_EXPECTED_DATE_DESCRIPTION_IC));
            (<LockableDateSetting> this.expectedDateSection)
                .addLockableDateComponent((date) => {
                    date.onChange(async (value) => { 
                        this.taskIndexCard.expectedDate = new Date(value);
                        await this.taskIndexCard.save(this.app.fileManager, this.taskIndexCard.file as TFile)
                    })
            });

            this.completedDateSection.setName(translate(UserMessageId.TASK_COMPLETED_DATE_LABEL_IC));
            this.completedDateSection.setDesc(translate(UserMessageId.TASK_COMPLETED_DATE_DESCRIPTION_IC));
            (<LockableDateSetting> this.completedDateSection)
                .addLockableDateComponent((date) => {
                    date.onChange(async(value) => { 
                        this.taskIndexCard.completedDate = new Date(value);
                        await this.taskIndexCard.save(this.app.fileManager, this.taskIndexCard.file as TFile)
                    })
            });
    
            this.hide([
                this.subtaskToggleSection,
                this.userTagsSection,
                this.buttonsSection,
            ])

            this.disable([
                this.categoryTagSection,
            ]);
        }
        this.showCurrentValues(this.taskIndexCard);
    }
        
    showCurrentValues(indexCard: ITaskIndexCard): void {
        super.showCurrentValues(indexCard);
        (this.parentSection.components[FirstItem] as DropdownComponent)
            .setValue(indexCard.parentProjectRefId.getRefId())
    }
    
    updateIndexCard(indexCard: ITaskIndexCard): void {
        super.updateIndexCard(indexCard);
        indexCard.parentProjectRefId = new UUID(false, (this.parentSection.components[FirstItem] as DropdownComponent).getValue() as uuid);
    }
}