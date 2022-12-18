/* ACCORDIONS */

const accordion = new CgAccordion("[data-accordion]", {
  // activeClass: "active", // Класс активности для элементов
  // topSelector: "[data-accordion-top]", // Селектор верхней части аккордеона (data-атрибудт должен всегда присутствовать для правильной работы)
  // bodySelector: "[data-accordion-body]", // Селектор оснвной части (data-стрибут должен всегда присутствовать для правильной работы)
  // syncGroup: true, // Синхронизация элементов из однной группы (При значении true - если один эелемент открывается, то другие закрываются)
  // speed: 300, // Скорость анимации
});

/* LANGUAGES */

$(".languages__top").click(function (e) {
  e.stopPropagation();
  $(this).closest(".languages").toggleClass("active");
});

$(".languages__item").click(function (e) {
  e.stopPropagation();
  $(this).closest(".languages").toggleClass("active");
});

$(".languages").click(function (e) {
  e.stopPropagation();
});

$(document).on("click", "body *", function () {
  if ($(".languages").hasClass("active")) {
    $(".languages").removeClass("active");
  }
});

/* BURGER */
const burger = new CgBurger({
  burgerSelector: "[data-burger]", // Селектор кнопки открытия
  targetSelector: "[data-burger-target]", // Селектор элемента который должен быть открыт
  // activeClass: "active", // Класс активности для элементов
  hasCloseButton: true, // Есть ли отдельная кнопка закрытия
  closeButtonSelector: "[data-burger-close]", // Селектор кнопки закрытия
});

/* SMOOTH SCROLL */
smootScroll();

/* BLUR SUPPORT */
var supportsCSS = !!(
  (window.CSS && window.CSS.supports) ||
  window.supportsCSS ||
  false
);

if (supportsCSS) {
  var supportsBlur = CSS.supports(
    "(-webkit-backdrop-filter: blur(15px)) or (backdrop-filter: blur(15px))"
  );

  if (supportsBlur) {
    document.body.classList.add("backdrop-support");
  }
}

/* HEADER */
let headerTopHeight = document.querySelector(".header__top").offsetHeight;

window.addEventListener("resize", () => {
  headerTopHeight = document.querySelector(".header__top").offsetHeight;
});
var sticky = $(".header__body"),
  scroll = $(window).scrollTop();

if (scroll >= headerTopHeight) sticky.addClass("fixed");
else sticky.removeClass("fixed");

$(window).scroll(function () {
  var sticky = $(".header__body"),
    scroll = $(window).scrollTop();

  if (scroll >= headerTopHeight) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});

/* BTN GO TO TOP */
var sticky = $(".footer__btn-top"),
  scroll = $(window).scrollTop();

if (scroll >= 200) sticky.addClass("active");
else sticky.removeClass("active");

$(window).scroll(function () {
  var sticky = $(".footer__btn-top"),
    scroll = $(window).scrollTop();

  if (scroll >= 200) sticky.addClass("active");
  else sticky.removeClass("active");
});

/* MODALS */

const modals = new CgModal({
  effect: "fade", // Эффект появления модального окна (fade, transformBottom, transformLeft, transformTop, transformRight, scaleCenter) [default = null]
});
