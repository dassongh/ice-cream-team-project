const mobileNavRef = document.querySelector('[data-menu]');
const menuOpenBtnRef = document.querySelector('[data-menu-button]');

const closeMenu = () => {
  mobileNavRef.classList.remove('is-open');
  menuOpenBtnRef.classList.remove('is-open');
};

mobileNavRef.addEventListener('click', (e) => {
  if (!e.target.classList.contains('js')) {
    return;
  } 
  
  closeMenu();
})