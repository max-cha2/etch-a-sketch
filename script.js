const grid = document.getElementById('grid');
const containerOne = document.getElementById('container-one');
const clearButton = document.querySelector(".clear-button");
const changeGridSize = document.querySelector(".change-grid-size");
const crazyMode = document.querySelector(".crazy-mode");
var r = document.querySelector(':root');

function color(temp){
    temp.addEventListener('mouseover', function handleMouseOver() {
        temp.style.backgroundColor = "gray";
    });
}

function clear(temp){
    clearButton.addEventListener('click', () => {
        temp.style.backgroundColor = "white";
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function sickoMode(temp){
    temp.addEventListener('mouseover', function handleMouseOver() {
        temp.style.backgroundColor = getRandomColor();
    });
}

function createGrid(row, col){
    for (let i = 0; i < row * col; i++){
        let square = document.createElement("div");
        grid.appendChild(square).className = "squares";
        color(square);
        if (clearButton.firstChild.nodeValue === 'clear'){
            clear(square);
        }
        if (crazyMode.firstChild.nodeValue === 'crazy mode'){
            crazyMode.addEventListener('click', () => {
                sickoMode(square);
            });
        }
    }
}

let rowNum = 16;
let colNum = 16;
function main(){
    let newRow = rowNum;
    let newCol = colNum;
    if (changeGridSize.firstChild.nodeValue === 'change grid size'){
        changeGridSize.addEventListener('click', () => {
            newRow = parseInt(prompt("Change the row size (max is 100, default is 16x16): "));
            newCol = parseInt(prompt("Change the col size (max is 100, deafult is 16x16): "));
            document.documentElement.style.setProperty('--grid-size', newRow);
            createGrid(newRow, newCol);
        });   
    }
    createGrid(newRow, newCol);
}

main();