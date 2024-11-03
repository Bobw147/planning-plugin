import PlanningPlugin from "src/main";
import { PluginSettingTab, Setting }  from "obsidian";
import { FolderSuggest } from "./suggesters/FolderSuggester";

// Remember to rename these classes and interfaces!
export interface Settings {
	goalsFolder: string;
	projectsFolder: string;
	tasksFolder: string;
}

export const DEFAULT_SETTINGS: Settings = {
	goalsFolder: 'Goals',
	projectsFolder: 'Projects',
	tasksFolder: 'Tasks',
}

export class PlanningSettingsTab extends PluginSettingTab {
	constructor(private plugin: PlanningPlugin) {
		super(plugin.app, plugin);
	}

	display(): void {
		const {containerEl} = this;

		this.containerEl.empty();
        this.add_goals_folder_setting()
        this.add_projects_folder_setting()
        this.add_tasks_folder_setting()
    }

    add_goals_folder_setting() : void {
		new Setting(this.containerEl)
			.setName('Goals folder location')
			.setDesc('Folder in which to store Goals')
            .addSearch((cb) => {
                new FolderSuggest(this.app, cb.inputEl);
                cb.setPlaceholder("Example: folder1/folder2")
                    .setValue(this.plugin.settings.goalsFolder)
                    .onChange((new_folder) => {
                        this.plugin.settings.goalsFolder = new_folder;
                        this.plugin.save_settings();
                    });
                // @ts-ignore
                cb.containerEl.addClass("planning_search");
            });
	}

    add_projects_folder_setting() : void {
		new Setting(this.containerEl)
			.setName('Projects folder location')
			.setDesc('Folder in which to store Projects')
            .addSearch((cb) => {
                new FolderSuggest(this.app, cb.inputEl);
                cb.setPlaceholder("Example: folder1/folder2")
                    .setValue(this.plugin.settings.projectsFolder)
                    .onChange((new_folder) => {
                        this.plugin.settings.projectsFolder = new_folder;
                        this.plugin.save_settings();
                    });
                // @ts-ignore
                cb.containerEl.addClass("planning_search");
            });
	}


    add_tasks_folder_setting() : void {
		new Setting(this.containerEl)
			.setName('Tasks folder location')
			.setDesc('Folder in which to store Tasks')
            .addSearch((cb) => {
                new FolderSuggest(this.app, cb.inputEl);
                cb.setPlaceholder("Example: folder1/folder2")
                    .setValue(this.plugin.settings.tasksFolder)
                    .onChange((new_folder) => {
                        this.plugin.settings.tasksFolder = new_folder;
                        this.plugin.save_settings();
                    });
                // @ts-ignore
                cb.containerEl.addClass("planning_search");
            });
	}
}
