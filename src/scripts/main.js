'use strict';

const allInputs = document.querySelectorAll('input');

for (const input of allInputs) {
  const labelElement = document.createElement('label');

  labelElement.className = 'field-label';

  if (input.id) {
    labelElement.setAttribute('for', input.id);
  }

  if (input.name) {
    labelElement.textContent = input.name;

    const placeholderValue =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.setAttribute('placeholder', placeholderValue);
  }

  if (labelElement) {
    input.before(labelElement);
  }
}
