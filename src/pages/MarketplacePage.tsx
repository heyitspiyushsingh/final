import React, { useState } from 'react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Search } from 'lucide-react';

const MarketplacePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-stone-800">Marketplace</h1>
      
      {/* Search & Filter Section */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search */}
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" />
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-lime-600 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-stone-600">No products found. Try a different search or category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-stone-200"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-semibold text-stone-800">{product.name}</h2>
                  <span className="bg-lime-100 text-lime-800 text-xs px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <p className="text-stone-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold text-stone-800">₹{product.price}</span>
                    <span className="text-stone-500 text-sm">/{product.unit}</span>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(product);
                    }}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1 transition-colors"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
                <div className="mt-3 pt-3 border-t border-stone-100 text-xs text-stone-500 flex justify-between">
                  <span>Farmer: {product.farmer}</span>
                  <span>Location: {product.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketplacePage;