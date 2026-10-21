import React, { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Beranda' },
  { id: 'tur-360', label: 'Tur 360°' },
  { id: 'tentang', label: 'Tentang' },
  { id: 'pilar', label: '4 Pilar & K3' },
  { id: 'metrik', label: 'Capaian' },
  { id: 'luaran', label: 'Luaran & SK' },
  { id: 'galeri', label: 'Dokumentasi' },
  { id: 'tim', label: 'Tim' },
  { id: 'lokasi', label: 'Lokasi & Kontak' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    closeMenu();
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Brand Logos */}
        <a 
          href="#hero" 
          className="nav-logos" 
          onClick={(e) => handleNavClick(e, 'hero')} 
          style={{ textDecoration: 'none' }}
        >
          <img src="/images/logos/untidar.png" alt="Logo Universitas Tidar" title="Universitas Tidar" />
          <img src="/images/logos/blu.png" alt="Logo BLU" title="BLU Unggul Berbudaya" />
          <img src="/images/logos/desa-wisata.png" alt="Desa Wisata Tampirkulon" title="Desa Wisata Tampirkulon" />
          <div className="nav-logo-team" title="PPK Ormawa Himagi Untidar">
            <img src="/images/logos/ppk-ormawa-himagi.png" alt="Logo PPK Ormawa Himagi Untidar" />
          </div>
        </a>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-nav-toggle"
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop & Mobile Navigation Links */}
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}

          <a 
            href="#tur-360" 
            className="btn btn-primary nav-cta-btn" 
            onClick={(e) => handleNavClick(e, 'tur-360')}
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.8125rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <Compass size={16} />
            <span>Jelajahi 360°</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
