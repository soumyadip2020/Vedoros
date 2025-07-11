import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, X, Scroll, Coins } from 'lucide-react';
import { useCart } from '../lib/stores/useCart';
import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice, getTotalItems } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate payment processing
    setTimeout(() => {
      navigate('/payment-success');
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black animated-scroll">
        <Header />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Scroll className="w-16 h-16 text-yellow-400 mx-auto mb-6 opacity-50" />
            <h1 className="playfair text-4xl font-bold text-yellow-400 mb-6">
              Sacred Altar Awaits
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your ritual cart is empty. Discover divine relics to begin your sacred journey.
            </p>
            <button
              onClick={() => navigate('/divine-relics')}
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Sacred Relics
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black animated-scroll">
      {/* Background */}
      <div 
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffd700' fill-opacity='0.1'%3E%3Cpath d='M40 40m-20 0a20,20 0 1,1 40,0a20,20 0 1,1 -40,0'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />

      <Header />

      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <Scroll className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h1 className="playfair text-5xl font-bold text-yellow-400 gold-glow mb-4">
              Ritual Cart
            </h1>
            <p className="text-xl text-gray-300">
              Sacred altar where divine relics await your blessing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-amber-900/10 to-yellow-900/20 border border-yellow-400/30 rounded-lg p-8">
                <h2 className="playfair text-2xl font-semibold text-yellow-400 mb-6 flex items-center gap-3">
                  <Scroll className="w-6 h-6" />
                  Sacred Relics ({getTotalItems()})
                </h2>

                <div className="space-y-6">
                  {items.map((item) => (
                    <div 
                      key={item.relic.id}
                      className="bg-black/30 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/40 transition-all duration-300"
                    >
                      <div className="flex items-center gap-6">
                        {/* Product Image */}
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-900/30 to-amber-900/30 rounded-lg flex items-center justify-center border border-yellow-400/30">
                          <span className="text-yellow-400 text-3xl">🏺</span>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <h3 className="playfair text-xl font-semibold text-yellow-400 mb-2">
                            {item.relic.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">
                            From {item.relic.civilization}
                          </p>
                          <p className="text-yellow-400 font-bold text-lg">
                            ${item.relic.price.toLocaleString()}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.relic.id, item.quantity - 1)}
                            className="w-8 h-8 bg-yellow-400/20 hover:bg-yellow-400/30 border border-yellow-400/50 rounded flex items-center justify-center text-yellow-400 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          
                          <span className="w-12 text-center text-yellow-400 font-bold">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(item.relic.id, item.quantity + 1)}
                            className="w-8 h-8 bg-yellow-400/20 hover:bg-yellow-400/30 border border-yellow-400/50 rounded flex items-center justify-center text-yellow-400 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.relic.id)}
                          className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clear Cart */}
                <div className="mt-8 text-center">
                  <button
                    onClick={clearCart}
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                  >
                    Clear Sacred Altar
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/30 border-2 border-yellow-400/50 rounded-lg p-8 sticky top-8">
                <h2 className="playfair text-2xl font-semibold text-yellow-400 mb-6 flex items-center gap-3">
                  <Coins className="w-6 h-6" />
                  Divine Summary
                </h2>

                {/* Summary Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-300">
                    <span>Sacred Items:</span>
                    <span>{getTotalItems()}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal:</span>
                    <span>${getTotalPrice().toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-300">
                    <span>Temple Blessing:</span>
                    <span>Included</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-300">
                    <span>Sacred Shipping:</span>
                    <span>Free</span>
                  </div>
                  
                  <div className="border-t border-yellow-400/30 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="playfair text-xl font-semibold text-yellow-400">
                        Offering Total:
                      </span>
                      <span className="playfair text-2xl font-bold text-yellow-400">
                        ${getTotalPrice().toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 disabled:from-gray-600 disabled:to-gray-500 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed playfair text-lg"
                >
                  {isCheckingOut ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Sealing the Pact...
                    </div>
                  ) : (
                    'Seal the Pact'
                  )}
                </button>

                {/* Sacred Guarantee */}
                <div className="mt-6 p-4 bg-black/30 border border-yellow-400/20 rounded-lg">
                  <h4 className="text-yellow-400 font-semibold mb-2 text-center">
                    Sacred Guarantee
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Authentic divine origins</li>
                    <li>• Blessed by temple guardians</li>
                    <li>• Protected by ancient magic</li>
                    <li>• 30-day blessing period</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;