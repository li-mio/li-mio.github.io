var mySwiper = new Swiper('.featured',{
	effect : 'coverflow',
	slidesPerView: 'auto',
	centeredSlides: true,
	pagination : '.swiper-pagination',
	paginationClickable: true,
	loop:true,
	loopedSlides :9,
	coverflow: {
		rotate: 0,
		stretch: 20,
		depth: 80,
		modifier: 2,
		slideShadows : false
	}
});