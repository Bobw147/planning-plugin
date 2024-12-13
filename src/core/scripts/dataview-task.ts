import { ISubtaskIndexCard } from '../types/interfaces/i-subtask-index-card';
import { ITaskIndexCard } from '../types/interfaces/i-task-index-card';

export const taskDataview = 
"\
```IndexCard\n \
Project\n \
```\n \
\n \
\n \
##### Index Card\n \
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

export function taskPageContent(indexCard: ITaskIndexCard | ISubtaskIndexCard) : string {

	return taskDataview.replace("NamePlaceholder", "Name:: " + indexCard.name)
					.replace("ModePlaceholder", "ModeTag:: " + indexCard.categoryTag)
					.replace("IdentTagPlaceholder", "IdentTag:: " + indexCard.identTag)
					.replace("StatusTagPlaceholder", "StatusTag::")
					.replace("TargetDatePlaceholder", "TargetDate:: " + indexCard.targetDate?.toLocaleDateString())
					.replace("AnticipatedDatePlaceholder", "AnicipatedDate:: ")
					.replace("CompletedDatePlaceholder", "CompletedDate:: ")
					.replace("UserTagsPlaceholder", "UserTags:: ");
}