import { IPlanningIndexCard, PlanningIndexCard } from "./indexcard";
import { App, Modal, Vault } from "obsidian";
import { taskForm } from "./forms/task_form";
import { identTags } from "./tags";
import { Settings } from "src/settings/Settings";
import { createFolder } from "src/utils/utils";
import { taskPageContent } from "./scripts/dataview_task";

export interface ITaskIndexCard extends IPlanningIndexCard {
    _parentProject: string;

    get parentProject(): string;
    set parentProject(value: string);
}

export class TaskIndexCard extends PlanningIndexCard implements ITaskIndexCard {
    _parentProject: string;

    constructor(){
        super();
        this._parentProject = ""
        this._identTag = identTags.PLANNING_TASK;
    }

    public get parentProject(): string {
        return this._parentProject;
    }

    public set parentProject(value: string) {
        this._parentProject = value;
    }
}

export class TasksModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;

    constructor(app: App, vault: Vault, settings: Settings) {
		super(app);
        this._settings = settings;
        this._vault = vault;
    };

    display(): void {
        this.open()
        this.contentEl.empty();
        this.setTitle("Create a new Task");
        this.contentEl.innerHTML = taskForm;

        (document.getElementById("createTask") as HTMLButtonElement).onclick = async () => {
            const _taskIndexCard = new TaskIndexCard();
            _taskIndexCard.name = (document.getElementById("task-name") as HTMLInputElement).value;
            _taskIndexCard.modeTag = (document.getElementById("mode-tag") as HTMLSelectElement).value;
            _taskIndexCard.targetDate = new Date((document.getElementById("target-date")as HTMLDataElement).value);

            await createFolder(this._vault, this._settings.projectsFolder);
            await this._vault.modify(await this._vault.create(this._settings.projectsFolder + "/" + _taskIndexCard.name + ".md", ""), taskPageContent(_taskIndexCard))
            this.close();
        }
        (document.getElementById("cancelCreate") as HTMLButtonElement).onclick = () => {
            this.close();
        }
    }
}
