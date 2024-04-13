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

// projects Scrolling
const wrapper = document.querySelector(".project-wrapper");
const carousel = document.querySelector(".projects-grid");
const firstCardWidth =
  parseInt(carousel.querySelector(".project-item").offsetWidth) + 16;
const arrowBtns = document.querySelectorAll(".project-wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  startX,
  startScrollLeft;

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft +=
      btn.id == "left-scroll" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
