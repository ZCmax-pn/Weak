export const createNavLink = (link) => {
  return `
    <li><a href="${link.href}">${link.text}</a></li>
  `;
};
export const renderNavigation = (links) => {
  const headerList = document.querySelector('.header-list');
  if (!headerList) {
    console.log('Меню не найдено');
    return;
  }
  
  headerList.innerHTML = '';
  
  links.forEach(link => {
    const navHTML = createNavLink(link);
    headerList.insertAdjacentHTML('beforeend', navHTML);
  });
};

export const navTemplate = (links) => {
  const navItems = links.map(link => createNavLink(link)).join('');
  
  return `
    <nav class="nav-header">
      <ul class="header-list">
        ${navItems}
      </ul>
      <div class="btn desktop-buttons">
        <button class="btn-sign">Войти</button>
        <button class="btn-sign-primary">Регистрация</button>
      </div>
      <div class="mobile-buttons">
        <button class="btn-sign">Войти</button>
        <button class="btn-sign-primary">Регистрация</button>
      </div>
    </nav>
  `;
};

export default navTemplate;