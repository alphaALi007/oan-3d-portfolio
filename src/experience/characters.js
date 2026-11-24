import {creatorSeat} from './creator-seat.js';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Original toy-brick inspired figures, modeled entirely in Three.js.
// No third-party models or trademarked minifigure assets are required.
export function createCharacters(scene, renderer, camera) {
  const root = new THREE.Group();
  scene.add(root);
  const actors = [];
  const animated = [];
  const clickable = [];
  const palette = {
    skin: 0xf4c18e, hair: 0x191923, ink: 0x111b2b,
    home: 0x9d214c, away: 0xf5f5ef, shorts: 0x172b62,
    shoe: 0x11131d, popcorn: 0xffebad,
  };
  const mat = (color, roughness=.47, metalness=0) =>
    new THREE.MeshStandardMaterial({ color, roughness, metalness });
  const shared = {
    head: new THREE.CylinderGeometry(.43,.43,.72,12),
    torso: new THREE.BoxGeometry(.97,1.08,.56),
    leg: new THREE.BoxGeometry(.34,.83,.40),
    arm: new THREE.CylinderGeometry(.20,.22,.84,10),
    hand: new THREE.SphereGeometry(.23,10,7),
    eye: new THREE.SphereGeometry(.055,8,6),
    hair: new THREE.CylinderGeometry(.45,.46,.22,12),
  };
  function mesh(geometry, material, parent, x=0,y=0,z=0) {
    const o=new THREE.Mesh(geometry, material);
    o.position.set(x,y,z); o.castShadow=true; parent.add(o); return o;
  }
  function brickFigure({shirt=palette.home, pants=palette.shorts, skin=palette.skin,
    glasses=false, popcorn=false, seated=false, x=0,y=0,z=0, scale=1, rotate=0}={}) {
    const pivot=new THREE.Group(); pivot.position.set(x,y,z); pivot.rotation.y=rotate; pivot.scale.setScalar(scale); root.add(pivot);
    const clothes=mat(shirt), trousers=mat(pants), flesh=mat(skin), hair=mat(palette.hair), shoes=mat(palette.shoe);
    const torso=mesh(shared.torso,clothes,pivot,0,1.62,0);
    // Near-front is +Z in figure local space.
    const head=mesh(shared.head,flesh,pivot,0,2.66,0);
    mesh(shared.hair,hair,pivot,0,3.11,0);
    const hips=[];
    for(const s of [-1,1]) {
      mesh(shared.eye,shoes,pivot,s*.18,2.71,.42);
      const leg=mesh(shared.leg,trousers,pivot,s*.245,seated?.77:.47,seated?.28:0);
      if(seated){ leg.rotation.x=-Math.PI/2; leg.position.y=.86; leg.position.z=.43; }
      else {
        const hip=new THREE.Group();hip.position.set(s*.245,.91,0);pivot.add(hip);
        hip.add(leg);leg.position.set(0,-.44,0);
        mesh(new THREE.BoxGeometry(.35,.17,.54),shoes,hip,0,-.81,.1);
        hips.push(hip);
      }
    }
    const leftArm=new THREE.Group(); leftArm.position.set(-.68,1.94,0); pivot.add(leftArm);
    const rightArm=new THREE.Group(); rightArm.position.set(.68,1.94,0); pivot.add(rightArm);
    for (const [arm,s] of [[leftArm,-1],[rightArm,1]]) {
      const sleeve=mesh(shared.arm,clothes,arm,0,-.39,0); sleeve.rotation.z=s*.08;
      mesh(shared.hand,flesh,arm,0,-.83,0);
    }
    if(glasses){
      const frame=mat('#111827');
      for(const s of [-1,1]){
        const lens=mesh(new THREE.TorusGeometry(.225,.045,7,14),frame,pivot,s*.235,2.72,.445);
        lens.rotation.x=0;
      }
      mesh(new THREE.BoxGeometry(.14,.045,.06),frame,pivot,0,2.72,.46);
    }
    let bucket;
    if(popcorn){
      bucket=new THREE.Group(); pivot.add(bucket); bucket.position.set(-.78,1.12,.49);
      const red=mat('#da3551'), cream=mat('#fbeccf');
      mesh(new THREE.CylinderGeometry(.39,.28,.66,12),red,bucket,0,0,0);
      for(let i=-1;i<=1;i++)mesh(new THREE.BoxGeometry(.065,.52,.015),cream,bucket,i*.18,0,.33);
      for(let i=0;i<13;i++){
        const angle=i*2.399, r=(i%3)*.1;
        mesh(new THREE.IcosahedronGeometry(.115,0),mat(palette.popcorn),bucket,Math.cos(angle)*r,.39+(i%4)*.03,Math.sin(angle)*r);
      }
      leftArm.rotation.x=-.48;
    }
    return {pivot,head,torso,leftArm,rightArm,bucket,hips};
  }

  // Hero character: seated above the near touchline. Local face turns toward pitch.
  // Keep the procedural spectator visible while the personalized model loads.
  const avatar=brickFigure({shirt:0x1c315e,pants:0x111827,
    glasses:true,popcorn:true,seated:true,x:creatorSeat.x,y:creatorSeat.y-.45,z:creatorSeat.z,
    scale:.52,rotate:creatorSeat.facing});
  // Make the avatar visibly seated on a small premium spectator seat.
  const seatMat=mat(0x142b67);
  const {x, y, z} = creatorSeat;
  mesh(new THREE.BoxGeometry(.78,.10,.66),seatMat,root,x,y-.05,z);
  const chairBack=mesh(new THREE.BoxGeometry(.78,.57,.09),seatMat,root,x,y+.24,z+.31);
  chairBack.rotation.x=.1;
  mesh(new THREE.BoxGeometry(.24,.43,.24),seatMat,root,x,y-.28,z);
  const avatarParts=[];
  avatar.pivot.traverse(o=>{if(o.isMesh) avatarParts.push(o);});
  clickable.push(...avatarParts);

  let mixer, greeting, previousTime;
  const greetButton = document.querySelector('#greet-oan');
  function greet() {
    if (greeting) greeting.reset().play();
  }
  greetButton.addEventListener('click', greet);
  new GLTFLoader().load('/models/Oan-Matchday.glb', asset => {
    const spectator = asset.scene;
    spectator.position.set(x, y, z);
    spectator.rotation.y = creatorSeat.facing;
    spectator.scale.setScalar(creatorSeat.scale);
    root.add(spectator);
    avatar.pivot.visible = false;
    clickable.length = 0;
    spectator.traverse(part => {
      if (part.isMesh) {
        part.castShadow = true;
        clickable.push(part);
      }
    });
    mixer = new THREE.AnimationMixer(spectator);
    const clip = THREE.AnimationClip.findByName(asset.animations, 'Wave');
    if (clip) {
      greeting = mixer.clipAction(clip);
      greeting.setLoop(THREE.LoopOnce, 1);
      greetButton.hidden = false;
    }
  }, undefined, error => console.warn('Spectator model could not load.', error));

  // Players: toy-brick home and away kits. Exaggerated proportions read clearly at a distance.
  const playerLocations=[
    [-33,-9,0],[-20,13,0],[-8,-4,0],[10,8,0],[24,-12,0],[36,5,0],
    [-35,15,1],[-18,-14,1],[0,16,1],[22,12,1],[39,-6,1]
  ];
  playerLocations.forEach(([x,z,team],i)=>{
    const player=brickFigure({shirt:team?palette.away:palette.home,
      pants:team?0x404959:palette.shorts,x,y:1.25,z,scale:1.05,
      rotate:team?Math.PI/2:-Math.PI/2});
    // Footballer numbers on the shirt, using a simple accent plate.
    const stripe=mesh(new THREE.BoxGeometry(.56,.12,.035),
      mat(team?0x4668bc:0xf6f4f0),player.pivot,0,1.76,.301);
    animated.push({player,baseX:x,baseZ:z,phase:i*1.1,team});
  });
  const football=new THREE.Group(); root.add(football);
  football.position.set(-6,1.51,-3);
  const ball=mesh(new THREE.SphereGeometry(.58,16,12),mat(0xfafafa),football);
  for(let j=0;j<6;j++){
    const patch=mesh(new THREE.IcosahedronGeometry(.16,0),mat(0x17223b),football,
      Math.cos(j*Math.PI/3)*.52,Math.sin(j*2.1)*.18,Math.sin(j*Math.PI/3)*.52);
    patch.lookAt(0,0,0);
  }

  // Dedicated 3D pointer raycast. Works even though the WebGL canvas is behind HTML overlays.
  const raycaster=new THREE.Raycaster(), pointer=new THREE.Vector2();
  let hover=false, inCreatorShot=false;
  const hint=document.getElementById('avatar-hint');
  function hitsAvatar(event) {
    if (!inCreatorShot || !greeting || event.target?.closest?.('button, a, nav, dialog, summary')) return false;
    pointer.set(event.clientX / innerWidth * 2 - 1, 1 - event.clientY / innerHeight * 2);
    raycaster.setFromCamera(pointer, camera);
    return raycaster.intersectObjects(clickable, false).length > 0;
  }
  function setHover(value) {
    if (value === hover) return;
    hover = value;
    document.body.classList.toggle('avatar-hover',hover);
    hint?.classList.toggle('visible',hover);
  }
  function onPointerMove(event) {
    if (event.pointerType !== 'touch') setHover(hitsAvatar(event));
  }
  function onClick(event) {
    if (hitsAvatar(event)) greet();
  }
  window.addEventListener('pointermove',onPointerMove,{passive:true});
  window.addEventListener('click',onClick);
  function update(t,progress=0){
    inCreatorShot = Math.abs(progress-2) < .5;
    if (!inCreatorShot) setHover(false);
    mixer?.update(previousTime === undefined ? 0 : Math.min(.1, t - previousTime));
    previousTime = t;
    // Wave when hovered; otherwise the avatar casually gestures while watching the match.
    const wave=hover? -2.4+Math.sin(t*9)*.27 : -.08+Math.sin(t*1.4)*.06;
    avatar.rightArm.rotation.z=THREE.MathUtils.lerp(avatar.rightArm.rotation.z,wave,.12);
    avatar.head.rotation.y=THREE.MathUtils.lerp(avatar.head.rotation.y,hover?-.55:0,.08);
    avatar.bucket.rotation.z=Math.sin(t*1.3)*.025;
    const route=[0,2,3,4,5];
    const stage=Math.min(4,Math.max(0,Math.floor(progress-4)));
    const passer=animated[route[stage]], receiver=animated[route[stage+1]];
    const targetX=receiver?.baseX??56, targetZ=receiver?.baseZ??0;
    const heading=Math.atan2(targetX-passer.baseX,targetZ-passer.baseZ);
    const dx=Math.sin(heading), dz=Math.cos(heading);
    // Replay each featured pass while the visitor reads its project card.
    const beat=progress>=9?1:(t%4)/4;
    const release=.43, arrival=.83;
    const flight=THREE.MathUtils.smoothstep(beat,release,arrival);
    const startX=passer.baseX+dx*.92,startZ=passer.baseZ+dz*.92;
    football.position.set(THREE.MathUtils.lerp(startX,targetX-dx*.85,flight),
      1.75+Math.sin(flight*Math.PI)*(receiver ? .55 : 1.6),
      THREE.MathUtils.lerp(startZ,targetZ-dz*.85,flight));
    football.rotation.x=-flight*16;
    for(const runner of animated){
      const {player,baseX,baseZ,phase}=runner;
      let x=baseX,z=baseZ,yaw=heading;
      let stride=Math.sin(t*8+phase);
      if(runner===passer){
        const run=1-THREE.MathUtils.smoothstep(beat,0,release);
        x-=dx*4*run;z-=dz*4*run;stride*=run;
      }else if(runner===receiver){
        const run=1-THREE.MathUtils.smoothstep(beat,.15,arrival);
        x+=dx*3*run;z+=dz*3*run;yaw=heading+Math.PI;stride*=run;
      }else{
        const phaseTime=t*.68+phase;
        x+=2.8*Math.sin(phaseTime);z+=1.8*Math.cos(phaseTime);
        yaw=Math.atan2(2.8*Math.cos(phaseTime),-1.8*Math.sin(phaseTime));
      }
      player.pivot.position.set(x,1.2+.095*Math.abs(stride),z);
      player.pivot.rotation.y=yaw;
      player.hips[0].rotation.x=stride*.72;
      player.hips[1].rotation.x=-stride*.72;
      player.leftArm.rotation.x=-stride*.55;player.rightArm.rotation.x=stride*.55;
      if(runner===passer){
        const windup=Math.exp(-((beat-.355)**2)/.0015);
        const kick=Math.exp(-((beat-release)**2)/.0013);
        player.hips[1].rotation.x+=.72*windup-1.05*kick;
      }
    }
  }
  update(0);
  return {root,avatar,football,update,dispose(){window.removeEventListener('pointermove',onPointerMove);window.removeEventListener('click',onClick);greetButton.removeEventListener('click',greet);}};
}
