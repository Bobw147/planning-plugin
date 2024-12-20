import { App, TFile } from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { PlanningModal } from '../base-classes/planning-modal';
import { FormFieldId } from '../form-builder/form-field-types';
import { translate, UserMessageId } from '../form-builder/i18n';
import { IGoalIndexCard } from '../types/interfaces/i-goal-index-card';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { GoalFormBuilder } from './goal-form-builder';

export class GoalsModal extends PlanningModal implements IModalForm {
    private settings: Settings;
    private goalForm: GoalFormBuilder;
    private goalIndexCard: IGoalIndexCard;
    private displayMode: DisplayMode;
    private _onSubmit;

    constructor(app: App, settings: Settings, goalIndexCard: IGoalIndexCard,
        displayMode: DisplayMode,  onSubmit: (result: boolean, app: App, settings: Settings) => void) {
		super(app);
        this.settings = settings;
        this.displayMode = displayMode;
        this.goalForm = new GoalFormBuilder(app, settings);
        this.goalIndexCard = goalIndexCard;
        this._onSubmit = onSubmit
    }

    open(): void {
        // Create and display the New Goal form
        this.contentEl.empty();
        super.open()
        this.goalForm.buildForm(this.contentEl);

        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Goal part of the form
        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.setTitle(translate(UserMessageId.CREATE_GOAL_TITLE));
            this.goalForm.configureForCreateMode(this.goalIndexCard);

            //  Add a handler to the 'Create' button
            (document.getElementById(FormFieldId.GF_CREATE_BUTTON) as HTMLButtonElement).onclick = 
                async () => {
                    this.updateIndexCard(this.goalIndexCard);
                    this._onSubmit(true, this.app, this.settings);
            }
        
            // Add a handler for the cancel button
            (document.getElementById(FormFieldId.GF_CANCEL_BUTTON) as HTMLButtonElement).onclick = () => {
                this._onSubmit(false, this.app, this.settings);
            }
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.GOAL_INDEX_CARD_TITLE));
            this.goalForm.configureForIndexCardMode(this.goalIndexCard, this.app.fileManager, this.app.workspace.getActiveFile() as TFile)
        }
    }

    updateIndexCard(indexCard: IGoalIndexCard): void {
        super.updateIndexCard(indexCard);
    }
}