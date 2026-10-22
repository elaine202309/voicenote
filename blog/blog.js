/* VoiceNote blog — shared behaviour: sticky nav, mobile menu, language menu, reveal. */
(function () {
  var navbar = document.getElementById('navbar');
  function onScroll() {
    if (!navbar) return;
    if (window.scrollY > 20) navbar.classList.add('is-scrolled');
    else navbar.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var menuIcon = document.getElementById('menuIcon');
  var menuOpen = false;
  function closeMenu() {
    menuOpen = false;
    if (mobileMenu) mobileMenu.style.maxHeight = '0';
    if (menuIcon) menuIcon.innerHTML = '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
  }
  if (menuToggle && mobileMenu && menuIcon) {
    menuToggle.addEventListener('click', function () {
      menuOpen = !menuOpen;
      mobileMenu.style.maxHeight = menuOpen ? mobileMenu.scrollHeight + 'px' : '0';
      menuIcon.innerHTML = menuOpen
        ? '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
        : '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
    });
    document.querySelectorAll('.mobile-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // Language menu. On article pages set window.BLOG_TRANSLATIONS = { lang: url }
  // before loading this file; any language without a translation falls back to its blog index.
  var langBtn = document.getElementById('blogLangBtn');
  var langMenu = document.getElementById('blogLangMenu');
  if (langBtn && langMenu) {
    var map = window.BLOG_TRANSLATIONS || {};
    var current = (document.documentElement.lang || 'en').slice(0, 2);
    langMenu.querySelectorAll('a[data-lang]').forEach(function (link) {
      var lang = link.getAttribute('data-lang');
      var fallback = lang === 'en' ? '/blog/' : '/' + lang + '/blog/';
      link.href = map[lang] || fallback;
      if (lang === current) link.setAttribute('aria-current', 'true');
    });
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      langMenu.classList.toggle('open');
    });
    document.addEventListener('click', function () { langMenu.classList.remove('open'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') langMenu.classList.remove('open'); });
  }

  // Hide the empty state as soon as the first post card is added to the grid.
  var grid = document.getElementById('posts');
  var empty = document.getElementById('blog-empty');
  if (grid && empty && grid.querySelector('.post-card')) empty.style.display = 'none';

  var observer = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) { if (entry.isIntersecting) entry.target.classList.add('visible'); });
      }, { threshold: 0.1 })
    : null;
  document.querySelectorAll('.reveal').forEach(function (el) {
    if (observer) observer.observe(el);
    else el.classList.add('visible');
  });
  setTimeout(function () {
    document.querySelectorAll('.reveal').forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
    });
  }, 100);
})();
