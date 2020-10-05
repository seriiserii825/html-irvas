export default function timer(elementId, deadline) {
	function getTimeRemaining(deadline) {
		const t = Date.parse(deadline) - Date.parse(new Date());
		const seconds = Math.floor((t / 1000) % 60);
		const minutes = Math.floor((t / 1000 / 60) % 60);
		const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		const days = Math.floor((t / (1000 * 60 * 60 * 24)));

		return {
			'total': t,
			'seconds': seconds,
			'minutes': minutes,
			'hours': hours,
			'days': days
		};
	}

	function setClock(elementId, deadline) {
		const days = document.querySelector('#days');
		const hours = document.querySelector('#hours');
		const minutes = document.querySelector('#minutes');
		const seconds = document.querySelector('#seconds');
		const timerInterval = setInterval(updateClock, 1000);

		updateClock();

		function addZero(num) {
			if (num < 9) {
				return '0' + num;
			} else {
				return num;
			}
		}

		function updateClock() {
			const t = getTimeRemaining(deadline);
			days.textContent = addZero(t.days);
			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

			if (t.total <= 0) {
				days.textContent = "00";
				hours.textContent = "00";
				minutes.textContent = "00";
				seconds.textContent = "00";
				clearInterval(timerInterval);
			}
		}
	}

	setClock(elementId, deadline);
};