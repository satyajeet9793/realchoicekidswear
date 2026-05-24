import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Navigation } from 'lucide-react';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
          >
            Visit <span className="text-[#8A4FFF] italic">Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-sans max-w-2xl mx-auto"
          >
            We'd love to help you find your perfect outfit. Drop by our store or get in touch with us for any inquiries.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Details & Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 shadow-pastel border border-pastel-lavender/30"
          >
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-10">
              <a href="https://wa.me/919423661010" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-pastel-lavender/35 flex items-center justify-center text-primary group-hover:bg-[#8A4FFF] group-hover:text-white transition-colors shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">WhatsApp / Mobile</p>
                  <p className="text-lg font-medium text-gray-900 group-hover:text-accent transition-colors">+91 9423661010</p>
                </div>
              </a>

              <a href="https://instagram.com/realchoice.55" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-pastel-pink/40 flex items-center justify-center text-primary group-hover:bg-[#8A4FFF] group-hover:text-white transition-colors shrink-0">
                  <InstagramIcon size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Instagram</p>
                  <p className="text-lg font-medium text-gray-900 group-hover:text-accent transition-colors">@realchoice.55</p>
                </div>
              </a>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-pastel-blue/40 flex items-center justify-center text-primary group-hover:bg-[#8A4FFF] group-hover:text-white transition-colors shrink-0 animate-pulse">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Store Address</p>
                  <p className="text-md font-medium text-gray-900 leading-relaxed">
                    Omega Tower, Opposite Raja Bal Pan Mandir, Main Road, 9th Lane, Rajarampuri, Kolhapur – 416008, Maharashtra
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Enquiry Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
              <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
              <textarea placeholder="How can we help you?" rows="3" className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"></textarea>
              <button className="w-full py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-accent transition-colors shadow-lg shadow-gray-900/10">
                Send Enquiry
              </button>
            </form>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
            id="location"
          >
            <div className="glass rounded-3xl overflow-hidden shadow-pastel border border-pastel-lavender/30 h-full flex flex-col relative">
              <div className="p-6 bg-white/80 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-xl font-heading font-bold text-gray-900">Find Us Here</h3>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Omega+Tower,+Rajarampuri,+Kolhapur,+Maharashtra+416008" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-pastel-lavender/40 text-primary rounded-full text-sm font-semibold hover:bg-pastel-lavender transition-all flex items-center gap-2"
                >
                  <Navigation size={16} /> Get Directions
                </a>
              </div>
              <div className="flex-1 w-full min-h-[400px]">
                <iframe
                  title="Real Choice Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.571408018449!2d74.23842107412854!3d16.698319622329245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100146059fb25%3A0x6b6371c1f24d7760!2sRajarampuri%2C%20Kolhapur%2C%20Maharashtra%20416008!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale-[20%] contrast-[1.1]"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
