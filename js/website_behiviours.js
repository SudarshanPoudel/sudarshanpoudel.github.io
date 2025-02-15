// Navbar Mobile
let menuBtn = document.querySelector(".menu-btn");
let menuBtnX = document.querySelector(".menu-btn-x");
let mobileNav = document.querySelector(".mobile-nav");
let blackBg = document.querySelector(".black-bg");
let menuItems = document.querySelectorAll(".menu-item");

menuBtn.addEventListener("click", () => {
  mobileNav.style.left = "0";
  blackBg.style.display = "block";
});

menuBtnX.addEventListener("click", () => {
  mobileNav.style.left = "-60vw";
  blackBg.style.display = "none";
});

blackBg.addEventListener("click", () => {
  mobileNav.style.left = "-60vw";
  blackBg.style.display = "none";
});
document.querySelector(".hire-btn-mob").addEventListener("click", () => {
  mobileNav.style.left = "-60vw";
  blackBg.style.display = "none";
});

menuItems.forEach((e) => {
  e.addEventListener("click", () => {
    mobileNav.style.left = "-60vw";
    blackBg.style.display = "none";
  });
});