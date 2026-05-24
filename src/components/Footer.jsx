import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#1E122C] text-white pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Decorative Blur glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pastel-lavender/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pastel-pink/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/rc-logo-gold.png" alt="Real Choice" className="h-20 w-20 object-contain mb-6 hover:scale-105 transition-transform duration-300" />
            <p className="text-gray-300 font-light mb-6 leading-relaxed">
              Premium clothing fashion store in Kolhapur offering trendy, stylish, and elegant collections for kids and women.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/realchoice.55" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pastel-pink hover:text-primary hover:shadow-pastel-pink-glow transition-all">
                <InstagramIcon size={18} />
              </a>
              <a href="https://wa.me/919423661010" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pastel-blue hover:text-primary hover:shadow-pastel-blue-glow transition-all">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-pastel-blue transition-colors">Home</a></li>
              <li><a href="#collections" className="hover:text-pastel-pink transition-colors">Our Collections</a></li>
              <li><a href="#seasonal" className="hover:text-pastel-lavender transition-colors">Seasonal Wears</a></li>
              <li><a href="#about" className="hover:text-pastel-green transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-pastel-peach transition-colors">Client Reviews</a></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-6 border-b border-white/10 pb-2 inline-block">Categories</h4>
            <ul className="space-y-3 text-gray-300">
              <li><span className="hover:text-pastel-blue transition-colors cursor-pointer">Boys Fashion</span></li>
              <li><span className="hover:text-pastel-pink transition-colors cursor-pointer">Girls Party Wear</span></li>
              <li><span className="hover:text-pastel-lavender transition-colors cursor-pointer">Ladies Lehenga</span></li>
              <li><span className="hover:text-pastel-peach transition-colors cursor-pointer">Kurti Sets</span></li>
              <li><span className="hover:text-pastel-green transition-colors cursor-pointer">Winter Jackets</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-pastel-lavender shrink-0 mt-1" />
                <span className="text-sm leading-relaxed">Omega Tower, Opposite Raja Bal Pan Mandir, Main Road, 9th Lane, Rajarampuri, Kolhapur – 416008</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-pastel-blue shrink-0" />
                <span>+91 9423661010</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Real Choice Kolhapur. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed with <span className="text-pastel-pink">♥</span> for premium fashion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
