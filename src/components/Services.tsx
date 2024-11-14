import React from 'react';
import { Bot, Megaphone, BarChart, Globe, MessageSquare, Users, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Meta Ads',
    description: 'Dominate Facebook & Instagram with targeted advertising campaigns that drive real results.',
    icon: Users,
    link: '/meta-ads',
    gradient: 'from-[#FF0099] to-[#FF0099]/80'
  },
  {
    title: 'Shopify Store Development',
    description: 'Build your dream online store with custom Shopify development and optimization.',
    icon: ShoppingBag,
    link: '/shopify-development',
    gradient: 'from-[#00FFE0] to-[#00FFE0]/80'
  },
  {
    title: 'Artificial Apex',
    description: 'All-in-one business platform with CRM, automation, reputation management, and marketing tools.',
    icon: BarChart,
    link: '/artificial-apex',
    gradient: 'from-[#7000FF] to-[#7000FF]/80'
  },
  {
    title: 'Web Development',
    description: 'Custom website development with modern technologies and seamless AI integration.',
    icon: Globe,
    link: '/web-development',
    gradient: 'from-[#FF0099] to-[#7000FF]/80'
  },
  {
    title: 'TikTok Marketing',
    description: 'Dominate the fastest-growing social platform with engaging content and targeted campaigns.',
    icon: MessageSquare,
    link: '/tiktok-marketing',
    gradient: 'from-[#00FFE0] to-[#FF0099]/80'
  },
  {
    title: 'PAYG Leads',
    description: 'Get exclusive, quality-matched leads without long-term contracts. Pay only for what you need.',
    icon: Users,
    link: '/payg-leads',
    gradient: 'from-[#7000FF] to-[#00FFE0]/80'
  }
];

export default function Services() {
  return (
    <div id="services" className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Comprehensive AI-powered marketing solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="group relative bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 
                           transition-all duration-500 hover:bg-gray-800/50 block h-full
                           border border-gray-700/50 hover:border-[#FF0099]/30"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} 
                                opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`} />

                  {/* Content */}
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
                    
                    <span className="mt-4 inline-flex items-center text-white opacity-60 
                                group-hover:opacity-100 group-hover:text-[#FF0099] 
                                transition-all duration-500">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 
                                       transition-transform duration-500" />
                    </span>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br 
                              from-transparent via-transparent to-white/5 rounded-bl-xl opacity-0 
                              group-hover:opacity-100 transition-all duration-700" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}