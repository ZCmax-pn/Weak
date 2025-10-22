export const createBlogCard = (post) => {
  if (post.isMain) {
    return `
      <div class="blog-card main-card">
        <img src="${post.image}" alt="Блог пост ${post.id}" class="main-card-img">
        <div class="main-card-content">
          <div class="main-card-text-container"> 
            <div class="main-card-blog-date">${post.date}</div>
            <div class="main-card-blog-title">${post.title}</div>
            <a href="#!" class="blog-read-more">Читать полную статью</a>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="blog-card">
      <img src="${post.image}" alt="Блог пост ${post.id}">
      <div class="blog-content">
        <div class="blog-text-container"> 
          <div class="blog-date">${post.date}</div>
          <div class="blog-title">${post.title}</div>
          <a href="#!" class="blog-read-more">Читать полную статью</a>
        </div>
      </div>
    </div>
  `;
};

export const blogTemplate = (posts) => {
  const blogCards = posts.map(post => createBlogCard(post)).join('');
  
  return `
    <section class="blog">
      <div class="container">
        <div class="blog-header">
          <h2>Многое Происходит,<br>Мы Ведем об Этом Блог.</h2>
        </div>
        <div class="blog-grid">
          ${blogCards}
        </div>
      </div>
    </section>

    <section class="section-future">
      <div class="container">
        <div class="section-future-content">
          <h2 class="section-future-title">Хотите Шагнуть в Будущее Раньше Других?</h2>
          <a href="#!" class="section-future-button">Запросить ранний доступ</a>
          <div class="information-future">
            <div class="footer-column">
              <img src="img/GPT-3.svg" alt="GPT-4 Logo" class="future-img">
              <p class="light-text">
                ул. Профессора Поздеева, 13, к.Г,<br>
                Пермь, Пермский край, 614013 <br><br>
                Все права защищены
              </p>
            </div>

            <div class="straight-columns">
              <div class="footer-column-link">
                <h3>Ссылки</h3>
                <a href="#!">Оверсен</a>
                <a href="#!">Соц. сети</a>
                <a href="#!">Счетчики</a>
                <a href="#!">Контакты</a>
              </div>
              
              <div class="footer-column-link">
                <h3>Компания</h3>
                <a href="#!">Условия использования</a>
                <a href="#!">Перс. данные</a>
                <a href="#!">Контакты</a>
              </div>
              
              <div class="footer-column-link">
                <h3>Контакты</h3>
                <a href="#!">ул. Профессора <br> Поздеева, 13, к.Г, Пермь</a>
                <a href="#!">+7 (342) 2-198-520</a>
                <a href="#!">info@pstu.ru</a>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </section>
  `;
};

export default blogTemplate;