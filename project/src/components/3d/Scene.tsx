import { Canvas } from '@react-three/fiber';
import { FloatingShape } from './FloatingShape';

export function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas 
        camera={{ 
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingShape />
      </Canvas>
    </div>
  );
}