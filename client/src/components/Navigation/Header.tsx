import { ShoppingCart, User, Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../lib/stores/useCart";

const Header = () => {
  const { getTotalItems } = useCart();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = () => {
    // Simulate login - in real app this would connect to auth API
    setUserName("Sacred Guardian");
    setIsLoggedIn(true);
    setUserDropdownOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setUserDropdownOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20 p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="fade-in-up">
          <Link to="/">
            <h1 className="playfair text-3xl md:text-4xl font-bold text-yellow-400 gold-glow tracking-wider hover:text-yellow-300 transition-colors">
              VEDOROS
            </h1>
          </Link>
        </div>
        
        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8 fade-in-up">
          <Link 
            to="/" 
            className="text-ivory hover:text-yellow-400 transition-colors duration-300 font-medium tracking-wide"
          >
            Home
          </Link>
          <Link 
            to="/divine-relics" 
            className="text-ivory hover:text-yellow-400 transition-colors duration-300 font-medium tracking-wide"
          >
            Divine Relics
          </Link>
          <Link 
            to="/temple" 
            className="text-yellow-400 gold-glow border-b border-yellow-400 pb-1 font-medium tracking-wide"
          >
            Temple
          </Link>
        </nav>
        
        {/* Right Menu */}
        <div className="flex items-center space-x-4 fade-in-up">
          <button className="p-2 text-ivory hover:text-yellow-400 transition-colors duration-300">
            <Search className="w-5 h-5" />
          </button>
          
          {/* Cart Button */}
          <Link to="/cart" className="p-2 text-ivory hover:text-yellow-400 transition-colors duration-300 relative">
            <ShoppingCart className="w-5 h-5" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 text-black text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                {getTotalItems()}
              </span>
            )}
          </Link>
          
          {/* User Account Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="p-2 text-ivory hover:text-yellow-400 transition-colors duration-300 flex items-center gap-1"
            >
              <User className="w-5 h-5" />
              {isLoggedIn && <ChevronDown className="w-3 h-3" />}
            </button>
            
            {userDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-black/90 backdrop-blur-sm border border-yellow-400/30 rounded-lg shadow-lg overflow-hidden">
                {!isLoggedIn ? (
                  <div className="p-4">
                    <button
                      onClick={handleLogin}
                      className="w-full bg-yellow-400 text-black py-2 px-4 rounded font-medium hover:bg-yellow-300 transition-colors mb-2"
                    >
                      Sign In
                    </button>
                    <button className="w-full text-yellow-400 py-2 px-4 rounded border border-yellow-400/50 hover:bg-yellow-400/10 transition-colors">
                      Create Account
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="p-4 border-b border-yellow-400/30">
                      <p className="text-yellow-400 font-medium">{userName}</p>
                      <p className="text-gray-400 text-sm">Temple Guardian</p>
                    </div>
                    <button className="w-full text-left px-4 py-3 text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400 transition-colors">
                      Sacred Settings
                    </button>
                    <button className="w-full text-left px-4 py-3 text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400 transition-colors">
                      Order History
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-400/10 transition-colors border-t border-yellow-400/30"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
