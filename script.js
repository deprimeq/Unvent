let headerIframe = document.querySelector('.header__map__iframe');
let headerMap = document.querySelector('.header__map');
let header = document.querySelector('.header');
let headerFlag = 0;
headerMap.addEventListener('click', function() {
	headerIframe.classList.add('active');
	headerFlag = 1;
});

let headerNav = document.querySelector('.header__nav');
let headerNavButton = document.querySelector('.header__nav__button');
headerNavButton.addEventListener('click', function() {
	headerNav.classList.toggle('active');
});

let headerTrack = document.querySelector('.header__photo__track');
let headerCarousel = document.querySelector('.header__photo__carousel');
let headerItems = document.querySelectorAll('.header__photo__item');
let headerNext = document.querySelector('.header__photo__next');
let headerPrev = document.querySelector('.header__photo__prev');
let headerSlidesToShow = 3;
if (window.innerWidth < 768) {headerSlidesToShow = 1;}
let headerSlidesToScroll = 1;
let headerPosition = 1;
headerItems.forEach(function(item) {
	item.style.minWidth = headerCarousel.clientWidth / headerSlidesToShow + 'px';
});
headerTrack.style.transform = 'translateX(' + (-headerPosition * (headerCarousel.clientWidth / headerSlidesToShow)) + 'px)';
headerNext.addEventListener('click', function() {
	headerPosition++;
	headerTrack.style.transition = "transform 0.2s linear";
	headerTrack.style.transform = 'translateX(' + (-headerPosition * (headerCarousel.clientWidth / headerSlidesToShow)) + 'px)';
	if (headerPosition > 3) {
		headerPosition = 1;
		setTimeout(function() {
			headerTrack.style.transition = "none";
			headerTrack.style.transform = 'translateX(' + (-headerPosition * (headerCarousel.clientWidth / headerSlidesToShow)) + 'px)';
		}, 200);
	}
});
headerPrev.addEventListener('click', function() {
	headerPosition--;
	headerTrack.style.transition = "transform 0.2s linear";
	headerTrack.style.transform = 'translateX(' + (-headerPosition * (headerCarousel.clientWidth / headerSlidesToShow)) + 'px)';
	if (headerPosition < 1) {
		headerPosition = 3;
		setTimeout(function() {
			headerTrack.style.transition = "none";
			headerTrack.style.transform = 'translateX(' + (-headerPosition * (headerCarousel.clientWidth / headerSlidesToShow)) + 'px)';
		}, 200);
	}
});

header.addEventListener('click', function() {
	if (headerFlag == 0) {headerIframe.classList.remove('active');}
	setTimeout(function() {headerFlag = 0;}, 500);
});

let ru = document.querySelector('.ru');
let ua = document.querySelector('.ua');
const langRu = document.querySelector('.lang__ru');
const langUa = document.querySelector('.lang__ua');
ru.addEventListener('click', function() {
	langUa.style.display = 'none';
	langRu.style.display = 'block';
});
ua.addEventListener('click', function() {
	langRu.style.display = 'none';
	langUa.style.display = 'block';
});

//ua

let headerIframeUa = document.querySelector('.header__map__iframe.ua');
let headerMapUa = document.querySelector('.header__map.ua');
let headerUa = document.querySelector('.header.ua');
let headerFlagUa = 0;
headerMapUa.addEventListener('click', function() {
	headerIframeUa.classList.add('active');
	headerFlagUa = 1;
});

let headerNavUa = document.querySelector('.header__nav.ua');
let headerNavButtonUa = document.querySelector('.header__nav__button.ua');
headerNavButtonUa.addEventListener('click', function() {
	headerNavUa.classList.toggle('active');
});

let headerTrackUa = document.querySelector('.header__photo__track.ua');
let headerCarouselUa = document.querySelector('.header__photo__carousel.ua');
let headerItemsUa = document.querySelectorAll('.header__photo__item.ua');
let headerNextUa = document.querySelector('.header__photo__next.ua');
let headerPrevUa = document.querySelector('.header__photo__prev.ua');
let headerSlidesToShowUa = 3;
if (window.innerWidth < 768) {headerSlidesToShowUa = 1;}
let headerSlidesToScrollUa = 1;
let headerPositionUa = 1;
headerItemsUa.forEach(function(item) {
	item.style.minWidth = headerCarouselUa.clientWidth / headerSlidesToShowUa + 'px';
});
headerTrackUa.style.transform = 'translateX(' + (-headerPositionUa * (headerCarouselUa.clientWidth / headerSlidesToShowUa)) + 'px)';
headerNextUa.addEventListener('click', function() {
	headerPositionUa++;
	headerTrackUa.style.transition = "transform 0.2s linear";
	headerTrackUa.style.transform = 'translateX(' + (-headerPositionUa * (headerCarouselUa.clientWidth / headerSlidesToShowUa)) + 'px)';
	if (headerPositionUa > 3) {
		headerPositionUa = 1;
		setTimeout(function() {
			headerTrackUa.style.transition = "none";
			headerTrackUa.style.transform = 'translateX(' + (-headerPositionUa * (headerCarouselUa.clientWidth / headerSlidesToShowUa)) + 'px)';
		}, 200);
	}
});
headerPrevUa.addEventListener('click', function() {
	headerPositionUa--;
	headerTrackUa.style.transition = "transform 0.2s linear";
	headerTrackUa.style.transform = 'translateX(' + (-headerPositionUa * (headerCarouselUa.clientWidth / headerSlidesToShowUa)) + 'px)';
	if (headerPositionUa < 1) {
		headerPositionUa = 3;
		setTimeout(function() {
			headerTrackUa.style.transition = "none";
			headerTrackUa.style.transform = 'translateX(' + (-headerPositionUa * (headerCarouselUa.clientWidth / headerSlidesToShowUa)) + 'px)';
		}, 200);
	}
});

headerUa.addEventListener('click', function() {
	if (headerFlagUa == 0) {headerIframeUa.classList.remove('active');}
	setTimeout(function() {headerFlagUa = 0;}, 500);
});

headerItemsUa.forEach(function(item) {
	item.style.minWidth = headerCarousel.clientWidth / headerSlidesToShowUa + 'px';
});

let ruUa = document.querySelector('.ru.ua');
let uaUa = document.querySelector('.ua.ua');
ruUa.addEventListener('click', function() {
	langUa.style.display = 'none';
	langRu.style.display = 'block';
});
uaUa.addEventListener('click', function() {
	langRu.style.display = 'none';
	langUa.style.display = 'block';
});

window.onresize = function() {
	if (window.innerWidth > 992) {headerNav.classList.remove('active');headerNavUa.classList.remove('active');}
	if (window.innerWidth < 768) {
		headerSlidesToShowUa = 1;
		headerItemsUa.forEach(function(item) {
			item.style.minWidth = headerCarouselUa.clientWidth / headerSlidesToShowUa + 'px';
		});
		headerTrackUa.style.transform = 'translateX(' + (-headerPositionUa * (headerCarouselUa.clientWidth / headerSlidesToShowUa)) + 'px)';
		headerSlidesToShow = 1;
		headerItems.forEach(function(item) {
			item.style.minWidth = headerCarousel.clientWidth / headerSlidesToShow + 'px';
		});
		headerTrack.style.transform = 'translateX(' + (-headerPosition * (headerCarousel.clientWidth / headerSlidesToShow)) + 'px)';
	}
	if (window.innerWidth > 768) {
		headerSlidesToShowUa = 3;
		headerItemsUa.forEach(function(item) {
			item.style.minWidth = headerCarouselUa.clientWidth / headerSlidesToShowUa + 'px';
		});
		headerTrackUa.style.transform = 'translateX(' + (-headerPositionUa * (headerCarouselUa.clientWidth / headerSlidesToShowUa)) + 'px)';
		headerSlidesToShow = 3;
		headerItems.forEach(function(item) {
			item.style.minWidth = headerCarousel.clientWidth / headerSlidesToShow + 'px';
		});
		headerTrack.style.transform = 'translateX(' + (-headerPosition * (headerCarousel.clientWidth / headerSlidesToShow)) + 'px)';
	}
	headerItemsUa.forEach(function(item) {
		item.style.minWidth = headerCarouselUa.clientWidth / headerSlidesToShowUa + 'px';
	});
	headerTrackUa.style.transform = 'translateX(' + (-headerPositionUa * (headerCarouselUa.clientWidth / headerSlidesToShowUa)) + 'px)';
	headerItems.forEach(function(item) {
		item.style.minWidth = headerCarousel.clientWidth / headerSlidesToShow + 'px';
	});
	headerTrack.style.transform = 'translateX(' + (-headerPosition * (headerCarousel.clientWidth / headerSlidesToShow)) + 'px)';
}