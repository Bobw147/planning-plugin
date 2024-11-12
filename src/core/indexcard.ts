
export interface PlanningIndexCard {
    Name: string;
    ModeTag: string;
    IdentTag: string;
    StatusTag: string;
    Parent? : string;
    TargetDate: Date | null;
    AnticipatedDate: Date | null;
    CompletedDate: Date | null;
    UserTags: Array<string>;
};
