import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Lock, Mail, Key, ArrowLeft, Shield } from 'lucide-react';
import { loginAdmin } from '../../lib/supabase.js';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await loginAdmin(email, password);
    setLoading(false);

    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setError(result.error || 'Email atau kata sandi tidak sesuai.');
    }
  };

  const handleFillDemo = () => {
    setEmail('admin@inwesttamp.desa.id');
    setPassword('InWestTamp2025!');
  };

  return (
    <div className="admin-login-wrap">
      <div className="admin-login-card">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: 'rgba(229, 139, 36, 0.15)',
            border: '2px solid var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            color: 'var(--accent)'
          }}>
            <Lock size={26} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Panel Admin IN WEST TAMP
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginTop: '0.25rem' }}>
            Masuk untuk memperbarui metrik, luaran SK, dan ulasan tamu.
          </p>
        </div>

        {error && (
          <div style={{
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.35)',
            color: '#EF4444',
            fontSize: '0.8125rem',
            marginBottom: '1.25rem'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Pengelola</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                placeholder="nama@untidar.ac.id" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Kata Sandi</label>
            <input 
              type="password" 
              id="password" 
              className="form-input" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={loading}
            style={{ width: '100%', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            <Shield size={16} />
            <span>{loading ? 'Memverifikasi Akses...' : 'Masuk Panel Admin'}</span>
          </button>
        </form>

        {/* Demo Fill Helper */}
        <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
          <button 
            type="button" 
            onClick={handleFillDemo}
            style={{ 
              background: 'transparent', 
              border: '1px dashed var(--accent)', 
              color: 'var(--accent)', 
              padding: '0.45rem 0.85rem', 
              borderRadius: 'var(--radius-sm)', 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              cursor: 'pointer' 
            }}
          >
            Gunakan Akun Koordinator Demo
          </button>
          <div style={{ marginTop: '1rem' }}>
            <Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none' }}>
              <ArrowLeft size={14} />
              <span>Kembali ke Halaman Beranda</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
