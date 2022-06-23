const container = document.getElementById("container");
const squaresNumber = 500;

for(let i=0; i<squaresNumber; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    container.appendChild(square);
}