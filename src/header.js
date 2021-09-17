const headerRef = document.querySelector('.header');

window.addEventListener('scroll', () => {
  console.log('scroll');
  headerRef.style.backgroundColor = '#FFA5BA';
});

