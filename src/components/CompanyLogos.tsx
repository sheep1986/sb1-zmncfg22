import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Shield, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Clients Worldwide',
    description: 'Serving businesses across the globe',
    gradient: 'from-[#FF0099]/10 to-[#FF0099]/5'
  },
  {
    icon: Award,
    value: '97%',
    label: 'Client Satisfaction',
    description: 'Consistently exceeding expectations',
    gradient: 'from-[#FF0099]/10 to-[#FF0099]/5'
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Success Rate',
    description: 'Delivering results that matter',
    gradient: 'from-[#FF0099]/10 to-[#FF0099]/5'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support Available',
    description: 'Always here when you need us',
    gradient: 'from-[#FF0099]/10 to-[#FF0099]/5'
  }
];

const StatCard = ({ stat, index }: { stat: any; index: number }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const value = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0;
      let startTimestamp: number;
      const duration = 2000;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [inView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group h-full"
    >
      <div className="relative h-full rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-4 sm:p-6 md:p-8 
                    transition-all duration-300 hover:bg-gray-800/70 hover:border-[#FF0099]/30">
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-3 sm:mb-4 md:mb-6 p-2 sm:p-2.5 md:p-3 bg-gray-900/50 rounded-xl w-fit">
            <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[#FF0099]" />
          </div>

          <div className="space-y-1 sm:space-y-2 flex-grow">
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                {stat.value.includes('%') ? count + '%' : 
                 stat.value.includes('/') ? '24/7' : 
                 count + '+'}
              </span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white/90">
              {stat.label}
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              {stat.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function CompanyLogos() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-12 sm:py-16 md:py-24 bg-gray-900 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Partnering with forward-thinking companies to drive digital transformation
            and deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#FF0099] text-white 
                     rounded-xl font-semibold hover:bg-[#FF0099]/90 transition-all 
                     duration-300 group text-sm sm:text-base"
          >
            <span className="flex items-center">
              Join Our Success Stories
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}