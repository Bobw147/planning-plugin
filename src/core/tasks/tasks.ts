import { App, Modal, TFile, Vault } from 'obsidian';
import { Settings } from 'src/settings/Settings';
import { createFolder } from 'src/utils/utils';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { FormFieldId, resolveField } from '../form-builder/form-field-types';
import { lookupMessage, UserMessageId } from '../form-builder/i18n';
import { taskPageContent } from '../scripts/dataview-task';
import { emptyString, identTags, WrapperType } from '../types/types';
import { TaskFormBuilder } from './task-form-builder';
import { TaskIndexCard } from './task-index-card';

export class TasksModal extends Modal {
    private settings: Settings;
    private vault: Vault;
    private displayMode: DisplayMode;
    private taskForm: TaskFormBuilder
    private taskIndexCard: TaskIndexCard;

    constructor(app: App, vault: Vault, settings: Settings, taskIndexCard: TaskIndexCard, displayMode: DisplayMode) {
		super(app);
        this.settings = settings;
        this.vault = vault;
        this.displayMode = displayMode;
        this.taskForm = new TaskFormBuilder();
        this.taskIndexCard = taskIndexCard;
    }

    display(): void {
        this.contentEl.empty();
        this.setTitle(lookupMessage(UserMessageId.CREATE_TASK_TITLE));
        this.taskForm.buildForm(this.contentEl);

        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Task part of the form
        this.open();

        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.taskForm.configureForCreateMode(this.app, this.settings);
            
            (document.getElementById(resolveField(FormFieldId.GF_CREATE_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = async () => {
                this.taskForm.updateIndexCard(this.taskIndexCard, this.displayMode);

                await createFolder(this.vault, this.settings.tasksFolder);
                const file: TFile = await this.vault.create(this.settings.tasksFolder + "/" + this.taskIndexCard.name + ".md", emptyString);
   
                // Save the data from the form into the files frontmatter then write the dataviw script
                await this.vault.modify(file, taskPageContent(this.taskIndexCard))
                await this.taskIndexCard.save(this.app.fileManager, file, identTags.PLANNING_TASK);
 
                this.close();
            }
            (document.getElementById(resolveField(FormFieldId.GF_CANCEL_BUTTON, WrapperType.NONE)) as HTMLButtonElement).onclick = () => {
                this.close();
            }
        }
    }
}
