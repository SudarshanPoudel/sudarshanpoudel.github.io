// Navbar Mobile 
menuBtn = document.querySelector('.menu-btn')
menuBtnX = document.querySelector('.menu-btn-x')
mobileNav = document.querySelector('.mobile-nav')
blackBg = document.querySelector('.black-bg')

menuBtn.addEventListener('click', ()=>{
    mobileNav.style.left = '0'
    blackBg.style.display = 'block'
})


menuBtnX.addEventListener('click', ()=>{
    mobileNav.style.left = '-60vw'
    blackBg.style.display = 'none'
})

blackBg.addEventListener('click', ()=>{
    mobileNav.style.left = '-60vw'
    blackBg.style.display = 'none'
})


// projects Scrolling
const wrapper = document.querySelector(".project-wrapper");
const carousel = document.querySelector(".projects-grid");
const firstCardWidth = carousel.querySelector(".project-item").offsetWidth + 16;
const arrowBtns = document.querySelectorAll(".project-wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft;

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left-scroll" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
