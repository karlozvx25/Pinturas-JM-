/* Restore presentation preference before drawing the application. */
(() => {
  let theme = 'dark';
  try { if (localStorage.getItem('pjm-theme') === 'light') theme = 'light'; } catch {}
  document.documentElement.dataset.theme = theme;
})();
