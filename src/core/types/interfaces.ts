import { FileManager, TFile } from "obsidian";
import { Settings } from "src/settings/Settings";

export interface ICreateICForm {
    buildForm(parent: HTMLElement): void;
    configureForCreateMode(settings: Settings): void;
    configureForIndexCardMode(settings: Settings, fileManager: FileManager, file: TFile): void;
}
