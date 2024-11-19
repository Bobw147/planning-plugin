import { MarkdownPostProcessorContext, Plugin } from 'obsidian';
import { DEFAULT_SETTINGS, Settings, PlanningSettingsTab } from 'src/settings/Settings';
import { CommandHandler } from './handlers/command_handlers';
import { Planner } from './core/planner';
import { goalIndexForm, populateGoalIndexForm } from './core/forms/goalIndexForm';
import { newGoalForm } from './core/forms/newGoalForm';
import { TFile } from 'obsidian';

  export default class PlanningPlugin extends Plugin {
	public settings: Settings;
	public planner: Planner;
	public command_handler: CommandHandler;

	async onload(): Promise<void> {
		await this.load_settings();

		this.planner = new Planner(this);

		// This creates an icon in the left ribbon.
		const ribbonGoalIconEl = this.addRibbonIcon('goal', 'Goal', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			this.planner.create_goal();
		});
		const ribbonProjectIconEl = this.addRibbonIcon('target', 'Project', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			this.planner.create_project();
		});
		const ribbonTaskIconEl = this.addRibbonIcon('circle-check', 'Task', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			this.planner.create_task();
		});
		// Perform additional things with the ribbon
		ribbonGoalIconEl.addClass('my-plugin-ribbon-class');
		ribbonProjectIconEl.addClass('my-plugin-ribbon-class');
		ribbonTaskIconEl.addClass('my-plugin-ribbon-class');

		// This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		const statusBarItemEl = this.addStatusBarItem();
		statusBarItemEl.setText('Status Bar Text');

		// Add the command handlers to the command palette
		this.command_handler = new CommandHandler(this).setup();

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new PlanningSettingsTab(this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		
		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));

		this.registerMarkdownCodeBlockProcessor("IndexCard", (source: string, el: HTMLElement, ctk: MarkdownPostProcessorContext) => {
			// We only want to add the button once so check to see if it has already been inserted
			if (document.getElementById('indexCardButton') == null)
			{
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
				button.addEventListener('click', () => {
					if (button.textContent?.startsWith("Show")){

						// Toggle the nature of the button
						button.textContent = "Hide Index Card"

						const file = this.app.workspace.getActiveFile();
						switch (source.trim()) {
							case "Goal" :// Display the form and then add the index card data
								div.innerHTML = goalIndexForm();
								populateGoalIndexForm(this.app.fileManager, file as TFile);
								break;

							case "Project":
								break;

							case "Task":
								break;
						}
					}
					else {
						button.textContent = "Show Index Card";
						div.innerHTML = ""
					}
				})
			}
		})
	}

    async save_settings(): Promise<void> {
        await this.saveData(this.settings);
    }

    async load_settings(): Promise<void> {
        this.settings = Object.assign(
            {},
            DEFAULT_SETTINGS,
            await this.loadData()
        );
    }
}
