import { App, TFile, Settings } from "obsidian";
import { CreateGoalForm } from "src/core/forms/goalIndexCardForm";
import { projectIndexCardForm, populateProjectIndexCardForm } from "src/core/forms/projectIndexCardForm";
import { taskIndexCardForm, populateTaskIndexCardForm } from "src/core/forms/taskIndexCardForm";
import { ICreateICForm } from "src/core/types/interfaces";

//TODO Should I move this into the planner
export function indexCardButtonHandler(app: App, source: string, el: HTMLElement, settings: Settings): void {

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
            let goalForm: ICreateICForm;
            switch (source.trim()) {
                case "Goal" : // Display the form and then add the index card data
                    goalForm = new CreateGoalForm();
                    goalForm.buildForm(div);
                    await goalForm.configureForIndexCardMode(settings, app.fileManager, file as TFile);
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
