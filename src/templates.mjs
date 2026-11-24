// Reusable components and page templates. Everything returns HTML strings.
// `r` is the relative path back to the site root ('' , '../' or '../../'), so the
// site works under https://achimdi.github.io/portfolio/ and on a local server alike.
import { icon, techLogo, brandMark } from './icons.mjs';
import { site, gmailCompose, expertise, skills, about, services, projects, featuredOrder, bySlug } from './data.mjs';

export const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ext = 'target="_blank" rel="noopener"';
const NAV = [['Home', ''], ['Projects', 'projects/'], ['About', 'about/'], ['Contact', 'contact/']];

// ---------- page shell ----------
export function layout({ path, title, description, active, body, r, jsonLd = '', bodyClass = '', ogImage = site.ogImage, ogAlt = site.ogAlt }) {
  const url = site.url + path;
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#080B12">
<meta name="color-scheme" content="dark">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${site.url}${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(ogAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${site.url}${ogImage}">
<meta name="twitter:image:alt" content="${esc(ogAlt)}">
<link rel="icon" href="${r}assets/favicon.svg" type="image/svg+xml">
<link rel="icon" href="${r}assets/favicon-32x32.png" type="image/png" sizes="32x32">
<link rel="icon" href="${r}assets/favicon-16x16.png" type="image/png" sizes="16x16">
<link rel="apple-touch-icon" href="${r}assets/apple-touch-icon.png">
<link rel="preload" href="${r}assets/fonts/space-grotesk-latin-wght.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${r}assets/fonts/inter-latin-wght.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${r}assets/css/site.css">
<script>document.documentElement.classList.add('js')</script>
<script src="${r}assets/js/site.js" defer></script>${jsonLd}
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ''}>
<a class="skip-link" href="#main">Skip to content</a>
${header(r, active)}
<main id="main" tabindex="-1">
${body}
</main>
${footer(r)}
</body>
</html>
`;
}

function header(r, active) {
  const links = NAV.map(([label, href]) =>
    `<li><a href="${r}${href}"${label === active ? ' aria-current="page"' : ''}>${label}</a></li>`).join('');
  return `<header class="site-header" data-header>
  <div class="wrap header-row">
    <a class="brand" href="${r}" aria-label="${site.name}, home">${brandMark(32, 'hdr')}<span class="brand-name">${site.name}</span></a>
    <nav class="site-nav" id="site-nav" aria-label="Main">
      <ul class="nav-list">${links}</ul>
      <a class="btn btn-primary btn-sm nav-cta" href="${r}contact/">Let's talk</a>
    </nav>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle>
      <span class="nav-toggle-open">${icon('menu', { size: 22 })}</span><span class="nav-toggle-close">${icon('close', { size: 22 })}</span><span class="sr-only">Menu</span>
    </button>
  </div>
</header>`;
}

function socialLinks(cls = 'social-links') {
  return `<ul class="${cls}">${site.social.map(s =>
    `<li><a href="${s.url}" ${ext} aria-label="${s.label} (${s.handle})">${icon(s.id, { size: 18 })}<span>${s.label}</span></a></li>`).join('')}</ul>`;
}

function footer(r) {
  const proj = featuredOrder.map(slug => `<li><a href="${r}projects/${slug}/">${bySlug[slug].name}</a></li>`).join('');
  return `<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <a class="brand" href="${r}" aria-label="${site.name}, home">${brandMark(32, 'ftr')}<span class="brand-name">${site.name}</span></a>
      <p>Software and AI/ML developer in ${site.location}. ${site.availability}</p>
      <a class="text-link" href="${r}${site.cv}" download="Chimdiume-Azie-CV.pdf">${icon('download', { size: 16 })} Download CV</a>
    </div>
    <nav class="footer-col" aria-label="Pages"><h2>Pages</h2><ul>${NAV.map(([l, h]) => `<li><a href="${r}${h}">${l}</a></li>`).join('')}</ul></nav>
    <nav class="footer-col" aria-label="Projects"><h2>Projects</h2><ul>${proj}</ul></nav>
    <div class="footer-col"><h2>Elsewhere</h2>${socialLinks('footer-social')}</div>
  </div>
  <div class="wrap footer-base"><p>© 2026 ${site.name}</p><p>Built by hand with HTML, CSS and JavaScript.</p></div>
</footer>`;
}

// ---------- small components ----------
const btnArrow = icon('arrowRight', { size: 18, cls: 'btn-arrow' });

function techChips(items, r, cls = 'tech-list') {
  return `<ul class="${cls}">${items.map(t => {
    const logo = techLogo(t.slug, r);
    return `<li class="tech${logo ? '' : ' tech--text'}">${logo}<span>${esc(t.name)}</span></li>`;
  }).join('')}</ul>`;
}

function tags(list) {
  return `<ul class="tags" aria-label="Technologies">${list.map(t => `<li>${esc(t)}</li>`).join('')}</ul>`;
}

function externalLinks(p, { compact = false } = {}) {
  return p.links.map((l, i) => {
    const ico = l.github ? icon('github', { size: 18 }) : icon('arrowUpRight', { size: 18 });
    const cls = compact ? 'text-link' : (i === 0 && !l.github ? 'btn btn-primary' : 'btn btn-ghost');
    const sr = `<span class="sr-only"> for ${esc(p.name)} (opens in a new tab)</span>`;
    return `<a class="${cls}" href="${l.url}" ${ext}>${esc(l.label)}${sr}${ico}</a>`;
  }).join('');
}

function img({ src, w, h, alt }, r, { lazy = true, cls = '', sizes = '' } = {}) {
  return `<img${cls ? ` class="${cls}"` : ''} src="${r}${src}" width="${w}" height="${h}" alt="${esc(alt)}"${lazy ? ' loading="lazy" decoding="async"' : ''}${sizes ? ` sizes="${sizes}"` : ''}>`;
}

function phone(shot, r, cls = '') {
  return `<div class="phone${cls ? ' ' + cls : ''}">${img(shot, r)}</div>`;
}

// Visual for a project card. Each project gets its own composition built from real screenshots.
function projectVisual(p, r) {
  const vt = `style="view-transition-name: shot-${p.slug}"`;
  if (p.slug === 'tallybox') {
    return `<div class="visual visual--tally" ${vt}><div class="browser">${img(p.cardImage, r)}</div>${phone(p.cardPhone, r, 'phone--float')}</div>`;
  }
  if (p.slug === 'neuroscan-ai') {
    return `<div class="visual visual--neuro" ${vt}><div class="scan-pair">${img({ src: 'assets/img/mri-slice.webp', w: 336, h: 408, alt: 'Axial brain MRI slice.' }, r)}${img(p.cardImage, r)}</div><p class="visual-note">MRI slice and its Grad-CAM heatmap</p></div>`;
  }
  if (p.slug === 'nellow') {
    return `<div class="visual visual--nellow" ${vt}><div class="browser browser--dark">${img(p.cardImage, r)}</div></div>`;
  }
  return `<div class="visual visual--twzee" ${vt}>${p.cardPhones.map((s, i) => phone(s, r, `phone--${i + 1}`)).join('')}</div>`;
}

// Bento card on the home page.
function workCard(p, r, size) {
  const live = p.links.find(l => !l.github);
  return `<article class="work-card work-card--${p.accent} ${size}" data-reveal>
  ${projectVisual(p, r)}
  <div class="work-body">
    <p class="work-cat">${esc(p.category)}</p>
    <h3><a class="card-link" href="${r}projects/${p.slug}/">${esc(p.name)}</a></h3>
    <p>${esc(p.short)}</p>
    ${tags(p.tags)}
    <div class="work-actions"><span class="read-more" aria-hidden="true">Read the case study ${btnArrow}</span>${live ? `<a class="text-link on-card" href="${live.url}" ${ext}>${esc(live.label)}<span class="sr-only"> for ${esc(p.name)} (opens in a new tab)</span>${icon('arrowUpRight', { size: 16 })}</a>` : ''}</div>
  </div>
</article>`;
}

// Editorial feature on the projects page.
function workFeature(p, r, variant) {
  const facts = p.facts.filter(([k]) => k === 'Role' || k === 'Status' || k === 'Context' || k === 'For' || k === 'Runs on');
  return `<article class="feature feature--${p.accent} ${variant}" data-reveal>
  <div class="feature-media">${projectVisual(p, r)}</div>
  <div class="feature-body">
    <p class="work-cat">${esc(p.category)}</p>
    <h2><a class="card-link" href="${r}projects/${p.slug}/">${esc(p.name)}</a></h2>
    <p class="feature-text">${esc(p.overview)}</p>
    <dl class="mini-facts">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
    ${tags(p.tags)}
    <div class="work-actions"><span class="read-more" aria-hidden="true">Read the case study ${btnArrow}</span>${externalLinks(p, { compact: true })}</div>
  </div>
</article>`;
}

function sectionHead(title, id, route, r, routeLabel) {
  return `<div class="section-head"><h2 id="${id}">${title}</h2>${route ? `<a class="route-link" href="${r}${route}"><span>${routeLabel}</span>${icon('arrowRight', { size: 16 })}</a>` : ''}</div>`;
}

function contactPanel(r) {
  return `<section class="section" aria-labelledby="cta-title">
  <div class="wrap">
    <div class="cta-panel" data-reveal>
      <div class="cta-copy">
        <h2 id="cta-title">Have a role or a project in mind?</h2>
        <p>${site.availability} Email is the quickest way to reach me.</p>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="${gmailCompose()}" ${ext}>${icon('mail', { size: 18 })}Email me<span class="sr-only"> (opens Gmail in a new tab)</span></a>
        ${copyEmail()}
        <a class="text-link" href="${r}contact/">More ways to reach me ${icon('arrowRight', { size: 16 })}</a>
      </div>
      ${profileLinks('profile-links profile-links--cta')}
    </div>
  </div>
</section>`;
}

// Email plus GitHub, LinkedIn and Instagram, as a row of labelled links.
function profileLinks(cls) {
  return `<ul class="${cls}" aria-label="Email and profiles">
    <li><a href="${gmailCompose()}" ${ext}>${icon('mail', { size: 18 })}<span>Email</span><span class="sr-only"> (opens Gmail in a new tab)</span></a></li>${site.social.map(s => `
    <li><a href="${s.url}" ${ext}>${icon(s.id, { size: 18 })}<span>${s.label}</span><span class="sr-only"> ${s.handle} (opens in a new tab)</span></a></li>`).join('')}
  </ul>`;
}

function copyEmail(cls = 'btn btn-ghost') {
  return `<button class="${cls} copy-btn" type="button" data-copy="${site.email}"><span class="copy-default">${icon('copy', { size: 18 })}<span>${site.email}</span></span><span class="copy-done">${icon('check', { size: 18 })}<span>Copied to clipboard</span></span></button><span class="sr-only" role="status" data-copy-status></span>`;
}

// ---------- pages ----------
export function homePage() {
  const r = '';
  const sizes = { 'tallybox': 'span-7', 'neuroscan-ai': 'span-5', 'nellow': 'span-5', 'twzee-foods': 'span-7' };
  const jsonLd = `
<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Person', name: site.name, url: site.url, jobTitle: 'Software and AI/ML developer',
    email: `mailto:${site.email}`, address: { '@type': 'PostalAddress', addressCountry: 'NG' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: site.education.school },
    sameAs: site.social.map(s => s.url), image: site.url + 'assets/img/portrait-1.webp',
  })}</script>`;
  const body = `
<section class="hero" aria-labelledby="hero-title">
  <div class="hero-bg" aria-hidden="true"><span class="glow glow-a"></span><span class="glow glow-b"></span><span class="grid-lines"></span></div>
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="status"><span class="status-dot" aria-hidden="true"></span>${site.availabilityShort}</p>
      <h1 id="hero-title" class="display">Building software that solves real problems.</h1>
      <p class="lead">I'm ${site.name}, a Computer Science graduate in ${site.location}. I design and develop web applications, business management systems and intelligent software, from an inventory app shops run on their phones to brain-scan AI that shows its work.</p>
      <div class="actions">
        <a class="btn btn-primary" href="${r}projects/">Explore projects ${btnArrow}</a>
        <a class="btn btn-ghost" href="${r}contact/">Contact me</a>
      </div>
      <ul class="hero-meta">
        <li>${icon('cap', { size: 18 })}${site.education.degree}, ${site.education.year}</li>
        <li>${icon('pin', { size: 18 })}${site.location}</li>
        <li><a href="${r}${site.cv}" download="Chimdiume-Azie-CV.pdf">${icon('download', { size: 18 })}Download CV</a></li>
      </ul>
      ${profileLinks('profile-links profile-links--hero')}
    </div>
    <div class="hero-visual">
      <div class="portrait-frame">
        <img src="${r}assets/img/portrait-1.webp" width="680" height="780" alt="Portrait of ${site.name} in a white shirt." fetchpriority="high" decoding="async">
        <span class="scan-line" aria-hidden="true"></span>
      </div>
      <ul class="hero-tags" aria-label="Featured projects">
        <li><a class="float-tag float-tag--1" href="${r}projects/neuroscan-ai/"><span class="tag-k">Grad-CAM</span><span>NeuroScan AI</span></a></li>
        <li><a class="float-tag float-tag--2" href="${r}projects/tallybox/"><span class="tag-k"><span class="live-dot" aria-hidden="true"></span>Live</span><span>Tallybox</span></a></li>
        <li><a class="float-tag float-tag--3" href="${r}projects/nellow/"><span class="tag-k">Cites sources</span><span>Nellow</span></a></li>
      </ul>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="build-title">
  <div class="wrap">
    ${sectionHead('What I build', 'build-title', '', r)}
    <div class="expertise">${expertise.map(e => `
      <article class="exp-card" data-reveal>
        <span class="exp-icon">${icon(e.icon, { size: 22 })}</span>
        <h3>${e.title}</h3>
        <p>${e.text}</p>
        <p class="exp-proof"><span>Seen in</span> ${e.proof.map(s => `<a href="${r}projects/${s}/">${bySlug[s].name}</a>`).join(' and ')}</p>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="work-title">
  <div class="wrap">
    ${sectionHead('Selected work', 'work-title', 'projects/', r, 'All projects')}
    <div class="bento">${featuredOrder.map(s => workCard(bySlug[s], r, sizes[s])).join('')}</div>
  </div>
</section>

<section class="section" aria-labelledby="skills-title">
  <div class="wrap">
    ${sectionHead('Tools I use', 'skills-title', '', r)}
    <p class="section-intro">Grouped by where I use them. Every item here appears in at least one of my projects.</p>
    <div class="skill-groups">${skills.map(g => `
      <div class="skill-group" data-reveal><h3>${g.group}</h3>${techChips(g.items, r)}</div>`).join('')}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="about-title">
  <div class="wrap about-preview" data-reveal>
    <div>
      ${sectionHead('About', 'about-title', '', r)}
      <p class="about-quote">${about.introHtml}</p>
      <a class="btn btn-ghost" href="${r}about/">More about me ${btnArrow}</a>
    </div>
    <dl class="about-facts">
      <div><dt>Education</dt><dd>${site.education.degree}, ${site.education.school}, ${site.education.year}</dd></div>
      <div><dt>Final-year project</dt><dd><a href="${r}projects/neuroscan-ai/">${site.education.project}</a></dd></div>
      <div><dt>Based in</dt><dd>${site.location}</dd></div>
      <div><dt>Looking for</dt><dd>Entry-level AI/ML and software engineering roles, remote or relocation</dd></div>
    </dl>
  </div>
</section>
${contactPanel(r)}`;
  return layout({ path: '', r, active: 'Home', title: site.title,
    description: `${site.name}, software and AI/ML developer in Nigeria (B.Sc. Computer Science 2026). Tallybox, inventory and sales for businesses; NeuroScan AI, explainable Alzheimer's MRI classification; Nellow, an AI agent that cites its sources; and Twzee Foods. Open to entry-level roles.`,
    body, jsonLd, bodyClass: 'page-home' });
}

export function projectsPage() {
  const r = '../';
  const body = `
<header class="page-head">
  <div class="hero-bg" aria-hidden="true"><span class="glow glow-a"></span><span class="grid-lines"></span></div>
  <div class="wrap">
    ${crumbs(r, [['Projects']])}
    <h1 class="page-title">Projects</h1>
    <p class="lead">Four projects, from explainable medical AI to software a business runs its day on. Each case study covers the problem, how I built it, what went wrong and what I would do next.</p>
  </div>
</header>
<section class="section section--tight" aria-label="All projects">
  <div class="wrap feature-list">
    ${workFeature(bySlug['tallybox'], r, 'feature--wide')}
    <div class="feature-pair">
      ${workFeature(bySlug['neuroscan-ai'], r, 'feature--tall')}
      ${workFeature(bySlug['nellow'], r, 'feature--tall')}
    </div>
    ${workFeature(bySlug['twzee-foods'], r, 'feature--wide feature--flip')}
  </div>
</section>
${contactPanel(r)}`;
  return layout({ path: 'projects/', r, active: 'Projects', title: `Projects · ${site.name}`,
    description: 'Case studies by Chimdiume Azie: Tallybox (inventory and sales web app), NeuroScan AI (explainable Alzheimer\'s MRI classification), Nellow (AI agent with sources) and Twzee Foods (WhatsApp ordering website).',
    body });
}

function crumbs(r, trail) {
  const items = [[`Home`, r], ...trail];
  return `<nav class="crumbs" aria-label="Breadcrumb"><ol>${items.map(([label, href], i) =>
    i === items.length - 1 ? `<li><span aria-current="page">${esc(label)}</span></li>` : `<li><a href="${href}">${esc(label)}</a></li>`).join('')}</ol></nav>`;
}

function caseMedia(p, r) {
  const vt = `style="view-transition-name: shot-${p.slug}"`;
  if (p.slug === 'neuroscan-ai') {
    return `<figure class="cam-viewer" ${vt}>
      <div class="cam-stage">
        <img src="${r}assets/img/mri-slice.webp" width="336" height="408" alt="Axial brain MRI slice from the app.">
        <img class="cam-overlay" src="${r}assets/img/gradcam.webp" width="336" height="408" alt="Grad-CAM heatmap for the same slice. Warm colours mark the regions that most influenced the prediction.">
      </div>
      <div class="cam-panel">
        <p class="cam-title">Grad-CAM viewer</p>
        <p class="cam-text">Slide to fade the heatmap in and out over the scan. Warm colours mark the regions that most influenced the prediction.</p>
        <label class="cam-label" for="cam-range">Heatmap opacity</label>
        <input id="cam-range" type="range" min="0" max="100" step="5" value="100" aria-valuetext="Heatmap 100% visible">
        <div class="cam-ends" aria-hidden="true"><span>MRI only</span><span>Grad-CAM</span></div>
        <figcaption>Example prediction: VeryMildDemented.</figcaption>
      </div>
    </figure>`;
  }
  const v = p.video;
  return `<figure class="case-video" ${vt}>
      <div class="video-frame"><video controls playsinline preload="metadata" poster="${r}${v.poster}" width="${v.w}" height="${v.h}" data-fallback="${r}${v.fallback}" data-fallback-alt="${esc(p.cardImage.alt)}">
        <source src="${r}${v.src}" type="video/mp4">
        Your browser can't play this video. <a href="${r}${v.src}">Download the ${esc(p.name)} demo (MP4)</a>.
      </video></div>
      <figcaption>${esc(v.caption)}</figcaption>
    </figure>`;
}

function gallery(list, r, numbered) {
  const Tag = numbered ? 'ol' : 'ul';
  const phones3 = list.filter(s => s.phone).length === 3 ? ' gallery--phones3' : '';
  return `<${Tag} class="gallery${numbered ? ' gallery--steps' : ''}${phones3}">${list.map(s => `
    <li class="shot${s.phone ? ' shot--phone' : ''}${s.wide ? ' shot--wide' : ''}${s.center ? ' shot--center' : ''}" data-reveal>
      <figure>
        <a class="shot-link" href="${r}${s.src}" aria-label="Open full-size image: ${esc(s.caption)}">${s.phone ? phone(s, r) : img(s, r)}</a>
        <figcaption>${esc(s.caption)}</figcaption>
      </figure>
    </li>`).join('')}</${Tag}>`;
}

export function caseStudyPage(p) {
  const r = '../../';
  const i = featuredOrder.indexOf(p.slug);
  const prev = bySlug[featuredOrder[(i - 1 + featuredOrder.length) % featuredOrder.length]];
  const next = bySlug[featuredOrder[(i + 1) % featuredOrder.length]];
  const isNeuro = p.slug === 'neuroscan-ai';
  const toc = [
    ['problem', 'The problem'], ['objectives', 'Objectives'], ['role', 'My role'], ['features', 'Main features'],
    ['build', 'How it\'s built'], ...(isNeuro ? [['results', 'Results']] : []), ['stack', 'Technologies'],
    ['screens', isNeuro ? 'Evaluation and screens' : 'Interface walkthrough'], ['challenges', 'Challenges and solutions'], ['outcome', 'Outcome and status'],
  ];
  const results = isNeuro ? `
      <section id="results" class="case-section" aria-labelledby="results-h">
        <h2 id="results-h">Results</h2>
        <div class="stats">
          <p class="stat"><strong>98.66%</strong><span>validation accuracy</span></p>
          <p class="stat"><strong>77.35%</strong><span>held-out test accuracy</span></p>
        </div>
        <p>The test set is heavily skewed (88.5% NonDemented), so I treat the gap as a warning about the split, not a verdict on the idea.</p>
        <p class="disclaimer">Research prototype. Not clinically validated and not a medical device.</p>
      </section>` : '';
  const body = `
<article class="case case--${p.accent}">
  <header class="case-head">
    <div class="hero-bg" aria-hidden="true"><span class="glow glow-a"></span><span class="glow glow-b"></span><span class="grid-lines"></span></div>
    <div class="wrap">
      ${crumbs(r, [['Projects', '../'], [p.name]])}
      <p class="case-cat">${esc(p.category)}</p>
      <h1 class="page-title">${esc(p.name)}</h1>
      <p class="lead">${esc(p.overview)}</p>
      <div class="actions">${externalLinks(p)}</div>
      ${p.repoNote ? `<p class="repo-note">${esc(p.repoNote)}</p>` : ''}
      <dl class="facts">${p.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
    </div>
    <div class="wrap case-media">${caseMedia(p, r)}</div>
  </header>

  <div class="wrap case-layout">
    <nav class="toc" aria-label="On this page">
      <p class="toc-title">On this page</p>
      <ol>${toc.map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`).join('')}</ol>
    </nav>
    <div class="case-body">
      <section id="problem" class="case-section" aria-labelledby="problem-h"><h2 id="problem-h">The problem</h2>${p.problemHtml}</section>
      <section id="objectives" class="case-section" aria-labelledby="objectives-h"><h2 id="objectives-h">Objectives</h2>
        <ul class="checklist">${p.objectives.map(o => `<li>${icon('check', { size: 18 })}<span>${esc(o)}</span></li>`).join('')}</ul></section>
      <section id="role" class="case-section" aria-labelledby="role-h"><h2 id="role-h">My role</h2>${p.roleHtml}</section>
      <section id="features" class="case-section" aria-labelledby="features-h"><h2 id="features-h">Main features</h2>
        <div class="feature-grid">${p.features.map(f => `<div class="feat" data-reveal><h3>${esc(f.title)}</h3><p>${esc(f.text)}</p></div>`).join('')}</div></section>
      <section id="build" class="case-section" aria-labelledby="build-h"><h2 id="build-h">How it's built</h2>
        <p class="section-note">Open any part for the detail.</p>
        <div class="accordion">${p.build.map(([k, v], j) => `<details class="acc"${j < 2 ? ' open' : ''}><summary>${esc(k)}</summary><div class="acc-body"><p>${esc(v)}</p></div></details>`).join('')}</div></section>
      ${results}
      <section id="stack" class="case-section" aria-labelledby="stack-h"><h2 id="stack-h">Technologies</h2>${techChips(p.stack, r)}</section>
      <section id="screens" class="case-section" aria-labelledby="screens-h"><h2 id="screens-h">${isNeuro ? 'Evaluation and screens' : 'Interface walkthrough'}</h2>
        ${p.walkthroughNote ? `<p class="section-note">${esc(p.walkthroughNote)}</p>` : ''}
        ${gallery(isNeuro ? p.gallery : p.walkthrough, r, !isNeuro && p.slug !== 'nellow' ? true : false)}</section>
      <section id="challenges" class="case-section" aria-labelledby="challenges-h"><h2 id="challenges-h">Challenges and solutions</h2>
        <div class="challenges">${p.challenges.map(c => `<div class="challenge" data-reveal><h3>${esc(c.problem)}</h3><p>${esc(c.solution)}</p></div>`).join('')}</div></section>
      <section id="outcome" class="case-section" aria-labelledby="outcome-h"><h2 id="outcome-h">Outcome and status</h2>${p.outcomeHtml}
        ${p.nextSteps ? `<h3 class="sub-h">Next steps</h3><ul class="tags tags--loose">${p.nextSteps.map(s => `<li>${esc(s)}</li>`).join('')}</ul>` : ''}
        <div class="actions">${externalLinks(p)}</div></section>
    </div>
  </div>

  <nav class="wrap case-nav" aria-label="More projects">
    <a class="case-nav-link" href="${r}projects/${prev.slug}/"><span class="case-nav-dir">${icon('arrowLeft', { size: 18 })}Previous project</span><span class="case-nav-name">${esc(prev.name)}</span></a>
    <a class="case-nav-link case-nav-link--next" href="${r}projects/${next.slug}/"><span class="case-nav-dir">Next project${icon('arrowRight', { size: 18 })}</span><span class="case-nav-name">${esc(next.name)}</span></a>
  </nav>
</article>`;
  return layout({ path: `projects/${p.slug}/`, r, active: 'Projects', title: `${p.name} · Case study · ${site.name}`,
    description: `${p.name}: ${p.overview}`.slice(0, 300), body, bodyClass: `page-case` });
}

export function aboutPage() {
  const r = '../';
  const body = `
<header class="page-head">
  <div class="hero-bg" aria-hidden="true"><span class="glow glow-b"></span><span class="grid-lines"></span></div>
  <div class="wrap about-head">
    <div>
      ${crumbs(r, [['About']])}
      <h1 class="page-title">About me</h1>
      <p class="lead">${about.introHtml}</p>
      <div class="actions">
        <a class="btn btn-primary" href="${r}${site.cv}" download="Chimdiume-Azie-CV.pdf">${icon('download', { size: 18 })}Download CV</a>
        <a class="btn btn-ghost" href="${r}contact/">Get in touch</a>
      </div>
    </div>
    <div class="portrait-frame portrait-frame--about">
      <img src="${r}assets/img/portrait-2.webp" width="680" height="780" alt="${site.name} in a white shirt and sunglasses." fetchpriority="high" decoding="async">
    </div>
  </div>
</header>

<section class="section section--tight" aria-labelledby="bg-title">
  <div class="wrap about-grid">
    <div class="about-col" data-reveal>
      <h2 id="bg-title">Background</h2>
      <p>I'm a software developer in ${site.location} and a 2026 Computer Science graduate of ${site.education.school}. I build across the stack, and I'm most interested in two things: software that people run their work on, and AI whose answers you can check.</p>
      <p>My final-year project, <a href="${r}projects/neuroscan-ai/">NeuroScan AI</a>, classifies brain MRI scans and shows the regions behind each prediction. Since then I've built <a href="${r}projects/tallybox/">Tallybox</a>, an inventory and sales app that businesses run on their phones; <a href="${r}projects/nellow/">Nellow</a>, an AI agent that answers from the live web with sources; and the ordering website for <a href="${r}projects/twzee-foods/">Twzee Foods</a>.</p>
    </div>
    <dl class="about-facts about-facts--card" data-reveal>
      <div><dt>Education</dt><dd>${site.education.degree}<br>${site.education.school}, ${site.education.year}</dd></div>
      <div><dt>Final-year project</dt><dd><a href="${r}projects/neuroscan-ai/">${site.education.project}</a></dd></div>
      <div><dt>Based in</dt><dd>${site.location}</dd></div>
      <div><dt>Looking for</dt><dd>Entry-level AI/ML and software engineering roles, remote or relocation</dd></div>
    </dl>
  </div>
</section>

<section class="section" aria-labelledby="approach-title">
  <div class="wrap">
    ${sectionHead('How I work', 'approach-title', '', r)}
    <div class="approach">${about.approach.map(a => `<div class="approach-item" data-reveal><h3>${a.title}</h3><p>${a.text}</p></div>`).join('')}</div>
  </div>
</section>

<section class="section" aria-labelledby="interests-title">
  <div class="wrap interests-wrap">
    <div>
      ${sectionHead('What I\'m interested in', 'interests-title', '', r)}
      <ul class="tags tags--loose">${about.interests.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
    <div>
      <h2 class="h2-sm">Experience through projects</h2>
      <ul class="project-lines">${featuredOrder.map(s => { const p = bySlug[s]; return `<li><a href="${r}projects/${s}/"><span class="pl-name">${p.name}</span><span class="pl-cat">${esc(p.category)}</span>${icon('arrowRight', { size: 18 })}</a></li>`; }).join('')}</ul>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="skills-title">
  <div class="wrap">
    ${sectionHead('Tools I use', 'skills-title', '', r)}
    <div class="skill-groups">${skills.map(g => `<div class="skill-group" data-reveal><h3>${g.group}</h3>${techChips(g.items, r)}</div>`).join('')}</div>
  </div>
</section>
${contactPanel(r)}`;
  return layout({ path: 'about/', r, active: 'About', title: `About · ${site.name}`,
    description: `About ${site.name}: Computer Science graduate (${site.education.school}, 2026) in Nigeria building business software, web apps and explainable AI. Background, approach, interests and tools.`,
    body });
}

export function contactPage() {
  const r = '../';
  const body = `
<header class="page-head">
  <div class="hero-bg" aria-hidden="true"><span class="glow glow-a"></span><span class="grid-lines"></span></div>
  <div class="wrap">
    ${crumbs(r, [['Contact']])}
    <h1 class="page-title">Let's talk</h1>
    <p class="lead">${site.availability} I'm also happy to hear about projects for businesses.</p>
  </div>
</header>

<section class="section section--tight" aria-label="Contact options">
  <div class="wrap contact-grid">
    <div class="contact-side">
      <div class="contact-card" data-reveal>
        <h2 class="h2-sm">Email</h2>
        <p class="contact-email">${site.email}</p>
        <div class="contact-actions">
          <a class="btn btn-primary" href="${gmailCompose()}" ${ext}>${icon('mail', { size: 18 })}Write in Gmail<span class="sr-only"> (opens in a new tab)</span></a>
          ${copyEmail('btn btn-ghost')}
        </div>
        <p class="small-print">Prefer your own email app? <a href="mailto:${site.email}">Open it with my address</a>.</p>
      </div>
      <div class="contact-card" data-reveal>
        <h2 class="h2-sm">Elsewhere</h2>
        ${socialLinks('contact-social')}
        <a class="text-link" href="${r}${site.cv}" download="Chimdiume-Azie-CV.pdf">${icon('download', { size: 16 })} Download my CV (PDF)</a>
      </div>
    </div>

    <form class="contact-form" id="contact-form" data-reveal novalidate>
      <h2 class="h2-sm">Write a message</h2>
      <p class="form-note">This form doesn't send anything by itself. It opens a ready-written email to me in Gmail, so you can check it and press send.</p>
      <div class="field"><label for="cf-name">Your name</label><input id="cf-name" name="name" type="text" autocomplete="name" required></div>
      <div class="field"><label for="cf-email">Your email</label><input id="cf-email" name="email" type="email" autocomplete="email" required></div>
      <div class="field"><label for="cf-topic">What it's about</label>
        <select id="cf-topic" name="topic"><option>A job opportunity</option><option>A project for a business</option><option>Something else</option></select></div>
      <div class="field"><label for="cf-message">Your message</label><textarea id="cf-message" name="message" rows="6" required></textarea></div>
      <p class="form-error" role="alert" data-form-error hidden></p>
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">${icon('send', { size: 18 })}Open in Gmail</button>
        <a class="text-link" href="mailto:${site.email}" data-mailto>Use my email app instead</a>
      </div>
    </form>
  </div>
</section>

<section class="section" id="work-with-me" aria-labelledby="work-title">
  <div class="wrap">
    ${sectionHead('Work with me', 'work-title', '', r)}
    <p class="section-intro">For businesses: these are the kinds of things I build, each with a real example.</p>
    <div class="services">${services.map(s => `
      <div class="service" data-reveal><h3>${s.title}</h3><p>${s.text}</p><p class="exp-proof"><span>Example</span> <a href="${r}projects/${s.example}/">${bySlug[s.example].name}</a></p></div>`).join('')}
    </div>
  </div>
</section>`;
  return layout({ path: 'contact/', r, active: 'Contact', title: `Contact · ${site.name}`,
    description: `Contact ${site.name}: email ${site.email}, GitHub, LinkedIn and Instagram. Open to entry-level AI/ML and software engineering roles, remote or relocation.`,
    body });
}

export function notFoundPage() {
  // Served by GitHub Pages for any missing path under /portfolio/, at any depth, so it uses a fixed base.
  const r = '/portfolio/';
  const body = `
<section class="page-head notfound">
  <div class="hero-bg" aria-hidden="true"><span class="glow glow-a"></span><span class="grid-lines"></span></div>
  <div class="wrap">
    <p class="case-cat">Error 404</p>
    <h1 class="page-title">This page doesn't exist.</h1>
    <p class="lead">The link may be old or mistyped. Try one of these instead.</p>
    <div class="actions"><a class="btn btn-primary" href="${r}">Go to the home page</a><a class="btn btn-ghost" href="${r}projects/">See the projects</a></div>
  </div>
</section>`;
  return layout({ path: '404.html', r, active: '', title: `Page not found · ${site.name}`, description: 'This page does not exist on Chimdiume Azie\'s portfolio.', body })
    .replace('<meta charset="utf-8">', '<meta charset="utf-8">\n<meta name="robots" content="noindex">');
}

export { projects };
