import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { prefersReducedMotion } from '../utils/motion.js';

let lenis = null;

/**
 * Inicializa el scroll suave (una sola instancia por página).
 * Devuelve null si el usuario prefiere menos movimiento.
 */
export function initSmoothScroll() {
  if (lenis || prefersReducedMotion()) return lenis;

  lenis = new Lenis({ autoRaf: true, anchors: true });
  return lenis;
}
