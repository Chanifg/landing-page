import { spotsData } from './spotsData.js';

let viewer = null;
let currentSpot = spotsData[0];
let isGyroActive = false;
let isAutoRotating = true;

/**
 * Initialize 360 Panorama Viewer and Navigators
 */
export function init360Viewer() {
  const container = document.getElementById('panorama-container');
  if (!container) return;

  // 1. Render Spot Thumbnail Cards
  renderSpotThumbnails();

  // 2. Render Village Mini-Map Pins
  renderMiniMapPins();

  // 3. Initialize Pannellum
  try {
    // Check if pannellum is globally available via vendor script or npm
    const pnlm = window.pannellum;
    if (pnlm) {
      viewer = pnlm.viewer('panorama-container', {
        type: 'equirectangular',
        panorama: currentSpot.image,
        autoLoad: true,
        autoRotate: -2,
        showZoomCtrl: false,
        showFullscreenCtrl: false,
        mouseZoom: true,
        compass: false,
        hfov: 100,
        minHfov: 50,
        maxHfov: 120,
        pitch: -5,
        yaw: 0
      });

      viewer.on('load', () => {
        updateSpotInfo(currentSpot);
      });
    } else {
      console.warn('Pannellum not found in window, fallback to image preview');
    }
  } catch (err) {
    console.error('Error initializing Pannellum:', err);
  }

  // 4. Setup Control Event Listeners
  setupControls();

  // 5. Update initial info
  updateSpotInfo(currentSpot);
}

/**
 * Render Spot Thumbnail Buttons
 */
function renderSpotThumbnails() {
  const track = document.getElementById('spot-thumbnails-track');
  if (!track) return;

  track.innerHTML = spotsData.map((spot, index) => `
    <button class="spot-card-btn ${spot.id === currentSpot.id ? 'active' : ''}" 
            data-spot-id="${spot.id}"
            id="spot-card-${spot.id}"
            aria-label="Pilih destinasi ${spot.name}">
      <div class="spot-card-preview" style="background-image: url('${spot.thumbnail}');">
        <span class="spot-card-number">Spot 0${index + 1}</span>
        <span class="spot-card-badge">${spot.isAvailable ? '360 Aktif' : 'Segera Hadir'}</span>
      </div>
      <div class="spot-card-info">
        <h4>${spot.name}</h4>
        <span>${spot.dusun}</span>
      </div>
    </button>
  `).join('');

  // Add click handlers
  track.querySelectorAll('.spot-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const spotId = btn.dataset.spotId;
      switchSpot(spotId);
    });
  });
}

/**
 * Render Pins in the Village Mini-Map
 */
function renderMiniMapPins() {
  const mapCanvas = document.getElementById('village-map-canvas');
  if (!mapCanvas) return;

  mapCanvas.innerHTML = `
    <!-- Topographic & River Paths SVG -->
    <svg style="position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.25; pointer-events: none;" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0,40 Q25,30 50,60 T100,70" fill="none" stroke="#0284C7" stroke-width="4" />
      <path d="M10,10 Q50,40 90,20" fill="none" stroke="#2D6A4F" stroke-width="1.5" stroke-dasharray="3,3" />
      <path d="M10,80 Q40,60 80,90" fill="none" stroke="#2D6A4F" stroke-width="1.5" stroke-dasharray="3,3" />
    </svg>
  ` + spotsData.map((spot, idx) => `
    <div class="map-pin ${spot.id === currentSpot.id ? 'active' : ''}" 
         id="map-pin-${spot.id}"
         data-spot-id="${spot.id}"
         style="left: ${spot.coordinates.x}%; top: ${spot.coordinates.y}%;">
      <div class="map-pin-icon">${idx + 1}</div>
      <div class="map-pin-label">${spot.name}</div>
    </div>
  `).join('');

  mapCanvas.querySelectorAll('.map-pin').forEach(pin => {
    pin.addEventListener('click', () => {
      const spotId = pin.dataset.spotId;
      switchSpot(spotId);
      closeMiniMap();
    });
  });
}

/**
 * Switch Active 360 Spot
 */
export function switchSpot(spotId) {
  const spot = spotsData.find(s => s.id === spotId);
  if (!spot) return;

  currentSpot = spot;

  // Load in Pannellum
  if (viewer) {
    viewer.loadScene ? viewer.loadScene(spot.id) : null;
    try {
      // Re-load image into viewer
      const container = document.getElementById('panorama-container');
      container.style.opacity = '0.3';
      container.style.transition = 'opacity 250ms ease';
      
      setTimeout(() => {
        viewer.destroy();
        const pnlm = window.pannellum;
        viewer = pnlm.viewer('panorama-container', {
          type: 'equirectangular',
          panorama: spot.image,
          autoLoad: true,
          autoRotate: isAutoRotating ? -2 : 0,
          showZoomCtrl: false,
          showFullscreenCtrl: false,
          mouseZoom: true,
          compass: false,
          hfov: 100,
          minHfov: 50,
          maxHfov: 120,
          pitch: -5,
          yaw: 0
        });

        viewer.on('load', () => {
          container.style.opacity = '1';
        });

        if (isGyroActive) {
          viewer.startOrientation();
        }
      }, 200);
    } catch (e) {
      console.warn('Viewer reload fallback:', e);
    }
  }

  // Update Thumbnail Active States
  document.querySelectorAll('.spot-card-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.spotId === spotId);
  });

  // Update Map Pin Active States
  document.querySelectorAll('.map-pin').forEach(pin => {
    pin.classList.toggle('active', pin.dataset.spotId === spotId);
  });

  // Update Information Details
  updateSpotInfo(spot);

  // Scroll active card into view within horizontal slider
  const activeCard = document.getElementById(`spot-card-${spotId}`);
  if (activeCard) {
    activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

/**
 * Update Spot Info Elements
 */
function updateSpotInfo(spot) {
  const titleEl = document.getElementById('current-spot-title');
  const dusunEl = document.getElementById('current-spot-dusun');
  const pillarTagEl = document.getElementById('current-spot-pillar-tag');
  const descEl = document.getElementById('current-spot-description');
  const highlightsEl = document.getElementById('current-spot-highlights');
  const topOverlayName = document.getElementById('overlay-spot-name');
  const topOverlayPillar = document.getElementById('overlay-spot-pillar');

  if (titleEl) titleEl.textContent = spot.name;
  if (dusunEl) dusunEl.textContent = spot.dusun;
  if (pillarTagEl) {
    pillarTagEl.textContent = spot.pillarName;
    pillarTagEl.style.backgroundColor = spot.pillarColor;
  }
  if (topOverlayName) topOverlayName.textContent = spot.name;
  if (topOverlayPillar) {
    topOverlayPillar.textContent = spot.pillarName;
    topOverlayPillar.style.backgroundColor = spot.pillarColor;
  }
  if (descEl) descEl.textContent = spot.description;

  if (highlightsEl) {
    highlightsEl.innerHTML = spot.highlights.map(h => 
      `<span class="highlight-tag">✓ ${h}</span>`
    ).join('');
  }
}

/**
 * Setup Control Buttons
 */
function setupControls() {
  // Zoom Controls
  const zoomInBtn = document.getElementById('btn-zoom-in');
  const zoomOutBtn = document.getElementById('btn-zoom-out');
  const fullscreenBtn = document.getElementById('btn-fullscreen');
  const autoRotateBtn = document.getElementById('btn-autorotate');
  const gyroBtn = document.getElementById('btn-gyro');
  const mapBtn = document.getElementById('btn-open-map');
  const modal = document.getElementById('minimap-modal');
  const closeMapBtn = document.getElementById('btn-close-map');

  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      if (viewer) viewer.setHfov(Math.max(50, viewer.getHfov() - 15));
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      if (viewer) viewer.setHfov(Math.min(120, viewer.getHfov() + 15));
    });
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      if (viewer) viewer.toggleFullscreen();
    });
  }

  if (autoRotateBtn) {
    autoRotateBtn.addEventListener('click', () => {
      isAutoRotating = !isAutoRotating;
      autoRotateBtn.classList.toggle('active', isAutoRotating);
      if (viewer) {
        viewer.setAutoRotate(isAutoRotating ? -2 : 0);
      }
    });
  }

  if (gyroBtn) {
    gyroBtn.addEventListener('click', toggleGyroscope);
  }

  if (mapBtn) {
    mapBtn.addEventListener('click', openMiniMap);
  }

  if (closeMapBtn) {
    closeMapBtn.addEventListener('click', closeMiniMap);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeMiniMap();
    });
  }
}

/**
 * Toggle Gyroscope (Device Orientation)
 */
export function toggleGyroscope() {
  const gyroBtn = document.getElementById('btn-gyro');
  if (!viewer) return;

  if (!isGyroActive) {
    // Request permission for iOS 13+ devices
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            enableGyro(gyroBtn);
          } else {
            alert('Akses sensor orientasi ditolak.');
          }
        })
        .catch(err => {
          console.warn('DeviceOrientation error:', err);
          enableGyro(gyroBtn);
        });
    } else {
      // Non-iOS or standard devices
      enableGyro(gyroBtn);
    }
  } else {
    disableGyro(gyroBtn);
  }
}

function enableGyro(btn) {
  isGyroActive = true;
  if (viewer) viewer.startOrientation();
  if (btn) {
    btn.classList.add('active');
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"/></svg>
      <span>Sensor HP: AKTIF</span>
    `;
  }
}

function disableGyro(btn) {
  isGyroActive = false;
  if (viewer) viewer.stopOrientation();
  if (btn) {
    btn.classList.remove('active');
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
      <span>Aktifkan Sensor HP (Gyro)</span>
    `;
  }
}

function openMiniMap() {
  const modal = document.getElementById('minimap-modal');
  if (modal) modal.classList.add('show');
}

function closeMiniMap() {
  const modal = document.getElementById('minimap-modal');
  if (modal) modal.classList.remove('show');
}
