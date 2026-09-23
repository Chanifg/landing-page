/**
 * IN WEST TAMP - Hub Resmi PPK Ormawa HIMAGI UNTIDAR
 * Interactivity & Dynamic Rendering Logic
 */

(function () {
  'use strict';

  // SVG Icons Library
  const ICONS = {
    drive: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
      <path d="M12 12v9"/>
      <path d="m8 17 4 4 4-4"/>
    </svg>`,
    ticket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
      <path d="M13 5v2"/>
      <path d="M13 17v2"/>
      <path d="M13 11v2"/>
    </svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>`,
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>`,
    fileText: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>`,
    tiktok: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
    </svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>`
  };

  let toastTimeout = null;

  // Tampilkan Toast Notification
  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // Render Kartu Aksi Prioritas (Bento Grid)
  function renderBentoCards() {
    const container = document.getElementById('bento-grid');
    if (!container || !window.PROGRAM_DATA || !window.PROGRAM_DATA.quickLinks) return;

    container.innerHTML = window.PROGRAM_DATA.quickLinks.map(link => {
      const isPrimary = link.isPrimary;
      const bentoClass = isPrimary ? 'primary-bento' : 'secondary-bento';
      const badgeClass = link.badgeType === 'gold' ? 'badge-gold' : 'badge-green';
      const iconSvg = link.icon === 'drive' ? ICONS.drive : ICONS.ticket;

      return `
        <a href="${link.url}" 
           class="bento-card ${bentoClass}" 
           data-id="${link.id}"
           target="${link.url.startsWith('http') ? '_blank' : '_self'}"
           rel="noopener noreferrer"
           aria-label="${link.title}">
          <div class="bento-content">
            <div class="bento-icon-wrapper" aria-hidden="true">
              ${iconSvg}
            </div>
            <div class="bento-text">
              <span class="bento-badge ${badgeClass}">${link.badge}</span>
              <h3 class="bento-title">${link.title}</h3>
              <p class="bento-subtitle">${link.subtitle}</p>
            </div>
          </div>
          <div class="bento-arrow" aria-hidden="true">
            ${ICONS.arrowRight}
          </div>
        </a>
      `;
    }).join('');

    // Tambahkan event handler untuk kartu dengan link placeholder
    container.querySelectorAll('.bento-card').forEach(card => {
      card.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') {
          e.preventDefault();
          const title = this.querySelector('.bento-title').textContent;
          showToast(`Layanan ${title} sedang disiapkan oleh tim pelaksana.`);
        }
      });
    });
  }

  // Render Media Sosial
  function renderSocials() {
    const container = document.getElementById('social-grid');
    if (!container || !window.PROGRAM_DATA || !window.PROGRAM_DATA.socials) return;

    container.innerHTML = window.PROGRAM_DATA.socials.map(social => {
      const iconSvg = ICONS[social.icon] || ICONS.externalLink;
      return `
        <a href="${social.url}" 
           class="social-pill" 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="${social.name}: ${social.handle}">
          <div class="social-icon-box ${social.icon}" aria-hidden="true">
            ${iconSvg}
          </div>
          <div class="social-info">
            <span class="social-name">${social.name}</span>
            <span class="social-handle">${social.handle}</span>
          </div>
        </a>
      `;
    }).join('');
  }

  // Render 4 Pilar Subprogram
  function renderSubprograms() {
    const container = document.getElementById('pillars-container');
    if (!container || !window.PROGRAM_DATA || !window.PROGRAM_DATA.subprograms) return;

    container.innerHTML = window.PROGRAM_DATA.subprograms.map((sub, index) => {
      const numStr = `0${index + 1}`;
      return `
        <div class="pillar-card">
          <span class="pillar-number">Pilar ${numStr}</span>
          <h3 class="pillar-name">${sub.name}</h3>
          <p class="pillar-focus">${sub.focus}</p>
        </div>
      `;
    }).join('');
  }

  // Render 14 Luaran Program
  function renderLuaran(filterCategory = 'all') {
    const container = document.getElementById('luaran-grid');
    const counterBadge = document.getElementById('luaran-counter');
    if (!container || !window.PROGRAM_DATA || !window.PROGRAM_DATA.luaran) return;

    const allItems = window.PROGRAM_DATA.luaran;
    const filtered = filterCategory === 'all' 
      ? allItems 
      : allItems.filter(item => item.category === filterCategory);

    if (counterBadge) {
      counterBadge.textContent = `${filtered.length} Item`;
    }

    container.innerHTML = filtered.map(item => {
      let badgeClass = 'badge-primary';
      if (item.statusBadge === 'success') badgeClass = 'badge-success';
      if (item.statusBadge === 'gold') badgeClass = 'badge-gold';
      if (item.statusBadge === 'info') badgeClass = 'badge-info';

      const isExternal = item.url.startsWith('http');
      const actionText = isExternal ? 'Kunjungi' : 'Lihat Berkas';

      return `
        <article class="luaran-card" data-category="${item.category}" id="luaran-${item.id}">
          <div class="luaran-top">
            <div class="luaran-no-cat">
              <span class="luaran-num">#${item.no}</span>
              <span class="luaran-cat-tag">${item.categoryLabel}</span>
            </div>
            <span class="luaran-status-badge ${badgeClass}">${item.status}</span>
          </div>

          <h3 class="luaran-title">${item.title}</h3>
          <p class="luaran-desc">${item.description}</p>

          <div class="luaran-action-row">
            <span class="luaran-type">
              ${ICONS.fileText}
              ${item.type}
            </span>
            <a href="${item.url}" 
               class="luaran-btn"
               data-id="${item.id}"
               target="${isExternal ? '_blank' : '_self'}"
               rel="noopener noreferrer"
               aria-label="Akses ${item.title}">
              <span>${actionText}</span>
              ${ICONS.externalLink}
            </a>
          </div>
        </article>
      `;
    }).join('');

    // Event listener tombol berkas luaran
    container.querySelectorAll('.luaran-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') {
          e.preventDefault();
          const card = this.closest('.luaran-card');
          const title = card.querySelector('.luaran-title').textContent;
          showToast(`Berkas "${title}" sedang disiapkan oleh tim pelaksana.`);
        }
      });
    });
  }

  // Setup Filter Tabs Interactivity
  function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-chip');
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });

        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');

        const filterCategory = this.getAttribute('data-filter');
        renderLuaran(filterCategory);
      });
    });
  }

  // Render Stats Counter
  function renderStats() {
    const container = document.getElementById('stats-grid');
    if (!container || !window.PROGRAM_DATA || !window.PROGRAM_DATA.stats) return;

    container.innerHTML = window.PROGRAM_DATA.stats.map(stat => {
      return `
        <div class="stat-item">
          <span class="stat-value">${stat.value}</span>
          <span class="stat-label">${stat.label}</span>
        </div>
      `;
    }).join('');
  }

  // Inisialisasi Saat DOM Siap
  document.addEventListener('DOMContentLoaded', function () {
    renderBentoCards();
    renderSocials();
    renderSubprograms();
    renderLuaran('all');
    setupFilters();
    renderStats();
  });

})();
