import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pastel-lavender/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pastel-pink/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1.5px] w-12 bg-[#9F7AEA]"></div>
            <span className="text-[#8A4FFF] uppercase tracking-widest font-semibold text-sm">Our Story</span>
            <div className="h-[1.5px] w-12 bg-[#9F7AEA]"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-10 leading-tight"
          >
            Defining Elegance & <span className="text-[#8A4FFF] italic">Comfort</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-12 shadow-pastel relative border border-white/40"
          >
            <div className="absolute -top-6 -left-6 text-6xl text-pastel-lavender font-heading">"</div>
            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed font-light mb-6">
              With 26 years of excellence, our brand stands for trust, quality, and timeless fashion. We are dedicated to creating stylish, comfortable clothing that blends tradition with modern trends, delivering confidence and elegance in every piece.
            </p>
            <div className="absolute -bottom-10 -right-6 text-6xl text-pastel-lavender font-heading rotate-180">"</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
