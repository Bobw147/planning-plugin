// Credits go to SilentVoid13's Templater PlugIn: https://github.com/SilentVoid13/Templater

import {
    App, CachedMetadata, FrontMatterCache, TAbstractFile, TFile, TFolder, Vault
} from 'obsidian';
import { fieldNames } from 'src/core/base-classes/planning-index-card';
import { emptyString, IDictionary } from 'src/core/types/types';

/* Arraye helpers */
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

/* Folder helpers */
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

const datePart: number = 0;
const dateTimeSeparator = "T";
const referenceDate = "1970-01-01";
const commaSpace = ", ";

/* Date helpers */
export function dateFormatter(date: Date): string {
    const splitDate: string = date.toISOString().split(dateTimeSeparator)[datePart];
    return (splitDate != referenceDate) ? splitDate : emptyString;
} 

/* Tag helpers */
export function flattenedTags(userTags: string[]) : string {
    const testArray: string[] = ["#mytag", "#region", "#endregion" ];
    const flattened: string =  testArray.flat().join(commaSpace);
    return flattened;
}

export function getNameOptions(app: App, rootPath: string, searchTag: string): string[] {
    const options: string[] = [];
    const rootFolder: TFolder | null = app.vault.getFolderByPath(rootPath);
    
    if (rootFolder == null)
        return options;
    
    Vault.recurseChildren(rootFolder, (child:TAbstractFile) => {
        // Make sure what we have is a file and not a folder. The latter is ignored
        if (child instanceof TFile) {
            // Get the frontmatter for the file
            const cache: CachedMetadata | null = app.metadataCache.getCache((child.path));
            const frontmatter: FrontMatterCache | undefined = cache?.frontmatter as IDictionary<string>;
            if (frontmatter[fieldNames.IDENT_TAG_FIELD] == searchTag) {
                options.push(frontmatter[fieldNames.NAME_FIELD]);
            }
        }
    });
    return options;
}