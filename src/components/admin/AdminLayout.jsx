import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  Image, 
  FileText, 
  Compass, 
  MessageSquare, 
  LogOut, 
  Home, 
  Database,
  ShieldCheck 
} from 'lucide-react';
import { logoutAdmin, getBackendStatus, getAdminSession } from '../../lib/supabase.js';

export default function AdminLayout({ children, title = 'Panel Manajemen' }) {
  const navigate = useNavigate();
  const status = getBackendStatus();
  const session = getAdminSession();

  const handleLogout = async () => {
    await logoutAdmin();
    navigate('/admin/login');
  };

  return (
    <div className="admin-layout">
      {/* Admin Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="admin-brand-title">IN WEST TAMP</span>
            <span className="admin-brand-badge">ADMIN</span>
          </Link>
        </div>

        <nav className="admin-nav">
          <NavLink 
            to="/admin" 
            end 
            className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
          >
            <LayoutDashboard size={18} />
            <span>Ringkasan Dashboard</span>
          </NavLink>

          <NavLink 
            to="/admin/metrik" 
            className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
          >
            <BarChart3 size={18} />
            <span>Metrik Capaian</span>
          </NavLink>

          <NavLink 
            to="/admin/dokumentasi" 
            className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
          >
            <Image size={18} />
            <span>Galeri Dokumentasi</span>
          </NavLink>

          <NavLink 
            to="/admin/luaran" 
            className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
          >
            <FileText size={18} />
            <span>Katalog Luaran &amp; SK</span>
          </NavLink>

          <NavLink 
            to="/admin/spots" 
            className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
          >
            <Compass size={18} />
            <span>Titik Rute 360°</span>
          </NavLink>

          <NavLink 
            to="/admin/buku-tamu" 
            className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
          >
            <MessageSquare size={18} />
            <span>Moderasi Buku Tamu</span>
          </NavLink>
        </nav>

        <div className="admin-nav-footer">
          <Link 
            to="/" 
            className="btn btn-outline" 
            style={{ fontSize: '0.8125rem', padding: '0.45rem', justifyContent: 'center' }}
          >
            <Home size={15} />
            <span>Buka Situs Publik</span>
          </Link>

          <button 
            onClick={handleLogout} 
            className="btn btn-outline" 
            style={{ fontSize: '0.8125rem', padding: '0.45rem', justifyContent: 'center', borderColor: '#EF4444', color: '#EF4444' }}
          >
            <LogOut size={15} />
            <span>Keluar Akun</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Body */}
      <div className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar">
          <h1 className="admin-topbar-title">{title}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              padding: '0.3rem 0.65rem',
              borderRadius: 'var(--radius-full)',
              background: status.isLive ? 'rgba(82, 183, 136, 0.2)' : 'rgba(229, 139, 36, 0.15)',
              border: `1px solid ${status.isLive ? 'rgba(82, 183, 136, 0.4)' : 'rgba(229, 139, 36, 0.4)'}`,
              color: status.isLive ? 'var(--primary-lighter)' : 'var(--accent)'
            }}>
              <Database size={13} />
              <span>{status.mode}</span>
            </div>

            <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              {session?.user?.email || 'Koordinator Tim'}
            </span>
          </div>
        </header>

        {/* Content Area */}
        <main className="admin-content">
          {children}
        </main>
      </div>
    </div>
  );
}
