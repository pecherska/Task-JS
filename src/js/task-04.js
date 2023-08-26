const counterValue = document.querySelector("#value");
let value = Number(document.querySelector("#value").textContent)
console.dir(counterValue);
console.log(value);



const buttonDecrement = document.querySelector('button[data-action="decrement"]');
console.dir(buttonDecrement);


const buttonIncrement = document.querySelector('button[data-action="increment"]');
console.dir(buttonIncrement);

buttonDecrement.addEventListener('click', onClick);
buttonIncrement.addEventListener('click', onClick);

function onClick(event) {
    const button = event.currentTarget;

    // console.dir(button.dataset === buttonIncrement.dataset)

    if (button.dataset === buttonIncrement.dataset) {
        value += 1;
        counterValue.innerHTML = value;
    } else {
        value -= 1;
        counterValue.innerHTML = value;
    }
   
};





   
