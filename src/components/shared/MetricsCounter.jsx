import React, { useEffect, useRef, useState } from 'react';
import { Layers, Users, Calendar, HeartHandshake, TrendingUp, ShieldCheck } from 'lucide-react';

const metricIcons = {
  'metric-1': Layers,
  'metric-2': Users,
  'metric-3': Calendar,
  'metric-4': HeartHandshake,
  'metric-5': TrendingUp,
  'metric-6': ShieldCheck
};

function SingleMetricCard({ metric, index }) {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const hasAnimated = useRef(false);
  const IconComponent = metricIcons[metric.id] || Layers;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const target = metric.target_value || 0;
          const duration = 1200;
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
    }, { threshold: 0.15 });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [metric.target_value]);

  return (
    <div ref={cardRef} className="metric-card" role="group" aria-label={`${metric.label}: ${metric.target_value}${metric.suffix || ''}`}>
      <div className="metric-icon">
        <IconComponent size={20} />
      </div>
      <div className="metric-number-wrapper">
        <span className="metric-number">{count}</span>
        {metric.suffix && <span className="metric-suffix">{metric.suffix}</span>}
      </div>
      <span className="metric-label">{metric.label}</span>
    </div>
  );
}

export default function MetricsCounter({ metrics = [] }) {
  return (
    <div className="metrics-grid">
      {metrics.map((item, index) => (
        <SingleMetricCard key={item.id} metric={item} index={index} />
      ))}
    </div>
  );
}
