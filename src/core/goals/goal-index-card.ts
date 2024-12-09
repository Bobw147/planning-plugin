import { IPlanningIndexCard, PlanningIndexCard } from "../base-classes/index-card";
import { FrontMatterCache } from "obsidian";
import { FileManager, TFile } from "obsidian";
import { identTags } from "../types/types";

export class GoalIndexCard extends PlanningIndexCard implements IPlanningIndexCard {
    constructor(){
        super();
        super.identTag = identTags.PLANNING_GOAL;
    }

    async load(frontmatter: FrontMatterCache): Promise<void> {
        super.load(frontmatter);
    }

    async save(filemanager: FileManager, file: TFile, ident?: typeof this.identTag): Promise<void> {
        super.save(filemanager, file, ident);
    }
}

