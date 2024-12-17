import { FileManager, TFile } from 'obsidian';

export interface IPlanningIndexCard{

    load(fileManager: FileManager, file: TFile): Promise<void>;
    save(fileManager: FileManager, file: TFile): Promise<void>;

    get name(): string;
    set name(value: string);

    get parent(): string;
    set parent(value: string);

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

    get userTags(): string[];
    set userTags(value: string[]);
}
