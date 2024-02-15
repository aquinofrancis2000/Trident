import { useEffect } from 'react';

import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from '/public/models/3d-model-main/SceneInit.js';
import React from 'react';
import GltfInfo from '../components/GltfInfo';

export default function Car(){

    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();
    
        // const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
        // const boxMaterial = new THREE.MeshNormalMaterial();
        // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        // test.scene.add(boxMesh);
    
        let loadedModel;
        const glftLoader = new GLTFLoader();
        glftLoader.load('/public/models/3d-model-main/scene.gltf', (gltfScene) => {
          loadedModel = gltfScene;
          // console.log(loadedModel);
    
          gltfScene.scene.rotation.y = Math.PI / 8;
          gltfScene.scene.position.y = 3;
          gltfScene.scene.scale.set(0.1, 0.1, 0.1);
          test.scene.add(gltfScene.scene);
        });
    
        const animate = () => {
          if (loadedModel) {
            
            loadedModel.scene.rotation.y += 0.0025;
            
          }
          requestAnimationFrame(animate);
        };
        animate();
      }, []);
    
      return (
        <div className="canvasBG">
             <canvas id="myThreeJsCanvas" />
       
            <GltfInfo/>
            
        </div>
      );
    }