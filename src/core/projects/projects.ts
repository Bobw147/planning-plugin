import { App, Modal,TFile,  Vault } from "obsidian";
import { Settings } from "src/settings/Settings";
import { createFolder } from "src/utils/utils";
import { emptyString, WrapperType } from "../types/types";
import { ProjectIndexCard } from "./projectindexcard";
import { ProjectFormBuilder } from "./projectFormBuilder";
import { FormFieldId, resolveField } from "../formbuilder/formFieldTypes";
import { DisplayMode } from "../baseclasses/genericPlanningForm";
import { projectPageContent } from "../scripts/dataview_project";
import { identTags } from "../types/types";
import { UserMessageId } from "../formbuilder/i18n";
import { lookupMessage } from "../formbuilder/i18n";

export class ProjectsModal extends Modal {
    private settings: Settings;
    private vault: Vault;
    private displayMode:DisplayMode;
    private projectForm: ProjectFormBuilder;
    private projectIndexCard: ProjectIndexCard;
 
    constructor(app: App, vault: Vault, settings: Settings, projectIndexCard: ProjectIndexCard, displayMode: DisplayMode) {
		super(app);
        this.settings = settings;
        this.vault = vault;
        this.displayMode = displayMode;
        this.projectForm = new ProjectFormBuilder()
        this.projectIndexCard = projectIndexCard;
    }

    display(): void{
        this.contentEl.empty();
        this.setTitle(lookupMessage(UserMessageId.CREATE_PROJECT_TITLE));
        this.projectForm.buildForm(this.contentEl);
        this.open();
 
        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.projectForm.configureForCreateMode(this.settings);

            // Add a handler to the 'Create' button
            (document.getElementById(resolveField(FormFieldId.GF_CREATE_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = async () => {
                this.projectForm.updateIndexCard(this.projectIndexCard, this.displayMode);

                await createFolder(this.vault, this.settings.projectsFolder);
                const file: TFile = await this.vault.create(this.settings.projectsFolder + "/" + this.projectIndexCard.name + ".md", emptyString)
            
                // Write the dataview script into the file then add the frontmatter properties. 
                await this.vault.modify(file, projectPageContent());
                await this.projectIndexCard.save(this.app.fileManager, file, identTags.PLANNING_PROJECT);

                this.close();
            }
            (document.getElementById(resolveField(FormFieldId.GF_CANCEL_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = () => {
                this.close();
            }
        }
    }
}
