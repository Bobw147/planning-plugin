
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

    PROJECT_PARENT_LABEL_CREATE = "pglc",
    PROJECT_PARENT_DESCRIPTION_CREATE = 'pgdc',
    PROJECT_PARENT_LABEL_IC = "pgli",
    PROJECT_PARENT_DESCRIPTION_IC = 'pgdi',
 
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

    TASK_PARENT_LABEL_CREATE = "tplc",
    TASK_PARENT_DESCRIPTION_CREATE = "tpdc",
    TASK_PARENT_LABEL_IC = "tpli",
    TASK_PARENT_DESCRIPTION_IC = "tpdi",

    TASK_SUBTASK_CHECKBOX_LABEL_CREATE = "tsclc",
    TASK_SUBTASK_CHECKBOX_DESCRIPTION_CREATE = "tscdc",
 
    TASK_CATEGORY_LABEL_IC = "tcli",
    TASK_CATEGORY_DESCRIPTION_IC = "tcdi",

    TASK_STATUS_LABEL_CREATE = "tslc",
    TASK_STATUS_DESCRIPTION_CREATE = "tsdc",
    TASK_STATUS_LABEL_IC = "tsli",
    TASK_STATUS_DESCRIPTION_IC = "tsdi",

    TASK_TARGET_DATE_LABEL_CREATE = "ttdlc",
    TASK_TARGET_DATE_DESCRIPTION_CREATE = "ttddc",
    TASK_TARGET_DATE_LABEL_IC = "ttdli",
    TASK_TARGET_DATE_DESCRIPTION_IC = "ttddi",

    TASK_EXPECTED_DATE_LABEL_IC = "tedli",
    TASK_EXPECTED_DATE_DESCRIPTION_IC = "teddi",

    TASK_COMPLETED_DATE_LABEL_IC = "tcdli",
    TASK_COMPLETED_DATE_DESCRIPTION_IC = "tcddi",

    // Subtask specific user messages
    CREATE_SUBTASK_TITLE = "cst",
    SUBTASK_INDEX_CARD_TITLE = "sict",

    SUBTASK_NAME_LABEL_CREATE = 'snlc',
    SUBTASK_NAME_DESCRIPTION_CREATE = "sndc",
    SUBTASK_NAME_LABEL_IC = "snli",
    SUBTASK_NAME_LABEL_DESCRIPTION_IC = "snld",

    SUBTASK_PARENT_LABEL_CREATE = "splc",
    SUBTASK_PARENT_DESCRIPTION_CREATE = "spdc",
    SUBTASK_PARENT_LABEL_IC = "spli",
    SUBTASK_PARENT_DESCRIPTION_IC = "spdi",

    SUBTASK_CHECKBOX_LABEL_CREATE = "ssclc",
    SUBTASK_CHECKBOX_DESCRIPTION_CREATE = "sscdc",
 
    SUBTASK_CATEGORY_LABEL_IC = "scli",
    SUBTASK_CATEGORY_DESCRIPTION_IC = "scdi",

    SUBTASK_STATUS_LABEL_CREATE = "sslc",
    SUBTASK_STATUS_DESCRIPTION_CREATE = "ssdc",
    SUBTASK_STATUS_LABEL_IC = "ssli",
    SUBTASK_STATUS_DESCRIPTION_IC = "ssdi",

    SUBTASK_TARGET_DATE_LABEL_CREATE = "stdlc",
    SUBTASK_TARGET_DATE_DESCRIPTION_CREATE = "stddc",
    SUBTASK_TARGET_DATE_LABEL_IC = "stdli",
    SUBTASK_TARGET_DATE_DESCRIPTION_IC = "stddi",

    SUBTASK_EXPECTED_DATE_LABEL_IC = "sedli",
    SUBTASK_EXPECTED_DATE_DESCRIPTION_IC = "seddi",

    SUBTASK_COMPLETED_DATE_LABEL_IC = "scdli",
    SUBTASK_COMPLETED_DATE_DESCRIPTION_IC = "scddi",

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

    [UserMessageId.PROJECT_PARENT_LABEL_CREATE]: string[];
    [UserMessageId.PROJECT_PARENT_DESCRIPTION_CREATE]: string[];
    [UserMessageId.PROJECT_PARENT_LABEL_IC]: string[];
    [UserMessageId.PROJECT_PARENT_DESCRIPTION_IC]: string[];

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
    [UserMessageId.TASK_INDEX_CARD_TITLE]: string[];

    [UserMessageId.TASK_NAME_LABEL_CREATE]: string[];
    [UserMessageId.TASK_NAME_DESCRIPTION_CREATE]: string[];
    [UserMessageId.TASK_NAME_LABEL_IC]: string[];
    [UserMessageId.TASK_NAME_LABEL_DESCRIPTION_IC]: string[];

    [UserMessageId.TASK_PARENT_LABEL_CREATE]: string[];
    [UserMessageId.TASK_PARENT_DESCRIPTION_CREATE]: string[];
    [UserMessageId.TASK_PARENT_LABEL_IC]: string[];
    [UserMessageId.TASK_PARENT_DESCRIPTION_IC]: string[];

    [UserMessageId.TASK_SUBTASK_CHECKBOX_LABEL_CREATE]: string[];
    [UserMessageId.TASK_SUBTASK_CHECKBOX_DESCRIPTION_CREATE]: string[];
 
    [UserMessageId.TASK_CATEGORY_LABEL_IC]: string[];
    [UserMessageId.TASK_CATEGORY_DESCRIPTION_IC]: string[];
 
    [UserMessageId.TASK_STATUS_LABEL_CREATE]: string[];
    [UserMessageId.TASK_STATUS_DESCRIPTION_CREATE]: string[];
    [UserMessageId.TASK_STATUS_LABEL_IC]: string[];
    [UserMessageId.TASK_STATUS_DESCRIPTION_IC]: string[];

    [UserMessageId.TASK_TARGET_DATE_LABEL_CREATE]: string[];
    [UserMessageId.TASK_TARGET_DATE_DESCRIPTION_CREATE]: string[];
    [UserMessageId.TASK_TARGET_DATE_LABEL_IC]: string[];
    [UserMessageId.TASK_TARGET_DATE_DESCRIPTION_IC]: string[];

    [UserMessageId.TASK_EXPECTED_DATE_LABEL_IC]: string[];
    [UserMessageId.TASK_EXPECTED_DATE_DESCRIPTION_IC]: string[];

    [UserMessageId.TASK_COMPLETED_DATE_LABEL_IC]: string[];
    [UserMessageId.TASK_COMPLETED_DATE_DESCRIPTION_IC]: string[];

    // SUbtask specific user messages
    [UserMessageId.CREATE_SUBTASK_TITLE]: string[];
    [UserMessageId.SUBTASK_INDEX_CARD_TITLE]: string[];

    [UserMessageId.SUBTASK_NAME_LABEL_CREATE]: string[];
    [UserMessageId.SUBTASK_NAME_DESCRIPTION_CREATE]: string[];
    [UserMessageId.SUBTASK_NAME_LABEL_IC]: string[];
    [UserMessageId.SUBTASK_NAME_LABEL_DESCRIPTION_IC]: string[];

    [UserMessageId.SUBTASK_PARENT_LABEL_CREATE]: string[];
    [UserMessageId.SUBTASK_PARENT_DESCRIPTION_CREATE]: string[];
    [UserMessageId.SUBTASK_PARENT_LABEL_IC]: string[];
    [UserMessageId.SUBTASK_PARENT_DESCRIPTION_IC]: string[];

    [UserMessageId.SUBTASK_CHECKBOX_LABEL_CREATE]: string[];
    [UserMessageId.SUBTASK_CHECKBOX_DESCRIPTION_CREATE]: string[];
 
    [UserMessageId.SUBTASK_CATEGORY_LABEL_IC]: string[];
    [UserMessageId.SUBTASK_CATEGORY_DESCRIPTION_IC]: string[];

    [UserMessageId.SUBTASK_STATUS_LABEL_CREATE]: string[];
    [UserMessageId.SUBTASK_STATUS_DESCRIPTION_CREATE]: string[];
    [UserMessageId.SUBTASK_STATUS_LABEL_IC]: string[];
    [UserMessageId.SUBTASK_STATUS_DESCRIPTION_IC]: string[];

    [UserMessageId.SUBTASK_TARGET_DATE_LABEL_CREATE]: string[];
    [UserMessageId.SUBTASK_TARGET_DATE_DESCRIPTION_CREATE]: string[];
    [UserMessageId.SUBTASK_TARGET_DATE_LABEL_IC]: string[];
    [UserMessageId.SUBTASK_TARGET_DATE_DESCRIPTION_IC]: string[];

    [UserMessageId.SUBTASK_EXPECTED_DATE_LABEL_IC]: string[];
    [UserMessageId.SUBTASK_EXPECTED_DATE_DESCRIPTION_IC]: string[];

    [UserMessageId.SUBTASK_COMPLETED_DATE_LABEL_IC]: string[];
    [UserMessageId.SUBTASK_COMPLETED_DATE_DESCRIPTION_IC]: string[];
    
    [UserMessageId.CREATE_AND_OPEN_BUTTON_TEXT]: string[];
    [UserMessageId.CREATE_ONLY_BUTTON_TEXT]: string[];
    [UserMessageId.CANCEL_BUTTON_TEXT]: string[];
}

const userMessageDictionary: IUserMessageDictionary =
{
    [UserMessageId.CREATE_GOAL_TITLE]: ["Create a new Goal"],
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

    [UserMessageId.PROJECT_PARENT_LABEL_CREATE]: ["Select parent Goal"],
    [UserMessageId.PROJECT_PARENT_DESCRIPTION_CREATE]: ["The goal of which this project is a member"],
    [UserMessageId.PROJECT_PARENT_LABEL_IC]: ["Belongs to Goal"],
    [UserMessageId.PROJECT_PARENT_DESCRIPTION_IC]: ["The goal of which this project is a member"],

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

    // Task specific user messages
    [UserMessageId.CREATE_TASK_TITLE]: ["Create a new Task"],
    [UserMessageId.TASK_INDEX_CARD_TITLE]: ["Task index card"],

    [UserMessageId.TASK_NAME_LABEL_CREATE]: ["Enter new task name"],
    [UserMessageId.TASK_NAME_DESCRIPTION_CREATE]:  ["Also used as the title and filename"],
    [UserMessageId.TASK_NAME_LABEL_IC]: ["Task name"],
    [UserMessageId.TASK_NAME_LABEL_DESCRIPTION_IC]: ["Also used as the title and filename"],

    [UserMessageId.TASK_SUBTASK_CHECKBOX_LABEL_CREATE]: ["Create as a subtask"],
    [UserMessageId.TASK_SUBTASK_CHECKBOX_DESCRIPTION_CREATE]: ["Subtasks have a parent task rather than a parent project"],

    [UserMessageId.TASK_PARENT_LABEL_CREATE]: ["Select parent project"],
    [UserMessageId.TASK_PARENT_DESCRIPTION_CREATE]: ["The project of which this task is a member"],
    [UserMessageId.TASK_PARENT_LABEL_IC]: ["Parent project"],
    [UserMessageId.TASK_PARENT_DESCRIPTION_IC]: ["The project of which this task is a member"],
  
    [UserMessageId.TASK_CATEGORY_LABEL_IC]: ["Category"],
    [UserMessageId.TASK_CATEGORY_DESCRIPTION_IC]: ["Defined by the parent goal category setting"],

    [UserMessageId.TASK_STATUS_LABEL_CREATE]: ["Status"],
    [UserMessageId.TASK_STATUS_DESCRIPTION_CREATE]: ["Set the initial status of this task"],
    [UserMessageId.TASK_STATUS_LABEL_IC]: ["Status"],
    [UserMessageId.TASK_STATUS_DESCRIPTION_IC]: ["The current status of this task"],

    [UserMessageId.TASK_TARGET_DATE_LABEL_CREATE]: ["Target date"],
    [UserMessageId.TASK_TARGET_DATE_DESCRIPTION_CREATE]: ["The date initially set for the completion of this task"],
    [UserMessageId.TASK_TARGET_DATE_LABEL_IC]: ["Target date"],
    [UserMessageId.TASK_TARGET_DATE_DESCRIPTION_IC]: ["The date initially set for the completion of this task"],

    [UserMessageId.TASK_EXPECTED_DATE_LABEL_IC]: ["Expected date"],
    [UserMessageId.TASK_EXPECTED_DATE_DESCRIPTION_IC]: ["The current expected date completion of this task"],

    [UserMessageId.TASK_COMPLETED_DATE_LABEL_IC]: ["Completed date"],
    [UserMessageId.TASK_COMPLETED_DATE_DESCRIPTION_IC]: ["The date this task was completed"],

    // Subtask specific user messages 
    [UserMessageId.CREATE_SUBTASK_TITLE]: ["Create a new Subtask"],
    [UserMessageId.SUBTASK_INDEX_CARD_TITLE]: ["Subtask index card"],

    [UserMessageId.SUBTASK_NAME_LABEL_CREATE]: ["Enter new subtask name"],
    [UserMessageId.SUBTASK_NAME_DESCRIPTION_CREATE]:  ["Also used as the title and filename"],
    [UserMessageId.SUBTASK_NAME_LABEL_IC]: ["Subtask name"],
    [UserMessageId.SUBTASK_NAME_LABEL_DESCRIPTION_IC]: ["Also used as the title and filename"],

    [UserMessageId.SUBTASK_PARENT_LABEL_CREATE]: ["Select parent task"],
    [UserMessageId.SUBTASK_PARENT_DESCRIPTION_CREATE]: ["The task of which this subtask is a member"],
    [UserMessageId.SUBTASK_PARENT_LABEL_IC]: ["Parent task"],
    [UserMessageId.SUBTASK_PARENT_DESCRIPTION_IC]: ["The task of which this subtask is a member"],
   
    [UserMessageId.SUBTASK_CHECKBOX_LABEL_CREATE]: ["Create as a task"],
    [UserMessageId.SUBTASK_CHECKBOX_DESCRIPTION_CREATE]: ["Tasks have a project as a parent"],

    [UserMessageId.SUBTASK_CATEGORY_LABEL_IC]: ["Category"],
    [UserMessageId.SUBTASK_CATEGORY_DESCRIPTION_IC]: ["Defined by the parent goal category setting"],

    [UserMessageId.SUBTASK_STATUS_LABEL_CREATE]: ["Status"],
    [UserMessageId.SUBTASK_STATUS_DESCRIPTION_CREATE]: ["Set the initial status of this subtask"],
    [UserMessageId.SUBTASK_STATUS_LABEL_IC]: ["Status"],
    [UserMessageId.SUBTASK_STATUS_DESCRIPTION_IC]: ["The current status of this subtask"],

    [UserMessageId.SUBTASK_TARGET_DATE_LABEL_CREATE]: ["Target date"],
    [UserMessageId.SUBTASK_TARGET_DATE_DESCRIPTION_CREATE]: ["The date initially set for the completion of this subtask"],
    [UserMessageId.SUBTASK_TARGET_DATE_LABEL_IC]: ["Target date"],
    [UserMessageId.SUBTASK_TARGET_DATE_DESCRIPTION_IC]: ["The date initially set for the completion of this subtask"],

    [UserMessageId.SUBTASK_EXPECTED_DATE_LABEL_IC]: ["Expected date"],
    [UserMessageId.SUBTASK_EXPECTED_DATE_DESCRIPTION_IC]: ["The current expected date completion of this subtask"],

    [UserMessageId.SUBTASK_COMPLETED_DATE_LABEL_IC]: ["Completed date"],
    [UserMessageId.SUBTASK_COMPLETED_DATE_DESCRIPTION_IC]: ["The date this subtask was completed"],

    [UserMessageId.CREATE_AND_OPEN_BUTTON_TEXT]: ["Create and Open"],
    [UserMessageId.CREATE_ONLY_BUTTON_TEXT]: ["Create only"],
    [UserMessageId.CANCEL_BUTTON_TEXT]: ["Cancel"],

}

export function translate(userMessageId: UserMessageId): string {
    return userMessageDictionary[userMessageId][selectedLanguage];
}