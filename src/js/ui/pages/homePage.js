import initHeader from '../components/initHeader.js';
import initHero from '../components/initHero.js';
import initCompanies from '../components/initCompanies.js';
import initBlog from '../components/initBlog.js';
import initBurger from '../components/initBurger.js';

const createHomePageTemplate = (rootNode) => {
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section companies_section"></section>
    <section class="section blog_section"></section>
    <footer class="footer"></footer>
  `;
  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  console.log('Инициализация домашней страницы');
  
  const rootNode = document.querySelector("#root");
  if (!rootNode) {
    console.error('Root element not found');
    return;
  }
  
  createHomePageTemplate(rootNode);

  // Шапка страницы
  const headerNode = rootNode.querySelector(".header");
  if (headerNode) {
    console.log('Найдена секция для шапки');
    initHeader(headerNode);
    
    // Меню бургер
    setTimeout(() => {
      initBurger();
    }, 100);
  } else {
    console.error('Секция с шапкой не найдена');
  }

  // Херо секция
  const heroNode = rootNode.querySelector(".hero_section");
  if (heroNode) {
    console.log('Найдена hero секция');
    initHero(heroNode);
  } else {
    console.error('Hero секция не найдена');
  }

  // Компании
  const companiesNode = rootNode.querySelector(".companies_section");
  if (companiesNode) {
    console.log('Найдена секция компаний');
    initCompanies(companiesNode);
  } else {
    console.error('Секция с компаниями не найдена');
  }

  // Блог
  const blogNode = rootNode.querySelector(".blog_section");
  if (blogNode) {
    console.log('Найдена секция блога');
    initBlog(blogNode);
  } else {
    console.error('Секция с блогом не найдена');
  }

  // Футер
  const footerNode = rootNode.querySelector(".footer");
  if (footerNode) {
    console.log('Найдена секция футера');
    footerNode.innerHTML = '<p class="footer-text">© 2023 GPT-4. Все права защищены.</p>';
  }
};

export default homePage;