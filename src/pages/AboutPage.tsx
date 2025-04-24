import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-stone-800">About Us</h1>
      
      {/* Mission Section */}
      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">Our Mission</h2>
            <p className="text-stone-600 mb-4 leading-relaxed">
              At Digi Fasal, we're on a mission to revolutionize India's agricultural marketplace by empowering farmers with digital tools and direct market access. We believe that by connecting farmers directly with consumers, we can ensure fair prices, reduce waste, and support sustainable farming practices.
            </p>
            <p className="text-stone-600 mb-4 leading-relaxed">
              We're creating a transparent ecosystem where farmers get better returns for their produce, and consumers receive fresher food at reasonable prices by cutting out unnecessary middlemen.
            </p>
            <p className="text-stone-600 mb-4 leading-relaxed">
              Our platform aims to bridge the digital divide in rural India, making technology accessible to farmers regardless of their technical knowledge or resources.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Farmers in field" 
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-stone-800">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-lime-100 rounded-full mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-lime-700">RS</span>
            </div>
            <h3 className="text-lg font-semibold text-stone-800">Rahul Sharma</h3>
            <p className="text-stone-500">Founder & CEO</p>
            <p className="text-stone-600 mt-2 text-sm">
              Former farmer with 15 years of experience in agricultural supply chains
            </p>
          </div>
          
          {/* Team Member 2 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-lime-100 rounded-full mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-lime-700">AP</span>
            </div>
            <h3 className="text-lg font-semibold text-stone-800">Anjali Patel</h3>
            <p className="text-stone-500">Chief Technology Officer</p>
            <p className="text-stone-600 mt-2 text-sm">
              Technology expert focused on creating accessible digital solutions for rural markets
            </p>
          </div>
          
          {/* Team Member 3 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-lime-100 rounded-full mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-lime-700">MG</span>
            </div>
            <h3 className="text-lg font-semibold text-stone-800">Manish Gupta</h3>
            <p className="text-stone-500">Operations Director</p>
            <p className="text-stone-600 mt-2 text-sm">
              Logistics expert with experience in managing agricultural supply chains across India
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6 text-stone-800">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Have questions or feedback? We'd love to hear from you! Reach out to our team using any of the contact methods below.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-lime-700 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-stone-800">Email</h3>
                  <p className="text-stone-600">info@digifasal.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-lime-700 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-stone-800">Phone</h3>
                  <p className="text-stone-600">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-lime-700 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-stone-800">Address</h3>
                  <p className="text-stone-600">
                    Digi Fasal Headquarters<br />
                    Tech Park, Sector 5<br />
                    Bangalore, India 560001
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-64 md:h-auto">
            <div className="absolute inset-0 bg-stone-200 rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <div className="mb-2">
                  <MapPin className="inline text-lime-700" size={24} />
                </div>
                <p className="text-stone-700">Map placeholder</p>
                <p className="text-stone-500 text-sm">Interactive map would be displayed here</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-lime-700 hover:text-lime-800 mt-2 text-sm"
                >
                  Open in Google Maps
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;