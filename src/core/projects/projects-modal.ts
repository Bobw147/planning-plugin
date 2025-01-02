import { App, ButtonComponent, DropdownComponent, Setting } from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { PlanningModal } from '../base-classes/planning-modal';
import { translate, UserMessageId } from '../form-builder/i18n';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { IProjectIndexCard } from '../types/interfaces/i-project-index-card';
import { emptyString, identTags, zerothItem } from '../types/types';

export class ProjectsModal extends PlanningModal implements IModalForm {
    private displayMode:DisplayMode;
    private projectIndexCard: IProjectIndexCard;
    private onSubmit;
 
    constructor(app: App, settings: Settings, projectIndexCard: IProjectIndexCard, displayMode: DisplayMode, 
        onSubmit: (resulthasChanged: boolean, app: App, settings: Settings) => void) {
		super(app, settings);
        this.displayMode = displayMode;
        this.projectIndexCard = projectIndexCard;
        this.onSubmit = onSubmit;
    }

    open(): void{
        this.contentEl.empty();
        super.open();
        super.buildForm(this.contentEl);

        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.setTitle(translate(UserMessageId.CREATE_PROJECT_TITLE));

            this.nameSection?.setName(translate(UserMessageId.PROJECT_NAME_LABEL_CREATE));
            this.nameSection?.setDesc(translate(UserMessageId.PROJECT_NAME_DESCRIPTION_CREATE));

            this._parentSection = new Setting(this.contentEl)
                .setName(translate(UserMessageId.PROJECT_PARENT_LABEL_CREATE))
                .setDesc(translate(UserMessageId.PROJECT_PARENT_DESCRIPTION_CREATE))
                .addDropdown(dropdown =>
                    this.addNames(dropdown, this.settings.goalsFolder, identTags.PLANNING_GOAL)
                );

            this.targetDateSection?.setName(translate(UserMessageId.PROJECT_TARGET_DATE_LABEL_CREATE));
            this.targetDateSection?.setDesc(translate(UserMessageId.PROJECT_TARGET_DATE_DESCRIPTION_CREATE));

            this.hide([
                this.subtaskToggleSection,
                this.categoryTagSection,
                this.statusTagSection,
                this.expectedDateSection,
                this.completedDateSection,
            ]);

            if (this.buttonsSection !== undefined) {
                //  Add a handler to the 'Create & Open' button
                (this.buttonsSection.components[zerothItem] as ButtonComponent).onClick(async () => {
                    this.updateIndexCard(this.projectIndexCard);
                    this.onSubmit(true, this.app, this.settings);
                });

                //  Add a handler to the 'Create' button
                (this.buttonsSection.components[1] as ButtonComponent).onClick(async () => {
                    this.updateIndexCard(this.projectIndexCard);
                    this.onSubmit(true, this.app, this.settings);
                });
                
                //  Add a handler to the 'Cancel' button
                (this.buttonsSection.components[2] as ButtonComponent).onClick(async () => {
                    this.onSubmit(false, this.app, this.settings);
                });
            }
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.PROJECT_INDEX_CARD_TITLE));

            this.nameSection?.setName(translate(UserMessageId.PROJECT_NAME_LABEL_IC));

            this.parentSection?.setName(translate(UserMessageId.PROJECT_PARENT_LABEL_IC));
            this.parentSection?.setDesc(translate(UserMessageId.PROJECT_PARENT_DESCRIPTION_IC));

            this.categoryTagSection?.setName(translate(UserMessageId.PROJECT_CATEGORY_LABEL_IC));
            this.categoryTagSection?.setDesc(translate(UserMessageId.PROJECT_CATEGORY_DESCRIPTION_IC));

            this.statusTagSection?.setName(translate(UserMessageId.PROJECT_STATUS_LABEL_IC));
            this.statusTagSection?.setDesc(translate(UserMessageId.PROJECT_STATUS_DESCRIPTION_IC));

            this.targetDateSection?.setName(translate(UserMessageId.PROJECT_TARGET_DATE_LABEL_IC));
            this.targetDateSection?.setDesc(translate(UserMessageId.PROJECT_TARGET_DATE_DESCRIPTION_IC));

            this.expectedDateSection?.setName(translate(UserMessageId.PROJECT_EXPECTED_DATE_LABEL_IC));
            this.expectedDateSection?.setDesc(translate(UserMessageId.PROJECT_EXPECTED_DATE_DESCRIPTION_IC));

            this.completedDateSection?.setName(translate(UserMessageId.PROJECT_COMPLETED_DATE_LABEL_IC));
            this.completedDateSection?.setDesc(translate(UserMessageId.PROJECT_COMPLETED_DATE_DESCRIPTION_IC));

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
        if (this.parentSection !== undefined)
            (this.parentSection.components[zerothItem] as DropdownComponent).setValue(indexCard.parentGoal)
    }

    updateIndexCard(indexCard: IProjectIndexCard): void {
        super.updateIndexCard(indexCard);
        indexCard.parentGoal = (this.parentSection !== undefined)
            ? (this.parentSection.components[zerothItem] as DropdownComponent).getValue() : emptyString;
    }
}
