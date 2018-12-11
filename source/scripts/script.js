/* Site-menu close/open */

var menuButton = document.querySelector(".burger-button");
var isMenuOpen = false;
var header = document.querySelector(".page-header");
var siteMenu = header.querySelector(".site-menu");
console.log(header);
menuButton.classList.add('burger-button--open');
menuButton.addEventListener('click', function() {
  if (isMenuOpen) {
    menuButton.classList.add('burger-button--open');
    menuButton.classList.remove('burger-button--close');
    header.classList.remove('page-header--menu-open');
    siteMenu.classList.remove('site-menu--open');
    isMenuOpen = false;
  } else {
    menuButton.classList.add('burger-button--close');
    menuButton.classList.remove('burger-button--open');
    header.classList.add('page-header--menu-open');
    siteMenu.classList.add('site-menu--open');
    isMenuOpen = true;
  }
})

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    menuButton.classList.add('burger-button--open');
    menuButton.classList.remove('burger-button--close');
    header.classList.remove('page-header--menu-open');
    siteMenu.classList.remove('site-menu--open');
    isMenuOpen = false;
  }
})