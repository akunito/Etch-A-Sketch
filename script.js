const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    //cell.innerText = (c + 1); // show cell's number
    container.appendChild(cell).className = 'cell grid-item';
  };
};

// start button
const start = document.querySelector('.start');

start.addEventListener('click', () => {
  const toRemove = document.querySelectorAll('.cell')

  toRemove.forEach(cell => {
    container.removeChild(cell)
  })
  
  const vrows = prompt("How many Vertical cells ?", "200")
  const hrows = prompt("How many Horizontal cells ?", "200")

  makeRows(vrows, hrows);

  // setting cells that have been hover
  const cells = document.querySelectorAll('.grid-item');

  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      if (cell.className == 'cell grid-item'){
        console.log("this cell is permahover1 now")
        cell.className = 'cell permahover1'
      } else if (cell.className == 'cell permahover1') {
        cell.className = 'cell permahover2'
      } else if (cell.className == 'cell permahover2') {
        cell.className = 'cell permahover3'
      } else if (cell.className == 'cell permahover3') {
        cell.className = 'cell permahover4'
      } else if (cell.className == 'cell permahover4') {
        cell.className = 'cell permahover5'
      } else if (cell.className == 'cell permahover5') {
        cell.className = 'cell permahover6'
      } else if (cell.className == 'cell permahover6') {
        cell.className = 'cell permahover7'
      } else if (cell.className == 'cell permahover7') {
        cell.className = 'cell permahover8'
      } else if (cell.className == 'cell permahover8') {
        cell.className = 'cell permahover9'
      } else if (cell.className == 'cell permahover9') {
        cell.className = 'cell permahover10'
      } else if (cell.className == 'cell permahover10') {
        cell.className = 'cell permahover11'
      }
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