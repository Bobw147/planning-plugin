import { App, MarkdownPostProcessorContext, Plugin, PluginManifest } from 'obsidian';
import { DEFAULT_SETTINGS, PlanningSettingsTab, Settings } from 'src/settings/Settings';

import { DisplayMode } from './core/base-classes/generic-planning-form';
import { Planner } from './core/planner';
import { CommandHandler } from './handlers/command-handlers';
import { indexCardButtonHandler } from './handlers/index-card-form-buttons';

  export default class PlanningPlugin extends Plugin {
	public settings: Settings;
	public planner: Planner;
	public command_handler: CommandHandler;

	constructor(app: App, manifest: PluginManifest)
	{
		super(app, manifest);
		this.settings = DEFAULT_SETTINGS;
		this.planner = new Planner(this);
		this.command_handler = new CommandHandler(this);
	}
	
	async onload(): Promise<void> {
		await this.load_settings();

		// This creates an icon in the left ribbon.
		const ribbonGoalIconEl = this.addRibbonIcon('goal', 'Goal', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			this.planner.create_goal(DisplayMode.CREATE_MODE);
		});
		const ribbonProjectIconEl = this.addRibbonIcon('target', 'Project', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			this.planner.create_project(DisplayMode.CREATE_MODE);
		});
		const ribbonTaskIconEl = this.addRibbonIcon('circle-check', 'Task', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			this.planner.create_task(DisplayMode.CREATE_MODE);
		});
		// Perform additional things with the ribbon
		ribbonGoalIconEl.addClass('my-plugin-ribbon-class');
		ribbonProjectIconEl.addClass('my-plugin-ribbon-class');
		ribbonTaskIconEl.addClass('my-plugin-ribbon-class');

		// This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		const statusBarItemEl = this.addStatusBarItem();
		statusBarItemEl.setText('Status Bar Text');

		// Add the command handlers to the command palette
		this.command_handler.setup();

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new PlanningSettingsTab(this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		this.registerMarkdownCodeBlockProcessor("IndexCard", (source: string, el: HTMLElement, ctk: MarkdownPostProcessorContext) => {
			indexCardButtonHandler(this.app, source, el, this.settings, this.planner);
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
