//Function to create divs for the grid
function createGrid(num) {
    let y = (num * num) - 1;
    const gridContainer = document.querySelector('#gridContainer');
    const gridElem = document.createElement('div');
    gridElem.id = 'grid';
    gridContainer.append(gridElem);
    for (let x = 0; x <= y; x++) {
        const square = document.createElement("div");
        square.classList.add('square');
        gridElem.appendChild(square);
    }
    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('mouseenter', event => {
            square.classList.add('black');
        })
    })
}

function deleteGrid() {
    const grid = document.querySelector('#grid');
    grid.remove()
}


function changeGrid() {
    let num = prompt('How many columns do you want in your sketchpad? Enter a number 1-100');
    //put in validation
    deleteGrid();
    createGrid(num);

    //Changing style for responsive grid
    let grid = document.querySelector("#grid");
    let gridStyle = `repeat(${num}, 1fr);`;
    grid.setAttribute('style', `grid-template-columns: ${gridStyle}; grid-template-rows: ${gridStyle}`);
}


// --- EXECUTE STUFF ---
//Reset Button
document.querySelector('button').addEventListener("click", changeGrid);

createGrid(16);