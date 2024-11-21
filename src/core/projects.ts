import { App, Modal, TFile, Vault } from "obsidian";
import { initIdentFragment, newIdentFragment } from "./forms/newIdentFragment";
import { Settings } from "src/settings/Settings";
import { projectPageContent } from "./scripts/dataview_project";
import { createFolder } from "src/utils/utils";
import { Ident, identTags } from "./types";
import { ProjectIndexCard } from "./indexcards/projectindexcard";
import { MessageId, wrapMessage } from "./types";

export class ProjectsModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;
 
    constructor(app: App, vault: Vault, settings: Settings) {
		super(app);
        this._settings = settings;
        this._vault = vault;
    }

    display(): void{
        this.contentEl.empty();
        this.setTitle("Create a new Project");
        this.contentEl.innerHTML = newIdentFragment;
        this.open();
        initIdentFragment(Ident.PROJECT);

        // Add a handler to the 'Create' button
        (document.getElementById(wrapMessage(MessageId.ID_PROJECT_CREATE_BUTTON, "")) as HTMLButtonElement).onclick = async () => {
            const _projectIndexCard: ProjectIndexCard = new ProjectIndexCard();
            _projectIndexCard.name = (document.getElementById(wrapMessage(MessageId.ID_PROJECT_NAME, "")) as HTMLInputElement).value;
            _projectIndexCard.categoryTag = (document.getElementById(wrapMessage(MessageId.ID_PROJECT_CATEGORY_TAG, "")) as HTMLSelectElement).value;
            _projectIndexCard.targetDate = new Date((document.getElementById(wrapMessage(MessageId.ID_PROJECT_TARGET_DATE, "")) as HTMLDataElement).value);

            await createFolder(this._vault, this._settings.projectsFolder);
            const file: TFile = await this._vault.create(this._settings.projectsFolder + "/" + _projectIndexCard.name + ".md", "")
            
            // Write the dataview script into the file then add the frontmatter properties. 
            await this._vault.modify(file, projectPageContent());
            await _projectIndexCard.save(this.app.fileManager, file, identTags.PLANNING_PROJECT);

            this.close();
        }
        (document.getElementById(wrapMessage(MessageId.ID_PROJECT_CANCEL_BUTTON, "")) as HTMLButtonElement).onclick = () => {
            this.close();
        }
    }
}
