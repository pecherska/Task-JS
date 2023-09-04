const e=document.querySelector("#validation-input");console.dir(e),e.addEventListener("blur",(function(t){const a=Number(e.dataset.length);t.currentTarget.value.length===a?(e.classList.add("valid"),e.classList.remove("invalid")):(e.classList.add("invalid"),e.classList.remove("valid"));console.dir(e.dataset.length)}));
//# sourceMappingURL=task-06.5ffebdd5.js.map
