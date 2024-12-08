import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '../../hooks/useMousePosition';

export function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { x, y } = useMousePosition();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth rotation
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.2;
    
    // Smooth position following with limited range
    const targetX = x * 1.5;
    const targetY = y * 1.5;
    
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
  });

  return (
    <Icosahedron
      ref={meshRef}
      args={[1, 1]}
      position={[0, 0, 0]}
    >
      <meshPhongMaterial
        color="#6366f1"
        wireframe
        side={THREE.DoubleSide}
        transparent
        opacity={0.8}
      />
    </Icosahedron>
  );
}