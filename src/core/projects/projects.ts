import { App, Modal,TFile,  Vault } from "obsidian";
import { Settings } from "src/settings/Settings";
import { createFolder } from "src/utils/utils";
import { WrapperType } from "../types/types";
import { ProjectIndexCard } from "./projectindexcard";
import { ProjectFormBuilder } from "./projectFormBuilder";
import { FormFieldId, resolveField } from "../formbuilder/formFieldTypes";
import { DisplayMode } from "../baseclasses/genericPlanningForm";
import { projectPageContent } from "../scripts/dataview_project";
import { identTags } from "../types/types";

export class ProjectsModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;
    private displayMode:DisplayMode;
    private projectForm: ProjectFormBuilder;
    private projectIndexCard: ProjectIndexCard;
 
    constructor(app: App, vault: Vault, settings: Settings, projectIndexCard: ProjectIndexCard, displayMode: DisplayMode) {
		super(app);
        this._settings = settings;
        this._vault = vault;
        this.displayMode = displayMode;
        this.projectForm = new ProjectFormBuilder()
        this.projectIndexCard = projectIndexCard;
    }

    display(): void{
        this.contentEl.empty();
        this.setTitle("Create a new Project");
        this.projectForm.buildForm(this.containerEl);
        this.open();
 
        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.projectForm.configureForCreateMode(this._settings);

            // Add a handler to the 'Create' button
            (document.getElementById(resolveField(FormFieldId.GF_CREATE_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = async () => {
                this.projectForm.updateIndexCard(this.projectIndexCard, this.displayMode);

                await createFolder(this._vault, this._settings.projectsFolder);
                const file: TFile = await this._vault.create(this._settings.projectsFolder + "/" + this.projectIndexCard.name + ".md", emptyString)
            
                // Write the dataview script into the file then add the frontmatter properties. 
                await this._vault.modify(file, projectPageContent());
                await this.projectIndexCard.save(this.app.fileManager, file, identTags.PLANNING_PROJECT);

                this.close();
            }
            (document.getElementById(resolveField(FormFieldId.GF_CANCEL_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = () => {
                this.close();
            }
        }
    }
}
