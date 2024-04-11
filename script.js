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