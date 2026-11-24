import {creatorShot} from '../experience/creator-seat.js';
import * as THREE from 'three';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function setupScroll(camera){
 const shots=[[155,100,200,0,12,15],[32,9,139,-45,4,108],creatorShot,[5,39,-26,0,41,-65],[2,95,7,0,1,0],[-22,11,18,-8,2,-4],[0,12,28,10,2,8],[17,13,17,24,2,-12],[28,12,24,40,2,3],[39,7,16,54,2,0],[30,22,12,0,41,-65]];

 const sections=[...document.querySelectorAll('.chapter')];
 const state={p:0};const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 gsap.to(state,{p:shots.length-1,ease:'none',scrollTrigger:{trigger:'#story',start:'top top',end:'bottom bottom',scrub:reduced?true:.55}});
 return ()=>{
  const p=state.p,i=Math.min(Math.floor(p),shots.length-2),f=reduced?Math.round(p-i):THREE.MathUtils.smoothstep(p-i,0,1);
  const values=shots[i].map((v,k)=>THREE.MathUtils.lerp(v,shots[i+1][k],f));
  camera.position.set(...values.slice(0,3));camera.lookAt(...values.slice(3));
  const pct=Math.round(p*10);document.querySelector('#progress-fill').style.width=pct+'%';document.querySelector('#progress-number').textContent=pct+'%';document.querySelector('#chapter-indicator').textContent=sections[Math.round(p)].dataset.title;return p;
 };
}
