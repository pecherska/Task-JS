!function(){var e=document.querySelector("#controls > input"),t=document.querySelector("[data-create]"),o=document.querySelector("[data-destroy]"),r=document.querySelector("#boxes");function n(){var e=document.querySelectorAll(".box"),t=!0,o=!1,r=void 0;try{for(var n,c=e[Symbol.iterator]();!(t=(n=c.next()).done);t=!0){n.value.remove()}}catch(e){o=!0,r=e}finally{try{t||null==c.return||c.return()}finally{if(o)throw r}}}console.dir(e),console.dir(t),console.dir(o),console.dir(r),t.addEventListener("click",(function(){!function(e){n();for(var t=0;t<e;t+=1){var o=document.createElement("div"),c="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));o.style.backgroundColor=c,o.style.width="".concat(30+10*t,"px"),o.style.height="".concat(30+10*t,"px"),o.classList="box",r.appendChild(o)}console.log(markUp)}(e.valueAsNumber)})),o.addEventListener("click",n)}();
//# sourceMappingURL=task-10.62006887.js.map
