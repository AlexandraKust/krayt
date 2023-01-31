// ------ БУРГЕР-МЕНЮ ------------
let header = document.querySelector(".header");
let burger = document.querySelector(".header__burger");

burger.addEventListener("click", function () {
	header.classList.toggle("active");
	burger.classList.toggle("active");
	document.body.classList.toggle("lock");
})

window.addEventListener('resize', function () {
	if (window.innerWidth > 991.98 && burger.classList.contains('active')) {
		header.classList.remove('active');
		burger.classList.remove('active');
		document.body.classList.remove("lock");
	}
});


// ------------- СЛАЙДЕРЫ -----------------
let swipersImg = document.querySelectorAll(".img-slide__container");
let swipersSale = document.querySelectorAll(".sale__slider-container");
let swipersImgLeader = document.querySelectorAll(".slide-leader__container");

//main swiper
const hero = new Swiper('.hero__container', {
	loop: true,
	speed: 600,
	spaceBetween: 24,
	centeredSlides: false,
	simulateTouch: true,
	touchRatio: 1,
	slidesPerView: 1,
	slideToClickedSlide: true,
	// freeMode: true,

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	mousewheel: {
		sensitivity: 1,
		EventTarget: '.hero__container',
	},

	navigation: {
		nextEl: '.hero__btn-next',
		prevEl: '.hero__btn-prev',
	},

	pagination: {
		el: '.hero__pagination',
		clickable: true,
	}

});

//swiper товар дня
const leader = new Swiper('.leader-container', {
	loop: true,
	speed: 600,
	spaceBetween: 24,
	centeredSlides: false,
	simulateTouch: true,
	touchRatio: 1,
	slidesPerView: 1,

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},

	navigation: {
		nextEl: '.leader-arrow-next',
		prevEl: '.leader-arrow-prev',
	},

});

// swipers
function slidersInTabs() {
	// слайдеры в табах	
	swipersSale.forEach(function (value) {
		let swiper = new Swiper(value, {
			speed: 600,
			spaceBetween: 24,
			centeredSlides: false,
			slidesPerView: "auto",

			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},

			navigation: {
				nextEl: value.closest('.sale__content-item').querySelector('.next-btn-slider'),
				prevEl: value.closest('.sale__content-item').querySelector('.prev-btn-slider'),
			},

			observer: true,
			observerParents: true
		});
	});

	// слайдеры-изображения внутри карточек
	swipersImg.forEach(function (value) {
		let swiper = new Swiper(value, {
			loop: true,
			speed: 600,
			spaceBetween: 24,
			centeredSlides: false,
			simulateTouch: true,
			touchRatio: 1,
			slidesPerView: 1,

			pagination: {
				el: value.querySelector(".swiper-pagination"),
				clickable: true,
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			mousewheel: {
				sensitivity: 1,
				EventTarget: value,
			},

			observer: true,
			observerParents: true
		});
	});

	// слайдеры-изображения внутри карточек
	swipersImgLeader.forEach(function (value) {
		let swiper = new Swiper(value, {
			loop: true,
			speed: 600,
			spaceBetween: 24,
			centeredSlides: false,
			simulateTouch: true,
			touchRatio: 1,
			slidesPerView: 1,

			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			mousewheel: {
				sensitivity: 1,
				EventTarget: value,
			},
			navigation: {
				nextEl: value.querySelector('.img-slide__arrow-next'),
				prevEl: value.querySelector('.img-slide__arrow-prev'),
			},

			observer: true,
			observerParents: true
		});
	});
}

window.onload = function () {
	slidersInTabs();
};

// ------------ ТАБЫ ---------------
const triggerTabList = document.querySelectorAll('.sale__btn')
triggerTabList.forEach(triggerEl => {
	const tabTrigger = new bootstrap.Tab(triggerEl)

	triggerEl.addEventListener('click', event => {
		event.preventDefault();
		tabTrigger.show();
		slidersInTabs();
	});
});

// select
customSelect(document.querySelectorAll('select'));

// hint
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

// выбор цвета
let colorItem = document.querySelectorAll('.color-item');

for (let i = 0; i < colorItem.length; i++) {
	colorItem[i].addEventListener("click", function () {
		for (let j = 0; j < colorItem.length; j++) {
			if (colorItem[j].classList.contains('active')) {
				colorItem[j].classList.remove('active');
			}
		};
		colorItem[i].classList.add('active');
	});
}

// выбор размера
let sizeItem = document.querySelectorAll('.slide-leader__size-item');

for (let i = 0; i < sizeItem.length; i++) {
	sizeItem[i].addEventListener("click", function () {
		for (let j = 0; j < sizeItem.length; j++) {
			if (sizeItem[j].classList.contains('active')) {
				sizeItem[j].classList.remove('active');
			}
		};
		sizeItem[i].classList.add('active');
	});
}

