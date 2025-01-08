import { FileManager, TFile } from 'obsidian';

import { UUID } from '../types';

export interface IPlanningIndexCard{

    load(fileManager: FileManager, file: TFile): Promise<void>;
    save(fileManager: FileManager, file: TFile): Promise<void>;

    get refId(): UUID;

    get file(): TFile | null;
    set file(value: TFile | null);

    get name(): string;
    set name(value: string);

    get categoryTag(): string;
    set categoryTag(value: string);

    get identTag(): string;
    set identTag(value: string);

    get statusTag(): string;
    set statusTag(value: string);

    get targetDate(): Date | null;
    set targetDate(value: Date | null);

    get expectedDate(): Date | null;
    set expectedDate(value: Date | null);

    get completedDate(): Date | null;
    set completedDate(value: Date | null);

    get upstreamLinks(): UUID[];

    get downStreamLinks():UUID[];

    get userTags(): string[];
    set userTags(value: string[]);
}
