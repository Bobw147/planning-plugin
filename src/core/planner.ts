import { Notice } from "obsidian";
import PlanningPlugin from "src/main"

export class Planner{
    constructor(private plugin: PlanningPlugin){
    }

    async setup(): Promise<void>{  
    }

    create_goal(): void {
		new Notice('Creates a new Goal');
    }

    create_project(): void {
		new Notice('Creates a new Project');
    }

    create_task(): void{
		new Notice('Creates a new Task or SubTask');
    }
}