import React from 'react';
import { motion } from 'framer-motion';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="sr-only">{label}</span>
      <div className="text-gray-400 group-hover:text-[#FF0099] transition-colors duration-300">
        {icon}
      </div>
      <div className="absolute -inset-2 bg-[#FF0099]/10 rounded-full opacity-0 
                   group-hover:opacity-100 blur-md transition-opacity duration-300" />
    </motion.a>
  );
}