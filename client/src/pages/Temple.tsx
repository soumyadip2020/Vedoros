import { useState, useEffect } from 'react';
import { Crown, Gift, Scroll, Sparkles, Lock } from 'lucide-react';
import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';

const Temple = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-auto animated-scroll">
      {/* Animated background */}
      <div 
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffd700' fill-opacity='0.1'%3E%3Cpath d='M60 60m-30 0a30,30 0 1,1 60,0a30,30 0 1,1 -60,0'/%3E%3Cpath d='M30 60l60-60v120l-60-60z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
          animation: 'float 30s ease-in-out infinite'
        }}
      />

      <Header />

      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Main Title with entrance animation */}
          <div 
            className={`transition-all duration-2000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="mb-8">
              <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
              <h1 className="playfair text-6xl md:text-7xl font-bold text-yellow-400 gold-glow mb-6">
                The Temple
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Sacred Members-Only Portal
              </p>
            </div>

            {/* Coming Soon Section */}
            <div 
              className={`bg-gradient-to-br from-amber-900/20 to-yellow-900/30 border-2 border-yellow-400/50 rounded-lg p-12 mb-12 transition-all duration-2000 delay-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6 animate-spin" />
              <h2 className="playfair text-4xl font-bold text-yellow-400 mb-6">
                Sacred Sanctuary Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                The ancient doors of our most sacred chamber are being blessed by the temple guardians. 
                A realm of divine privilege awaits the chosen few.
              </p>
              
              {/* Mystical loading animation */}
              <div className="flex items-center justify-center space-x-2 mb-8">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>

            {/* VIP Perks */}
            <div 
              className={`mb-12 transition-all duration-2000 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="playfair text-3xl font-bold text-yellow-400 mb-10">
                Sacred Privileges Await
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Exclusive Drops */}
                <div className="bg-black/50 border border-yellow-400/30 rounded-lg p-8 hover:border-yellow-400/70 transition-all duration-500 hover:scale-105">
                  <Gift className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                  <h4 className="playfair text-xl font-semibold text-yellow-400 mb-4">
                    Exclusive Divine Drops
                  </h4>
                  <p className="text-gray-300">
                    First access to newly discovered relics before they reach mortal hands. 
                    Witness the unveiling of legendary artifacts.
                  </p>
                </div>

                {/* Rare Products */}
                <div className="bg-black/50 border border-yellow-400/30 rounded-lg p-8 hover:border-yellow-400/70 transition-all duration-500 hover:scale-105">
                  <Lock className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                  <h4 className="playfair text-xl font-semibold text-yellow-400 mb-4">
                    Rare & Forbidden Relics
                  </h4>
                  <p className="text-gray-300">
                    Access to the most powerful and limited artifacts, hidden from the common realm. 
                    One-of-a-kind treasures await.
                  </p>
                </div>

                {/* Personal Blessings */}
                <div className="bg-black/50 border border-yellow-400/30 rounded-lg p-8 hover:border-yellow-400/70 transition-all duration-500 hover:scale-105">
                  <Scroll className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                  <h4 className="playfair text-xl font-semibold text-yellow-400 mb-4">
                    Personal Sacred Scrolls
                  </h4>
                  <p className="text-gray-300">
                    Personalized blessing cards, sacred scrolls, and mystical treasures 
                    crafted exclusively for your spiritual journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Invite Only Banner */}
            <div 
              className={`bg-gradient-to-r from-yellow-900/30 via-yellow-400/20 to-yellow-900/30 border-2 border-yellow-400/70 rounded-lg p-8 transition-all duration-2000 delay-1500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center justify-center mb-4">
                <Crown className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="playfair text-3xl font-bold text-yellow-400 gold-glow">
                  INVITE ONLY
                </h3>
                <Crown className="w-8 h-8 text-yellow-400 ml-3" />
              </div>
              <p className="text-xl text-gray-300 mb-6">
                Entry to The Temple is granted only to those deemed worthy by the ancient guardians.
              </p>
              <div className="text-gray-400">
                <p className="mb-2">• Sacred initiation required</p>
                <p className="mb-2">• Divine blessing ceremony</p>
                <p>• Oath of eternal loyalty to the relics</p>
              </div>
            </div>

            {/* Mystical Countdown */}
            <div 
              className={`mt-12 transition-all duration-2000 delay-2000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="text-gray-400 mb-4">
                The sacred seals will be broken when the stars align...
              </p>
              
              {/* Decorative elements */}
              <div className="flex items-center justify-center space-x-6 text-yellow-400 opacity-60">
                <span className="text-2xl animate-pulse">⚜</span>
                <div className="w-20 h-px bg-yellow-400 animate-pulse"></div>
                <span className="text-3xl animate-pulse">☥</span>
                <div className="w-20 h-px bg-yellow-400 animate-pulse"></div>
                <span className="text-2xl animate-pulse">⚜</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Temple;