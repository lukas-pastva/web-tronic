// TRONIC site scripts
(function () {
  // Set current year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ============ i18n Language System ============
  const SUPPORTED_LANGS = ['sk', 'en', 'es'];
  const DEFAULT_LANG = 'sk';

  function getBrowserLang() {
    const navLang = navigator.language || navigator.userLanguage || '';
    const short = navLang.split('-')[0].toLowerCase();
    return SUPPORTED_LANGS.includes(short) ? short : null;
  }

  function getCurrentLang() {
    const stored = localStorage.getItem('lang');
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
    const browser = getBrowserLang();
    if (browser) return browser;
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
    updateLangSwitcher(lang);
    document.documentElement.lang = lang;
  }

  function t(key, lang) {
    const translations = window.TRANSLATIONS || {};
    const langData = translations[lang] || translations[DEFAULT_LANG] || {};
    return langData[key] || key;
  }

  function applyTranslations(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = t(key, lang);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
      } else {
        el.textContent = translation;
      }
    });

    // Update elements with data-i18n-html attribute (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key, lang);
    });

    // Update page title and meta
    document.title = t('title', lang);
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t('description', lang);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = t('title', lang);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = t('ogDescription', lang);
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.content = t('title', lang);
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.content = t('ogDescription', lang);

    // Update static contact labels
    updateStaticContactLabels(lang);
  }

  function updateStaticContactLabels(lang) {
    const contactStatic = document.getElementById('contact-static');
    if (!contactStatic) return;

    const labelMap = {
      'Adresa': 'labelAddress',
      'Address': 'labelAddress',
      'Dirección': 'labelAddress',
      'Telefón': 'labelPhone',
      'Phone': 'labelPhone',
      'Teléfono': 'labelPhone',
      'E-mail': 'labelEmail',
      'Email': 'labelEmail',
      'Correo': 'labelEmail',
      'IČO': 'labelIco',
      'Company ID': 'labelIco',
      'ID Empresa': 'labelIco',
      'DIČ': 'labelDic',
      'Tax ID': 'labelDic',
      'ID Fiscal': 'labelDic',
      'IČ DPH': 'labelVat',
      'VAT ID': 'labelVat',
      'NIF/IVA': 'labelVat',
      'Bankový účet': 'labelBank',
      'Bank Account': 'labelBank',
      'Cuenta Bancaria': 'labelBank',
      'BIC (SWIFT)': 'labelSwift'
    };

    contactStatic.querySelectorAll('.label').forEach(labelEl => {
      const currentText = labelEl.textContent.trim();
      // Find the key for this label
      for (const [text, key] of Object.entries(labelMap)) {
        if (currentText === text || labelEl.getAttribute('data-label-key') === key) {
          labelEl.setAttribute('data-label-key', key);
          labelEl.textContent = t(key, lang);
          break;
        }
      }
    });
  }

  function updateLangSwitcher(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  function initLangSwitcher() {
    const currentLang = getCurrentLang();

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        setLang(lang);
      });
    });

    // Apply initial language
    setLang(currentLang);
  }

  // ============ Contact Loading ============
  async function fetchJson(url) {
    const res = await fetch(url, { credentials: 'omit', mode: 'cors' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  }

  function row(label, valueHtml, labelKey) {
    const el = document.createElement('div');
    el.className = 'row';
    el.innerHTML = `<div class="label" data-label-key="${labelKey}">${label}</div><div class="value">${valueHtml}</div>`;
    return el;
  }

  function sanitize(text) {
    return String(text).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[s]));
  }

  async function loadContact() {
    const container = document.getElementById('contact');
    if (!container) return;

    const lang = getCurrentLang();

    try {
      const fallbackUrl = 'https://sw.tronic.sk/api/contact';
      const url = (window.CONTACT_API_URL || fallbackUrl);

      const data = await fetchJson(url);
      container.innerHTML = '';

      const name = data.companyName || data.name || data.company || 'TRONIC';
      const email = data.email || data.mail;
      const phone = data.phone || data.tel;
      const address = data.address || [data.street, data.city, data.zip].filter(Boolean).join(', ');
      const ico = data.ico || data.ic || data.registrationNumber;
      const dic = data.dic || data.taxId || data.vatId;
      const web = data.web || data.website || 'https://tronic.sk';

      const rows = [];
      rows.push(row(t('labelCompany', lang), sanitize(name), 'labelCompany'));
      if (address) rows.push(row(t('labelAddress', lang), sanitize(address), 'labelAddress'));
      if (phone) rows.push(row(t('labelPhone', lang), `<a href="tel:${sanitize(phone)}">${sanitize(phone)}</a>`, 'labelPhone'));
      if (email) rows.push(row(t('labelEmail', lang), `<a href="mailto:${sanitize(email)}">${sanitize(email)}</a>`, 'labelEmail'));
      if (ico) rows.push(row(t('labelIco', lang), sanitize(ico), 'labelIco'));
      if (dic) rows.push(row(t('labelDic', lang) + '/' + t('labelVat', lang), sanitize(dic), 'labelDic'));
      if (web) rows.push(row(t('labelWeb', lang), `<a href="${sanitize(web)}" target="_blank" rel="noreferrer">${sanitize(web)}</a>`, 'labelWeb'));

      for (const r of rows) container.appendChild(r);
    } catch (err) {
      console.warn('Failed to load contact data:', err);
      container.innerHTML = '';
      container.appendChild(row(t('navContact', lang), `${t('contactError', lang)} <a href="https://sw.tronic.sk" target="_blank" rel="noreferrer">sw.tronic.sk</a>.`, 'navContact'));
    }
  }

  // ============ Smooth Scroll ============
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ============ Mobile Menu ============
  function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', nav.classList.contains('nav-open'));
      });

      // Close menu when clicking a link
      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('nav-open');
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // ============ Initialize ============
  document.addEventListener('DOMContentLoaded', () => {
    initLangSwitcher();
    initSmoothScroll();
    initMobileMenu();
    loadContact();
  });
})();
