import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Particles = () => {
  const ref = useRef<THREE.Points>(null!);
  
  const [sphere] = useMemo(() => {
    const positions = new Float32Array(3000);
    
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      
      positions.set([x, y, z], i * 3);
    }
    
    return [positions];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="hsl(217, 91%, 60%)"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
      >
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;