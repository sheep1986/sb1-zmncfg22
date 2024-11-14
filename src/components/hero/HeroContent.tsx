import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const sparkleVariants = {
  animate: {
    rotate: [0, 5, -5, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const shimmerVariants = {
  animate: {
    x: ['-200%', '200%'],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export default function HeroContent({ isLoaded }: { isLoaded: boolean }) {
  return (
    <motion.div
      className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      variants={containerVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
    >
      <motion.div variants={itemVariants} className="mb-8">
        <motion.img
          src="https://i.ibb.co/VHVJKmT/am-web-logo-white.png"
          alt="ArtificialMedia Logo"
          className="h-16 w-auto mx-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
      >
        <span className="relative inline-block">
          Future of Digital Marketing
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#FF0099]/0 via-[#FF0099]/5 to-[#FF0099]/0"
            variants={shimmerVariants}
            animate="animate"
          />
        </span>
        <motion.span
          className="inline-block ml-2"
          variants={sparkleVariants}
          animate="animate"
        >
          <Sparkles className="inline-block h-8 w-8 sm:h-12 sm:w-12 text-[#FF0099]" />
        </motion.span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg sm:text-xl md:text-2xl mb-12 text-white/90 font-medium max-w-3xl mx-auto"
      >
        Revolutionising digital presence through AI-powered solutions
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
      >
        <Link
          to="/contact"
          className="w-full sm:w-auto group relative overflow-hidden px-8 py-4 rounded-lg font-semibold
                   bg-gradient-to-r from-[#FF0099] to-[#FF0099]/80 text-white
                   transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10 flex items-center justify-center">
            Get Started
            <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#FF0099] via-white/20 to-[#FF0099]"
            initial={{ opacity: 0, x: '-100%' }}
            whileHover={{ 
              opacity: 0.3,
              x: '100%',
              transition: { duration: 1, ease: "easeInOut" }
            }}
          />
        </Link>

        <Link
          to="/services"
          className="w-full sm:w-auto group relative overflow-hidden px-8 py-4 rounded-lg font-semibold
                   border-2 border-white/20 text-white backdrop-blur-sm
                   transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10 flex items-center justify-center">
            Explore Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
            initial={{ opacity: 0, x: '-100%' }}
            whileHover={{ 
              opacity: 0.3,
              x: '100%',
              transition: { duration: 1, ease: "easeInOut" }
            }}
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}