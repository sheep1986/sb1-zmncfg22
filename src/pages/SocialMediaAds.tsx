import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, PieChart, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Reach your ideal customers with laser-focused targeting based on demographics, interests, and behavior.'
  },
  {
    icon: PieChart,
    title: 'Data-Driven Optimization',
    description: 'Continuous campaign optimization using advanced analytics and AI-powered insights.'
  },
  {
    icon: DollarSign,
    title: 'ROI Focused',
    description: 'Maximize your return on ad spend with our performance-driven approach and transparent reporting.'
  }
];

export default function SocialMediaAds() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="cyber-grid opacity-30" />
        <div className="gradient-overlay opacity-80" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-20"
            >
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Transform Your Ad Spend Into Results
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Stop wasting your advertising budget. Our data-driven approach ensures 
                your ads reach the right audience at the right time, maximizing your ROI.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="relative group bg-[#FF0099] hover:bg-[#FF0099]/90 px-6 py-3 rounded-lg 
                           text-white font-medium inline-flex items-center transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <TrendingUp className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="#pricing"
                  className="relative group px-6 py-3 rounded-lg border-2 border-white/20 
                           text-white font-medium inline-flex items-center hover:bg-white/10 
                           transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    View Pricing
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
              <div className="relative rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=2070"
                  alt="Social Media Advertising"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-20 py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 
                         transition-all duration-500 hover:bg-gray-800/50"
              >
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
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

                {/* Subtle corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br 
                              from-transparent to-white/5 rounded-bl-xl opacity-0 
                              group-hover:opacity-100 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}