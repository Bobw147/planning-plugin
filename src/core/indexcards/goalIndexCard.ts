import { IPlanningIndexCard, PlanningIndexCard } from "./indexcard";
import { FrontMatterCache } from "obsidian";
import { FileManager, TFile } from "obsidian";

export class GoalIndexCard extends PlanningIndexCard implements IPlanningIndexCard {
    constructor(){
        super();
    }

    async load(frontmatter: FrontMatterCache): Promise<void> {
        super.load(frontmatter);
    }

    async save(filemanager: FileManager, file: TFile, ident?: typeof this.identTag): Promise<void> {
        super.save(filemanager, file, ident);
    }
}

