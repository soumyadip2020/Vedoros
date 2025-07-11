import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import RegionHotspot from "./RegionHotspot";
import { regions } from "../../data/regions";
import { Region } from "../../data/regions";

interface EarthGlobeProps {
  onRegionHover: (region: Region | null) => void;
  onRegionClick: (region: Region) => void;
  hoveredRegion: Region | null;
  selectedRegion: Region | null;
}

const EarthGlobe = ({ onRegionHover, onRegionClick, hoveredRegion, selectedRegion }: EarthGlobeProps) => {
  const earthRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  // Create Earth texture using a procedural approach since we don't have earth textures
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;
    
    // Create a gradient background representing oceans
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#1a3d5c');
    gradient.addColorStop(0.5, '#2d5a87');
    gradient.addColorStop(1, '#1a3d5c');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add some landmass patterns
    ctx.fillStyle = '#3d5d2a';
    
    // Simplified continent shapes
    // Africa
    ctx.beginPath();
    ctx.ellipse(canvas.width * 0.52, canvas.height * 0.6, 80, 120, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Europe
    ctx.beginPath();
    ctx.ellipse(canvas.width * 0.51, canvas.height * 0.35, 40, 30, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Asia
    ctx.beginPath();
    ctx.ellipse(canvas.width * 0.65, canvas.height * 0.4, 120, 80, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Americas
    ctx.beginPath();
    ctx.ellipse(canvas.width * 0.2, canvas.height * 0.4, 60, 100, 0, 0, Math.PI * 2);
    ctx.fill();
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Create bump map for terrain detail
  const bumpTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    // Create noise pattern for terrain
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const noise = Math.random() * 255;
      imageData.data[i] = noise;     // R
      imageData.data[i + 1] = noise; // G
      imageData.data[i + 2] = noise; // B
      imageData.data[i + 3] = 255;   // A
    }
    ctx.putImageData(imageData, 0, 0);
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Subtle rotation animation
  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
    
    // Animate glow
    if (glowRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      glowRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group>
      {/* Outer glow */}
      <Sphere ref={glowRef} args={[2.2, 64, 64]}>
        <meshBasicMaterial
          color="#ffd700"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Main Earth sphere */}
      <Sphere ref={earthRef} args={[2, 64, 64]} castShadow receiveShadow>
        <meshPhongMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={0.05}
          shininess={0.8}
          specular="#444444"
        />
      </Sphere>
      
      {/* Region hotspots */}
      {regions.map((region) => (
        <RegionHotspot
          key={region.id}
          region={region}
          earthRadius={2}
          onHover={onRegionHover}
          onClick={onRegionClick}
          isHovered={hoveredRegion?.id === region.id}
          isSelected={selectedRegion?.id === region.id}
        />
      ))}
    </group>
  );
};

export default EarthGlobe;
