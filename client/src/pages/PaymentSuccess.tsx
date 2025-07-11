import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Download, Home } from 'lucide-react';
import { useCart } from '../lib/stores/useCart';
import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { items, clearCart, getTotalPrice } = useCart();
  const [showReceipt, setShowReceipt] = useState(false);
  const [sealAnimation, setSealAnimation] = useState(false);

  useEffect(() => {
    // Start seal animation
    setSealAnimation(true);
    
    // Show receipt after seal animation
    setTimeout(() => {
      setShowReceipt(true);
    }, 3000);

    // Clear cart after successful payment
    setTimeout(() => {
      clearCart();
    }, 5000);
  }, [clearCart]);

  const orderNumber = `VEDOR-${Date.now()}`;
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-black animated-scroll">
      {/* Background */}
      <div 
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffd700' fill-opacity='0.1'%3E%3Cpath d='M50 50m-25 0a25,25 0 1,1 50,0a25,25 0 1,1 -50,0'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />

      <Header />

      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Seal Animation */}
          {!showReceipt && (
            <div className="mb-12">
              <div 
                className={`w-32 h-32 mx-auto mb-8 transition-all duration-3000 ${
                  sealAnimation ? 'scale-100 opacity-100 rotate-180' : 'scale-0 opacity-0'
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-full flex items-center justify-center text-black text-4xl font-bold border-4 border-yellow-300 shadow-xl shadow-yellow-400/50">
                  ⚜
                </div>
              </div>
              
              <h1 className="playfair text-4xl font-bold text-yellow-400 mb-4">
                Sealing the Sacred Pact...
              </h1>
              <p className="text-xl text-gray-300">
                The ancient magic is binding your relics to your soul
              </p>
              
              {/* Loading animation */}
              <div className="flex items-center justify-center space-x-2 mt-8">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>
          )}

          {/* Success Message & Receipt */}
          {showReceipt && (
            <div className="animate-fadeInUp">
              {/* Success Header */}
              <div className="mb-12">
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h1 className="playfair text-5xl font-bold text-yellow-400 gold-glow mb-4">
                  Sacred Pact Sealed!
                </h1>
                <p className="text-xl text-gray-300">
                  The divine relics are now bound to your destiny
                </p>
              </div>

              {/* Ancient Scroll Receipt */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 text-black p-8 rounded-lg border-4 border-yellow-600 max-w-2xl mx-auto mb-8 relative">
                {/* Scroll decorations */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-600 rounded-full"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-600 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-yellow-600 rounded-full"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-600 rounded-full"></div>

                {/* Header */}
                <div className="text-center mb-6 border-b-2 border-yellow-600 pb-4">
                  <h2 className="playfair text-3xl font-bold text-yellow-800 mb-2">
                    VEDOROS
                  </h2>
                  <p className="text-yellow-700">Sacred Receipt of Divine Transaction</p>
                  <div className="flex items-center justify-center mt-2">
                    <span className="text-yellow-600">⚜</span>
                    <div className="w-16 h-px bg-yellow-600 mx-2"></div>
                    <span className="text-yellow-600">☥</span>
                    <div className="w-16 h-px bg-yellow-600 mx-2"></div>
                    <span className="text-yellow-600">⚜</span>
                  </div>
                </div>

                {/* Order Details */}
                <div className="text-left mb-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <strong>Sacred Order #:</strong> {orderNumber}
                    </div>
                    <div>
                      <strong>Date of Binding:</strong> {currentDate}
                    </div>
                  </div>
                  
                  <div className="border-t border-yellow-600 pt-4">
                    <h3 className="font-bold mb-3 text-yellow-800">Divine Relics Acquired:</h3>
                    {items.map((item) => (
                      <div key={item.relic.id} className="flex justify-between items-center py-2 border-b border-yellow-300">
                        <div>
                          <span className="font-medium">{item.relic.name}</span>
                          <br />
                          <span className="text-sm text-yellow-700">
                            From {item.relic.civilization} × {item.quantity}
                          </span>
                        </div>
                        <span className="font-bold">
                          ${(item.relic.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t-2 border-yellow-600 pt-4 mt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total Sacred Offering:</span>
                      <span>${getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Sacred Blessing */}
                <div className="text-center border-t border-yellow-600 pt-4">
                  <p className="text-sm text-yellow-700 italic">
                    "May these divine relics bring you wisdom, power, and eternal blessing. 
                    The ancient guardians watch over your sacred collection."
                  </p>
                  <div className="mt-2 text-yellow-600">
                    ⚜ Blessed by the Temple Guardians ⚜
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Sacred Receipt
                </button>
                
                <button
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  <Home className="w-5 h-5" />
                  Return to Sacred Realm
                </button>
                
                <button
                  onClick={() => navigate('/divine-relics')}
                  className="text-yellow-400 hover:text-yellow-300 font-medium px-6 py-3 transition-colors"
                >
                  Continue Sacred Journey
                </button>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/30 border border-yellow-400/50 rounded-lg p-6">
                <h3 className="playfair text-xl font-semibold text-yellow-400 mb-4">
                  What Happens Next?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
                  <div className="text-center">
                    <div className="text-yellow-400 text-2xl mb-2">📦</div>
                    <h4 className="font-semibold mb-1">Sacred Preparation</h4>
                    <p className="text-sm">Your relics are blessed and prepared by temple guardians</p>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 text-2xl mb-2">🚚</div>
                    <h4 className="font-semibold mb-1">Divine Delivery</h4>
                    <p className="text-sm">Protected shipping within 3-7 mystical days</p>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 text-2xl mb-2">✨</div>
                    <h4 className="font-semibold mb-1">Eternal Bond</h4>
                    <p className="text-sm">Your sacred collection begins its eternal journey with you</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;