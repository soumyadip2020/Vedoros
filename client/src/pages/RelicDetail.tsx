import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Shield, Package, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { relics, Relic } from '../data/relics';
import { useCart } from '../lib/stores/useCart';
import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';
import RelicCard from '../components/Relics/RelicCard';

const RelicDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [relic, setRelic] = useState<Relic | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [reviewText, setReviewText] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    const foundRelic = relics.find(r => r.id === id);
    setRelic(foundRelic || null);
  }, [id]);

  if (!relic) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="playfair text-3xl text-yellow-400 mb-4">Relic Not Found</h2>
          <button 
            onClick={() => navigate('/divine-relics')}
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg"
          >
            Return to Relics
          </button>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return Array.from({ length: 5 }).map((_, index) => {
      const filled = index < rating;
      return (
        <button
          key={index}
          onClick={() => interactive && onRate && onRate(index + 1)}
          className={`text-2xl ${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform`}
          disabled={!interactive}
        >
          <span className={filled ? 'text-yellow-400' : 'text-gray-600'}>
            ☆
          </span>
        </button>
      );
    });
  };

  const similarRelics = relics
    .filter(r => r.id !== relic.id && (r.civilization === relic.civilization || r.type === relic.type))
    .slice(0, 3);

  const handleAddToCart = () => {
    if (!relic) return;
    
    setIsAddingToCart(true);
    addItem(relic, quantity);
    
    setTimeout(() => {
      setIsAddingToCart(false);
      navigate('/cart');
    }, 1000);
  };

  const handleSubmitReview = () => {
    if (reviewText.trim()) {
      // In a real app, this would submit to API
      alert('Your sacred review has been inscribed in the ancient records!');
      setReviewText('');
      setUserRating(5);
    }
  };

  return (
    <div className="min-h-screen bg-black animated-scroll">
      {/* Animated background */}
      <div 
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffd700' fill-opacity='0.1'%3E%3Cpath d='M50 50m-20 0a20,20 0 1,1 40,0a20,20 0 1,1 -40,0'/%3E%3Cpath d='M30 50l40-40v80l-40-40z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          animation: 'float 20s ease-in-out infinite'
        }}
      />

      <Header />

      {/* Back button */}
      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/divine-relics')}
          className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Return to Sacred Collection
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main image */}
            <div className="relative bg-gradient-to-br from-yellow-900/20 to-amber-900/30 rounded-lg p-12 border border-yellow-400/30 min-h-[500px] flex items-center justify-center">
              {/* Pedestal effect */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent rounded-full blur-sm"></div>
              
              {/* Product visualization */}
              <div className="text-yellow-400 text-9xl relative z-10 transform hover:scale-110 transition-transform duration-500">
                🏺
              </div>
              
              {/* Ambient light effect */}
              <div className="absolute inset-0 bg-gradient-radial from-yellow-400/10 via-transparent to-transparent rounded-lg"></div>
            </div>

            {/* Packaging info */}
            <div className="bg-black/50 border border-yellow-400/20 rounded-lg p-6">
              <h3 className="playfair text-lg font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                <Package className="w-5 h-5" />
                Sacred Packaging
              </h3>
              <p className="text-gray-300">{relic.packaging}</p>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="playfair text-4xl md:text-5xl font-bold text-yellow-400 gold-glow mb-4">
                {relic.name}
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                From the sacred realm of {relic.civilization}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {renderStars(relic.rating)}
                </div>
                <span className="text-gray-400">({relic.reviews.length} sacred testimonies)</span>
              </div>
              <div className="playfair text-4xl font-bold text-yellow-400 mb-6">
                ${relic.price.toLocaleString()}
              </div>
            </div>

            {/* Sacred Description */}
            <div className="bg-gradient-to-br from-amber-900/10 to-yellow-900/10 border border-yellow-400/20 rounded-lg p-6">
              <h3 className="playfair text-xl font-semibold text-yellow-400 mb-4">
                Sacred Legend
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {relic.sacredDescription}
              </p>
            </div>

            {/* Materials & Craftsmanship */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/30 border border-yellow-400/20 rounded-lg p-4">
                <h4 className="text-yellow-400 font-semibold mb-2">Divine Materials</h4>
                <p className="text-gray-300 text-sm">{relic.materials}</p>
              </div>
              <div className="bg-black/30 border border-yellow-400/20 rounded-lg p-4">
                <h4 className="text-yellow-400 font-semibold mb-2">Sacred Craftsmanship</h4>
                <p className="text-gray-300 text-sm">{relic.craftsmanship}</p>
              </div>
            </div>

            {/* Limited Edition */}
            <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border border-yellow-400/50 rounded-lg p-6 text-center">
              <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="playfair text-xl font-semibold text-yellow-400 mb-2">
                Sacred Limited Edition
              </h3>
              <p className="text-gray-300">
                Only {relic.limitedEdition} exist. Each is blessed, sealed, and numbered by the temple guardians.
              </p>
            </div>

            {/* Add to Cart */}
            <div className="bg-black/50 border border-yellow-400/30 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-6">
                <label className="text-yellow-400 font-medium">Quantity:</label>
                <select 
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="bg-black border border-yellow-400/30 rounded px-3 py-2 text-gray-300"
                >
                  {[1,2,3,4,5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              
              <button 
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 disabled:from-gray-600 disabled:to-gray-500 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed text-lg playfair"
              >
                {isAddingToCart ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Adding to Sacred Collection...
                  </div>
                ) : (
                  'Ritual of Possession'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-4 mb-16">
          {[
            { 
              id: 'details', 
              title: 'Sacred Details', 
              content: `Era: ${relic.era} | Type: ${relic.type} | Origin: ${relic.civilization}` 
            },
            { 
              id: 'shipping', 
              title: 'Divine Delivery', 
              content: 'All relics are shipped with sacred protection spells and arrive within 3-7 mystical days.' 
            },
            { 
              id: 'authenticity', 
              title: 'Certificate of Authenticity', 
              content: 'Each relic comes with a blessed certificate verifying its divine origin and sacred properties.' 
            }
          ].map((section) => (
            <div key={section.id} className="bg-black/30 border border-yellow-400/20 rounded-lg">
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-yellow-400/5 transition-colors"
              >
                <h3 className="playfair text-lg font-semibold text-yellow-400">{section.title}</h3>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-5 h-5 text-yellow-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-yellow-400" />
                )}
              </button>
              {expandedSection === section.id && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <h2 className="playfair text-3xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
            <Users className="w-8 h-8" />
            Sacred Testimonies
          </h2>

          {/* Add Review */}
          <div className="bg-gradient-to-br from-amber-900/10 to-yellow-900/10 border border-yellow-400/20 rounded-lg p-6 mb-8">
            <h3 className="playfair text-xl font-semibold text-yellow-400 mb-4">
              Share Your Divine Experience
            </h3>
            
            <div className="mb-4">
              <label className="block text-yellow-400 mb-2">Your Sacred Rating:</label>
              <div className="flex items-center gap-1">
                {renderStars(userRating, true, setUserRating)}
              </div>
            </div>

            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Describe your mystical experience with this divine relic..."
              className="w-full bg-black/50 border border-yellow-400/30 rounded-lg p-4 text-gray-300 placeholder-gray-500 mb-4 h-24"
            />

            <button 
              onClick={handleSubmitReview}
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors"
            >
              Inscribe Sacred Review
            </button>
          </div>

          {/* Existing Reviews */}
          {relic.reviews.length > 0 ? (
            <div className="space-y-4">
              {relic.reviews.map((review) => (
                <div key={review.id} className="bg-black/30 border border-yellow-400/20 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-yellow-400 font-medium">{review.author}</span>
                      <div className="flex">{renderStars(review.rating)}</div>
                    </div>
                    <span className="text-gray-400 text-sm">{review.date}</span>
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Be the first to share your sacred experience with this divine relic.</p>
            </div>
          )}
        </div>

        {/* Similar Items */}
        {similarRelics.length > 0 && (
          <div>
            <h2 className="playfair text-3xl font-bold text-yellow-400 mb-8">
              Similar Divine Treasures
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarRelics.map((similarRelic) => (
                <RelicCard 
                  key={similarRelic.id} 
                  relic={similarRelic} 
                  viewMode="grid"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default RelicDetail;