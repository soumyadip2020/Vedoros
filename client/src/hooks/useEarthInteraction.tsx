import { useState, useCallback } from "react";
import { Region } from "../data/regions";

export const useEarthInteraction = () => {
  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const handleRegionHover = useCallback((region: Region | null) => {
    setHoveredRegion(region);
    
    // Change cursor style
    if (region) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'default';
    }
  }, []);

  const handleRegionClick = useCallback((region: Region) => {
    setSelectedRegion(region);
    
    // Log click for demo purposes
    console.log(`Exploring ${region.name} relics...`);
    
    // Here you could navigate to a detailed page or open a modal
    // For now, we'll just show an alert
    setTimeout(() => {
      alert(`Welcome to ${region.name}! Discover ancient relics and treasures from this legendary civilization.`);
    }, 100);
  }, []);

  return {
    hoveredRegion,
    selectedRegion,
    handleRegionHover,
    handleRegionClick
  };
};
