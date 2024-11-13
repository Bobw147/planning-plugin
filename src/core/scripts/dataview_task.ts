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

export function taskPageContent(indexCard: TaskIndexCard) : string {

	return taskDataview.replace("NamePlaceholder", "Name:: " + indexCard.name)
					.replace("ModePlaceholder", "ModeTag:: " + indexCard.modeTag)
					.replace("IdentTagPlaceholder", "IdentTag:: " + indexCard.identTag)
					.replace("StatusTagPlaceholder", "StatusTag::")
					.replace("TargetDatePlaceholder", "TargetDate:: " + indexCard.targetDate?.toLocaleDateString())
					.replace("AnticipatedDatePlaceholder", "AnicipatedDate:: ")
					.replace("CompletedDatePlaceholder", "CompletedDate:: ")
					.replace("UserTagsPlaceholder", "UserTags:: ");
}