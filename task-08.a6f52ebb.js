const e=document.querySelector(".login-form");console.dir(e),e.addEventListener("submit",(function(e){e.preventDefault();const{email:l,password:r}=e.currentTarget.elements;console.dir(l.value),console.dir(r.value);const t={email:l.value,password:r.value};if(""===l.value||""===r.value)return alert("Please fill in all the fields!");console.log(t),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.a6f52ebb.js.map
