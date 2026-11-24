// Interface icons (24px grid, stroke-based, drawn in the style of Lucide) and
// technology logos (Simple Icons, CC0, read from src/icons/tech and inlined at build time).
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));

const UI = {
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  arrowLeft: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
  pin: '<path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  cap: '<path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  layout: '<rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/>',
  cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
  package: '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.7 4.73a2 2 0 0 0 2 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/>',
  layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  send: '<path d="M14.54 21.69a.5.5 0 0 0 .94-.03l6.5-19a.5.5 0 0 0-.64-.64l-19 6.5a.5.5 0 0 0-.02.94l7.93 3.18a2 2 0 0 1 1.11 1.11z"/><path d="m21.85 2.15-10.94 10.94"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
};

export function icon(name, { size = 20, cls = '' } = {}) {
  const body = UI[name];
  if (!body) throw new Error(`Unknown icon: ${name}`);
  return `<svg class="icon${cls ? ' ' + cls : ''}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
}

// Technology logos by Simple Icons slug, collected into one cached sprite (assets/icons/tech.svg).
// techLogo returns '' when no logo exists, so callers fall back to text.
const cache = new Map();
const used = new Set();
function logoPath(slug) {
  if (!cache.has(slug)) {
    const file = join(here, 'icons', 'tech', `${slug}.svg`);
    cache.set(slug, existsSync(file) ? (readFileSync(file, 'utf8').match(/<path d="([^"]+)"/)?.[1] || '') : '');
  }
  return cache.get(slug);
}
export function techLogo(slug, r = '', size = 18) {
  if (!slug || !logoPath(slug)) return '';
  used.add(slug);
  return `<svg class="tech-logo" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><use href="${r}assets/icons/tech.svg#si-${slug}"/></svg>`;
}
export function techSprite() {
  return `<svg xmlns="http://www.w3.org/2000/svg">${[...used].sort().map(s => `<symbol id="si-${s}" viewBox="0 0 24 24"><path d="${logoPath(s)}"/></symbol>`).join('')}</svg>
`;
}

// The CA monogram, shared by the header, footer and favicon.
export function brandMark(size = 32, idSuffix = 'h') {
  const g = `ca-grad-${idSuffix}`;
  return `<svg class="brand-mark" width="${size}" height="${size}" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><defs><linearGradient id="${g}" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#398BFF"/><stop offset="1" stop-color="#9875FF"/></linearGradient></defs><rect x="0.75" y="0.75" width="30.5" height="30.5" rx="8.25" fill="#0D1422" stroke="url(#${g})" stroke-opacity=".55" stroke-width="1.5"/><path d="M15.2 11.2A5.6 5.6 0 1 0 15.2 20.8" fill="none" stroke="url(#${g})" stroke-width="3" stroke-linecap="round"/><path d="M16.9 22.2 21.3 9.8l4.4 12.4" fill="none" stroke="url(#${g})" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.6 17.9h5.4" stroke="url(#${g})" stroke-width="2.6" stroke-linecap="round"/></svg>`;
}
