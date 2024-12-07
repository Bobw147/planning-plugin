import { IPlanningIndexCard, PlanningIndexCard } from "../baseclasses/indexcard";
import { FileManager, FrontMatterCache, TFile } from "obsidian";
import { identTags } from "../types/types";

const projectFieldNames = {
    PARENT_GOAL: "pparentGoal:"
}

export interface IProjectIndexCard extends IPlanningIndexCard{
    _parentGoal: string;

    get parentGoal() : string;
    set parentGoal(value: string);
}

export class ProjectIndexCard extends PlanningIndexCard implements IProjectIndexCard {
    _parentGoal: string;
    
    constructor() {
        super();
        this._parentGoal = "";
        this._identTag = identTags.PLANNING_PROJECT;
    }

    async load(frontmatter: FrontMatterCache): Promise<void> {
        super.load(frontmatter);
        this.parentGoal = frontmatter[projectFieldNames.PARENT_GOAL];
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
