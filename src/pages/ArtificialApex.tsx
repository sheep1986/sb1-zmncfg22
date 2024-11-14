import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  MessageSquare,
  Star,
  Mail,
  Calendar,
  Phone,
  Globe,
  BarChart3,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Users,
    title: 'Advanced CRM',
    description: 'Manage contacts, track interactions, and nurture relationships with a powerful customer database.',
    gradient: 'from-[#FF0099] to-[#FF0099]/80'
  },
  {
    icon: MessageSquare,
    title: 'Unified Inbox',
    description: 'Manage all customer communications in one place - SMS, email, voice, and social media.',
    gradient: 'from-[#00FFE0] to-[#00FFE0]/80'
  },
  {
    icon: Star,
    title: 'Reputation Management',
    description: 'Monitor and manage your online reviews across all major platforms automatically.',
    gradient: 'from-[#7000FF] to-[#7000FF]/80'
  },
  {
    icon: Mail,
    title: 'Marketing Automation',
    description: 'Create sophisticated marketing campaigns with automated workflows and triggers.',
    gradient: 'from-[#FF0099] to-[#7000FF]/80'
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling',
    description: 'Smart booking system with automated reminders and calendar synchronization.',
    gradient: 'from-[#00FFE0] to-[#FF0099]/80'
  },
  {
    icon: Phone,
    title: 'Call Tracking',
    description: 'Track and record calls, measure campaign performance, and optimize conversions.',
    gradient: 'from-[#7000FF] to-[#00FFE0]/80'
  },
  {
    icon: Globe,
    title: 'Website Builder',
    description: 'Create high-converting websites and funnels with our drag-and-drop builder.',
    gradient: 'from-[#FF0099] to-[#00FFE0]/80'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Comprehensive reporting and insights across all your marketing activities.',
    gradient: 'from-[#7000FF] to-[#FF0099]/80'
  }
];

const benefits = [
  'All-in-one business management solution',
  'Automated lead nurturing and follow-up',
  'Multi-location business support',
  'White-label ready for agencies',
  'Enterprise-grade security',
  'Unlimited automation workflows'
];

export default function ArtificialApex() {
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
                Artificial Apex: Your Ultimate Business Command Center
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Transform your business operations with our comprehensive platform that combines 
                CRM, marketing automation, and business intelligence into one powerful solution.
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
                  alt="Business Command Center"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Everything You Need to Grow
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              One platform to manage your entire business operations, from lead generation 
              to customer retention
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 
                             transition-all duration-500 hover:bg-gray-800/50
                             border border-gray-700/50 hover:border-[#FF0099]/30 h-full">
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
                    
                    <h3 className="mt-4 text-lg font-semibold text-white 
                               group-hover:translate-x-1 transition-transform duration-500">
                      {feature.title}
                    </h3>
                    
                    <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 
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
                Why Choose Artificial Apex?
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
                  Transform Your Business
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
                  alt="Business Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="relative py-24 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block p-3 rounded-2xl bg-[#FF0099]/10 mb-6">
              <Bot className="h-8 w-8 text-[#FF0099]" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform leverages cutting-edge artificial intelligence to automate tasks, 
              predict customer behavior, and optimize your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Automation',
                description: 'AI-powered workflows that adapt to your business needs',
                icon: Zap
              },
              {
                title: 'Predictive Analytics',
                description: 'Forecast trends and make data-driven decisions',
                icon: BarChart3
              },
              {
                title: 'Intelligent Routing',
                description: 'Automatically assign leads and tasks to the right team members',
                icon: Users
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
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
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}