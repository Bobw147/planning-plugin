import { App, TextComponent } from 'obsidian';
import { LockableInputSetting } from 'src/settings/lockable-settings';
import { Settings } from 'src/settings/Settings';

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

        super(app, settings, indexCardManager);
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
            ]);
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            let nameAccessLocked: boolean;
            let nameTextComponent: TextComponent;

            this.setTitle(translate(UserMessageId.GOAL_INDEX_CARD_TITLE));

            this.nameSection.setName(translate(UserMessageId.GOAL_NAME_LABEL_IC));
            this.nameSection.setDesc(translate(UserMessageId.GOAL_NAME_DESCRIPTION_IC));
            this.nameSection.addText((text) => {
                nameAccessLocked = true;
                nameTextComponent = text;
                text.setDisabled(true)
                text.onChange((value) => {
                    this.goalIndexCard.name = value;
                    nameTextComponent.setDisabled(false)
                });
            })
            .addButton(button =>
                button.setIcon('lock')
                .onClick(() => {
                    if (nameAccessLocked) {
                        button.setIcon('lock-open');
                        nameAccessLocked = false;
                        nameTextComponent.setDisabled(false)
                    }
                    else {
                        button.setIcon('lock');
                        nameAccessLocked = true
                        nameTextComponent.setDisabled(true);
                    }
                })
            )

            this.categoryTagSection.setName(translate(UserMessageId.GOAL_CATEGORY_LABEL_IC));
            this.categoryTagSection.setDesc(translate(UserMessageId.GOAL_CATEGORY_DESCRIPTION_IC));
            this.categoryTagSection.addDropdown(dropdownComponent => {
                this.addOptions(dropdownComponent, this.settings.categoryTags, '', true)
                dropdownComponent.onChange((value) => {
                    this.goalIndexCard.categoryTag = value;
                })
            })
            .addButton(button =>
                button.setIcon('lock')
            )
 
            this.statusTagSection.setName(translate(UserMessageId.GOAL_STATUS_LABEL_IC));
            this.statusTagSection.setDesc(translate(UserMessageId.GOAL_STATUS_DESCRIPTION_IC));
            this.statusTagSection.addDropdown(dropdownComponent => {
                this.addOptions(dropdownComponent, this.settings.statusTags, '', true)
                dropdownComponent.onChange((value) => {
                    this.goalIndexCard.statusTag = value;
                })
            })
            .addButton(button =>
                button.setIcon('lock')
            )

            this.targetDateSection.setName(translate(UserMessageId.GOAL_TARGET_DATE_LABEL_IC));
            this.targetDateSection.setDesc(translate(UserMessageId.GOAL_TARGET_DATE_DESCRIPTION_IC));
            this.targetDateSection.addText(text => {
                text.inputEl.setAttr('type', 'date')
                text.onChange((value) => { 
                    this.goalIndexCard.targetDate = new Date(value);
                })
            })
            .addButton(button =>
                button.setIcon('lock')
            )
    
            this.expectedDateSection.setName(translate(UserMessageId.GOAL_EXPECTED_DATE_LABEL_IC));
            this.expectedDateSection.setDesc(translate(UserMessageId.GOAL_EXPECTED_DATE_DESCRIPTION_IC));
            this.expectedDateSection.addText(text =>   
                text.inputEl.setAttr('type', 'date')
            );

            this.completedDateSection.setName(translate(UserMessageId.GOAL_COMPLETED_DATE_LABEL_IC));
            this.completedDateSection.setDesc(translate(UserMessageId.GOAL_COMPLETED_DATE_DESCRIPTION_IC));
            this.completedDateSection.addText(text =>   
                text.inputEl.setAttr('type', 'date')
            );

            this.hide([
                this.parentSection,
                this.subtaskToggleSection,
                this.buttonsSection,
            ]);
    
            this.disable([
                this.categoryTagSection,
                this.statusTagSection,
                this.targetDateSection,
                this.expectedDateSection,
                this.completedDateSection,
                this.userTagsSection,
            ]);

            this.showCurrentValues(this.goalIndexCard);
        }
    }

    showCurrentValues(indexCard: IGoalIndexCard): void {
        super.showCurrentValues(indexCard);
    }
}