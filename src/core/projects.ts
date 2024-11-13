import { IPlanningIndexCard, PlanningIndexCard } from "./indexcard";
import { App, Modal, ValueComponent, Vault } from "obsidian";
import { projectForm } from "./forms/project_form";
import { Settings } from "src/settings/Settings";
import { project_page_content } from "./scripts/dataview_project";
import { createFolder } from "src/utils/utils";
import { identTags } from "./tags";

export interface IProjectIndexCard extends IPlanningIndexCard{
    _parentGoal: string;

    get parentGoal() : string;
    set parentGoal(value: string);
}

export class ProjectIndexCard extends PlanningIndexCard implements IProjectIndexCard {
    _parentGoal: string;

    constructor() {
        super();
        this._parentGoal = "";
        this._identTag = identTags.PLANNING_PROJECT;
    }

    public get parenGoal(): string {
        return this._parentGoal;
    }

    public set parentGoal(value: string)  {
        this._parentGoal = value;
    }
}

export class ProjectsModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;

    constructor(app: App, vault: Vault, settings: Settings) {
		super(app);
        this._settings = settings;
        this._vault = vault;
    };

    display(): void{
        this.open()
        this.contentEl.empty();
        this.setTitle("Create a new Project");
        this.contentEl.innerHTML = projectForm;

        (document.getElementById("createProject") as HTMLButtonElement).onclick = async () => {
            let _projectIndexCard: ProjectIndexCard = new ProjectIndexCard();
            _projectIndexCard.name = (document.getElementById("project-name") as HTMLInputElement).value;
            _projectIndexCard.modeTag = (document.getElementById("mode-tag") as HTMLSelectElement).value;
            _projectIndexCard.targetDate = new Date((document.getElementById("target-date") as HTMLDataElement).value);

            await createFolder(this._vault, this._settings.projectsFolder);
            await this._vault.modify(await this._vault.create(this._settings.projectsFolder + "/" + _projectIndexCard.name + ".md", ""), project_page_content(_projectIndexCard))
            this.close();
        }
        (document.getElementById("cancelCreate") as HTMLButtonElement).onclick = () => {
            this.close();
        }
    }
}
