const menu = document.querySelector(".header__menu");
const burgerBtn = document.querySelector(".burger-btn");
const overlay = document.querySelector(".overlay");

burgerBtn.addEventListener("click", () => {
  menu.classList.add("header__menu--active");
  overlay.classList.add("overlay--active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("header__menu--active");
  overlay.classList.remove("overlay--active");
});

window.addEventListener("resize", () => {
  menu.classList.remove("header__menu--active");
  overlay.classList.remove("overlay--active");
});
