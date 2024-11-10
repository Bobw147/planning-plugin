import { status_tag_type, ident_tag_type, mode_tag_type } from "./tags";

export interface PlanningIndexCard {
    Name: string;
    ModeTag: string;
    IdentTag: string;
    StatusTag: string;
    TargetDate: Date | null;
    AnticipatedDate: Date | null;
    CompletedDate: Date | null;
    UserTags: Array<string>;
};
