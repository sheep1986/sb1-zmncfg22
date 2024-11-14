import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceItemProps {
  service: {
    name: string;
    path: string;
    description: string;
    icon: string;
  };
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  onClick?: () => void;
  isMobile?: boolean;
}

export default function ServiceItem({ 
  service, 
  index, 
  activeIndex, 
  setActiveIndex, 
  onClick,
  isMobile 
}: ServiceItemProps) {
  const baseClasses = isMobile
    ? "flex items-center justify-between px-3 py-2 rounded-lg text-white hover:bg-gray-800/50 transition-colors w-full text-center"
    : "relative group p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/50";

  return (
    <Link
      to={service.path}
      onMouseEnter={() => !isMobile && setActiveIndex(index)}
      onMouseLeave={() => !isMobile && setActiveIndex(null)}
      onClick={onClick}
      className={baseClasses}
    >
      <div className={`flex items-center ${!isMobile ? 'space-x-4' : 'space-x-3'} ${isMobile ? 'w-full justify-center' : ''}`}>
        <div className="relative flex-shrink-0">
          <span className="text-2xl relative z-10">{service.icon}</span>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: activeIndex === index ? 1 : 0 }}
            className="absolute inset-0 bg-[#FF0099]/10 rounded-full blur-md"
          />
        </div>
        <div className={`${isMobile ? 'text-center' : ''}`}>
          <p className="text-white font-medium group-hover:text-[#FF0099] transition-colors">
            {service.name}
          </p>
          <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">
            {service.description}
          </p>
        </div>
        {isMobile && (
          <ArrowRight className="h-4 w-4 text-gray-400 self-center flex-shrink-0 ml-2" />
        )}
      </div>
      {!isMobile && activeIndex === index && (
        <motion.div
          layoutId="highlight"
          className="absolute inset-0 bg-gradient-to-r from-[#FF0099]/5 to-transparent rounded-lg -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </Link>
  );
}