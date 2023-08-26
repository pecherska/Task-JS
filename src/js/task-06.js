const input = document.querySelector("#validation-input");
console.dir(input);

input.addEventListener("blur", textChange);

function textChange(event) {
   const  maxLenght = Number(input.dataset.length);
    if (event.currentTarget.value.length === maxLenght) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
    console.dir(input.dataset.length);

    }