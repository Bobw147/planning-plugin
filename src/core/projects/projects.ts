import { App, Modal, Vault } from "obsidian";
import { newIdentFragment, initIdentFragment } from "../newIdentFragment";
import { Settings } from "src/settings/Settings";
//import { projectPageContent } from "../scripts/dataview_project";
import { createFolder } from "src/utils/utils";
import { Ident, WrapperType } from "../types/types";
import { ProjectIndexCard } from "./projectindexcard";
import { FormFieldId, resolveField } from "../formbuilder/formFieldTypes";
import { DisplayMode } from "../baseclasses/genericPlanningForm";

export class ProjectsModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;
    private displayMode:DisplayMode;
    private projectForm: ProjectForm;
    private projectIndexCard: ProjectIndexCard;
 
    constructor(app: App, vault: Vault, settings: Settings, projectIndexCard: ProjectIndexCard, displayMode: DisplayMode) {
		super(app);
        this._settings = settings;
        this._vault = vault;
        this.displayMode = displayMode;
        this.projectForm = new ProjectForm()
        this.projectIndexCard = projectIndexCard;
    }

    display(): void{
        this.contentEl.empty();
        this.setTitle("Create a new Project");
        this.projectForm.buildForm()
        this.open();
 
        // Add a handler to the 'Create' button
        (document.getElementById(resolveField(FormFieldId.ID_CF_PROJECT_CREATE_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = async () => {
//            const projectIndexCard: ProjectIndexCard = new ProjectIndexCard();
//            projectIndexCard.name = (document.getElementById(resolveField(FormFieldId.GF_NAME, WrapperType.NONE)) as HTMLInputElement).value;
//            projectIndexCard.categoryTag = (document.getElementById(resolveField(FormFieldId.GF_CATEGORY_TAG, WrapperType.NONE)) as HTMLSelectElement).value;
//            projectIndexCard.targetDate = new Date((document.getElementById(resolveField(FormFieldId.ID_CF_PROJECT_TARGET_DATE, WrapperType.NONE)) as HTMLDataElement).value);

            await createFolder(this._vault, this._settings.projectsFolder);
//            const file: TFile = await this._vault.create(this._settings.projectsFolder + "/" + projectIndexCard.name + ".md", emptyString)
            
            // Write the dataview script into the file then add the frontmatter properties. 
//            await this._vault.modify(file, projectPageContent());
//            await projectIndexCard.save(this.app.fileManager, file, identTags.PLANNING_PROJECT);

            this.close();
        }
        (document.getElementById(resolveField(FormFieldId.ID_CF_PROJECT_CANCEL_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = () => {
            this.close();
        }
    }
}
