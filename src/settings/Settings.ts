import  PlanningPlugin from "src/main";
import { PluginSettingTab, Setting }  from "obsidian";
import { FolderSuggest } from "./suggesters/FolderSuggester";
import { status_tag_type } from "src/core/tags";
import { mode_tag_type } from "src/core/tags";
import { ident_tag_type } from "src/core/tags";
import { arraycopy, arraymove } from "src/utils/utils";

// Remember to rename these classes and interfaces!
export interface Settings {
	goalsFolder: string;
	projectsFolder: string;
	tasksFolder: string;
    statusTags: typeof status_tag_type;
}
 
export const DEFAULT_SETTINGS: Settings = {
	goalsFolder: 'Goals',
	projectsFolder: 'Projects',
	tasksFolder: 'Tasks',
    statusTags: status_tag_type,
}

export class PlanningSettingsTab extends PluginSettingTab {
	constructor(private plugin: PlanningPlugin) {
		super(plugin.app, plugin);
    }

	display(): void {
		const {containerEl} = this;

		this.containerEl.empty();
        this.add_goals_folder_setting();
        this.add_projects_folder_setting();
        this.add_tasks_folder_setting();
        this.add_status_settings();
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

    _add_status_setting(status_entry: string, index: number): void {
        const name = new Setting(this.containerEl)
        .addText((input) => {
            input.setValue(status_entry)
        })
        .addExtraButton((cb) => {
            cb.setIcon("up-chevron-glyph")
            .setTooltip("Move up")
            .onClick(() => {
                arraymove(
                    this.plugin.settings.statusTags,
                    index,
                    index - 1
                );
                this.plugin.save_settings();
                this.display();
            })
        })
        .addExtraButton((cb) => {
            cb.setIcon("down-chevron-glyph")
            .setTooltip("Move down")
            .onClick(() => {
                arraymove(
                    this.plugin.settings.statusTags,
                    index,
                    index + 1
                );
                this.plugin.save_settings();
                this.display();
            })
        })
        .addExtraButton((cb) => {
            cb.setIcon("cross")
                .setTooltip("Delete")
                .onClick(() => {
                    this.plugin.settings.statusTags.splice(
                        index,
                        1
                    );
                    this.plugin.save_settings();
                    this.display();
                });
        })

    }

    add_status_settings(): void{
        const status_tag_settings: Setting = new Setting(this.containerEl)
            .setName("Group/Project/Task Status Tag Types").setHeading()
            .setDesc("Used to show the current progress status")

            this.plugin.settings.statusTags.forEach(
                (status_entry, index) => {
                    this._add_status_setting(status_entry, index);
                }
            )
        status_tag_settings.addButton((cb) => {
            cb.setButtonText("Restore Defaults")
            .onClick(() => {
                var defaults = arraycopy(DEFAULT_SETTINGS.statusTags);
                this.plugin.settings.statusTags = defaults;
                this.plugin.save_settings();
                this.display();
            })
        })
        status_tag_settings.addButton((cb) => {
            cb.setButtonText("Add new status")
            .onClick(() => {
                this.display();
            })
        })
    }
}



