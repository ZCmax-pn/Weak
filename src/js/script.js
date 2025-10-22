import homePage from './ui/pages/homePage.js';

console.log('GPT-4 Application Loading...');

function initializeApp() {
  try {
    console.log('Initializing application...');
    homePage();
    console.log('Application initialized successfully');
  } catch (error) {
    console.error('Error initializing application:', error);
    
    const root = document.querySelector('#root');
    if (root) {
      root.innerHTML = `
        <div style="padding: 20px; background: #ffebee; color: #c62828; border: 1px solid #ef5350; border-radius: 4px;">
          <h3>Ошибка загрузки приложения</h3>
          <p>${error.message}</p>
          <p>Пожалуйста, обновите страницу.</p>
        </div>
      `;
    }
  }
}

// Запускаем при загрузке DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}