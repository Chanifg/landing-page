import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Layers, Compass, MessageSquare } from 'lucide-react';

export default function FloatingDock() {
  return (
    <div className="mobile-floating-dock" role="navigation" aria-label="Navigasi Bawah Layar">
      <NavLink 
        to="/" 
        className={({ isActive }) => `dock-item-btn ${isActive ? 'active' : ''}`}
        end
        aria-label="Beranda Utama"
      >
        <Home size={18} />
        <span>Beranda</span>
      </NavLink>

      <NavLink 
        to="/program" 
        className={({ isActive }) => `dock-item-btn ${isActive ? 'active' : ''}`}
        aria-label="4 Pilar Program"
      >
        <Layers size={18} />
        <span>4 Pilar</span>
      </NavLink>

      <NavLink 
        to="/tur-360" 
        className="dock-item-btn highlight"
        aria-label="Tur Virtual 360 Derajat"
      >
        <Compass size={18} />
        <span>Tur 360°</span>
      </NavLink>

      <NavLink 
        to="/kontak" 
        className={({ isActive }) => `dock-item-btn ${isActive ? 'active' : ''}`}
        aria-label="Buku Tamu Pengunjung"
      >
        <MessageSquare size={18} />
        <span>Buku Tamu</span>
      </NavLink>
    </div>
  );
}
