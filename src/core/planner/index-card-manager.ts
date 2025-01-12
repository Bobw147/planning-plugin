import {
    App, CachedMetadata, FrontMatterCache, TAbstractFile, TFile, TFolder, Vault
} from 'obsidian';
import { Settings } from 'src/settings/Settings';
import { getBasename } from 'src/utils/utils';
import { UUID } from 'src/utils/uuid-generator';

import { GoalIndexCard } from '../goals/goal-index-card';
import { ProjectIndexCard } from '../projects/project-index-card';
import { SubtaskIndexCard } from '../subtasks/subtask-index-card';
import { TaskIndexCard } from '../tasks/task-index-card';
import { IGoalIndexCard } from '../types/interfaces/i-goal-index-card';
import { IPlanningIndexCard } from '../types/interfaces/i-planning-index-card';
import { IProjectIndexCard } from '../types/interfaces/i-project-index-card';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';
import { emptyString, identTags, IDictionary } from '../types/types';
import { FieldNames } from './planning-index-card';

export class IndexCardManager {
    private app: App;
    private goalIndexCards: {[index: UUID]: GoalIndexCard};
    private projectIndexCards: {[index: UUID]: ProjectIndexCard};
    private taskIndexCards: {[index: UUID]: TaskIndexCard};
    private subtaskIndexCards: {[index: UUID]: SubtaskIndexCard};
    private goalRefLookup: {[index: string]: string};
    private projectRefLookup: {[index: string]: string};
    private taskRefLookup: {[index: string]: string};
    private subtaskRefLookup: {[index: string]: string};
    private orphanSubtasks: {[index: UUID]: SubtaskIndexCard};
    private orphanTasks: {[index: UUID]: TaskIndexCard};
    private orphanProjects: {[index: UUID]: ProjectIndexCard};

    constructor(app: App){
        this.app = app;
        this.goalIndexCards = {};
        this.projectIndexCards = {};
        this.taskIndexCards = {};
        this.subtaskIndexCards = {};
        this.goalRefLookup = {};
        this.projectRefLookup = {};
        this.taskRefLookup  = {};
        this.subtaskRefLookup  = {};
        this.orphanProjects = {};
        this.orphanTasks = {};
        this.orphanSubtasks = {};
    }

    getGoalRefId(goalName: string): UUID {
        return this.goalRefLookup[goalName];
    }

    getProjectParentName(goalRefId: UUID): string
    {
        const goalIndexCard: IGoalIndexCard | undefined = this.goalIndexCards[goalRefId];
        if (goalIndexCard !== undefined)
            return goalIndexCard.name;
        return emptyString;
    }

    getProjectRefId(projectName: string): UUID {
        return this.projectRefLookup[projectName];
    }

    getTaskParentName(taskRefId: UUID): string
    {
        const projectIndexCard: IProjectIndexCard | undefined = this.projectIndexCards[taskRefId];
        if (projectIndexCard !== undefined)
            return projectIndexCard.name;
        return emptyString;
    }

    getTaskRefId(name: string): UUID {
        return this.taskRefLookup[name];
    }

    getsubtaskParentName(taskRefId: UUID): string
    {
        const taskIndexCard: ITaskIndexCard | undefined = this.taskIndexCards[taskRefId];
        if (taskIndexCard !== undefined)
            return taskIndexCard.name;
        return emptyString;
    }

    add(indexCard: IPlanningIndexCard): void {
        if (indexCard instanceof GoalIndexCard) {
            this.goalIndexCards[indexCard.refId] = indexCard;
            this.goalRefLookup[indexCard.name] = indexCard.refId;
            return;
        }
        if (indexCard instanceof ProjectIndexCard) {
            this.projectIndexCards[indexCard.refId] = indexCard;
            this.projectRefLookup[indexCard.name] = indexCard.refId;
            return;
        }
        if (indexCard instanceof TaskIndexCard) {
            this.taskIndexCards[indexCard.refId] = indexCard;
            this.taskRefLookup[indexCard.name] = indexCard.refId;
            return;
        }
        if (indexCard instanceof SubtaskIndexCard) {
            this.subtaskIndexCards[indexCard.refId] = indexCard;
            this.subtaskRefLookup[indexCard.name] = indexCard.refId;
            if (indexCard.parentTaskRefId === emptyString)
                this.orphanSubtasks[indexCard.refId] = indexCard;
        }
    }

    private findFiles(rootPath: string, searchTag: string): void {
        const rootFolder: TFolder | null = this.app.vault.getFolderByPath(rootPath);
        
        if (rootFolder == null)
            return;
        
        Vault.recurseChildren(rootFolder, (file:TAbstractFile) => {
            // Make sure what we have is a file and not a folder. The latter is ignored
            if (file instanceof TFile) {
                // Get the frontmatter for the file
                let indexCard: GoalIndexCard | ProjectIndexCard | TaskIndexCard | SubtaskIndexCard;
                const cache: CachedMetadata | null = this.app.metadataCache.getCache((file.path));
                const frontMatter: FrontMatterCache | undefined = cache?.frontmatter as IDictionary<string>;
                if (frontMatter[FieldNames.IDENT_TAG_FIELD] == searchTag) {
                    switch (searchTag) {
                        case identTags.PLANNING_GOAL:
                            indexCard = new GoalIndexCard();
                            indexCard.loadFromFrontMatter(frontMatter);
                            indexCard.file = file;
                            this.add(indexCard);
                            break;
 
                        case identTags.PLANNING_PROJECT:
                            indexCard = new ProjectIndexCard();
                            indexCard.loadFromFrontMatter(frontMatter);
                            indexCard.file = file;
                            this.add(indexCard);
                            break;
 
                        case identTags.PLANNING_TASK:
                            indexCard = new TaskIndexCard();
                            indexCard.loadFromFrontMatter(frontMatter);
                            indexCard.file = file;
                            this.add(indexCard);
                            break;

                        case identTags.PLANNING_SUBTASK:
                            indexCard = new SubtaskIndexCard();
                            indexCard.loadFromFrontMatter(frontMatter);
                            indexCard.file = file;
                            this.add(indexCard);
                            break;
                    }
                }
            }
        })
    }
 
    loadIndexCards(settings: Settings): void {
        this.findFiles(settings.goalsFolder, identTags.PLANNING_GOAL);
        this.findFiles(settings.projectsFolder, identTags.PLANNING_PROJECT);
        this.findFiles(settings.tasksFolder, identTags.PLANNING_TASK);
        this.findFiles(settings.subtasksFolder, identTags.PLANNING_SUBTASK);

        // Now that all this relevant index cards have been loaded they
        // can be used to build the downstream links of each card type
        this.buildDownstreamLinks();
    }

    private buildDownstreamLinks(): void {
        Object.entries(this.subtaskIndexCards).forEach(([refId, subtaskIndexCard]) => {
            
        });
    }
    private delete(indexCardName: string, refLookup: Record<string, UUID>, 
            indexCards: Record<UUID, IPlanningIndexCard>): boolean {
        
        if (indexCardName in refLookup) {
            if (refLookup[indexCardName] in indexCards) {
                delete indexCards[refLookup[indexCardName]];
            }
            delete refLookup[indexCardName];
            return true;
        }
        return false;
    }

    remove(indexCardName: string): void {
        if (this.delete(indexCardName, this.goalRefLookup, this.goalIndexCards))
            return;

        if (this.delete(indexCardName, this.projectRefLookup, this.projectIndexCards))
            return;

        if (this.delete(indexCardName, this.taskRefLookup, this.taskIndexCards))
            return;

        if (this.delete(indexCardName, this.subtaskRefLookup, this.subtaskIndexCards))
            return;
    }

    private async renameCard(oldName: string, newFile: TFile, refLookup: Record<string, UUID>, 
        indexCards: Record<string, IPlanningIndexCard>): Promise<boolean> {
        if (oldName in refLookup) {
            const refId = refLookup[oldName];
            if (refId in indexCards) {
                indexCards[refId].file = newFile;
                indexCards[refId].name = newFile.basename;
                // Update the frontmatter on disk and relaod to update locally
                await indexCards[refId].save(this.app.fileManager, newFile);
                await indexCards[refId].load(this.app.fileManager, newFile);
            }
            delete refLookup[oldName];
            refLookup[newFile.basename] = refId;
            return true;
        }
        return false;
    }
    
    async rename(newFile: TFile, oldPath: string) {
        debugger;
        const oldName: string = getBasename(oldPath);
        if (await this.renameCard(oldName, newFile, this.goalRefLookup, this.goalIndexCards))
            return;

        if (await this.renameCard(oldName, newFile, this.projectRefLookup, this.projectIndexCards))
            return;

        if (await this.renameCard(oldName, newFile, this.taskRefLookup, this.taskIndexCards))
            return;

        if (await this.renameCard(oldName, newFile, this.subtaskRefLookup, this.subtaskIndexCards))
            return;
    }
}