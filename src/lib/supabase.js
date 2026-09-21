/**
 * IN WEST TAMP - Supabase Client & Data Layer
 * Mendukung koneksi live Supabase dan fallback otomatis ke mockData lokal.
 */

import { createClient } from '@supabase/supabase-js';
import {
  mockPillars,
  mockDestinations,
  mockMetrics,
  mockDeliverables,
  mockDocumentation,
  mockGuestbook
} from '../data/mockData.js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl.startsWith('https://') &&
  !supabaseUrl.includes('your-project-id')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper: Memeriksa apakah Supabase aktif
export function getBackendStatus() {
  return {
    isLive: isSupabaseConfigured,
    mode: isSupabaseConfigured ? 'Supabase Cloud (PostgreSQL)' : 'Local Mock Data (BaaS Standalone)'
  };
}

// 1. Ambil Data 4 Pilar
export async function getPillars() {
  if (!isSupabaseConfigured) return mockPillars;
  try {
    const { data, error } = await supabase
      .from('pillars')
      .select('*')
      .order('order_index', { ascending: true });
    if (error || !data || data.length === 0) return mockPillars;
    return data;
  } catch {
    return mockPillars;
  }
}

// 2. Ambil Data 7 Destinasi Wisata 360°
export async function getDestinations() {
  if (!isSupabaseConfigured) return mockDestinations;
  try {
    const { data, error } = await supabase
      .from('destinations_360')
      .select('*, pillars(name, tag_color)')
      .order('order_index', { ascending: true });
    if (error || !data || data.length === 0) return mockDestinations;
    return data;
  } catch {
    return mockDestinations;
  }
}

// 3. Ambil Data Metrik Capaian
export async function getMetrics() {
  if (!isSupabaseConfigured) return mockMetrics;
  try {
    const { data, error } = await supabase
      .from('metrics')
      .select('*')
      .order('order_index', { ascending: true });
    if (error || !data || data.length === 0) return mockMetrics;
    return data;
  } catch {
    return mockMetrics;
  }
}

// 4. Ambil Data Luaran Wajib & Tambahan
export async function getDeliverables() {
  if (!isSupabaseConfigured) return mockDeliverables;
  try {
    const { data, error } = await supabase
      .from('deliverables')
      .select('*')
      .order('order_index', { ascending: true });
    if (error || !data || data.length === 0) return mockDeliverables;
    return data;
  } catch {
    return mockDeliverables;
  }
}

// 5. Ambil Data Galeri Dokumentasi
export async function getDocumentation(pillarFilter = null) {
  if (!isSupabaseConfigured) {
    if (!pillarFilter || pillarFilter === 'all') return mockDocumentation;
    return mockDocumentation.filter(d => d.pillar_id === pillarFilter);
  }
  try {
    let query = supabase
      .from('documentation')
      .select('*, pillars(name, tag_color)')
      .order('activity_date', { ascending: false });

    if (pillarFilter && pillarFilter !== 'all') {
      query = query.eq('pillar_id', pillarFilter);
    }

    const { data, error } = await query;
    if (error || !data || data.length === 0) {
      if (!pillarFilter || pillarFilter === 'all') return mockDocumentation;
      return mockDocumentation.filter(d => d.pillar_id === pillarFilter);
    }
    return data;
  } catch {
    return mockDocumentation;
  }
}

// 6. Ambil Data Buku Tamu / Ulasan
export async function getGuestbook() {
  if (!isSupabaseConfigured) return mockGuestbook;
  try {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .eq('is_approved', true)
      .order('created_at', { ascending: false });
    if (error || !data || data.length === 0) return mockGuestbook;
    return data;
  } catch {
    return mockGuestbook;
  }
}

// 7. Kirim Ulasan Buku Tamu Baru
export async function submitGuestbook(entry) {
  const newEntry = {
    id: `gb-${Date.now()}`,
    sender_name: entry.sender_name.trim(),
    sender_role: entry.sender_role,
    sender_institution: entry.sender_institution ? entry.sender_institution.trim() : '',
    message: entry.message.trim(),
    rating: Number(entry.rating) || 5,
    is_approved: true,
    created_at: new Date().toISOString()
  };

  if (!isSupabaseConfigured) {
    mockGuestbook.unshift(newEntry);
    return { success: true, data: newEntry };
  }

  try {
    const { data, error } = await supabase
      .from('guestbook')
      .insert([newEntry])
      .select();
    if (error) {
      mockGuestbook.unshift(newEntry);
      return { success: true, data: newEntry, fallback: true };
    }
    return { success: true, data: data[0] };
  } catch (err) {
    mockGuestbook.unshift(newEntry);
    return { success: true, data: newEntry, fallback: true };
  }
}

// 8. Admin Auth Helpers
export async function loginAdmin(email, password) {
  if (!isSupabaseConfigured) {
    // Mock Login Admin
    if (email === 'admin@untidar.ac.id' && password === 'admin123') {
      const mockSession = {
        user: { email, role: 'authenticated', id: 'mock-admin-id' },
        access_token: 'mock-jwt-token'
      };
      localStorage.setItem('inwesttamp_admin_session', JSON.stringify(mockSession));
      return { success: true, session: mockSession };
    }
    return { success: false, error: 'Email atau kata sandi pengurus tidak sesuai (Default: admin@untidar.ac.id / admin123).' };
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { success: false, error: error.message };
    localStorage.setItem('inwesttamp_admin_session', JSON.stringify(data.session));
    return { success: true, session: data.session };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export async function logoutAdmin() {
  localStorage.removeItem('inwesttamp_admin_session');
  if (isSupabaseConfigured) {
    try {
      await supabase.auth.signOut();
    } catch {
      // ignore
    }
  }
  return { success: true };
}

export function getAdminSession() {
  const stored = localStorage.getItem('inwesttamp_admin_session');
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}
