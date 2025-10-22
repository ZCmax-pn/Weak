import companiesData from '../../data/companiesData.js';
import { companiesTemplate } from '../templates/companiesTemplate.js';

const initCompanies = (element) => {
  if (!element) {
    console.error('Companies container not provided');
    return;
  }
  console.log('Initializing companies section');
  element.insertAdjacentHTML('beforeend', companiesTemplate(companiesData));
};

export default initCompanies;