import {
    App, CachedMetadata, FrontMatterCache, TAbstractFile, TFile, TFolder, Vault
} from 'obsidian';
import { Settings } from 'src/settings/Settings';

import { fieldNames } from '../base-classes/planning-index-card';
import { GoalIndexCard } from '../goals/goal-index-card';
import { ProjectIndexCard } from '../projects/project-index-card';
import { SubtaskIndexCard } from '../subtasks/subtask-index-card';
import { TaskIndexCard } from '../tasks/task-index-card';
import { IGoalIndexCard } from '../types/interfaces/i-goal-index-card';
import { IPlanningIndexCard } from '../types/interfaces/i-planning-index-card';
import { identTags, IDictionary } from '../types/types';

export class IndexCardManager {
    private app: App;
    private goalIndexCards: {[index: string]: IGoalIndexCard};
    private projectIndexCards: {[index: string]: IGoalIndexCard};
    private taskIndexCards: {[index: string]: IGoalIndexCard};
    private subtaskIndexCards: {[index: string]: IGoalIndexCard};
    private goalRefLookup: {[index: string]: string};
    private projectRefLookup: {[index: string]: string};
    private taskRefLookup: {[index: string]: string};
    private subtaskRefLookup: {[index: string]: string};

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
    }

    add(indexCard: GoalIndexCard | ProjectIndexCard | TaskIndexCard | SubtaskIndexCard): void {
        switch (indexCard.identTag) {
            case identTags.PLANNING_GOAL:
                this.goalIndexCards[indexCard.refId] = indexCard as GoalIndexCard;
                this.goalRefLookup[indexCard.name] = (indexCard as GoalIndexCard).refId.toString();
                break;

            case identTags.PLANNING_PROJECT:
                this.projectIndexCards[indexCard.refId] = indexCard as ProjectIndexCard;
                this.projectRefLookup[indexCard.name] = (indexCard as ProjectIndexCard).refId.toString();
                break;

            case identTags.PLANNING_TASK:
                this.taskIndexCards[indexCard.refId] = indexCard as TaskIndexCard;
                this.taskRefLookup[indexCard.name] = (indexCard as TaskIndexCard).refId.toString();
                break;

            case identTags.PLANNING_SUBTASK:
                this.subtaskIndexCards[indexCard.refId] = indexCard as SubtaskIndexCard;
                this.subtaskRefLookup[indexCard.name] = (indexCard as SubtaskIndexCard).refId.toString();
                break;
        }
    }

    private isMemberOf(indexCards: Record<string, IPlanningIndexCard>, indexCardKey: string): IPlanningIndexCard | null {
        const indexCard: IPlanningIndexCard | undefined = this.goalIndexCards[indexCardKey];
        return (indexCard !== undefined) ? indexCard : null;
    }
    
    loadIndexCards(settings: Settings): void {
        this.findFiles(settings.goalsFolder, identTags.PLANNING_GOAL);
        this.findFiles(settings.projectsFolder, identTags.PLANNING_PROJECT);
        this.findFiles(settings.tasksFolder, identTags.PLANNING_TASK);
        this.findFiles(settings.subtasksFolder, identTags.PLANNING_SUBTASK);
    }

    remove(indexCardKey: string) {
        let indexCardName: string = "";
        let indexCardRefId: string = "";
        let indexCard: IPlanningIndexCard | null = null;
        
        indexCard = this.isMemberOf(this.goalIndexCards, indexCardKey)
        if (indexCard != null) {
            indexCardName = indexCard.name;
            indexCardRefId = indexCard.refId;

            delete this.goalIndexCards[indexCardName];
            delete this.goalIndexCards[indexCardRefId];
            return;
       }

       indexCard = this.isMemberOf(this.projectIndexCards, indexCardKey)
       if (indexCard != null) {
           indexCardName = indexCard.name;
           indexCardRefId = indexCard.refId;

           delete this.projectIndexCards[indexCardName];
           delete this.projectIndexCards[indexCardRefId];
           return;
      }

        indexCard = this.isMemberOf(this.taskIndexCards, indexCardKey)
        if (indexCard != null) {
            indexCardName = indexCard.name;
            indexCardRefId = indexCard.refId;

            delete this.taskIndexCards[indexCardName];
            delete this.taskIndexCards[indexCardRefId];
            return;
       }

       indexCard = this.isMemberOf(this.subtaskIndexCards, indexCardKey)
       if (indexCard != null) {
           indexCardName = indexCard.name;
           indexCardRefId = indexCard.refId;

           delete this.subtaskIndexCards[indexCardName];
           delete this.subtaskIndexCards[indexCardRefId];
           return;
      }
   }

   private findFiles(rootPath: string, searchTag: string): void {
       const rootFolder: TFolder | null = this.app.vault.getFolderByPath(rootPath);
       
       if (rootFolder == null)
           return;
       
       Vault.recurseChildren(rootFolder, (child:TAbstractFile) => {
           // Make sure what we have is a file and not a folder. The latter is ignored
           if (child instanceof TFile) {
               // Get the frontmatter for the file
               let indexCard: GoalIndexCard | ProjectIndexCard | TaskIndexCard | SubtaskIndexCard;
               const cache: CachedMetadata | null = this.app.metadataCache.getCache((child.path));
               const frontMatter: FrontMatterCache | undefined = cache?.frontmatter as IDictionary<string>;
               if (frontMatter[fieldNames.IDENT_TAG_FIELD] == searchTag) {
                    switch (searchTag) {
                        case identTags.PLANNING_GOAL:
                            indexCard = new GoalIndexCard();
                            indexCard.loadFromFrontMatter(frontMatter);
                            this.add(indexCard);
                            break;

                        case identTags.PLANNING_PROJECT:
                            indexCard = new ProjectIndexCard();
                            indexCard.loadFromFrontMatter(frontMatter);
                            this.add(indexCard);
                            break;

                        case identTags.PLANNING_TASK:
                            indexCard = new TaskIndexCard();
                            indexCard.loadFromFrontMatter(frontMatter);
                            this.add(indexCard);
                            break;
                        
                        case identTags.PLANNING_SUBTASK:
                            indexCard = new SubtaskIndexCard();
                            indexCard.loadFromFrontMatter(frontMatter);
                            this.add(indexCard);
                            break;
                    }
                }
            }
        })
    }
}