'use strict';

const forms = document.querySelectorAll('form');
let idCounter = 1;

forms.forEach((form) => {
  const allInputs = form.querySelectorAll('input');

  for (const input of allInputs) {
    const labelElement = document.createElement('label');

    labelElement.className = 'field-label';

    if (!input.id) {
      input.id = `input-id-${idCounter++}`;
    }
    labelElement.setAttribute('for', input.id);

    if (input.name) {
      labelElement.textContent = input.name;

      const placeholderValue =
        input.name.charAt(0).toUpperCase() + input.name.slice(1);

      input.setAttribute('placeholder', placeholderValue);
    }

    input.parentElement.appendChild(labelElement);
  }
});
