const langBtn = document.getElementById('langBtn');
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();
function setLanguage(lang) {
  document.querySelectorAll('[data-fa][data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  document.documentElement.lang = lang === 'fa' ? 'fa' : 'en';
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.body.classList.toggle('en', lang === 'en');
  langBtn.textContent = lang === 'fa' ? 'EN' : 'FA';
  document.title = lang === 'fa'
    ? 'فرشاد غضنفری | مهندس برق'
    : 'Farshad Ghaznavi | Electrical Engineer';
}
langBtn.addEventListener('click', () => {
  const current = document.documentElement.lang === 'fa' ? 'fa' : 'en';
  setLanguage(current === 'fa' ? 'en' : 'fa');
});
