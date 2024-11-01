import { App, Modal, Plugin } from 'obsidian';
import { DEFAULT_SETTINGS, Settings, PlanningSettingsTab } from 'src/settings/Settings';
import { CommandHandler } from './handlers/command_handlers';
import { Planner } from './core/planner';

export default class PlanningPlugin extends Plugin {
	public settings: Settings;
	public planner: Planner;
	public command_handler: CommandHandler;

	async onload(): Promise<void> {
		await this.load_settings();

		this.planner = new Planner(this);
		await this.planner.setup();

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

		/*
		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'open-planning-modal-simple',
			name: 'Open planning modal (simple)',
			callback: () => {
				new SampleModal(this.app).open();
			}
		});
		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: 'sample-editor-command',
			name: 'Sample editor command',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				console.log(editor.getSelection());
				editor.replaceSelection('Sample Editor Command');
			}
		});
		// This adds a complex command that can check whether the current state of the app allows execution of the command
		this.addCommand({
			id: 'open-sample-modal-complex',
			name: 'Open sample modal (complex)',
			checkCallback: (checking: boolean) => {
				// Conditions to check
				const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (markdownView) {
					// If checking is true, we're simply "checking" if the command can be run.
					// If checking is false, then we want to actually perform the operation.
					if (!checking) {
						new SampleModal(this.app).open();
					}

					// This command will only show up in Command Palette when the check function returns true
					return true;
				}
			}
		});
*/
		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new PlanningSettingsTab(this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload(): void {

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

class SampleModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const {contentEl} = this;
		contentEl.setText('Woah!');
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}
