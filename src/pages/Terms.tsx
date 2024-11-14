import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-3 rounded-2xl bg-[#FF0099]/10 mb-6">
            <FileText className="h-8 w-8 text-[#FF0099]" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        <div className="space-y-12">
          <Section
            icon={CheckCircle}
            title="Acceptance of Terms"
            content="By accessing and using our services, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, you should not use our services."
          />

          <Section
            icon={AlertCircle}
            title="Service Description"
            content="We provide digital marketing, web development, and related services. The specific details, deliverables, and timelines for services will be outlined in separate agreements or statements of work."
          />

          <Section
            title="User Responsibilities"
            content="You are responsible for providing accurate information, maintaining the confidentiality of your account credentials, and ensuring your use of our services complies with applicable laws and regulations."
          />

          <Section
            title="Payment Terms"
            content="Payment terms, including fees, payment schedules, and refund policies, will be specified in your service agreement. Late payments may result in service suspension or termination."
          />

          <Section
            title="Intellectual Property"
            content="All intellectual property rights in our services, including software, designs, and content, remain our property. You retain ownership of your content and materials provided to us."
          />

          <Section
            title="Limitation of Liability"
            content="We are not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amounts paid for the services."
          />

          <Section
            icon={HelpCircle}
            title="Contact Information"
            content={`For questions about these Terms of Service, please contact us at:
            \nEmail: legal@artificialmedia.co.uk
            \nPhone: +44 20 4587 6392
            \nAddress: London, UK`}
          />
        </div>
      </div>
    </div>
  );
}

function Section({ icon: Icon, title, content }: { icon?: any, title: string, content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50"
    >
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="p-2 bg-[#FF0099]/10 rounded-lg">
            <Icon className="h-5 w-5 text-[#FF0099]" />
          </div>
        )}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
          <p className="text-gray-400 whitespace-pre-line">{content}</p>
        </div>
      </div>
    </motion.div>
  );
}