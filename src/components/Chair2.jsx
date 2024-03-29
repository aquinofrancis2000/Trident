/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/chair2.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useCustomization } from '../context/Customization'

const Chair = (props) => {

  const {material, chairColor, cushionColor,} = useCustomization();
  const { nodes, materials } = useGLTF('../public/models/chair2.gltf')

  const leatherTextureProps = useTexture({
   
    
    normalMap: './textures/wood/Wood_027_normal.jpg',
    roughnessMap: './textures/wood/Wood_027_normal.jpg',
    aoMap: './textures/wood/Wood_027_ambientOcclusion.jpg',
  })

  leatherTextureProps.normalMap.repeat.set(4,2);
  leatherTextureProps.roughnessMap.repeat.set(4,2);
  leatherTextureProps.aoMap.repeat.set(4,2);

  
  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT = 
  leatherTextureProps.roughnessMap.wrapS = leatherTextureProps.roughnessMap.wrapT = 
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  const fabricTextureProps = useTexture({
    
    normalMap: './textures/fabric/Fabric_Knitted_006_normal.jpg',
    roughnessMap: './textures/fabric/Fabric_Knitted_006_roughness.jpg',
    aoMap: './textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg',
  })

  
  fabricTextureProps.normalMap.repeat.set(11,5);
  fabricTextureProps.roughnessMap.repeat.set(11,5);
  fabricTextureProps.aoMap.repeat.set(11,5);

 
  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT = 
  fabricTextureProps.roughnessMap.wrapS = fabricTextureProps.roughnessMap.wrapT = 
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry} >
        <meshStandardMaterial {...material ==='leather' 
          ? leatherTextureProps 
          : fabricTextureProps}
          color={chairColor.color}  />
          
      </mesh>
      
      <mesh
        geometry={nodes.Cushion.geometry}
        position={[0, 0.06, 0.04]}
        castShadow
      >
        <meshStandardMaterial
          {...fabricTextureProps}
          color={cushionColor.color}
        />
      </mesh>
    

    </group>
  )
}

useGLTF.preload('../public/models/chair2.gltf')

export default Chair;
