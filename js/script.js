// Скроллинг

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
				myNameLang.classList.remove('_active'); // ситуативная и необходимая в данном конкретном макете
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

// Бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const myNameLang = document.querySelector('.my-name__lang') // ситуативная и необходимая в данном конкретном макете
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		myNameLang.classList.toggle('_active');
	});
}