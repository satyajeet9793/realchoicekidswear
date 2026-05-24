import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#collections' },
    { name: 'Seasonal Wears', href: '#seasonal' },
    { name: 'About Us', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
    { name: 'Location', href: '#location' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass border-b border-white/10 ${
          scrolled ? 'py-2 shadow-md' : 'py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 z-50">
            <img 
              src="/rc-logo-gold.png" 
              alt="Real Choice Logo" 
              className="h-16 w-16 md:h-20 md:w-20 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Right side icons & toggle */}
          <div className="flex items-center gap-4 sm:gap-6 z-50">
            {/* Quick Links */}
            <div className="flex items-center gap-4 border-r border-gray-300 pr-4 sm:pr-6 sm:mr-2">
              <a href="https://instagram.com/realchoice.55" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-600 transition-colors">
                <FaInstagram size={22} className="sm:w-6 sm:h-6" />
              </a>
              <a href="https://wa.me/919423661010" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-green-500 transition-colors">
                <FaWhatsapp size={22} className="sm:w-6 sm:h-6" />
              </a>
              <a href="https://maps.google.com/?q=Real+Choice+Kids+And+Ladies+Wear+Kolhapur" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 transition-colors">
                <SiGooglemaps size={20} className="sm:w-5 sm:h-5" />
              </a>
            </div>

            {/* Menu Toggle */}
            <button
              className="text-gray-800 focus:outline-none hover:text-accent transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} className="sm:w-8 sm:h-8" /> : <Menu size={28} className="sm:w-8 sm:h-8" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-6 text-xl font-heading">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-900 hover:text-accent transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="mt-8 text-center text-sm text-gray-500 font-sans px-8">
                <p className="flex items-center justify-center gap-2 mb-2">
                  <MapPin size={16} /> Rajarampuri, Kolhapur
                </p>
                <p>WhatsApp: 9423661010</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
