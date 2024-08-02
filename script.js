// script.js
document.addEventListener('keydown', (event) => {
    const key = event.key === ' ' ? 'Space' : event.key;
    const keycode = event.keyCode || event.which;
    
    document.getElementById('key').textContent = key;
    document.getElementById('keycode').textContent = keycode;
  });
  