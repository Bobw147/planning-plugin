import { emptyString, IDictionary, NestedDictionary } from 'src/core/types/types';
import { dictionaryHasKey } from 'src/utils/utils';

import { TableColumnComponent } from './table-column-component';
import {
    ITableCellComponent, ITableColumnComponent, ITableComponent, ITableRowComponent
} from './table-component-interfaces';
import { colId } from './table-component-types';

function stringToBoolean(str: string): boolean {
    return str.toLowerCase() === 'true'
}
export class TableComponent implements ITableComponent {
    private readonly firstColId: colId = "A";
    private readonly firstRowId = 1;

    private _currentCol: colId;
    private _currentRow: number;
    private _rows: IDictionary<string>;
    private _columns: Array<ITableColumnComponent>;
    private _activeCellIds: IDictionary<ITableCellComponent>;
    private _containerEl: HTMLElement;  
    private _contentEl: HTMLElement | undefined;
    private _tableEl;
    private _headerRow: ITableRowComponent;

    // Table initialisation properties
    private _id: string;
    private _name: string;
    private _style: IDictionary<string>;
    private _toolbar: boolean;
    private _footer: boolean;

    constructor(parentEl: HTMLElement, initialiser: NestedDictionary<string>) {
        this._columns = [];
        this._containerEl = parentEl;
        this._tableEl = this._containerEl.createEl('section')
        this._currentCol = this.firstColId;
        this._rows = { };

        // Process the table configuration
        if (dictionaryHasKey(initialiser, 'table-config')) {
            const tableConfig = initialiser['table-config'] as NestedDictionary<string>;

            // table name 
            this._name = dictionaryHasKey(tableConfig, 'name')
                ? this._name = tableConfig['name'] as string: emptyString;
            
            // table id
            this._id = dictionaryHasKey(tableConfig, 'id')
                ? tableConfig['id'] as string: emptyString;

                // table style
            this._style = dictionaryHasKey(tableConfig, 'style') 
                ? tableConfig['style'] as IDictionary<string>: {};
        }

        if (dictionaryHasKey(initialiser as IDictionary<string>, 'show')) {
            const showConfig = initialiser['show'] as IDictionary<string>;
            // toolbar
            this._toolbar = dictionaryHasKey(showConfig, 'toolbar')
                ? this._toolbar = stringToBoolean(showConfig['toolbar'] as string) : false; 

            this._footer = dictionaryHasKey(showConfig, 'footer')
            ? this._toolbar = stringToBoolean(showConfig['footer'] as string) : false;
        }
        else {
            this._footer = false;
            this._toolbar = false;
        }

        // Initialise the columns
        if (dictionaryHasKey(initialiser, 'columns')) {
            const columnConfig = initialiser['columns'] as Array<NestedDictionary<string>>;

            columnConfig.forEach((columnDef)=>{
                const columnComponent = new TableColumnComponent(columnDef);
                this._columns.push(columnComponent);
            });
        }
    }

    /* Public properties */
    get tableEl(): HTMLElement {
        return this._tableEl;
    }

    /* Private properties */
    get containerEl(): HTMLElement {
        return this._containerEl;
    }

    get contentEl(): HTMLElement | undefined {
        return this._contentEl;
    };

    private get id(): string {
        return this._id;
    }

    private get numRows(): number {
        return Object.keys(this._rows).length;
    }
 
    private get hasFooter() : boolean {
        return this._footer;
    }
 
    private get hasToolbar() : boolean {
        return this._toolbar;
    }

    // Public methods
    public render(): void {
        let contentList: HTMLOListElement;
        let tableHeader: HTMLElement;
        let toolbar: HTMLDivElement;
        let headerBar: HTMLDivElement;

        contentList = this._tableEl.createEl('ol')
        tableHeader = contentList.createEl('li');
        if (this.hasToolbar) {
            toolbar = tableHeader.createDiv({text: 'Toolbar'});
        }
        headerBar = tableHeader.createDiv({text: 'Header'})
        this._columns.forEach((columnComponent)=>{
            const columnDiv = headerBar.createDiv();
            columnDiv.innerText = columnComponent.columnData.header;
        })
    }

    // private methods
    private createHeaderRow(containerEl: HTMLElement) {

    }
}
