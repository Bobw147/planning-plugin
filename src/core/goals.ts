import { App, Modal, TFile, Vault } from "obsidian";
import { GoalIndexCard } from "./indexcards/goalIndexCard";
import { Ident, identTags, WrapperType } from "./types/types";
import { Settings } from "src/settings/Settings";
import { createFolder } from "src/utils/utils";
import { initIdentFragment, newIdentFragment } from "./forms/newIdentFragment";
import { goalPageContent } from "./scripts/dataview_goal";
import { FormFieldId, resolveField } from "./webbuilder/formFieldTypes";

export class GoalsModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;

    constructor(app: App, vault: Vault, settings: Settings) {
		super(app);
        this._settings = settings;
        this._vault = vault;
    }

    display() {
        // Create and display the New Goal form
        this.contentEl.empty();
        this.setTitle("Create a new Goal");
        this.contentEl.innerHTML = newIdentFragment;
        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Goal part of the form

        this.open();
        initIdentFragment(Ident.GOAL, this._settings, this.app);

        //  Add a handler to the 'Create' button
        (document.getElementById(resolveField(FormFieldId.ID_CF_GOAL_CREATE_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = async () => {
            const goalIndexCard: GoalIndexCard = new GoalIndexCard();
            
            // Read the data from the form back into an index card
            goalIndexCard.name = (document.getElementById(resolveField(FormFieldId.ID_CF_GOAL_NAME, WrapperType.NONE)) as HTMLInputElement).value;
            goalIndexCard.categoryTag = (document.getElementById(resolveField(FormFieldId.ID_CF_GOAL_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement).value;
            goalIndexCard.targetDate = new Date((document.getElementById(resolveField(FormFieldId.ID_CF_GOAL_TARGET_DATE, WrapperType.NONE)) as HTMLDataElement).value);
            
            // Make sure the target folder exists then create the file
            await createFolder(this._vault, this._settings.goalsFolder);
            const file: TFile = await this._vault.create(this._settings.goalsFolder + "/" + goalIndexCard.name + ".md", WrapperType.NONE);
            
            // Write the dataview script into the file then add the frontmatter properties. 
            await this._vault.modify(file, goalPageContent());
            await goalIndexCard.save(this.app.fileManager, file, identTags.PLANNING_GOAL);

            this.close();
        }
        
        // Add a handler for the cancel button
        (document.getElementById(resolveField(FormFieldId.ID_CF_GOAL_CANCEL_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = () => {
            this.close();
        }
    }
}