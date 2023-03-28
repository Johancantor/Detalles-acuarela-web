let menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("open");
}

document.querySelector(".bars__menu").addEventListener("click", toggleMenu);
