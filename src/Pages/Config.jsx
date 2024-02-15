import { Canvas } from "@react-three/fiber";

import '../App.css';
import Experience from "../components/experience";
import Configurator from "../components/Configurator";
import { CustomizationProvider } from "../context/Customization";
import { Suspense } from "react";




export default function Config() {
  return (
    <CustomizationProvider>
      <div className="config">
        
        <Suspense>
        <Canvas >
        
        <pointLight position={[10, 0, 0]} intensity={150} />
          <color attach="background" args={["#FFFFFFF"]} />
          <fog attach="fog" args={["#FFFFFFF", 20, 40]} />
          <Experience />
        </Canvas>
        </Suspense>
       
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

