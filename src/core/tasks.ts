import { fieldNames } from "./indexcards/indexcard";
import { App, Modal, TFile, Vault } from "obsidian";
import { taskForm } from "./forms/newTaskForm";
import { identTags } from "./tags";
import { Settings } from "src/settings/Settings";
import { createFolder } from "src/utils/utils";
import { taskPageContent } from "./scripts/dataview_task";
import { TaskIndexCard } from "./indexcards/taskIndexCard";

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
            _taskIndexCard.categoryTag = (document.getElementById("mode-tag") as HTMLSelectElement).value;
            _taskIndexCard.targetDate = new Date((document.getElementById("target-date")as HTMLDataElement).value);

            await createFolder(this._vault, this._settings.projectsFolder);
            const file: TFile = await this._vault.create(this._settings.projectsFolder + "/" + _taskIndexCard.name + ".md", "");
   
            // Save the data from the form into the files frontmatter then write the dataviw script
            await _taskIndexCard.save(this.app.fileManager, file, identTags.PLANNING_TASK);
            await this._vault.modify(file, taskPageContent(_taskIndexCard))
            this.app.fileManager.processFrontMatter(file, (frontmatter) => {
                frontmatter[fieldNames.IDENT_TAG_FIELD] = identTags.PLANNING_TASK;
            });
            this.close();
        }
        (document.getElementById("cancelCreate") as HTMLButtonElement).onclick = () => {
            this.close();
        }
    }
}
