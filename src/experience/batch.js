import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
// Only batch direct static boxes. Cars, signals, skin and cloth retain independent transforms.
export function batchArchitecture(root){
 const groups=new Map();
 for(const mesh of root.children){
  if(mesh.geometry?.type!=='BoxGeometry'||mesh.isInstancedMesh)continue;
  const group=groups.get(mesh.material)||[];group.push(mesh);groups.set(mesh.material,group);
 }
 for(const [material,meshes] of groups){
  if(meshes.length<4)continue;
  const pieces=meshes.map(mesh=>{mesh.updateMatrix();return mesh.geometry.clone().applyMatrix4(mesh.matrix);});
  const geometry=mergeGeometries(pieces);pieces.forEach(g=>g.dispose());
  if(!geometry)continue;
  const combined=new THREE.Mesh(geometry,material);combined.receiveShadow=true;root.add(combined);
  for(const mesh of meshes){root.remove(mesh);mesh.geometry.dispose();}
 }
}
