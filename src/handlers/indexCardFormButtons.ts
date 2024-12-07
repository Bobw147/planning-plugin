import { App, TFile } from "obsidian";
import { Settings } from "src/settings/Settings";
import { CreateGoalForm } from "src/core/goals/goalIndexCardForm";
import { projectIndexCardForm, populateProjectIndexCardForm } from "src/core/projects/projectIndexCardForm";
import { taskIndexCardForm, populateTaskIndexCardForm } from "src/core/tasks/taskIndexCardForm";
import { ICreateICForm } from "src/core/types/interfaces";
import { Planner } from "src/core/planner";
import { DisplayMode } from "src/core/baseclasses/genericPlanningForm"; //TODO move DisplayMode to types.ts?

//TODO Should I move this into the planner
export function indexCardButtonHandler(app: App, source: string, el: HTMLElement, settings: Settings, planner: Planner): void {

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

            const file = app.workspace.getActiveFile();
//            let goalForm: ICreateICForm;
            switch (source.trim()) {
                case "Goal" : // Display the form and then add the index card data
                    planner.create_goal(DisplayMode.INDEX_CARD_MODE);    
//                    goalForm = new CreateGoalForm();
//                    goalForm.buildForm(div);
//                    await goalForm.configureForIndexCardMode(settings, app.fileManager, file as TFile);
                    break;

                case "Project":
                    div.innerHTML = projectIndexCardForm();
                    populateProjectIndexCardForm(app.fileManager, file as TFile);
                    break;

                case "Task":
                    div.innerHTML = taskIndexCardForm();
                    populateTaskIndexCardForm(app.fileManager, file as TFile);
                    break;		    
            }
        }
        else {
            button.textContent = "Show Index Card";
            el.empty();
		}
    })
}   
