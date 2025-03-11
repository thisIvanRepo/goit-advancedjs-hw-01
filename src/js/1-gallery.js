import SimpleLightbox from 'simplelightbox';
import images from './img.js';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    return;
  }
});

const markupItemsImages = images.map(image => getHtmlLiImages(image)).join('');

gallery.innerHTML = markupItemsImages;

new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

function getHtmlLiImages(image) {
  const { preview, original, description } = image;

  return `
          <li class="gallery-item">
	          <a class="gallery-link" href="${original}">
		          <img
			          class="gallery-image"
			          src="${preview}"
			          alt="${description}"
			        />
	          </a>
          </li>`;
}
