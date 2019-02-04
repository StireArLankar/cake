var navMain = document.querySelector('.header-nav');
var navToggle = document.querySelector('.header-nav__toggle');

window.onload = function() {
  navMain.classList.add('header-nav--closed');
  // getData('https://stire-ar-lankar.firebaseapp.com/cake')
  //   .then(array => renderFillingList(array))
  //   .then(() => removeLoader('filling'));

  removeLoader('filling');
};

navToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  navMain.classList.toggle('header-nav--closed');
});

function getData(url) {
  return fetch(url).then(blob => blob.json());
}

function renderFillingList(array) {
  const fragment = document.createDocumentFragment();
  const list = document.querySelector('.filling__slider')
  array.forEach((item, index) => renderFilling(item, index, fragment));

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  list.appendChild(fragment);
  const number = document.querySelector('.filling__number--outer');
  number.textContent = `1/${array.length}`

  function renderFilling(item, index, fragment) {
    const { img, description, name, price } = item.data;
    const node = document.querySelector('#filling-template').content.cloneNode(true);

    node.querySelector('source').setAttribute('srcset', `${img}_@2x.png`);

    const image = node.querySelector('.filling__img');
    image.setAttribute('alt', `${name}`);
    image.setAttribute('src', `${img}_@1x.png`);

    node.querySelector('.filling__number').textContent = `${index + 1}/${array.length}`;

    node.querySelector('.filling__title').textContent = `${name}`;

    node.querySelector('.filling__text').textContent = `${description}`;

    node.querySelector('.filling__price').textContent = `${price.number} ${price.unit}`;

    fragment.appendChild(node);
  }
}

function removeLoader(section) {
  const loader = document.querySelector(`.${section} .order__loader`);
  loader.classList.add('order__loader--fade');
  setTimeout(() => loader.style.display = 'none', 500);
}
