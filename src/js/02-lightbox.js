import { galleryItems } from './gallery-items.js';

// Change code below this line

const ulEl = document.querySelector(".gallery");
ulEl.addEventListener("click", onClick);
console.dir(ulEl); 
const markUp = galleryItems
    .map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li> `)
    .join("");
ulEl.insertAdjacentHTML("beforeend", markUp);

const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });
// lightbox.open();


 
function onClick(event) {    
   event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    event.preventDefault();
    lightbox.open();
}

