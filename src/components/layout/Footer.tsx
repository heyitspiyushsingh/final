import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-800 text-stone-300 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Digi Fasal</h3>
            <p className="mb-4 text-sm">
              Connecting farmers and buyers directly, eliminating middlemen and ensuring fair prices for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-lime-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/marketplace" className="hover:text-lime-300 transition-colors">Marketplace</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-lime-300 transition-colors">Cart</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-lime-300 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm space-y-2">
              <p>Email: info@digifasal.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: Tech Park, Sector 5<br />Bangalore, India 560001</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-stone-700 mt-6 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Digi Fasal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;