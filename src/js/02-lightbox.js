import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);




function createGalleryCards(galleryItems) {
	return galleryItems.map(({ preview, original, description }) => {
	return `
			<a class="gallery__item" href="${original}">
				<img
					class="gallery__image"
					src="${preview}"
					data-source="${original}"
					alt="${description}"
				/>
			</a>
			`;
	})
	.join('');
};


const gallery = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
});

