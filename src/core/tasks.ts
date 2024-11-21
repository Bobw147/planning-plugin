import { App, Modal, TFile, Vault } from "obsidian";
import { Ident, identTags } from "./types";
import { Settings } from "src/settings/Settings";
import { createFolder } from "src/utils/utils";
import { taskPageContent } from "./scripts/dataview_task";
import { TaskIndexCard } from "./indexcards/taskIndexCard";
import { initIdentFragment, newIdentFragment } from "./forms/newIdentFragment";
import { MessageId,wrapMessage } from "./types";


export class TasksModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;

    constructor(app: App, vault: Vault, settings: Settings) {
		super(app);
        this._settings = settings;
        this._vault = vault;
    }

    display(): void {
        this.contentEl.empty();
        this.setTitle("Create a new Task");
        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Goal part of the form
        this.contentEl.innerHTML = newIdentFragment;
        this.open();
        initIdentFragment(Ident.TASK);

        (document.getElementById(wrapMessage(MessageId.ID_TASK_CREATE_BUTTON, "")) as HTMLButtonElement).onclick = async () => {
            const _taskIndexCard = new TaskIndexCard();
            _taskIndexCard.name = (document.getElementById(wrapMessage(MessageId.ID_TASK_NAME, "")) as HTMLInputElement).value;
            _taskIndexCard.categoryTag = (document.getElementById(wrapMessage(MessageId.ID_TASK_CATEGORY_TAG, "")) as HTMLSelectElement).value;
            _taskIndexCard.targetDate = new Date((document.getElementById(wrapMessage(MessageId.ID_TASK_TARGET_DATE, ""))as HTMLDataElement).value);

            await createFolder(this._vault, this._settings.tasksFolder);
            const file: TFile = await this._vault.create(this._settings.tasksFolder + "/" + _taskIndexCard.name + ".md", "");
   
            // Save the data from the form into the files frontmatter then write the dataviw script
            await _taskIndexCard.save(this.app.fileManager, file, identTags.PLANNING_TASK);
            await this._vault.modify(file, taskPageContent(_taskIndexCard))

            this.close();
        }
        (document.getElementById(wrapMessage(MessageId.ID_TASK_CANCEL_BUTTON, "")) as HTMLButtonElement).onclick = () => {
            this.close();
        }
    }
}
