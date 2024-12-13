import { FileManager, FrontMatterCache, TFile } from 'obsidian';

import { PlanningIndexCard } from '../base-classes/index-card';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { identTags } from '../types/types';

const taskFieldNames = {
    PARENT_PROJECT: "plparent"
}

export class TaskIndexCard extends PlanningIndexCard implements ITaskIndexCard {
    private _parentProject: string;

    constructor(){
        super(identTags.PLANNING_TASK);
        this._parentProject = "";
    }

    async load(frontmatter:FrontMatterCache): Promise<void> {
        super.load(frontmatter);
        this.parentProject = frontmatter[taskFieldNames.PARENT_PROJECT];
    }

    async save(filemanager: FileManager, file: TFile, identTag?: string) : Promise<void> {
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
