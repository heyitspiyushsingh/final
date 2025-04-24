import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-center mb-4">
            <ShoppingCart size={64} className="text-stone-400" />
          </div>
          <h1 className="text-2xl font-bold mb-4 text-stone-800">Your cart is empty</h1>
          <p className="text-stone-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Link 
            to="/marketplace" 
            className="bg-lime-700 hover:bg-lime-800 text-white py-3 px-6 rounded-lg inline-block transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-stone-800">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-stone-200">
              <h2 className="text-lg font-semibold text-stone-800">Cart Items ({cartItems.length})</h2>
            </div>
            
            <ul>
              {cartItems.map(item => (
                <li key={item.id} className="border-b border-stone-200 last:border-b-0">
                  <div className="p-4 flex flex-col sm:flex-row sm:items-center">
                    <div className="sm:w-24 sm:h-24 mb-4 sm:mb-0 sm:mr-6">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-lg font-medium text-stone-800">{item.name}</h3>
                      <p className="text-stone-500 text-sm mb-2">
                        Price: ₹{item.price}/{item.unit}
                      </p>
                      
                      <div className="sm:flex sm:justify-between sm:items-center">
                        <div className="flex items-center my-2 sm:my-0">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="bg-stone-100 hover:bg-stone-200 p-1 rounded"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="mx-3 min-w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="bg-stone-100 hover:bg-stone-200 p-1 rounded"
                            aria-label="Increase quantity"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3 sm:mt-0">
                          <span className="font-semibold text-stone-800">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-4 text-red-500 hover:text-red-700 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-lg font-semibold mb-4 pb-4 border-b border-stone-200 text-stone-800">
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-stone-600">Subtotal</span>
                <span className="font-medium">₹{getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Delivery Fee</span>
                <span className="font-medium">₹50.00</span>
              </div>
              <div className="pt-4 border-t border-stone-200 flex justify-between font-bold">
                <span>Total</span>
                <span>₹{(getCartTotal() + 50).toFixed(2)}</span>
              </div>
            </div>
            
            <Link
              to="/checkout"
              className="bg-lime-700 hover:bg-lime-800 text-white py-3 px-4 rounded-lg font-medium w-full block text-center transition-colors"
            >
              Proceed to Checkout
            </Link>
            
            <Link
              to="/marketplace"
              className="mt-4 text-lime-700 hover:text-lime-800 py-2 px-4 rounded-lg font-medium w-full block text-center border border-current transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;