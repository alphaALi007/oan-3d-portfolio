import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

export function addSeatedFans(root, seats) {
  const chair = new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),
    new THREE.MeshStandardMaterial({color:'#24365d', roughness:.95}), seats.length*2);
  const pose=new THREE.Object3D();
  const places=[[],[],[]];
  seats.forEach(([x,y,z,angle],i) => {
    pose.rotation.set(0,angle,0);
    pose.position.set(x,y-.065,z);
    pose.scale.set(.76,.10,.65);
    pose.updateMatrix();
    chair.setMatrixAt(i*2,pose.matrix);
    pose.position.set(x-.30*Math.sin(angle),y+.17,z-.30*Math.cos(angle));
    pose.scale.set(.76,.57,.09);
    pose.updateMatrix();
    chair.setMatrixAt(i*2+1,pose.matrix);
    pose.position.set(x,y-.02,z);
    pose.rotation.y=angle+.10*Math.sin(i*3.1);
    pose.scale.setScalar(.94+.065*Math.sin(i*2.73));
    pose.updateMatrix();
    places[(i + Math.round(z)) % 3].push(pose.matrix.clone());
  });
  root.add(chair);
  new GLTFLoader().load('/models/Matchday-supporters.glb', ({scene}) => {
    places.forEach((matrices,i) => {
      if (!matrices.length) return;
      const fan=scene.getObjectByName('Fan'+i);
      const batch=new THREE.InstancedMesh(fan.geometry,fan.material,matrices.length);
      matrices.forEach((matrix,index)=>batch.setMatrixAt(index,matrix));
      batch.computeBoundingSphere();
      root.add(batch);
    });
  });
}
