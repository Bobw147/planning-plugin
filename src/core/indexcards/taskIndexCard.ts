import { IPlanningIndexCard, PlanningIndexCard } from "./indexcard";
import { FileManager, TFile } from "obsidian";

const taskFieldNames = {
    PARENT_PROJECT: "pparentProject:"
}

export interface ITaskIndexCard extends IPlanningIndexCard {
    _parentProject: string;

    get parentProject(): string;
    set parentProject(value: string);
}

export class TaskIndexCard extends PlanningIndexCard implements ITaskIndexCard {
    _parentProject: string;

    constructor(){
        super();
        this.parentProject = "";
    }

    async load(filemanager: FileManager, file: TFile): Promise<void> {
        await filemanager.processFrontMatter(file, (frontmatter) => {
            this.parentProject = frontmatter[taskFieldNames.PARENT_PROJECT];
        });
    }

    async save(filemanager: FileManager, file: TFile, identTag?: typeof this.identTag) : Promise<void> {
        await super.save(filemanager, file, identTag);
        await filemanager.processFrontMatter(file, (frontmatter) => {
            frontmatter[taskFieldNames.PARENT_PROJECT] = this.parentProject;
        })
    }

    public get parentProject(): string {
        return this._parentProject;
    }

    public set parentProject(value: string) {
        this._parentProject = value;
    }
}
