import { App, Modal, TFile, Vault } from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { FormFieldId } from '../form-builder/form-field-types';
import { HtmlAttributes } from '../form-builder/html-attribute-types';
import { HtmlTags } from '../form-builder/html-element-types';
import { translate, UserMessageId } from '../form-builder/i18n';
import { NodeBuilder } from '../form-builder/node-builder';
import { ISubtaskIndexCard } from '../types/interfaces/i-subtask-index-card';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { TaskFormBuilder } from './task-form-builder';
import { TaskIndexCard } from './task-index-card';

export class TasksModal extends Modal {
    private settings: Settings;
    private vault: Vault;
    private displayMode: DisplayMode;
    private taskIndexCard: ITaskIndexCard;
    private onSubmit;

    constructor(app: App, settings: Settings, taskIndexCard: ITaskIndexCard, displayMode: DisplayMode, 
        onSubmit: (hasChanged: boolean, app:App, settings: Settings) => void) {
		super(app);
        this.settings = settings;
        this.vault = app.vault;
        this.displayMode = displayMode;
        this.taskIndexCard = taskIndexCard;
        this.onSubmit = onSubmit;
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
            taskForm.configureForCreateMode();
            
            (document.getElementById(FormFieldId.GF_CREATE_BUTTON) as HTMLButtonElement).onclick = async () => {
                this.updateIndexCard(this.taskIndexCard);              
                this.onSubmit(true, this.app, this.settings);
            }
            (document.getElementById(FormFieldId.GF_CANCEL_BUTTON) as HTMLButtonElement).onclick = () => {
                this.onSubmit(false, this.app, this.settings);
            }
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.TASK_INDEX_CARD_TITLE));
            taskForm.configureForIndexCardMode(this.taskIndexCard, this.app.fileManager, this.app.workspace.getActiveFile() as TFile)
        }
    }

    updateIndexCard(indexCard: ITaskIndexCard): void {
        indexCard.name = NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_NAME, HtmlAttributes.VALUE);
        indexCard.parentProject = NodeBuilder.getElementInfo(HtmlTags.SELECT, FormFieldId.GF_MEMBER_OF_NAME,HtmlAttributes.VALUE);
        indexCard.categoryTag = NodeBuilder.getElementInfo(HtmlTags.SELECT, FormFieldId.GF_CATEGORY_TAG, HtmlAttributes.VALUE);
        indexCard.statusTag = NodeBuilder.getElementInfo(HtmlTags.SELECT, FormFieldId.GF_STATUS_TAG, HtmlAttributes.VALUE);
        indexCard.targetDate = new Date(NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_TARGET_DATE, HtmlAttributes.VALUE));
        indexCard.expectedDate = new Date(NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_EXPECTED_DATE, HtmlAttributes.VALUE))
        indexCard.completedDate = new Date(NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_COMPLETED_DATE, HtmlAttributes.VALUE))
    }
}
