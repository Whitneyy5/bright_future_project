const menu_toggler = document.getElementById("menu_toggle");
const mobile_navbar = document.getElementById("mobile_navbar");
const close_menu = document.getElementById("close_menu");

menu_toggler.addEventListener("click", show_mobile_navbar);
close_menu.addEventListener("click", close_mobile_navbar);

function show_mobile_navbar() {
  mobile_navbar.style.width = "50%";
}
function close_mobile_navbar() {
  mobile_navbar.style.width = "0%";
}
