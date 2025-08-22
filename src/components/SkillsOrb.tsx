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
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
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
          speed={3 + Math.random() * 2} 
          rotationIntensity={0.8}
          floatIntensity={0.8}
        >
          <group position={position}>
            {/* Skill sphere */}
            <mesh>
              <sphereGeometry args={[0.18, 20, 20]} />
              <meshStandardMaterial 
                color="#6366f1" 
                transparent 
                opacity={0.9}
                emissive="#4f46e5"
                emissiveIntensity={0.3}
                roughness={0.3}
                metalness={0.1}
              />
            </mesh>
            {/* Pulsing ring around sphere */}
            <mesh rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
              <torusGeometry args={[0.25, 0.02, 8, 32]} />
              <meshStandardMaterial 
                color="#8b5cf6" 
                transparent 
                opacity={0.6}
                emissive="#7c3aed"
                emissiveIntensity={0.5}
              />
            </mesh>
            {/* Skill text */}
            <Text
              position={[0, -0.45, 0]}
              fontSize={0.1}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              maxWidth={2}
              textAlign="center"
              font="/fonts/Inter-Bold.woff"
            >
              {skill}
            </Text>
          </group>
        </Float>
      ))}
      
      {/* Central core with pulsing effect */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial 
            color="#a855f7" 
            transparent 
            opacity={0.7}
            emissive="#9333ea"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>
        {/* Outer ring */}
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[0.6, 0.05, 16, 100]} />
          <meshStandardMaterial 
            color="#ec4899" 
            transparent 
            opacity={0.5}
            emissive="#db2777"
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>
    </group>
  );
};

const Skills3D = ({ skills }: SkillOrbProps) => {
  return (
    <div className="h-96 w-full relative group cursor-grab active:cursor-grabbing">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['transparent']} />
        <fog attach="fog" args={['#000000', 5, 15]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
        <spotLight position={[0, 10, 0]} intensity={0.8} color="#ec4899" />
        <SkillOrb skills={skills} />
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          minDistance={6}
          maxDistance={15}
          makeDefault
          dampingFactor={0.05}
          enableDamping={true}
        />
      </Canvas>
      <div className="absolute bottom-2 right-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        Drag to explore
      </div>
    </div>
  );
};

export default Skills3D;