
import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, CreditCard, Truck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal, itemCount } = useCart();
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');

  if (step === 'success') {
    return (
      <div className="min-h-[80vh] flex flex-center flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-8">
          <Truck className="w-12 h-12 text-emerald-600 animate-bounce" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-4">Order Placed Successfully!</h1>
        <p className="text-stone-500 mb-10 max-w-md">Your royal feast is being prepared. We'll send you a tracking link via WhatsApp shortly.</p>
        <Link to="/products" className="px-10 py-4 bg-emerald-900 text-white font-bold rounded-xl">Continue Shopping</Link>
      </div>
    );
  }

  if (itemCount === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-6">
        <ShoppingBag className="w-20 h-20 text-stone-200" />
        <h2 className="text-3xl font-serif font-bold text-emerald-900">Your basket is empty</h2>
        <p className="text-stone-500">Add some royal tofu to your life!</p>
        <Link to="/products" className="px-10 py-4 bg-amber-500 text-emerald-900 font-bold rounded-xl shadow-lg">Browse Collection</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={() => step === 'checkout' ? setStep('cart') : null} className={`${step === 'cart' ? 'hidden' : 'block'} p-2 hover:bg-stone-100 rounded-full`}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-4xl font-serif font-bold text-emerald-900">
              {step === 'cart' ? 'Your Royal Selection' : 'Checkout'}
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 'cart' ? 'bg-amber-500 text-emerald-900' : 'bg-emerald-100 text-emerald-900'}`}>1</div>
            <div className="w-12 h-0.5 bg-stone-200"></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 'checkout' ? 'bg-amber-500 text-emerald-900' : 'bg-stone-100 text-stone-400'}`}>2</div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 'cart' ? (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex items-center space-x-6">
                    <img src={item.image} className="w-24 h-24 rounded-xl object-cover" alt={item.name} />
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-emerald-950">{item.name}</h3>
                      <p className="text-stone-400 text-sm">{item.weight}</p>
                      <p className="text-amber-600 font-bold mt-1">₹{item.price}</p>
                    </div>
                    <div className="flex items-center space-x-3 bg-stone-50 px-3 py-1 rounded-lg">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-amber-600"><Minus className="w-4 h-4" /></button>
                      <span className="font-bold w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-amber-600"><Plus className="w-4 h-4" /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-stone-300 hover:text-red-500 transition-colors">
                      <Trash2 className="w-6 h-6" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-amber-500" /> Delivery Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Full Name" className="p-4 bg-stone-50 rounded-xl outline-none focus:ring-2 ring-amber-500/20 border border-stone-100" />
                    <input type="tel" placeholder="Phone Number" className="p-4 bg-stone-50 rounded-xl outline-none focus:ring-2 ring-amber-500/20 border border-stone-100" />
                    <textarea placeholder="Complete Delivery Address" className="p-4 bg-stone-50 rounded-xl outline-none focus:ring-2 ring-amber-500/20 border border-stone-100 md:col-span-2 h-32" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-amber-500" /> Payment Option
                  </h3>
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border border-emerald-900 rounded-xl bg-emerald-50/50 cursor-pointer">
                      <input type="radio" name="pay" className="accent-emerald-900 w-4 h-4 mr-4" defaultChecked />
                      <span className="font-medium text-emerald-900">Cash on Delivery</span>
                    </label>
                    <label className="flex items-center p-4 border border-stone-200 rounded-xl hover:bg-stone-50 cursor-pointer opacity-50">
                      <input type="radio" name="pay" className="accent-emerald-900 w-4 h-4 mr-4" disabled />
                      <span className="font-medium text-stone-500">Online Payment (Coming Soon)</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 sticky top-32">
              <h3 className="text-xl font-bold text-emerald-900 mb-8 pb-4 border-b border-stone-100">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-stone-500">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>Delivery Fee</span>
                  <span className="text-emerald-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-emerald-900 pt-4 border-t border-stone-100">
                  <span>Total</span>
                  <span>₹{cartTotal}</span>
                </div>
              </div>

              {step === 'cart' ? (
                <button 
                  onClick={() => setStep('checkout')}
                  className="w-full py-5 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold rounded-2xl shadow-xl transition-all"
                >
                  Proceed to Checkout
                </button>
              ) : (
                <button 
                  onClick={() => setStep('success')}
                  className="w-full py-5 bg-emerald-900 hover:bg-emerald-800 text-white font-bold rounded-2xl shadow-xl transition-all"
                >
                  Place Order
                </button>
              )}
              
              <p className="text-center text-xs text-stone-400 mt-6">
                Secure SSL Encrypted Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
