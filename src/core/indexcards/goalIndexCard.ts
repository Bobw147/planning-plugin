import { PlanningIndexCard } from "./indexcard";
import { FrontMatterCache } from "obsidian";
import { FileManager, TFile } from "obsidian";
import { identTags } from "./indexcard";

export class GoalIndexCard extends PlanningIndexCard{
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

