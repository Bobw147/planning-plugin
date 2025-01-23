export class TableComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid black;
          padding: 8px;
          text-align: left;
        }
      </style>
      <table></table>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const table = this.shadowRoot?.querySelector('table');
    const thead = table?.createTHead();
    const tbody = table?.createTBody();
    if (thead) {
      const tr = thead.insertRow();
      this.columns.forEach((column: string) => {
        const th = document.createElement('th');
        th.textContent = column;
        tr.appendChild(th);
      });
    }
    if (tbody) {
      this.data.forEach((row: Record<string, string>) => {
        const tr = tbody.insertRow();
        this.columns.forEach((column: string) => {
          const td = tr.insertCell();
          td.textContent = row[column];
        });
      });
    }
  }

  get columns() {
    const columns = this.getAttribute('columns');
    if (!columns) throw new Error('Columns attribute is missing');
    return JSON.parse(columns);
  }
  
  get data() {
    const data = this.getAttribute('data');
    if (!data) throw new Error('Data attribute is missing');
    return JSON.parse(data);
  }
}