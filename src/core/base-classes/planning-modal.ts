import { Modal } from 'obsidian';

import { NodeBuilder } from '../form-builder/form-builder';
import { FormFieldId } from '../form-builder/form-field-types';
import { HtmlAttributes } from '../form-builder/html-attribute-types';
import { HtmlTags } from '../form-builder/html-element-types';
import { IModalForm } from '../types/interfaces/i-modal-form';
import { IPlanningIndexCard } from '../types/interfaces/i-planning-index-card';
import { emptyString } from '../types/types';

export class PlanningModal extends Modal implements IModalForm {

    open(): void {
        super.open();
    }

    updateIndexCard(indexCard: IPlanningIndexCard): void {
        indexCard.name = NodeBuilder.getElementInfo(HtmlTags.INPUT, FormFieldId.GF_NAME, HtmlAttributes.VALUE);
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