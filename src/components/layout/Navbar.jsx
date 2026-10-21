import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { id: 'tentang', label: 'Tentang' },
  { id: 'pilar', label: '4 Pilar' },
  { id: 'tur-360', label: 'Tur 360°' },
  { id: 'galeri', label: 'Dokumentasi' },
  { id: 'tim', label: 'Tim Pelaksana' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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
        {/* Brand Logo & Tag */}
        <a 
          href="#hero" 
          className="nav-brand"
          onClick={(e) => handleNavClick(e, 'hero')} 
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <img 
            src="/images/logos/ppk-ormawa-himagi.png" 
            alt="Logo PPK Ormawa Himagi Untidar" 
            style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
            onError={(e) => {
              e.currentTarget.src = '/images/logos/untidar.png';
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '0.9375rem', 
              letterSpacing: '0.04em',
              color: 'var(--text-primary)'
            }}>
              IN WEST TAMP
            </span>
            <span style={{ 
              fontSize: '0.6875rem', 
              color: 'var(--text-muted)',
              fontWeight: 600,
              letterSpacing: '0.02em'
            }}>
              PPK ORMAWA HIMAGI UNTIDAR
            </span>
          </div>
        </a>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-nav-toggle"
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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

          {/* Forest Green Pill Button */}
          <a 
            href="#tur-360" 
            className="btn-pill-forest"
            onClick={(e) => handleNavClick(e, 'tur-360')}
          >
            <span>Jelajahi Paket</span>
            <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}
