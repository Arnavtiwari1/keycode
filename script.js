document.addEventListener('keydown', (event) => {
  const key = event.key === ' ' ? 'Space' : event.key;
  const keycode = event.keyCode || event.which;

  document.getElementById('key').textContent = key;
  document.getElementById('keycode').textContent = keycode;
});

document.addEventListener('DOMContentLoaded', () => {
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
      const key = event.data || '--';
      const keycode = key.charCodeAt(0) || '--';

      document.getElementById('key').textContent = key;
      document.getElementById('keycode').textContent = keycode;
    });

    document.body.appendChild(input);

    // Focus the input on tap
    document.body.addEventListener('click', () => {
      input.focus();
    });
  }
});

  