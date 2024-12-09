import { FileManager, FrontMatterCache, TFile } from "obsidian";

export interface IPlanningIndexCard{

    load(frontmatter: FrontMatterCache): void;
    save(filemanager: FileManager, file: TFile): void;

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

    get userTags(): string[];
    set userTags(value: string[]);
}
