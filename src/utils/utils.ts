// Credits go to SilentVoid13's Templater PlugIn: https://github.com/SilentVoid13/Templater

import { json } from "stream/consumers";

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
