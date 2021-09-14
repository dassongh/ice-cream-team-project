const mobileNavRef = document.querySelector('[data-menu]');

const closeMenu = () => {
  mobileNavRef.classList.remove('is-open');
};

mobileNavRef.addEventListener('click', (e) => {
  if (!e.target.classList.contains('js')) {
    return;
  } 
  
  closeMenu();
})