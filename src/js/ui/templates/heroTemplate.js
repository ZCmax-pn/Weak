export const createHeaderTemplate = (header) => {
  return `
    <h1 class="welcome-left">
      ${header}
    </h1>
  `;
};

export const createDescriptionTemplate = (description) => {
  return `
    <p class="welcome-desk">
      ${description}
    </p>
  `;
};

export const createInputTemplate = ({ type, title }) => {
  switch (type) {
    case "input":
      return `
        <input type="text" class="Email-welcome" value="" placeholder="${title}" />
      `;

    case "button":
      return `
        <button class="welcome_start">
          ${title}
        </button>
      `;

    default:
      return ``;
  }
};

export const createInputsTemplate = (ctaButtons) => {
  const ctaButtonsTemplate = ctaButtons
    .map((ctaButton) => createInputTemplate(ctaButton))
    .join("");

  const template = `
    <div class="btn-welcome">
        ${ctaButtonsTemplate}
    </div>
  `;

  return template;
};

export const createPeopleTemplate = ({ image, text, href }) => {
  return `
    <div class="people-welcome">
      <img class="people" src="${image}" alt="people">
      <a href="${href}" class="text-people">${text}</a>
    </div>
  `;
};

export const createIllustrationTemplate = ({ src, alt }) => {
  return `
    <div class="welcome-image">
      <img src="${src}" alt="${alt}" />
    </div>
  `;
};

export const heroTemplate = (heroData) => {
  const headerTemplate = createHeaderTemplate(heroData.header);
  const descriptionTemplate = createDescriptionTemplate(heroData.description);
  const buttonsTemplate = createInputsTemplate(heroData.heroCtaButtons);
  const peopleTemplate = createPeopleTemplate(heroData.peopleData);
  const illustrationTemplate = createIllustrationTemplate(heroData.illustration);

  return `
    <section class="welcome">
      <div class="container">
        <div class="welcome1">
          <div class="welcome-wrapper">
            ${headerTemplate}
            ${descriptionTemplate}
            ${buttonsTemplate}
            ${peopleTemplate}
          </div>
          ${illustrationTemplate}
        </div>
        <!-- Контейнер для компаний -->
        <div class="welcome-web"></div>
      </div>
    </section>

    <section class="GPT">
      <div class="container">
        <div class="text-overlow">
          <div class="gpt-header">
            <h3 class="gpt-title">Что такое GPT-4</h3>
            <p class="gpt-text-desk">
              Мы так мнение друзей мне сообщаем как восторг. 
              Вся передняя часть тарелки слышна ох как надо. 
              Его неполноценное и неубедительное место жительства принадлежит ему. 
              Соединение сделало невозможным собственное шумное жилье. 
              На свадьбе светлость Ан настоял на такой человечности. 
              Дружелюбный холостяцкий вход.
            </p>
          </div>
          <div class="gpt-grid">
            <div class="text-gpt">
              <h1 class="gpt-osnovn">Возможности Превосходят<br>Ваше Воображение</h1>
              <h4 class="gpt-podtext">Исследовать библиотеку</h4>
            </div>
            
            <div class="text-gpt-menu">
              <h3 class="gpt-menu">Чатботы</h3>
              <p class="text-desk-men">
                Мы так мнение друзей мне сообщаем как восторг. Вся передняя часть тарелки<br>слышна ох как надо.
              </p>
            </div>
            
            <div class="text-gpt-menu">
              <h3 class="gpt-menu">База Знаний</h3>
              <p class="text-desk-men">
                На свадьбе светлость Ан настоял на такой человечности. Дружелюбный холостяцкий вход. Как поставить невозможное.
              </p>
            </div>
            
            <div class="text-gpt-menu">
              <h3 class="gpt-menu">Образование</h3>
              <p class="text-desk-men">
                На свадьбе светлость Ан настоял на такой человечности. Дружелюбный холостяцкий вход. Как поставить невозможное.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="future-is-now">
      <div class="container">
        <div class="future-grid">
          <div class="future-left">
            <h2 class="future-title">
              Будущее Уже Наступило<br>
              и Тебе Нужно Лишь<br>
              Осознать. Шагни в<br>
              Будущее и Воплоти Его.
            </h2>
            <p class="future-desc">Запросить ранний доступ</p>
          </div>
          
          <div class="future-right">
            <div class="future-item">
              <div class="future-text-wrapper">
                <h3 class="right-text">Мгновенное<br>улучшение ситуации<br>с недоверием</h3>
              </div>
              <div class="future-desc-wrapper">
                <p class="right-text-2">
                  From they fine john he give of rich he. They age and draw mrs like. 
                  Improving and distrusts may instantly was household applauded.
                </p>
              </div>
            </div>
            
            <div class="future-item">
              <div class="future-text-wrapper">
                <h3 class="right-text">Станьте активным<br>человеком</h3>
              </div>
              <div class="future-desc-wrapper">
                <p class="right-text-2">
                  Considered sympathize ten uncommonly occasional assistance sufficient not. 
                  Letter of on become he tended active enable to.
                </p>
              </div>
            </div>
            
            <div class="future-item">
              <div class="future-text-wrapper">
                <h3 class="right-text">Сообщение или я<br>ничего</h3>
              </div>
              <div class="future-desc-wrapper">
                <p class="right-text-2">
                  Led ask possible mistress relation elegance eat likewise debating. 
                  By message or am nothing amongst chiefly address.
                </p>
              </div>
            </div>
            
            <div class="future-item">
              <div class="future-text-wrapper">
                <h3 class="right-text">Действительно<br>мальчик, округ<br>закона</h3>
              </div>
              <div class="future-desc-wrapper">
                <p class="right-text-2">
                  Really boy law county she unable her sister. Feet you off its like like six. 
                  Among sex are leave law built now. In built table in an rapid blush.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="my-apps">
      <div class="container">
        <div class="my-apps-image">
          <img src="img/Feature Image.png" alt="Feature Image">
        </div>
        <div class="my-apps-wrapper">
          <h1 class="my-apps-text-1">Запросить ранний доступ</h1>
          <p class="my-apps-title">Превосходя все<br>ожидания</p>
          <h2 class="my-apps-text-1">
            Однако кровать для помощи в путешествии неприятна. Не<br>
            мысли все осуществляют благословение. Снисхождение ко<br>
            всему, радость, изменение бурной привязанности.<br>
            Вечеринку мы лет на заказ разрешили.
          </h2>
          <p class="my-apps-desc">Запросить ранний доступ</p>
        </div>
      </div>
    </section>

    <section class="CTA">
      <div class="container">
        <div class="cta-background">
          <h1 class="cta-text-1">Запросите ранний доступ</h1>
          <p class="cta-text-2">Зарегистрируйтесь и начните исследовать<br>безграничные возможности.</p>
          <div class="btn-cta">
            <button class="cta-start">Начать</button>
          </div>
        </div>
      </div>
    </section>
  `;
};

export default heroTemplate;