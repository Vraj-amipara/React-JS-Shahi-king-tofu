
import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-stone-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Crown className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                SHAHI <span className="text-amber-500">KING</span> TOFU
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              India's premium plant-based protein destination. We bring royalty to your table without compromising your health.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-emerald-950 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/products" className="hover:text-amber-500 transition-colors">Premium Collection</Link></li>
              <li><Link to="/recipes" className="hover:text-amber-500 transition-colors">Culinary Art</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">Our Legacy</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-bold text-white mb-8">Trust & Safety</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Refund & Returns</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-8">Newsletter</h4>
            <p className="text-sm mb-6">Subscribe for royal recipes and exclusive offers.</p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full outline-none focus:border-amber-500"
              />
              <button className="bg-amber-500 text-emerald-950 font-bold px-4 py-2 rounded-lg hover:bg-amber-600 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Shahi King Tofu (Pvt) Ltd. All Rights Reserved. Crafted with Royal Pride.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
