/* es-lint disable */

const HAMBURGER_BUTTON = document.querySelector(".nav-bar-burger");
const NAVBAR_LOGO = document.querySelector(".nav-bar-logo");
const MOBILE_MENU_SCREEN = document.querySelector(".mobile-menu-screen");

HAMBURGER_BUTTON.addEventListener('click', () => {
    HAMBURGER_BUTTON.classList.toggle('active');
    MOBILE_MENU_SCREEN.classList.toggle("active");
    NAVBAR_LOGO.classList.toggle("active");
});

const MOBILE_MENU_LINKS = document.querySelectorAll(".mobile-menu-links");
