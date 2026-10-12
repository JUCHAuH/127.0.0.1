import { $$ } from '../utils/dom.js';
import { prefersReducedMotion } from '../utils/motion.js';

/**
 * Muestra elementos [data-reveal] cuando entran en pantalla.
 * Usa IntersectionObserver (sin listeners de scroll) y deja de observar
 * cada elemento tras animarlo, para no gastar recursos.
 */
export function initReveal({ selector = '[data-reveal]', threshold = 0.15 } = {}) {
  const elements = $$(selector);
  if (!elements.length) return;

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { threshold, rootMargin: '0px 0px -10% 0px' },
  );

  for (const el of elements) {
    const delay = el.dataset.revealDelay;
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
    observer.observe(el);
  }
}
