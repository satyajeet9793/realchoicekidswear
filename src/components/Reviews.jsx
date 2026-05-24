import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Priya S.",
    text: "Best kids fashion collection in Kolhapur! The quality is amazing and the styles are so trendy.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sneha Patil",
    text: "Beautiful ladies wear and amazing quality. The staff was very helpful in finding the perfect lehenga for my event.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anjali M.",
    text: "Very trendy and stylish clothing collections. Will definitely visit again for the seasonal wear!",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Desai",
    text: "Loved the party wear designs. The premium aesthetic of the store matches their gorgeous clothing line.",
    rating: 5,
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
          >
            Clients <span className="text-[#8A4FFF] italic">POV</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-sans"
          >
            What our customers say about us
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
            <button 
              onClick={prevReview}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent transition-colors focus:outline-none"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
            <button 
              onClick={nextReview}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent transition-colors focus:outline-none"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="overflow-hidden px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[2rem] p-8 md:p-12 text-center relative shadow-pastel border border-pastel-lavender/30"
              >
                <Quote size={48} className="mx-auto text-pastel-lavender/40 mb-6" />
                
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-pastel-peach text-pastel-peach stroke-amber-400" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 font-heading">
                  "{reviews[currentIndex].text}"
                </p>

                <h4 className="text-sm font-bold text-gray-900 tracking-widest uppercase">
                  — {reviews[currentIndex].name}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-accent w-8' : 'bg-gray-300 hover:bg-accent/50'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
