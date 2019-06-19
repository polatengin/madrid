const keycode = require('keycode');

const article = document.querySelector('article.row.item');
let currentIndex = 0;

window.addEventListener('keydown', (e) => {
  currentIndex++;

  var index = document.createElement('li');
  index.innerHTML = `${currentIndex}`;

  var key = document.createElement('li');
  key.innerHTML = keycode(e);

  var keyCode = document.createElement('li');
  keyCode.innerHTML = `${e.keyCode}`;

  var shift = document.createElement('li');
  shift.innerHTML = e.shiftKey ? '✓' : '⨯';

  var control = document.createElement('li');
  control.innerHTML = e.ctrlKey ? '✓' : '⨯';

  var alt = document.createElement('li');
  alt.innerHTML = e.altKey ? '✓' : '⨯';

  var item = document.createElement('ul');
  item.appendChild(index);
  item.appendChild(key);
  item.appendChild(keyCode);
  item.appendChild(shift);
  item.appendChild(control);
  item.appendChild(alt);

  article.insertAdjacentElement('afterbegin', item);

  e.stopPropagation();
  e.preventDefault();
}, false);
