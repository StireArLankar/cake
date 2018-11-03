var navMain = document.querySelector(".header-nav");
var navToggle = document.querySelector(".header-nav__toggle");

window.onload = function() {
  navMain.classList.add("header-nav--closed");
};

navToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  navMain.classList.toggle("header-nav--closed");
});
