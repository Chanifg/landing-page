/**
 * Interactive 4 Pillars (Sebelum vs Sesudah) Logic
 */

export function initPillarsToggle() {
  const cards = document.querySelectorAll('.pillar-card');

  cards.forEach(card => {
    const toggleBtns = card.querySelectorAll('.pillar-toggle-btn');
    const viewBefore = card.querySelector('.pillar-view-before');
    const viewAfter = card.querySelector('.pillar-view-after');

    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.view; // 'before' or 'after'

        // Update active class on buttons
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Toggle views
        if (mode === 'before') {
          if (viewBefore) viewBefore.classList.add('active');
          if (viewAfter) viewAfter.classList.remove('active');
        } else {
          if (viewBefore) viewBefore.classList.remove('active');
          if (viewAfter) viewAfter.classList.add('active');
        }
      });
    });
  });
}
