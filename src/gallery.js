import Masonry from "masonry-layout";

window.onload = () => {
  const galleryRef = document.querySelector('.gallery__items');

  const masonry = new Masonry(galleryRef, {
    itemSelector: '.gallery__item',
    gutter: 10,
  });
};
