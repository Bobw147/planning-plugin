import { App, Modal, Vault } from "obsidian";
import { PlanningIndexCard } from "./indexcard";
import { identTags } from "./tags";
import { goalForm } from "./forms/goal_form";
import { Settings } from "src/settings/Settings";
import { createFolder } from "src/utils/utils";
import { goalPageContent } from "./scripts/dataview_goal";

export class GoalIndexCard extends PlanningIndexCard{

    constructor(){
        super();
        this._identTag = identTags.PLANNING_GOAL;
    }
}

export class GoalsModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;

    constructor(app: App, vault: Vault, settings: Settings) {
		super(app);
        this._settings = settings;
        this._vault = vault;
    };

    display() {
        this.open()
        this.contentEl.empty();
        this.setTitle("Create a new Goal");
        this.contentEl.innerHTML = goalForm;

        (document.getElementById("createGoal") as HTMLButtonElement).onclick = async () => {
            const _goalIndexCard: GoalIndexCard = new GoalIndexCard();
            _goalIndexCard.name = (document.getElementById("goal-name") as HTMLInputElement).value;
            _goalIndexCard.modeTag = (document.getElementById("mode-tag") as HTMLSelectElement).value;
            _goalIndexCard.targetDate = new Date((document.getElementById("target-date") as HTMLDataElement).value);

            await createFolder(this._vault, this._settings.goalsFolder);
            await this._vault.modify(await this._vault.create(this._settings.goalsFolder + "/" + _goalIndexCard.name + ".md", ""), goalPageContent(_goalIndexCard))
            this.close();
        }
        (document.getElementById("cancelCreate") as HTMLButtonElement).onclick = () => {
            this.close();
        }
    }
}