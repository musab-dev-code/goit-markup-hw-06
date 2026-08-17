const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');


menuButton.addEventListener('click', function () {
    mobileMenu.classList.add('open');
});


mobileMenuClose.addEventListener('click', function () {
    mobileMenu.classList.remove('open');
});