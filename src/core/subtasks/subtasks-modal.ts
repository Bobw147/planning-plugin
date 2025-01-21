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
import { ISubtaskIndexCard } from '../types/interfaces/i-subtask-index-card';
import { DisplayMode, identTags, zerothItem } from '../types/types';

export class SubtasksModal extends PlanningModal implements IModalForm {
    private displayMode: DisplayMode;
    private subtaskIndexCard: ISubtaskIndexCard;
    private onSubmit;
    private onSwitchToTaskMode;

    constructor(
        app: App, 
        settings: Settings, 
        subtaskIndexCard: ISubtaskIndexCard, 
        indexCardManager: IndexCardManager, 
        displayMode: DisplayMode, 
        onSubmit: (hasChanged: boolean, openFile: boolean, app:App, settings: Settings) => void,
        onSwitchToTaskMode: (subtaskIndexCard: ISubtaskIndexCard) => void) {

        super(app, settings, indexCardManager, displayMode);
        this.displayMode = displayMode;
        this.subtaskIndexCard = subtaskIndexCard;
        this.onSubmit = onSubmit;
        this.onSwitchToTaskMode = onSwitchToTaskMode;
    }

    open(): void {
        super.open();

        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.setTitle(translate(UserMessageId.CREATE_SUBTASK_TITLE));
            
            this.nameSection.setName(translate(UserMessageId.SUBTASK_NAME_LABEL_CREATE));
            this.nameSection.setDesc(translate(UserMessageId.SUBTASK_NAME_DESCRIPTION_CREATE));
            this.nameSection.addText(()=>{});

            this.parentSection
                .setName(translate(UserMessageId.SUBTASK_PARENT_LABEL_CREATE))
                .setDesc(translate(UserMessageId.SUBTASK_PARENT_DESCRIPTION_CREATE))
                .addDropdown(dropdown =>
                    this.addNames(dropdown, this.settings.tasksFolder, identTags.PLANNING_TASK,
                        (dropdown, name) => {
                            dropdown.addOption(this.indexCardManager.getTaskUUID(name).getRefId(), name);
                        }
                    )
                );

            this.subtaskToggleSection
                .setName(translate(UserMessageId.SUBTASK_CHECKBOX_LABEL_CREATE))
                .setDesc(translate(UserMessageId.SUBTASK_CHECKBOX_DESCRIPTION_CREATE))
                .addToggle(toggle =>
                    toggle
                        .setValue(false)
                        .onChange(() => {
                            this.updateIndexCard(this.subtaskIndexCard);
                            this.onSwitchToTaskMode(this.subtaskIndexCard);
                        })
                );

            this.statusTagSection.setName(translate(UserMessageId.SUBTASK_STATUS_LABEL_CREATE));
            this.statusTagSection.setDesc(translate(UserMessageId.SUBTASK_STATUS_DESCRIPTION_CREATE));
            this.statusTagSection.addDropdown(dropdownComponent =>
                super.addOptions(dropdownComponent, this.settings.statusTags, '', true)
            )

            this.targetDateSection.setName(translate(UserMessageId.SUBTASK_TARGET_DATE_LABEL_CREATE));
            this.targetDateSection.setDesc(translate(UserMessageId.SUBTASK_TARGET_DATE_DESCRIPTION_CREATE));
            this.targetDateSection.addText(text =>   
                text.inputEl.setAttr('type', 'date')
            );
    
            this.buttonsSection.addButton(button =>
                button
                    .setButtonText(translate(UserMessageId.CREATE_AND_OPEN_BUTTON_TEXT))
                    .onClick(async () => {
                        this.updateIndexCard(this.subtaskIndexCard);
                        this.onSubmit(true, true, this.app, this.settings);
                    })
            )
            .addButton(button =>
                button
                    .setButtonText(translate(UserMessageId.CREATE_ONLY_BUTTON_TEXT))
                    .onClick(async () => {
                        this.updateIndexCard(this.subtaskIndexCard);
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
            this.setTitle(translate(UserMessageId.SUBTASK_INDEX_CARD_TITLE));

            this.nameSection.setName(translate(UserMessageId.SUBTASK_NAME_LABEL_IC));
            this.nameSection.setDesc(translate(UserMessageId.SUBTASK_NAME_LABEL_DESCRIPTION_IC));
            (<LockableTextSetting> this.nameSection).addLockableTextComponent((text) => {
                text.onChange(async (value) => {
                    this.subtaskIndexCard.name = value;
                    await this.subtaskIndexCard.save(this.app.fileManager, this.subtaskIndexCard.file as TFile)
                })
            });

            this.parentSection.setName(translate(UserMessageId.SUBTASK_PARENT_LABEL_IC));
            this.parentSection.setDesc(translate(UserMessageId.SUBTASK_PARENT_DESCRIPTION_IC));
            (<LockableDropdownSetting> this.parentSection).addLockableDropdownComponent((dropdown) => {
                this.addNames(dropdown, this.settings.tasksFolder, identTags.PLANNING_TASK, 
                    (dropdown, name) => {
                        dropdown.addOption(this.indexCardManager.getTaskUUID(name).getRefId(), name);
                    })
                dropdown.onChange(async (value) => {
                    this.subtaskIndexCard.parentTaskRefId = new UUID(false, value as uuid);
                    await this.subtaskIndexCard.save(this.app.fileManager, this.subtaskIndexCard.file as TFile)
                })
            });       

            this.categoryTagSection.setName(translate(UserMessageId.SUBTASK_CATEGORY_LABEL_IC));
            this.categoryTagSection.setDesc(translate(UserMessageId.SUBTASK_CATEGORY_DESCRIPTION_IC));
            this.categoryTagSection.addDropdown(dropdownComponent =>
                this.addOptions(dropdownComponent, this.settings.categoryTags, '', true)
            );

            this.statusTagSection.setName(translate(UserMessageId.SUBTASK_STATUS_LABEL_IC));
            this.statusTagSection.setDesc(translate(UserMessageId.SUBTASK_STATUS_DESCRIPTION_IC));
            (<LockableDropdownSetting> this.statusTagSection) .addLockableDropdownComponent((dropdown) => {
                this.addOptions(dropdown, this.settings.statusTags, '', true)
                dropdown.onChange(async (value) => {
                    this.subtaskIndexCard.statusTag = value;
                    await this.subtaskIndexCard.save(this.app.fileManager, this.subtaskIndexCard.file as TFile)
                })
            });

            this.targetDateSection.setName(translate(UserMessageId.SUBTASK_TARGET_DATE_LABEL_IC));
            this.targetDateSection.setDesc(translate(UserMessageId.SUBTASK_TARGET_DATE_DESCRIPTION_IC));
            (<LockableDateSetting> this.targetDateSection).addLockableDateComponent((date) => {
                date.onChange(async(value) => { 
                    this.subtaskIndexCard.targetDate = new Date(value);
                    await this.subtaskIndexCard.save(this.app.fileManager, this.subtaskIndexCard.file as TFile)
                })
            });

            this.expectedDateSection.setName(translate(UserMessageId.SUBTASK_EXPECTED_DATE_LABEL_IC));
            this.expectedDateSection.setDesc(translate(UserMessageId.SUBTASK_EXPECTED_DATE_DESCRIPTION_IC));
            (<LockableDateSetting> this.expectedDateSection).addLockableDateComponent((date) => {
                date.onChange(async (value) => { 
                    this.subtaskIndexCard.expectedDate = new Date(value);
                    await this.subtaskIndexCard.save(this.app.fileManager, this.subtaskIndexCard.file as TFile)
                })
            });

            this.completedDateSection.setName(translate(UserMessageId.SUBTASK_COMPLETED_DATE_LABEL_IC));
            this.completedDateSection.setDesc(translate(UserMessageId.SUBTASK_COMPLETED_DATE_DESCRIPTION_IC));
            (<LockableDateSetting> this.completedDateSection).addLockableDateComponent((date) => {
                date.onChange(async(value) => { 
                    this.subtaskIndexCard.completedDate = new Date(value);
                    await this.subtaskIndexCard.save(this.app.fileManager, this.subtaskIndexCard.file as TFile)
                })
            });

            this.hide([
                this.subtaskToggleSection,
                this.userTagsSection,
                this.buttonsSection,
            ])

            this.disable([
                this.categoryTagSection,
                this.userTagsSection,
            ]);
        }
        this.showCurrentValues(this.subtaskIndexCard);
    }
        
    showCurrentValues(indexCard: ISubtaskIndexCard): void {
        super.showCurrentValues(indexCard);
        (this.parentSection.components[zerothItem] as DropdownComponent)
            .setValue(indexCard.parentTaskRefId.getRefId());
    }
    
    updateIndexCard(indexCard: ISubtaskIndexCard): void {
        super.updateIndexCard(indexCard);
        indexCard.parentTaskRefId = new UUID(false, (this.parentSection.components[zerothItem] as DropdownComponent).getValue() as uuid);
    }
}
