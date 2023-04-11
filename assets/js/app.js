let menu_button = document.querySelector(".button");
let nav_menu = document.querySelector(".nav_menu");
let menu_icon = document.querySelector(".fa-bars");
menu_button.addEventListener("click", () => {
  nav_menu.classList.toggle("hidden");
  menu_icon.classList.toggle("fa-xmark");
});
