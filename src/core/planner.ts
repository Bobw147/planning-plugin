import { Notice } from "obsidian";
import PlanningPlugin from "src/main"
import { status_tag_type } from "./tags";
import { GoalsModal } from "./goals";
import { GoalIndexCard } from "./goals";

export class Planner{
    constructor(private plugin: PlanningPlugin){
    }

    async setup(): Promise<void>{  

    }

    create_goal(): void {
        let goals_modal = new GoalsModal(this.plugin.app, this._create_goal).open()
    }

    _create_goal(result: GoalIndexCard | null): void {

    }

    create_project(): void {
		new Notice('Creates a new Project');
    }

    create_task(): void{
		new Notice('Creates a new Task or SubTask');
    }
}