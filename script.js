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

makeRows(32, 32);

const cells = document.querySelectorAll('.grid-item');

cells.forEach(cell => {
  cell.addEventListener('mouseover', () => {
    cell.className = 'permahover'
    //cell.style.cssText = "background-color: purple;"
  })
});
