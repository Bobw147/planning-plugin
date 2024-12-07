import { App, Modal, TFile, Vault } from "obsidian";
import { Ident, identTags, WrapperType, emptyString } from "../types/types";
import { Settings } from "src/settings/Settings";
import { createFolder } from "src/utils/utils";
import { taskPageContent } from "../scripts/dataview_task";
import { TaskIndexCard } from "./taskIndexCard";
import { initIdentFragment, newIdentFragment } from "../newIdentFragment";
import { FormFieldId, resolveField } from "../formbuilder/formFieldTypes";
import { DisplayMode } from "../baseclasses/genericPlanningForm";

export class TasksModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;
    private displayMode: DisplayMode;
    private taskIndexCard: TaskIndexCard;

    constructor(app: App, vault: Vault, settings: Settings, taskIndexCard: TaskIndexCard, displayMode: DisplayMode) {
		super(app);
        this._settings = settings;
        this._vault = vault;
        this.displayMode = displayMode;
        this.taskIndexCard = taskIndexCard;
    }

    display(): void {
        this.contentEl.empty();
        this.setTitle("Create a new Task");
        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Task part of the form
        this.contentEl.innerHTML = newIdentFragment;
        this.open();
        initIdentFragment(Ident.TASK, this._settings, this.app);

        (document.getElementById(resolveField(FormFieldId.ID_CF_TASK_CREATE_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = async () => {
            const taskIndexCard = new TaskIndexCard();
            taskIndexCard.name = (document.getElementById(resolveField(FormFieldId.ID_CF_TASK_NAME, WrapperType.NONE)) as HTMLInputElement).value;
            taskIndexCard.categoryTag = (document.getElementById(resolveField(FormFieldId.ID_CF_TASK_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement).value;
            taskIndexCard.targetDate = new Date((document.getElementById(resolveField(FormFieldId.ID_CF_TASK_TARGET_DATE, WrapperType.NONE))as HTMLDataElement).value);

            await createFolder(this._vault, this._settings.tasksFolder);
            const file: TFile = await this._vault.create(this._settings.tasksFolder + "/" + taskIndexCard.name + ".md", emptyString);
   
            // Save the data from the form into the files frontmatter then write the dataviw script
            await this._vault.modify(file, taskPageContent(taskIndexCard))
            await taskIndexCard.save(this.app.fileManager, file, identTags.PLANNING_TASK);
 
            this.close();
        }
        (document.getElementById(resolveField(FormFieldId.ID_CF_TASK_CANCEL_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = () => {
            this.close();
        }
    }
}
