import { PlanningIndexCard } from "../base-classes/index-card";
import { IPlanningIndexCard } from "../types/interfaces/i-planning-index-card";
import { FileManager, FrontMatterCache, TFile } from "obsidian";
import { identTags } from "../types/types";

const projectFieldNames = {
    PARENT_GOAL: "plparent"
}

export interface IProjectIndexCard extends IPlanningIndexCard{
    get parentGoal() : string;
    set parentGoal(value: string);
}

export class ProjectIndexCard extends PlanningIndexCard implements IProjectIndexCard {
    private _parentGoal: string;
    
    constructor() {
        super(identTags.PLANNING_GOAL);
        this._parentGoal = "";
    }

    async load(frontmatter: FrontMatterCache): Promise<void> {
        super.load(frontmatter);
        this.parentGoal = frontmatter[projectFieldNames.PARENT_GOAL];
    }

    async save(filemanager: FileManager, file: TFile, identTag?: typeof this.identTag) : Promise<void> {
        await super.save(filemanager, file, identTag);
        await filemanager.processFrontMatter(file, (frontmatter) => {
            //TODO The following line isnow incorrect
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
