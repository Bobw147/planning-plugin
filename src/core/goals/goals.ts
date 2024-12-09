import { App, Modal, TFile, Vault } from "obsidian";
import { emptyString, identTags, WrapperType } from "../types/types";
import { Settings } from "src/settings/Settings";
import { createFolder } from "src/utils/utils";
import { goalPageContent } from "../scripts/dataview-goal";
import { FormFieldId, resolveField } from "../form-builder/form-field-types";
import { GoalFormBuilder } from "./goal-form-builder";
import { UserMessageId, lookupMessage } from "../form-builder/i18n";
import { DisplayMode } from "../base-classes/generic-planning-form";
import { GoalIndexCard } from "./goal-index-card";

export class GoalsModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;
    private goalForm: GoalFormBuilder;
    private goalIndexCard: GoalIndexCard;
    private displayMode: DisplayMode;

    constructor(app: App, vault: Vault, settings: Settings, goalIndexCard: GoalIndexCard, displayMode: DisplayMode) {
		super(app);
        this._settings = settings;
        this._vault = vault;
        this.displayMode = displayMode;
        this.goalForm = new GoalFormBuilder();
        this.goalIndexCard = goalIndexCard;
    }

    display(): void {
        // Create and display the New Goal form
        this.contentEl.empty();
        this.setTitle(lookupMessage(UserMessageId.CREATE_GOAL_TITLE));
        this.goalForm.buildForm(this.contentEl);

        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Goal part of the form

        this.open();
        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.goalForm.configureForCreateMode(this._settings);

            //  Add a handler to the 'Create' button
            (document.getElementById(resolveField(FormFieldId.GF_CREATE_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = async () => {
                this.goalForm.updateIndexCard(this.goalIndexCard, this.displayMode);
        
                // Make sure the target folder exists then create the file
                await createFolder(this._vault, this._settings.goalsFolder);
                const file: TFile = await this._vault.create(this._settings.goalsFolder + "/" + this.goalIndexCard.name + ".md", emptyString);
            
                // Write the dataview script into the file then add the frontmatter properties. 
                await this._vault.modify(file, goalPageContent());
                await this.goalIndexCard.save(this.app.fileManager, file, identTags.PLANNING_GOAL);

                this.close();
            }
        
            // Add a handler for the cancel button
            (document.getElementById(resolveField(FormFieldId.GF_CANCEL_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = () => {
                this.close();
            }
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.goalForm.configureForIndexCardMode(this._settings, this.app.fileManager, file as TFile)
        }
    }
}