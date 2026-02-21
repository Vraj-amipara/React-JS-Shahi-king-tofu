import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartPulse, Zap, Award, ArrowRight, Quote } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Delicious Tofu Dishes"
          />
          <div className="absolute inset-0 bg-emerald-950/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-widest text-amber-400 uppercase border border-amber-400/30 rounded-full backdrop-blur-md">
            The Royal Standard of Plant-Based Protein
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Pure Taste. <span className="text-amber-400">Royal Health.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-10 text-stone-200">
            Experience the exquisite fusion of ancient Indian culinary wisdom and modern health with Shahi King Tofu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold rounded-lg transition-all transform hover:scale-105">
              Order Now
            </Link>
            <Link to="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/30 backdrop-blur-md transition-all">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-emerald-900 mb-2">Our Signature Selection</h2>
            <p className="text-stone-600">Handcrafted premium tofu varieties for every royal palate.</p>
          </div>
          <Link to="/products" className="hidden md:flex items-center text-amber-600 font-bold hover:underline">
            View All Products <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="mb-8 md:hidden">
          <Link
            to="/products"
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-amber-700 bg-amber-50 border border-amber-200"
          >
            View All Products <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-stone-100">
              <div className="h-64 overflow-hidden relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-amber-500 text-emerald-950 text-xs font-bold px-3 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-950 mb-2">{product.name}</h3>
                <p className="text-stone-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-emerald-900">₹{product.price}</span>
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-900 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                  >
                    View Details <ArrowRight className="ml-1.5 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-emerald-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">The Shahi Commitment</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: ShieldCheck, title: "Utmost Hygiene", desc: "Untouched by hands, processed in ISO-certified clean rooms." },
              { icon: HeartPulse, title: "Heart Healthy", desc: "Zero cholesterol and rich in Omega-3 fatty acids." },
              { icon: Zap, title: "Protein Power", desc: "2x more protein than standard tofu varieties." },
              { icon: Award, title: "Royal Sourcing", desc: "Only non-GMO, organic soybeans from the Malwa plateau." }
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto border border-amber-500/20">
                  <item.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-stone-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200" 
              className="rounded-3xl shadow-2xl z-10 relative"
              alt="Healthy Tofu Meal"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500 -z-10 rounded-3xl opacity-20"></div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold text-emerald-900 leading-tight">
              A Health Revolution for the <br/> <span className="text-amber-600">Modern Monarch.</span>
            </h2>
            <p className="text-stone-600 text-lg">
              Tofu isn't just a substitute; it's a superfood. At Shahi King, we preserve its natural nutrients through our proprietary cold-press method.
            </p>
            <ul className="space-y-4">
              {[
                "100% Lactose-Free & Vegan",
                "Contains all 9 essential amino acids",
                "Helps in weight management & muscle building",
                "Promotes healthy skin and hair vitality"
              ].map((text, idx) => (
                <li key={idx} className="flex items-center text-emerald-900 font-medium">
                  <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-emerald-900 mb-16">Our Royal Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Vikram Mehta", role: "Fitness Coach", text: "The Tikka Tofu is a game changer. I've finally found a protein source that tastes as good as it works." },
              { name: "Priya Sharma", role: "Nutritionist", text: "I recommend Shahi King to all my clients. The hygiene levels and nutrient density are unmatched in India." },
              { name: "Chef Rajeev", role: "Fusion Specialist", text: "The texture of their Fresh Tofu is remarkably similar to Malai Paneer, but with better health stats!" }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex flex-col items-center text-center">
                <Quote className="w-10 h-10 text-amber-300 mb-4" />
                <p className="italic text-stone-600 mb-6">"{t.text}"</p>
                <h4 className="font-bold text-emerald-900">{t.name}</h4>
                <p className="text-sm text-stone-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="royal-gradient rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Taste Royalty?</h2>
          <p className="text-stone-300 mb-10 text-lg">Join thousands who have switched to a healthier, tastier lifestyle.</p>
          <Link to="/products" className="inline-block px-12 py-5 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold rounded-xl transition-all shadow-xl shadow-amber-900/20">
            Browse Our Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
