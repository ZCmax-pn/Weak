import heroData from '../../data/heroData.js';
import { heroTemplate } from '../templates/heroTemplate.js';

const initHero = (element) => {
  if (!element) {
    console.error('Hero container not provided');
    return;
  }
  console.log('Initializing hero section');
  element.insertAdjacentHTML('beforeend', heroTemplate(heroData));
};

export default initHero;