const fontSizeControl = document.querySelector("#font-size-control");
console.dir(fontSizeControl);
const textSize = document.querySelector("#text");
console.dir(textSize);

fontSizeControl.addEventListener("input", changeSize);

function changeSize(event) {
    
    textSize.style.fontSize = Number(event.currentTarget.value)+'px';
  
    console.log((event.currentTarget.value))
}