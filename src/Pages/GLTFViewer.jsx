import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function GLTFViewer() {
 return(
    <div className="modal active" id="popup-1">
    <div className="modal-parent">
      <div className="modal-content">
        <div className="close" onClick={togglePopup}>&times;</div>
        <div className="modal-content-child">
          <h1>Interior Model</h1>
          <model-viewer
            src="/gltfModels/sofa_combination/scene.gltf"
            alt="A Microphone model"
            shadow-intensity="1"
            camera-controls
            auto-rotate
            ar
          ></model-viewer>
        </div>
      </div>
    </div>
  </div>
 )
}

export default GLTFViewer;