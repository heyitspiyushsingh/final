import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { getItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-lime-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold flex items-center">
            <span className="text-lime-300">Digi</span>Fasal
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-lime-300 transition-colors">Home</Link>
            <Link to="/marketplace" className="hover:text-lime-300 transition-colors">Marketplace</Link>
            <Link to="/about" className="hover:text-lime-300 transition-colors">About Us</Link>
            <Link to="/cart" className="relative hover:text-lime-300 transition-colors">
              <ShoppingCart size={20} className="inline mr-1" />
              <span>Cart</span>
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="hover:text-lime-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/marketplace" 
              className="hover:text-lime-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link 
              to="/about" 
              className="hover:text-lime-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/cart" 
              className="hover:text-lime-300 transition-colors relative"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart size={18} className="inline mr-1" />
              <span>Cart</span>
              {getItemCount() > 0 && (
                <span className="absolute top-0 -right-6 bg-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;