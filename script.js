document.addEventListener('DOMContentLoaded', () => {
  const keyElement = document.getElementById('key');
  const keyCodeElement = document.getElementById('keycode');

  const updateKeyInfo = (key, keycode) => {
    keyElement.textContent = key;
    keyCodeElement.textContent = keycode;
  };

  if (/Mobi|Android/i.test(navigator.userAgent)) {
    const input = document.createElement('input');
    input.type = 'text';
    input.style.opacity = 0;
    input.style.position = 'absolute';
    input.style.top = '0';
    input.style.left = '0';
    input.style.width = '100%';
    input.style.height = '100%';
    input.autocomplete = 'off';

    input.addEventListener('input', (event) => {
      const key = event.target.value.slice(-1) || '--';
      const keycode = key.charCodeAt(0) || '--';
      updateKeyInfo(key, keycode);
    });

    document.body.appendChild(input);
    input.focus();

    document.body.addEventListener('click', () => {
      input.focus();
    });

  } else {
    document.addEventListener('keydown', (event) => {
      const key = event.key === ' ' ? 'Space' : event.key;
      const keycode = event.keyCode || event.which;
      updateKeyInfo(key, keycode);
    });
  }
});
