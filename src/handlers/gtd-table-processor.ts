import { Planner } from 'src/core/planner/planner';

import { W2Grid } from './w2ui';

export function gtdTableProcessor(source: string, el: HTMLElement, planner: Planner): void {

    new GtdTableProcessor(el);
}

export class GtdTableProcessor {
    private grid: W2Grid;

    constructor(container: HTMLElement) {
        const table = container.createDiv();
        table.id = 'gtd-table';
        table.style.width = '600px';
        table.style.height = '300px';
        
        this.grid = new W2Grid({
            name: 'gtd-table',
            box: '#gtd-table',
            show: {
                toolbar: true,
                footer: true,
            },
            columns: [
                { field: 'recid', caption: 'ID', size: '50px', sortable: true, resizable: true },
                { field: 'name', caption: 'Name', size: '30%', sortable: true, resizable: true },
                { field: 'email', caption: 'Email', size: '40%', sortable: true, resizable: true },
                { field: 'sdate', caption: 'Start Date', size: '120px', sortable: true, resizable: true },
            ],
            records: [
                { recid: 1, name: 'John Doe', email: '  [email protected]', sdate: '4/3/2012' },
                { recid: 2, name: 'Stuart Motzart', email: '  [email protected]', sdate: '4/3/2012' },
                { recid: 3, name: 'Jin Franson', email: '  [email protected]', sdate: '4/3/2012' },
                { recid: 4, name: 'Susan Silverman', email: '  [email protected]', sdate: '4/3/2012' },
                { recid: 5, name: 'Kelly Cruz', email: '  [email protected]', sdate: '4/3/2012' },
                { recid: 6, name: 'Francis Waller', email: '  [email protected]', sdate: '4/3/2012' },
                { recid: 7, name: 'Mark Welch', email: '  [email protected]', sdate: '4/3/2012' },
                { recid: 8, name: 'Morgan Alison', email: '  [email protected]', sdate: '4/3/2012' }
            ]
        });
    }
}