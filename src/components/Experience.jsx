import { PresentationControls, Stage, MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import { Suspense } from "react";
import Chair from "./Chair2";


const Experience = () => {

    


    return (
        <PresentationControls speed={2} global zoom={0.7} polar={[-0.1, Math.PI / 4]} rotation={[Math.PI / 8, Math.PI / 4, 0]}>
            <Stage enviroment={"city"} intensity ={0}  >
                <Suspense fallback={null}>
                    <Chair />
                </Suspense>
                
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-3.5}>
                <planeGeometry args={[100, 100]} />
                <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}  
                    mixStrength={1}
                    roughness={1}
                    depthScale={1}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#FFFFFF"
                    metalness={0}
                />
            </mesh>
        </PresentationControls>
    );
} ;

export default Experience;