
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check, FileText, Heart, Info, X } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const Products: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());
  const [infoModal, setInfoModal] = useState<{product: Product, tab: 'nutrition' | 'benefits' | 'ingredients'} | null>(null);

  const categories = ['All', 'Fresh', 'Flavored', 'Smoked', 'Snacks', 'Ready-to-Cook'];

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedIds(prev => new Set([...prev, product.id]));
    setTimeout(() => {
      setAddedIds(prev => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 2000);
  };

  const closeModal = () => setInfoModal(null);

  return (
    <div className="min-h-screen pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-emerald-900 mb-4">The Royal Pantry</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            From classic textures to bold infusions, discover the ultimate range of premium tofu products.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat 
                  ? 'bg-emerald-900 text-amber-400 shadow-md' 
                  : 'bg-white text-emerald-900 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col">
              <div className="relative h-72">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-900">
                  {product.weight}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-emerald-950">{product.name}</h3>
                  <span className="text-amber-600 font-bold text-lg">₹{product.price}</span>
                </div>
                <p className="text-stone-500 text-sm mb-6 flex-grow">{product.description}</p>
                <div className="mb-6">
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-900 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
                
                {/* Info Links */}
                <div className="flex flex-col space-y-4 mb-8">
                  <button 
                    onClick={() => setInfoModal({ product, tab: 'nutrition' })}
                    className="flex items-center w-fit text-left transition-transform active:scale-95"
                  >
                    <FileText className="w-5 h-5 mr-3 text-[#C26F12]" strokeWidth={2.5} />
                    <span className="text-[15px] font-semibold text-[#C26F12] tracking-wide">
                      View Nutrition Facts
                    </span>
                  </button>

                  <button 
                    onClick={() => setInfoModal({ product, tab: 'benefits' })}
                    className="flex items-center w-fit text-left transition-transform active:scale-95"
                  >
                    <Heart className="w-5 h-5 mr-3 text-[#0A8F76]" strokeWidth={2.5} />
                    <span className="text-[15px] font-semibold text-[#0A8F76] tracking-wide">
                      Explore Benefits
                    </span>
                  </button>

                  <button 
                    onClick={() => setInfoModal({ product, tab: 'ingredients' })}
                    className="flex items-center w-fit text-left transition-transform active:scale-95"
                  >
                    <Info className="w-5 h-5 mr-3 text-[#7A7265]" strokeWidth={2.5} />
                    <span className="text-[15px] font-semibold text-[#7A7265] tracking-wide">
                      See Ingredients
                    </span>
                  </button>
                </div>

                <button 
                  onClick={() => handleAddToCart(product)}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center transition-all ${
                    addedIds.has(product.id)
                      ? 'bg-emerald-600 text-white'
                      : 'bg-emerald-900 text-white hover:bg-emerald-800'
                  }`}
                >
                  {addedIds.has(product.id) ? (
                    <>
                      <Check className="w-5 h-5 mr-2" /> Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {infoModal && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img src={infoModal.product.image} className="w-full h-full object-cover" alt={infoModal.product.name} />
              
              {/* Fix: Close button moved here with high z-index and positioned properly */}
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 z-20 p-2.5 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full transition-all active:scale-90"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-transparent z-10 pointer-events-none"></div>
              
              <div className="absolute bottom-8 left-8 z-10 text-white">
                <h3 className="text-3xl font-serif font-bold mb-1">{infoModal.product.name}</h3>
                <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em]">{infoModal.product.category}</p>
              </div>
            </div>

            <div className="flex border-b border-stone-100">
              {(['nutrition', 'benefits', 'ingredients'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setInfoModal({ ...infoModal, tab })}
                  className={`flex-1 py-5 text-[13px] font-bold uppercase tracking-widest transition-all relative ${
                    infoModal.tab === tab 
                      ? 'text-[#C26F12]' 
                      : 'text-stone-400 hover:text-emerald-900'
                  }`}
                >
                  {tab}
                  {infoModal.tab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C26F12]"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="p-10 max-h-[50vh] overflow-y-auto custom-scrollbar">
              {infoModal.tab === 'nutrition' && (
                <div className="space-y-6">
                  <h4 className="text-[#004225] font-bold text-lg mb-2">Per Serving:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(infoModal.product.nutritionFacts || {}).map(([key, val]) => (
                      <div key={key} className="bg-stone-50/80 p-5 rounded-2xl border border-stone-100 flex flex-col justify-center">
                        <p className="text-[11px] text-stone-400 uppercase font-black tracking-widest mb-2">{key}</p>
                        <p className="text-xl font-bold text-[#004225]">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {infoModal.tab === 'benefits' && (
                <div className="space-y-4">
                  <h4 className="text-[#004225] font-bold text-lg mb-4">Why choose this product:</h4>
                  <ul className="space-y-5">
                    {infoModal.product.benefits?.map((benefit, i) => (
                      <li key={i} className="flex items-center space-x-4">
                        <div className="w-7 h-7 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4" strokeWidth={3} />
                        </div>
                        <span className="text-emerald-900 font-semibold">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {infoModal.tab === 'ingredients' && (
                <div className="space-y-6">
                  <p className="text-stone-500 font-medium leading-relaxed">
                    Our master artisans select only the finest natural ingredients to craft this royal fusion.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {infoModal.product.ingredientsList?.map((ing, i) => (
                      <span key={i} className="px-4 py-2 bg-amber-50 text-amber-800 rounded-xl text-sm font-bold border border-amber-100/50">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="px-8 pb-8">
              <button 
                onClick={closeModal}
                className="w-full py-5 bg-[#004225] text-white font-bold rounded-2xl shadow-lg hover:bg-emerald-900 transition-all active:scale-[0.98]"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Products;
