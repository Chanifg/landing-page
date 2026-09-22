import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Compass, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Brand Logos */}
        <Link to="/" className="nav-logos" onClick={closeMenu} style={{ textDecoration: 'none' }}>
          <img src="/images/logos/untidar.png" alt="Logo Universitas Tidar" title="Universitas Tidar" />
          <img src="/images/logos/blu.png" alt="Logo BLU" title="BLU Unggul Berbudaya" />
          <img src="/images/logos/desa-wisata.png" alt="Desa Wisata Tampirkulon" title="Desa Wisata Tampirkulon" />
          <div className="nav-logo-team" title="PPK Ormawa Himagi Untidar">
            <img src="/images/logos/ppk-ormawa-himagi.png" alt="Logo PPK Ormawa Himagi Untidar" />
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-nav-toggle"
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation Links */}
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
            end
          >
            Beranda
          </NavLink>

          <NavLink 
            to="/tentang" 
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Tentang
          </NavLink>

          <NavLink 
            to="/program" 
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            4 Pilar & K3
          </NavLink>

          <NavLink 
            to="/luaran" 
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Luaran & SK
          </NavLink>

          <NavLink 
            to="/tur-360" 
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Tur 360°
          </NavLink>

          <NavLink 
            to="/dokumentasi" 
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Dokumentasi
          </NavLink>

          <NavLink 
            to="/kontak" 
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Buku Tamu
          </NavLink>

          <Link 
            to="/tur-360" 
            className="btn btn-primary nav-cta-btn" 
            onClick={closeMenu}
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.8125rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <Compass size={16} />
            <span>Jelajahi 360°</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
