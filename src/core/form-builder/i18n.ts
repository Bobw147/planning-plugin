
export enum Language {
   ENGLISH,
   FRENCH,
   GERMAN,
   SPANISH,
   ITALIAN 
}

export enum UserMessageId {
    CREATE_GOAL_TITLE = "cgt",
    CREATE_PROJECT_TITLE = "cpt",
    CREATE_TASK_TITLE = "ctt",
    GOAL_NAME_LABEL = "gnl",
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
}

interface IUserMessageDictionary {
    [UserMessageId.CREATE_GOAL_TITLE]: string[];
    [UserMessageId.CREATE_PROJECT_TITLE]: string[];
    [UserMessageId.CREATE_TASK_TITLE]: string[];
    [UserMessageId.GOAL_NAME_LABEL]: string[];
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
}

const language = Language.ENGLISH;

const userMessageDictionary: IUserMessageDictionary =
{
    [UserMessageId.CREATE_GOAL_TITLE]: ["Create a new Goal"],
    [UserMessageId.CREATE_PROJECT_TITLE]: ["Create a new Project"],
    [UserMessageId.CREATE_TASK_TITLE]: ["Create a new Task"],
    [UserMessageId.GOAL_NAME_LABEL]: ["Enter name of Goal: "],
    [UserMessageId.MEMBER_OF_LABEL]: ["Member of Goal: "],
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
}

export function lookupMessage(userMessageId: UserMessageId): string {
    return userMessageDictionary[userMessageId][language];
}