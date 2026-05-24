import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/realchoicevideo.MP4" type="video/mp4" />
        </video>
        {/* Cinematic dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#1E122C]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center justify-center text-center pt-20">
        
        {/* Original Text Logo */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src="/logo-transparent.png" 
          alt="Real Choice" 
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain mb-8 drop-shadow-2xl"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-300 font-light text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Premium fashion destination for Kids & Women in Kolhapur. Blending timeless tradition with modern trends.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#collections"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="group relative px-8 py-3 md:px-10 md:py-4 border border-[#D4AF37] text-[#D4AF37] hover:text-[#1E122C] overflow-hidden transition-colors duration-300 inline-block"
        >
          <span className="relative z-10 font-medium uppercase tracking-wider text-sm">Explore Collection</span>
          <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-gray-400 text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
