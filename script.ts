// 1. To randomly assign "it" to one of the cells
const generateRandom = (it: Number) => Math.floor(Math.random() * 16);
interface generateRandom {
    it: Number;
}
// 2. Get the cells
const cells = (number?: generateRandom) => document.getElementsByClassName('cell');
console.log('cells', cells);

// 3. Assign "it" to a cell 
cells[generateRandom].id = 'it';

// 4. Create list of the cells that have been clicked
const clickedCells = [];

// 5. Create the changeColor function

const changeBackgroundColor = (color: generateRandom) => (e) => {
    var matches = document.querySelectorAll("div");
    if (e.target.className === "cell") {
        // e.target.style.backgroundColor = "green";
        clickedCells.push(e.target);
    }
    
    for (let cell of clickedCells) {
        cell.style.backgroundColor = "green";
    }

    if (e.target.id === "it") {
        e.target.style.backgroundColor = "red";
    }
}
    
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', (event) => changeBackgroundColor(event));
    }