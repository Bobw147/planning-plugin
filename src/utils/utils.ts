// Credits go to SilentVoid13's Templater PlugIn: https://github.com/SilentVoid13/Templater

import {
    App, CachedMetadata, FrontMatterCache, TAbstractFile, TFile, TFolder, Vault
} from 'obsidian';
import { fieldNames } from 'src/core/base-classes/index-card';
import { IDictionary } from 'src/core/types/types';

export function arraymove<T>(
    arr: T[],
    fromIndex: number,
    toIndex: number
): void {
    if (toIndex < 0 || toIndex === arr.length) {
        return;
    }
    const element = arr[fromIndex];
    arr[fromIndex] = arr[toIndex];
    arr[toIndex] = element;
}

export function arraycopy<T>(source: T): T {
    return JSON.parse(JSON.stringify(source)) as typeof source
}

export async function createFolder(vault: Vault, path: string){
    let vaultFolder = "";

    const folders: string[] = path.split('/');
    folders.forEach(async folder => {
        vaultFolder = (vaultFolder == "") ? folder : vaultFolder + '/' + folder;
        if (vault.getFolderByPath(vaultFolder) == null){
            await vault.createFolder(vaultFolder);
        }
    });
}

export function dateFormatter(date: Date): string {
    const splitDate: string = date.toISOString().split("T")[0];
    return (splitDate != "1970-01-01") ? splitDate : "";
} 

export function flattenedTags(userTags: string[]) : string {
    const testArray: string[] = ["#mytag", "#region", "#endregion" ];
    const flattened: string =  testArray.flat().join(", ");
    return flattened;
}

export function assignTagOptions(selector: HTMLSelectElement, options: string[]){
    options.forEach((option) => {
        const optionElement = document.createElement('option') as HTMLOptionElement;
        optionElement.text = option;
        selector.add(optionElement);
    })
}

export function assignNameOptions(selector: HTMLSelectElement, app: App, rootPath: string, searchTag: string): void {
    const rootFolder: TFolder | null = app.vault.getFolderByPath(rootPath);
    
    if (rootFolder == null)
        return;
    
    Vault.recurseChildren(rootFolder, (child:TAbstractFile) => {
        // Make sure what we have is a file and not a folder
        if (child instanceof TFolder)
            return;
        if (child instanceof TFile) {
            // Get the frontmatter for the file
            const cache: CachedMetadata | null = app.metadataCache.getCache((child.path));
            const frontmatter: FrontMatterCache | undefined = cache?.frontmatter as IDictionary<string>;
            if (frontmatter[fieldNames.IDENT_TAG_FIELD] == searchTag) {
                const option = document.createElement('option');
                option.text = frontmatter[fieldNames.NAME_FIELD];
                selector.add(option);
            }
        }
    });
}