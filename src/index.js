import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
const themeSwitchEl = document.querySelector('#theme-switch-toggle');

themeSwitchEl.addEventListener('click', themeSwitcher);
if (Object.values(localStorage).includes('dark-theme')) {
  darkThemeAdder();
  //   (themeSwitchEl.checked = true) && bodyEl.classList.add('dark-theme');
}

function themeSwitcher() {
  bodyEl.classList.contains('dark-theme')
    ? lightThemeAdder()
    : darkThemeAdder();
}

function lightThemeAdder() {
  bodyEl.classList.remove('dark-theme') || bodyEl.classList.add('light-theme');
  localStorage.removeItem(Theme.DARK) ||
    localStorage.setItem('theme', Theme.LIGHT);
}

function darkThemeAdder() {
  bodyEl.classList.add('dark-theme') || bodyEl.classList.remove('light-theme');
  localStorage.removeItem(Theme.LIGHT) ||
    localStorage.setItem('theme', Theme.DARK);
  themeSwitchEl.checked = true;
}

//   Object.values(localStorage).includes('dark-theme');
