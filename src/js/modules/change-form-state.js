import checkInputNumber from "./check-input-number";

export default function changeFormState(state) {
	const windowForm = document.querySelectorAll('.balcon_icons_img');
	const inputWidth = document.querySelectorAll('#width');
	const inputHeight = document.querySelectorAll('#height');
	const select = document.querySelectorAll('#view_type');
	const checkbox = document.querySelectorAll('.checkbox');


	checkInputNumber('#width');
	checkInputNumber('#height');

	function bindActionsToElems(event, elem, prop) {
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
					case 'SPAN':
						state[prop] = i;
						break;
					case 'INPUT':
						if (item.getAttribute('type') === 'text') {
							state[prop] = item.value;
						} else if (item.getAttribute('type') === 'checkbox') {
							state[prop] = item.closest('label').querySelector('.label').textContent;
							elem.forEach((box, k) => {
								box.checked = false;
								box.checked = (i === k);
							});
						}
						break;
					case 'SELECT':
						state[prop] = item.value;
						break;
				}
				console.log(state);
			})
		});
	}

	bindActionsToElems('click', windowForm, 'window');
	bindActionsToElems('input', inputWidth, 'width');
	bindActionsToElems('input', inputHeight, 'height');
	bindActionsToElems('change', checkbox, 'weather');
	bindActionsToElems('change', select, 'profile');
}