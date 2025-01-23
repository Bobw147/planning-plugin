import { App } from 'obsidian';

import { GoalIndexCard } from '../src/core/goals/goal-index-card';
import indexCardManager from '../src/core/planner/index-card-manager';

describe('IndexCardManager', () => {
    it('should add a GoalIndexCard', () => {
        const manager = new indexCardManager();
        const goalCard = new GoalIndexCard();

        manager.addCard(goalCard);

        expect(manager.getCards()).toContain(goalCard);
    });
});
