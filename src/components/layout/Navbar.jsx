import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { id: 'tentang', label: 'TENTANG' },
  { id: 'pilar', label: '4 PILAR INOVASI' },
  { id: 'galeri', label: 'GALERI' },
  { id: 'tim', label: 'TIM PELAKSANA' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    closeMenu();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <header className="navbar-clean">
      <div className="editorial-container navbar-clean-container">
        {/* Brand Logo Only (Matches Mockup) */}
        <a 
          href="#hero" 
          className="navbar-brand-wrap"
          onClick={(e) => handleNavClick(e, 'hero')} 
          aria-label="IN WEST TAMP - PPK Ormawa Himagi Untidar"
        >
          <img 
            src="/images/logos/ppk-ormawa-himagi.png" 
            alt="PPK Ormawa Himagi Untidar" 
            className="navbar-brand-logo"
            onError={(e) => {
              e.currentTarget.src = '/images/logos/untidar.png';
            }}
          />
        </a>

        {/* Desktop Center Links */}
        <nav className="navbar-clean-center" aria-label="Navigasi Utama">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="navbar-clean-link-item"
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="navbar-clean-right">
          <a 
            href="#tur-360" 
            className="navbar-pill-btn"
            onClick={(e) => handleNavClick(e, 'tur-360')}
          >
            <span>JELAJAHI 360°</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Toggle Button */}
          <button 
            className="mobile-clean-toggle"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="navbar-mobile-drawer">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="navbar-mobile-link"
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#tur-360" 
              className="navbar-pill-btn mobile-pill-btn"
              onClick={(e) => handleNavClick(e, 'tur-360')}
            >
              <span>JELAJAHI 360°</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
