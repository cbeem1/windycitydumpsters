// Windy City Dumpsters — main.js
// Progressive enhancement only. Page works fully without JS.

document.addEventListener('DOMContentLoaded', function () {

  // ── FAQ ACCORDION ──────────────────────────────────────
  // Mark FAQ as JS-ready so CSS can hide answers
  const faqList = document.querySelector('.faq__list');
  if (faqList) {
    faqList.closest('.faq').classList.add('faq--js-ready');

    // Open the first item by default
    const firstItem = faqList.querySelector('.faq__item');
    if (firstItem) firstItem.classList.add('open');

    faqList.addEventListener('click', function (e) {
      const question = e.target.closest('.faq__question');
      if (!question) return;
      const item = question.closest('.faq__item');
      const isOpen = item.classList.contains('open');
      // Close all
      faqList.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  }

  // ── MOBILE NAV ────────────────────────────────────────
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks = document.querySelector('.nav__links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        // Close
        hamburger.setAttribute('aria-expanded', 'false');
        navLinks.removeAttribute('style');
      } else {
        // Open
        hamburger.setAttribute('aria-expanded', 'true');
        const navHeight = hamburger.closest('.nav').offsetHeight;
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = navHeight + 'px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'var(--blue)';
        navLinks.style.padding = '16px 24px 20px';
        navLinks.style.gap = '14px';
        navLinks.style.zIndex = '99';
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
        hamburger.setAttribute('aria-expanded', 'false');
        navLinks.removeAttribute('style');
        hamburger.focus();
      }
    });
  }

});
