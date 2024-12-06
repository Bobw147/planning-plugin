import { App, Modal, TFile, Vault } from "obsidian";
import { GoalIndexCard } from "./indexcards/goalIndexCard";
import { identTags, WrapperType } from "./types/types";
import { Settings } from "src/settings/Settings";
import { createFolder } from "src/utils/utils";
import { goalPageContent } from "./scripts/dataview_goal";
import { FormFieldId, resolveField } from "./webbuilder/formFieldTypes";
import { CreateGoalForm } from "./forms/goalIndexCardForm";
import { UserMessageId, resolveMessage } from "./i18n";

export class CreateGoalsModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;
    private goalForm: CreateGoalForm;

    constructor(app: App, vault: Vault, settings: Settings) {
		super(app);
        this._settings = settings;
        this._vault = vault;
        this.goalForm = new CreateGoalForm();
    }

    display() {
        // Create and display the New Goal form
        this.contentEl.empty();
        this.setTitle(resolveMessage(UserMessageId.CREATE_GOAL_TITLE));
        this.goalForm.buildForm(this.contentEl);

        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Goal part of the form

        this.open();
        this.goalForm.configureForCreateMode(this._settings);

        //  Add a handler to the 'Create' button
        (document.getElementById(resolveField(FormFieldId.GF_CREATE_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = async () => {
            const goalIndexCard: GoalIndexCard = new GoalIndexCard();
            
            // Read the data from the form back into an index card
            goalIndexCard.name = (document.getElementById(resolveField(FormFieldId.GF_NAME, WrapperType.NONE)) as HTMLInputElement).value;
            goalIndexCard.categoryTag = (document.getElementById(resolveField(FormFieldId.GF_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement).value;
            goalIndexCard.targetDate = new Date((document.getElementById(resolveField(FormFieldId.GF_TARGET_DATE, WrapperType.NONE)) as HTMLDataElement).value);
            
            // Make sure the target folder exists then create the file
            await createFolder(this._vault, this._settings.goalsFolder);
            const file: TFile = await this._vault.create(this._settings.goalsFolder + "/" + goalIndexCard.name + ".md", WrapperType.NONE);
            
            // Write the dataview script into the file then add the frontmatter properties. 
            await this._vault.modify(file, goalPageContent());
            await goalIndexCard.save(this.app.fileManager, file, identTags.PLANNING_GOAL);

            this.close();
        }
        
        // Add a handler for the cancel button
        (document.getElementById(resolveField(FormFieldId.GF_CANCEL_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = () => {
            this.close();
        }
    }
}