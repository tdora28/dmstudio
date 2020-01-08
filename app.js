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

/*========================================
--> HOMEPAGE CHANGES
========================================*/

const bullets = document.querySelectorAll(".bullet");
const bulletPoints = document.querySelectorAll(".bullet__point");
const wraps = document.querySelectorAll(".wrap");
let indexGlobal = 0;

function changeHome(e) {
  // Get the number from the clicked bullet element
  if (e.target.tagName == "SPAN") {
    indexGlobal = parseInt(e.target.parentElement.innerHTML.slice(1, 2));
  } else {
    indexGlobal = parseInt(e.target.innerHTML.slice(1, 2));
  }
  indexGlobal -= 1; // Because index starts with 0
  // Changes the bullet fill
  changeBullets(indexGlobal);
  // Changes the background
  changeBackground(indexGlobal);
}

function changeBullets(index) {
  for (let i = 0; i < bulletPoints.length; i++) {
    bulletPoints[i].classList.remove("bullet__point--filled");
  }
  bulletPoints[index].classList.add("bullet__point--filled");
}

function changeBackground(index) {
  wraps[index].style.transition = `opacity .8s ease-out`;
  for (let i = 0; i < wraps.length; i++) {
    wraps[i].style.zIndex = "0";
    wraps[i].style.opacity = ".5";
  }
  wraps[index].style.zIndex = "5";
  wraps[index].style.opacity = "1";
}

// Event listener for clicking the bullets
for (let i = 0; i < bullets.length; i++) {
  // Must check if bullets exist, so code won't break on other pages
  if (bullets[i]) {
    bullets[i].addEventListener("click", changeHome);
  }
}

// Changing background automatically
let bulletsLength = bullets.length;
// Must check if bullets exist, so code won't break on other pages
if (bullets[0]) {
  setInterval(function() {
    if (indexGlobal < bulletsLength - 1) {
      indexGlobal += 1;
    } else {
      indexGlobal = 0;
    }
    changeBullets(indexGlobal);
    changeBackground(indexGlobal);
  }, 4000);
}
