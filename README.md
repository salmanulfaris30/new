const body = document.body;
const themeButtons = document.querySelectorAll('.theme-btn');

const applyTheme = (theme) => {
  body.setAttribute('data-theme', theme);
  localStorage.setItem('nova-theme', theme);

  themeButtons.forEach((button) => {
    const isActive = button.dataset.theme === theme;
    button.classList.toggle('is-active', isActive);
  });
};

const savedTheme = localStorage.getItem('nova-theme') || 'midnight';
applyTheme(savedTheme);

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyTheme(button.dataset.theme);
  });
});
