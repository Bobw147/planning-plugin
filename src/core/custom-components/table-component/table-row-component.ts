
const minRowId = 1;
const maxRowId: rowId = 1048576;

class TableRowComponent implements ITableRowComponent {
    private _rowNumber: rowId;

    constructor(container: HTMLElement, rowNumber: rowId) {
        this._rowNumber = rowNumber;
    }

    get rowId(): rowId {
        return this._rowNumber;
    }

    addRow(cellId: ICellId, cb: ()=>void) {
        this._rowNumber = cellId.row;
    }
}

