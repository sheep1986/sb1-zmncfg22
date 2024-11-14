import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckSquare, ArrowRightCircle, Lightbulb, Layout } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: "Step 1: Consultation with Our Experts",
    description: "Begin your journey by speaking with one of our seasoned marketing experts. During this initial conversation, we will delve into the specifics of your company and gain a comprehensive understanding of your marketing objectives.",
    color: "#FF0099",
    number: "01"
  },
  {
    icon: CheckSquare,
    title: "Step 2: Service Selection",
    description: "Choose from our extensive range of services, each meticulously designed to elevate your marketing efforts and enhance your departmental capabilities. From social media management to content creation and SEO optimization.",
    color: "#00FFE0",
    number: "02"
  },
  {
    icon: ArrowRightCircle,
    title: "Step 3: Seamless Onboarding",
    description: "Our team will guide you through a seamless onboarding process, ensuring you're fully equipped and ready to embark on this marketing journey with us, setting the stage for a successful partnership.",
    color: "#7000FF",
    number: "03"
  },
  {
    icon: Lightbulb,
    title: "Step 4: Collaborative Brainstorming",
    description: "Schedule a brainstorming call with our dedicated team to generate innovative ideas and strategies tailored specifically to your business. We believe the best results come from teamwork and open communication.",
    color: "#FF0099",
    number: "04"
  },
  {
    icon: Layout,
    title: "Step 5: Access to Your Custom Portal",
    description: "Gain access to your personalized client portal - your central hub for tracking progress, accessing resources, and communicating with our team as we implement services aligned with your marketing goals.",
    color: "#00FFE0",
    number: "05"
  }
];

export default function HowWeWork() {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0A0F1E]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,0,153,0.1) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(255,0,153,0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            How We Work
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our proven process ensures a smooth journey from consultation to implementation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 
                           transition-all duration-500 hover:bg-gray-800/50
                           border border-gray-700/50 hover:border-[#FF0099]/30">
                {/* Step Number */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FF0099] 
                              flex items-center justify-center text-white font-bold text-sm
                              shadow-lg shadow-[#FF0099]/20">
                  {step.number}
                </div>

                <div className="ml-6">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="relative w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                      style={{ backgroundColor: `${step.color}10` }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <step.icon className="h-6 w-6" style={{ color: step.color }} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 ml-16">
                    {step.description}
                  </p>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute -bottom-4 left-4 h-8 w-[2px] bg-gradient-to-b from-[#FF0099]/30 to-transparent" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}