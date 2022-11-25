const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    cell.innerText = (c + 1);
    container.appendChild(cell).className = 'grid-item';
  };
};

const vrows = prompt("Insert how many Vertical cells (32 recommended)")
const hrows = prompt("Insert how many Vertical cells (32 recommended)")

makeRows(vrows, hrows);

const cells = document.querySelectorAll('.grid-item');

cells.forEach(cell => {
  cell.addEventListener('mouseover', () => {
    cell.className = 'permahover'
    //cell.style.cssText = "background-color: purple;"
  })
});

const reset = document.querySelector('button');

// reset button
reset.addEventListener('click', () => {
  cells.forEach(cell => {
      cell.className = 'grid-item'
    })
});