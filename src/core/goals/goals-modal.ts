import { App, TFile } from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { LockableDateSetting } from '../custom-components/lockable-date-component';
import { LockableDropdownSetting } from '../custom-components/lockable-dropdown-component';
import { LockableTextSetting } from '../custom-components/lockable-text-component';
import { IndexCardManager } from '../planner/index-card-manager';
import { PlanningModal } from '../planner/planning-modal';
import { translate, UserMessageId } from '../types/i18n';
import { IGoalIndexCard } from '../types/interfaces/i-goal-index-card';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { DisplayMode } from '../types/types';

export class GoalsModal extends PlanningModal implements IModalForm {
    private goalIndexCard: IGoalIndexCard;
    private displayMode: DisplayMode;
    private onSubmit;

    constructor(
        app: App, 
        settings: Settings, 
        goalIndexCard: IGoalIndexCard, 
        indexCardManager: IndexCardManager,
        displayMode: DisplayMode,  
        onSubmit: (result: boolean, openFile: boolean, app: App, settings: Settings) => void) {

        super(app, settings, indexCardManager, displayMode);
        this.displayMode = displayMode;
        this.goalIndexCard = goalIndexCard;
        this.onSubmit = onSubmit
    }

    open(): void {
        super.open()

        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.setTitle(translate(UserMessageId.CREATE_GOAL_TITLE));

            this.nameSection.setName(translate(UserMessageId.GOAL_NAME_LABEL_CREATE));
            this.nameSection.setDesc(translate(UserMessageId.GOAL_NAME_DESCRIPTION_CREATE));
            this.nameSection.addText((text) => {});

            this.categoryTagSection.setName(translate(UserMessageId.GOAL_CATEGORY_LABEL_CREATE));
            this.categoryTagSection.setDesc(translate(UserMessageId.GOAL_CATEGORY_DESCRIPTION_CREATE));
            this.categoryTagSection.addDropdown(dropdownComponent => {
                this.addOptions(dropdownComponent, this.settings.categoryTags, '', true);
            });

            this.targetDateSection.setName(translate(UserMessageId.GOAL_TARGET_DATE_LABEL_CREATE));
            this.targetDateSection.setDesc(translate(UserMessageId.GOAL_TARGET_DATE_DESCRIPTION_CREATE));
            this.targetDateSection.addText(text =>   
                text.inputEl.setAttr('type', 'date')
            );

            this.buttonsSection.addButton(button =>
                button
                    .setButtonText(translate(UserMessageId.CREATE_AND_OPEN_BUTTON_TEXT))
                    .onClick(async () => {
                        this.updateIndexCard(this.goalIndexCard);
                        this.onSubmit(true, true, this.app, this.settings);
                    })
            )
            .addButton(button =>
                button
                    .setButtonText(translate(UserMessageId.CREATE_ONLY_BUTTON_TEXT))
                    .onClick(async () => {
                        this.updateIndexCard(this.goalIndexCard);
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
                this.parentSection,
                this.subtaskToggleSection,
                this.statusTagSection,
                this.expectedDateSection,
                this.completedDateSection,
                this.userTagsSection,
            ]);
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.GOAL_INDEX_CARD_TITLE));

            const nameSetting: LockableTextSetting = this.nameSection as LockableTextSetting;
            nameSetting.setName(translate(UserMessageId.GOAL_NAME_LABEL_IC));
            nameSetting.setDesc(translate(UserMessageId.GOAL_NAME_DESCRIPTION_IC));
            nameSetting.addLockableTextComponent((text) => {
                text.onChange((value) => {
                    this.goalIndexCard.name = value;
                })
            });

            const categoryTagSetting: LockableDropdownSetting = this.categoryTagSection as LockableDropdownSetting;
            categoryTagSetting.setName(translate(UserMessageId.GOAL_CATEGORY_LABEL_IC));
            categoryTagSetting.setDesc(translate(UserMessageId.GOAL_CATEGORY_DESCRIPTION_IC));
            categoryTagSetting.addLockableDropdownComponent((dropdown) => {
                this.addOptions(dropdown, this.settings.categoryTags, '', true)
                dropdown.onChange(async (value) => {
                    this.goalIndexCard.categoryTag = value;
                    await this.goalIndexCard.save(this.app.fileManager, this.goalIndexCard.file as TFile)
                })
            })
 
            const statusTagSetting: LockableDropdownSetting = this.statusTagSection as LockableDropdownSetting;
            statusTagSetting.setName(translate(UserMessageId.GOAL_STATUS_LABEL_IC));
            statusTagSetting.setDesc(translate(UserMessageId.GOAL_STATUS_DESCRIPTION_IC));
            statusTagSetting.addLockableDropdownComponent((dropdown) => {
                this.addOptions(dropdown, this.settings.statusTags, '', true)
                dropdown.onChange(async (value) => {
                    this.goalIndexCard.statusTag = value;
                    await this.goalIndexCard.save(this.app.fileManager, this.goalIndexCard.file as TFile)
                })
            })

            const targetDateSetting: LockableDateSetting = this.targetDateSection as LockableDateSetting;
            targetDateSetting.setName(translate(UserMessageId.GOAL_TARGET_DATE_LABEL_IC));
            targetDateSetting.setDesc(translate(UserMessageId.GOAL_TARGET_DATE_DESCRIPTION_IC));
            targetDateSetting.addLockableDateComponent((date) => {
                date.onChange(async(value) => { 
                    this.goalIndexCard.targetDate = new Date(value);
                    await this.goalIndexCard.save(this.app.fileManager, this.goalIndexCard.file as TFile)
                })
            });

            const expectedDateSetting: LockableDateSetting = this.expectedDateSection as LockableDateSetting;
            expectedDateSetting.setName(translate(UserMessageId.GOAL_EXPECTED_DATE_LABEL_IC));
            expectedDateSetting.setDesc(translate(UserMessageId.GOAL_EXPECTED_DATE_DESCRIPTION_IC));
            expectedDateSetting.addLockableDateComponent((date) => {
                date.onChange(async (value) => { 
                    this.goalIndexCard.expectedDate = new Date(value);
                    await this.goalIndexCard.save(this.app.fileManager, this.goalIndexCard.file as TFile)
                })
            });

            const completedDateSetting: LockableDateSetting = this.completedDateSection as LockableDateSetting;
            completedDateSetting.setName(translate(UserMessageId.GOAL_COMPLETED_DATE_LABEL_IC));
            completedDateSetting.setDesc(translate(UserMessageId.GOAL_COMPLETED_DATE_DESCRIPTION_IC));
            completedDateSetting.addLockableDateComponent((date) => {
                date.onChange(async(value) => { 
                    this.goalIndexCard.completedDate = new Date(value);
                    await this.goalIndexCard.save(this.app.fileManager, this.goalIndexCard.file as TFile)
                })
            });
            
            this.hide([
                this.parentSection,
                this.subtaskToggleSection,
                this.userTagsSection,
                this.buttonsSection,
            ]);

            this.showCurrentValues(this.goalIndexCard);
        }
    }

    showCurrentValues(indexCard: IGoalIndexCard): void {
        super.showCurrentValues(indexCard);
    }
}