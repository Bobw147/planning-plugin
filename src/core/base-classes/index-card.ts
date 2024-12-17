import { FileManager, FrontMatterCache, TFile } from 'obsidian';
import { arraycopy } from 'src/utils/utils';

import { UserTagError } from '../exceptions/exceptions';
import { IPlanningIndexCard } from '../types/interfaces/i-planning-index-card';

export const fieldNames = {
    NAME_FIELD: "plname",
    PARENT_FIELD: "plparent",
    CATEGORY_TAG_FIELD: "plcategory",
    IDENT_TAG_FIELD: "plidentTag",
    STATUS_TAG_FIELD: "plstatusTagField",
    TARGET_DATE_FIELD: "pltargetDate",
    EXPECTED_DATE_FIELD: "plexpectedDateField",
    COMPLETED_DATE_FIELD: "plcompletedDateField",
    USER_TAGS_FIELD: "puserTags"
}

export abstract class PlanningIndexCard implements IPlanningIndexCard {
    private _name: string;
    private _parent: string;
    private _categoryTag: string;
    private _identTag: string;
    private _statusTag: string;
    private _targetDate: Date | null;
    private _expectedDate: Date | null;
    private _completedDate: Date | null;
    private _userTags: string[];

    constructor(identTag: string) {
        this._name = "";
        this._parent = "";
        this._categoryTag = "";
        this._identTag = identTag;
        this._statusTag = "";
        this._targetDate = null;
        this._expectedDate = null;
        this._completedDate = null;
        this._userTags = [];
    }

    async load(fileManager: FileManager, file: TFile): Promise<void> {
        await fileManager.processFrontMatter(file, (frontMatter: FrontMatterCache) => {
            if (frontMatter) {
                this.name = frontMatter[fieldNames.NAME_FIELD];
                this.parent = frontMatter[fieldNames.PARENT_FIELD];
                this.categoryTag = frontMatter[fieldNames.CATEGORY_TAG_FIELD];
                this.statusTag = frontMatter[fieldNames.STATUS_TAG_FIELD];
                this.targetDate = new Date(frontMatter[fieldNames.TARGET_DATE_FIELD]);
                this.expectedDate = new Date(frontMatter[fieldNames.EXPECTED_DATE_FIELD]);
                this.completedDate = new Date(frontMatter[fieldNames.COMPLETED_DATE_FIELD]);
                this.userTags = frontMatter[fieldNames.USER_TAGS_FIELD]; 
            }
        });
    }

    async save(fileManager: FileManager, file: TFile): Promise<void>
    {
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter) {
                frontMatter[fieldNames.NAME_FIELD] = this.name;
                frontMatter[fieldNames.PARENT_FIELD] = this.parent;
                frontMatter[fieldNames.IDENT_TAG_FIELD] = this.identTag;
                frontMatter[fieldNames.CATEGORY_TAG_FIELD] = this.categoryTag;
                frontMatter[fieldNames.STATUS_TAG_FIELD] = this.statusTag;
                frontMatter[fieldNames.TARGET_DATE_FIELD] = this.targetDate;
                frontMatter[fieldNames.EXPECTED_DATE_FIELD] = this.expectedDate;
                frontMatter[fieldNames.COMPLETED_DATE_FIELD] = this.completedDate;
                frontMatter[fieldNames.USER_TAGS_FIELD] = this.userTags;
            }
        });
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get parent(): string{
        return this._parent;
    }

    set parent(value: string) {
        this._parent= value;
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
   
    protected set identTag(value: string) {
        this._identTag = (this._validateTag(value, "#planning/")) ? value : "";
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
