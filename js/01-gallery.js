import { galleryItems } from './gallery-items.js';

// items refs
const galleryRef = document.querySelector("div.gallery");

// add event listeners
galleryRef.addEventListener("click", showFullImg);

// functions
function createElement(arr) {
    return arr.reduce((acc, {original,preview,description}) => acc += `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" loading="lazy"/>
    </a>
    </div>`, '');
}

function insertElement(string) {
    return galleryRef.insertAdjacentHTML("beforeend",string);
}

function showImg(e) {
    const { target } = e;
    const imgWindow = basicLightbox.create(`
	<img src="${target.getAttribute("data-source")}" alt="${target.getAttribute("alt")}">
	`);
    imgWindow.show();
// add and remuve event listener on esc
    if (imgWindow.show()) {
        window.addEventListener("keydown",closeOnEsc)
    } else if (!imgWindow.show()) {
        window.removeEventListener('keydown',closeOnEsc)
    }

    function closeOnEsc(e) {
        if (e.code === "Escape") {
            imgWindow.close()
        }
}
};

function showFullImg(e) {
    e.preventDefault()
    const { target } = e;
    const image = target.nodeName == "IMG";

    if (!image) {
        return
    } else if (image) {
        showImg(e);
    }
};

// call functions
insertElement(createElement(galleryItems));

