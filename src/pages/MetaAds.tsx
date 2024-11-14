import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook,
  Instagram,
  BarChart2,
  Target,
  RefreshCw,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle,
  LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Facebook,
    title: 'Facebook Ads',
    description: 'Create compelling campaigns that drive engagement, generate leads, and boost sales across Facebook.',
    gradient: 'from-[#FF0099] to-[#FF0099]/80'
  },
  {
    icon: Instagram,
    title: 'Instagram Ads',
    description: 'Capture attention with visually stunning ads across Stories, Reels, and the main feed.',
    gradient: 'from-[#00FFE0] to-[#00FFE0]/80'
  },
  {
    icon: RefreshCw,
    title: 'Remarketing Campaigns',
    description: 'Re-engage interested users and convert browsers into loyal customers.',
    gradient: 'from-[#7000FF] to-[#7000FF]/80'
  },
  {
    icon: BarChart2,
    title: 'A/B Testing & Optimization',
    description: 'Continuously test and optimize campaigns for maximum performance and ROI.',
    gradient: 'from-[#FF0099] to-[#7000FF]/80'
  }
];

const metrics = [
  {
    value: '2.9B',
    label: 'Daily Active Users',
    description: 'Across Meta platforms'
  },
  {
    value: '78%',
    label: 'Higher ROI',
    description: 'Than traditional advertising'
  },
  {
    value: '3.5x',
    label: 'Engagement Rate',
    description: 'Compared to industry average'
  },
  {
    value: '24/7',
    label: 'Campaign Monitoring',
    description: 'Real-time optimization'
  }
];

const benefits = [
  'Precision targeting across Facebook & Instagram',
  'Data-driven campaign optimization',
  'Creative excellence that drives engagement',
  'Comprehensive performance tracking',
  'Proven ROI-focused strategies'
];

export default function MetaAds() {
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
                Dominate Social Media with Meta Ads
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Harness the power of Facebook and Instagram to reach billions of active users. 
                Our data-driven approach ensures your ads reach the right audience at the right time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="btn-primary group"
                >
                  <span className="relative z-10 flex items-center">
                    Launch Your Meta Campaign
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
                  src="https://i.ibb.co/qpD0T3d/img-2024-09-09-195224-837.webp"
                  alt="Meta Ads Management"
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

      {/* Features Grid */}
      <section className="relative z-20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Meta Ads Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive Meta advertising solutions designed to maximize your ROI 
              and achieve your business objectives
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
      <section className="relative py-24 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Why Choose Us for Meta Ads?
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
                    <CheckCircle className="h-5 w-5 text-[#FF0099] flex-shrink-0" />
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
                  Start Your Campaign
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
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=2074"
                  alt="Meta Ads Performance"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Performance That Speaks
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our Meta Ads campaigns consistently deliver results that exceed industry standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                metric: '2.1x',
                label: 'Higher CTR',
                description: 'Than industry average'
              },
              {
                icon: LineChart,
                metric: '45%',
                label: 'Lower CPA',
                description: 'Cost per acquisition'
              },
              {
                icon: Users,
                metric: '87%',
                label: 'Client Retention',
                description: 'Long-term partnerships'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 
                         border border-gray-700/50 hover:border-[#FF0099]/30
                         transition-all duration-500"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#FF0099]/10 p-3 rounded-lg">
                    <item.icon className="h-6 w-6 text-[#FF0099]" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {item.metric}
                  </div>
                  <div className="text-lg font-semibold text-[#FF0099] mb-2">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}