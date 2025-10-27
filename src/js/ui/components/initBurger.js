const initBurger = () => {
  const burgerButton = document.getElementById('navToggle');
  const navMenu = document.querySelector('.nav-header');
  
  if (!burgerButton || !navMenu) {
    console.log('Элементы бургер-меню не найдены');
    return;
  }
  burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('active');
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
      navMenu.style.display = 'flex';
    } else {
      navMenu.style.display = 'none';
    }
  });
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      burgerButton.classList.remove('active');
      navMenu.classList.remove('active');
      navMenu.style.display = 'none';
    });
  });
};

export default initBurger;