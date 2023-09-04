import { galleryItems } from './gallery-items.js';

// Change code below this line
const ulEl = document.querySelector(".gallery");
ulEl.addEventListener("click", onClick);
console.dir(ulEl); 
const markUp = galleryItems
    .map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `)
    .join("");
ulEl.insertAdjacentHTML("beforeend", markUp);


function onClick(event) {
  if (event.target.classList.contains("gallery__link")) {
    return;
  }
  event.preventDefault();
  // console.dir(event.target.nodeName === "IMG")
  // console.dir (event.target.dataset.source)
  
  const option = {  
    handler: null,  // ключ, обробник (прибайндити та записати посилання на функцію)
    onShow() {
      console.log(instance);
      console.log(this);
      this.handler = closeModal.bind(instance);
      // document.addEventListener('keydown', closeModal); і як прослуховувача подій додаємо this handler - копія з bint (bind назавжди прив'язує this), ми не можемо insta
      document.addEventListener('keydown', this.handler);
    },

    onClose() { 
      console.log(this)
      document.removeEventListener('keydown', this.handler);

    }
      
  }
  
  const instance = basicLightbox.create(`<img
      src="${event.target.dataset.source}"
      width="800" height="600"
    />`, option);
  instance.show();


function closeModal(e) {
  if (e.code === 'Escape') {
    // instance.close(); звертаємося не до instanse а до this, що в bind.
    this.close()
  }
}
    
  //  document.addEventListener("keydown", onKeyboardPress);
  //   function onKeyboardPress(event) {
  //       console.log(event)
  //       if (event.code === "Escape")
  //           instance.close();
  //           document.removeEventListener("keydown", onKeyboardPress);
  //   }
}





  

console.log(galleryItems);


