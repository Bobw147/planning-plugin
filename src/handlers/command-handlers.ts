import PlanningPlugin from 'src/main';

export class CommandHandler{
    constructor(private plugin: PlanningPlugin){}

    setup(): CommandHandler {
        this.plugin.addCommand({
            id: "createGoalCmd",
            name: "Create a new Goal",
            icon: "goal",
            hotkeys: [
                {
                    modifiers: ["Alt", "Ctrl"],
                    key: "g"
                },
            ],
            callback: () => {
                this.plugin.planner.createGoal();
            },
        });
        this.plugin.addCommand({
            id: "create-project",
            name: "Create a new Project",
            icon: "target",
            hotkeys: [
                {
                    modifiers: ["Alt", "Ctrl"],
                    key: "p"
                },
            ],
            callback: () => {
                this.plugin.planner.createProject();
            },
        });
        this.plugin.addCommand({
            id: "create-task",
            name: "Create a new Task",
            icon: "circle-check",
            hotkeys: [
                {
                    modifiers: ["Alt", "Ctrl"],
                    key: "t"
                },
            ],
            callback: () => {
                this.plugin.planner.createTask();
            },
        });
        return this
    }
}