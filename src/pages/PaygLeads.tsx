import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Coins, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Users,
    title: 'Quality-Focused Leads',
    description: 'We prioritize quality over quantity, ensuring each lead matches your specific business requirements.'
  },
  {
    icon: Coins,
    title: 'Pay As You Go',
    description: 'Flexible payment model - only pay for the leads you receive, with no long-term contracts required.'
  },
  {
    icon: Target,
    title: 'Targeted Matching',
    description: 'Advanced targeting ensures leads align perfectly with your business goals and target market.'
  }
];

const benefits = [
  'No long-term contracts or commitments',
  'Pre-qualified leads matched to your criteria',
  'Transparent pricing and reporting',
  'Dedicated account manager',
  'Regular performance reviews',
  'Scalable to your business needs'
];

export default function PaygLeads() {
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
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
                Transform Your Lead Generation with Pay-As-You-Go
              </h1>
              <p className="text-xl font-semibold text-white mb-8 leading-relaxed drop-shadow-lg">
                Stop wasting money on unqualified leads. Our PAYG service delivers 
                high-quality, pre-qualified leads that match your exact requirements, 
                with no contracts or commitments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="relative z-20 btn-primary group shadow-xl"
                >
                  Start Getting Leads
                  <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Link>
                <Link
                  to="#pricing"
                  className="relative z-20 inline-flex items-center px-6 py-3 rounded-lg border-2 border-white/20 
                           text-white font-semibold hover:bg-white/10 transition-all duration-300 shadow-xl backdrop-blur-sm"
                >
                  View Pricing
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0099]/20 to-transparent" />
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070"
                  alt="Lead Generation"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-20 py-24 bg-gray-800/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-xl shadow-xl backdrop-blur-lg"
              >
                <feature.icon className="h-12 w-12 text-[#FF0099] mb-6" />
                <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
                  {feature.title}
                </h3>
                <p className="text-white font-semibold leading-relaxed drop-shadow">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
                Why Choose Our PAYG Lead Generation?
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
                    <CheckCircle className="h-6 w-6 text-[#FF0099] flex-shrink-0 drop-shadow" />
                    <span className="text-white font-semibold drop-shadow-lg">{benefit}</span>
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
                  className="btn-primary inline-flex items-center shadow-xl"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2070"
                alt="Lead Generation Benefits"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}