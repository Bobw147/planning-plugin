// Credits go to SilentVoid13's Templater PlugIn: https://github.com/SilentVoid13/Templater

import { Vault } from "obsidian";

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
