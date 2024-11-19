import  PlanningPlugin from "src/main";
import { PluginSettingTab, Setting }  from "obsidian";
import { FolderSuggest } from "./suggesters/FolderSuggester";
import { defaultStatusTags } from "src/core/types";
import { defaultCategoryTags } from "src/core/types";
import { arraycopy, arraymove } from "src/utils/utils";

export interface Settings {
	goalsFolder: string;
	projectsFolder: string;
	tasksFolder: string;
    statusTags: typeof defaultStatusTags;
    categoryTags: typeof defaultCategoryTags;
}
 
export const DEFAULT_SETTINGS: Settings = {
	goalsFolder: 'Goals',
	projectsFolder: 'Projects',
	tasksFolder: 'Tasks',
    statusTags: defaultStatusTags,
    categoryTags: defaultCategoryTags,
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
        this.add_mode_settings();
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

    _add_mode_setting(mode_entry:string, index:number): void {
        new Setting(this.containerEl)
        .addText((input_instance) => {
            input_instance.setValue(mode_entry)
            input_instance.onChange((value: string) => {
                this.plugin.settings.categoryTags[index] = value;
                this.plugin.save_settings();
            })
        })
        .addExtraButton((cb) => {
            cb.setIcon("up-chevron-glyph")
            .setTooltip("Move up")
            .onClick(() => {
                arraymove(
                    this.plugin.settings.categoryTags,
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
                    this.plugin.settings.categoryTags,
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
                    this.plugin.settings.categoryTags.splice(
                        index,
                        1
                    );
                    this.plugin.save_settings();
                    this.display();
                });
        })
    }

    _add_status_setting(status_entry: string, index: number): void {
        new Setting(this.containerEl).setClass("status-input")
        .addText((input_instance) => {
            input_instance.setValue(status_entry)
            .onChange((value: string) => {
                this.plugin.settings.statusTags[index] = value;
                this.plugin.save_settings();
            })
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

    add_status_settings(): void {
        const status_tag_settings: Setting = new Setting(this.containerEl)
            .setName("Goal/Project/Task Status Tag Types").setHeading()
            .setDesc("Used to show the current progress status")
    
            this.plugin.settings.statusTags.forEach(
                (status_entry, index) => {
                    this._add_status_setting(status_entry, index);
                }
            )
        status_tag_settings.addButton((cb) => {
            cb.setButtonText("Restore Defaults")
            .onClick(() => {
                if (window.confirm("Confirm that you want to restore defaults.\nThis action cannot be undone.")) {
                    this.plugin.settings.statusTags = arraycopy(DEFAULT_SETTINGS.statusTags);
                    this.plugin.save_settings();
                    this.display();
                }
            })
        })
        status_tag_settings.addButton((cb) => {
            cb.setButtonText("Add new status")
            .onClick(() => {
                this.plugin.settings.statusTags.push("#status/" + name);
                this.plugin.save_settings();
                this.display();
               })
        })
    }

    add_mode_settings(): void {
        const mode_tag_settings: Setting = new Setting(this.containerEl)
            .setName("Life areas your goals apply to").setHeading()
            .setDesc("")
            this.plugin.settings.categoryTags.forEach(
                (mode_entry, index) => {
                    this._add_mode_setting(mode_entry, index);
                }
            )
        mode_tag_settings.addButton((cb) => {
            cb.setButtonText("Restore Defaults")
            .onClick(() => {
                if (window.confirm("Confirm that you want to restore defaults.\nThis action cannot be undone.")) {
                    this.plugin.settings.categoryTags = arraycopy(DEFAULT_SETTINGS.categoryTags);
                    this.plugin.save_settings();
                    this.display();
                }
            })
        })
        mode_tag_settings.addButton((cb) => {
            cb.setButtonText("Add new mode")
            .onClick(() => {
                this.plugin.settings.categoryTags.push("#planning/" + name);
                this.plugin.save_settings();
                this.display();
               })
        })
    }
}