import initNavigation from '../components/initNavigation.js';
import initCompanies from '../components/initCompanies.js';
import initBlog from '../components/initBlog.js';
import initHero from '../components/initHero.js';

// Функция для создания базовой структуры страницы
const createPageStructure = () => {
  const root = document.querySelector('#root');
  if (!root) {
    console.error('Root element not found');
    return false;
  }

  // Создаем базовую структуру HTML
  root.innerHTML = `
    <div class="header">
      <div class="container">
        <img src="img/GPT-4.svg" alt="GPT-4 Logo" class="header-logo">
        <!-- Контейнер для навигации -->
        <div id="navContainer"></div>
        <div class="nav-button" id="navToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    
    <div class="main">
    </div>
    
    <footer>
      <p class="footer-text">© 2023 GPT-4. Все права защищены.</p>
    </footer>
  `;
  
  return true;
};

// Функции для бургер-меню
function initBurgerMenu() {
  const navToggle = document.getElementById('navToggle');
  const navHeader = document.querySelector('.nav-header');
  
  if (!navToggle || !navHeader) {
    console.log('Элементы бургер-меню не найдены');
    return;
  }

  // Сначала скрываем меню на мобильных
  if (window.innerWidth <= 768) {
    navHeader.style.display = 'none';
  }

  function toggleMobileMenu() {
    navToggle.classList.toggle('active');
    navHeader.classList.toggle('active');
    
    if (navHeader.classList.contains('active')) {
      navHeader.style.display = 'flex';
      navHeader.style.opacity = '0';
      navHeader.style.transform = 'translateY(-20px)';
      
      setTimeout(() => {
        navHeader.style.transition = 'all 0.3s ease-out';
        navHeader.style.opacity = '1';
        navHeader.style.transform = 'translateY(0)';
      }, 10);
    } else {
      navHeader.style.opacity = '0';
      navHeader.style.transform = 'translateY(-20px)';
      
      setTimeout(() => {
        navHeader.style.display = 'none';
      }, 300);
    }
  }
  
  navToggle.addEventListener('click', toggleMobileMenu);
  
  // Закрытие меню при клике на ссылку
  document.addEventListener('click', function(e) {
    if (e.target.closest('.nav-header a') && window.innerWidth <= 768 && navHeader.classList.contains('active')) {
      toggleMobileMenu();
    }
  });
  
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navHeader.style.display = '';
      navHeader.style.opacity = '';
      navHeader.style.transform = '';
      navHeader.classList.remove('active');
      navToggle.classList.remove('active');
    } else {
      if (!navHeader.classList.contains('active')) {
        navHeader.style.display = 'none';
      }
    }
  });
}

// Главная функция инициализации домашней страницы
const homePage = () => {
  console.log('Инициализация домашней страницы');
  
  // Создаем базовую структуру страницы
  if (!createPageStructure()) {
    return;
  }
  
  // Инициализация навигации
  const navContainer = document.getElementById('navContainer');
  if (navContainer) {
    console.log('Найден контейнер для навигации');
    initNavigation(navContainer);
  } else {
    console.error('Navigation container not found');
  }
  
  // Инициализация hero секции
  const mainContainer = document.querySelector('.main');
  if (mainContainer) {
    console.log('Найден main контейнер');
    initHero(mainContainer);
    
    // Инициализация блога после hero
    setTimeout(() => {
      initBlog(mainContainer);
    }, 50);
    
  } else {
    console.error('Main container not found');
  }
  
  // Инициализация компаний после отрисовки hero
  setTimeout(() => {
    const welcomeWeb = document.querySelector('.welcome-web');
    if (welcomeWeb) {
      console.log('Найден контейнер компаний');
      initCompanies(welcomeWeb);
    } else {
      console.log('Контейнер компаний еще не создан');
    }
  }, 100);
  
  // Инициализация бургер-меню после отрисовки навигации
  setTimeout(() => {
    initBurgerMenu();
  }, 200);
};

export default homePage;