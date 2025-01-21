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
import { IProjectIndexCard } from '../types/interfaces/i-project-index-card';
import { DisplayMode, identTags, zerothItem } from '../types/types';

export class ProjectsModal extends PlanningModal implements IModalForm {
    private displayMode: DisplayMode;
    private projectIndexCard: IProjectIndexCard;
    private onSubmit;
 
    constructor(
        app: App, 
        settings: Settings, 
        projectIndexCard: IProjectIndexCard, 
        indexCardManager: IndexCardManager, 
        displayMode: DisplayMode, 
        onSubmit: (resulthasChanged: boolean, openFile: boolean, app: App, settings: Settings) => void) {

        super(app, settings, indexCardManager, displayMode);
        this.displayMode = displayMode;
        this.projectIndexCard = projectIndexCard;
        this.onSubmit = onSubmit;
    }

    open(): void{
        super.open();

        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.setTitle(translate(UserMessageId.CREATE_PROJECT_TITLE));

            this.nameSection.setName(translate(UserMessageId.PROJECT_NAME_LABEL_CREATE));
            this.nameSection.setDesc(translate(UserMessageId.PROJECT_NAME_DESCRIPTION_CREATE));
            this.nameSection.addText(()=>{});

            this.parentSection
                .setName(translate(UserMessageId.PROJECT_PARENT_LABEL_CREATE))
                .setDesc(translate(UserMessageId.PROJECT_PARENT_DESCRIPTION_CREATE))
                .addDropdown(dropdown =>
                    this.addNames(dropdown, this.settings.goalsFolder, identTags.PLANNING_GOAL,
                        (dropdown, name) => {
                            dropdown.addOption(this.indexCardManager.getGoalUUID(name).getRefId(), name);
                        }
                    )
                );

            this.targetDateSection.setName(translate(UserMessageId.PROJECT_TARGET_DATE_LABEL_CREATE));
            this.targetDateSection.setDesc(translate(UserMessageId.PROJECT_TARGET_DATE_DESCRIPTION_CREATE));
            this.targetDateSection.addText(text =>   
                text.inputEl.setAttr('type', 'date')
            );

            this.buttonsSection.addButton(button =>
                button
                    .setButtonText(translate(UserMessageId.CREATE_AND_OPEN_BUTTON_TEXT))
                    .onClick(async () => {
                        this.updateIndexCard(this.projectIndexCard);
                        this.onSubmit(true, true, this.app, this.settings);
                    })
            )
            .addButton(button =>
                button
                    .setButtonText(translate(UserMessageId.CREATE_ONLY_BUTTON_TEXT))
                    .onClick(async () => {
                        this.updateIndexCard(this.projectIndexCard);
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
                this.subtaskToggleSection,
                this.categoryTagSection,
                this.statusTagSection,
                this.expectedDateSection,
                this.completedDateSection,
                this.userTagsSection,
            ]);
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.PROJECT_INDEX_CARD_TITLE));

            this.nameSection.setName(translate(UserMessageId.PROJECT_NAME_LABEL_IC));
            this.nameSection.setDesc(translate(UserMessageId.PROJECT_NAME_DESCRIPTION_IC));
            (<LockableTextSetting>this.nameSection).addLockableTextComponent((text) => {
                text.onChange(async (value) => {
                    this.projectIndexCard.name = value;
                    await this.projectIndexCard.save(this.app.fileManager, this.projectIndexCard.file as TFile)
                })
            });

            this.parentSection.setName(translate(UserMessageId.PROJECT_PARENT_LABEL_IC));
            this.parentSection.setDesc(translate(UserMessageId.PROJECT_PARENT_DESCRIPTION_IC));
            (<LockableDropdownSetting> this.parentSection).addLockableDropdownComponent((dropdown) => {
                    this.addNames(dropdown, this.settings.goalsFolder, identTags.PLANNING_GOAL, 
                        (dropdown, name) => {
                            dropdown.addOption(this.indexCardManager.getGoalUUID(name).getRefId(), name);
                        })
                    dropdown.onChange(async (value) => {
                        this.projectIndexCard.parentGoalRefId = new UUID(false, value as uuid);
                        await this.projectIndexCard.save(this.app.fileManager, this.projectIndexCard.file as TFile)
                    })
            });       
    
            this.categoryTagSection.setName(translate(UserMessageId.PROJECT_CATEGORY_LABEL_IC));
            this.categoryTagSection.setDesc(translate(UserMessageId.PROJECT_CATEGORY_DESCRIPTION_IC));
            this.categoryTagSection.addDropdown(dropdownComponent =>
                super.addOptions(dropdownComponent, this.settings.categoryTags, '', true)
            );

            this.statusTagSection.setName(translate(UserMessageId.PROJECT_STATUS_LABEL_IC));
            this.statusTagSection.setDesc(translate(UserMessageId.PROJECT_STATUS_DESCRIPTION_IC));
            (<LockableDropdownSetting> this.statusTagSection)
                .addLockableDropdownComponent((dropdown) => {
                    this.addOptions(dropdown, this.settings.statusTags, '', true)
                    dropdown.onChange(async (value) => {
                        this.projectIndexCard.statusTag = value;
                        await this.projectIndexCard.save(this.app.fileManager, this.projectIndexCard.file as TFile)
                    })
            });

            this.targetDateSection.setName(translate(UserMessageId.PROJECT_TARGET_DATE_LABEL_IC));
            this.targetDateSection.setDesc(translate(UserMessageId.PROJECT_TARGET_DATE_DESCRIPTION_IC));
            (<LockableDateSetting> this.targetDateSection).addLockableDateComponent((date) => {
                date.onChange(async(value) => { 
                    this.projectIndexCard.targetDate = new Date(value);
                    await this.projectIndexCard.save(this.app.fileManager, this.projectIndexCard.file as TFile)
                })
            });

            this.expectedDateSection.setName(translate(UserMessageId.PROJECT_EXPECTED_DATE_LABEL_IC));
            this.expectedDateSection.setDesc(translate(UserMessageId.PROJECT_EXPECTED_DATE_DESCRIPTION_IC));
            (<LockableDateSetting> this.expectedDateSection)
                .addLockableDateComponent((date) => {
                    date.onChange(async (value) => { 
                       this.projectIndexCard.expectedDate = new Date(value);
                        await this.projectIndexCard.save(this.app.fileManager, this.projectIndexCard.file as TFile)
                    })
            });

            this.completedDateSection.setName(translate(UserMessageId.PROJECT_COMPLETED_DATE_LABEL_IC));
            this.completedDateSection.setDesc(translate(UserMessageId.PROJECT_COMPLETED_DATE_DESCRIPTION_IC));
            (<LockableDateSetting> this.completedDateSection)
                .addLockableDateComponent((date) => {
                    date.onChange(async(value) => { 
                        this.projectIndexCard.completedDate = new Date(value);
                        await this.projectIndexCard.save(this.app.fileManager, this.projectIndexCard.file as TFile)
                    })
            });

            this.hide([
                this.subtaskToggleSection,
                this.userTagsSection,
                this.buttonsSection,
            ]);

            this.disable([
                this.categoryTagSection,
            ]);

            this.showCurrentValues(this.projectIndexCard);
        }
    }

    showCurrentValues(indexCard: IProjectIndexCard): void {
        super.showCurrentValues(indexCard);
        (this.parentSection.components[zerothItem] as DropdownComponent)
            .setValue(indexCard.parentGoalRefId.getRefId())
    }

    updateIndexCard(indexCard: IProjectIndexCard): void {
        super.updateIndexCard(indexCard);
        indexCard.parentGoalRefId = new UUID(false, (this.parentSection.components[zerothItem] as DropdownComponent).getValue() as uuid);
    }
}