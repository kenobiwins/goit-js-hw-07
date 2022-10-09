import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector(".gallery");

function createElement(arr) {
    return arr.reduce((acc, { original, preview, description }) => acc += `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" loading="lazy"/>
    </a>`, '');
}

function insertElement(string) {
    return galleryRef.insertAdjacentHTML("beforeend",string);
}

insertElement(createElement(galleryItems))


var lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
    showCounter: false,
    animationSpeed: 450,
    fadeSpeed: 350,
    // scaleImageToRatio: true,
});


