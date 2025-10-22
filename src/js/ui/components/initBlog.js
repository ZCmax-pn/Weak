import blogData from '../../data/blogData.js';
import { blogTemplate } from '../templates/blogTemplate.js';

const initBlog = (element) => {
  if (!element) {
    console.error('Blog container not provided');
    return;
  }
  console.log('Initializing blog section');
  element.insertAdjacentHTML('beforeend', blogTemplate(blogData));
};

export default initBlog;