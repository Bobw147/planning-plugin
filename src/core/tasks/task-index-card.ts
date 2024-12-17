import { FileManager, TFile } from 'obsidian';

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

    async load(fileManager: FileManager, file: TFile): Promise<void> {
        super.load(fileManager, file);
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter) {
                this.parentProject = frontMatter[taskFieldNames.PARENT_PROJECT];
            }
        })
    }

    async save(fileManager: FileManager, file: TFile) : Promise<void> {
        await super.save(fileManager, file);
        await fileManager.processFrontMatter(file, (frontMatter) => {
            if (frontMatter)
                frontMatter[taskFieldNames.PARENT_PROJECT] = this.parentProject;
        })
    }

    public get parentProject(): string {
        return this._parentProject;
    }

    public set parentProject(value: string) {
        this._parentProject = value;
    }
}
