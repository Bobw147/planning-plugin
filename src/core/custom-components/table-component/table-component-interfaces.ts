import { IDictionary } from 'src/core/types/types';

import { cellValue, colId } from './table-component-types';

export interface ICellId {
    col: colId,
    row: number,
    id: string;
}

export interface ITableCellComponent {
    get id(): ICellId;
    set id(value: ICellId);

    get value(): cellValue;
    set value(value: cellValue);

    assignId(cellId: ICellId): void;
}

export interface IColumnData  {
    get columnId(): colId;
    set columnId(calue: colId);
    get header(): string;
    set header(value: string);
    get style(): IDictionary<string>;
    set style(value:IDictionary<string>);
}

export interface ITableColumnComponent {
    get activeCells(): IDictionary<ITableCellComponent>;
    get columnData(): IColumnData;
    addCell(cellId: ICellId, cb: ()=>void): ITableColumnComponent;
}

export interface ITableRowComponent {
    get rowId(): number;
    addRow(cellId: ICellId, cb: ()=>void): void;
}

export interface ITableComponent {
    get containerEl(): HTMLElement;
    render(container: HTMLElement): void;
}

