
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import { MessageSquare } from 'lucide-react';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Floating WhatsApp Action */}
          <a 
            href="https://wa.me/919876543210" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-900/40 hover:scale-110 transition-transform flex items-center justify-center"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="absolute right-full mr-4 bg-white text-emerald-900 px-4 py-2 rounded-lg shadow-xl font-bold text-sm whitespace-nowrap opacity-0 md:group-hover:opacity-100 transition-opacity">
              Order on WhatsApp
            </span>
          </a>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
