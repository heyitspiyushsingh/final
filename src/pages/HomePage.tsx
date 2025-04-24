import React from 'react';
import { Link } from 'react-router-dom';
import { Tractor, ShoppingBasket, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="bg-gradient-to-r from-lime-700 to-lime-800 text-white py-20 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Connecting Farmers and Buyers
              </h1>
              <p className="text-lg md:text-xl mb-8 text-lime-100 leading-relaxed">
                A digital marketplace that cuts out the middlemen, providing fair prices for farmers and quality produce for consumers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/marketplace" 
                  className="bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
                >
                  <ShoppingBasket size={20} className="mr-2" />
                  Explore Marketplace
                </Link>
                <Link 
                  to="/about" 
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-lime-800 text-white py-3 px-6 rounded-lg font-medium transition-colors inline-flex items-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/2882630/pexels-photo-2882630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Farmer with crops" 
                className="rounded-lg shadow-xl w-full object-cover h-80 md:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">How Digi Fasal Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 text-lime-700 rounded-full mb-6">
                <Tractor size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-stone-800">Farmers List Produce</h3>
              <p className="text-stone-600">
                Farmers can easily list their fresh produce, set their own fair prices, and reach customers directly.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 text-lime-700 rounded-full mb-6">
                <ShoppingBasket size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-stone-800">Buyers Shop Online</h3>
              <p className="text-stone-600">
                Customers browse available produce, add items to cart, and complete purchases all in one place.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 text-lime-700 rounded-full mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-stone-800">Direct Connection</h3>
              <p className="text-stone-600">
                No middlemen means better prices for consumers and higher profits for farmers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-stone-800">Ready to Explore Fresh Produce?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-stone-600">
            Browse our marketplace to discover fresh, locally grown produce directly from farmers across the country.
          </p>
          <Link 
            to="/marketplace" 
            className="bg-lime-700 hover:bg-lime-800 text-white py-3 px-8 rounded-lg font-medium transition-colors inline-flex items-center"
          >
            <ShoppingBasket size={20} className="mr-2" />
            Visit Marketplace
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;