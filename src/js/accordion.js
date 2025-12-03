import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', () => {
  const footerNav = document.querySelector('.footer-nav-columns');
  if (!footerNav) return;

  let footerAccordion = null;
  const DESKTOP_BREAKPOINT = 1600;

  const enableAccordion = () => {
    if (!footerAccordion) {
      footerAccordion = new Accordion('.footer-nav-columns', {
        duration: 300,
        ariaEnabled: true,
        collapse: true,
        showMultiple: false,
        onlyChildNodes: true,
        elementClass: 'footer-nav-column',
        triggerClass: 'footer-nav-toggle',
        panelClass: 'footer-nav-list',
        activeClass: 'is-open-footer-section',
      });
    }
  };

  const disableAccordion = () => {
    if (footerAccordion) {
      footerAccordion.destroy();
      footerAccordion = null;
    }

    const columns = footerNav.querySelectorAll('.footer-nav-column');

    columns.forEach(column => {
      column.classList.remove('is-open-footer-section');

      const panel = column.querySelector('.footer-nav-list');
      if (panel) {
        panel.style.maxHeight = '';
        panel.style.display = '';
        panel.hidden = false;
      }

      const trigger = column.querySelector('.footer-nav-toggle');
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  };

  const handleAccordionMode = () => {
    if (window.innerWidth < DESKTOP_BREAKPOINT) {
      enableAccordion();
    } else {
      disableAccordion();
    }
  };

  handleAccordionMode();

  window.addEventListener('resize', handleAccordionMode);
});
