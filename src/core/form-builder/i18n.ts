
export const Language = {
   ENGLISH: 0,
   FRENCH: 1,
   GERMAN: 2,
   SPANISH: 3,
   ITALIAN:  4 ,
} as const;

export type Language = typeof Language[keyof typeof Language];
const selectedLanguage: Language = Language.ENGLISH;

export enum UserMessageId {
    CREATE_GOAL_TITLE = "cgt",
    CREATE_PROJECT_TITLE = "cpt",
    CREATE_TASK_TITLE = "ctt",
    GOAL_NAME_LABEL = "gnl",
    SUBTASK_CHECKBOX_LABEL = "scl",
    MEMBER_OF_LABEL = "mol",
    CATEGORY_TAG_LABEL = "ctl",
    STATUS_TAG_LABEL = "stl",
    TARGET_DATE_LABEL = "tdl",
    EXPECTED_DATE_LABEL = "edl",
    COMPLETED_DATE_LABEL = "cdl",
    USER_TAGS_LABEL = "utl",
    GOAL_CREATE_BUTTON_TEXT = "gcbt",
    PROJECT_CREATE_BUTTON_TEXT = "pcbt",
    TASK_CREATE_BUTTON_TEXT = "tcbt",
    CANCEL_BUTTON_TEXT = "cbt",
    PARENT_GOAL_LABEL = "spg",
    PARENT_PROJECT_LABEL = "spp",
    PARENT_TASK_LABEL = "spt",
    PROJECT_NAME_LABEL = "pnl",
    TASK_NAME_LABEL = "tnl",
}

interface IUserMessageDictionary {
    [UserMessageId.CREATE_GOAL_TITLE]: string[];
    [UserMessageId.CREATE_PROJECT_TITLE]: string[];
    [UserMessageId.CREATE_TASK_TITLE]: string[];
    [UserMessageId.GOAL_NAME_LABEL]: string[];
    [UserMessageId.SUBTASK_CHECKBOX_LABEL]: string[];
    [UserMessageId.MEMBER_OF_LABEL]: string[];
    [UserMessageId.CATEGORY_TAG_LABEL]: string[];
    [UserMessageId.STATUS_TAG_LABEL]: string[];
    [UserMessageId.TARGET_DATE_LABEL]: string[];
    [UserMessageId.EXPECTED_DATE_LABEL]: string[];
    [UserMessageId.COMPLETED_DATE_LABEL]: string[];
    [UserMessageId.USER_TAGS_LABEL]: string[];
    [UserMessageId.GOAL_CREATE_BUTTON_TEXT]: string[];
    [UserMessageId.PROJECT_CREATE_BUTTON_TEXT]: string[];
    [UserMessageId.TASK_CREATE_BUTTON_TEXT]: string[];
    [UserMessageId.CANCEL_BUTTON_TEXT]: string[];
    [UserMessageId.PARENT_GOAL_LABEL]: string[];
    [UserMessageId.PARENT_PROJECT_LABEL]: string[];
    [UserMessageId.PARENT_TASK_LABEL]: string[];
    [UserMessageId.PROJECT_NAME_LABEL]: string[];
    [UserMessageId.TASK_NAME_LABEL]: string[];
}

const userMessageDictionary: IUserMessageDictionary =
{
    [UserMessageId.CREATE_GOAL_TITLE]: ["Create a new Goal"],
    [UserMessageId.CREATE_PROJECT_TITLE]: ["Create a new Project"],
    [UserMessageId.CREATE_TASK_TITLE]: ["Create a new Task"],
    [UserMessageId.GOAL_NAME_LABEL]: ["Enter name of Goal: "],
    [UserMessageId.SUBTASK_CHECKBOX_LABEL]: ["Create as a subtask"],
    [UserMessageId.MEMBER_OF_LABEL]: ["Member of Goal "],
    [UserMessageId.CATEGORY_TAG_LABEL]: ["Category: "], 
    [UserMessageId.STATUS_TAG_LABEL]: ["Status:"],
    [UserMessageId.TARGET_DATE_LABEL]: ["Target Date:"],
    [UserMessageId.EXPECTED_DATE_LABEL]: ["Expected Date:"],
    [UserMessageId.COMPLETED_DATE_LABEL]: ["Completed Date:"],
    [UserMessageId.USER_TAGS_LABEL]: ["User Tags:"],
    [UserMessageId.GOAL_CREATE_BUTTON_TEXT]: ["Create Goal"],
    [UserMessageId.PROJECT_CREATE_BUTTON_TEXT]: ["Create Project"],
    [UserMessageId.TASK_CREATE_BUTTON_TEXT]: ["Create Task"],
    [UserMessageId.CANCEL_BUTTON_TEXT]: ["Cancel"],
    [UserMessageId.PARENT_GOAL_LABEL]: ["Select parent Goal"],
    [UserMessageId.PARENT_PROJECT_LABEL]: ["Select parent Project"],
    [UserMessageId.PARENT_TASK_LABEL]: ["Select parent Task"],
    [UserMessageId.PROJECT_NAME_LABEL]: ["Enter project name"],
    [UserMessageId.TASK_NAME_LABEL]: ["Enter task name"],
}

export function lookupMessage(userMessageId: UserMessageId): string {
    return userMessageDictionary[userMessageId][selectedLanguage];
}