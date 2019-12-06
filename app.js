/*========================================
--> NAVIGATION
========================================*/

const menuBtn = document.querySelector(".menuBtn");
const navBar = document.querySelector(".nav__bar");
const menu = document.querySelector(".menu");
// Must be the same as --nav__bar-height and --menu-height (style.css)
const navBarHeight = "65";
const menuHeight = "250";

function toggleMenu() {
  if (menuBtn.classList.contains("openMenu")) {
    renderMenu(true);
  } else {
    renderMenu(false);
  }
}

function renderMenu(bool) {
  menuBtn.classList.remove(bool ? "openMenu" : "closeMenu");
  menuBtn.classList.add(bool ? "closeMenu" : "openMenu");
  menuBtn.innerHTML = bool ? "Close" : "Menu";
  menuBtn.style.color = bool ? "#000" : "#fff";
  navBar.style.color = bool ? "#000" : "#fff";
  navBar.style.background = bool ? "#fff" : "transparent";
  menu.style.top = bool ? `${navBarHeight}px` : `-${navBarHeight + menuHeight}px`;
}

menuBtn.addEventListener("click", toggleMenu);
