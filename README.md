# Chimdiume Azie: Portfolio

A single-page portfolio for an AI/ML developer: one `index.html`, an `assets/` folder and `CV.pdf`. There is no build step, no framework and no npm install.

Live site: https://achimdi.github.io/portfolio/

## Page structure

1. Hero: name, one-sentence pitch, availability and timezone, CV and email buttons, a static tag row
2. Selected work: Nellow, NeuroScan AI, Twzee Foods. Every project uses the same card:
   title, one-sentence outcome, role and stack chips, three key facts, one visual, links,
   then a native `<details>` block called "Technical details" for the depth
3. Skills: four static groups, each naming the project that shows it
4. About: short story, working style, one line of education, headshot
5. Contact

## What it is built with

| Layer | Technology |
|---|---|
| Structure | HTML5 (semantic sections, `<details>`, `<dialog>`, tables, inline SVG) |
| Styling | CSS3: custom properties, Grid, Flexbox, `clamp()` fluid sizing, media queries |
| Behaviour | Vanilla JavaScript (ES6+), no libraries. The page is fully readable without it |
| Fonts | Google Fonts: Instrument Serif (headings), Instrument Sans (body), Fragment Mono (labels), loaded without blocking render |
| Images | WebP files in `assets/img/`, with `width`, `height` and lazy loading |
| Hosting | GitHub Pages |

## Interactions that remain

| Feature | How | Without JS or with reduced motion |
|---|---|---|
| Hero heat trail | `<canvas>` radial gradients that follow the pointer, paused off screen | Hidden |
| Grad-CAM lens | CSS `mask: radial-gradient()` driven by pointer or arrow keys, plus Lens / Heatmap / MRI-only buttons and a size slider | Scan and heatmap shown side by side |
| Click to enlarge | Image links open in a native `<dialog>` | The link opens the image file |
| Nellow simulation | Scripted, labelled as a simulation; mirrors the real Balanced and Turbo routes | Hidden, with a short note |
| Copy email | Copies the address from the Contact section | Buttons fall back to links |
| Light and dark | `data-theme` on `<html>`, set before first paint, saved in `localStorage` | Light theme |
| Quick view | `quick` class on `<body>` turns off the heat trail and all animation | Not needed |

## Editing it

- **Email:** change it in one place, the line marked `<!-- EMAIL: ... -->` in the Contact section. The nav link and both Copy buttons read it from there.
- **Headshot:** replace `assets/img/portrait-1.webp` (see the `<!-- HEADSHOT: ... -->` comment) and keep the `width` and `height` attributes in step.
- **TODOs:** every missing fact is a visible `[TODO: ...]` with the class `todo`. Search `index.html` for `TODO` before publishing.
- **Images:** convert to WebP, put them in `assets/img/`, and set `width`, `height`, `alt` and `loading="lazy"` on the `<img>`.
- **Colours and fonts:** CSS variables at the top of the `<style>` block (`:root` for light, `[data-theme=dark]` for dark).
- **Social preview:** `assets/og.png` (1200×630). The canonical URL, Open Graph tags and JSON-LD are in `<head>`.
- **CV:** replace `CV.pdf` and keep the same file name.

## Where the numbers come from

- NeuroScan AI balanced accuracy, macro-F1 and per-class precision and recall are computed from the confusion-matrix counts in `assets/img/confusion-matrix.webp`. They reproduce the published 77.35% accuracy, the 88.5% baseline and every previously published precision and recall.
- Nellow's modes, models, limits and failure handling are taken from `app.py` and `server.py` in https://github.com/Achimdi/nellow.
- Twzee Foods Lighthouse scores were measured on the live site with Lighthouse 12.8 (mobile) on 11 Nov 2026.

## Deploying

1. Put `index.html`, `CV.pdf` and the `assets/` folder in https://github.com/Achimdi/portfolio.
2. In GitHub, go to Settings, then Pages, choose "Deploy from a branch", pick `main` and `/ (root)`, and Save.
3. The site goes live at https://achimdi.github.io/portfolio/ after a minute or two.

## Honesty note

NeuroScan AI is a research prototype. It is not clinically validated and is not a medical device.
