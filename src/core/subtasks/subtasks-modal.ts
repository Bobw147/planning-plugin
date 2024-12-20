import { App, Modal, TFile } from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { DisplayMode } from '../base-classes/generic-planning-form';
import { FormFieldId } from '../form-builder/form-field-types';
import { HtmlAttributes } from '../form-builder/html-attribute-types';
import { HtmlTags } from '../form-builder/html-element-types';
import { translate, UserMessageId } from '../form-builder/i18n';
import { NodeBuilder } from '../form-builder/node-builder';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { ISubtaskIndexCard } from '../types/interfaces/i-subtask-index-card';
import { emptyString } from '../types/types';
import { SubtaskFormBuilder } from './subtask-form-builder';

let thisModal: SubtasksModal;

export class SubtasksModal extends Modal implements IModalForm {
    private settings: Settings;
    private displayMode: DisplayMode;
    private subtaskIndexCard: ISubtaskIndexCard;
    private onSubmit;
    private onSwitchToTaskMode;

    constructor(app: App, settings: Settings, subtaskIndexCard: ISubtaskIndexCard, displayMode: DisplayMode, 
        onSubmit: (hasChanged: boolean, app:App, settings: Settings) => void,
        onSwitchToTaskMode: (subtaskIndexCard: ISubtaskIndexCard) => void) {
        super(app);
        this.settings = settings;
        this.displayMode = displayMode;
        this.subtaskIndexCard = subtaskIndexCard;
        this.onSubmit = onSubmit;
        this.onSwitchToTaskMode = onSwitchToTaskMode;
        thisModal = this;
    }

    open(): void {
        const subtaskForm: SubtaskFormBuilder = new SubtaskFormBuilder(this.app, this.settings);
        this.contentEl.empty();
        subtaskForm.buildForm(this.contentEl);

        // Open the form to create the DOM so that we can manipulate the class names settings
        // to just show the Task part of the form
        super.open();

        if (this.displayMode == DisplayMode.CREATE_MODE) {
            this.setTitle(translate(UserMessageId.CREATE_SUBTASK_TITLE));
            subtaskForm.configureForCreateMode(this.subtaskIndexCard);
            
            (document.getElementById(FormFieldId.GF_SUBTASK_CHECKBOX) as HTMLInputElement)
            .onclick = async () => {
                thisModal.updateIndexCard(thisModal.subtaskIndexCard);
                thisModal.onSwitchToTaskMode(thisModal.subtaskIndexCard);
            };
            
            (document.getElementById(FormFieldId.GF_CREATE_BUTTON) as HTMLButtonElement).onclick = async () => {
                thisModal.updateIndexCard(thisModal.subtaskIndexCard);              
                thisModal.onSubmit(true, thisModal.app, thisModal.settings);
            }
            (document.getElementById(FormFieldId.GF_CANCEL_BUTTON) as HTMLButtonElement).onclick = () => {
                thisModal.onSubmit(false, thisModal.app, thisModal.settings);
            }
        }
        else if (this.displayMode == DisplayMode.INDEX_CARD_MODE) {
            this.setTitle(translate(UserMessageId.TASK_INDEX_CARD_TITLE));
            subtaskForm.configureForIndexCardMode(this.subtaskIndexCard, this.app.fileManager, this.app.workspace.getActiveFile() as TFile)
        }
    }

    updateIndexCard(indexCard: ISubtaskIndexCard): void {
        indexCard.name = NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_NAME, HtmlAttributes.VALUE);
        indexCard.parentTask = NodeBuilder.getElementInfo(HtmlTags.SELECT, FormFieldId.GF_MEMBER_OF_NAME,HtmlAttributes.VALUE);
        indexCard.categoryTag = NodeBuilder.getElementInfo(HtmlTags.SELECT, FormFieldId.GF_CATEGORY_TAG, HtmlAttributes.VALUE);
        indexCard.statusTag = NodeBuilder.getElementInfo(HtmlTags.SELECT, FormFieldId.GF_STATUS_TAG, HtmlAttributes.VALUE);
        
        const targetDateString: string = NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_TARGET_DATE, HtmlAttributes.VALUE);
        indexCard.targetDate = (targetDateString !== emptyString) ? new Date(targetDateString) : null;

        const expectedDateString: string = NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_EXPECTED_DATE, HtmlAttributes.VALUE);
        indexCard.expectedDate = (expectedDateString !== emptyString) ? new Date(expectedDateString) : null;

        const completedDateString: string = NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_COMPLETED_DATE, HtmlAttributes.VALUE);
        indexCard.completedDate = (completedDateString !== emptyString) ? new Date(completedDateString) : null;
    }
}
