(function(){
  // Minimal, local replacement for lucide.createIcons()
  // Inserts simple SVGs for the icons used on the site so no CDN is required.
  const ICONS = {
    rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21v-3a4 4 0 0 1 4-4h3"/><path d="M9 11L5 7l2-4 4 4-2 4z"/></svg>',
    languages: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2c2 4 2 8 0 16"/></svg>',
    satellite: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 3l-6 6"/><path d="M3 21l6-6"/><circle cx="12" cy="12" r="3"/></svg>',
    'arrow-down': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>',
    'layers-3': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M12 12l9 5-9 5-9-5 9-5z"/></svg>',
    'settings-2': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 3.3 16.8l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.66 0 1.24-.39 1.51-1A1.65 1.65 0 0 0 4.16 6.3L4.1 6.24A2 2 0 1 1 6.93 3.4l.06.06c.43.43 1.08.57 1.64.35.5-.19 1.02-.29 1.57-.29H12c.55 0 1.07.1 1.57.29.56.22 1.21.08 1.64-.35l.06-.06A2 2 0 1 1 19.4 6.3l-.06.06c-.43.43-.57 1.08-.35 1.64.19.5.29 1.02.29 1.57V12c0 .55-.1 1.07-.29 1.57-.22.56-.08 1.21.35 1.64z"/></svg>',
    wind: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12h12a3 3 0 0 0 0-6 3 3 0 0 0-3 3"/><path d="M3 18h9a3 3 0 0 0 0-6 3 3 0 0 0-3 3"/></svg>',
    construction: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v7"/><path d="M5 7l7-5 7 5"/><rect x="4" y="10" width="16" height="10" rx="2"/></svg>',
    'shield-check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l8 4v6c0 5-3.58 9-8 10-4.42-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>',
    'map-pinned': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="2"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',
    'alert-triangle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="8" rx="2"/><rect x="6" y="15" width="12" height="6" rx="2"/></svg>',
    'badge-info': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
    'message-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-1.2 4.1 8.5 8.5 0 1 1-6.9-12.6 8.38 8.38 0 0 1 4.1 1.2"/><path d="M21 11.5L13 13l-2 4-4-2"/></svg>',
    'chevron-up': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>',
    default: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg>'
  };

  window.lucide = window.lucide || {};
  window.lucide.createIcons = function(){
    document.querySelectorAll('[data-lucide]').forEach(function(el){
      try{
        const name = el.getAttribute('data-lucide') || '';
        const svg = ICONS[name] || ICONS.default;
        el.innerHTML = svg;
        const svgEl = el.querySelector('svg');
        if (svgEl){
          // transfer sizing classes
          const cls = el.getAttribute('class');
          if (cls) svgEl.setAttribute('class', cls);
          svgEl.setAttribute('width', svgEl.getAttribute('width') || '1em');
          svgEl.setAttribute('height', svgEl.getAttribute('height') || '1em');
          svgEl.setAttribute('focusable', 'false');
          svgEl.setAttribute('aria-hidden', 'true');
          // ensure color follows currentColor
          svgEl.style.color = 'currentColor';
        }
      }catch(e){
        // ignore
      }
    });
  };

  // Auto-init icons on DOM ready
  function autoInit(){
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function(){ window.lucide.createIcons(); });
    } else {
      window.lucide.createIcons();
    }
  }
  autoInit();

  function getCurrentLanguage(){
    const stored = localStorage.getItem('create-aeronautics-language');
    if (stored === 'ru' || stored === 'en') return stored;
    const fromQuery = new URLSearchParams(window.location.search).get('lang');
    if (fromQuery === 'ru' || fromQuery === 'en') return fromQuery;
    return document.documentElement.lang === 'ru' ? 'ru' : 'en';
  }

  function syncGlobalLanguageState(language){
    const normalized = language === 'ru' ? 'ru' : 'en';
    window.currentLanguage = normalized;
    window.currentDictionary = {
      copyStatusText: normalized === 'ru' ? 'Нажми, чтобы скопировать' : 'Click to copy'
    };
    return normalized;
  }

  window.applyLanguage = function(nextLanguage, persist = true){
    const normalized = syncGlobalLanguageState(nextLanguage);
    if (persist) {
      localStorage.setItem('create-aeronautics-language', normalized);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', normalized);
      window.location.href = url.toString();
    }
    return normalized;
  };

  syncGlobalLanguageState(getCurrentLanguage());

  function toggleLanguage(){
    const nextLanguage = getCurrentLanguage() === 'ru' ? 'en' : 'ru';
    localStorage.setItem('create-aeronautics-language', nextLanguage);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', nextLanguage);
    window.location.href = url.toString();
  }

  async function copyServerIp(){
    const serverIp = document.getElementById('serverIp');
    const copyStatus = document.getElementById('copyStatus');
    const copyStatusText = document.getElementById('copyStatusText');
    const language = getCurrentLanguage();
    const successText = language === 'ru' ? 'Скопировано!' : 'Copied!';
    const failureText = language === 'ru' ? 'Ошибка копирования' : 'Copy failed';

    if (!serverIp) return;

    try {
      await navigator.clipboard.writeText(serverIp.textContent.trim());
      if (copyStatus) {
        copyStatus.innerHTML = '<i data-lucide="check" class="h-4 w-4 text-brass"></i> <span id="copyStatusText">' + successText + '</span>';
        if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
      }
    } catch (error) {
      if (copyStatus) {
        copyStatus.innerHTML = '<i data-lucide="alert-triangle" class="h-4 w-4 text-brass"></i> <span id="copyStatusText">' + failureText + '</span>';
        if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
      }
    }

    clearTimeout(window.copyStatusReset);
    window.copyStatusReset = setTimeout(() => {
      if (copyStatusText) {
        copyStatusText.textContent = language === 'ru' ? 'Нажми, чтобы скопировать' : 'Click to copy';
      }
      if (copyStatus) {
        copyStatus.innerHTML = '<i data-lucide="copy" class="h-4 w-4 text-brass"></i> <span id="copyStatusText">' + (language === 'ru' ? 'Нажми, чтобы скопировать' : 'Click to copy') + '</span>';
        if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
      }
    }, 1800);
  }

  document.addEventListener('click', function(event){
    const target = event.target && typeof event.target.closest === 'function' ? event.target.closest('#langToggle, #copyButton') : null;
    if (!target) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    if (target.id === 'langToggle') {
      toggleLanguage();
      return;
    }

    if (target.id === 'copyButton') {
      copyServerIp();
    }
  }, true);
})();
