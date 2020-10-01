export default function tabs(headerSelector, tabsSelector, contentSelector, activeClass){
	const header = document.querySelector(headerSelector);
	const tabs = document.querySelectorAll(tabsSelector);
	const content = document.querySelectorAll(contentSelector);

	function hideTabs(){
		tabs.forEach(item => {
			item.classList.remove(activeClass);
		});
		content.forEach(item => {
			item.style.display = 'none';
		});
	}


	function showTab(i = 0){
		tabs[i].classList.add(activeClass);
		content[i].style.display = 'block';
	}
	showTab();

	header.addEventListener('click', (e) => {
		const target = e.target;

		if(target && target.classList.contains(tabsSelector.replace(/\./, '')) || target.closest(tabsSelector).classList.contains(tabsSelector.replace(/\./, ''))){
			tabs.forEach((item, index) => {
				if(target === item || target.closest(tabsSelector) === item){
					hideTabs();
					showTab(index);
				}
			});
		}
	});
};