import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import ServiceItem from './ServiceItem';
import NavLink from './NavLink';
import { services } from './navigationData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const itemVariants = {
  closed: { x: -16, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" }
  })
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <motion.div 
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800"
    >
      <div className="px-4 py-2 space-y-1">
        <motion.div
          custom={0}
          variants={itemVariants}
        >
          <NavLink to="/" isMobile>
            Home
          </NavLink>
        </motion.div>

        {services.map((service, index) => (
          <motion.div
            key={service.path}
            custom={index + 1}
            variants={itemVariants}
          >
            <ServiceItem
              service={service}
              index={index}
              activeIndex={null}
              setActiveIndex={() => {}}
              onClick={onClose}
              isMobile
            />
          </motion.div>
        ))}
        
        {['About', 'Blog'].map((item, index) => (
          <motion.div
            key={item}
            custom={index + services.length + 1}
            variants={itemVariants}
          >
            <NavLink to={`/${item.toLowerCase()}`} isMobile>
              {item}
            </NavLink>
          </motion.div>
        ))}
        
        <motion.div
          custom={services.length + 4}
          variants={itemVariants}
        >
          <a
            href="https://app.gohighlevel.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="block mt-4 px-3 py-2 bg-[#FF0099] text-white font-medium rounded-lg 
                     hover:bg-[#FF0099]/90 transition-colors text-center"
          >
            <span className="flex items-center justify-center">
              Client Portal
              <ExternalLink className="ml-2 h-4 w-4" />
            </span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}