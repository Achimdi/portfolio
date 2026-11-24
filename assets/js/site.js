// Chimdiume Azie · portfolio. Small, dependency-free enhancements; every page works without them.
(function () {
  'use strict';
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header: border once the page scrolls
  var header = $('[data-header]');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    requestAnimationFrame(onScroll); // first check after the first frame, so it never forces an early layout
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile menu
  var toggle = $('[data-nav-toggle]');
  var nav = $('#site-nav');
  if (toggle && nav) {
    var setOpen = function (open, focusToggle) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      $('.sr-only', toggle).textContent = open ? 'Close menu' : 'Menu';
      if (open) { var first = $('a', nav); if (first) first.focus(); }
      else if (focusToggle) toggle.focus();
    };
    toggle.addEventListener('click', function () { setOpen(toggle.getAttribute('aria-expanded') !== 'true'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false, true);
    });
    window.matchMedia('(min-width: 900px)').addEventListener('change', function (m) { if (m.matches) setOpen(false); });
  }

  // Scroll reveals: each block appears once. Neighbours that enter together are staggered.
  var reveals = $$('[data-reveal]');
  if (reveals.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        var batch = entries.filter(function (e) { return e.isIntersecting; });
        batch.forEach(function (entry, i) {
          entry.target.style.transitionDelay = Math.min(i, 4) * 80 + 'ms';
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  // Case-study contents: mark the section being read
  var tocLinks = $$('.toc a[href^="#"]');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var byId = {};
    tocLinks.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var current = null;
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (current) current.removeAttribute('aria-current');
          current = byId[entry.target.id];
          if (current) current.setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    Object.keys(byId).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  // Copy the email address
  $$('[data-copy]').forEach(function (btn) {
    var status = btn.nextElementSibling && btn.nextElementSibling.hasAttribute('data-copy-status') ? btn.nextElementSibling : null;
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function () {
        btn.classList.add('is-copied');
        if (status) status.textContent = 'Email address copied to clipboard.';
        setTimeout(function () { btn.classList.remove('is-copied'); if (status) status.textContent = ''; }, 2400);
      };
      var fallback = function () {
        var ta = document.createElement('textarea');
        ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); done(); } catch (e) { if (status) status.textContent = 'Copy failed. The address is ' + text + '.'; }
        document.body.removeChild(ta);
      };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback);
      else fallback();
    });
  });

  // Contact form: builds an email for Gmail or the visitor's own email app. Nothing is sent from this page.
  var form = $('#contact-form');
  if (form) {
    var to = 'chimdiazie2022@gmail.com';
    var errorBox = $('[data-form-error]', form);
    var mailto = $('[data-mailto]', form);
    var compose = function () {
      var f = form.elements;
      var name = f.namedItem('name').value.trim(), email = f.namedItem('email').value.trim(), topic = f.namedItem('topic').value, msg = f.namedItem('message').value.trim();
      var subject = topic + (name ? ' from ' + name : '');
      var body = msg + '\n\n' + (name || '') + (email ? '\n' + email : '');
      return { subject: subject, body: body.trim() };
    };
    var updateMailto = function () {
      var m = compose();
      mailto.href = 'mailto:' + to + '?subject=' + encodeURIComponent(m.subject) + '&body=' + encodeURIComponent(m.body);
    };
    form.addEventListener('input', updateMailto);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var missing = $$('[required]', form).filter(function (f) {
        var bad = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value.trim()));
        f.setAttribute('aria-invalid', String(bad));
        return bad;
      });
      if (missing.length) {
        var empty = missing.filter(function (f) { return !f.value.trim(); }).map(function (f) { return $('label[for="' + f.id + '"]', form).textContent.toLowerCase(); });
        var badEmail = missing.some(function (f) { return f.type === 'email' && f.value.trim(); });
        var list = empty.length > 1 ? empty.slice(0, -1).join(', ') + ' and ' + empty[empty.length - 1] : empty[0];
        errorBox.textContent = (empty.length ? 'Fill in ' + list + '. ' : '') + (badEmail ? 'Enter a valid email address, like name@example.com.' : '');
        errorBox.hidden = false;
        missing[0].focus();
        return;
      }
      errorBox.hidden = true;
      var m = compose();
      var url = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(to) + '&su=' + encodeURIComponent(m.subject) + '&body=' + encodeURIComponent(m.body);
      window.open(url, '_blank', 'noopener');
    });
  }

  // Grad-CAM viewer: the slider sets how much heatmap shows over the MRI
  var range = $('#cam-range');
  var overlay = $('.cam-overlay');
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
  $$('video[data-fallback]').forEach(function (video) {
    var swap = function () {
      if (!video.isConnected) return;
      var img = document.createElement('img');
      img.src = video.getAttribute('data-fallback');
      img.alt = video.getAttribute('data-fallback-alt') || '';
      video.replaceWith(img);
    };
    var sources = video.querySelectorAll('source');
    if (sources.length) sources[sources.length - 1].addEventListener('error', swap);
    video.addEventListener('error', swap);
  });
})();
