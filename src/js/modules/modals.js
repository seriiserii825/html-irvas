import calcScroll from "./calc-scroll";
export default function modals() {
	function bindModal(openModalSelector, modalSelector, closeModalSelector) {
		const openModal = document.querySelectorAll(openModalSelector);
		const modal = document.querySelector(modalSelector);
		const closeModal = document.querySelector(closeModalSelector);
		const scrollWidth = calcScroll();

		openModal.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scrollWidth}px`;
			});
		});

		closeModal.addEventListener('click', () => {
			modal.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = `0`;
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal.style.display = 'none';
				document.body.style.overflow = '';
				document.body.style.marginRight = `0`;
			}
		});
	}

	function openModalByTime(selector, time) {
		const modalTimeOut = setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
			clearTimeout(modalTimeOut);
		}, time);
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	// openModalByTime('.popup', 3000);
};