(function () {
  'use strict';

  const nav = document.getElementById('nav');

  // ── NAV SCROLL DARK ──
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('dark', window.scrollY > 80);
    }, { passive: true });
  }

  // ── ACTIVE LINK ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .nav-dropdown a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.endsWith(currentPage)) link.classList.add('active');
  });

  // ── REVEAL ON SCROLL ──
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(el => revealObs.observe(el));
  }

  // ── DRAG TO SCROLL EXPERIENCE STRIP ──
  const expScroll = document.getElementById('expScroll');
  if (expScroll) {
    let isDown = false, startX, left;
    expScroll.addEventListener('mousedown', e => {
      isDown = true; startX = e.pageX - expScroll.offsetLeft;
      left = expScroll.scrollLeft; expScroll.style.cursor = 'grabbing';
    });
    expScroll.addEventListener('mouseleave', () => { isDown = false; expScroll.style.cursor = 'grab'; });
    expScroll.addEventListener('mouseup', () => { isDown = false; expScroll.style.cursor = 'grab'; });
    expScroll.addEventListener('mousemove', e => {
      if (!isDown) return; e.preventDefault();
      expScroll.scrollLeft = left - (e.pageX - expScroll.offsetLeft - startX) * 1.4;
    });
  }

  // ── SMOOTH ANCHORS ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // ── MOBILE HAMBURGER MENU ──
  if (!nav) return;

  // Inject hamburger button into nav-right
  const hamburger = document.createElement('button');
  hamburger.className = 'nav-hamburger';
  hamburger.setAttribute('aria-label', 'Open menu');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  const navRight = nav.querySelector('.nav-right');
  if (navRight) navRight.appendChild(hamburger);

  // Build mobile menu DOM
  const mobileMenu = document.createElement('div');
  mobileMenu.id = 'mobile-menu';

  const chevron = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

  nav.querySelectorAll('.nav-menu .nav-item').forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.nav-dropdown');
    if (!link) return;

    const mItem = document.createElement('div');
    mItem.className = 'mobile-nav-item';

    if (dropdown) {
      const btn = document.createElement('button');
      btn.className = 'mobile-nav-link';
      btn.innerHTML = link.textContent.trim() + chevron;
      const sub = document.createElement('div');
      sub.className = 'mobile-sub-links';
      dropdown.querySelectorAll('a').forEach(a => sub.appendChild(a.cloneNode(true)));
      btn.addEventListener('click', () => {
        mobileMenu.querySelectorAll('.mobile-nav-item.open').forEach(el => {
          if (el !== mItem) el.classList.remove('open');
        });
        mItem.classList.toggle('open');
      });
      mItem.appendChild(btn);
      mItem.appendChild(sub);
    } else {
      const a = document.createElement('a');
      a.className = 'mobile-nav-link';
      a.href = link.getAttribute('href') || '#';
      a.textContent = link.textContent.trim();
      mItem.appendChild(a);
    }
    mobileMenu.appendChild(mItem);
  });

  // Book + Account footer
  const mFooter = document.createElement('div');
  mFooter.className = 'mobile-menu-footer';
  mFooter.innerHTML =
    '<a href="https://shop.indoorskydive.lu/store_10" class="mobile-nav-book">Book Now</a>' +
    '<a href="account.html" class="mobile-nav-account">' +
    '<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' +
    'My Account</a>';
  mobileMenu.appendChild(mFooter);

  // Add language links from the nav-lang dropdown
  const langDropdown = nav.querySelector('.nav-lang .nav-dropdown');
  if (langDropdown) {
    const langLinks = document.createElement('div');
    langLinks.className = 'mobile-lang-links';
    langDropdown.querySelectorAll('a').forEach(a => langLinks.appendChild(a.cloneNode(true)));
    mobileMenu.appendChild(langLinks);
  }

  document.body.appendChild(mobileMenu);

  function openMenu() {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-label', 'Close menu');
  }
  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-label', 'Open menu');
  }

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });

})();
