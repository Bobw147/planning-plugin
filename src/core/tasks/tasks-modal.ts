import { App, TFile } from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { PlanningModal } from '../base-classes/planning-modal';
import { FormBuilderr } from '../form-builder/form-builder';
import { FormFieldId } from '../form-builder/form-field-types';
import { HtmlAttributes } from '../form-builder/html-attribute-types';
import { HtmlTags } from '../form-builder/html-element-types';
import { translate, UserMessageId } from '../form-builder/i18n';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { TaskFormBuilder } from './task-form-builder';

let thisModal: TasksModal;
export class TasksModal extends PlanningModal implements IModalForm{
    private settings: Settings;
    private displayMode: DisplayMode;
    private taskIndexCard: ITaskIndexCard;
    private onSubmit;
    private onSwitchToSubtaskMode;

    constructor(app: App, settings: Settings, taskIndexCard: ITaskIndexCard, displayMode: DisplayMode, 
        onSubmit: (hasChanged: boolean, app:App, settings: Settings) => void,
        onSwitchToSubtaskMode: (taskIndexCard: ITaskIndexCard) => void) {
		super(app);
        this.settings = settings;
        this.displayMode = displayMode;
        this.taskIndexCard = taskIndexCard;
        this.onSubmit = onSubmit;
        this.onSwitchToSubtaskMode = onSwitchToSubtaskMode;
        thisModal = this;
    }

    open(): void {
        const taskForm: TaskFormBuilder = new TaskFormBuilder(this.app, this.settings);
        this.contentEl.empty();
        taskForm.buildForm(this.contentEl);

        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Task part of the form
        super.open();

        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.setTitle(translate(UserMessageId.CREATE_TASK_TITLE));
            taskForm.configureForCreateMode(this.taskIndexCard);
            
            (document.getElementById(FormFieldId.GF_SUBTASK_CHECKBOX) as HTMLInputElement)
            .onclick = async () => {
                thisModal.updateIndexCard(thisModal.taskIndexCard);
                thisModal.onSwitchToSubtaskMode(thisModal.taskIndexCard);
            };

            (document.getElementById(FormFieldId.GF_CREATE_BUTTON) as HTMLButtonElement)
            .onclick = async () => {
                thisModal.updateIndexCard(this.taskIndexCard);              
                thisModal.onSubmit(true, thisModal.app, thisModal.settings);
            };

            (document.getElementById(FormFieldId.GF_CANCEL_BUTTON) as HTMLButtonElement)
            .onclick = () => {
                thisModal.onSubmit(false, thisModal.app, thisModal.settings);
            };
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.TASK_INDEX_CARD_TITLE));

            if (this.nameSection !== undefined) {
                this.nameSection.setName(translate(UserMessageId.TASK_NAME_LABEL_IC));
                this.nameSection.setDesc(translate(UserMessageId.TASK_NAME_LABEL_DESCRIPTION_IC))
            }
            if (this.parentSection !== undefined) {
                this.parentSection.setName(translate(UserMessageId.TASK_PROJECT_LABEL_IC));
                this.parentSection.setDesc(translate(UserMessageId.TASK_PROJECT_DESCRIPTION_IC))
            }
        }
    }
}
