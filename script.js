const menuToggleIcon = document.querySelector('#menu-toggle-icon');

menuToggleIcon.addEventListener('click', () => {
  const mobileMenu = document.querySelector('#menu');
  mobileMenu.classList.toggle('open');
  menuToggleIcon.classList.toggle('open');
});
