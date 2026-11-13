const headerLinks = document.querySelectorAll(".header__link");

headerLinks.forEach((link) => {
  if (link.classList.contains("header__link--active")) {
    console.log(link);
  }
});
