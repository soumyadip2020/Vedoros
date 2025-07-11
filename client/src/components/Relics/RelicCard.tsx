import { useState } from 'react';
import { Star, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Relic } from '../../data/relics';

interface RelicCardProps {
  relic: Relic;
  viewMode: 'grid' | 'list';
}

const RelicCard = ({ relic, viewMode }: RelicCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => {
      if (index < rating) {
        return (
          <span key={index} className="text-yellow-400 text-lg">
            ☆
          </span>
        );
      }
      return (
        <span key={index} className="text-gray-600 text-lg">
          ☆
        </span>
      );
    });
  };

  const handleProductClick = () => {
    navigate(`/relic/${relic.id}`);
  };

  if (viewMode === 'list') {
    return (
      <div 
        className="group bg-gradient-to-r from-amber-900/10 to-yellow-900/10 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleProductClick}
      >
        <div className="flex items-center gap-6">
          {/* Product image */}
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-900/20 to-amber-900/20 rounded-lg flex items-center justify-center border border-yellow-400/30">
            <div className="text-yellow-400 text-2xl">🏺</div>
          </div>

          {/* Product info */}
          <div className="flex-1">
            <h3 className="playfair text-xl font-semibold text-yellow-400 mb-1">
              {relic.name}
            </h3>
            <p className="text-gray-400 text-sm mb-2">
              Inspired by {relic.civilization}
            </p>
            <p className="text-gray-300 text-sm mb-3 line-clamp-2">
              {relic.description}
            </p>
            <div className="flex items-center gap-2 mb-2">
              {renderStars(relic.rating)}
              <span className="text-gray-400 text-sm">({relic.reviews.length})</span>
            </div>
          </div>

          {/* Price and button */}
          <div className="text-right">
            <div className="playfair text-2xl font-bold text-yellow-400 mb-4">
              ${relic.price.toLocaleString()}
            </div>
            <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
              Unseal Relic
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group relative bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-2 border-yellow-400/30 rounded-lg overflow-hidden hover:border-yellow-400/70 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleProductClick}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffd700' fill-opacity='0.05'%3E%3Cpath d='M20 20l10-10v20l-10-10zm-10 0L0 10v20l10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}
    >
      {/* Glow effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-yellow-400/10 animate-pulse" />
      )}

      {/* Glowing symbol overlay on hover */}
      {isHovered && (
        <div className="absolute top-4 right-4 text-yellow-400 text-2xl animate-pulse z-10">
          ⚜
        </div>
      )}

      {/* Product image placeholder */}
      <div className="relative h-64 bg-gradient-to-br from-yellow-900/30 to-amber-900/30 flex items-center justify-center border-b border-yellow-400/20">
        <div className="text-yellow-400 text-6xl opacity-70 group-hover:scale-110 transition-transform duration-300">
          🏺
        </div>
        
        {/* View button on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium flex items-center gap-2 transform scale-110">
              <Eye className="w-4 h-4" />
              View Relic
            </button>
          </div>
        )}
      </div>

      {/* Product details */}
      <div className="p-6">
        <h3 className="playfair text-xl font-semibold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">
          {relic.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-3">
          Inspired by {relic.civilization}
        </p>

        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {relic.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {renderStars(relic.rating)}
          </div>
          <span className="text-gray-400 text-sm">({relic.reviews.length})</span>
        </div>

        {/* Price */}
        <div className="playfair text-2xl font-bold text-yellow-400 mb-4">
          ${relic.price.toLocaleString()}
        </div>

        {/* Limited edition */}
        <div className="text-xs text-gray-400 mb-4">
          Only {relic.limitedEdition} exist • Blessed & Numbered
        </div>

        {/* Action button */}
        <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25">
          Unseal Relic
        </button>
      </div>
    </div>
  );
};

export default RelicCard;