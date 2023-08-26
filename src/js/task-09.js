const button = document.querySelector(".change-color");
console.dir(button);
const body = document.querySelector("body");
console.dir(body)
const spanEl = document.querySelector(".color");

button.addEventListener("click", changeColor);

function changeColor(event) {

  

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const newColor = getRandomHexColor();
  console.log(newColor);


  if (event.currentTarget) {
    body.style.backgroundColor = getRandomHexColor();
    spanEl.textContent = newColor;
    
  }

}




//   function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// };
  
// console.log(getRandomHexColor())

// function changeColor(event) {

//     function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
//   };

  
//   function rgbToHex(r, g, b) {
//   const rgb = (r << 16) | (g << 8) | (b << 0);
//   return '#' + (0x1000000 + rgb).toString(16).slice(1);
// }
  
//     let rgbColors = body.style.backgroundColor;

//   rgbColors = rgbColors.substring(4, rgbColors.length-1)
//          .replace(/ /g, '')
//     .split(',');
  
//   const r = Number(rgbColors[0]);
//   const g = Number(rgbColors[1]);
//   const b = Number(rgbColors[2]);

//   console.log(r);
//   console.log(g);
//   console.log(b);
//   console.log(rgbColors);

//   if (event.currentTarget) {
//     body.style.backgroundColor = getRandomHexColor();
//     spanEl.textContent = rgbToHex(r, g, b);
    
//   }
  
  
//   function rgbToHex(r, g, b) {
//   const rgb = (r << 16) | (g << 8) | (b << 0);
//   return '#' + (0x1000000 + rgb).toString(16).slice(1);
// }

  
//  }
