const docTable = document.querySelector('.table');

function newTable() {

  let table = document.createElement('div');
  let heading = document.createElement('div');
  let body = document.createElement('div');
  let footer = document.createElement('div');

  table.className = 'divTable';
  heading.className = 'divTableHeading';
  body.className = 'divTableBody';
  footer.className = 'divTableFoot';

  table.appendChild(heading);
  table.appendChild(body);
  table.appendChild(footer);

  for (let j = 0; j < 15; j += 1) {
    let headCell = document.createElement('div');
    headCell.className = 'divTableHead';
    heading.appendChild(headCell);
  }

  for (let i = 0; i < 20; i += 1) {
    let row = document.createElement('div');
    row.className = 'divTableRow';

    for (let j = 0; j < 15; j += 1) {
      let cell = document.createElement('div');
      cell.className = 'divTableCell';
      cell.dataset.x = j;
      cell.dataset.y = i;
      row.appendChild(cell);
    }

    body.appendChild(row);
  }

  docTable.appendChild(table);
}

newTable();
