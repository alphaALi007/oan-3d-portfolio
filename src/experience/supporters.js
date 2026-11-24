import * as THREE from 'three';

// Batch every cloth panel for each club. The hoist stays fixed while the
// free edge catches wind, with a different phase for each supporter.
export function supporterFlags(root, sites, large = false) {
  const clock = {value: 0};
  const pose = new THREE.Object3D();
  const poles = new THREE.InstancedMesh(new THREE.CylinderGeometry(.045,.048,1,6),
    new THREE.MeshStandardMaterial({color:'#c7c0af'}),sites.length);
  const height = large ? 5 : 2.8;
  sites.forEach(([x,y,z], i) => {
    pose.position.set(x,y+height/2,z);
    pose.scale.set(1,height,1); pose.updateMatrix(); poles.setMatrixAt(i,pose.matrix);
  });
  root.add(poles);
  for (const home of [true,false]) {
    const canvas=document.createElement('canvas'); canvas.width=512; canvas.height=256;
    const g=canvas.getContext('2d');
    g.fillStyle=home?'#153885':'#fffcf0';g.fillRect(0,0,512,256);
    g.fillStyle=home?'#a21b46':'#7761ae';
    if(home){for(let x=0;x<512;x+=128)g.fillRect(x,0,64,256);}
    else {g.beginPath();g.moveTo(0,200);g.lineTo(430,0);g.lineTo(512,0);g.lineTo(512,40);g.lineTo(50,256);g.lineTo(0,256);g.fill();}
    g.fillStyle=home?'#132759':'#fff9e9';g.fillRect(38,85,436,88);
    g.textAlign='center';g.fillStyle=home?'#ffcf6b':'#352a58';g.font='bold 63px Arial';
    g.fillText(home?'BARÇA':'MADRID',256,151);
    const map=new THREE.CanvasTexture(canvas); map.colorSpace=THREE.SRGBColorSpace;
    const material=new THREE.MeshStandardMaterial({map,side:THREE.DoubleSide,roughness:.94});
    material.onBeforeCompile=shader=>{
      shader.uniforms.windTime=clock;
      shader.vertexShader='uniform float windTime;\n'+shader.vertexShader.replace('#include <begin_vertex>',
        '#include <begin_vertex>\n float wave=windTime*3.4 + instanceMatrix[3].x*.38 + uv.x*7.0; transformed.z += uv.x*(.29*sin(wave)+.10*sin(wave*1.9+uv.y)); transformed.y += uv.x*(.09*cos(wave)-.16*uv.x);');
    };
    const group=sites.filter(([x])=>(x<0)===home);
    const width=large?5.8:2.35,h=width*.54;
    const cloth=new THREE.InstancedMesh(new THREE.PlaneGeometry(width,h,15,5).translate(width/2,-h/2,0),material,group.length);
    group.forEach(([x,y,z,angle],i)=>{
      pose.position.set(x,y+height,z);pose.rotation.set(0,angle+.25*Math.sin(i*7),.07*Math.cos(i));pose.scale.setScalar(1);
      pose.updateMatrix();cloth.setMatrixAt(i,pose.matrix);
    });
    root.add(cloth);
  }
  return time=>{clock.value=time;};
}
