import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-900 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Let's Transform Your Business
          </h2>
          <p className="text-xl text-white font-medium leading-relaxed">
            Schedule a free consultation with our AI marketing experts and discover how 
            we can revolutionise your digital presence.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}