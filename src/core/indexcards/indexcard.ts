import { arraycopy } from "src/utils/utils";
import { TFile, FileManager } from "obsidian";
import { FrontMatterCache } from "obsidian";

export const fieldNames = {
    NAME_FIELD: "pname",
    CATEGORY_TAG_FIELD: "pcategory",
    IDENT_TAG_FIELD: "pidentTag",
    STATUS_TAG_FIELD: "pstatusTagField",
    TARGET_DATE_FIELD: "ptargetDate",
    EXPECTED_DATE_FIELD: "pexpectedDateField",
    COMPLETED_DATE_FIELD: "pcompletedDateField",
    USER_TAGS_FIELD: "puserTags"
}
export interface IPlanningIndexCard{
    _name: string;
    _categoryTag: string;
    _identTag: string;
    _statusTag: string;
    _targetDate: Date | null;
    _expectedDate: Date | null;
    _completedDate: Date | null;
    _userTags: string[];

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

export class PlanningIndexCard implements IPlanningIndexCard {
    _name: string;
    _categoryTag: string;
    _identTag: string;
    _statusTag: string;
    _targetDate: Date | null;
    _expectedDate: Date | null;
    _completedDate: Date | null;
    _userTags: string[];

    constructor() {
        this._name = "";
        this._categoryTag = "";
        this._identTag = "";
        this._statusTag = "";
        this._targetDate = null;
        this._expectedDate = null;
        this._completedDate = null;
        this._userTags = [];
    }

/*    async load(filemanager: FileManager, file: TFile): Promise<void> {
        await filemanager.processFrontMatter(file, (frontmatter) => {
            this.loadf(frontmatter);
        })
    }
*/

    load(frontmatter: FrontMatterCache): void {
        this.name = frontmatter[fieldNames.NAME_FIELD];
        this.categoryTag = frontmatter[fieldNames.CATEGORY_TAG_FIELD];
        this.statusTag = frontmatter[fieldNames.STATUS_TAG_FIELD];
        this.targetDate = new Date(frontmatter[fieldNames.TARGET_DATE_FIELD]);
        this.expectedDate = new Date(frontmatter[fieldNames.EXPECTED_DATE_FIELD]);
        this.completedDate = new Date(frontmatter[fieldNames.COMPLETED_DATE_FIELD]);
        this.userTags = frontmatter[fieldNames.USER_TAGS_FIELD];
    }

    async save(filemanager: FileManager, file: TFile, identTag?: typeof this.identTag): Promise<void>
    {
        await filemanager.processFrontMatter(file, (frontmatter) => {
            frontmatter[fieldNames.NAME_FIELD] = this.name;
            frontmatter[fieldNames.IDENT_TAG_FIELD] = (identTag != null) ? identTag : null;
            frontmatter[fieldNames.CATEGORY_TAG_FIELD] = this.categoryTag;
            frontmatter[fieldNames.STATUS_TAG_FIELD] = this.statusTag;
            frontmatter[fieldNames.TARGET_DATE_FIELD] = this.targetDate;
            frontmatter[fieldNames.EXPECTED_DATE_FIELD] = this.expectedDate;
            frontmatter[fieldNames.COMPLETED_DATE_FIELD] = this.completedDate;
            frontmatter[fieldNames.USER_TAGS_FIELD] = this.userTags;
        }
    )}


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get categoryTag(): string {
        return this._categoryTag;
    }

    set categoryTag(value: string) {
        this._categoryTag = (this._validateTag(value, "#planning/")) ? value : "";
    }

    get identTag(): string {
        return this._identTag;
    }

    set identTag(value: string) {
        this._identTag = (this._validateTag(value, "#status/")) ? value : "";
    }

    get statusTag(): string {
        return this._statusTag;
    }

    set statusTag(value: string) {
        this._statusTag = (this._validateTag(value, "#status/")) ? value : "";
    }

    get targetDate(): Date | null {
        return this._targetDate;
    }

    set targetDate(value: Date | null)
    {
        this._targetDate = value;
    }

    get expectedDate(): Date | null {
        return this._expectedDate;
    }

    set expectedDate(value: Date | null) {
        this._expectedDate = value;
    }

    get completedDate(): Date | null {
        return this._completedDate;
    }

    set completedDate(value: Date | null) {
        this._completedDate = value;
    }

    get userTags(): string[] {
        return arraycopy(this._userTags);
    }

    set userTags(value: string[]) {
        value.forEach(element => {
            if (! element.startsWith("#")){
                this._validateTag(element, "#")
            }
            else {
                throw new UserTagError();
            }
        });
        this._userTags = arraycopy(value);
    }

    _validateTag(tag:string, mustHave: string | null): boolean {
        if (tag === undefined) return false;
        if (tag == "") return true;
        if (mustHave != null && tag.startsWith(mustHave)) return true
        return false;
    }
}
