/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';
import $ from "jquery";

import BaseHelpers from './helpers/base-helpers';
import PopupManager from './modules/popup-manager';
import BurgerMenu from './modules/burger-menu';
import Tabs from './modules/tabs';
import Accordion from './modules/accordion';
import "slick-slider";
import "../../node_modules/@glidejs/glide/dist/glide.min.js";


BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

new Tabs('tabs-example', {
	onChange: (data) => {
		console.log(data);
	},
});

new Accordion('.accordion', {
	shouldOpenAll: false, // true
	defaultOpen: [], // [0,1]
	collapsedClass: 'open',
});

// document.querySelector('#articles').requestPointerLock();

new Glide('.glide').mount();

let prevBtn = `<button class="slick-prev slick-arrow " aria-label="Previous" type="button" aria-disabled="true" style=""><svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  fill-rule="evenodd" clip-rule="evenodd" d="M12.9298 1.61631C12.0372 0.723686 10.5899 0.723686 9.6973 1.61631L1.63113 9.68249C1.62606 9.68746 1.62101 9.69247 1.61598 9.6975C0.72335 10.5901 0.723349 12.0374 1.61598 12.93L9.6972 21.0112C10.5898 21.9038 12.0371 21.9038 12.9297 21.0112C13.8223 20.1186 13.8223 18.6713 12.9297 17.7787L6.46478 11.3138L12.9298 4.8488C13.8224 3.95617 13.8224 2.50894 12.9298 1.61631Z" fill="#1E959B"/>
</svg>
</button>`;
let nextBtn = `<button type="button" class="slick-next  slick-arrow "><svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.21181 1.61631C2.10444 0.723686 3.55167 0.723686 4.4443 1.61631L12.5105 9.68249C12.5155 9.68746 12.5206 9.69247 12.5256 9.6975C13.4183 10.5901 13.4183 12.0374 12.5256 12.93L4.44441 21.0112C3.55178 21.9038 2.10454 21.9038 1.21192 21.0112C0.319291 20.1186 0.31929 18.6713 1.21192 17.7787L7.67682 11.3138L1.21181 4.8488C0.319185 3.95617 0.319185 2.50894 1.21181 1.61631Z" fill="#1E959B"/>
</svg></button>`;

if ($(window).width() < 1001) {
	$('.brands').slick({
		slidesToShow: 4,
		variableWidth: true,
		nextArrow: nextBtn,
		prevArrow: prevBtn,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
	$('.services__tabs-nav').slick({
		variableWidth: true,
		slidesToShow: 3,
		infinite: false,
		arrows: true,
		nextArrow: nextBtn,
		prevArrow: prevBtn,
		responsive: [{
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
			},
			breakpoint: 568,
			settings: {
				slidesToShow: 1,
				// centerMode: true,
				variableWidth: false,
			}
		},]

	}

	);

	$('.projects__items, .our-services__wrap').slick({
		slidesToShow: 3,
		nextArrow: nextBtn,
		prevArrow: prevBtn,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		}, {
			breakpoint: 568,
			settings: {
				slidesToShow: 1,
			}
		},]
	});
}

let width = window.innerWidth;
$(window).resize(function () {
	console.log(width, innerWidth);
	if (width != innerWidth) {
		location.reload(true);
	}
})

