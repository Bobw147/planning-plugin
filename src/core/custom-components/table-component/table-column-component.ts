import { emptyString, IDictionary, NestedDictionary } from 'src/core/types/types';
import { dictionaryHasKey } from 'src/utils/utils';

import { TableCellComponent } from './table-cell-component';
import {
    ICellId, IColumnData, ITableCellComponent, ITableColumnComponent
} from './table-component-interfaces';
import { colId, colrowId } from './table-component-types';

export const validColumnRegex = /^[A-Z]{1,3}$/;
export const maxColumnId: colrowId = 'XFD';

class TableColumnData implements IColumnData {
    private _header: string;
    private _columnId: colId;
    private _style: IDictionary<string>;
    
    constructor() {
        this._header = emptyString;
        this._columnId = emptyString;
        this._style = {};
    }

    get columnId(): colId {
        return this._columnId;
    }

    set columnId(value: colId) {
        this._columnId = value;
    }

    get header(): string {
        return this._header;
    }

    set header(value: string) {
        this._header = value;
    }

    get style() : IDictionary<string> {
        return this._style;
    }

    set style(value:  IDictionary<string>) {
        this._style = value;
    }
}

export class TableColumnComponent implements ITableColumnComponent {
    private _activeCells: IDictionary<ITableCellComponent>;
    private _columnData: IColumnData;

    constructor(columnInfo: NestedDictionary<string>) {
        this._activeCells = {};
        this._columnData = new TableColumnData();

        if (dictionaryHasKey(columnInfo, 'header')) {
            this.columnData.header = columnInfo['header'] as string;
        }
    }

    get activeCells(): IDictionary<ITableCellComponent> {
        return this._activeCells;
    }

    get columnData(): IColumnData {
        return this._columnData;

    }

    addCell(cellId: ICellId, cb: (cell: ITableCellComponent)=>void): ITableColumnComponent {
        const cell: ITableCellComponent = new TableCellComponent(cellId);
        this.activeCells[cellId.id] = cell;
        cb(cell);
        return this;
    }
}
