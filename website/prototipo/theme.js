(() => {
  const button = document.createElement('button');
  button.id = 'theme-toggle';
  button.className = 'theme-toggle';
  button.type = 'button';
  function update() {
    const light = document.documentElement.dataset.theme === 'light';
    button.innerHTML = light ? '<span aria-hidden="true">☾</span> Dark' : '<span aria-hidden="true">☀</span> White';
    button.setAttribute('aria-label', light ? 'Activar modo oscuro' : 'Activar modo White');
    button.setAttribute('aria-pressed', String(light));
    button.title = light ? 'Cambiar a modo oscuro' : 'Cambiar a modo White';
  }
  button.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('pjm-theme', next); } catch {}
    update();
  });
  document.querySelector('.shell-view-switch').appendChild(button);
  update();
  window.addEventListener('storage', event => {
    if (event.key !== 'pjm-theme') return;
    document.documentElement.dataset.theme = event.newValue === 'light' ? 'light' : 'dark';
    update();
  });
})();
