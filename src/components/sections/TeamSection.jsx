import React from 'react';
import { User } from 'lucide-react';
import { siteImages } from '../../data/siteImages.js';

export default function TeamSection() {
  const teamList = siteImages.team;
  const dpl = siteImages.dpl;

  return (
    <section id="tim" className="team-editorial-section">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="team-editorial-header">
          <div className="editorial-eyebrow-pill">
            • TIM PELAKSANA PROGRAM •
          </div>
          <h2 className="editorial-title">
            15 Mahasiswa Pelaksana Program
          </h2>
          <p className="editorial-subtitle">
            Kolaborasi mahasiswa berdedikasi Himpunan Mahasiswa Gizi (Himagi) Universitas Tidar 2025 dalam mewujudkan integrasi pariwisata sehat di Desa Tampirkulon.
          </p>
        </div>

        {/* DPL Centered Card */}
        <div className="dpl-centered-wrapper">
          <div className="team-member-card dpl-standalone-card">
            <div className="team-card-image-wrap">
              {dpl.image ? (
                <img 
                  src={dpl.image} 
                  alt={dpl.name} 
                  className="team-card-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }
                  }} 
                />
              ) : null}
              <div 
                className="team-fallback-initials"
                style={{ display: dpl.image ? 'none' : 'flex' }}
              >
                <span>{dpl.initial || 'MD'}</span>
              </div>
            </div>
            <div className="team-card-body">
              <h4 className="team-member-name">{dpl.name}</h4>
              <div className="team-member-role-badge dpl-role-badge">
                <span>{dpl.role || 'Dosen Pembimbing Lapangan'}</span>
              </div>
              <span className="team-member-dept">{dpl.affiliation}</span>
            </div>
          </div>
        </div>

        {/* 15 Mahasiswa Cards Grid */}
        <div className="team-cards-grid">
          {teamList.map((member, index) => (
            <div key={index} className="team-member-card">
              <div className={`team-card-image-wrap ${member.isPlaceholder ? 'is-placeholder' : ''}`}>
                {member.isPlaceholder ? (
                  <div className="team-placeholder-inner">
                    <User size={38} className="placeholder-avatar-icon" />
                    <span className="placeholder-text">{member.initial}</span>
                  </div>
                ) : member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="team-card-image"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                <div 
                  className="team-fallback-initials"
                  style={{ display: member.image || member.isPlaceholder ? 'none' : 'flex' }}
                >
                  <span>{member.initial}</span>
                </div>
              </div>
              <div className="team-card-body">
                <h4 className="team-member-name">{member.name}</h4>
                <div className="team-member-role-badge">
                  <span>{member.role}</span>
                </div>
                <span className="team-member-dept">{member.dept}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
