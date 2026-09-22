import React, { useEffect, useRef, useState } from 'react';

function SingleMetricCard({ metric }) {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const target = metric.target_value || 0;
          const duration = 1500; // 1.5 seconds (MOTION 2)
          const steps = 30;
          const stepTime = duration / steps;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepTime);
        }
      });
    }, { threshold: 0.2 });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [metric.target_value]);

  return (
    <div ref={cardRef} className="hex-metric-card" role="group" aria-label={`${metric.label}: ${metric.target_value}${metric.suffix || ''}`}>
      <div className="hex-metric-inner">
        <div className="metric-number-wrap">
          <span className="metric-number">{count}</span>
          {metric.suffix && <span className="metric-suffix">{metric.suffix}</span>}
        </div>
        <h4 className="metric-label">{metric.label}</h4>
        <p className="metric-desc">{metric.description}</p>
      </div>
    </div>
  );
}

export default function MetricsCounter({ metrics = [] }) {
  return (
    <div className="metrics-grid">
      {metrics.map((item) => (
        <SingleMetricCard key={item.id} metric={item} />
      ))}
    </div>
  );
}
