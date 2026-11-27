const menu = document.querySelector(".header__menu");
const burgerBtn = document.querySelector(".burger-btn");
const overlay = document.querySelector(".overlay");
const tabBtns = document.querySelectorAll(".tab-bar__btn");

burgerBtn.addEventListener("click", () => {
  toggleMenu();
});

overlay.addEventListener("click", () => {
  toggleMenu(false);
});

window.addEventListener("resize", () => {
  toggleMenu(false);
});

function toggleMenu(visible = true) {
  menu.classList.toggle("header__menu--active", visible);
  overlay.classList.toggle("overlay--active", visible);
}

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("tab-bar__btn--active"));
    btn.classList.add("tab-bar__btn--active");
  });
});
