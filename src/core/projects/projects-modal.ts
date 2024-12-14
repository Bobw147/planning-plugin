import { App, Modal, Vault } from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { FormFieldId } from '../form-builder/form-field-types';
import { lookupMessage, UserMessageId } from '../form-builder/i18n';
import { IProjectIndexCard } from '../types/interfaces/i-project-index-card';
import { ProjectFormBuilder } from './project-form-builder';
import { ProjectIndexCard } from './project-index-card';

export class ProjectsModal extends Modal {
    private settings: Settings;
    private vault: Vault;
    private displayMode:DisplayMode;
    private projectForm: ProjectFormBuilder;
    private projectIndexCard: ProjectIndexCard;
    private _onSubmit;
 
    constructor(app: App, vault: Vault, settings: Settings, displayMode: DisplayMode, onSubmit: (result: IProjectIndexCard | null) => void) {
		super(app);
        this.settings = settings;
        this.vault = vault;
        this.displayMode = displayMode;
        this.projectForm = new ProjectFormBuilder()
        this.projectIndexCard = new ProjectIndexCard();
        this._onSubmit = onSubmit;
    }

    open(): void{
        this.contentEl.empty();
        this.setTitle(lookupMessage(UserMessageId.CREATE_PROJECT_TITLE));
        this.projectForm.buildForm(this.contentEl);

        super.open();
        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.projectForm.configureForCreateMode(this.app, this.settings);

            // Add a handler to the 'Create' button
            (document.getElementById(FormFieldId.GF_CREATE_BUTTON) as HTMLButtonElement).onclick = async () => {
                this.projectForm.updateIndexCard(this.projectIndexCard, this.displayMode);
                this.close();
                this._onSubmit(this.projectIndexCard)
            }
            (document.getElementById(FormFieldId.GF_CANCEL_BUTTON) as HTMLButtonElement).onclick = () => {
                this.close();
                this._onSubmit(null);
            }
        }
    }
}
