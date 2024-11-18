import { IPlanningIndexCard, PlanningIndexCard } from "./indexcard";
import { FileManager, TFile } from "obsidian";


const projectFieldNames = {
    PARENT_GOAL: "pparentGoal:"
}

export interface IProjectIndexCard extends IPlanningIndexCard{
    _parentGoal: string;

    get parentGoal() : string;
    set parentGoal(value: string);
}

export class ProjectIndexCard extends PlanningIndexCard implements IProjectIndexCard {
    _parentGoal: string;;
    
    constructor() {
        super();
        this._parentGoal = "";
    }

    async load(filemanager: FileManager, file: TFile): Promise<void> {
        await super.load(filemanager, file);
        await filemanager.processFrontMatter(file, (frontmatter) => {
            this.parentGoal = frontmatter[projectFieldNames.PARENT_GOAL];
        })
    }

    async save(filemanager: FileManager, file: TFile, identTag?: typeof this.identTag) : Promise<void> {
        await super.save(filemanager, file, identTag);
        await filemanager.processFrontMatter(file, (frontmatter) => {
            frontmatter[projectFieldNames.PARENT_GOAL] = this.parentGoal;
        });
    }

    public get parentGoal(): string {
        return this._parentGoal;
    }

    public set parentGoal(value: string)  {
        this._parentGoal = value;
    }
}
