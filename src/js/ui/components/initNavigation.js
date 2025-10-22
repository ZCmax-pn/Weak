import navData from '../../data/navData.js';
import { navTemplate } from '../templates/navTemplate.js';

const initNavigation = (element) => {
  if (!element) {
    console.error('Navigation container not provided');
    return;
  }
  console.log('Initializing navigation');
  element.insertAdjacentHTML('beforeend', navTemplate(navData));
};

export default initNavigation;