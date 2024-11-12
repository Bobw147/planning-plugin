import { TaskIndexCard } from "../tasks";

export var taskDataview = 
"##### Index Card\n \
NamePlaceholder\n \
ModePlaceholder\n \
IdentTagPlaceholder\n \
StatusTagPlaceholder\n \
TargetDatePlaceholder\n \
AnticipatedDatePlaceholder\n \
CompletedDatePlaceholder\n \
UserTagsPlaceholder\n \
\n\
"

export function task_page_content(indexCard: TaskIndexCard) : string {

	return taskDataview.replace("NamePlaceholder", "Name:: " + indexCard.Name)
					.replace("ModePlaceholder", "ModeTag:: " + indexCard.ModeTag)
					.replace("IdentTagPlaceholder", "IdentTag:: " + indexCard.IdentTag)
					.replace("StatusTagPlaceholder", "StatusTag::")
					.replace("TargetDatePlaceholder", "TargetDate:: " + indexCard.TargetDate?.toLocaleDateString())
					.replace("AnticipatedDatePlaceholder", "AnicipatedDate:: ")
					.replace("CompletedDatePlaceholder", "CompletedDate:: ")
					.replace("UserTagsPlaceholder", "UserTags:: ");
}