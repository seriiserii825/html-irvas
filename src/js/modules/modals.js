export default function modals() {
	function bindModal(openModalSelector, modalSelector, closeModalSelector, closeModalOnOverlay = true) {
		const openModal = document.querySelectorAll(openModalSelector);
		const modal = document.querySelector(modalSelector);
		const closeModal = document.querySelector(closeModalSelector);
		const allModals = document.querySelectorAll('[data-modal]');

		function closeAllModals(){
			allModals.forEach(item => {
				item.style.display = 'none';
			});
		}

		openModal.forEach(item => {
			item.addEventListener('click', (e) => {
				closeAllModals();
				if (e.target) {
					e.preventDefault();
				}
				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
			});
		});

		closeModal.addEventListener('click', () => {
			closeAllModals();
			modal.style.display = 'none';
			document.body.style.overflow = '';
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeModalOnOverlay) {
				closeAllModals();
				modal.style.display = 'none';
				document.body.style.overflow = '';
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

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', false);
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	// openModalByTime('.popup', 3000);
};