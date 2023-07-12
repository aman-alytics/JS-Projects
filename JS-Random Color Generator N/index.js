const containerEL = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEL.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll.apply(".color-container")

function generateColors() {
    colorContainerEls.forEach((colorContainerEl)=> {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor;
    })
}

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() *
        chars.length);
        color += chars.substring(randomNum, randomNum + 1);
        
    }
    return colorCode;
}