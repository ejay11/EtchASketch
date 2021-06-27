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
//createDiv(16);

//function to change size of grid display to user input

function changeGrid() {
    let num = prompt('How many columns do you want in your sketchpad? Enter a number 1-100');
    //try to remove previous square divs. Not currently working//

    createDiv(num);

    //adding event listener to new divs

    // document.querySelectorAll('.square').forEach(square => {
    // square.addEventListener('mouseenter', event => {
    //     square.style.backgroundColor = 'black';
    // })
    //  })

}

//Functions and Event Listener for squares/change colors
document.querySelectorAll('.square').forEach(square => {
square.addEventListener('mouseenter', event => {
square.style.backgroundColor = 'black';
 })
})

//new event listener - Not working
//document.querySelector('container').addEventListener('mouseenter', () => {
    //let sketchpad = document.getElementById('grid');
   // if (sketchpad.classList.contains('square')) {
     //   sketchpad.classList.add('black');
    //}
//})

document.querySelector('button').addEventListener("click", () => {
    document.querySelectorAll('.square').forEach(square => {
        //square.style.backgroundColor = 'white';
        var cleanSlate = document.getElementsByClassName("square");
        for(var i = 0; i < cleanSlate.length; i++) {
        cleanSlate[i].parentNode.removeChild(cleanSlate[i]);
        //square.remove()
    }})
    changeGrid();
})