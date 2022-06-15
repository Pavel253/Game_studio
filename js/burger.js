var burger = document.querySelector('.header__section .burger');
var burgerMenu = document.querySelector('.header__section .burger__menu');
var sectionContainer = document.querySelector('.section:nth-child(1)');
var header = document.querySelector('.header');


burger.addEventListener('click', function () {
  header.classList.toggle('_active');
  burger.classList.toggle('_active');
  burgerMenu.classList.toggle('_active');
  sectionContainer.classList.toggle('_active');
});