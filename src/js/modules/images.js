import calcScroll from "./calc-scroll";
export default function gallery(){
	const popup = document.querySelector('.popup-gallery');
	const imageBlock = document.querySelector('.image-block');
	const image = imageBlock.querySelector('img');
	const gallery = document.querySelector('#js-gallery');
	const scrollWidth = calcScroll();

	gallery.addEventListener('click', function (event){
		event.preventDefault();
		const target = event.target;

		if(target && target.classList.contains('preview')){
			const imgPath = target.closest('a').getAttribute('href');
			image.setAttribute('src', imgPath);
			popup.style.display = 'flex';
			image.classList.add('scale');
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = `${scrollWidth}px`;
		}
		if(target.matches('div.popup-gallery')){
			popup.style.display = 'none';
			image.classList.remove('scale');
			document.body.style.overflow = '';
			document.body.style.marginRight = `0`;
		}
	});
};