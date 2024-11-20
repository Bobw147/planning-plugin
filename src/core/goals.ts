import { App, Modal, TFile, Vault } from "obsidian";
import { GoalIndexCard } from "./indexcards/goalIndexCard";
import { Ident, identTags } from "./types";
import { Settings } from "src/settings/Settings";
import { createFolder } from "src/utils/utils";
import { initIdentFragment, newIdentFragment } from "./forms/newIdentFragment";
import { goalPageContent } from "./scripts/dataview_goal";

export class GoalsModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;

    constructor(app: App, vault: Vault, settings: Settings) {
		super(app);
        this._settings = settings;
        this._vault = vault;
    };

    
    display() {
        // Create and display the New Goal form
        this.contentEl.empty();
        this.setTitle("Create a new Goal");
        this.contentEl.innerHTML = newIdentFragment;

        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Goal part of the form
        this.open();
        initIdentFragment(Ident.GOAL);

        //  Add a handler to the 'Create' button
        (document.getElementById("createGoal") as HTMLButtonElement).onclick = async () => {
            const _goalIndexCard: GoalIndexCard = new GoalIndexCard();
            
            // Read the data from the form back into an index card
            _goalIndexCard.name = (document.getElementById("goal-name") as HTMLInputElement).value;
            _goalIndexCard.categoryTag = (document.getElementById("goal-category-tag") as HTMLSelectElement).value;
            _goalIndexCard.targetDate = new Date((document.getElementById("goal-target-date") as HTMLDataElement).value);
            
            // Make sure the target folder exists then create the file
            await createFolder(this._vault, this._settings.goalsFolder);
            const file: TFile = await this._vault.create(this._settings.goalsFolder + "/" + _goalIndexCard.name + ".md", "");
            
            // Write the dataview script into the file then add the frontmatter properties. 
            await this._vault.modify(file, goalPageContent());
            await _goalIndexCard.save(this.app.fileManager, file, identTags.PLANNING_GOAL);

            this.close();
        }
        
        // Add a handler for the cancel button
        (document.getElementById("cancelCreate") as HTMLButtonElement).onclick = () => {
            this.close();
        }
    }
}