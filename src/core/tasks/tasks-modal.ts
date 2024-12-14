import { App, Modal, Vault } from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { FormFieldId } from '../form-builder/form-field-types';
import { translate, UserMessageId } from '../form-builder/i18n';
import { ISubtaskIndexCard } from '../types/interfaces/i-subtask-index-card';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { SubtaskIndexCard } from './subtask-index-card';
import { TaskFormBuilder } from './task-form-builder';
import { TaskIndexCard } from './task-index-card';

export class TasksModal extends Modal {
    private settings: Settings;
    private vault: Vault;
    private displayMode: DisplayMode;
    private taskForm: TaskFormBuilder
    private indexCard: ITaskIndexCard | ISubtaskIndexCard | null;
    private onSubmit;

    constructor(app: App, vault: Vault, settings: Settings, displayMode: DisplayMode, onSubmit: (result: ITaskIndexCard | ISubtaskIndexCard | null) => void) {
		super(app);
        this.settings = settings;
        this.vault = vault;
        this.displayMode = displayMode;
        this.taskForm = new TaskFormBuilder();
        this.indexCard = null;
        this.onSubmit = onSubmit;
    }

    open(): void {
        this.contentEl.empty();
        this.setTitle(translate(UserMessageId.CREATE_TASK_TITLE));
        this.taskForm.buildForm(this.contentEl);

        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Task part of the form
        super.open();

        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.taskForm.configureForCreateMode(this.app, this.settings);
            
            (document.getElementById(FormFieldId.GF_CREATE_BUTTON) as HTMLButtonElement).onclick = async () => {
                this.indexCard = (this.taskForm.isSubtask) ? new SubtaskIndexCard() : new TaskIndexCard();
                this.taskForm.updateIndexCard(this.indexCard, this.displayMode);              
                this.close();
                this.onSubmit(this.indexCard);
            }
            (document.getElementById(FormFieldId.GF_CANCEL_BUTTON) as HTMLButtonElement).onclick = () => {
                this.close();
                this.onSubmit(null);
            }
        }
    }
}
