/*
 * Punto único de entrada a GSAP: registra los plugins una vez.
 * Impórtalo solo desde las secciones que lo necesiten, así GSAP
 * no se descarga en páginas que no lo usan.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { initSmoothScroll } from './smooth-scroll.js';

gsap.registerPlugin(ScrollTrigger, SplitText);

// Mantiene ScrollTrigger sincronizado con el scroll suave de Lenis
initSmoothScroll()?.on('scroll', ScrollTrigger.update);

export { gsap, ScrollTrigger, SplitText };
