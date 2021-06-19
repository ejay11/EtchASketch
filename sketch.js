//Creating Divs

function createDiv(){
    let x = 0;
    let y = 255;
    const container = document.querySelector('.container');
    while(x <= y){
        const square = document.createElement("div");
        square.id = 'square';
        container.appendChild(square);
        x++;
    }
}
createDiv();

const squares = document.querySelectorAll('#square');

squares.forEach((square) => {
    square.addEventListener("mouseenter", () =>{
        square.style.backgroundColor = 'black';
    });
    
    //square.addEventListener("mouseleave", () =>{
        //square.style.backgroundColor = 'white';
   // })
});



//function colorChange {
   // square.style.backgroundColor = 'black';
//}

//function colorRemove{
  //  square.style.backgroundColor = 'white';
//}