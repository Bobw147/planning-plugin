
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

    // Goal specific user messages
    CREATE_GOAL_TITLE = "cgt",
    GOAL_INDEX_CARD_TITLE = "git",
    GOAL_CREATE_BUTTON_TEXT = "gcbt",

    GOAL_NAME_LABEL_CREATE = "gnlc",
    GOAL_NAME_DESCRIPTION_CREATE = 'gndc',
    GOAL_NAME_LABEL_IC = "gnli",
    GOAL_NAME_DESCRIPTION_IC = "gndi",

    GOAL_CATEGORY_LABEL_CREATE = "gclc",
    GOAL_CATEGORY_DESCRIPTION_CREATE = "gcdc",
    GOAL_CATEGORY_LABEL_IC = "gcli",
    GOAL_CATEGORY_DESCRIPTION_IC = "gcdi",

    GOAL_STATUS_DESCRIPTION_IC = "gsdi",
    GOAL_STATUS_LABEL_IC = "gsli",

    GOAL_TARGET_DATE_LABEL_CREATE = "gtdlc",
    GOAL_TARGET_DATE_DESCRIPTION_CREATE = "gtddc",
    GOAL_TARGET_DATE_LABEL_IC = "gtdli",
    GOAL_TARGET_DATE_DESCRIPTION_IC = "gtddi",

    GOAL_EXPECTED_DATE_LABEL_IC = "gedli",
    GOAL_EXPECTED_DATE_DESCRIPTION_IC = "geddi",
    GOAL_COMPLETED_DATE_LABEL_IC = "gcdli",
    GOAL_COMPLETED_DATE_DESCRIPTION_IC = "gcddi",

    // Project specific user messages
    CREATE_PROJECT_TITLE = "cpt",
    PROJECT_INDEX_CARD_TITLE = "pit",

    PROJECT_NAME_LABEL_CREATE = "pnlc",
    PROJECT_NAME_DESCRIPTION_CREATE = "pndc",
    PROJECT_NAME_LABEL_IC = "pnli",
    PROJECT_NAME_DESCRIPTION_IC = "pndi",

    PROJECT_GOAL_LABEL_CREATE = "pglc",
    PROJECT_GOAL_DESCRIPTION_CREATE = 'pgdc',
    PROJECT_GOAL_LABEL_IC = "pgli",
    PROJECT_GOAL_DESCRIPTION_IC = 'pgdi',
 
    PROJECT_CATEGORY_LABEL_IC = "pcli",
    PROJECT_CATEGORY_DESCRIPTION_IC = "pcdi",

    PROJECT_STATUS_DESCRIPTION_IC = "psdi",
    PROJECT_STATUS_LABEL_IC = "psli",

    PROJECT_TARGET_DATE_LABEL_CREATE = "ptdlc",
    PROJECT_TARGET_DATE_DESCRIPTION_CREATE = "ptddc",
    PROJECT_TARGET_DATE_LABEL_IC = "ptdli",
    PROJECT_TARGET_DATE_DESCRIPTION_IC = "ptddi",

    PROJECT_EXPECTED_DATE_LABEL_IC = "pedli",
    PROJECT_EXPECTED_DATE_DESCRIPTION_IC = "peddi",

    PROJECT_COMPLETED_DATE_LABEL_IC = "pcdli",
    PROJECT_COMPLETED_DATE_DESCRIPTION_IC = "pcddi",

    // Task specific user messages
    CREATE_TASK_TITLE = "ctt",
    TASK_INDEX_CARD_TITLE = "tit",

    TASK_NAME_LABEL_CREATE = "tnlc",
    TASK_NAME_DESCRIPTION_CREATE = "tndc",
    TASK_NAME_LABEL_IC = "tnli",
    TASK_NAME_LABEL_DESCRIPTION_IC = "tnld",

    TASK_PROJECT_LABEL_CREATE = "tplc",
    TASK_PROJECT_DESCRIPTION_CREATE = "tpdc",
    TASK_PROJECT_LABEL_IC = "tpli",
    TASK_PROJECT_DESCRIPTION_IC = "tpdi",

    // Subtask specific user messages
    CREATE_SUBTASK_TITLE = "cst",
    SUBTASK_INDEX_CARD_TITLE = "sict",
    SUBTASK_CREATE_BUTTON_TEXT = "stcb",

    SUBTASK_CHECKBOX_LABEL = "scl",
    SUBTASK_CHECKBOX_DESCRIPTION = 'scd',
    SUBTASK_NAME_LABEL = 'snl',
    SUBTASK_NAME_DESCRIPTION = "snd",

    // Common messages
    CATEGORY_TAG_LABEL = "ctl",
    CATEGORY_TAG_DESCRIPTION = "ctd",

    STATUS_TAG_LABEL = "stl",
    STATUS_TAG_DESCRIPTION = "std",

    TARGET_DATE_LABEL = "tdl",
    TARGET_DATE_DESCRIPTION = "tdd",

    EXPECTED_DATE_LABEL = "edl",
    EXPECTED_DATE_DESCRIPTION = "edd",

    COMPLETED_DATE_LABEL = "cdl",
    COMPLETED_DATE_DESCRIPTION = "cdd",

    USER_TAGS_LABEL = "utl",

    CREATE_AND_OPEN_BUTTON_TEXT = "caobt",
    CREATE_ONLY_BUTTON_TEXT = "cobt",
    CANCEL_BUTTON_TEXT = "cbt",
}

interface IUserMessageDictionary {
    [UserMessageId.CREATE_GOAL_TITLE]: string[];
    [UserMessageId.GOAL_INDEX_CARD_TITLE]: string[];

    [UserMessageId.GOAL_NAME_LABEL_CREATE]: string[];
    [UserMessageId.GOAL_NAME_DESCRIPTION_CREATE]: string[];
    [UserMessageId.GOAL_NAME_LABEL_IC]: string[];
    [UserMessageId.GOAL_NAME_DESCRIPTION_IC]: string[];

    [UserMessageId.GOAL_CATEGORY_LABEL_CREATE]: string[];
    [UserMessageId.GOAL_CATEGORY_DESCRIPTION_CREATE]: string[];
    [UserMessageId.GOAL_CATEGORY_LABEL_IC]: string[];
    [UserMessageId.GOAL_CATEGORY_DESCRIPTION_IC]: string[];
    
    [UserMessageId.GOAL_STATUS_DESCRIPTION_IC]: string[];
    [UserMessageId.GOAL_STATUS_LABEL_IC]: string[];

    [UserMessageId.GOAL_TARGET_DATE_LABEL_CREATE]: string[];
    [UserMessageId.GOAL_TARGET_DATE_DESCRIPTION_CREATE]: string[];
    [UserMessageId.GOAL_TARGET_DATE_LABEL_IC]: string[];
    [UserMessageId.GOAL_TARGET_DATE_DESCRIPTION_IC]: string[];

    [UserMessageId.GOAL_EXPECTED_DATE_LABEL_IC]: string[];
    [UserMessageId.GOAL_EXPECTED_DATE_DESCRIPTION_IC]: string[];

    [UserMessageId.GOAL_COMPLETED_DATE_LABEL_IC]: string[];
    [UserMessageId.GOAL_COMPLETED_DATE_DESCRIPTION_IC]: string[];

    // Project specific user messages
    [UserMessageId.CREATE_PROJECT_TITLE]: string[];
    [UserMessageId.PROJECT_INDEX_CARD_TITLE]: string[];

    [UserMessageId.PROJECT_NAME_LABEL_CREATE]: string[];
    [UserMessageId.PROJECT_NAME_LABEL_IC]: string[];
    [UserMessageId.PROJECT_NAME_DESCRIPTION_CREATE]: string[];
    [UserMessageId.PROJECT_NAME_DESCRIPTION_IC]: string[];

    [UserMessageId.PROJECT_GOAL_LABEL_CREATE]: string[];
    [UserMessageId.PROJECT_GOAL_DESCRIPTION_CREATE]: string[];
    [UserMessageId.PROJECT_GOAL_LABEL_IC]: string[];
    [UserMessageId.PROJECT_GOAL_DESCRIPTION_IC]: string[];

    [UserMessageId.PROJECT_CATEGORY_LABEL_IC]: string[];
    [UserMessageId.PROJECT_CATEGORY_DESCRIPTION_IC]: string[];

    [UserMessageId.PROJECT_STATUS_LABEL_IC]: string[];
    [UserMessageId.PROJECT_STATUS_DESCRIPTION_IC]: string[];

    [UserMessageId.PROJECT_TARGET_DATE_LABEL_CREATE]: string[];
    [UserMessageId.PROJECT_TARGET_DATE_DESCRIPTION_CREATE]: string[];
    [UserMessageId.PROJECT_TARGET_DATE_LABEL_IC]: string[];
    [UserMessageId.PROJECT_TARGET_DATE_DESCRIPTION_IC]: string[];

    [UserMessageId.PROJECT_EXPECTED_DATE_LABEL_IC]: string[];
    [UserMessageId.PROJECT_EXPECTED_DATE_DESCRIPTION_IC]: string[];

    [UserMessageId.PROJECT_COMPLETED_DATE_LABEL_IC]: string[];
    [UserMessageId.PROJECT_COMPLETED_DATE_DESCRIPTION_IC]: string[];

    // Task specific user messages
    [UserMessageId.CREATE_TASK_TITLE]: string[];
    [UserMessageId.TASK_NAME_LABEL_CREATE]: string[];
    [UserMessageId.TASK_NAME_DESCRIPTION_CREATE]: string[];
    [UserMessageId.TASK_NAME_LABEL_IC]: string[];
    [UserMessageId.TASK_NAME_LABEL_DESCRIPTION_IC]: string[];

    [UserMessageId.TASK_PROJECT_LABEL_CREATE]: string[];
    [UserMessageId.TASK_PROJECT_DESCRIPTION_CREATE]: string[];
    [UserMessageId.TASK_PROJECT_LABEL_IC]: string[];
    [UserMessageId.TASK_PROJECT_DESCRIPTION_IC]: string[];

    // SUbtask specific user messages
    [UserMessageId.CREATE_SUBTASK_TITLE]: string[];
    [UserMessageId.SUBTASK_INDEX_CARD_TITLE]: string[];

    [UserMessageId.SUBTASK_NAME_LABEL]: string[];
    [UserMessageId.SUBTASK_NAME_DESCRIPTION]: string[];

    [UserMessageId.SUBTASK_CHECKBOX_LABEL]: string[];
    [UserMessageId.SUBTASK_CHECKBOX_DESCRIPTION]: string[];

    [UserMessageId.CATEGORY_TAG_LABEL]: string[];
    [UserMessageId.CATEGORY_TAG_DESCRIPTION]: string[];

    [UserMessageId.STATUS_TAG_LABEL]: string[];
    [UserMessageId.STATUS_TAG_DESCRIPTION]: string[];


    [UserMessageId.TARGET_DATE_LABEL]: string[];
    [UserMessageId.EXPECTED_DATE_LABEL]: string[];
    [UserMessageId.COMPLETED_DATE_LABEL]: string[];
    [UserMessageId.USER_TAGS_LABEL]: string[];
    
    [UserMessageId.CREATE_AND_OPEN_BUTTON_TEXT]: string[];
    [UserMessageId.CREATE_ONLY_BUTTON_TEXT]: string[];
    [UserMessageId.CANCEL_BUTTON_TEXT]: string[];
}

const userMessageDictionary: IUserMessageDictionary =
{
    [UserMessageId.CREATE_GOAL_TITLE]: ["Create a new Goal"],
    [UserMessageId.CREATE_SUBTASK_TITLE]: ["Create a new Subtask"],
    [UserMessageId.GOAL_INDEX_CARD_TITLE]: ["Goal index card"], 

    [UserMessageId.GOAL_NAME_LABEL_CREATE]: ["Enter new goal name"],
    [UserMessageId.GOAL_NAME_DESCRIPTION_CREATE]: ["Also used as the title and filename"],
    [UserMessageId.GOAL_NAME_LABEL_IC]: ["Goal name"],
    [UserMessageId.GOAL_NAME_DESCRIPTION_IC]: ["Also used as the title and filename"],

    [UserMessageId.GOAL_CATEGORY_LABEL_CREATE]: ["Select the goal type"],
    [UserMessageId.GOAL_CATEGORY_DESCRIPTION_CREATE]: ["This will be inherited by all projects and tasks associated with this goal"],
    [UserMessageId.GOAL_CATEGORY_LABEL_IC]: ["Goal type"],
    [UserMessageId.GOAL_CATEGORY_DESCRIPTION_IC]: ["Inherited by all associated projects and tasks"],
    
    [UserMessageId.GOAL_STATUS_LABEL_IC]: ["Current status"],
    [UserMessageId.GOAL_STATUS_DESCRIPTION_IC]: ["This is determined by the tasks associated with this goal"],

    [UserMessageId.GOAL_TARGET_DATE_LABEL_CREATE]: ["Target date"],
    [UserMessageId.GOAL_TARGET_DATE_DESCRIPTION_CREATE]: ["Date when goal is to be completed by"],
    [UserMessageId.GOAL_TARGET_DATE_LABEL_IC]: ["Target date"],
    [UserMessageId.GOAL_TARGET_DATE_DESCRIPTION_IC]: ["The date initially set for the completion of this goal"],

    [UserMessageId.GOAL_EXPECTED_DATE_LABEL_IC]: ["Expected date"],
    [UserMessageId.GOAL_EXPECTED_DATE_DESCRIPTION_IC]: ["Date when last task is currently expected to completed"],

    [UserMessageId.GOAL_COMPLETED_DATE_LABEL_IC]: ["Completed date"],
    [UserMessageId.GOAL_COMPLETED_DATE_DESCRIPTION_IC]: ["Date when the last associsated task was completed"],

    // Project specific user messages
    [UserMessageId.CREATE_PROJECT_TITLE]: ["Create a new Project"],
    [UserMessageId.PROJECT_INDEX_CARD_TITLE]: ["Project index card"],

    [UserMessageId.PROJECT_NAME_LABEL_CREATE]: ["Enter new project name"],
    [UserMessageId.PROJECT_NAME_DESCRIPTION_CREATE]: ["Also used as the title and filename"],
    [UserMessageId.PROJECT_NAME_LABEL_IC]: ["Project name"],
    [UserMessageId.PROJECT_NAME_DESCRIPTION_IC]: ["Also used as the title and filename"],

    [UserMessageId.PROJECT_GOAL_LABEL_CREATE]: ["Select parent Goal"],
    [UserMessageId.PROJECT_GOAL_DESCRIPTION_CREATE]: ["The goal to which this project belongs"],
    [UserMessageId.PROJECT_GOAL_LABEL_IC]: ["Belongs to Goal"],
    [UserMessageId.PROJECT_GOAL_DESCRIPTION_IC]: ["The goal to which this project belongs"],

    [UserMessageId.PROJECT_CATEGORY_LABEL_IC]: ["Project type"],
    [UserMessageId.PROJECT_CATEGORY_DESCRIPTION_IC]: ["Defined by the parent goal category setting"],
    
    [UserMessageId.PROJECT_STATUS_LABEL_IC]: ["Current status"],
    [UserMessageId.PROJECT_STATUS_DESCRIPTION_IC]: ["This is determined by the tasks associated with this project"],

    [UserMessageId.PROJECT_TARGET_DATE_LABEL_CREATE]: ["Target date"],
    [UserMessageId.PROJECT_TARGET_DATE_DESCRIPTION_CREATE]: ["Date when this project is to be completed by"],
    [UserMessageId.PROJECT_TARGET_DATE_LABEL_IC]: ["Target date"],
    [UserMessageId.PROJECT_TARGET_DATE_DESCRIPTION_IC]: ["The date initially set for the completion of this project"],

    [UserMessageId.PROJECT_EXPECTED_DATE_LABEL_IC]: ["Expected date"],
    [UserMessageId.PROJECT_EXPECTED_DATE_DESCRIPTION_IC]: ["Date when last task is currently expected to completed"],

    [UserMessageId.PROJECT_COMPLETED_DATE_LABEL_IC]: ["Completed date"],
    [UserMessageId.PROJECT_COMPLETED_DATE_DESCRIPTION_IC]: ["Date when last task assigned to this project was completed"],

    [UserMessageId.SUBTASK_INDEX_CARD_TITLE]: ["Subtask index card"],

    [UserMessageId.CATEGORY_TAG_LABEL]: ["Category "], 
    [UserMessageId.STATUS_TAG_LABEL]: ["Status"],
    [UserMessageId.TARGET_DATE_LABEL]: ["Target Date"],
    [UserMessageId.EXPECTED_DATE_LABEL]: ["Expected Date"],
    [UserMessageId.COMPLETED_DATE_LABEL]: ["Completed Date"],
    [UserMessageId.USER_TAGS_LABEL]: ["User Tags"],

    // Task specific user messages
    [UserMessageId.CREATE_TASK_TITLE]: ["Create a new Task"],
    [UserMessageId.TASK_INDEX_CARD_TITLE]: ["Task index card"],

    [UserMessageId.TASK_NAME_LABEL_CREATE]: ["Enter new task name"],
    [UserMessageId.TASK_NAME_DESCRIPTION_CREATE]:  ["Also used as the title and filename"],
    [UserMessageId.TASK_NAME_LABEL_IC]: ["Task name"],
    [UserMessageId.TASK_NAME_LABEL_DESCRIPTION_IC]: ["Also used as the title and filename"],

    [UserMessageId.TASK_PROJECT_LABEL_CREATE]: ["Select parent project"],
    [UserMessageId.TASK_PROJECT_DESCRIPTION_CREATE]: ["The project of which this task is a member"],
    [UserMessageId.TASK_PROJECT_LABEL_IC]: ["Parent project"],
    [UserMessageId.TASK_PROJECT_DESCRIPTION_IC]: ["The project of which this task is a member"],

    [UserMessageId.SUBTASK_CHECKBOX_LABEL]: ["Create as a subtask"],
    [UserMessageId.SUBTASK_NAME_DESCRIPTION]: ["A description"],
    [UserMessageId.SUBTASK_NAME_LABEL]: ["Enter new subtask name"],
    [UserMessageId.SUBTASK_CHECKBOX_DESCRIPTION]: ["Selects whether task belongs to a project or another task"],
    [UserMessageId.CATEGORY_TAG_DESCRIPTION]: ["The type of goal this project belongs to"],
    [UserMessageId.STATUS_TAG_DESCRIPTION]: ["The current working state of the project"],

    [UserMessageId.CREATE_AND_OPEN_BUTTON_TEXT]: ["Create and Open"],
    [UserMessageId.CREATE_ONLY_BUTTON_TEXT]: ["Create only"],
    [UserMessageId.CANCEL_BUTTON_TEXT]: ["Cancel"],
}

export function translate(userMessageId: UserMessageId): string {
    return userMessageDictionary[userMessageId][selectedLanguage];
}