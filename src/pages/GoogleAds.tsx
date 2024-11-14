import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Image as ImageIcon,
  RefreshCw,
  ShoppingCart,
  BarChart3,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Search,
    title: 'Search Ads',
    description: 'Show your ads at the top of Google search results to capture high-intent users.',
    gradient: 'from-[#FF0099] to-[#FF0099]/80'
  },
  {
    icon: ImageIcon,
    title: 'Display Ads',
    description: 'Reach your audience across millions of websites with visually engaging display ads.',
    gradient: 'from-[#00FFE0] to-[#00FFE0]/80'
  },
  {
    icon: RefreshCw,
    title: 'Remarketing Campaigns',
    description: "Re-engage users who haven't converted yet with targeted remarketing campaigns.",
    gradient: 'from-[#7000FF] to-[#7000FF]/80'
  },
  {
    icon: ShoppingCart,
    title: 'Shopping Ads',
    description: 'Showcase your products directly in search results with images and prices.',
    gradient: 'from-[#FF0099] to-[#7000FF]/80'
  }
];

const metrics = [
  {
    value: '10x',
    label: 'Average ROI',
    description: 'Return on ad spend for optimized campaigns'
  },
  {
    value: '45%',
    label: 'CTR Increase',
    description: 'Average improvement in click-through rates'
  },
  {
    value: '3.5x',
    label: 'Conversion Rate',
    description: 'Higher than industry average'
  },
  {
    value: '24/7',
    label: 'Monitoring',
    description: 'Continuous campaign optimization'
  }
];

const benefits = [
  'Increased visibility on Google\'s search and display network',
  'Higher website traffic and conversion rates',
  'Remarketing to bring back lost customers',
  'Transparent reporting and insights',
  'Expert campaign management'
];

export default function GoogleAds() {
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
                Maximise Your Reach with Google Ads
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Connect with potential customers exactly when they're searching for your products 
                or services. Leverage the world's most powerful advertising platform with our 
                expert management.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="btn-primary group"
                >
                  <span className="relative z-10 flex items-center">
                    Start Your Campaign Today
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
                  src="https://i.ibb.co/2s70GCb/google-ads-strategies-2-scaled.jpg"
                  alt="Google Ads Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="relative z-20 py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#FF0099] mb-2">
                  {metric.value}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Google Ads Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive Google Ads solutions designed to deliver measurable results 
              and maximize your return on investment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 
                             transition-all duration-500 hover:bg-gray-800/50
                             border border-gray-700/50 hover:border-[#FF0099]/30">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} 
                                opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`} />
                  
                  <div className="relative z-10">
                    <div className="bg-gray-900/50 p-3 rounded-lg w-fit 
                                transform group-hover:scale-110 group-hover:rotate-3 
                                transition-all duration-500">
                      <service.icon className="h-6 w-6 text-white group-hover:text-[#FF0099] 
                                          transition-colors duration-500" />
                    </div>
                    
                    <h3 className="mt-6 text-xl font-semibold text-white 
                               group-hover:translate-x-1 transition-transform duration-500">
                      {service.title}
                    </h3>
                    
                    <p className="mt-4 text-gray-400 group-hover:text-gray-300 
                               transition-colors duration-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Why Choose Artificial Media for Google Ads?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Target className="h-5 w-5 text-[#FF0099] flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  Drive More Conversions
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0099]/20 to-[#00FFE0]/20 opacity-60" />
                <img
                  src="https://i.ibb.co/PDfQ4rG/image-1.webp"
                  alt="Google Ads Performance Metrics"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}