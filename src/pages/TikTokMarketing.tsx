import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  BarChart3, 
  ShoppingBag, 
  TrendingUp,
  Users,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Video,
    title: 'Content Strategy & Creation',
    description: 'Our team crafts engaging, trend-driven content tailored to your audience.',
    gradient: 'from-[#FF0099] to-[#FF0099]/80'
  },
  {
    icon: BarChart3,
    title: 'TikTok Ads Management',
    description: 'Reach your ideal audience with precise targeting and cost-effective ad placements.',
    gradient: 'from-[#00FFE0] to-[#00FFE0]/80'
  },
  {
    icon: ShoppingBag,
    title: 'TikTok Store Management',
    description: 'Seamless product integration and smooth shopping experiences for your customers.',
    gradient: 'from-[#7000FF] to-[#7000FF]/80'
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Reporting',
    description: 'Comprehensive performance reports detailing engagement and conversion rates.',
    gradient: 'from-[#FF0099] to-[#7000FF]/80'
  }
];

const benefits = [
  'Trend-driven content that resonates with your audience',
  'Increased visibility and engagement on TikTok',
  'Data-driven insights to refine your campaigns',
  'Access to a billion-strong user base',
  'Expert guidance through TikTok\'s ecosystem'
];

export default function TikTokMarketing() {
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
                Unlock Your Brand's Potential with TikTok Marketing
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                TikTok is more than a social media platform; it's a thriving marketplace with over 
                a billion active users. With its unique algorithm, even small brands can achieve 
                massive reach and engagement.
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
                  src="https://i.ibb.co/y5MRNGG/Como-descargar-los-videos-de-Tik-Tok-sin-marca-de-agua.jpg"
                  alt="TikTok Content Creation"
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
              Our TikTok Marketing Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer a full suite of TikTok marketing solutions to help your brand 
              stand out and convert viewers into customers
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
                Why Choose Artificial Media for TikTok?
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
                    <Users className="h-5 w-5 text-[#FF0099] flex-shrink-0" />
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
                  Start Your TikTok Journey
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
                  src="https://i.ibb.co/vDrJv0T/tiktok-tb.webp"
                  alt="TikTok Marketing Strategy"
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