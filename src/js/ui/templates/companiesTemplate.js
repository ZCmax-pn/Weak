export const createCompanyLogo = (company) => {
  return `<img src="${company.logo}" alt="${company.name}" />`;
};

export const renderCompanies = (companies) => {
  const welcomeWeb = document.querySelector('.welcome-web');
  if (!welcomeWeb) {
    console.log('Блок компаний не найдено');
    return;
  }
  
  welcomeWeb.innerHTML = '';
  
  companies.forEach(company => {
    const companyHTML = createCompanyLogo(company);
    welcomeWeb.insertAdjacentHTML('beforeend', companyHTML);
  });
};

export const companiesTemplate = (companies) => {
  const logos = companies.map(company => createCompanyLogo(company)).join('');
  
  return `
    <div class="welcome-web">
      ${logos}
    </div>
  `;
};

export default companiesTemplate;