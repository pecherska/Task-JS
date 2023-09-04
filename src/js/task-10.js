const inputNumber = document.querySelector("#controls > input");
const createBoxBtn = document.querySelector("[data-create]");
const destroyBoxBtn = document.querySelector("[data-destroy]");
const divNewBoxes = document.querySelector("#boxes");

console.dir(inputNumber);
console.dir(createBoxBtn);
console.dir(destroyBoxBtn);
console.dir(divNewBoxes);

createBoxBtn.addEventListener("click", onClick);
destroyBoxBtn.addEventListener("click", destroyBox)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


function onClick() {
    const amount = inputNumber.valueAsNumber;
    
    createBoxes(amount);
    function createBoxes(amount) {

        destroyBox();
        
   
        for (let i = 0; i < amount; i += 1) {
            const divEl = document.createElement("div");
            const color = getRandomHexColor();
            
            divEl.style.backgroundColor = color;
            divEl.style.width = `${30 + i * 10}px`;
            divEl.style.height = `${30 + i* 10}px`;
            divEl.classList = "box"
            divNewBoxes.appendChild(divEl);
        }

    

        console.log(markUp);

    }

  
};

function destroyBox() {
    // divNewBoxes.innerHTML = "";
    // inputNumber.valueAsNumber = "";


    const boxes = document.querySelectorAll(".box");
    for (const box of boxes) {
        box.remove();
    }
}