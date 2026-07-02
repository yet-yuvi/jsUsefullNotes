const generateBtn = document.getElementById('generate');
const topRow = document.getElementById('top-row');
const bottomRow = document.getElementById('bottom-row');

const TABLE_CLASS = 'table-auto border border-slate-700 w-full';
const CELL_CLASS = 'border border-slate-300 p-2 text-center hover:bg-gray-100';

// Click event
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

// 1. CELL PART: Creates and returns a single td element
const generateCell = (data) => {
  const cell = document.createElement('td');
  cell.innerText = data;
  cell.className = CELL_CLASS;
  return cell;
};

// 2. ROW PART: Handles the loop, generates all 10 rows, and fills them with cells
const generateRows = (number) => {
  // A fragment stores the rows in memory before adding them to the DOM
  const fragment = document.createDocumentFragment();

  for (let rowNo = 1; rowNo <= 10; rowNo++) {
    const tableRow = document.createElement('tr');
    const rowData = [number, ' x ', rowNo, ' = ', number * rowNo];
    
    // Map data through the cell function and append to this row
    const cells = rowData.map(data => generateCell(data));
    tableRow.append(...cells);
    
    // Add completed row to our collection
    fragment.appendChild(tableRow);
  }

  return fragment;
};

// 3. TABLE PART: Contains ONLY the table skeleton structure
function generateTable(number) {
  const table = document.createElement('table');
  table.className = TABLE_CLASS;
  
  const tableBody = document.createElement('tbody');
  
  // Get all rows from the row function and drop them inside the body
  const allRows = generateRows(number);
  tableBody.appendChild(allRows);
  
  table.appendChild(tableBody);
  return table;
}

// clearing table after one operation
function clearTable() {
  topRow.innerHTML = '';
  bottomRow.innerHTML = '';
}