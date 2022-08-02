const hamburger_button = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger_button.addEventListener("click", () => {
  navList.classList.toggle("show");
});
