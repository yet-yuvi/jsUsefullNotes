const generateBtn = document.getElementById('generate');
const topRow = document.getElementById('top-row');
const bottomRow = document.getElementById('bottom-row');

const TABLE_CLASS = 'table-auto border border-slate-700 w-full';
const CELL_CLASS = 'border border-slate-300 p-2 text-center hover:bg-gray-100';

generateBtn.addEventListener('click', function () {
  clearTable();

  for (let num = 1; num <= 10; num++) {
    const table = generateTable(num);

    if (num <= 5) {
      topRow.appendChild(table);
    } else {
      bottomRow.appendChild(table);
    }
  }
});

const generateCell = (data) => {
  const cell = document.createElement('td');
  cell.innerText = data;
  cell.className = CELL_CLASS;
  return cell;
};

const generateRows = ({number, tableBody}) => {
  for (let rowNo = 1; rowNo <= 10; rowNo++) {
    const tableRow = document.createElement('tr');
    const rowData = [number, ' x ', rowNo, ' = ', number * rowNo];
    const cells = rowData.map(data => generateCell(data));
    tableRow.append(...cells);
    tableBody.appendChild(tableRow);
  }
};

function generateTable(number) {
  const table = document.createElement('table');
  table.className = TABLE_CLASS;
  const tableBody = document.createElement('tbody');
  generateRows({ number, tableBody });
  table.appendChild(tableBody);
  return table;
}

function clearTable() {
  topRow.innerHTML = '';
  bottomRow.innerHTML = '';
}