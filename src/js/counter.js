/**
 * Animated Impact Number Counters
 */

export function initCounters() {
  const counterElements = document.querySelectorAll('.metric-number');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  counterElements.forEach(el => observer.observe(el));
}

function startCounting(el) {
  const target = parseInt(el.dataset.target, 10);
  if (isNaN(target)) return;

  const duration = 1800; // ms
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);
  let currentFrame = 0;

  const easeOutQuart = (t) => 1 - (--t) * t * t * t;

  const timer = setInterval(() => {
    currentFrame++;
    const progress = easeOutQuart(currentFrame / totalFrames);
    const currentValue = Math.round(target * progress);

    el.textContent = currentValue;

    if (currentFrame >= totalFrames) {
      el.textContent = target;
      clearInterval(timer);
    }
  }, frameRate);
}
