import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black/90 to-black/50 border-t border-yellow-400/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="playfair text-3xl font-bold text-yellow-400 gold-glow mb-4">
              VEDOROS
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Guardians of ancient treasures and divine relics from civilizations lost to time. 
              Each piece in our collection carries the sacred power and wisdom of the gods themselves.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="playfair text-lg font-semibold text-yellow-400 mb-4">
              Sacred Paths
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#divine-relics" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Divine Relics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Temple
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Ancient Civilizations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Sacred Artifacts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="playfair text-lg font-semibold text-yellow-400 mb-4">
              Divine Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-yellow-400" />
                relics@vedoros.com
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-yellow-400" />
                +1 (555) RELICS
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-yellow-400 mt-1 flex-shrink-0" />
                Temple of Antiquities<br />
                Sacred Grove District<br />
                Ancient Quarter, AQ 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Sacred Collections */}
        <div className="border-t border-yellow-400/20 pt-8 mb-8">
          <h3 className="playfair text-lg font-semibold text-yellow-400 mb-4 text-center">
            Sacred Collections by Era
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
            {[
              'Egyptian Dynasty',
              'Roman Empire',
              'Greek Pantheon',
              'Vedic Treasures',
              'Norse Legends',
              'Celtic Mysteries',
              'Babylonian Kings'
            ].map((collection) => (
              <a 
                key={collection}
                href="#" 
                className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
              >
                {collection}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-yellow-400/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 VEDOROS. All sacred rights reserved. Blessed by ancient guardians.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Sacred Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Divine Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Relic Authentication
            </a>
          </div>
        </div>

        {/* Mystical decoration */}
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center space-x-4 text-yellow-400 opacity-50">
            <span className="text-lg">⚜</span>
            <div className="w-16 h-px bg-yellow-400"></div>
            <span className="text-xl">☥</span>
            <div className="w-16 h-px bg-yellow-400"></div>
            <span className="text-lg">⚜</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;