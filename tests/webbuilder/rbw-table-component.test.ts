import { emptyString } from 'src/core/types/types';

import {
    TableCellComponent
} from '../../src/core/custom-components/table-component/table-component';

describe('TableCellComponent', () => {
    it('should initialize with correct column and row', () => {
        const cell = new TableCellComponent('A', 1);
        expect(cell.id).toEqual({ col: 'A', row: 1, location: 'A1' });
    });

    it('should set and get value correctly', () => {
        const cell = new TableCellComponent('A', 1);
        cell.value = 'test';
        expect(cell.value).toBe('test');
    });

    it('should not set invalid column', () => {
        const cell = new TableCellComponent('ZZZ', 1);
        expect(cell.id.col).toBeUndefined();
    });

    it('should not set invalid row', () => {
        const cell = new TableCellComponent('A', 0);
        expect(cell.id.row).toBeUndefined();
    });

    it('should initialize with empty string value', () => {
        const cell = new TableCellComponent('A', 1);
        expect(cell.value).toBe(emptyString);
    });
});
