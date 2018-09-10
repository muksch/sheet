const docTable = document.querySelector('.table');

function newTable() {
  let table = document.createElement('div');
  table.className = 'tabulka';
  for (let i = 0; i < 20; i += 1) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < 50; j += 1) {
      let cell = document.createElement('div');
      cell.className = 'cell'
      cell.textContent = 'bunka';
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  docTable.appendChild(table);
}

newTable();
