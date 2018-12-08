/* Site-menu close/open */

var menuButton = document.querySelector(".burger-button");
var isMenuOpen = false;
menuButton.classList.add('burger-button--open');
menuButton.addEventListener('click', function() {
  if (isMenuOpen) {
    menuButton.classList.add('burger-button--open');
    menuButton.classList.remove('burger-button--close');
    isMenuOpen = false;
  } else {
    menuButton.classList.add('burger-button--close');
    menuButton.classList.remove('burger-button--open');
    isMenuOpen = true;
  }
})