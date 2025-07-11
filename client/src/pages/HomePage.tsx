import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Header from "../components/Navigation/Header";
import EarthGlobe from "../components/Earth/EarthGlobe";
import ParticleSystem from "../components/Earth/ParticleSystem";
import RegionTooltip from "../components/UI/RegionTooltip";
import { useEarthInteraction } from "../hooks/useEarthInteraction";

const HomePage = () => {
  const { selectedRegion, hoveredRegion, handleRegionHover, handleRegionClick } = useEarthInteraction();

  return (
    <div className="w-full h-full relative overflow-hidden bg-black">
      {/* Header Navigation */}
      <Header />
      
      {/* Main 3D Scene */}
      <div className="absolute inset-0">
        <Canvas
          shadows
          gl={{
            antialias: true,
            powerPreference: "high-performance",
            alpha: false
          }}
        >
          {/* Camera setup */}
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 8]}
            fov={45}
            near={0.1}
            far={1000}
          />
          
          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={5}
            maxDistance={15}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.5}
          />
          
          {/* Lighting */}
          <ambientLight intensity={0.3} color="#ffd700" />
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.8}
            color="#ffffff"
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -5]} intensity={0.4} color="#ffd700" />
          
          <Suspense fallback={null}>
            {/* Background particles */}
            <ParticleSystem />
            
            {/* Earth Globe */}
            <EarthGlobe
              onRegionHover={handleRegionHover}
              onRegionClick={handleRegionClick}
              hoveredRegion={hoveredRegion}
              selectedRegion={selectedRegion}
            />
          </Suspense>
          
          {/* Background color */}
          <color attach="background" args={["#000000"]} />
        </Canvas>
      </div>
      
      {/* UI Overlays */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <h2 className="playfair text-4xl md:text-5xl font-bold text-yellow-400 gold-glow fade-in-up text-center">
          Discover the Legacy
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-4"></div>
      </div>
      
      {/* Region Tooltip */}
      {hoveredRegion && (
        <RegionTooltip region={hoveredRegion} />
      )}
    </div>
  );
};

export default HomePage;