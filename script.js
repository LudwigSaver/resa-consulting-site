(() => {
  const menuButton = document.querySelector('.mobile-menu');
  const nav = document.querySelector('#primary-nav');
  const closeMenu = () => {
    if (!menuButton || !nav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Öppna menyn');
    nav.classList.remove('is-open');
  };
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const next = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(next));
      menuButton.setAttribute('aria-label', next ? 'Stäng menyn' : 'Öppna menyn');
      nav.classList.toggle('is-open', next);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); });
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
