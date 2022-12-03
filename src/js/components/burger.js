document.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.header__nav-media');
    const burger = document.querySelector('.header__burger');
    const close = document.querySelector('.header__close-menu');

    burger.addEventListener('click', () => {
        menu.classList.add('open');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('open');
    });
});