const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    cell.innerText = (c + 1);
    container.appendChild(cell).className = 'cell grid-item';
  };
};


const vrows = prompt("Insert how many Vertical cells (32 recommended)")
const hrows = prompt("Insert how many Vertical cells (32 recommended)")

makeRows(vrows, hrows);


// setting cells that have been hover
const cells = document.querySelectorAll('.grid-item');

cells.forEach(cell => {
  cell.addEventListener('mouseover', () => {
    cell.className = 'cell permahover'
    //cell.style.cssText = "background-color: purple;"
  })
});

// clear button
const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
  cells.forEach(cell => {
      cell.className = 'cell grid-item'
    })
});

// reset button
const reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
  const toRemove = document.querySelectorAll('.cell')

  toRemove.forEach(cell => {
    container.removeChild(cell)
  })
  
  const vrows = prompt("Insert how many Vertical cells (32 recommended)")
  const hrows = prompt("Insert how many Vertical cells (32 recommended)")

  makeRows(vrows, hrows);

  // setting cells that have been hover
  const cells = document.querySelectorAll('.grid-item');

  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      cell.className = 'cell permahover'
      //cell.style.cssText = "background-color: purple;"
    })
  });

  // clear button
  const clear = document.querySelector('.clear');

  clear.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.className = 'cell grid-item'
      })
  });
});