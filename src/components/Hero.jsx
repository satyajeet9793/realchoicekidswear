import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col md:block md:min-h-[100dvh] bg-[#1E122C] md:bg-black overflow-hidden pt-[80px] md:pt-0">
      
      {/* Video Container: Aspect video on mobile, Fullscreen absolute on desktop */}
      <div className="relative w-full aspect-video md:aspect-auto md:absolute md:inset-0 md:h-full z-0 overflow-hidden bg-black flex items-center justify-center">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute inset-0 w-full h-full object-cover opacity-100 md:opacity-85"
        >
          <source src="/realchoicevideo.MP4" type="video/mp4" />
        </video>
        
        {/* Cinematic dark overlay gradient */}
        <div className="absolute inset-0 bg-black/20 md:bg-gradient-to-b md:from-black/50 md:via-black/20 md:to-[#1E122C]"></div>

        {/* Mobile Logo: Centered precisely over the video */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src="/logo-transparent.png" 
          alt="Real Choice" 
          className="absolute z-10 w-[75vw] max-w-sm object-contain drop-shadow-2xl md:hidden"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center justify-center text-center py-12 md:py-0 md:min-h-[100dvh]">
        
        {/* Desktop Logo (Hidden on mobile) */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src="/logo-transparent.png" 
          alt="Real Choice" 
          className="hidden md:block w-[85vw] max-w-md lg:max-w-lg object-contain mb-8 drop-shadow-2xl"
        />

        {/* Description (3-line white info) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-300 font-light text-sm sm:text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 px-2 sm:px-0"
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
    </section>
  );
};

export default Hero;
