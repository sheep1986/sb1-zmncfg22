import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceItem from './navigation/ServiceItem';
import NavLink from './navigation/NavLink';
import { services } from './navigation/navigationData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#FF0099]/20 blur-2xl rounded-full 
                            group-hover:bg-[#FF0099]/30 transition-all duration-500" />
              <img 
                src="https://i.ibb.co/VHVJKmT/am-web-logo-white.png" 
                alt="ArtificialMedia Logo" 
                className="h-8 md:h-12 w-auto relative z-10"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center space-x-1 text-white group-hover:text-[#FF0099] transition-colors"
              >
                <span>Services</span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-[500px] rounded-xl bg-gray-900/95 backdrop-blur-xl 
                             shadow-2xl border border-gray-800/50 overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-4 p-6">
                      {services.map((service, index) => (
                        <ServiceItem
                          key={service.path}
                          service={service}
                          index={index}
                          activeIndex={activeIndex}
                          setActiveIndex={setActiveIndex}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/payg-leads">PAYG Leads</NavLink>
            <NavLink to="/tiktok-marketing">TikTok Ads</NavLink>
            <NavLink to="/about">About</NavLink>

            <a 
              href="https://app.gohighlevel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-6 py-2 rounded-lg bg-[#FF0099] 
                       text-white transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Client Portal
                <ExternalLink className="ml-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
              </span>
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <NavLink to="/" isMobile>Home</NavLink>
              {services.map((service, index) => (
                <ServiceItem
                  key={service.path}
                  service={service}
                  index={index}
                  activeIndex={null}
                  setActiveIndex={() => {}}
                  onClick={() => setIsOpen(false)}
                  isMobile
                />
              ))}
              <NavLink to="/payg-leads" isMobile>PAYG Leads</NavLink>
              <NavLink to="/tiktok-marketing" isMobile>TikTok Ads</NavLink>
              <NavLink to="/about" isMobile>About</NavLink>
              <a
                href="https://app.gohighlevel.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full px-3 py-2 bg-[#FF0099] text-white font-medium rounded-lg 
                         hover:bg-[#FF0099]/90 transition-colors text-center"
              >
                <span className="flex items-center justify-center">
                  Client Portal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}