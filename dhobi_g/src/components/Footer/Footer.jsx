// import React from "react";

// function Footer() {
//   return (
//     <div>
//       <footer className="bg-blue-700 text-white text-center p-4 mt-12">
//         <p>© {new Date().getFullYear()} Dhobi G. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Footer;



import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Dhobi G</h3>
            <p className="text-gray-700 mb-6 max-w-md">
              Your trusted laundry partner providing premium cleaning services with care and precision. 
              We make your clothes look and feel like new.
            </p>
            
            {/* Social Media Icons */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#007BB5] text-white rounded-full flex items-center justify-center  transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#007BB5] text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 text-white bg-[#007BB5] rounded-full flex items-center justify-centertransition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-black hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-black hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-black hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/faqs" className="text-black hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/careers" className="text-black hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services/wash-and-fold" className="text-black  transition-colors">
                  Wash and Fold
                </a>
              </li>
              <li>
                <a href="/services/dry-cleaning" className="text-black  transition-colors">
                  Dry Cleaning
                </a>
              </li>
              <li>
                <a href="/services/regular-laundry" className="text-black  transition-colors">
                  Regular Laundry
                </a>
              </li>
              <li>
                <a href="/services/premium-laundry" className="text-black transition-colors">
                  Premium Laundry
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#007BB5]" />
                <a 
                  href="mailto:info@dhobig.com" 
                  className="text-black transition-colors"
                >
                  info@dhobig.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#007BB5]" />
                <a 
                  href="tel:+1234567890" 
                  className="text-black transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#007BB5] mt-1" />
                <div className="text-black">
                  <p>123 Laundry Street</p>
                  <p>Clean City, CC 12345</p>
                  <p className="mt-2">456 Wash Avenue</p>
                  <p>Fresh Town, FT 67890</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              <a 
                href="/privacy-policy" 
                className="text-black transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                className="text-black transition-colors"
              >
                Terms of Service
              </a>
            </div>

            {/* Copyright */}
            <div className="text-black md:text-right">
              <p>© {currentYear} All Rights Reserved Dhobi G</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

