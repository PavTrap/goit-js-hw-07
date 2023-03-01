import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);




function createGalleryCards(galleryItems) {
	return galleryItems.map(({ preview, original, description }) => {
	return `
		<div class="gallery__item">
			<a class="gallery__link" href="${original}">
				<img
					class="gallery__image"
					src="${preview}"
					data-source="${original}"
					alt="${description}"
				/>
			</a>
		</div>
		`;
	})
	.join('');
};




function onGalleryContainerClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG"){
    return;
  }
  // const isItemImage = event.target.classList.contains('gallery__image');
  // if (!isItemImage) return;

  const ObjectEsc =  {
    onShow: () => {
       window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: () => {
       window.removeEventListener('keydown', onEscKeyPress);
    },
  };

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1280" height="auto"/>`,
    ObjectEsc
  );

  instance.show();
    
  function onEscKeyPress (event) {
    if (event.code === 'Escape') {
    instance.close();
    };
  };
}