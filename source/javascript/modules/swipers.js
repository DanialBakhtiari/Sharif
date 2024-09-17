var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });