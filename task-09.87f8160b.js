const o=document.querySelector(".change-color");console.dir(o);const t=document.querySelector("body");console.dir(t);const e=document.querySelector(".color");o.addEventListener("click",(function(o){function n(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const c=n();console.log(c),o.currentTarget&&(t.style.backgroundColor=n(),e.textContent=c)}));
//# sourceMappingURL=task-09.87f8160b.js.map