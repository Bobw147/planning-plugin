import { ButtonComponent } from 'obsidian';
import { Planner } from 'src/core/planner/planner';

//TODO Should I move this into the planner
export function indexCardProcessor(source: string, el: HTMLElement, planner: Planner): void {

    const indexCardButton: ButtonComponent = new ButtonComponent(el);
    let showing: boolean = false;
    indexCardButton.setButtonText("Show Index Card 1")
    indexCardButton.onClick((button) => {
        if (! showing){
            showing = true;

            // Toggle the nature of the button
            indexCardButton.setButtonText("Hide Index Card");

            switch (source.trim()) {
                case "Goal" : // Display the form and then add the index card data
                    planner.showGoalIndexCard();    
                    break;

                case "Project":
                    planner.showProjectIndexCard();
                    break;

                case "Task":
                    planner.showTaskIndexCard();
                    break;
                    
                case "Subtask":
                    planner.showSubtaskIndexCard();
                    break;
            }
        }
        else {
            indexCardButton.setButtonText("Show Index Card");
            showing = false;
		}
    });
}
