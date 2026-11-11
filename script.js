// Chimdiume Azie · portfolio v2. Small, dependency-free enhancements.
(function () {
  'use strict';

  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var links = document.getElementById('nav-links');
  if (btn && links) {
    var setOpen = function (open) {
      links.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    };
    btn.addEventListener('click', function () {
      setOpen(btn.getAttribute('aria-expanded') !== 'true');
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        btn.focus();
      }
    });
  }

  // Grad-CAM viewer: the slider sets how much of the heatmap shows over the MRI
  var range = document.getElementById('cam-range');
  var overlay = document.querySelector('.cam-overlay');
  if (range && overlay) {
    var update = function () {
      var v = Number(range.value);
      overlay.style.opacity = String(v / 100);
      range.setAttribute('aria-valuetext', v === 0 ? 'MRI only, heatmap hidden' : 'Heatmap ' + v + '% visible');
    };
    range.addEventListener('input', update);
    update();
  }

  // If a demo video cannot load, show the project screenshot instead of an empty player
  document.querySelectorAll('video[data-fallback]').forEach(function (video) {
    var swap = function () {
      if (!video.isConnected) return;
      var img = document.createElement('img');
      img.src = video.dataset.fallback;
      img.alt = video.dataset.fallbackAlt || '';
      img.loading = 'lazy';
      video.replaceWith(img);
    };
    var sources = video.querySelectorAll('source');
    if (sources.length) sources[sources.length - 1].addEventListener('error', swap);
    video.addEventListener('error', swap);
  });

  // Scroll reveal: each block slides up and fades in once (CSS skips this for reduced motion).
  // Siblings that enter together are staggered slightly.
  if (!('IntersectionObserver' in window)) return;
  var sections = document.querySelectorAll(
    '.section h2, .project, .skill-group, .about-grid > *, #contact .wrap > :not(h2)'
  );
  sections.forEach(function (el) {
    var i = Array.prototype.indexOf.call(el.parentNode.children, el);
    if (el.matches('.skill-group, .about-grid > *, #contact .wrap > *')) el.style.setProperty('--d', Math.min(i, 4) * 90 + 'ms');
    el.classList.add('rv');
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });
  sections.forEach(function (s) { io.observe(s); });
})();
