import React, { useState, useEffect } from 'react';
import { Home, Layers, Compass, Award } from 'lucide-react';

export default function FloatingDock() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'tur-360', 'pilar', 'luaran'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <div className="mobile-floating-dock" role="navigation" aria-label="Navigasi Bawah Layar">
      <a 
        href="#hero" 
        className={`dock-item-btn ${activeSection === 'hero' ? 'active' : ''}`}
        onClick={(e) => scrollTo(e, 'hero')}
        aria-label="Beranda Utama"
      >
        <Home size={18} />
        <span>Beranda</span>
      </a>

      <a 
        href="#tur-360" 
        className={`dock-item-btn highlight ${activeSection === 'tur-360' ? 'active' : ''}`}
        onClick={(e) => scrollTo(e, 'tur-360')}
        aria-label="Tur Virtual 360 Derajat"
      >
        <Compass size={18} />
        <span>Tur 360°</span>
      </a>

      <a 
        href="#pilar" 
        className={`dock-item-btn ${activeSection === 'pilar' ? 'active' : ''}`}
        onClick={(e) => scrollTo(e, 'pilar')}
        aria-label="4 Pilar Program"
      >
        <Layers size={18} />
        <span>4 Pilar</span>
      </a>

      <a 
        href="#luaran" 
        className={`dock-item-btn ${activeSection === 'luaran' ? 'active' : ''}`}
        onClick={(e) => scrollTo(e, 'luaran')}
        aria-label="Katalog Luaran dan Legalitas SK"
      >
        <Award size={18} />
        <span>Luaran</span>
      </a>
    </div>
  );
}
