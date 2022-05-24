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

const textButton = document.querySelector('.about__button');
const textHidden = document.querySelector('.content__hidden');
const showHideButton = document.querySelector('[data-button="about"]');

function closeText() {
  textHidden.classList.remove('content__hidden');
  textHidden.classList.add('content__shown');
  showHideButton.textContent = 'Свернуть';
}

function openText() {
  textHidden.classList.add('content__hidden');
  textHidden.classList.remove('content__shown');
  showHideButton.textContent = 'Подробнее';
}

textButton.addEventListener('click', function () {
  if (textButton.classList.contains('')) {
    openText();
  } else {
    closeText();
  }
});
