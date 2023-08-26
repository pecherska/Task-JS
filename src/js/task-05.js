const input = document.querySelector("#name-input");
console.dir(input);
const name = document.querySelector("#name-output");
console.dir(name);

input.addEventListener("input", textChange);

function textChange(event) {
    if (!event.currentTarget.value) {
        name.textContent =  'Anonymous';
    } else {
    name.textContent = event.currentTarget.value;
    }
       }
    
   
  
   
  


