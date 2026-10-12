# My Website

Landing page construida con [Astro](https://astro.build), [GSAP](https://gsap.com) y [Lenis](https://lenis.darkroom.engineering).

## Scripts

| Comando           | Descripción                                     |
| ----------------- | ----------------------------------------------- |
| `npm install`     | Instala dependencias                            |
| `npm run dev`     | Servidor de desarrollo en http://localhost:4321 |
| `npm run build`   | Build estático optimizado en `dist/`            |
| `npm run preview` | Sirve `dist/` para probar el build final        |
| `npm run format`  | Formatea el código con Prettier                 |

## Estructura

```
├── public/                  # Archivos copiados tal cual (favicon, robots.txt, og-image)
└── src/
    ├── pages/               # Cada archivo es una ruta: index.astro → /, page.astro → /page
    ├── layouts/             # Estructura común (<head>, SEO, scripts globales)
    ├── sections/            # Bloques grandes de la landing (Hero, Features…)
    ├── components/          # Piezas reutilizables pequeñas (Button…)
    ├── assets/              # Imágenes, fuentes e iconos 
    ├── styles/              # Estilos globales: tokens, reset, layout, utilidades
    └── scripts/
        ├── main.js          # JS global (scroll suave + reveal)
        ├── animations/      # gsap.js, smooth-scroll.js, reveal.js
        └── utils/           # Funciones auxiliares
```

## Convenciones

- **Estilos**: los de cada componente van en su `<style>` (scoped); en `src/styles/` solo lo global.
  Valores siempre desde `styles/tokens/variables.css`. Nomenclatura BEM (`.hero__title`, `.btn--primary`).
- **Nueva sección**: crear `src/sections/<Nombre>.astro` y usarla en la página.
- **Imágenes**: usar `<Image />` de `astro:assets` con archivos de `src/assets/images/`.

## Animaciones: elige la opción más ligera que sirva

1. **CSS** (`transition`, `@keyframes`): hover y microinteracciones.
2. **`data-reveal`**: aparición al hacer scroll, sin librerías (`data-reveal-delay="200"` opcional).
3. **GSAP** (`@/scripts/animations/gsap.js`): secuencias, SplitText, ScrollTrigger.
   Impórtalo solo en el `<script>` de la sección que lo use (ver `sections/Features.astro`).
   Envuelve las animaciones en `gsap.matchMedia()` con `(prefers-reduced-motion: no-preference)`.

Reglas: animar solo `transform` y `opacity`, y respetar siempre `prefers-reduced-motion`.
Las transiciones entre páginas usan View Transitions nativas (`@view-transition` en `main.css`).
