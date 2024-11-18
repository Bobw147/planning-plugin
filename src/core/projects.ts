import { fieldNames } from "./indexcards/indexcard";
import { App, Modal, TFile, Vault } from "obsidian";
import { projectForm } from "./forms/newProjectForm";
import { Settings } from "src/settings/Settings";
import { project_page_content } from "./scripts/dataview_project";
import { createFolder } from "src/utils/utils";
import { identTags } from "./tags";
import { getAPI, DataviewApi } from "obsidian-dataview";
import { ProjectIndexCard } from "./indexcards/projectindexcard";

export class ProjectsModal extends Modal {
    private _settings: Settings;
    private _vault: Vault;
    _dvApi: DataviewApi;

    constructor(app: App, vault: Vault, settings: Settings) {
		super(app);
        this._settings = settings;
        this._vault = vault;
        this._dvApi = getAPI(app);
    };

    display(): void{
        this.open();
        this.contentEl.empty();
        this.setTitle("Create a new Project");
        this.contentEl.innerHTML = projectForm;

        // Populate the parent Goal selector with the results of a dataview query
        // for pages containing the PLANNING_GOAL ident tag.
        const goalNameField = this.contentEl.doc.getElementById("goal-name") as HTMLSelectElement;
        const pages = this._dvApi.pages(identTags.PLANNING_GOAL);
        for (let i = 0;  i < pages.length; i++) {
            const option = document.createElement('option');
            option.text = pages[i].file.name;
            goalNameField.add(option);
        }

        // Populate the Mode select field with the options defined in Setings
        const searchField = this.contentEl.doc.getElementById("mode-tag") as HTMLSelectElement;
        this._settings.modeTags.forEach((value: string) => {
            const option = document.createElement('option');
            option.text = value;
            searchField.add(option);
        } );

        (document.getElementById("createProject") as HTMLButtonElement).onclick = async () => {
            const _projectIndexCard: ProjectIndexCard = new ProjectIndexCard();
            _projectIndexCard.name = (document.getElementById("project-name") as HTMLInputElement).value;
            _projectIndexCard.categoryTag = (document.getElementById("mode-tag") as HTMLSelectElement).value;
            _projectIndexCard.targetDate = new Date((document.getElementById("target-date") as HTMLDataElement).value);

            await createFolder(this._vault, this._settings.projectsFolder);
            const file: TFile = await this._vault.create(this._settings.projectsFolder + "/" + _projectIndexCard.name + ".md", "")
            
            // Save the data from the form into the files frontmatter then write the dataviw script
            await _projectIndexCard.save(this.app.fileManager, file, identTags.PLANNING_PROJECT);
            await this._vault.modify(file, project_page_content(_projectIndexCard));
            this.app.fileManager.processFrontMatter(file, (frontmatter) => {
                frontmatter[fieldNames.IDENT_TAG_FIELD] = identTags.PLANNING_PROJECT;
            });
            this.close();
        }
        (document.getElementById("cancelCreate") as HTMLButtonElement).onclick = () => {
            this.close();
        }
    }
}
