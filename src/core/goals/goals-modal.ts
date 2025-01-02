import { App, ButtonComponent } from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { PlanningModal } from '../base-classes/planning-modal';
import { translate, UserMessageId } from '../types/i18n';
import { IGoalIndexCard } from '../types/interfaces/i-goal-index-card';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { DisplayMode, zerothItem } from '../types/types';

export class GoalsModal extends PlanningModal implements IModalForm {
    private goalIndexCard: IGoalIndexCard;
    private displayMode: DisplayMode;
    private _onSubmit;

    constructor(app: App, settings: Settings, goalIndexCard: IGoalIndexCard,
        displayMode: DisplayMode,  onSubmit: (result: boolean, app: App, settings: Settings) => void) {
		super(app, settings);
        this.displayMode = displayMode;
        this.goalIndexCard = goalIndexCard;
        this._onSubmit = onSubmit
    }

    open(): void {
        // Create and display the New Goal form
        this.contentEl.empty();
        super.open()
        super.buildForm(this.contentEl);

        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Goal part of the form
        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.setTitle(translate(UserMessageId.CREATE_GOAL_TITLE));
            
            this.nameSection?.setName(translate(UserMessageId.GOAL_NAME_LABEL_CREATE));
            this.nameSection?.setDesc(translate(UserMessageId.GOAL_NAME_DESCRIPTION_CREATE));

            this.categoryTagSection?.setName(translate(UserMessageId.GOAL_CATEGORY_LABEL_CREATE));
            this.categoryTagSection?.setDesc(translate(UserMessageId.GOAL_CATEGORY_DESCRIPTION_CREATE));

            this.targetDateSection?.setName(translate(UserMessageId.GOAL_TARGET_DATE_LABEL_CREATE));
            this.targetDateSection?.setDesc(translate(UserMessageId.GOAL_TARGET_DATE_DESCRIPTION_CREATE));

            this.hide([
                this.parentSection,
                this.subtaskToggleSection,
                this.statusTagSection,
                this.expectedDateSection,
                this.completedDateSection,
            ]);

            if (this.buttonsSection !== undefined) {
                //  Add a handler to the 'Create & Open' button
                (this.buttonsSection.components[zerothItem] as ButtonComponent).onClick(async () => {
                    this.updateIndexCard(this.goalIndexCard);
                    this._onSubmit(true, this.app, this.settings);
                });

                //  Add a handler to the 'Create' button
                (this.buttonsSection.components[1] as ButtonComponent).onClick(async () => {
                    this.updateIndexCard(this.goalIndexCard);
                    this._onSubmit(true, this.app, this.settings);
                });
                
                //  Add a handler to the 'Cancel' button
                (this.buttonsSection.components[2] as ButtonComponent).onClick(async () => {
                    this._onSubmit(false, this.app, this.settings);
                });
            }
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.GOAL_INDEX_CARD_TITLE));

            this.nameSection?.setName(translate(UserMessageId.GOAL_NAME_LABEL_IC));
            this.nameSection?.setDesc(translate(UserMessageId.GOAL_NAME_DESCRIPTION_IC));

            this.categoryTagSection?.setName(translate(UserMessageId.GOAL_CATEGORY_LABEL_IC));
            this.categoryTagSection?.setDesc(translate(UserMessageId.GOAL_CATEGORY_DESCRIPTION_IC));

            this.statusTagSection?.setName(translate(UserMessageId.GOAL_STATUS_LABEL_IC));
            this.statusTagSection?.setDesc(translate(UserMessageId.GOAL_STATUS_DESCRIPTION_IC));

            this.targetDateSection?.setName(translate(UserMessageId.GOAL_TARGET_DATE_LABEL_IC));
            this.targetDateSection?.setDesc(translate(UserMessageId.GOAL_TARGET_DATE_DESCRIPTION_IC));

            this.expectedDateSection?.setName(translate(UserMessageId.GOAL_EXPECTED_DATE_LABEL_IC));
            this.expectedDateSection?.setDesc(translate(UserMessageId.GOAL_EXPECTED_DATE_DESCRIPTION_IC));

            this.completedDateSection?.setName(translate(UserMessageId.GOAL_COMPLETED_DATE_LABEL_IC));
            this.completedDateSection?.setDesc(translate(UserMessageId.GOAL_COMPLETED_DATE_DESCRIPTION_IC));

            this.hide([
                this.parentSection,
                this.subtaskToggleSection,
                this.buttonsSection,
            ]);
    
            this.disable([
                this.nameSection,
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