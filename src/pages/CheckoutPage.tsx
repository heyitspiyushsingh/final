import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: 'cod' | 'upi';
  upiId?: string;
}

const CheckoutPage: React.FC = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod',
    upiId: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect to marketplace if cart is empty
  React.useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/marketplace');
    }
  }, [cartItems, navigate]);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Pincode must be 6 digits';
    }
    
    if (formData.paymentMethod === 'upi' && !formData.upiId?.trim()) {
      newErrors.upiId = 'UPI ID is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call with timeout
      setTimeout(() => {
        // Order successful
        clearCart();
        navigate('/');
        
        // Show confirmation alert
        alert('Your order has been successfully placed! You will receive a confirmation shortly.');
        
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-6 text-stone-800">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-stone-200">
              Shipping Details
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-stone-700 mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full border ${errors.fullName ? 'border-red-500' : 'border-stone-300'} rounded-lg p-2`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full border ${errors.email ? 'border-red-500' : 'border-stone-300'} rounded-lg p-2`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full border ${errors.phone ? 'border-red-500' : 'border-stone-300'} rounded-lg p-2`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-medium text-stone-700 mb-1">
                Address*
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full border ${errors.address ? 'border-red-500' : 'border-stone-300'} rounded-lg p-2`}
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-stone-700 mb-1">
                  City*
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full border ${errors.city ? 'border-red-500' : 'border-stone-300'} rounded-lg p-2`}
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>
              
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-stone-700 mb-1">
                  State*
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`w-full border ${errors.state ? 'border-red-500' : 'border-stone-300'} rounded-lg p-2`}
                />
                {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
              </div>
              
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-stone-700 mb-1">
                  Pincode*
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className={`w-full border ${errors.pincode ? 'border-red-500' : 'border-stone-300'} rounded-lg p-2`}
                />
                {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
              </div>
            </div>
            
            <h2 className="text-xl font-semibold mb-4 pb-3 border-b border-stone-200">
              Payment Method
            </h2>
            
            <div className="mb-6">
              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-lime-600"
                  />
                  <span className="ml-2 text-stone-700">Cash on Delivery</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-lime-600"
                  />
                  <span className="ml-2 text-stone-700">Pay via UPI</span>
                </label>
                
                {formData.paymentMethod === 'upi' && (
                  <div className="ml-6 mt-2">
                    <label htmlFor="upiId" className="block text-sm font-medium text-stone-700 mb-1">
                      UPI ID*
                    </label>
                    <input
                      type="text"
                      id="upiId"
                      name="upiId"
                      value={formData.upiId}
                      onChange={handleInputChange}
                      placeholder="example@upi"
                      className={`w-full border ${errors.upiId ? 'border-red-500' : 'border-stone-300'} rounded-lg p-2`}
                    />
                    {errors.upiId && <p className="text-red-500 text-xs mt-1">{errors.upiId}</p>}
                  </div>
                )}
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-lime-700 hover:bg-lime-800 text-white py-3 px-6 rounded-lg font-medium w-full transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </button>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-4 pb-3 border-b border-stone-200">
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-stone-200 pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-stone-600">Subtotal</span>
                <span className="font-medium">₹{getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Delivery Fee</span>
                <span className="font-medium">₹50.00</span>
              </div>
              <div className="pt-3 border-t border-stone-200 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{(getCartTotal() + 50).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;