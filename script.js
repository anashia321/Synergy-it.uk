const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

if (menuButton) {
  menuButton.setAttribute('aria-label', 'Open navigation menu');
}

if (mobileMenu) {
  mobileMenu.setAttribute('aria-hidden', 'true');
}

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  const nextState = !isOpen;

  menuButton.setAttribute('aria-expanded', String(nextState));
  menuButton.setAttribute('aria-label', nextState ? 'Close navigation menu' : 'Open navigation menu');

  if (mobileMenu) {
    mobileMenu.hidden = !nextState;
    mobileMenu.setAttribute('aria-hidden', String(!nextState));
  }

  document.body.classList.toggle('menu-open', nextState);

  if (nextState) {
    mobileMenu?.querySelector('a')?.focus();
  } else {
    menuButton.focus();
  }
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation menu');
    mobileMenu.hidden = true;
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    menuButton?.focus();
  });
});
