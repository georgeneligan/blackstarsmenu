let menu_button = document.querySelector(".button");
let nav_menu = document.querySelector(".nav_menu");
let menu_icon = document.querySelector(".fa-bars");
let menu_primary = document.querySelector(".menu_primary");
let menu_second = document.querySelector(".menu_second");
let salat = document.querySelector(".salat");
let hot_food = document.querySelector(".hotfood");

menu_second.addEventListener("click", () => {
  hot_food.classList.add("hiddenmenu");
  salat.classList.remove("hiddenmenu");
  menu_second.classList.add("activemenu");
  menu_primary.classList.remove("activemenu");
  nav_menu.classList.add("hidden");
  menu_icon.classList.toggle("fa-xmark");
});

menu_primary.addEventListener("click", () => {
  salat.classList.add("hiddenmenu");
  hot_food.classList.remove("hiddenmenu");
  menu_primary.classList.add("activemenu");
  menu_second.classList.remove("activemenu");
  nav_menu.classList.add("hidden");
  menu_icon.classList.toggle("fa-xmark");
});

menu_button.addEventListener("click", () => {
  nav_menu.classList.toggle("hidden");
  menu_icon.classList.toggle("fa-xmark");
});
