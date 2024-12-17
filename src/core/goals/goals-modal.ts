import { App, Modal, TFile, Vault } from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { FormFieldId } from '../form-builder/form-field-types';
import { HtmlAttributes } from '../form-builder/html-attribute-types';
import { HtmlTags } from '../form-builder/html-element-types';
import { translate, UserMessageId } from '../form-builder/i18n';
import { NodeBuilder } from '../form-builder/node-builder';
import { IGoalIndexCard } from '../types/interfaces/i-goal-index-card';
import { GoalFormBuilder } from './goal-form-builder';

export class GoalsModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;
    private goalForm: GoalFormBuilder;
    private goalIndexCard: IGoalIndexCard;
    private displayMode: DisplayMode;
    private _onSubmit;

    constructor(app: App, vault: Vault, settings: Settings, goalIndexCard: IGoalIndexCard,
        displayMode: DisplayMode,  onSubmit: (result: boolean, app: App, settings: Settings) => void) {
		super(app);
        this._settings = settings;
        this._vault = vault;
        this.displayMode = displayMode;
        this.goalForm = new GoalFormBuilder();
        this.goalIndexCard = goalIndexCard;
        this._onSubmit = onSubmit
    }

    open(): void {
        // Create and display the New Goal form
        this.contentEl.empty();
        this.setTitle(translate(UserMessageId.CREATE_GOAL_TITLE));
        super.open()
        this.goalForm.buildForm(this.contentEl);

        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Goal part of the form
        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.goalForm.configureForCreateMode(this.app, this._settings);

            //  Add a handler to the 'Create' button
            (document.getElementById(FormFieldId.GF_CREATE_BUTTON) as HTMLButtonElement).onclick = async () => {
                this.updateIndexCard(this.goalIndexCard, this.displayMode);
                this._onSubmit(true, this.app, this._settings);
            }
        
            // Add a handler for the cancel button
            (document.getElementById(FormFieldId.GF_CANCEL_BUTTON) as HTMLButtonElement).onclick = () => {
                this._onSubmit(false, this.app, this._settings);
            }
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.goalForm.configureForIndexCardMode(this._settings, this.goalIndexCard, this.app.fileManager, this.app.workspace.getActiveFile() as TFile)
        }
    }

    updateIndexCard(goalIndexCard: IGoalIndexCard, displayMode: DisplayMode): void {
        goalIndexCard.name = NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_NAME, HtmlAttributes.VALUE);
        goalIndexCard.categoryTag = NodeBuilder.getElementInfo(HtmlTags.SELECT, FormFieldId.GF_CATEGORY_TAG, HtmlAttributes.VALUE);
        goalIndexCard.targetDate = new Date(NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_TARGET_DATE, HtmlAttributes.VALUE));
        //TODO Sort out how to handle user tags
        if (displayMode == DisplayMode.INDEX_CARD_MODE) {
            goalIndexCard.statusTag = NodeBuilder.getElementInfo(HtmlTags.SELECT, FormFieldId.GF_STATUS_TAG, HtmlAttributes.VALUE);
            goalIndexCard.expectedDate = new Date(NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_EXPECTED_DATE, HtmlAttributes.VALUE));
            goalIndexCard.completedDate = new Date(NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_COMPLETED_DATE, HtmlAttributes.VALUE));
        }
    }
}