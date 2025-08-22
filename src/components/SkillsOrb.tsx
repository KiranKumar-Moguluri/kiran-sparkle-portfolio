import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface SkillOrbProps {
  skills: string[];
}

const SkillOrb = ({ skills }: SkillOrbProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const skillNodes = useMemo(() => {
    return skills.map((skill, index) => {
      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      
      const x = 2.5 * Math.cos(theta) * Math.sin(phi);
      const y = 2.5 * Math.sin(theta) * Math.sin(phi);
      const z = 2.5 * Math.cos(phi);

      return {
        position: [x, y, z] as [number, number, number],
        skill,
        key: index
      };
    });
  }, [skills]);

  return (
    <group ref={groupRef}>
      {skillNodes.map(({ position, skill, key }) => (
        <Float 
          key={key}
          speed={2 + Math.random()} 
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <group position={position}>
            {/* Skill sphere */}
            <mesh>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial 
                color="#3b82f6" 
                transparent 
                opacity={0.8}
                emissive="#1e40af"
                emissiveIntensity={0.2}
              />
            </mesh>
            {/* Skill text */}
            <Text
              position={[0, -0.4, 0]}
              fontSize={0.12}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              font="/fonts/Inter-Bold.woff"
            >
              {skill}
            </Text>
          </group>
        </Float>
      ))}
      
      {/* Central core */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.6}
          emissive="#7c3aed"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
};

const Skills3D = ({ skills }: SkillOrbProps) => {
  return (
    <div className="h-96 w-full relative">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} />
        <spotLight position={[0, 10, 0]} intensity={0.5} />
        <SkillOrb skills={skills} />
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          autoRotate
          autoRotateSpeed={0.5}
          minDistance={5}
          maxDistance={12}
          makeDefault
        />
      </Canvas>
    </div>
  );
};

export default Skills3D;