import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticleSystem = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Pre-calculate particle positions to avoid Math.random() in render
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      
      // Create particles in a large sphere around the scene
      const radius = 15 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }
    
    return positions;
  }, []);

  // Pre-calculate particle velocities
  const particleVelocities = useMemo(() => {
    const velocities = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return velocities;
  }, []);

  // Animate particles
  useFrame(() => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        // Move particles
        positions[i] += particleVelocities[i] * 0.5;
        positions[i + 1] += particleVelocities[i + 1] * 0.5;
        positions[i + 2] += particleVelocities[i + 2] * 0.5;
        
        // Reset particles that move too far
        const distance = Math.sqrt(
          positions[i] ** 2 + 
          positions[i + 1] ** 2 + 
          positions[i + 2] ** 2
        );
        
        if (distance > 40) {
          const radius = 15 + Math.random() * 5;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          
          positions[i] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i + 2] = radius * Math.cos(phi);
        }
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={particlePositions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#ffd700"
        size={0.02}
        sizeAttenuation={true}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export default ParticleSystem;
