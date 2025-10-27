import navData from '../../data/navData.js';
import { navTemplate } from '../templates/navTemplate.js';

const initHeader = (element) => {
  if (!element) {
    console.error('Header container not provided');
    return;
  }
  
  console.log('Initializing header');
  element.innerHTML = `
    <div class="container">
      <img src="img/GPT-4.svg" alt="GPT-4 Logo" class="header-logo">
      ${navTemplate(navData)}
      <div class="nav-button" id="navToggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;
};

export default initHeader;