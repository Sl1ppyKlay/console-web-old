const menuOpenButton = document.querySelector('#menu_open');
const menuCloseButton = document.querySelector('#menu_close');
const mobileNavMenu = document.querySelector('.nav-menu__mobile');
const htmlBody = document.querySelector('html, body');

const scrollLogo = document.querySelector('.nav-menu__img')
const scrollProjects = document.querySelectorAll('#menu_pc_project, #menu_mobile_project');
const scrollOrder = document.querySelectorAll('#menu_pc_order, #menu_mobile_order');

let scrollPosition = 0

function checkIf () {
    if (htmlBody.style.overflow === 'hidden') {
        htmlBody.style.overflow = ''
        mobileNavMenu.style.display = 'none'
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // !меню
    menuOpenButton.addEventListener('click', function() {
        scrollPosition = window.scrollY
        htmlBody.style.overflow = 'hidden'
        mobileNavMenu.style.display = 'flex'
    })
    
    menuCloseButton.addEventListener('click', function() {
        htmlBody.style.overflow = ''
        mobileNavMenu.style.display = 'none'
        window.scrollTo({top: scrollPosition})  
    })

    // !перемещение по ссылкам
    scrollLogo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
     })  
    })

    scrollProjects.forEach(function(scrollProject) {
        scrollProject.addEventListener('click', 
        function () {
            checkIf()
            window.scrollTo({
                top: 700,
                behavior: 'smooth'})
        })
    })

    scrollOrder.forEach(function(scrollOrder) {
        scrollOrder.addEventListener('click', 
        function () {
            checkIf()
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'})
        })
    })
})