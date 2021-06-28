//Function to create divs for the grid
function createDiv(num) {
    let x = 0;
    let y = (num * num) - 1;
    const grid = document.querySelector('#grid');
    while (x <= y) {
        const square = document.createElement("div");
        square.classList.add('square');
        grid.appendChild(square);
        x++;
    }
}
//creating initial grid 16x16
createDiv(16);

//function to change size of grid display to user input

function changeGrid() {
    let num = prompt('How many columns do you want in your sketchpad? Enter a number 1-100');

    createDiv(num);

    //Changing style for responsive grid - was going to attemp to insert (num / 2) into row template, but even style without variable isn't working
    document.querySelector("#grid").style.gridTemplateColumns = "repeat(4, 1fr);";
    document.querySelector("#grid").style.gridTemplateRows = "repeat(4, 1fr);";
    
      

    //adding event listener to new divs

    // document.querySelectorAll('.square').forEach(square => {
    // square.addEventListener('mouseenter', event => {
    //     square.style.backgroundColor = 'black';
    // })
    //  })

}

//Functions and Event Listener for squares/change colors
//document.querySelectorAll('.square').forEach(square => {
//square.addEventListener('mouseenter', event => {
//square.style.backgroundColor = 'black';
 //})
//})

//new event listener - Not working
document.addEventListener('mouseenter', () => {
    let sketchpad = document.getElementByClass('div');
    if (sketchpad.classList.contains('square')) {
        sketchpad.classList.add('black');
        //for(var i = 0; i < sketchpad.length; i++) {
          //  sketchpad[i].classList.add('black');
    }
})

//Reset Button
document.querySelector('button').addEventListener("click", () => {
    document.querySelectorAll('.square').forEach(square => {
        var cleanSlate = document.getElementsByClassName("square");
        for(var i = 0; i < cleanSlate.length; i++) {
        cleanSlate[i].parentNode.removeChild(cleanSlate[i]);
    }})
    changeGrid();
})