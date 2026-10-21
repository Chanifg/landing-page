/**
 * IN WEST TAMP - Landing Page Main Entry Point
 */

import { init360Viewer } from './viewer360.js';
import { initPillarsToggle } from './pillars.js';
import { initCounters } from './counter.js';
import { initGallery } from './gallery.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('IN WEST TAMP: Integrated Wellness-Tourism Area Tampirkulon initialized.');

  // 1. Initialize 360 Panorama Virtual Tour Hub
  init360Viewer();

  // 2. Initialize Interactive 4 Pillars (Sebelum vs Sesudah)
  initPillarsToggle();

  // 3. Initialize Impact Metrics Animated Counter
  initCounters();

  // 4. Initialize Documentation Gallery & Lightbox
  initGallery();

  // 5. Smooth Scroll Helper for Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 6. Scroll Reveal (MOTION 2: fade-up on viewport entry, once per section)
  const revealElements = document.querySelectorAll('.section-header, .viewer-card, .pillars-grid, .metrics-grid, .gallery-grid, .partners-grid, .footer-top-grid');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => {
      el.classList.add('reveal-on-scroll');
      revealObserver.observe(el);
    });
  }
});

