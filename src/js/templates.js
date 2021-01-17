import menuList from '../menu.json';
import template from '../templates/template.hbs';

const markupTargetEl = document.querySelector('.js-menu');

const markup = template(menuList);
markupTargetEl.insertAdjacentHTML('afterbegin', markup);
