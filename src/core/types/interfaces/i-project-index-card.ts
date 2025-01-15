import { FrontMatterCache } from 'obsidian';
import { UUID } from 'src/utils/uuid-generator';

import { IPlanningIndexCard } from './i-planning-index-card';

export interface IProjectIndexCard extends IPlanningIndexCard{

    get parentGoalRefId() : UUID;
    set parentGoalRefId(value: UUID);

    loadFromFrontMatter(frontMatter: FrontMatterCache): void;
}
