import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb, Layout, Rocket, Code, Globe } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const textVariants = {
  hidden: { 
    opacity: 0,
    y: 30
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 40,
    scale: 0.8
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 400
    }
  }
};

const features = [
  {
    icon: Target,
    title: "Expertise in Niche Marketing",
    description: "We excel in tailoring our efforts to niche markets, creating highly targeted campaigns that speak directly to your audience and set you apart from competitors.",
    color: "#FF0099"
  },
  {
    icon: Code,
    title: "Advanced Analytical Approach",
    description: "Our data-driven strategies utilize advanced analytics to understand audience behaviors and preferences, optimizing campaigns in real-time for maximum effectiveness.",
    color: "#00FFE0"
  },
  {
    icon: Users,
    title: "Customised Client Partnerships",
    description: "Each client benefits from a fully customised approach designed around their unique goals and market conditions, ensuring perfectly aligned strategies.",
    color: "#7000FF"
  },
  {
    icon: Rocket,
    title: "Innovative Technology Integration",
    description: "We leverage cutting-edge tools and platforms, from AI-driven content creation to sophisticated audience targeting, keeping you ahead of the curve.",
    color: "#FF0099"
  },
  {
    icon: Globe,
    title: "Global Market Expertise",
    description: "Our international experience enables us to navigate diverse markets effectively, adapting strategies to local preferences while maintaining global standards.",
    color: "#00FFE0"
  },
  {
    icon: Layout,
    title: "Comprehensive Reporting",
    description: "Receive detailed, transparent reports that outline results and explain their alignment with broader marketing objectives, ensuring complete clarity.",
    color: "#7000FF"
  }
];

const stats = [
  {
    value: "98%",
    label: "Client Satisfaction",
    description: "Based on quarterly reviews"
  },
  {
    value: "£2.5M+",
    label: "Client Revenue Generated",
    description: "In the last 12 months"
  },
  {
    value: "45+",
    label: "Industries Served",
    description: "Across multiple sectors"
  },
  {
    value: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 
              variants={textVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            >
              What Makes Us Different
            </motion.h1>
            <motion.p 
              variants={textVariants}
              className="text-xl text-gray-300 leading-relaxed"
            >
              At Artificial Media, we combine cutting-edge technology with creative excellence 
              to deliver exceptional marketing solutions that drive real business growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                custom={index}
                className="relative group"
              >
                <div className="p-8 rounded-xl bg-gray-800/30 backdrop-blur-lg
                             border border-gray-700/50 hover:border-[#FF0099]/30 
                             transition-all duration-500 h-full">
                  <div className="flex items-start">
                    <motion.div
                      className="flex-shrink-0 p-3 rounded-lg"
                      style={{ backgroundColor: `${feature.color}15` }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, 5, -5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
                    </motion.div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white group-hover:text-[#FF0099] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#FF0099] mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-24 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We're committed to revolutionizing digital marketing through innovative AI-powered 
                solutions. Our mission is to help businesses achieve unprecedented growth by leveraging 
                cutting-edge technology and creative excellence.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Through continuous innovation and a deep understanding of digital landscapes, 
                we empower businesses to stay ahead in rapidly evolving markets while delivering 
                measurable results that drive real business growth.
              </p>
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
                  alt="Our team collaboration"
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