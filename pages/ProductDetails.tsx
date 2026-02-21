import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Heart, Info, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';

const ProductDetails: React.FC = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = useMemo(
    () => PRODUCTS.find((item) => item.id === productId),
    [productId]
  );

  if (!product) {
    return (
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-2xl mx-auto text-center bg-white border border-stone-200 rounded-3xl p-10">
          <h1 className="text-3xl font-bold text-emerald-950 mb-4">Product not found</h1>
          <p className="text-stone-600 mb-8">The product you selected is not available.</p>
          <Link
            to="/products"
            className="inline-flex items-center px-5 py-3 rounded-xl font-bold bg-emerald-900 text-white hover:bg-emerald-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/products"
          className="inline-flex items-center text-emerald-900 hover:text-emerald-700 font-semibold mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
          <div className="h-[22rem] lg:h-full">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="p-8 md:p-10">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wide">
                {product.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                {product.weight}
              </span>
            </div>

            <h1 className="text-3xl font-serif font-bold text-emerald-950 mb-3">{product.name}</h1>
            <p className="text-stone-600 leading-relaxed mb-5">{product.description}</p>
            <p className="text-2xl font-bold text-amber-600 mb-8">Rs {product.price}</p>

            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center transition-all mb-8 ${
                added ? 'bg-emerald-600 text-white' : 'bg-emerald-900 text-white hover:bg-emerald-800'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5 mr-2" /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                </>
              )}
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-stone-50 rounded-2xl p-5">
                <div className="flex items-center text-[#C26F12] font-semibold mb-3">
                  <Info className="w-4 h-4 mr-2" /> Nutrition
                </div>
                <div className="space-y-2 text-sm text-stone-700">
                  {Object.entries(product.nutritionFacts || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between gap-3">
                      <span className="capitalize">{key}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-stone-50 rounded-2xl p-5">
                <div className="flex items-center text-[#0A8F76] font-semibold mb-3">
                  <Heart className="w-4 h-4 mr-2" /> Benefits
                </div>
                <ul className="space-y-2 text-sm text-stone-700">
                  {(product.benefits || []).map((benefit) => (
                    <li key={benefit} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-50 rounded-2xl p-5">
                <div className="flex items-center text-stone-700 font-semibold mb-3">
                  <Info className="w-4 h-4 mr-2" /> Ingredients
                </div>
                <ul className="space-y-2 text-sm text-stone-700">
                  {(product.ingredientsList || []).map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
