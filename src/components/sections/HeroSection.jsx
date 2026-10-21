import React from 'react';
import { MapPin, Users, Home, Layers } from 'lucide-react';
import { siteImages } from '../../data/siteImages.js';
import ImagePlaceholder from '../shared/ImagePlaceholder.jsx';

export default function HeroSection({ onExploreTour }) {
  const stats = [
    {
      id: 'area',
      icon: <MapPin size={16} />,
      value: '2.61 km²',
      label: 'Luas Wilayah'
    },
    {
      id: 'population',
      icon: <Users size={16} />,
      value: '±4.893',
      label: 'Jumlah Penduduk'
    },
    {
      id: 'villages',
      icon: <Home size={16} />,
      value: '13',
      label: 'Dusun Terpadu'
    },
    {
      id: 'pillars',
      icon: <Layers size={16} />,
      value: '4 Pilar',
      label: 'Intervensi Utama'
    }
  ];

  return (
    <section id="hero" className="hero-editorial-section">
      <div className="editorial-container">
        {/* Centered Heading */}
        <div className="hero-editorial-header">
          <h1 className="hero-editorial-title">
            IN WEST TAMP
          </h1>
          <p className="hero-editorial-subtitle">
            Integrated Wellness-Tourism Area Tampirkulon
          </p>
        </div>

        {/* Large Rounded Team Image with Floating Stats Overlap */}
        <div className="hero-editorial-frame-wrapper">
          <div className="hero-editorial-frame">
            <ImagePlaceholder
              src={siteImages.hero.mainTeam}
              alt={siteImages.hero.alt}
              label={siteImages.hero.label}
              aspectRatio="16/9"
              className="hero-editorial-img"
            />
          </div>

          {/* Floating Stats Card */}
          <div className="hero-floating-stats-card">
            {stats.map((stat, idx) => (
              <React.Fragment key={stat.id}>
                <div className="hero-stat-col">
                  <div className="hero-stat-icon-wrapper">
                    {stat.icon}
                  </div>
                  <div className="hero-stat-val">
                    {stat.value}
                  </div>
                  <div className="hero-stat-lbl">
                    {stat.label}
                  </div>
                </div>
                {idx < stats.length - 1 && <div className="hero-stat-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
