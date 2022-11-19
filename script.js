const container = document.querySelector('#container')
const gridSize = 16; // how many grid's cells
let grid = [];
//let grid = ([],[]);

for (let i = 1; i <= gridSize; i++) {
    grid.push(document.createElement('div'))
    //grid[i].style.fontSize = 14;
    //grid[i].classList = i+1;
}

let i = 1
grid.forEach(cell => {
    cell.innerText = `I'm ${i}`;
    //cell.style.fontSize = 14;
    cell.classList = i;
    container.appendChild(cell);
    i++
});

//testing grid
console.log(grid[1]);
console.log(grid[3]);
console.log(grid[5]);
console.log(grid[15]);










/*
const cells = document.querySelectorAll('div');

for (let i = 1; i < cells.length; i++) {
    const element = cells[i];
    cells[i].innerText = "ey";
}


//testing cells
console.log(cells);

*/