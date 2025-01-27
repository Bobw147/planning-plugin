import { FileManager, TFile } from 'obsidian';
import { PlanningIndexCard } from 'src/core/planner/planning-index-card';
import { refId, UUID } from 'src/utils/uuid-generator';

export interface IPlanningIndexCard{

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

    get targetDate(): Date;
    set targetDate(value: Date);

    get expectedDate(): Date;
    set expectedDate(value: Date);

    get completedDate(): Date;
    set completedDate(value: Date);

    get upstreamLinks(): UUID[];

    get downStreamLinks(): Record<refId, PlanningIndexCard>;

    get userTags(): string[];
    set userTags(value: string[]);

    load(fileManager: FileManager, file: TFile): Promise<void>;
    save(fileManager: FileManager, file: TFile): Promise<void>;
    resetDownstreamLinks(): void;
    updateCategoryTag(categoryTag: string): void;
    updateExpectedDate(): void;
}
