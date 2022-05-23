
const menuBurger = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('_active');
		if (menuBody) {
			menuBody.classList.toggle('_active');
		}
	});
}


$(function () {

	$('.revievs__slider').slick({
		arrows: false,
		dots: true
	});

});
