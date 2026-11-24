import {creatorSeat} from './creator-seat.js';
import { supporterFlags } from './supporters.js';
import * as THREE from 'three';

export function createStadium(scene) {
  const root = new THREE.Group(); scene.add(root);
  const m = (c, emissive = 0) => new THREE.MeshStandardMaterial({color:c,roughness:.78,metalness:.08,emissive:c,emissiveIntensity:emissive});
  const charcoal=m('#101a31'), concrete=m('#23304a'), stone=m('#39445e'), metal=m('#53657e',.02);
  const blue=m('#173577'), blueLight=m('#284f9a'), teal=m('#183f4c'), turf=m('#087642'), stripe=m('#11874b'), white=m('#eaf6f5',.25);
  const led=m('#478ff9',1.4), softLed=m('#9ac7ff',1.9), gold=m('#f5c773',1.5);
  // Fine grass grain in the pitch surface, generated locally so the build stays self-contained.
  const grassCanvas=document.createElement('canvas');grassCanvas.width=grassCanvas.height=512;const grassCtx=grassCanvas.getContext('2d');
  grassCtx.fillStyle='#187844';grassCtx.fillRect(0,0,512,512);let grassSeed=741;
  for(let i=0;i<18000;i++){grassSeed=(grassSeed*16807)%2147483647;const x=grassSeed%512;grassSeed=(grassSeed*16807)%2147483647;const y=grassSeed%512;grassCtx.fillStyle=(grassSeed%2?'rgba(183,220,139,.10)':'rgba(2,38,25,.12)');grassCtx.fillRect(x,y,1+(grassSeed%3),1);}
  const grassTexture=new THREE.CanvasTexture(grassCanvas);grassTexture.colorSpace=THREE.SRGBColorSpace;grassTexture.wrapS=grassTexture.wrapT=THREE.RepeatWrapping;grassTexture.repeat.set(12,8);grassTexture.anisotropy=4;
  const grassMat=new THREE.MeshStandardMaterial({map:grassTexture,color:'#b5d4ad',roughness:.96});
  function box(w,h,d,x,y,z,mat,parent=root){const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);o.position.set(x,y,z);o.receiveShadow=true;parent.add(o);return o;}
  // Massive sculpted plinth + entrance terraces. Entire field is inside the stadium footprint.
  box(209,3.1,172,0,-1.75,0,charcoal);
  box(191,1.0,155,0,.1,0,concrete);
  box(119,.35,78,0,.95,0,turf);
  const grassSurface=new THREE.Mesh(new THREE.PlaneGeometry(119,78),grassMat);grassSurface.rotation.x=-Math.PI/2;grassSurface.position.y=1.129;grassSurface.receiveShadow=true;root.add(grassSurface);
  for(let i=0;i<10;i++)if(i%2===0)box(11.8,.018,77,-53.1+i*11.8,1.14,0,stripe);
  const lineY=1.168;
  function segment(x1,z1,x2,z2,material=white){const points=[new THREE.Vector3(x1,lineY,z1),new THREE.Vector3(x2,lineY,z2)];root.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineBasicMaterial({color:material.color})));}
  segment(-54,-34,54,-34);segment(54,-34,54,34);segment(54,34,-54,34);segment(-54,34,-54,-34);segment(0,-34,0,34);
  function rectangle(minx,maxx,minz,maxz){segment(minx,minz,maxx,minz);segment(maxx,minz,maxx,maxz);segment(maxx,maxz,minx,maxz);segment(minx,maxz,minx,minz);}
  for(const sign of [-1,1]){rectangle(Math.min(sign*54,sign*38),Math.max(sign*54,sign*38),-20,20);rectangle(Math.min(sign*54,sign*49),Math.max(sign*54,sign*49),-9,9);}
  const circlePts=[];for(let i=0;i<=96;i++){const a=i/96*Math.PI*2;circlePts.push(new THREE.Vector3(Math.cos(a)*9.15,lineY,Math.sin(a)*9.15));}root.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(circlePts),new THREE.LineBasicMaterial({color:'#e5f4e9'})));
  // Goals with visible net grid.
  const netMat=new THREE.LineBasicMaterial({color:'#a9bfd9',transparent:true,opacity:.3});
  for(const sign of [-1,1]){
    const x=sign*54, rear=x+sign*4;
    box(.18,2.65,.18,x,2.5,-3.66,white);box(.18,2.65,.18,x,2.5,3.66,white);box(.18,.17,7.5,x,3.82,0,white);
    box(.11,.13,7.5,rear,3.82,0,metal);
    for(let z=-3.65;z<=3.66;z+=.32){const pts=[new THREE.Vector3(x,3.8,z),new THREE.Vector3(rear,3.8,z),new THREE.Vector3(rear,1.2,z)];root.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),netMat));}
    for(let y=1.2;y<3.8;y+=.32){root.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(rear,y,-3.66),new THREE.Vector3(rear,y,3.66)]),netMat));}
  }
  // Stands: continuous rising rows with high contrast gangways.
  const rows=14;const crowdSites=[];
  for(let i=0;i<rows;i++){
    const y=1.45+i*1.43, dz=40+i*2.13, dx=62+i*2.23;
    const choice=(i%3===0?blueLight:i%3===1?blue:charcoal);
    for(const side of [-1,1]){
      box(dx*2,1.32,2.12,0,y,side*dz,choice);
      box(2.13,1.32,dz*2,side*dx,y,0,choice);
      // Stylish gaps in crowds at stair aisles.
      for(let x=-dx+4;x<dx-4;x+=1.35){if([-42,0,42].some(a=>Math.abs(a-x)<2.6))continue;crowdSites.push([x,y+1.18,side*dz,side>0?Math.PI:0]);}
      for(let z=-dz+4;z<dz-4;z+=1.4){if(Math.abs(z)<2.8)continue;crowdSites.push([side*dx,y+1.18,z,side>0?-Math.PI/2:Math.PI/2]);}
    }
    if(i===4||i===10){for(const sign of [-1,1]){
      box(dx*2,1,1.25,0,y+1.4,sign*(dz+1.1),led);
      box(1.25,1,dz*2,sign*(dx+1.1),y+1.4,led);
    }}
  }
  // 2-tier external structural bowl conceals exposed box ends.
  for(const s of [-1,1]){
    box(207,21,3.8,0,8.5,s*83,concrete);
    box(3.8,21,164,s*101,8.5,0,concrete);
    box(211,1.5,4.5,0,20,s*84,metal);
    box(4.5,1.5,168,s*102,20,0,metal);
    // Large architectural blue ribbons.
    box(207,.72,.35,0,15.8,s*85,led);
    box(.35,.72,164,s*103,15.8,0,led);
    box(207,.27,.45,0,4,s*85,softLed);
    box(.45,.27,164,s*103,4,0,softLed);
  }
  // Swept elliptical tensile roof with radial steel trusses.
  const steel=m('#79848b'), membrane=m('#dcdacb'); membrane.side=THREE.DoubleSide;
  const sections=96, vertices=[], indices=[], struts=[];
  const rim=(angle,outer,drop=0)=>new THREE.Vector3(
    (outer?128:96)*Math.sign(Math.cos(angle))*Math.pow(Math.abs(Math.cos(angle)),.57),
    30+6*Math.cos(2*angle)+(outer?4:0)-drop,
    (outer?102:72)*Math.sign(Math.sin(angle))*Math.pow(Math.abs(Math.sin(angle)),.57));
  for(let i=0;i<=sections;i++){
    const angle=i*2*Math.PI/sections;
    const inside=rim(angle,false), outside=rim(angle,true);
    vertices.push(...inside.toArray(),...outside.toArray());
    if(i===sections)break;
    const n=i*2, next=(i+1)*2*Math.PI/sections;
    indices.push(n,n+1,n+2,n+1,n+3,n+2);
    struts.push(inside,outside,rim(angle,false,2),outside,inside,rim(next,false),rim(angle,false,2),rim(next,false,2),rim(angle,false,2),rim(next,false));
    if(i%3===0)struts.push(outside,new THREE.Vector3(outside.x*.84,0,outside.z*.84));
  }
  const roofGeo=new THREE.BufferGeometry();roofGeo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));roofGeo.setIndex(indices);roofGeo.computeVertexNormals();
  const canopy=new THREE.Mesh(roofGeo,membrane);canopy.castShadow=true;root.add(canopy);
  const axis=new THREE.Vector3(0,1,0), dummy=new THREE.Object3D();
  const pipes=new THREE.InstancedMesh(new THREE.CylinderGeometry(.22,.22,1,8),steel,struts.length/2);
  for(let i=0;i<struts.length;i+=2){const start=struts[i],end=struts[i+1],dir=end.clone().sub(start);dummy.position.copy(start).lerp(end,.5);dummy.scale.set(1,dir.length(),1);dummy.quaternion.setFromUnitVectors(axis,dir.normalize());dummy.updateMatrix();pipes.setMatrixAt(i/2,dummy.matrix);}
  root.add(pipes);
  // Reserve the nearest seat in this row; all other fans use the stadium crowd.
  const rowSeats = crowdSites.filter(site => Math.abs(site[2] - creatorSeat.z) < .1);
  const reserved = rowSeats.reduce((best, site) =>
    Math.abs(site[0] - creatorSeat.x) < Math.abs(best[0] - creatorSeat.x) ? site : best);
  crowdSites.splice(crowdSites.indexOf(reserved), 1);
  const chairs=new THREE.InstancedMesh(new THREE.BoxGeometry(.95,.55,.2),blue,crowdSites.length);
  crowdSites.forEach(([x,y,z,r],i)=>{dummy.position.set(x-Math.sin(r)*.32,y+.1,z-Math.cos(r)*.32);dummy.rotation.set(-.12,r,0);dummy.scale.setScalar(1);dummy.updateMatrix();chairs.setMatrixAt(i,dummy.matrix);});root.add(chairs);
  for(const x of [-54,54])for(const z of [-34,34]){
    box(.065,1.55,.065,x,1.93,z,white);
    const flag=new THREE.Mesh(new THREE.PlaneGeometry(.53,.35),gold);gold.side=THREE.DoubleSide;flag.position.set(x+.265,2.55,z);root.add(flag);
  }
  for(const x of [-13,13]){
    box(10,.15,2.5,x,1.22,37,concrete);
    box(10,.12,2.6,x,3.65,37,metal);
    for(const side of [-1,1])box(.12,2.4,2.5,x+side*5,2.43,37,metal);
    for(let j=-4;j<=4;j++){box(.83,.15,.8,x+j,1.85,37,blue);box(.83,.75,.12,x+j,2.15,37.4,blueLight);}
  }
  // Atmospheric large upper windows on external shell.
  for(let x=-85;x<=85;x+=11.5){box(5.7,6.2,.18,x,9.7,-85.12,teal);}
  for(let z=-69;z<=69;z+=13){box(.18,5.5,6.1,-103.1,9.7,z,teal);box(.18,5.5,6.1,103.1,9.7,z,teal);}
  // Stadium crowd via two instanced pieces (body + head), with distinct team colors.
  const count=crowdSites.length;const jerseys=new THREE.InstancedMesh(new THREE.CapsuleGeometry(.25,.43,3,7),new THREE.MeshStandardMaterial({roughness:.92}),count);
  const heads=new THREE.InstancedMesh(new THREE.SphereGeometry(.205,9,7),m('#c99a79'),count);
  jerseys.frustumCulled=false;heads.frustumCulled=false;
  const shades=['#d7d6cb','#dce1e8','#3474b8','#31549c','#7a9bb9','#b79470','#1b3151','#17263d','#8f3f3c','#7b8656'];
  const tmp=new THREE.Object3D();
  crowdSites.forEach(([x,y,z,r],i)=>{
    tmp.position.set(x,y+.35,z);tmp.rotation.set(0,r,0);tmp.scale.set(.95,.82,.78);tmp.updateMatrix();jerseys.setMatrixAt(i,tmp.matrix);jerseys.setColorAt(i,new THREE.Color(((x<0?['#99204a','#263c94','#622b53','#153173']:['#fff5db','#ede8ea','#cfc3e0','#8672ae'])[i%4])));
    tmp.position.set(x,y+.91,z);tmp.scale.set(.88,.95,.88);tmp.updateMatrix();heads.setMatrixAt(i,tmp.matrix);
  });jerseys.instanceMatrix.needsUpdate=true;heads.instanceMatrix.needsUpdate=true;root.add(jerseys,heads);
  // Jumbotron hanging high over rear stand, with structural columns and framed lit surface.
  const displayWidth = 30;
  const displayHeight = displayWidth * 9 / 16;
  const bezel = 0.18;
  box(displayWidth + 2 * bezel, displayHeight + 2 * bezel, 2, 0, 41, -66, charcoal);
  const screenCanvas=document.createElement('canvas');screenCanvas.width=1024;screenCanvas.height=512;const ctx=screenCanvas.getContext('2d');
  ctx.fillStyle='#081834';ctx.fillRect(0,0,1024,512);ctx.fillStyle='#325fb2';ctx.fillRect(22,22,980,468);ctx.fillStyle='#06172e';ctx.fillRect(40,40,944,430);
  ctx.textAlign='center';ctx.fillStyle='#d7e8ff';ctx.font='900 94px Arial';ctx.fillText('EL CLÁSICO',512,220);ctx.font='900 83px Arial';ctx.fillText('BARÇA  :  MADRID',512,333);ctx.font='bold 27px Arial';ctx.letterSpacing='8px';ctx.fillStyle='#91baf6';ctx.fillText('THE FINAL • 2026',512,410);
  const screenTex=new THREE.CanvasTexture(screenCanvas);screenTex.colorSpace=THREE.SRGBColorSpace;
  const screen=new THREE.Mesh(new THREE.PlaneGeometry(displayWidth,displayHeight),new THREE.MeshBasicMaterial({map:screenTex}));screen.position.set(0,41,-64.98);root.add(screen);
  for(const x of [-12.5,12.5])box(.9,12,.9,x,32,-67,metal);
  // Suspended giant corner lighting grids + show lights focused inward.
  for(const x of [-91,91])for(const z of [-71,71]){
    box(2.8,12,2.8,x,32,z,metal);
    box(18,3.8,3.5,x,38.7,z,metal);
    for(let j=-7;j<=7;j+=2.35)box(1.7,2.2,.5,x+j,38.6,z+(z>0?-2:2),softLed);
    const spotlight=new THREE.SpotLight('#e0f2ff',650,240,Math.PI/3.6,.9,1.2);spotlight.position.set(x,42,z);spotlight.target.position.set(0,0,0);root.add(spotlight,spotlight.target);
  }
  // Brand graphic across the southern outer wall, positioned above plaza.
  function bannerText(message,x,y,z,w=69,h=9){const c=document.createElement('canvas');c.width=1200;c.height=180;const g=c.getContext('2d');g.fillStyle='#09183b';g.fillRect(0,0,1200,180);g.fillStyle='#a6ccff';g.fillRect(0,0,1200,8);g.fillStyle='#ffffff';g.textAlign='center';g.textBaseline='middle';g.font='900 82px Arial';g.fillText(message,600,97);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;const plane=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:t,side:THREE.DoubleSide}));plane.position.set(x,y,z);root.add(plane);}
  bannerText('OAN  /  CREATOR’S LEAGUE',0,10,85.48);
  // Arena concourse / main entrance: pillars, awning, clear approach from street.
  box(105,1.5,19,0,5.5,93,charcoal);box(108,.45,21,0,7,93,led);
  for(let x=-45;x<=45;x+=10){box(1.4,8,1.6,x,0.9,97,metal);box(2.2,.5,1.8,x,5.4,97,softLed);}
  for(let x=-44;x<=44;x+=8)box(3.8,3.1,.4,x,-.05,85.3,teal);
  box(105,.5,16,0,-.6,96,stone);
  // Entrance carpet with two thin luminous guidance lines.
  for(const x of [-20,20])box(.45,.06,29,x,-.22,111,led);
  // Glass entry bays and angled facade fins define the scale of the concourse.
  const glazing=m('#345665',.12), alloy=m('#8c969e');
  for(const side of [-1,1])for(let x=-96;x<=96;x+=4){
    box(3.72,5,.22,x,10,side*85.15,glazing);
    const fin=box(.27,14,1.7,x,11,side*85.7,alloy);fin.rotation.z=.14;
  }
  const banners=crowdSites.filter((site,i)=>i%67===0 && Math.abs(site[0])>5).map(([x,y,z,r])=>[x+.3,y+.35,z,r]);
  const updateFlags=supporterFlags(root,banners,true);
  const adCanvas=document.createElement('canvas');adCanvas.width=2048;adCanvas.height=128;
  const adContext=adCanvas.getContext('2d');
  const adTexture=new THREE.CanvasTexture(adCanvas);adTexture.colorSpace=THREE.SRGBColorSpace;
  const adMaterial=new THREE.MeshBasicMaterial({map:adTexture,side:THREE.DoubleSide});
  for(const side of [-1,1]){
    const ad=new THREE.Mesh(new THREE.PlaneGeometry(205,1.05),adMaterial);
    ad.position.set(0,16,side*85.24);if(side<0)ad.rotation.y=Math.PI;root.add(ad);
  }
  for(const side of [-1,1]){
    const board=new THREE.Mesh(new THREE.PlaneGeometry(114,1.65),adMaterial);
    board.position.set(0,2.02,side*38.6);board.rotation.y=side>0?Math.PI:0;root.add(board);
  }
  const adCopy='OAN ALI  ·  NED GAMING & ANIMATION  ·  UNITY  ·  UNREAL ENGINE  ·  C#  ·  C++  ·  THREE.JS  ·  BLENDER  ·  REACT NATIVE  ·  PYTHON  ·  TECHFEST GAME JAM WINNER  ·  ';
  let adOffset=0,lastAdFrame=0;
  function update(elapsed){
    updateFlags(elapsed);
    if(elapsed-lastAdFrame<1/24)return;
    lastAdFrame=elapsed;adOffset=elapsed*110;
    adContext.fillStyle='#07101f';adContext.fillRect(0,0,2048,128);
    adContext.fillStyle='#efbd5b';adContext.fillRect(0,0,2048,7);adContext.fillRect(0,121,2048,7);
    adContext.font='bold 52px Arial';adContext.textBaseline='middle';
    const message=adCopy+adCopy;
    adContext.fillStyle='#f6f4ed';
    for(let x=-(adOffset%adContext.measureText(adCopy).width);x<2048;x+=adContext.measureText(adCopy).width)adContext.fillText(message,x,67);
    adTexture.needsUpdate=true;
  }
  let previousSlide='';
  const reel=document.createElement('video');
  reel.muted=true;
  reel.playsInline=true;
  reel.loop=true;
  reel.preload='metadata';
  reel.src=import.meta.env.BASE_URL+'media/Oan-Ali-Jumbotron.mp4';
  const videoTexture=new THREE.VideoTexture(reel);
  videoTexture.colorSpace=THREE.SRGBColorSpace;
  let requested=false;
  function startReel(){
    reel.play().catch(error=>{
      if(error.name==='NotAllowedError')window.addEventListener('pointerdown',startReel,{once:true});
    });
  }
  reel.addEventListener('playing',()=>{
    screen.material.map=videoTexture;
    screen.material.toneMapped=false;
    screen.material.needsUpdate=true;
  },{once:true});
  function display(progress){
    if(progress>2 && !requested){
      requested=true;
      startReel();
    }
    if(screen.material.map===videoTexture)return;
    const slide=progress>9.35?'LET’S TALK':progress>=9?'GOAL!':progress>=8?'TECHFEST':progress>=7?'UNREAL RACING':progress>=6?'VR RAGE ROOM':progress>=5?'2D PLATFORMER':progress>=4?'KICK-OFF':progress>=2.5?'OAN ALI':'OAN ALI';
    if(previousSlide===slide)return;
    previousSlide=slide;
    const captions={'LET’S TALK':'CONTACT OAN BELOW','GOAL!':'BARÇA   1 — 0   MADRID','TECHFEST':'GAME JAM WINNER','UNREAL RACING':'UNREAL ENGINE  /  TEAM PROJECT','VR RAGE ROOM':'UNITY XR  /  SOLO BUILD','2D PLATFORMER':'UNITY  /  FOURTEEN DAYS','KICK-OFF':'UNITY  /  UNREAL  /  THREE.JS','OAN ALI':'GAME DEVELOPER  •  KARACHI','EL CLÁSICO':'BARÇA   0 — 0   MADRID'};
    ctx.fillStyle='#101b32';ctx.fillRect(0,0,1024,512);
    ctx.fillStyle='#a7274a';ctx.fillRect(0,0,1024,20);ctx.fillStyle='#f4c970';ctx.fillRect(0,492,1024,20);
    ctx.textAlign='center';ctx.letterSpacing='2px';ctx.font='bold 38px Arial';ctx.fillText('CREATOR’S LEAGUE',512,103);
    ctx.font='900 110px Arial';ctx.fillStyle='#ffffff';ctx.fillText(slide,512,290,950);
    ctx.font='bold 38px Arial';ctx.fillStyle='#bad3ff';ctx.fillText(captions[slide],512,405,960);
    screenTex.needsUpdate=true;
  }
  return {root,update,display};
}
