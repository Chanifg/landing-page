import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getAdminSession } from '../../lib/supabase.js';

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const session = getAdminSession();

  if (!session) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
}
