import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);




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




function onGalleryContainerClick(event) {
	event.preventDefault();
 
	if (event.target.nodeName !== "IMG"){
	  return;
	};
	const gallery = new SimpleLightbox('.gallery a', {
		captionsData: 'alt',
		captionPosition: 'bottom',
		captionDelay: 250,
	});
};

