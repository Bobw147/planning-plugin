import { status_tag_type, ident_tag_type, mode_tag_type } from "./tags";

export interface PlanningIndexCard {
    Name: string;
    ModeTag: mode_tag_type | null;
    IdentTag: ident_tag_type | null;
    StatusTag: status_tag_type | null;
    TargetDate: Date | null;
    PredictedDate: Date | null;
    UserTags: Array<string>;
};
