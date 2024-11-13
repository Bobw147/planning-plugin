import { arraycopy } from "src/utils/utils";
import { BadStatusTagError, BadModeTagError, BadIdentTagError, UserTagError } from "./exceptions/exceptions";

export interface IPlanningIndexCard{
    _name: string;
    _modeTag: string;
    _identTag: string;
    _statusTag: string;
    _targetDate: Date | null;
    _anticipatedDate: Date | null;
    _completedDate: Date | null;
    _userTags: string[];

    get name(): string;
    get modeTag(): string;
    get identTag(): string;
    get statusTag(): string;
    get targetDate(): Date | null;
    get anticipatedDate(): Date | null;
    get completedDate(): Date | null;
    get userTags(): string[];

    set name(value: string);
    set modeTag(value: string);
    set statusTag(value: string);
    set targetDate(value: Date | null);
    set anticipatedDate(value: Date | null);
    set completedDate(value: Date | null);
    set userTags(value: string[]);
}
export class PlanningIndexCard implements IPlanningIndexCard {
    _name: string;
    _modeTag: string;
    _identTag: string;
    _statusTag: string;
    _targetDate: Date | null;
    _anticipatedDate: Date | null;
    _completedDate: Date | null;
    _userTags: string[];

    constructor(){
        this._name = "";
        this._modeTag = "";
        this._identTag = "";
        this._statusTag = "";
        this._targetDate = null;
        this._anticipatedDate = null;
        this._completedDate = null;
        this._userTags = [];
        };

    get name(): string {
        return this._name;
    };

    get modeTag(): string {
        return this._modeTag;
    };

    get identTag(): string {
        return this._identTag;
    };

    get statusTag(): string {
        return this._statusTag;
    };

    get targetDate(): Date | null {
        return this._targetDate;
    };

    get anticipatedDate(): Date | null {
        return this._anticipatedDate;
    };

    get completedDate(): Date | null {
        return this._completedDate;
    };

    get userTags(): string[] {
        return this._userTags;
    };

    set name(value: string) {
        this._name = value;
    };

    set modeTag(value: string) {
        if (value.startsWith("#planning/")) {
            this._modeTag = value
        } 
        else {
            throw new BadModeTagError();
        }
    };

    set statusTag(value: string) {
        if (value.startsWith("#status/")) {
            this._modeTag = value;
        }
        else {
            throw new BadStatusTagError();
        }
    };

    set targetDate(value: Date | null)
    {
        this._targetDate = value;
    };

    set anticipatedDate(value: Date | null) {
        this._anticipatedDate = value;
    };

    set completedDate(value: Date | null) {
        this._completedDate = value;
    };

    set userTags(value: string[]) {
        value.forEach(element => {
            if (! element.startsWith("#"))
            {
                throw new UserTagError();
            }
        });
        this._userTags = arraycopy(value);
    };
}
