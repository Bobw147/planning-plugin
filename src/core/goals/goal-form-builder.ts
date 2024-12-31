import { FileManager, TFile } from 'obsidian';

import { GenericPlanningForm } from '../base-classes/generic-planning-form';
import { IGoalIndexCard } from '../types/interfaces/i-goal-index-card';

export class GoalFormBuilder extends GenericPlanningForm implements IPlanningForm {

    buildForm(parent: HTMLElement): void {
        super.buildForm(parent);
    }

    configureForCreateMode(goalIndexCard: IGoalIndexCard): void {
        this.hide([
            this.parentSection,
            this.subtaskToggleSection,
            this.statusTagSection,
            this.expectedDateSection,
            this.completedDateSection,
        ])
    }

    async configureForIndexCardMode(goalIndexCard: IGoalIndexCard, fileManager: FileManager, file: TFile): Promise<void> {
        this.hide([
            this.parentSection,
            this.subtaskToggleSection,
            this.buttonsSection,
        ]);
    
        this.disable([
            this.nameSection,
            this.categoryTagSection,
            this.statusTagSection,
            this.targetDateSection,
            this.expectedDateSection,
            this.completedDateSection,
            this.userTagsSection,
        ]);
    }

    updateIndexCard(indexCard: IGoalIndexCard): void {
        super.updateIndexCard(indexCard);
    }
}