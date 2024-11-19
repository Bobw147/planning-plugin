import { FileManager, TFile } from "obsidian";
import { GoalIndexCard } from "../indexcards/goalIndexCard";

const _goalIndexForm = '<div id="goal-index-card" style="border-width: 2px; border-style: solid; border-color: gray;"> \
    <div> \
        <label style="margin-inline: 12px">Goal :</label> \
        <input type="text" id="goal-name" readonly style="margin-bottom: 12px"> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Category :</label> \
        <input type="text" id="category-tag" readonly style="margin-bottom: 12px"> \
   </div> \
    <div style="display:none"> \
        <label style="margin-inline: 12px">Ident :</label> \
        <input type="text" id="ident-tag" readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Status :</label> \
        <input type="text" id="status-tag" readonly style="margin-bottom: 12px"> \
   </div> \
    <div> \
        <label style="margin-inline: 12px">Target Date</label> \
        <input type="date" id="target-date" readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Anticipated Date</label> \
        <input type="date" id="expected-date" readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Completed Date</label> \
        <input type="date" id="completed-date" readonly style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">User Tags</label> \
        <input type="input" id="user-tags" readonly style="margin-bottom: 12px""> \
    </div> \
<div>'

export function goalIndexForm() : string {
    return _goalIndexForm;
}

export async function populateGoalIndexForm(fileManager: FileManager, file: TFile): Promise<void> {
    const goalIndexCard = new GoalIndexCard();

    // Populate the goal index card
    await fileManager.processFrontMatter(file, (frontmatter) => {
        goalIndexCard.load(frontmatter);
    });

    // Populate the form fields
    (document.getElementById("goal-name") as HTMLInputElement).value = goalIndexCard.name;
    (document.getElementById("category-tag") as HTMLInputElement).value = goalIndexCard.categoryTag;
    (document.getElementById("ident-tag") as HTMLInputElement).value = goalIndexCard.identTag;
    (document.getElementById("status-tag") as HTMLInputElement).value = goalIndexCard.statusTag;
    (document.getElementById("target-date") as HTMLInputElement).value = (goalIndexCard.targetDate != null) ? dateFormatter(goalIndexCard.targetDate) : "";
    (document.getElementById("expected-date") as HTMLInputElement).value = (goalIndexCard.expectedDate != null) ? dateFormatter(goalIndexCard.expectedDate) : "";
    (document.getElementById("completed-date") as HTMLInputElement).value = (goalIndexCard.completedDate != null) ? dateFormatter(goalIndexCard.completedDate) : "";
    (document.getElementById("user-tags") as HTMLInputElement).textContent = flattenedTags(goalIndexCard.userTags);
}

function dateFormatter(date: Date): string {
    const splitDate: string = date.toISOString().split("T")[0];
    return (splitDate != "1970-01-01") ? splitDate : "";
} 

function flattenedTags(userTags: string[]) : string {
    return userTags.flat().join(", ");
}
