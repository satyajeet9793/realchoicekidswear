import React from 'react';
import { motion } from 'framer-motion';
import { CloudRain, MessageCircle, Camera } from 'lucide-react';

const SeasonalWears = () => {
  const items = [
    { title: "Men's Raincoats", image: "/images/mens_zeel_raincoat.png" },
    { title: "Women's Raincoats", image: "/images/womens_zeel_raincoat.png" },
    { title: "Kids' Raincoats", image: "/images/kids_zeel_raincoat.png" },
    { title: "Men's Jackets", image: "/images/mens_winter_jacket.png" },
    { title: "Women's Jackets", image: "/images/womens_winter_jacket.png" },
  ];

  return (
    <section id="seasonal" className="py-24 relative overflow-hidden bg-[#1E122C]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pastel-lavender/10 rounded-full mix-blend-screen filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pastel-green/10 rounded-full mix-blend-screen filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-white/5 backdrop-blur-md rounded-full mb-6 border border-white/10 text-pastel-lavender"
          >
            <CloudRain size={24} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Seasonal Wears
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 font-light"
          >
            Explore our premium collection of seasonal gear — raincoats and jackets designed for maximum comfort and style.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden border border-white/5 bg-white/5 hover:bg-white/10 hover:border-pastel-lavender/30 transition-all duration-300 shadow-2xl hover:shadow-pastel-lavender-glow backdrop-blur-sm"
            >
              {/* Image Area */}
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E122C]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8 flex flex-col items-center text-center">
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{item.title}</h3>
                <a 
                  href={`https://wa.me/919423661010?text=Hi! I am interested in ${item.title} from Real Choice.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white/5 hover:bg-pastel-lavender text-white hover:text-primary backdrop-blur-md rounded-full font-medium transition-all duration-300 flex items-center gap-2 border border-white/10 hover:border-pastel-lavender shadow-lg"
                >
                  <MessageCircle size={16} /> Enquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalWears;
