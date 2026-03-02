import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-modina-dark border-t border-white/5 pt-16 lg:pt-24 pb-8 lg:pb-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:mb-20">
          {/* Brand & Intro */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <Link to="/" className="flex items-center gap-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <Logo className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-lg lg:text-xl tracking-wide text-white uppercase">
                MODINA <span className="text-modina-slate">RIM</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Precision forged auto parts and premium rims. Globally trusted by manufacturers and distributors for uncompromising quality and durability.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-modina-panel border border-white/5 flex items-center justify-center text-gray-400 hover:border-modina-red hover:text-modina-red transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-modina-panel border border-white/5 flex items-center justify-center text-gray-400 hover:border-modina-red hover:text-modina-red transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-modina-panel border border-white/5 flex items-center justify-center text-gray-400 hover:border-modina-red hover:text-modina-red transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-modina-panel border border-white/5 flex items-center justify-center text-gray-400 hover:border-modina-red hover:text-modina-red transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <h3 className="font-display font-bold text-white tracking-[0.2em] uppercase text-xs">Company</h3>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">About Us</Link></li>
              <li><Link to="/about#mission" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Mission & Values</Link></li>
              <li><Link to="/quality" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Quality Assurance</Link></li>
              <li><Link to="/downloads" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Download Center</Link></li>
              <li><Link to="/ai-engineer" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">AI Engineer</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <h3 className="font-display font-bold text-white tracking-[0.2em] uppercase text-xs">Products</h3>
            <ul className="flex flex-col gap-4">
              <li><Link to="/products?category=motorcycle" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Motorcycle Parts</Link></li>
              <li><Link to="/products?category=easybike" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Easy Bike Rims</Link></li>
              <li><Link to="/products?category=rickshaw" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Rickshaw Rims</Link></li>
              <li><Link to="/products?category=specialty" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Van & Specialty</Link></li>
              <li><Link to="/products?category=hardware" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Hardware & Accessories</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <h3 className="font-display font-bold text-white tracking-[0.2em] uppercase text-xs">Contact Us</h3>
            <ul className="flex flex-col gap-4 lg:gap-6">
              <li className="flex items-start gap-4 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-modina-slate shrink-0 mt-0.5" />
                <span className="leading-relaxed">123 Industrial Park Road,<br />Dhaka 1200, Bangladesh</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-modina-slate shrink-0" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-modina-slate shrink-0" />
                <span>sales@modinarim.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 lg:pt-10 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-6">
          <p className="text-gray-500 text-xs tracking-wider uppercase text-center md:text-left">
            &copy; {new Date().getFullYear()} Modina Rim & Parts Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 lg:gap-8">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors text-xs tracking-wider uppercase">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors text-xs tracking-wider uppercase">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
