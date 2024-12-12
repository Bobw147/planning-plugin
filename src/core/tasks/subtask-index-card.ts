import { FileManager, FrontMatterCache, TFile } from 'obsidian';

import { PlanningIndexCard } from '../base-classes/index-card';
import { ISubtaskIndexCard } from '../types/interfaces/i-subtask-index-card';
import { identTags } from '../types/types';

const taskFieldNames = {
    PARENT_PROJECT: "plparent",
    PARENT_TASK: "plparent",
}

export class SubtaskIndexCard extends PlanningIndexCard implements ISubtaskIndexCard {
    private _parentTask: string;

    constructor(){
        super(identTags.PLANNING_TASK);
        this._parentTask = "";
    }

    async load(frontmatter:FrontMatterCache): Promise<void> {
        super.load(frontmatter);
        this.parentTask = frontmatter[taskFieldNames.PARENT_PROJECT];
    }

    async save(filemanager: FileManager, file: TFile, identTag?: typeof this.identTag) : Promise<void> {
        await super.save(filemanager, file, identTag);
        await filemanager.processFrontMatter(file, (frontmatter) => {
            frontmatter[taskFieldNames.PARENT_TASK] = this.parentTask;
        })
    }

    public get parentTask(): string {
        return this._parentTask;
    }

    public set parentTask(value: string) {
        this._parentTask = value;
    }
}
