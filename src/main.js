import './gallery.js';
import {batchArchitecture} from './experience/batch.js';
import './panels.js';
import * as THREE from 'three';
import { createStadium } from './experience/stadium.js';
import { createCity } from './experience/city.js';
import { createCharacters } from './experience/characters.js';
import { setupScroll } from './animations/scroll.js';
import { createMatchTheme } from './experience/theme.js';
import './styles/style.css';

const scene=new THREE.Scene();scene.background=new THREE.Color('#080e20');scene.fog=new THREE.FogExp2('#080e20',.00155);
const camera=new THREE.PerspectiveCamera(48,innerWidth/innerHeight,.1,1400);
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
renderer.setSize(innerWidth,innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.25;
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
document.getElementById('experience').appendChild(renderer.domElement);
scene.add(new THREE.HemisphereLight('#b6d9ff','#263446',3.25));
const moon=new THREE.DirectionalLight('#d2e4ff',3.5);moon.position.set(-100,150,80);moon.castShadow=true;moon.shadow.mapSize.set(2048,2048);moon.shadow.camera.left=-150;moon.shadow.camera.right=150;moon.shadow.camera.top=150;moon.shadow.camera.bottom=-150;moon.shadow.bias=-0.00015;scene.add(moon);
const stadium=createStadium(scene);
const city=createCity(scene);
batchArchitecture(city.root);batchArchitecture(stadium.root);
const characters=createCharacters(scene,renderer,camera);
const direct=setupScroll(camera);
const theme = createMatchTheme({scene, renderer, stadium, city, moon});
const clock=new THREE.Clock();
function frame(){requestAnimationFrame(frame);const elapsed=clock.getElapsedTime();city.update(elapsed);stadium.update(elapsed);const progress=direct();characters.update(elapsed,progress);theme.update();stadium.display(progress);renderer.render(scene,camera);}frame();
window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));});

if(new URLSearchParams(location.search).has('promo')){
  const start=performance.now();
  function play(now){
    const progress=Math.min(1,(now-start)/45000);
    window.scrollTo({top:progress*(document.documentElement.scrollHeight-innerHeight),behavior:"instant"});
    if(progress<1)requestAnimationFrame(play);
  }
  requestAnimationFrame(play);
}
