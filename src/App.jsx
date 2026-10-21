import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import FloatingDock from './components/layout/FloatingDock.jsx';
import ScrollToTop from './components/layout/ScrollToTop.jsx';

// Public Single Page
import HomePage from './pages/HomePage.jsx';

// Admin Pages & Guard
import ProtectedRoute from './components/admin/ProtectedRoute.jsx';
import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AdminMetrics from './pages/admin/AdminMetrics.jsx';
import AdminDocumentation from './pages/admin/AdminDocumentation.jsx';
import AdminDeliverables from './pages/admin/AdminDeliverables.jsx';
import AdminSpots360 from './pages/admin/AdminSpots360.jsx';
import AdminGuestbook from './pages/admin/AdminGuestbook.jsx';

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      
      {!isAdminRoute && <Navbar />}

      <main className={!isAdminRoute ? 'public-main' : ''}>
        <Routes>
          {/* Public Unified Single Page Route */}
          <Route path="/" element={<HomePage />} />

          {/* Graceful Redirects for Legacy Multi-Page URLs */}
          <Route path="/tentang" element={<Navigate to="/#tentang" replace />} />
          <Route path="/program" element={<Navigate to="/#pilar" replace />} />
          <Route path="/luaran" element={<Navigate to="/#luaran" replace />} />
          <Route path="/tur-360" element={<Navigate to="/#tur-360" replace />} />
          <Route path="/dokumentasi" element={<Navigate to="/#galeri" replace />} />
          <Route path="/kontak" element={<Navigate to="/#lokasi" replace />} />

          {/* Admin Protected Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/metrik" 
            element={
              <ProtectedRoute>
                <AdminMetrics />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/dokumentasi" 
            element={
              <ProtectedRoute>
                <AdminDocumentation />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/luaran" 
            element={
              <ProtectedRoute>
                <AdminDeliverables />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/spots" 
            element={
              <ProtectedRoute>
                <AdminSpots360 />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/buku-tamu" 
            element={
              <ProtectedRoute>
                <AdminGuestbook />
              </ProtectedRoute>
            } 
          />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <FloatingDock />}
    </>
  );
}
