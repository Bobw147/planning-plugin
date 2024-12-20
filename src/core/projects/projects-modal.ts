import { App, TFile } from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { PlanningModal } from '../base-classes/planning-modal';
import { FormFieldId } from '../form-builder/form-field-types';
import { HtmlAttributes } from '../form-builder/html-attribute-types';
import { HtmlTags } from '../form-builder/html-element-types';
import { translate, UserMessageId } from '../form-builder/i18n';
import { NodeBuilder } from '../form-builder/node-builder';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { IProjectIndexCard } from '../types/interfaces/i-project-index-card';
import { ProjectFormBuilder } from './project-form-builder';

export class ProjectsModal extends PlanningModal implements IModalForm {
    private settings: Settings;
    private displayMode:DisplayMode;
    private projectForm: ProjectFormBuilder;
    private projectIndexCard: IProjectIndexCard;
    private _onSubmit;
 
    constructor(app: App, settings: Settings, projectIndexCard: IProjectIndexCard, displayMode: DisplayMode, 
        onSubmit: (result: boolean, app: App, settings: Settings) => void) {
		super(app);
        this.settings = settings;
        this.displayMode = displayMode;
        this.projectForm = new ProjectFormBuilder(app, settings);
        this.projectIndexCard = projectIndexCard;
        this._onSubmit = onSubmit;
    }

    open(): void{
        this.contentEl.empty();
        this.projectForm.buildForm(this.contentEl);

        super.open();
        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.setTitle(translate(UserMessageId.CREATE_PROJECT_TITLE));
            this.projectForm.configureForCreateMode(this.projectIndexCard);

            // Add a handler to the 'Create' button
            (document.getElementById(FormFieldId.GF_CREATE_BUTTON) as HTMLButtonElement).onclick = async () => {
                this.updateIndexCard(this.projectIndexCard);
                this._onSubmit(true, this.app, this.settings)
            }
            (document.getElementById(FormFieldId.GF_CANCEL_BUTTON) as HTMLButtonElement).onclick = () => {
                this._onSubmit(false, this.app, this.settings);
            }
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.PROJECT_INDEX_CARD_TITLE));
            this.projectForm.configureForIndexCardMode(this.projectIndexCard, this.app.fileManager, this.app.workspace.getActiveFile() as TFile)
        }
    }

    updateIndexCard(indexCard: IProjectIndexCard): void {
        super.updateIndexCard(indexCard);
        indexCard.parentGoal = NodeBuilder.getElementInfo(HtmlTags.SELECT, FormFieldId.GF_MEMBER_OF_NAME, HtmlAttributes.VALUE);
    }
}
