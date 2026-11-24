import * as THREE from 'three';

/** Match-day color grading: affects the real 3D scene as well as the UI.
 * Animation is frame-rate independent and does not alter the ScrollTrigger camera.
 */
export function createMatchTheme({ scene, renderer, stadium, city, moon }) {
  const night = {
    sky: '#080e20', fog: '#080e20', exposure: 1.45,
    hemiSky: '#b6d9ff', hemiGround: '#263446', hemi: 1.0,
    sun: '#d2e4ff', sunIntensity: 1.0, sunPosition: [-100, 150, 80],
    stadiumSpots: 650, pointFactor: 1,
    emissiveFactor: 1, overlay: 1
  };
  const day = {
    sky: '#8dbde8', fog: '#b6d5eb', exposure: 1.12,
    hemiSky: '#fff4de', hemiGround: '#798c72', hemi: 1.8,
    sun: '#fff1d5', sunIntensity: 5.1, sunPosition: [130, 220, -110],
    stadiumSpots: 0, pointFactor: 0.03,
    emissiveFactor: 0.12, overlay: 0
  };

  // Older stadium code already installed a hemisphere light: reuse it.
  const hemisphere = scene.children.find(item => item.isHemisphereLight);
  const spots = [];
  const points = [];
  const emissive = new Map();
  const tracked = new Set();
  scene.traverse(obj => {
    if (obj.isSpotLight) spots.push({light: obj, intensity: obj.intensity});
    if (obj.isPointLight) points.push({light: obj, intensity: obj.intensity});
    if (!obj.isMesh && !obj.isInstancedMesh) return;
    for (const m of Array.isArray(obj.material) ? obj.material : [obj.material]) {
      if (!m || tracked.has(m)) continue;
      tracked.add(m);
      if (m.emissive && m.emissiveIntensity > 0) emissive.set(m, m.emissiveIntensity);
    }
  });

  const button = document.querySelector('#theme-toggle');
  const text = document.querySelector('#theme-text');
  const icon = document.querySelector('#theme-icon');
  const label = document.querySelector('#match-label');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const skyColor = new THREE.Color();
  const fogColor = new THREE.Color();
  const hemiSkyColor = new THREE.Color();
  const hemiGroundColor = new THREE.Color();
  const sunColor = new THREE.Color();
  const sunPosition = new THREE.Vector3();

  let saved = 'night';
  try { saved = localStorage.getItem('oan-match-theme') === 'day' ? 'day' : 'night'; }
  catch { /* localStorage unavailable */ }
  let blend = saved === 'day' ? 1 : 0;
  let goal = blend;

  function updateLabels() {
    const isDay = goal === 1;
    document.body.classList.toggle('day-match', isDay);
    button.setAttribute('aria-pressed', String(isDay));
    button.setAttribute('aria-label', isDay ? 'Switch to night match' : 'Switch to daytime match');
    text.textContent = isDay ? 'NIGHT MATCH' : 'DAY MATCH';
    icon.textContent = isDay ? '☾' : '☀';
    label.textContent = isDay ? 'MATCH DAY' : 'MATCH NIGHT';
    if (metaTheme) metaTheme.content = isDay ? '#a6cce9' : '#05091a';
  }

  function setTheme(mode) {
    goal = mode === 'day' ? 1 : 0;
    updateLabels();
    try { localStorage.setItem('oan-match-theme', mode); }
    catch { /* storage optional */ }
  }

  button.addEventListener('click', () => setTheme(goal ? 'night' : 'day'));

  let previous = performance.now();
  function update() {
    const now = performance.now();
    const dt = Math.min((now - previous) / 1000, 0.06);
    previous = now;
    // Ease to the requested daylight level in ~1 second.
    blend += (goal - blend) * (1 - Math.exp(-dt * 4.5));
    if (Math.abs(goal - blend) < 0.0005) blend = goal;
    const t = blend;
    const lerp = THREE.MathUtils.lerp;
    scene.background.copy(skyColor.set(night.sky).lerp(new THREE.Color(day.sky), t));
    if (scene.fog) scene.fog.color.copy(fogColor.set(night.fog).lerp(new THREE.Color(day.fog), t));
    renderer.toneMappingExposure = lerp(night.exposure, day.exposure, t);
    if (hemisphere) {
      hemisphere.color.copy(hemiSkyColor.set(night.hemiSky).lerp(new THREE.Color(day.hemiSky), t));
      hemisphere.groundColor.copy(hemiGroundColor.set(night.hemiGround).lerp(new THREE.Color(day.hemiGround), t));
      hemisphere.intensity = lerp(night.hemi, day.hemi, t);
    }
    moon.color.copy(sunColor.set(night.sun).lerp(new THREE.Color(day.sun), t));
    moon.intensity = lerp(night.sunIntensity, day.sunIntensity, t);
    sunPosition.set(...night.sunPosition).lerp(new THREE.Vector3(...day.sunPosition), t);
    moon.position.copy(sunPosition);
    for (const {light, intensity} of spots) light.intensity = intensity * (1-t);
    for (const {light, intensity} of points) light.intensity = intensity * lerp(1, day.pointFactor, t);
    for (const [mat, original] of emissive) mat.emissiveIntensity = original * lerp(1, day.emissiveFactor, t);
    document.documentElement.style.setProperty('--day-blend', t.toFixed(3));
  }

  updateLabels();
  update();
  return {update, setTheme};
}
