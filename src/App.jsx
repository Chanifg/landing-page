import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import FloatingDock from './components/layout/FloatingDock.jsx';
import ScrollToTop from './components/layout/ScrollToTop.jsx';

// Public Pages
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import DeliverablesPage from './pages/DeliverablesPage.jsx';
import VirtualTourPage from './pages/VirtualTourPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

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
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/program" element={<ProgramsPage />} />
          <Route path="/luaran" element={<DeliverablesPage />} />
          <Route path="/tur-360" element={<VirtualTourPage />} />
          <Route path="/dokumentasi" element={<GalleryPage />} />
          <Route path="/kontak" element={<ContactPage />} />

          {/* Admin Routes */}
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
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <FloatingDock />}
    </>
  );
}
