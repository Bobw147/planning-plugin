import { App } from 'obsidian';
import { DisplayMode } from 'src/core/base-classes/generic-planning-form'; //TODO move DisplayMode to types.ts?
import { Planner } from 'src/core/planner';
import { Settings } from 'src/settings/Settings';

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

//            const file: TFile = app.workspace.getActiveFile();
            switch (source.trim()) {
                case "Goal" : // Display the form and then add the index card data
                    planner.create_goal(DisplayMode.INDEX_CARD_MODE);    
//                    goalForm = new CreateGoalForm();
//                    goalForm.buildForm(div);
//                    await goalForm.configureForIndexCardMode(settings, app.fileManager, file as TFile);
                    break;

                case "Project":
                    planner.create_project(DisplayMode.INDEX_CARD_MODE);
//                    div.innerHTML = projectIndexCardForm();
//                    populateProjectIndexCardForm(app.fileManager, file as TFile);
                    break;

                case "Task":
                    planner.create_task(DisplayMode.INDEX_CARD_MODE);
//                    div.innerHTML = taskIndexCardForm();
//                    populateTaskIndexCardForm(app.fileManager, file as TFile);
                    break;		    
            }
        }
        else {
            button.textContent = "Show Index Card";
            el.empty();
		}
    })
}   
