//Creating Divs
alert("hi");

function createDiv(){
    let x = 0;
    let y = 15;
    const container = document.querySelector('.container');
    while(x <= y){
        const square = document.createElement("div");
        container.appendChild(square);
        x++;
    }
}
createDiv();