import { App, DropdownComponent, Setting } from 'obsidian';
import { Settings } from 'src/settings/Settings';
import { uuid, UUID } from 'src/utils/uuid-generator';

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

        super(app, settings, indexCardManager);
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
            ]);
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.PROJECT_INDEX_CARD_TITLE));

            this.nameSection.setName(translate(UserMessageId.PROJECT_NAME_LABEL_IC));
            this.nameSection.setDesc(translate(UserMessageId.PROJECT_NAME_DESCRIPTION_IC));
            this.nameSection.addText(()=>{});

            this.parentSection
                .setName(translate(UserMessageId.PROJECT_PARENT_LABEL_IC))
                .setDesc(translate(UserMessageId.PROJECT_PARENT_DESCRIPTION_IC))
                .addDropdown(dropdown =>
                    this.addNames(dropdown, this.settings.goalsFolder, identTags.PLANNING_GOAL,
                        (dropdown, name) => {
                            dropdown.addOption(this.indexCardManager.getGoalUUID(name).getRefId(), name);
                        }
                    )
                );

            this.categoryTagSection.setName(translate(UserMessageId.PROJECT_CATEGORY_LABEL_IC));
            this.categoryTagSection.setDesc(translate(UserMessageId.PROJECT_CATEGORY_DESCRIPTION_IC));
            this.categoryTagSection.addDropdown(dropdownComponent =>
                super.addOptions(dropdownComponent, this.settings.categoryTags, '', true)
            );

            this.statusTagSection.setName(translate(UserMessageId.PROJECT_STATUS_LABEL_IC));
            this.statusTagSection.setDesc(translate(UserMessageId.PROJECT_STATUS_DESCRIPTION_IC));
            this.statusTagSection.addDropdown(dropdownComponent =>
                super.addOptions(dropdownComponent, this.settings.statusTags, '', true)
            )

            this.targetDateSection.setName(translate(UserMessageId.PROJECT_TARGET_DATE_LABEL_IC));
            this.targetDateSection.setDesc(translate(UserMessageId.PROJECT_TARGET_DATE_DESCRIPTION_IC));
            this.targetDateSection.addText(text =>   
                text.inputEl.setAttr('type', 'date')
            );

            this.expectedDateSection.setName(translate(UserMessageId.PROJECT_EXPECTED_DATE_LABEL_IC));
            this.expectedDateSection.setDesc(translate(UserMessageId.PROJECT_EXPECTED_DATE_DESCRIPTION_IC));
            this.expectedDateSection.addText(text =>   
                text.inputEl.setAttr('type', 'date')
            );

            this.completedDateSection.setName(translate(UserMessageId.PROJECT_COMPLETED_DATE_LABEL_IC));
            this.completedDateSection.setDesc(translate(UserMessageId.PROJECT_COMPLETED_DATE_DESCRIPTION_IC));
            this.completedDateSection.addText(text =>   
                text.inputEl.setAttr('type', 'date')
            );

            this.hide([
                this.subtaskToggleSection,
                this.buttonsSection,
            ]);

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
