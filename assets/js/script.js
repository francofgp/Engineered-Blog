  /* ============================================================
   * Theme toggle (vanilla JS, no jQuery dep)
   *
   * Registry of color tokens:  assets/scss/_root.scss
   * Anti-flash counterpart:    layouts/partials/head.html  (inline script)
   * Docs:                       docs/THEME.md
   *
   * `localStorage.theme` stores the user's PREFERENCE:
   *   'light' | 'dark' | 'auto'   (default: 'auto')
   * `<html data-bs-theme="…">` holds the RESOLVED value:
   *   'light' | 'dark'
   * ============================================================ */
  (function () {
    'use strict';

    var STORAGE_KEY = 'theme';
    var html = document.documentElement;
    var darkMQ = window.matchMedia('(prefers-color-scheme: dark)');

    function getStoredMode() {
      var v = null;
      try { v = localStorage.getItem(STORAGE_KEY); } catch (e) {}
      return (v === 'light' || v === 'dark') ? v : 'auto';
    }

    function setStoredMode(mode) {
      try { localStorage.setItem(STORAGE_KEY, mode); } catch (e) {}
    }

    function resolve(mode) {
      if (mode === 'light' || mode === 'dark') return mode;
      return darkMQ.matches ? 'dark' : 'light';
    }

    function applyTheme(mode) {
      var resolved = resolve(mode);
      html.setAttribute('data-bs-theme', resolved);
      syncGiscusTheme(resolved);
      syncMermaidTheme(resolved);
    }

    // Bootstrap Icons SVG paths (MIT licensed). Strings, not full <svg> elements —
    // we swap them into the existing #theme-toggle-icon <svg> wrapper which retains
    // its width/height/fill/viewBox attributes.
    var SVG_PATHS = {
      light: '<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>',
      dark:  '<path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>',
      auto:  '<path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>'
    };

    function updateActiveButton(mode) {
      document.querySelectorAll('[data-bs-theme-value]').forEach(function (btn) {
        var active = btn.dataset.bsThemeValue === mode;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      var iconEl = document.getElementById('theme-toggle-icon');
      if (iconEl) iconEl.innerHTML = SVG_PATHS[mode] || SVG_PATHS.auto;
      var toggleEl = document.getElementById('theme-toggle');
      if (toggleEl) toggleEl.setAttribute('aria-label', 'Toggle theme (' + mode + ')');
    }

    function syncGiscusTheme(theme) {
      var frame = document.querySelector('iframe.giscus-frame');
      if (!frame || !frame.contentWindow) return;
      var giscusTheme = theme === 'dark' ? 'dark_dimmed' : 'light';
      frame.contentWindow.postMessage(
        { giscus: { setConfig: { theme: giscusTheme } } },
        'https://giscus.app'
      );
    }

    function syncMermaidTheme(theme) {
      if (typeof window.mermaid === 'undefined') return;
      document.querySelectorAll('.mermaid').forEach(function (el) {
        if (el.dataset.original) {
          el.innerHTML = el.dataset.original;
          el.removeAttribute('data-processed');
        }
      });
      try {
        window.mermaid.initialize({ startOnLoad: false, theme: theme === 'dark' ? 'dark' : 'default' });
        window.mermaid.run();
      } catch (e) { /* mermaid not ready yet */ }
    }

    // Wire dropdown items (click delegation so it works regardless of DOM ready order)
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-bs-theme-value]');
      if (!btn) return;
      var mode = btn.dataset.bsThemeValue;
      setStoredMode(mode);
      applyTheme(mode);
      updateActiveButton(mode);
    });

    // React to system color scheme changes (only when in auto mode)
    darkMQ.addEventListener('change', function () {
      if (getStoredMode() === 'auto') applyTheme('auto');
    });

    // Init: mark the active dropdown item. Anti-flash already set data-bs-theme.
    function init() { updateActiveButton(getStoredMode()); }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  (function ($) {
    'use strict';

    //  Search Form Open
    $('#searchOpen').on('click', function () {
      $('.search-wrapper').addClass('open');
    });
    $('#searchClose').on('click', function () {
      $('.search-wrapper').removeClass('open');
    });

    // featured post slider
    const featuredPostSlider = $(".featured-post-slider");
    featuredPostSlider.slick({
      infinite: true,
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      dots: true,
      responsive: [{
        breakpoint: 600,
        settings: {
          vertical: false,
          verticalSwiping: false,
        }
      }]
    });

    featuredPostSlider.on('wheel', (function(e) {
      e.preventDefault();
      if (e.originalEvent.deltaY > 0) {
        $(this).slick('slickNext');
      } else {
        $(this).slick('slickPrev');
      }
    }));

    // venobox initialize
    $('.venobox').venobox();

  })(jQuery);

  /* ============================================================
   * Cookie notice (vanilla, localStorage)
   *
   * Replaces the previous js-cookie CDN + jQuery IIFE. Persists consent
   * with a versioned key — bump 'cookie-consent-v1' → 'v2' to re-prompt.
   *
   * MUST run after DOMContentLoaded — script.js is loaded in footer.html
   * BEFORE the banner markup (so the layout block stays close to the
   * other footer JS), which means at script-execution time the
   * #js-cookie-box / #js-cookie-button elements don't exist yet.
   *
   * NOTE: this banner is INFORMATIONAL only. GA + AdSense load before
   * consent via head.html. If you ever want real gating, defer those
   * scripts there and dispatch their load from this click handler.
   * ============================================================ */
  (function () {
    'use strict';
    var STORAGE_KEY = 'cookie-consent-v1';

    function initCookieBanner() {
      var box = document.getElementById('js-cookie-box');
      var btn = document.getElementById('js-cookie-button');
      if (!box || !btn) return;
      try {
        if (localStorage.getItem(STORAGE_KEY) === 'accepted') return;
      } catch (e) { /* storage disabled — fall through and show the banner */ }
      box.classList.remove('cookie-box-hide');
      btn.addEventListener('click', function () {
        try { localStorage.setItem(STORAGE_KEY, 'accepted'); } catch (e) {}
        box.classList.add('cookie-box-hide');
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initCookieBanner);
    } else {
      initCookieBanner();
    }
  })();