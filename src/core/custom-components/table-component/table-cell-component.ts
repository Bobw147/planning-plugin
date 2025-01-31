import { emptyString } from 'src/core/types/types';

import { maxColumnId, validColumnRegex } from './table-column-component';
import { ICellId, ITableCellComponent } from './table-component-interfaces';
import { CellType, cellValue } from './table-component-types';

// Class dedclaration
export class TableCellComponent implements ITableCellComponent {
    // @ts-expect-error Reason: Initialised or exception thrown in a validation function
    private _column: colId;

    // @ts-expect-error Reason: Initialised or exception thrown in a validation function
    private _row: rowId;

    // @ts-expect-error Reason: Initialised or exception thrown in a validation function
    private _id: colrowId;
    private _value: cellValue;
    
    constructor(cellId: ICellId) {
        this.assignId(cellId);
        this._value = { value: emptyString, type: CellType.STRING };
    }

    get id(): ICellId {
        const cellId: ICellId = {
            col: this._column,
            row: this._row,
            id: this._column + this._row.toString(),
        }
        return cellId;
    }

    set id(cellId: ICellId) {
        this.assignId(cellId);
    }

    get value(): cellValue {
        return this._value;
    }

    set value(newValue: cellValue) { 
        this._value = newValue;
        //TODO Throw invalid cell type assertion
    }

    assignId(colrow: ICellId) {
        const col = colrow.col;
        const row = colrow.row;

        if (validColumnRegex.test(col) && col <= maxColumnId && 
            row > minRowId && row <= maxRowId) {
            this._column = col;
            this._row = row;
            this._id = col + row.toString();
        }
    }
}
