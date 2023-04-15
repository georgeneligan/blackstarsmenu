let menu_button = document.querySelector(".button");
let nav_menu = document.querySelector(".nav_menu");
let menu_icon = document.querySelector(".fa-bars");
let cold_food_btn = document.querySelector(".coldfood-btn");
let salat_btn = document.querySelector(".salat-btn");
let salat = document.querySelector(".salat");
let coldfood = document.querySelector(".coldfood");
let hot_food_btn = document.querySelector(".hotfood-btn");
let hot_food = document.querySelector(".hotfood");
let bakedgoods_btn = document.querySelector(".bakedgoods-btn");
let bakedgoods = document.querySelector(".bakedgoods");

salat_btn.addEventListener("click", () => {
  coldfood.classList.add("hiddenmenu");
  hot_food.classList.add("hiddenmenu");
  bakedgoods.classList.add("hiddenmenu");
  salat.classList.remove("hiddenmenu");
  salat_btn.classList.add("activemenu");
  cold_food_btn.classList.remove("activemenu");
  hot_food_btn.classList.remove("activemenu");
  bakedgoods_btn.classList.remove("activemenu");
  nav_menu.classList.add("hidden");
  menu_icon.classList.toggle("fa-xmark");
});

cold_food_btn.addEventListener("click", () => {
  salat.classList.add("hiddenmenu");
  coldfood.classList.remove("hiddenmenu");
  bakedgoods.classList.add("hiddenmenu");
  hot_food.classList.add("hiddenmenu");
  cold_food_btn.classList.add("activemenu");
  salat_btn.classList.remove("activemenu");
  hot_food_btn.classList.remove("activemenu");
  bakedgoods_btn.classList.remove("activemenu");
  nav_menu.classList.add("hidden");
  menu_icon.classList.toggle("fa-xmark");
});
hot_food_btn.addEventListener("click", () => {
  salat.classList.add("hiddenmenu");
  coldfood.classList.add("hiddenmenu");
  bakedgoods.classList.add("hiddenmenu");
  hot_food.classList.remove("hiddenmenu");
  salat_btn.classList.remove("activemenu");
  cold_food_btn.classList.remove("activemenu");
  bakedgoods_btn.classList.remove("activemenu");
  hot_food_btn.classList.add("activemenu");
  nav_menu.classList.add("hidden");
  menu_icon.classList.toggle("fa-xmark");
});

bakedgoods_btn.addEventListener("click", () => {
  salat.classList.add("hiddenmenu");
  coldfood.classList.add("hiddenmenu");
  hot_food.classList.add("hiddenmenu");
  bakedgoods.classList.remove("hiddenmenu");
  salat_btn.classList.remove("activemenu");
  hot_food_btn.classList.remove("activemenu");
  cold_food_btn.classList.remove("activemenu");
  bakedgoods_btn.classList.add("activemenu");
  nav_menu.classList.add("hidden");
  menu_icon.classList.toggle("fa-xmark");
});

menu_button.addEventListener("click", () => {
  nav_menu.classList.toggle("hidden");
  menu_icon.classList.toggle("fa-xmark");
});
