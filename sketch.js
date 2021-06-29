//Function to create divs for the grid
function createGrid(num) {
    let y = (num * num) - 1;
    let grid = document.querySelector('#grid');
    for (let x = 0; x <= y; x++) {
        const square = document.createElement("div");
        square.classList.add('square');
        grid.appendChild(square);
    }
    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('mouseenter', event => {
           square.classList.add('black');
        })
        })
}

//function deleteGrid


function changeGrid() {
    let num = prompt('How many columns do you want in your sketchpad? Enter a number 1-100');
    //put in validation
    createGrid(num);

    //Changing style for responsive grid - was going to attemp to insert (num / 2) into row template, but even style without variable isn't working
    let grid = document.querySelector("#grid");
    let style = `repeat(${num}, 1fr`;
    grid.setAttribute("style", `grid-template-columns: ${style}`);
    grid.setAttribute("style", `grid-template-rows: ${style}`);
    //document.querySelector("#grid").style.gridTemplateColumns = "repeat(4, 1fr);";
    //document.querySelector("#grid").style.gridTemplateRows = "repeat(4, 1fr);";
}


// --- EXECUTE STUFF ---
//Reset Button
document.querySelector('button').addEventListener("click", () => {
    document.querySelectorAll('.square').forEach(square => {
        var cleanSlate = document.getElementsByClassName("square");
        for(var i = 0; i < cleanSlate.length; i++) {
        cleanSlate[i].parentNode.removeChild(cleanSlate[i]);
    }})
    changeGrid();
})

createGrid(16);
