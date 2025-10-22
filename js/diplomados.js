new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  coverflowEffect: {
    rotate: 25,
    stretch: -20,
    depth: 200,
    modifier: 1.3,
    slideShadows: true,
  },
});