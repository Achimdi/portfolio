# Chimdiume Azie: Portfolio

A single-page portfolio for an AI/ML developer. It is one self-contained `index.html` file plus `CV.pdf`. There is no build step, no framework and no npm install.

Live site: https://achimdi.github.io/portfolio/

## What it is built with

| Layer | Technology |
|---|---|
| Structure | HTML5 (semantic sections, ARIA labels, keyboard focus) |
| Styling | CSS3: custom properties, Grid, Flexbox, `clamp()` fluid sizing, media queries |
| Behaviour | Vanilla JavaScript (ES6+), no libraries |
| Fonts | Google Fonts: Syne (headings), Instrument Sans (body), Fragment Mono (labels) |
| Images | WebP, embedded in the HTML as base64 data URIs |
| Hosting | GitHub Pages |

**Not used:** TypeScript, React, GSAP, Lenis, Three.js or any other package. Everything below is plain browser features.

## How each effect is made

| Effect | How |
|---|---|
| Intro name reveal | JavaScript splits the name into letters; CSS `@keyframes` slides each one up, then a `clip-path` wipe removes the screen. Skippable with a button or Esc. |
| Hero heat trail | HTML `<canvas>` (2D context). Radial gradients in heat-map colours are drawn at the cursor or finger and slowly erased with `destination-out` compositing, inside a `requestAnimationFrame` loop. Blended with `mix-blend-mode` (multiply in light, screen in dark). It pauses when the hero is off screen. |
| Floating colour blobs, dotted grid | CSS `radial-gradient`, `filter: blur()` and a looping keyframe animation. |
| Custom cursor | A fixed `<div>` that follows the pointer with easing; its label changes from `data-cur` attributes. Desktop only; the real cursor is never hidden except over the MRI lens. |
| Magnetic buttons | Pointer Events measure the pointer position and apply a small CSS `transform: translate()`. |
| Scroll pop-in and pop-out | `IntersectionObserver` toggles an `.in` class as elements enter and leave the screen; CSS `transition` on opacity and transform does the movement, with a small stagger. |
| Count-up numbers | `requestAnimationFrame` with an ease-out curve, restarted each time the numbers scroll into view. |
| Project carousels | Flexbox track moved with `transform: translateX()`; autoplay with `setInterval`, pause on hover, arrows, dots, swipe (Pointer Events) and arrow-key control. |
| Ticker bands | Two CSS `@keyframes` marquees running in opposite directions, tilted with `transform: rotate()`. Stars are CSS `clip-path` shapes. |
| Grad-CAM lens | A real MRI slice with its real Grad-CAM image on top, revealed through a CSS `mask: radial-gradient()` whose position follows the pointer through CSS variables. Keyboard arrows move it too. |
| Nellow 3D ring | Three rings (a decorative effect on this site only) using CSS 3D transforms (`perspective`, `rotateX`, `rotateY`) that tilt with the pointer. |
| Nellow chat demo | A scripted recreation in JavaScript (typing effect, Fast/Deep toggle). It is not a live model. |
| Portrait photo swap | Two stacked images; CSS fades between them on hover, and a click toggles it on touch screens. |
| Light and dark mode | A `data-theme` attribute switches CSS variables. The site opens in light mode, and the visitor's choice is saved in `localStorage`. |
| Skills tabs | JavaScript renders the chips for each tab from a data object. |
| Name fitting | A small script shrinks the hero name until it fits the screen, so it never wraps or clips. |
| Quick view | A `quick` class on `<body>` turns off the heat trail, cursor, animations and autoplay. |
| Reduced motion | `prefers-reduced-motion` is respected: animations and autoplay are switched off. |

## Tools used to prepare the content

- Python with Pillow and NumPy: colour-corrected and cropped the portraits, cropped the screenshots, and converted all images to WebP.
- The MRI slice, Grad-CAM image, confusion matrix, training curves and ROC curves come from the final-year project document and the app's own screenshots.

## Files

- `index.html`: the whole site (HTML, CSS, JavaScript and images)
- `CV.pdf`: the CV behind the Download CV buttons; keep it in the same folder as `index.html`
- `README.md`: this file

## Editing it

- Text, links and the email address are plain text inside `index.html`. Open it in VS Code and search for what you want to change.
- The skills tabs and the demo chat answers are in the `D` object at the top of the `<script>`.
- Colours and fonts are CSS variables at the top of the `<style>` block (`:root` for light, `[data-theme=dark]` for dark).
- Images are embedded as `data:image/webp;base64,...`, so to swap one, convert the new image to WebP and replace that data string.
- To update the CV, replace `CV.pdf` and keep the same file name.

## Deploying

1. Put `index.html` and `CV.pdf` in the repo https://github.com/Achimdi/portfolio.
2. In GitHub, go to Settings, then Pages, choose "Deploy from a branch", pick `main` and `/ (root)`, and Save.
3. The site goes live at https://achimdi.github.io/portfolio/ after a minute or two.

## Honesty note

NeuroScan AI is a research prototype. It is not clinically validated and is not a medical device.
