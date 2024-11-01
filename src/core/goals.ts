import { App, Modal, Setting } from "obsidian";
import { PlanningIndexCard } from "./indexcard";
import { mode_tag_type, ident_tag_type, status_tag_type } from "./tags";
import { readFileSync } from 'fs';
import { join } from 'path';
import { goalForm } from "./forms/goal_form";

function readHtmlFile(filename: string): string {
    const filePath = join(__dirname, filename);
    const fileContents = readFileSync(filePath, 'utf-8');
    return fileContents;
}

export class GoalIndexCard implements PlanningIndexCard{
    Name: string;
    ModeTag: mode_tag_type | null;
    IdentTag: ident_tag_type | null;
    StatusTag: status_tag_type | null;
    TargetDate: Date | null;
    PredictedDate: Date | null;
    UserTags: Array<string>;
    constructor(){
        this.Name = "";
        this.ModeTag = null;
        this.IdentTag = ident_tag_type.PLANNING_GOAL;
        this.StatusTag = null;
        this.TargetDate = null;
        this.PredictedDate = null;
        this.UserTags = [];
    }
}

export class GoalsModal extends Modal {
	goalIndexCard: GoalIndexCard;
    goal_setting: string;

    constructor(app: App, onSubmit: (result: GoalIndexCard | null) => void) {
		super(app);
    }

    onOpen(): void{
        this.goalIndexCard = new GoalIndexCard();
        
//        console.log("__dirname is: ", __dirname);
//        const htmlContent = readHtmlFile('example.html');
//        console.log(htmlContent);

        const {contentEl} = this;
        contentEl.empty();

        // Add the title
        this.setTitle("Create a new Goal");

        // Add the remainder of the form
        contentEl.innerHTML = goalForm;
    }
/**        this.setTitle("Create a new Goal")

        // Add a close button
        new Setting(this.contentEl)
        .addText()
        .addButton((btn) => btn
            .setButtonText('Cancel')
            .setCta()
            .onClick(() => {
                this.close();
                onSubmit(null);
            }))
        .addButton((btn) => btn
            .setButtonText('Submit')
            .setCta()
            .onClick(() => {
              this.close();
              onSubmit(this.goalIndexCard);
            }));
    }
*/
}