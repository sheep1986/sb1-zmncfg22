import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette,
  Layout,
  Cog,
  Puzzle,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Link as LinkIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Palette,
    title: 'Custom Store Design',
    description: 'We design visually stunning, user-friendly Shopify stores tailored to your brand identity.',
    gradient: 'from-[#FF0099] to-[#FF0099]/80'
  },
  {
    icon: Layout,
    title: 'UX & UI Optimisation',
    description: 'Optimize your store navigation and design to keep customers engaged and drive sales.',
    gradient: 'from-[#00FFE0] to-[#00FFE0]/80'
  },
  {
    icon: Cog,
    title: 'Backend Development',
    description: 'Streamline operations with customized backend solutions and automation tools.',
    gradient: 'from-[#7000FF] to-[#7000FF]/80'
  },
  {
    icon: Puzzle,
    title: 'App Integration',
    description: 'Seamlessly integrate third-party apps to enhance your store functionality.',
    gradient: 'from-[#FF0099] to-[#7000FF]/80'
  }
];

const benefits = [
  'Customized store designs tailored to your brand',
  'Optimized for both desktop and mobile shopping',
  'Increased efficiency through backend automation',
  'Scalable solutions for future growth',
  'Ongoing support and maintenance'
];

export default function ShopifyDevelopment() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF0099]/10 via-transparent to-[#00FFE0]/10" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-[#FF0099]/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-[#00FFE0]/5 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-20"
            >
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Build Your Dream Online Store with Shopify
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Shopify is a leading e-commerce platform, trusted by millions worldwide. Let us help you create 
                a store that not only looks great but converts visitors into loyal customers.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="btn-primary group inline-flex"
                >
                  <span className="relative z-10 flex items-center">
                    Start Building Your Store
                    <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0099]/20 to-[#00FFE0]/20 opacity-60" />
                <img
                  src="https://i.ibb.co/R3Twrh4/best-electronics-store-shopify-themes.jpg"
                  alt="Modern Shopify Store Design"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative z-20 py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Shopify Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We provide comprehensive Shopify solutions to help you create a store that 
              not only looks great but also converts visitors into loyal customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 
                             transition-all duration-500 hover:bg-gray-800/50
                             border border-gray-700/50 hover:border-[#FF0099]/30">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} 
                                opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`} />
                  
                  <div className="relative z-10">
                    <div className="bg-gray-900/50 p-3 rounded-lg w-fit 
                                transform group-hover:scale-110 group-hover:rotate-3 
                                transition-all duration-500">
                      <feature.icon className="h-6 w-6 text-white group-hover:text-[#FF0099] 
                                          transition-colors duration-500" />
                    </div>
                    
                    <h3 className="mt-6 text-xl font-semibold text-white 
                               group-hover:translate-x-1 transition-transform duration-500">
                      {feature.title}
                    </h3>
                    
                    <p className="mt-4 text-gray-400 group-hover:text-gray-300 
                               transition-colors duration-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
              Why Choose Artificial Media for Shopify Development?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-gray-800/30 p-4 rounded-lg border border-gray-700/50"
                >
                  <CheckCircle className="h-5 w-5 text-[#FF0099] flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center"
              >
                Start Your E-commerce Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}