export default function postForms() {
	const forms = document.querySelectorAll('form');
	const inputs = document.querySelectorAll('form input');
	const phoneInputs = document.querySelectorAll('form input[name="user_phone"]');

	function checkInputNumber(input){
		input.value = input.value.replace(/\D/, '');
	}

	phoneInputs.forEach(item => {
		item.addEventListener('input', () => {
			checkInputNumber(item);
		});
	});

	const messages = {
		loading: "Идет отправка данных",
		success: "Данные успешно получены",
		error: "Произошла ошибка"
	};

	const postData = async (url, data) => {
		const res = await fetch(url, {
			method: "POST",
			body: data
		});
		return await res.text();
	}

	function clearData() {
		inputs.forEach(item => {
			item.value = '';
		});
		setTimeout(() => {
			document.querySelector('.message-block').remove();
		}, 3000);
	}

	forms.forEach(item => {

		const messageBlock = document.createElement('div');
		messageBlock.classList.add('message-block');
		item.appendChild(messageBlock);


		item.addEventListener('submit', (e) => {
			e.preventDefault();

			document.querySelector('.message-block').innerHTML = messages.loading;

			const formData = new FormData(item);
			postData('./assets/server.php', formData)
				.then((data) => {
					console.log(data);
					document.querySelector('.message-block').textContent = messages.success;
				})
				.catch(() => {
					document.querySelector('.message-block').innerHTML = messages.error;
				})
				.finally(() => {
					clearData();
				});
		});
	});
};