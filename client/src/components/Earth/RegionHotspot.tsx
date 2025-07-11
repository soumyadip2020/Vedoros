import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import { Region } from "../../data/regions";

interface RegionHotspotProps {
  region: Region;
  earthRadius: number;
  onHover: (region: Region | null) => void;
  onClick: (region: Region) => void;
  isHovered: boolean;
  isSelected: boolean;
}

const RegionHotspot = ({ 
  region, 
  earthRadius, 
  onHover, 
  onClick, 
  isHovered, 
  isSelected 
}: RegionHotspotProps) => {
  const hotspotRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  // Convert lat/lng to 3D position on sphere
  const position = new THREE.Vector3();
  const phi = (90 - region.lat) * (Math.PI / 180);
  const theta = (region.lng + 180) * (Math.PI / 180);
  
  position.x = -(earthRadius + 0.1) * Math.sin(phi) * Math.cos(theta);
  position.y = (earthRadius + 0.1) * Math.cos(phi);
  position.z = (earthRadius + 0.1) * Math.sin(phi) * Math.sin(theta);

  // Animate hotspot
  useFrame((state) => {
    if (hotspotRef.current && glowRef.current) {
      // Pulsing effect
      const scale = isHovered || isSelected ? 
        1.2 + Math.sin(state.clock.elapsedTime * 8) * 0.3 : 
        1 + Math.sin(state.clock.elapsedTime * 4) * 0.1;
      
      hotspotRef.current.scale.setScalar(scale);
      glowRef.current.scale.setScalar(scale * 1.5);
      
      // Make hotspot face camera
      hotspotRef.current.lookAt(state.camera.position);
      glowRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group position={position}>
      {/* Glow effect */}
      <Sphere 
        ref={glowRef} 
        args={[0.08, 16, 16]}
        onPointerEnter={() => onHover(region)}
        onPointerLeave={() => onHover(null)}
        onClick={() => onClick(region)}
      >
        <meshBasicMaterial
          color="#ffd700"
          transparent
          opacity={isHovered || isSelected ? 0.4 : 0.2}
          side={THREE.DoubleSide}
        />
      </Sphere>
      
      {/* Main hotspot */}
      <Sphere 
        ref={hotspotRef} 
        args={[0.04, 16, 16]}
        onPointerEnter={() => onHover(region)}
        onPointerLeave={() => onHover(null)}
        onClick={() => onClick(region)}
      >
        <meshBasicMaterial
          color={isHovered || isSelected ? "#ffffff" : "#ffd700"}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </group>
  );
};

export default RegionHotspot;
