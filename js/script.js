let body = document.querySelector("body");
let bars = document.querySelector(".header-bars");
let Headerclose = document.querySelector(".header-close");
let headerNav = document.querySelector(".header-nav");

headerNavBar = true;

bars.addEventListener("click", () => {
  if (headerNavBar) {
    // headerNav.style.display = "block";
    headerNav.style.transform = "translateX(0px)";
    body.style.overflowY = "hidden";
    headerNavBar = false;
}
});
Headerclose.addEventListener("click", () => {
  if (headerNavBar != true) {
      headerNav.style.transform = "translateX(-1000px)";
      body.style.overflowY = "visible";
    }
    headerNavBar = true;
});

$(function () {
  $("input[name=phone]").mask("+7 (999) 999-99-99");

  $(".menu-opener").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".navbar").toggleClass("active");
  });

  var swiper3 = new Swiper(".quality-slide-in", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });
});
