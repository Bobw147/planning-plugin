import { App, Modal, TFile, Vault } from 'obsidian';
import { Settings } from 'src/settings/Settings';
import { createFolder } from 'src/utils/utils';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { FormFieldId, resolveField } from '../form-builder/form-field-types';
import { lookupMessage, UserMessageId } from '../form-builder/i18n';
import { goalPageContent } from '../scripts/dataview-goal';
import { IGoalIndexCard } from '../types/interfaces/i-goal-index-card';
import { emptyString, identTags, WrapperType } from '../types/types';
import { GoalFormBuilder } from './goal-form-builder';
import { GoalIndexCard } from './goal-index-card';

export class GoalsModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;
    private goalForm: GoalFormBuilder;
    private goalIndexCard: GoalIndexCard;
    private displayMode: DisplayMode;
    private _onSubmit;

    constructor(app: App, vault: Vault, settings: Settings, displayMode: DisplayMode,  onSubmit: (result: IGoalIndexCard | null) => void) {
		super(app);
        this._settings = settings;
        this._vault = vault;
        this.displayMode = displayMode;
        this.goalForm = new GoalFormBuilder();
        this.goalIndexCard = new GoalIndexCard();
        this._onSubmit = onSubmit
    }

    open(): void {
        // Create and display the New Goal form
        this.contentEl.empty();
        this.setTitle(lookupMessage(UserMessageId.CREATE_GOAL_TITLE));
        this.goalForm.buildForm(this.contentEl);

        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Goal part of the form
        super.open()
        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.goalForm.configureForCreateMode(this.app, this._settings);

            //  Add a handler to the 'Create' button
            (document.getElementById(resolveField(FormFieldId.GF_CREATE_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = async () => {
                this.goalForm.updateIndexCard(this.goalIndexCard, this.displayMode);
                this.close();
                this._onSubmit(this.goalIndexCard);
            }
        
            // Add a handler for the cancel button
            (document.getElementById(resolveField(FormFieldId.GF_CANCEL_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = () => {
                this.close();
                this._onSubmit(null);
            }
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.goalForm.configureForIndexCardMode(this._settings, this.goalIndexCard, this.app.fileManager, this.app.workspace.getActiveFile() as TFile)
        }
    }
}