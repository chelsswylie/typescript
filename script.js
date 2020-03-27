// 1. To randomly assign "it" to one of the cells
var generateRandom = Math.floor(Math.random() * 16);
// 2. Get the cells
var cells = document.getElementsByClassName('cell');
console.log('cells', cells);
// 3. Assign "it" to a cell 
cells[generateRandom].id = 'it';
// 4. Create list of the cells that have been clicked
var clickedCells = [];
// 5. Create the changeColor function
var changeBackgroundColor = function (e) {
    var matches = document.querySelectorAll("div");
    if (e.target.className === "cell") {
        // e.target.style.backgroundColor = "green";
        clickedCells.push(e.target);
    }
    for (var _i = 0, clickedCells_1 = clickedCells; _i < clickedCells_1.length; _i++) {
        var cell = clickedCells_1[_i];
        cell.style.backgroundColor = "green";
    }
    if (e.target.id === "it") {
        e.target.style.backgroundColor = "red";
    }
};
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function (event) { return changeBackgroundColor(event); });
}
