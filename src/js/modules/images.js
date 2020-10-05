export default function gallery(){
	const popup = document.querySelector('.popup-gallery');
	const imageBlock = document.querySelector('.image-block');
	const image = imageBlock.querySelector('img');
	const gallery = document.querySelector('#js-gallery');

	gallery.addEventListener('click', function (event){
		event.preventDefault();
		const target = event.target;

		if(target && target.classList.contains('preview')){
			const imgPath = target.closest('a').getAttribute('href');
			image.setAttribute('src', imgPath);
			popup.style.display = 'flex';
			document.body.style.overflow = 'hidden';
		}
		if(target.matches('div.popup')){
			div.style.display = 'none';
			document.body.style.overflow = '';
		}
	});
};