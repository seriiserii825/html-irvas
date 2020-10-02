import "./modules/slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import postForms from "./modules/forms";

window.addEventListener('DOMContentLoaded', function (){
	modals();
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.decoration_item', '.decoration_content > div > div', 'slick-current');
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more');
	postForms();
});