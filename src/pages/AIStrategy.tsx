import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, BarChart3, Zap, ArrowRight, Target, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Brain,
    title: 'Intelligent Decision Making',
    description: 'Leverage advanced AI algorithms to make data-driven marketing decisions that maximize ROI.',
    gradient: 'from-[#FF0099] to-[#FF0099]/80'
  },
  {
    icon: Cpu,
    title: 'Automated Optimization',
    description: 'Continuously optimize your campaigns with machine learning for peak performance.',
    gradient: 'from-[#00FFE0] to-[#00FFE0]/80'
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Forecast trends and customer behavior with AI-powered analytics and insights.',
    gradient: 'from-[#7000FF] to-[#7000FF]/80'
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Identify and reach your ideal customers with AI-driven audience segmentation.',
    gradient: 'from-[#FF0099] to-[#7000FF]/80'
  }
];

const benefits = [
  'Increased brand visibility and recognition',
  'Higher conversion rates and ROI',
  'Enhanced customer engagement and loyalty',
  'Data-driven decision making',
  'Scalable marketing solutions'
];

export default function AIStrategy() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
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
                Transform Your Marketing with AI Strategy
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Harness the power of artificial intelligence to revolutionize your marketing approach. 
                Our AI strategies deliver unprecedented results and ROI through data-driven decision making.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="btn-primary group"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="#features"
                  className="relative group px-6 py-3 rounded-lg border-2 border-white/20 
                           text-white font-medium inline-flex items-center hover:bg-white/10 
                           transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    Learn More
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
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0099]/20 to-[#00FFE0]/20 opacity-60" />
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070"
                  alt="AI Strategy Visualization"
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
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to optimize your marketing campaigns
              and decision-making processes
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Why Choose Our AI Strategy?
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
                    <Zap className="h-5 w-5 text-[#FF0099] flex-shrink-0" />
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
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
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
                  src="https://images.unsplash.com/photo-1676299081847-824916de7933?auto=format&fit=crop&q=80&w=2070"
                  alt="AI Technology"
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