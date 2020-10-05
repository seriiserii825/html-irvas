import "./modules/slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import postForms from "./modules/forms";
import timer from "./modules/timer";
import gallery from "./modules/images";

window.addEventListener('DOMContentLoaded', function (){
	modals();
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.decoration_item', '.decoration_content > div > div', 'slick-current');
	postForms();
	timer('#js-timer', '2020-11-17');
	gallery();
});