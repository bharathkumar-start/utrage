// Elements
const header = document.getElementById('header');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Sticky header background on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('bg-blur', 'shadow-md');
  } else {
    header.classList.remove('bg-blur', 'shadow-md');
  }
});

// Mobile menu toggle
menuBtn.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', (!expanded).toString());
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('show');
});

// Smooth scroll and close menu after click
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('show');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
});

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('show');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});
