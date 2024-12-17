import { FileManager, TFile } from 'obsidian';

import { PlanningIndexCard } from '../base-classes/planning-index-card';
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

    async load(fileManager: FileManager, file: TFile): Promise<void> {
        super.load(fileManager, file);
        fileManager.processFrontMatter(file,(frontMatter) => {
            if (frontMatter)
                this.parentTask = frontMatter[taskFieldNames.PARENT_PROJECT];
        })
    }

    async save(fileManager: FileManager, file: TFile) : Promise<void> {
        await super.save(fileManager, file);
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter)
                frontMatter[taskFieldNames.PARENT_TASK] = this.parentTask;
        })
    }

    public get parentTask(): string {
        return this._parentTask;
    }

    public set parentTask(value: string) {
        this._parentTask = value;
    }
}
