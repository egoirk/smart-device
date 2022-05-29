import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initModals();
  });
});


/* ACCORDION*/
const accordionList = document.querySelectorAll('.accordion-item');

accordionList.forEach((event) =>
  event.addEventListener('click', () => {
    if (event.classList.contains('accordion-active', 'accordion-open')) {
      event.classList.remove('accordion-active', 'accordion-open');
    } else {
      accordionList.forEach((event2) => event2.classList.remove('accordion-active', 'accordion-open'));
      event.classList.add('accordion-active', 'accordion-open');
    }
  })
);

/* ABOUT*/

const moreButton = document.querySelector('.about__button');
const textHidden = document.querySelector('.about__content');
const shortClass = 'about__content--short';

function closeText() {
  textHidden.classList.add(shortClass);
  moreButton.textContent = 'Подробнее';
}

function openText() {
  textHidden.classList.remove(shortClass);
  moreButton.textContent = 'Свернуть';
}

moreButton.addEventListener('click', function () {
  if (textHidden.classList.contains(shortClass)) {
    openText();
  } else {
    closeText();
  }
});
