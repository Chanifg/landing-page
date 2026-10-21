import React, { useState, useEffect, useCallback } from 'react';
import { getDestinations, getPillars, getDocumentation } from '../lib/supabase.js';
import { siteImages } from '../data/siteImages.js';

// Editorial Redesign Sections
import HeroSection from '../components/sections/HeroSection.jsx';
import NarrativeSection from '../components/sections/NarrativeSection.jsx';
import PillarsSection from '../components/sections/PillarsSection.jsx';
import VirtualTourSection from '../components/sections/VirtualTourSection.jsx';
import GallerySection from '../components/sections/GallerySection.jsx';
import TeamSection from '../components/sections/TeamSection.jsx';

// Shared Modals
import VillageMapModal from '../components/viewer/VillageMapModal.jsx';
import LightboxModal from '../components/shared/LightboxModal.jsx';

export default function HomePage() {
  const [spots, setSpots] = useState([]);
  const [activeSpot, setActiveSpot] = useState(null);
  const [pillars, setPillars] = useState([]);
  const [photos, setPhotos] = useState([]);

  // Modals state
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    async function loadData() {
      const [destData, pillarData, docData] = await Promise.all([
        getDestinations(),
        getPillars(),
        getDocumentation()
      ]);

      setSpots(destData || []);
      if (destData && destData.length > 0) {
        setActiveSpot(destData[0]);
      }
      setPillars(pillarData || []);
      setPhotos(docData || []);
    }
    loadData();
  }, []);

  // Global Escape key handler
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsMapOpen(false);
      setLightboxIndex(null);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleExploreTour = () => {
    const el = document.getElementById('tur-360');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Lightbox photos array from centralized gallery
  const lightboxPhotos = siteImages.gallery.map(item => ({
    image_url: item.src,
    title: item.title,
    caption: item.caption,
    pillar_id: item.tag
  }));

  return (
    <div className="single-page-layout">
      {/* 1. Hero Section & Floating Stats Card */}
      <HeroSection onExploreTour={handleExploreTour} />

      {/* 2. Narrative Section (Latar Belakang & 3 Foto Potensi) */}
      <NarrativeSection />

      {/* 3. 4 Pilar Intervensi (Accordion Interaktif & Showcase Visual) */}
      <PillarsSection pillars={pillars} />

      {/* 4. Tur Virtual Paket Wisata Terpadu (360° Hub) */}
      <VirtualTourSection 
        spots={spots} 
        activeSpot={activeSpot} 
        onSpotChange={setActiveSpot} 
        onOpenMap={() => setIsMapOpen(true)} 
      />

      {/* 5. Bento Grid Galeri Dokumentasi Lapangan */}
      <GallerySection 
        photos={photos} 
        onSelectPhoto={(idx) => setLightboxIndex(idx)} 
      />

      {/* 6. Tim 15 Mahasiswa Pelaksana & Banner DPL */}
      <TeamSection />

      {/* Modals */}
      <VillageMapModal 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)} 
        spots={spots} 
        activeSpot={activeSpot} 
        onSelectSpot={setActiveSpot} 
      />

      <LightboxModal 
        isOpen={lightboxIndex !== null} 
        photos={lightboxPhotos} 
        currentIndex={lightboxIndex || 0} 
        onNavigate={(newIdx) => setLightboxIndex(newIdx)} 
        onClose={() => setLightboxIndex(null)} 
      />
    </div>
  );
}
