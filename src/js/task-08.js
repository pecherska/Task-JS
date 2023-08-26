const form = document.querySelector(".login-form");
console.dir(form);

form.addEventListener("submit", formProcessing);

function formProcessing(event) {
    event.preventDefault();
  
    const { email, password } = event.currentTarget.elements;
    
    console.dir(email.value);
    console.dir(password.value);

    const data = {
        login: email.value ,
        password: password.value ,
    };
    
        if (email.value === "" || password.value === "") {
            return alert("Please fill in all the fields!");
    };
    
         console.log(data);
        event.currentTarget.reset();

   
    //  const form = event.currentTarget;
    // const email = form.elements.email.value;
    // const password = form.elements.password.value;
    
    //   if (email === "" || password === "") {
    //         return alert("Please fill in all the fields!");
    // };
    
    // const data = {
    //     email,
    //     password,
    // }

    // console.log(data);
    
    }

    

