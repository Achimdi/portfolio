// Builds the static site into the repository root (GitHub Pages serves the root of the branch).
// Usage: node src/build.mjs        (no dependencies; Node 18+)
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homePage, projectsPage, caseStudyPage, aboutPage, contactPage, notFoundPage, projects } from './templates.mjs';
import { techSprite } from './icons.mjs';
import { site } from './data.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = (rel, html) => {
  const file = join(root, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html, 'utf8');
  console.log('  wrote', rel.replace(/\\/g, '/'), `(${(Buffer.byteLength(html) / 1024).toFixed(1)} KB)`);
};

console.log('Building portfolio…');
out('index.html', homePage());
out('projects/index.html', projectsPage());
for (const p of projects) out(`projects/${p.slug}/index.html`, caseStudyPage(p));
out('about/index.html', aboutPage());
out('contact/index.html', contactPage());
out('404.html', notFoundPage());
out('assets/icons/tech.svg', techSprite());

// The old client page now lives in the Contact page's "Work with me" section.
out('services.html', `<!doctype html>
<html lang="en-GB"><head><meta charset="utf-8"><meta name="robots" content="noindex">
<title>Work with me · ${site.name}</title>
<link rel="canonical" href="${site.url}contact/#work-with-me">
<meta http-equiv="refresh" content="0; url=contact/#work-with-me">
</head><body><p>This page has moved to <a href="contact/#work-with-me">Work with me</a>.</p></body></html>
`);

const pages = ['', 'projects/', ...projects.map(p => `projects/${p.slug}/`), 'about/', 'contact/'];
const today = new Date().toISOString().slice(0, 10);
out('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url><loc>${site.url}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
// Note: crawlers only read robots.txt at the domain root (achimdi.github.io/robots.txt).
// This copy documents the sitemap location; submit the sitemap in Google Search Console as well.
out('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site.url}sitemap.xml\n`);
console.log('Done.');
