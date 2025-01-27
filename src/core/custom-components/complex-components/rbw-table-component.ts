import { BaseComponent } from 'obsidian';
import { emptyString, IDictionary } from 'src/core/types/types';
import { Url } from 'url';

export type colId = string;
export type rowId = number;
export type colrowId = string;
export type valueTypes = (string | number | boolean | Date | Url ); 

// Interfaces
export interface ICellId {
    col: colId,
    row: number,
    id: string;
}

export const CellType = {
    // Primitives
    NUMBER: 'number',
    STRING: 'string',
    BOOLEAN: 'boolean',

    // Extended
    DATE: 'Date',
    URL: 'Url',
    LINK: 'link',
    ARRAY: 'array',
    DICTIONARY: 'dictionary',
    FUNCTION: 'function',

    // Non-specific Object permits user definabe types
    OBJECT: 'object',
};
export type cellType = typeof CellType[keyof typeof CellType];

export type cellValue = {
    value: unknown,
    type: cellType
}

const minRowId = 1;
const maxRowId: rowId = 1048576;
const validColumnRegex = /^[A-Z]{1,3}$/;
const maxColumnId: colrowId = 'XFD';

export interface ITableCellComponent {
    get id(): ICellId;
    set id(value: ICellId);

    get value(): cellValue;
    set value(value: cellValue);

    assignId(cellId: ICellId): void;
}

// Class dedclaration
export class TableCellComponent extends BaseComponent implements ITableCellComponent {
    // @ts-expect-error Reason: Initialised or exception thrown in a validation function
    private _column: colId;

    // @ts-expect-error Reason: Initialised or exception thrown in a validation function
    private _row: rowId;

    // @ts-expect-error Reason: Initialised or exception thrown in a validation function
    private _id: colrowId;
    private _value: cellValue;
    
    constructor(cellId: ICellId) {
        super();
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

export interface ITableColumnComponent {
    get activeCells(): IDictionary<ITableCellComponent>;
    get name(): string;
    get columnId() : colId;

    addCell(cellId: ICellId, cb: ()=>void): ITableColumnComponent;
}

class TableColumnComponent extends BaseComponent implements ITableColumnComponent {
    private _columnData: IColumnData;
    private _activeCells: IDictionary<ITableCellComponent>;

    constructor(container:HTMLElement, columnData: IColumnData) {
        super();
        this._columnData = columnData;
        this._activeCells = {};
    }

    get activeCells(): IDictionary<ITableCellComponent> {
        return this._activeCells;
    }

    private get columnData(): IColumnData {
        return this._columnData;
    }

    get columnId(): colId {
        return this._columnData.columnId;
    }

    get name(): string {
        return this.columnData.name;
    }

    addCell(cellId: ICellId, cb: (cell: ITableCellComponent)=>void): ITableColumnComponent {
        const cell: ITableCellComponent = new TableCellComponent(cellId);
        this.activeCells[cellId.id] = cell;
        cb(cell);
        return this;
    }
}

class TableRowComponent extends BaseComponent {
    private _rowNumber: rowId;

    constructor(container: HTMLElement, rowNumber: rowId) {
        super();
        this._rowNumber = rowNumber;
    }

    get rowId(): rowId {
        return this._rowNumber;
    }

    addRow(cellId: ICellId, cb: ()=>void) {
        this._rowNumber = cellId.row;
    }
}


interface IColumnData  {
    name: string;
    columnId: colId;
    style: string;
}

export interface ITableComponent {
    get containerEl(): HTMLElement;
}

export class TableComponent extends BaseComponent implements ITableComponent{
    const firstColId: colId = "A"
    const firstRowId = 1;

    private _currentCol: colId;
    private _currentRow: number;
    private _rows: IDictionary<string>;
    private _columns: IDictionary<ITableColumnComponent>;
    private _activeCellIds: IDictionary<ITableCellComponent>;
    private _style: IDictionary<string>;
    private _name: string;
    private _containerEl: HTMLElement;  
    private _contentEl: HTMLElement | null;
    private _tableEl;
    private _headerRow: ITableRowComponent;

    constructor(parentEl: HTMLElement, initialiser: IDictionary<string | IDictionary<string> | IDictionary<IColumnData>>) {
        super();
        this._containerEl = parentEl;
        this._contentEl = null;
        this._tableEl = this._containerEl.createDiv()
        this._currentCol = this.firstColId;
        this._rows = { };
        this._style = initialiser['style'] ? initialiser['style'] as IDictionary<string>: {};
        this._name = initialiser['name'] as string;

        this._headerRow = this.createHeaderRow(this.containerEl);

        // Initialise the columns
        const columnData: IDictionary<IColumnData> = initialiser['columnData'] as IDictionary<IColumnData>;
        Object.keys(columnData).forEach((key)=>{
            const column: ITableColumnComponent = new TableColumnComponent(this.containerEl, columnData[key]) as ITableColumnComponent;
            this._columns[column.columnId] = column
        });
    }

    private get containerEl(): HTMLElement {
        return this._containerEl;
    }

    get tableEl(): HTMLElement {
        return this._tableEl;
    }

    private get numRows(): number {
        return Object.keys(this._rows).length;
    }

    private createHeaderRow(containerEl: HTMLElement) {

    }
}