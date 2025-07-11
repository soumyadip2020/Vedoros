import { useEffect, useState } from "react";
import { Region } from "../../data/regions";

interface RegionTooltipProps {
  region: Region;
}

const RegionTooltip = ({ region }: RegionTooltipProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed z-30 pointer-events-none"
      style={{
        left: mousePosition.x + 20,
        top: mousePosition.y - 10,
        transform: 'translateY(-50%)'
      }}
    >
      <div className="bg-black/90 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-4 max-w-xs soft-glow">
        <h3 className="playfair text-lg font-semibold text-yellow-400 mb-2">
          Explore the {region.name} Relics
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {region.description}
        </p>
        <div className="mt-3 flex items-center text-xs text-yellow-400/80">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
          Click to discover ancient treasures
        </div>
      </div>
    </div>
  );
};

export default RegionTooltip;
