// src/js/footer-accordion.js
import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', () => {
  // якщо раптом футера на сторінці немає – просто нічого не робимо
  const footerNav = document.querySelector('.footer-nav-columns');
  if (!footerNav) return;

  new Accordion('.footer-nav-columns', {
    duration: 300, // швидкість анімації
    ariaEnabled: true, // ARIA-атрибути
    collapse: true, // можна закривати відкриту секцію
    showMultiple: false, // відкритою буде тільки одна секція
    onlyChildNodes: true, // беремо тільки прямі дочірні елементи

    // ПІДСТАВЛЯЄМО ТВОЇ КЛАСИ З HTML
    elementClass: 'footer-nav-column', // <li class="footer-nav-column">
    triggerClass: 'footer-nav-toggle', // <button class="footer-nav-toggle">
    panelClass: 'footer-nav-list', // <ul class="footer-nav-list">
    activeClass: 'is-open-footer-section', // ДОДАТКОВИЙ клас для відкритої секції
  });
});
