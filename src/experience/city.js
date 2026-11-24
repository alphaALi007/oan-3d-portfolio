import { supporterFlags } from './supporters.js';
import * as THREE from 'three';

export function createCity(scene){
  const root=new THREE.Group();scene.add(root);
  const m=(color,glow=0)=>new THREE.MeshStandardMaterial({color,roughness:.85,metalness:.04,emissive:color,emissiveIntensity:glow});
  const ground=m('#111d2c'),road=m('#121b2a'),paving=m('#3b4659'),curb=m('#778396'),line=m('#e6e5dc'),yellow=m('#eac777',.2),dark=m('#121c31'),glass=m('#142740'),light=m('#d9e9ff',1.3),warm=m('#ffd69c',1.6),green=m('#173f45');
  function box(w,h,d,x,y,z,mat,parent=root){const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);o.position.set(x,y,z);o.receiveShadow=true;parent.add(o);return o;}
  box(900,1,900,0,-5.2,0,ground);
  // Streets bound the stadium block; special entry forecourt at +Z.
  for(const z of [-147,147]){
    box(900,.16,27,0,-4.59,z,road);
    for(let x=-430;x<430;x+=18)box(8,.035,.35,x,-4.48,z,yellow);
    for(const side of [-1,1]){box(900,.45,7,0,-4.13,z+side*18,paving);box(900,.22,.5,0,-4.32,z+side*14,curb);}
  }
  for(const x of [-143,143]){
    box(27,.16,900,x,-4.59,0,road);
    for(let z=-430;z<430;z+=18)box(.35,.035,8,x,-4.48,z,yellow);
    for(const side of [-1,1]){box(7,.45,900,x+side*18,-4.13,0,paving);box(.5,.22,900,x+side*14,-4.32,0,curb);}
  }
  // Plaza: a stepped fan park with dense crowd and grand axis to the entrance.
  box(215,.35,54,0,-2.8,118,paving);
  box(155,.3,11,0,-2.4,139,paving);
  for(let x=-100;x<=100;x+=10)box(.1,.045,53,x,-2.59,117,curb);
  for(let z=97;z<137;z+=9)box(195,.04,.1,0,-2.57,z,curb);
  for(const x of [-47,47])box(.35,.09,44,x,-2.54,114,light);
  // Marked approach: crossing at southern main road.
  for(let x=-48;x<=48;x+=5.4)box(2.8,.05,23,x,-4.45,147,line);
  for(const x of [-140,140])for(const z of [-147,147]){
    for(let j=-8;j<=8;j+=5){box(2.6,.05,7,x+j,-4.42,z+21,line);}
  }
  // Fans are grouped into believable queues, supporter circles and walkways.
  let seed=76432;function rand(){seed=(seed*16807)%2147483647;return(seed-1)/2147483646;}
  const range=(a,b)=>a+(b-a)*rand();
  const fans=[];
  for(let i=0;i<1200;i++){
    let x,z;
    if(i<850){const lane=Math.floor(rand()*8);x=-75+lane*21+range(-8,8);z=range(103,133);}
    else if(i<1020){x=range(-98,-58);z=range(96,137);}
    else{x=range(58,100);z=range(96,137);}
    // broad clear walkable avenue through center
    if(Math.abs(x)<10&&z>108) x+=(x>=0?1:-1)*13;
    fans.push({x,z,offset:range(0,Math.PI*2),height:range(1.2,1.8),team:Math.floor(rand()*6)});
  }
  const personBodies=new THREE.InstancedMesh(new THREE.CapsuleGeometry(.28,.43,3,7),new THREE.MeshStandardMaterial({roughness:.94}),fans.length);
  const personHeads=new THREE.InstancedMesh(new THREE.SphereGeometry(.21,9,7),m('#c99273'),fans.length);
  personBodies.frustumCulled=false;personHeads.frustumCulled=false;
  const dummy=new THREE.Object3D(),colors=['#a7c8fa','#296adb','#f4f5f9','#20356d','#68a1ff','#d8d4ba'];
  fans.forEach((f,i)=>{personBodies.setColorAt(i,new THREE.Color(((f.x<0?['#ad244c','#213d91','#50284c']:['#fff6e2','#ddd6e8','#8674ab'])[i%3])));});root.add(personBodies,personHeads);
  const bearers=fans.filter((_,i)=>i%23===0);
  const waveFlags=supporterFlags(root,bearers.map(f=>[f.x+.27,-1.45,f.z,f.offset*.28]));
  const legs=new THREE.InstancedMesh(new THREE.CapsuleGeometry(.115,.48,2,6),m('#2b3040'),fans.length*2);
  root.add(legs);
  function animateFans(t){fans.forEach((f,i)=>{const walking=i%23!==0 && i%3!==0;
    const drift=walking?Math.sin(t*.24+f.offset)*2.4:0;
    const stride=walking?Math.sin(t*3.8+f.offset):0;
    const z=f.z+drift;
    for(let side=0;side<2;side++){
      dummy.position.set(f.x+(side-.5)*.25,-2.25,z);
      dummy.rotation.set(stride*(side-.5)*.62,0,0);dummy.scale.setScalar(1);dummy.updateMatrix();legs.setMatrixAt(i*2+side,dummy.matrix);
    }
    const bounce=.06*Math.abs(Math.sin(t*2.6+f.offset));dummy.position.set(f.x,-1.53+bounce,z);dummy.rotation.set(0,f.offset,0);dummy.scale.set(.95,f.height/1.75,.8);dummy.updateMatrix();personBodies.setMatrixAt(i,dummy.matrix);dummy.position.set(f.x,-.78+bounce+(f.height-1.5)*.3,z);dummy.scale.set(.9,.96,.9);dummy.updateMatrix();personHeads.setMatrixAt(i,dummy.matrix);});waveFlags(t);legs.instanceMatrix.needsUpdate=true;personBodies.instanceMatrix.needsUpdate=true;personHeads.instanceMatrix.needsUpdate=true;}
  animateFans(0);
  // Flags, tall supporter banners, light pylons, plaza kiosks.
  for(const [x,z] of [[-80,112],[-54,119],[57,119],[82,112],[-68,98],[68,98]]){
    box(.32,15,.32,x,4,z,curb);
    const flag=new THREE.Mesh(new THREE.PlaneGeometry(7,3.5),new THREE.MeshStandardMaterial({color:'#3b82d7',side:THREE.DoubleSide,emissive:'#123c84',emissiveIntensity:.2}));flag.position.set(x+3.4,10.1,z);root.add(flag);
    box(7.2,.3,.3,x+3.4,12,z,light);
  }
  for(const x of [-93,93]){
    box(9,3.4,6,x,-.6,121,dark);box(10,1,7,x,1.5,121,m('#315fae',.45));
    box(6,1.4,.2,x,-.2,124.1,warm);
  }
  // Row of festive trees in planters, not randomly placed in the crossing.
  for(const z of [101,115,130])for(const x of [-108,108]){
    box(4,1,4,x,-2.2,z,curb);box(.6,4,.6,x,.2,z,m('#66594b'));
    const crown=new THREE.Mesh(new THREE.IcosahedronGeometry(2.9,1),green);crown.position.set(x,3.4,z);root.add(crown);
  }
  // Street lamps: poles + visibly lit pools. Keep actual GPU lights limited.
  for(const z of [-166,166])for(let x=-380;x<=380;x+=43){
    box(.4,10,.4,x,.8,z,paving);box(3,.3,.4,x+1.3,5.9,z,paving);box(1.4,.2,.9,x+2.45,5.7,z,warm);
  }
  for(const x of [-162,162])for(let z=-380;z<=380;z+=50){
    box(.4,10,.4,x,.8,z,paving);box(.4,.3,3,x,5.9,z+1.2,paving);box(.85,.2,1.3,x,5.7,z+2.4,warm);
  }
  for(const x of [-71,0,71]){
    const lightSource=new THREE.PointLight('#9dc6ff',23,48,2);lightSource.position.set(x,8,128);root.add(lightSource);
    box(.75,13,.75,x,3.4,133,curb);box(5,.7,2,x,10,133,light);
  }
  // District buildings, placed in blocks beyond the inner ring road.
  const facades=['#14233d','#192943','#203149','#26334d','#1a3450'].map(c=>m(c));
  const windowColors=[m('#6384b7',.22),m('#d7c28d',.65),m('#0f203b'),m('#92b8eb',.4)];
  function building(x,z,w,d,h,id){
    box(w,h,d,x,-4.2+h/2,z,facades[id%facades.length]);
    box(w+1.1,.8,d+1.1,x,-4.2+h,z,paving);
    // window instancing per building to avoid hundreds of individual draw calls
    const floorCount=Math.max(2,Math.floor(h/5.4)), colCount=Math.max(2,Math.floor(w/4));
    const count=floorCount*colCount;
    const windows=new THREE.InstancedMesh(new THREE.PlaneGeometry(1.3,2.1),new THREE.MeshBasicMaterial({side:THREE.DoubleSide}),count);
    let idx=0;
    for(let floor=0;floor<floorCount;floor++)for(let col=0;col<colCount;col++){
      dummy.position.set(x-w/2+(col+.5)*w/colCount,-1+floor*5.1,z+d/2+.07);dummy.rotation.set(0,0,0);dummy.scale.set(1,1,1);dummy.updateMatrix();windows.setMatrixAt(idx,dummy.matrix);
      const shade=windowColors[(Math.floor(rand()*10)===0?1:(col+floor+id)%4)];windows.setColorAt(idx,new THREE.Color(shade.color));idx++;
    }windows.instanceMatrix.needsUpdate=true;windows.instanceColor.needsUpdate=true;root.add(windows);
    // Rooftop plant structures
    if(id%3===0)box(w*.36,3,d*.3,x,-2.5+h,z,curb);
  }
  for(let x=-360;x<=360;x+=38)for(let z=-340;z<=340;z+=40){
    if(Math.abs(x)<195&&Math.abs(z)<195)continue;
    if(Math.abs(Math.abs(x)-143)<35||Math.abs(Math.abs(z)-147)<35)continue;
    if(rand()<.16)continue;
    const w=range(20,29),d=range(22,30),h=range(20,68);
    building(x+range(-2,2),z+range(-2,2),w,d,h,Math.floor(rand()*100));
  }
  // Raised traffic signal pillars at four intersection corners.
  const signals=[];
  for(const x of [-123,123])for(const z of [-125,125]){
    box(.4,10,.4,x,.5,z,curb);box(1.75,5,.85,x,6,z,dark);
    const lamps=[];for(let i=0;i<3;i++){const s=new THREE.Mesh(new THREE.SphereGeometry(.41,10,8),new THREE.MeshBasicMaterial({color:'#202c3d'}));s.position.set(x,7.45-i*1.5,z+.5);root.add(s);lamps.push(s);}signals.push(lamps);
  }
  // Gate signs and queue rails follow the main plaza approach.
  for(const [x,title] of [[-48,'WEST  /  BARÇA'],[48,'EAST  /  MADRID']]){
    const c=document.createElement('canvas');c.width=512;c.height=96;const g=c.getContext('2d');
    g.fillStyle=x<0?'#761738':'#362b58';g.fillRect(0,0,512,96);g.fillStyle='#fff4d8';g.font='bold 50px Arial';g.textAlign='center';g.fillText(title,256,65);
    const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;
    const sign=new THREE.Mesh(new THREE.PlaneGeometry(17,3.2),new THREE.MeshBasicMaterial({map,side:THREE.DoubleSide}));sign.position.set(x,4.8,117);root.add(sign);
    for(const d of [-8,8])box(.22,9,.22,x+d,1.5,117,curb);
    for(let lane=-6;lane<=6;lane+=4){box(.12,.12,11,x+lane,-1.45,110,curb);for(const z of [105,110,115])box(.12,1.3,.12,x+lane,-2,z,curb);}
  }
  const automobiles=[];
  const paints=['#d75064','#e8effa','#3276d1','#e6b655','#708da9','#1d3f66'].map(c=>m(c));
  function car(ax,lane,forward,offset){
    const g=new THREE.Group();root.add(g);
    box(5.6,1.3,2.6,0,0,0,paints[Math.floor(rand()*paints.length)],g);
    box(2.9,1.05,2.25,-.35,1.1,0,glass,g);
    for(const xx of [-1.8,1.8])for(const zz of [-1.25,1.25]){
      const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.47,.47,.35,10),m('#090d15'));wheel.rotation.x=Math.PI/2;wheel.position.set(xx,-.55,zz);g.add(wheel);
    }
    for(const zz of [-.9,.9])box(.13,.37,.42,2.84,.15,zz,light,g);
    g.position.set(ax==='x'?offset:lane,-3.37,ax==='z'?offset:lane);
    g.rotation.y=ax==='x'?(forward?0:Math.PI):(forward?-Math.PI/2:Math.PI/2);
    automobiles.push({g,ax,forward:forward?1:-1,speed:range(9,18)});
  }
  for(let i=0;i<42;i++){
    const ax=i%2===0?'x':'z',pos=(i%4<2?1:-1);
    car(ax,pos*(ax==='x'?141:137)+(i%3===0?3:-3),i%4===0||i%4===2,range(-410,410));
  }
  // Parked team buses near plaza approach.
  for(const x of [-106,106]){
    const bus=new THREE.Group();root.add(bus);
    box(6.2,5,15,0,0,0,m('#173f81'),bus);
    box(6.35,1.6,14,0,1.25,0,glass,bus);
    box(6.5,.5,15,0,2.8,0,light,bus);
    for(const z of [-5.2,5.2])for(const side of [-1,1]){
      const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.92,.92,.35,12),m('#0b121f'));wheel.rotation.z=Math.PI/2;wheel.position.set(side*3.1,-2.1,z);bus.add(wheel);
    }bus.position.set(x,-1,169);bus.rotation.y=Math.PI/2;
  }
  let previous=0;
  function update(elapsed){
    const dt=Math.min(Math.max(elapsed-previous,0),.07);previous=elapsed;
    for(const {g,ax,forward,speed} of automobiles){g.position[ax]+=forward*speed*dt; if(g.position[ax]>430)g.position[ax]=-430;if(g.position[ax]<-430)g.position[ax]=430;}
    signals.forEach((set,index)=>set.forEach((mesh,i)=>mesh.material.color.set(i===Math.floor((elapsed+index*3)/6)%3?['#f54e52','#ffc24c','#60f2a1'][i]:'#1d293b')));
    animateFans(elapsed);
  }
  return {root,update};
}
