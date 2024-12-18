import { Planner } from 'src/core/planner/planner';

//TODO Should I move this into the planner
export function indexCardButtonHandler(source: string, el: HTMLElement, planner: Planner): void {

    // Create the button element along with a div element that will contain the form
	// when the button is pressed
	const button: HTMLButtonElement = document.createElement('button');
	const div: HTMLDivElement = document.createElement('div');
	div.id = "form-placeholder";

	// Add the button and the div to the acctive document
	button.textContent = "Show Index Card";
	button.id = 'index-card-button'
	el.appendChild(button);
	el.appendChild(div);

	// Add an event handler for when the button is pressed
	button.addEventListener('click', async () => {
        if (button.textContent?.startsWith("Show")){

            // Toggle the nature of the button
            button.textContent = "Hide Index Card"

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
            button.textContent = "Show Index Card";
            el.empty();
		}
    })
}   
