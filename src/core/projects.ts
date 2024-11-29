import { App, Modal, TFile, Vault } from "obsidian";
import { initIdentFragment, newIdentFragment } from "./forms/newIdentFragment";
import { Settings } from "src/settings/Settings";
import { projectPageContent } from "./scripts/dataview_project";
import { createFolder } from "src/utils/utils";
import { Ident, identTags, WrapperType, emptyString } from "./types/types";
import { ProjectIndexCard } from "./indexcards/projectindexcard";
import { FormFieldId, resolveField } from "./webbuilder/formFieldTypes";

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
        initIdentFragment(Ident.PROJECT, this._settings, this.app);

        // Add a handler to the 'Create' button
        (document.getElementById(resolveField(FormFieldId.ID_CF_PROJECT_CREATE_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = async () => {
            const projectIndexCard: ProjectIndexCard = new ProjectIndexCard();
            projectIndexCard.name = (document.getElementById(resolveField(FormFieldId.ID_CF_PROJECT_NAME, WrapperType.NONE)) as HTMLInputElement).value;
            projectIndexCard.categoryTag = (document.getElementById(resolveField(FormFieldId.ID_CF_PROJECT_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement).value;
            projectIndexCard.targetDate = new Date((document.getElementById(resolveField(FormFieldId.ID_CF_PROJECT_TARGET_DATE, WrapperType.NONE)) as HTMLDataElement).value);

            await createFolder(this._vault, this._settings.projectsFolder);
            const file: TFile = await this._vault.create(this._settings.projectsFolder + "/" + projectIndexCard.name + ".md", emptyString)
            
            // Write the dataview script into the file then add the frontmatter properties. 
            await this._vault.modify(file, projectPageContent());
            await projectIndexCard.save(this.app.fileManager, file, identTags.PLANNING_PROJECT);

            this.close();
        }
        (document.getElementById(resolveField(FormFieldId.ID_CF_PROJECT_CANCEL_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = () => {
            this.close();
        }
    }
}
