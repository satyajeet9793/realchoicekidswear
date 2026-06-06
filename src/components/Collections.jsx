import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';

const Collections = () => {
  const [activeMainTab, setActiveMainTab] = useState('boys');
  const [activeSubFilter, setActiveSubFilter] = useState('all');

  const mainTabs = [
    { id: 'boys', label: 'Boys Collection', color: 'bg-pastel-blue shadow-pastel-blue-glow border-pastel-blue/40', activeText: 'text-primary' },
    { id: 'girls', label: 'Girls Collection', color: 'bg-pastel-pink shadow-pastel-pink-glow border-pastel-pink/40', activeText: 'text-primary' },
    { id: 'ladies', label: 'Ladies Collection', color: 'bg-pastel-lavender shadow-pastel-lavender-glow border-pastel-lavender/40', activeText: 'text-primary' }
  ];

  const subFilters = {
    boys: [
      { id: 'all', label: 'All Items' },
      { id: 'ethnic', label: 'Ethnic Wear' },
      { id: 'party', label: 'Party Wear' },
      { id: 'casuals', label: 'Casuals' }
    ],
    girls: [
      { id: 'all', label: 'All Items' },
      { id: 'ethnic', label: 'Ethnic Wear' },
      { id: 'party', label: 'Party Wear' },
      { id: 'casuals', label: 'Casuals' }
    ],
    ladies: [
      { id: 'all', label: 'All Items' },
      { id: 'ethnic', label: 'Ethnic Wear' },
      { id: 'cotton', label: 'Cotton Sets' },
      { id: 'casuals', label: 'Casuals' }
    ]
  };

  const products = [
    // === BOYS COLLECTION ===
    // Ethnic Wear (6 types)
    { id: 'b_e_1', mainCat: 'boys', subCat: 'ethnic', title: 'Jacket Kurta', image: '/images/boys_jacket_kurta.png', categoryLabel: 'Ethnic Wear' },
    { id: 'b_e_2', mainCat: 'boys', subCat: 'ethnic', title: 'Jodhpuri Suit', image: '/images/boys_jodhpuri.png', categoryLabel: 'Ethnic Wear' },
    { id: 'b_e_3', mainCat: 'boys', subCat: 'ethnic', title: 'Dhoti Kurta', image: '/images/boys_dhoti_kurta.png', categoryLabel: 'Ethnic Wear' },
    { id: 'b_e_4', mainCat: 'boys', subCat: 'ethnic', title: 'Salwar Kurta', image: '/images/boys_salwar_kurta.png', categoryLabel: 'Ethnic Wear' },
    { id: 'b_e_5', mainCat: 'boys', subCat: 'ethnic', title: 'Blazer Set', image: '/images/boys_blazer_set.png', categoryLabel: 'Ethnic Wear' },
    { id: 'b_e_6', mainCat: 'boys', subCat: 'ethnic', title: 'Only Blazer', image: '/images/boys_only_blazer.png', categoryLabel: 'Ethnic Wear' },
    // Party Wear (4 types)
    { id: 'b_p_1', mainCat: 'boys', subCat: 'party', title: 'Denim Jacket', image: '/images/boys_party_jacket_set.png', categoryLabel: 'Party Wear' },
    { id: 'b_p_2', mainCat: 'boys', subCat: 'party', title: 'Shirt-Pant Set', image: '/images/boys_party_shirt_pant_set.png', categoryLabel: 'Party Wear' },
    { id: 'b_p_3', mainCat: 'boys', subCat: 'party', title: 'Vest Coat', image: '/images/boys_party_vest_coat.png', categoryLabel: 'Party Wear' },
    { id: 'b_p_4', mainCat: 'boys', subCat: 'party', title: 'Modi Jacket', image: '/images/boys_party_modi_jacket.png', categoryLabel: 'Party Wear' },
    // Casuals (3 types)
    { id: 'b_c_1', mainCat: 'boys', subCat: 'casuals', title: 'T-Shirts', image: '/images/boys_casual_tshirts.png', categoryLabel: 'Casuals' },
    { id: 'b_c_2', mainCat: 'boys', subCat: 'casuals', title: 'Premium Jeans', image: '/images/boys_casual_jeans.png', categoryLabel: 'Casuals' },
    { id: 'b_c_3', mainCat: 'boys', subCat: 'casuals', title: 'Co-ord Sets', image: '/images/boys_casual_coord.png', categoryLabel: 'Casuals' },

    // === GIRLS COLLECTION ===
    // Ethnic Wear (4 types)
    { id: 'g_e_1', mainCat: 'girls', subCat: 'ethnic', title: 'Lehenga', image: '/images/girls_ethnic_lehenga.png', categoryLabel: 'Ethnic Wear' },
    { id: 'g_e_2', mainCat: 'girls', subCat: 'ethnic', title: 'Plazo Set', image: '/images/girls_ethnic_plazo.png', categoryLabel: 'Ethnic Wear' },
    { id: 'g_e_3', mainCat: 'girls', subCat: 'ethnic', title: 'Garara', image: '/images/girls_ethnic_garara.png', categoryLabel: 'Ethnic Wear' },
    { id: 'g_e_4', mainCat: 'girls', subCat: 'ethnic', title: 'Cotton Sets', image: '/images/girls_ethnic_wear.png', categoryLabel: 'Ethnic Wear' },
    // Party Wear (3 types)
    { id: 'g_p_1', mainCat: 'girls', subCat: 'party', title: 'Indo Western', image: '/images/girls_party_indowestern.png', categoryLabel: 'Party Wear' },
    { id: 'g_p_2', mainCat: 'girls', subCat: 'party', title: 'Frocks', image: '/images/girls_party_frock.png', categoryLabel: 'Party Wear' },
    { id: 'g_p_3', mainCat: 'girls', subCat: 'party', title: 'Premium Gown', image: '/images/girls_party_gown.png', categoryLabel: 'Party Wear' },
    // Casuals (5 types)
    { id: 'g_c_1', mainCat: 'girls', subCat: 'casuals', title: 'Tops', image: '/images/girls_casual_top.png', categoryLabel: 'Casuals' },
    { id: 'g_c_2', mainCat: 'girls', subCat: 'casuals', title: 'Jeans', image: '/images/girls_casual_jeans.png', categoryLabel: 'Casuals' },
    { id: 'g_c_3', mainCat: 'girls', subCat: 'casuals', title: 'Cotton Frocks', image: '/images/girls_casual_cotton_frock.png', categoryLabel: 'Casuals' },
    { id: 'g_c_4', mainCat: 'girls', subCat: 'casuals', title: 'T-shirts', image: '/images/girls_casual_tshirt.png', categoryLabel: 'Casuals' },
    { id: 'g_c_5', mainCat: 'girls', subCat: 'casuals', title: 'Co-ord Sets', image: '/images/girls_casual_coord.png', categoryLabel: 'Casuals' },

    // === LADIES COLLECTION ===
    // Ethnic Wear (6 types)
    { id: 'l_e_1', mainCat: 'ladies', subCat: 'ethnic', title: 'Designer Lehenga', image: '/images/ladies_ethnic_lehenga.png', categoryLabel: 'Ethnic Wear' },
    { id: 'l_e_2', mainCat: 'ladies', subCat: 'ethnic', title: 'Plazo Set', image: '/images/ladies_ethnic_plazo.png', categoryLabel: 'Ethnic Wear' },
    { id: 'l_e_3', mainCat: 'ladies', subCat: 'ethnic', title: 'Garara', image: '/images/ladies_ethnic_garara.png', categoryLabel: 'Ethnic Wear' },
    { id: 'l_e_4', mainCat: 'ladies', subCat: 'ethnic', title: 'Indo Western', image: '/images/ladies_ethnic_indowestern.png', categoryLabel: 'Ethnic Wear' },
    { id: 'l_e_5', mainCat: 'ladies', subCat: 'ethnic', title: 'Short One Piece Gown', image: '/images/ladies_gown_short_1.png', categoryLabel: 'Ethnic Wear' },
    { id: 'l_e_6', mainCat: 'ladies', subCat: 'ethnic', title: 'Long One Piece Gown', image: '/images/ladies_gown_long_1.png', categoryLabel: 'Ethnic Wear' },
    // Cotton Sets (3 types)
    { id: 'l_cot_1', mainCat: 'ladies', subCat: 'cotton', title: 'Jaipuri Kurti Set', image: '/images/ladies_cotton_jaipuri.jpg', categoryLabel: 'Cotton Sets' },
    { id: 'l_cot_2', mainCat: 'ladies', subCat: 'cotton', title: 'Lucknowi Kurti Set', image: '/images/ladies_cotton_lucknowi.png', categoryLabel: 'Cotton Sets' },
    { id: 'l_cot_3', mainCat: 'ladies', subCat: 'cotton', title: 'Printed Sets', image: '/images/ladies_cotton_printed.jpg', categoryLabel: 'Cotton Sets' },
    // Casuals (3 types)
    { id: 'l_c_1', mainCat: 'ladies', subCat: 'casuals', title: 'Designer Top', image: '/images/ladies_casual_top.png', categoryLabel: 'Casuals' },
    { id: 'l_c_2', mainCat: 'ladies', subCat: 'casuals', title: 'Fashion Jeans', image: '/images/ladies_casual_jeans.png', categoryLabel: 'Casuals' },
    { id: 'l_c_3', mainCat: 'ladies', subCat: 'casuals', title: 'Midy', image: '/images/ladies_casual_midy.png', categoryLabel: 'Casuals' },
  ];

  const handleMainTabChange = (tabId) => {
    setActiveMainTab(tabId);
    setActiveSubFilter('all');
  };

  const getSubFilterStyles = (filterId) => {
    const isSelected = activeSubFilter === filterId;
    if (!isSelected) return 'text-gray-500 hover:text-primary bg-transparent hover:bg-gray-100/60 border-transparent';
    
    switch (activeMainTab) {
      case 'boys':
        return 'bg-pastel-blue/50 text-primary border-pastel-blue font-bold scale-105 shadow-sm';
      case 'girls':
        return 'bg-pastel-pink/50 text-primary border-pastel-pink font-bold scale-105 shadow-sm';
      case 'ladies':
        return 'bg-pastel-lavender/50 text-primary border-pastel-lavender font-bold scale-105 shadow-sm';
      default:
        return 'bg-accent/15 text-accent border-accent/35 font-bold scale-105 shadow-sm';
    }
  };

  const getBadgeStyles = () => {
    switch (activeMainTab) {
      case 'boys':
        return 'bg-pastel-blue text-primary border-pastel-blue/30';
      case 'girls':
        return 'bg-pastel-pink text-primary border-pastel-pink/30';
      case 'ladies':
        return 'bg-pastel-lavender text-primary border-pastel-lavender/30';
      default:
        return 'bg-white text-primary border-gray-100';
    }
  };

  const getCardHoverShadow = () => {
    switch (activeMainTab) {
      case 'boys':
        return 'hover:shadow-pastel-blue-glow hover:border-pastel-blue/20';
      case 'girls':
        return 'hover:shadow-pastel-pink-glow hover:border-pastel-pink/20';
      case 'ladies':
        return 'hover:shadow-pastel-lavender-glow hover:border-pastel-lavender/20';
      default:
        return 'hover:shadow-primary/10';
    }
  };

  const getEnquireButtonStyles = () => {
    switch (activeMainTab) {
      case 'boys':
        return 'bg-primary hover:bg-[#A9D8FF] text-white hover:text-primary shadow-primary/20 hover:shadow-pastel-blue-glow';
      case 'girls':
        return 'bg-primary hover:bg-[#FFA5CC] text-white hover:text-primary shadow-primary/20 hover:shadow-pastel-pink-glow';
      case 'ladies':
        return 'bg-primary hover:bg-pastel-peach text-white hover:text-primary shadow-primary/20 hover:shadow-pastel-lavender-glow';
      default:
        return 'bg-primary hover:bg-accent text-white';
    }
  };

  const filteredProducts = products.filter((item) => {
    const matchMain = item.mainCat === activeMainTab;
    const matchSub = activeSubFilter === 'all' || item.subCat === activeSubFilter;
    return matchMain && matchSub;
  });

  return (
    <section id="collections" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative Pastel Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-pastel-lavender/40 rounded-full blur-3xl pointer-events-none animate-pulse duration-4000"></div>
      <div className="absolute top-1/3 right-1/4 w-[25rem] h-[25rem] bg-pastel-pink/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-pastel-blue/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-pastel-green/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-[#9F7AEA]"></span>
            <span className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm">Exclusive Catalog</span>
            <span className="w-8 h-[2px] bg-[#9F7AEA]"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6 tracking-tight leading-tight"
          >
            Discover Our <span className="text-[#8A4FFF] italic">Collections</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-gray-600 font-sans text-lg font-light leading-relaxed"
          >
            Explore our curated, elegant, and premium clothing designs for boys, girls, and ladies. Built with top-tier fabrics and customized tailoring aesthetics.
          </motion.p>
        </div>

        {/* Main Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-2xl mx-auto">
          {mainTabs.map((tab) => {
            const isSelected = activeMainTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleMainTabChange(tab.id)}
                className={`px-4 py-2 md:px-8 md:py-3.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 border shadow-md ${
                  isSelected
                    ? `${tab.color} ${tab.activeText} scale-105 font-bold`
                    : 'bg-white text-gray-600 border-gray-100 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Sub-Filters / Subtypes */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 border-b border-gray-200/60 pb-6 max-w-3xl mx-auto">
          {subFilters[activeMainTab].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveSubFilter(filter.id)}
              className={`px-3 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-widest transition-all duration-200 border ${getSubFilterStyles(filter.id)}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((item, index) => {
              const whatsappText = `Hi Real Choice! I'm interested in looking at the elegant "${item.title}" under "${item.categoryLabel}" from your "${item.mainCat === 'boys' ? 'Boys' : item.mainCat === 'girls' ? 'Girls' : 'Ladies'}" Collection. Please share more photos and pricing.`;
              const whatsappUrl = `https://wa.me/919423661010?text=${encodeURIComponent(whatsappText)}`;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  whileHover={{ y: -8 }}
                  className={`group bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-gray-200/30 transition-all duration-300 border border-gray-100/80 flex flex-col justify-between ${getCardHoverShadow()}`}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-light to-white">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <span className={`absolute top-3 left-3 md:top-4 md:left-4 px-2 py-0.5 md:px-3.5 md:py-1 text-[8px] md:text-[10px] font-extrabold uppercase tracking-widest rounded-full border shadow-sm z-10 ${getBadgeStyles()}`}>
                      {item.categoryLabel}
                    </span>

                    {/* Interactive hover overlay */}
                    <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <a 
                        href={whatsappUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`px-3 py-2 md:px-5 md:py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-1 md:gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg ${getEnquireButtonStyles()}`}
                      >
                        <MessageCircle size={15} /> Enquire Now
                      </a>
                    </div>
                  </div>

                  {/* Info Area */}
                  <div className="p-3 md:p-5 text-center flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest block mb-1">
                        Real Choice Catalog
                      </span>
                      <h3 className="text-base md:text-lg font-heading font-extrabold text-gray-900 line-clamp-1">
                        {item.title}
                      </h3>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-medium">
                      <span>Premium Quality</span>
                      <a 
                        href={whatsappUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent font-bold flex items-center gap-1 transition-colors"
                      >
                        Enquire <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Category Showcase banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-[2.5rem] overflow-hidden bg-primary text-white border border-white/5 shadow-2xl relative"
        >
          {/* Subtle decoration with selected tab pastels */}
          <div className={`absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full blur-3xl pointer-events-none opacity-20 ${
            activeMainTab === 'boys' ? 'bg-pastel-blue' : activeMainTab === 'girls' ? 'bg-pastel-pink' : 'bg-pastel-lavender'
          }`}></div>

          <div className="grid md:grid-cols-2 items-center">
            {/* Left Image Showcase */}
            <div className="relative h-[200px] md:h-[400px] overflow-hidden group">
              <img 
                src={activeMainTab === 'boys' ? '/images/boys_ethnic_wear.png' : activeMainTab === 'girls' ? '/images/girls_ethnic_wear.png' : '/images/ladies_ethnic_wear.png'} 
                alt="Showcase Banner" 
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/30 to-transparent hidden md:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent md:hidden"></div>
            </div>

            {/* Right Content */}
            <div className="p-6 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
              <span className={`text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2 ${
                activeMainTab === 'boys' ? 'text-pastel-blue' : activeMainTab === 'girls' ? 'text-pastel-pink' : 'text-pastel-lavender'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-pastel-peach animate-ping"></span> Real Choice Couture
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 leading-tight">
                {activeMainTab === 'boys' ? 'Boys Traditional & Partywear' : activeMainTab === 'girls' ? 'Girls Cute & Elegant Outfits' : 'Ladies Designer Wear'}
              </h3>
              <p className="text-gray-300 font-sans font-light text-sm md:text-base mb-8 leading-relaxed">
                {activeMainTab === 'boys' 
                  ? 'Dress your young gentleman in prestigious ethnic and high-end formal wear. Discover our handpicked jackets, Jodhpuris, dhoti sets, and formal blazers.'
                  : activeMainTab === 'girls'
                  ? 'Explore beautiful lehengas, cute designer frocks, and modern casual co-ord sets. Exquisite designs crafted to make every moment magical for your little princess.'
                  : 'Indulge in royal designer lehengas, stunning long and short evening gowns, and classy modern casuals tailored for premium styling and uncompromised confidence.'}
              </p>
              
              <div>
                <a 
                  href={`https://wa.me/919423661010?text=${encodeURIComponent(`Hi Real Choice! I'm interested in exploring the complete premium catalog of your ${activeMainTab === 'boys' ? 'Boys' : activeMainTab === 'girls' ? 'Girls' : 'Ladies'} Collection. Please assist me.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-lg ${
                    activeMainTab === 'boys' 
                      ? 'bg-pastel-blue hover:bg-white text-primary' 
                      : activeMainTab === 'girls'
                      ? 'bg-pastel-pink hover:bg-white text-primary'
                      : 'bg-pastel-lavender hover:bg-white text-primary'
                  }`}
                >
                  <ShoppingBag size={15} /> Request Full Catalog
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Collections;
