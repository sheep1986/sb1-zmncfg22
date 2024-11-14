import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight } from 'lucide-react';

export default function BookingPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if user has already interacted with the popup
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 7000); // Show after 7 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    if (!hasInteracted) {
      localStorage.setItem('hasSeenPopup', 'true');
      setHasInteracted(true);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800 w-full max-w-md"
          >
            <div className="p-6">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-[#FF0099]/10 p-3 rounded-xl">
                  <Gift className="h-6 w-6 text-[#FF0099]" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Exclusive Offer
                </h3>
              </div>

              <p className="text-gray-300 mb-4">
                Get a <span className="text-[#FF0099] font-semibold">FREE</span> custom landing page 
                worth £749 when you book a consultation today.
              </p>

              <button
                onClick={scrollToContact}
                className="w-full bg-[#FF0099] text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#FF0099]/90 transition-colors group"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}