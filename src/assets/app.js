// TRONIC site scripts
(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  async function fetchJson(url) {
    const res = await fetch(url, { credentials: 'omit', mode: 'cors' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  }

  function row(label, valueHtml) {
    const el = document.createElement('div');
    el.className = 'row';
    el.innerHTML = `<div class="label">${label}</div><div class="value">${valueHtml}</div>`;
    return el;
  }

  function sanitize(text) {
    return String(text).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[s]));
  }

  async function loadContact() {
    const container = document.getElementById('contact');
    if (!container) return;

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
      rows.push(row('Spoločnosť', sanitize(name)));
      if (address) rows.push(row('Adresa', sanitize(address)));
      if (phone) rows.push(row('Telefón', `<a href="tel:${sanitize(phone)}">${sanitize(phone)}</a>`));
      if (email) rows.push(row('E‑mail', `<a href="mailto:${sanitize(email)}">${sanitize(email)}</a>`));
      if (ico) rows.push(row('IČO', sanitize(ico)));
      if (dic) rows.push(row('DIČ/IČ DPH', sanitize(dic)));
      if (web) rows.push(row('Web', `<a href="${sanitize(web)}" target="_blank" rel="noreferrer">${sanitize(web)}</a>`));

      for (const r of rows) container.appendChild(r);
    } catch (err) {
      console.warn('Nepodarilo sa načítať kontaktné údaje:', err);
      container.innerHTML = '';
      container.appendChild(row('Kontakt', 'Skúste prosím neskôr alebo navštívte <a href="https://sw.tronic.sk" target="_blank" rel="noreferrer">sw.tronic.sk</a>.'));
    }
  }

  document.addEventListener('DOMContentLoaded', loadContact);
})();

