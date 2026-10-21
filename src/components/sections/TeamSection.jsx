import React from 'react';
import { GraduationCap, Award, UserCheck } from 'lucide-react';
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
            [ TIM PELAKSANA PROGRAM ]
          </div>
          <h2 className="editorial-title">
            15 Mahasiswa Pelaksana Program
          </h2>
          <p className="editorial-subtitle">
            Kolaborasi mahasiswa berdedikasi Himpunan Mahasiswa Gizi (Himagi) Universitas Tidar 2025 dalam mewujudkan integrasi pariwisata sehat di Desa Tampirkulon.
          </p>
        </div>

        {/* DPL Banner Card */}
        <div className="dpl-banner-card">
          <div className="dpl-avatar-circle">
            <GraduationCap size={28} className="dpl-icon" />
          </div>
          <div className="dpl-content">
            <div className="dpl-header-row">
              <span className="dpl-badge">SUPERVISI AKADEMIK &amp; DPL</span>
              <h3 className="dpl-name">{dpl.name}</h3>
            </div>
            <p className="dpl-affiliation">{dpl.affiliation}</p>
            <p className="dpl-quote">"{dpl.quote}"</p>
          </div>
        </div>

        {/* 15 Mahasiswa Cards Grid */}
        <div className="team-cards-grid">
          {teamList.map((member, index) => (
            <div key={index} className="team-member-card">
              <div className="team-avatar-initials">
                <span>{member.initial}</span>
              </div>
              <h4 className="team-member-name">{member.name}</h4>
              <div className="team-member-role-badge">
                <span>{member.role}</span>
              </div>
              <span className="team-member-dept">{member.dept}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
