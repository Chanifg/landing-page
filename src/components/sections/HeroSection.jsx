import React from 'react';
import { Compass, Users, MapPin, ShieldCheck } from 'lucide-react';
import { siteImages } from '../../data/siteImages.js';
import ImagePlaceholder from '../shared/ImagePlaceholder.jsx';

export default function HeroSection({ onExploreTour }) {
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

        {/* Large Rounded Photo Frame with Cutout Notch Overlap */}
        <div className="hero-editorial-frame-wrapper">
          {/* Main Photo Frame with border-radius: 24px */}
          <div className="hero-editorial-frame">
            <ImagePlaceholder
              src={siteImages.hero.mainTeam}
              alt={siteImages.hero.alt}
              label={siteImages.hero.label}
              aspectRatio="1078/596"
              className="hero-editorial-img"
            />
          </div>

          {/* Cutout Notch Container (Kotak di belakang 4 card dengan border-radius: 24px) */}
          <div className="hero-cutout-notch" aria-label="Ringkasan Wilayah Tampirkulon">
            {/* The White Floating 4-Column Card */}
            <div className="hero-floating-stats-card">
              {/* Stat 1: Luas Wilayah */}
              <div className="hero-stat-col">
                <div className="hero-stat-icon-circle">
                  <Compass size={16} strokeWidth={2.2} />
                </div>
                <div className="hero-stat-val">
                  2.61 <span className="stat-unit">KM²</span>
                </div>
                <div className="hero-stat-lbl">
                  LUAS WILAYAH
                </div>
              </div>

              <div className="hero-stat-divider" aria-hidden="true" />

              {/* Stat 2: Jumlah Penduduk */}
              <div className="hero-stat-col">
                <div className="hero-stat-icon-circle">
                  <Users size={16} strokeWidth={2.2} />
                </div>
                <div className="hero-stat-val">
                  4.893+
                </div>
                <div className="hero-stat-lbl">
                  JUMLAH PENDUDUK
                </div>
              </div>

              <div className="hero-stat-divider" aria-hidden="true" />

              {/* Stat 3: Dusun Terpadu */}
              <div className="hero-stat-col">
                <div className="hero-stat-icon-circle">
                  <MapPin size={16} strokeWidth={2.2} />
                </div>
                <div className="hero-stat-val">
                  13
                </div>
                <div className="hero-stat-lbl">
                  DUSUN TERPADU
                </div>
              </div>

              <div className="hero-stat-divider" aria-hidden="true" />

              {/* Stat 4: Intervensi Program */}
              <div className="hero-stat-col">
                <div className="hero-stat-icon-circle">
                  <ShieldCheck size={16} strokeWidth={2.2} />
                </div>
                <div className="hero-stat-val">
                  4 Pilar
                </div>
                <div className="hero-stat-lbl">
                  INTERVENSI PROGRAM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
