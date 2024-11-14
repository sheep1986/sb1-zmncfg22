import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

export default function Privacy() {
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
            <Shield className="h-8 w-8 text-[#FF0099]" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        <div className="space-y-12">
          <Section
            icon={Eye}
            title="Information We Collect"
            content="We collect information that you provide directly to us, including name, email address, phone number, and company details. We also automatically collect certain information about your device when you use our services."
          />

          <Section
            icon={Lock}
            title="How We Use Your Information"
            content="We use the information we collect to provide and improve our services, communicate with you, and comply with legal obligations. We may use your information to send you marketing communications about our products and services."
          />

          <Section
            icon={FileCheck}
            title="Information Sharing"
            content="We do not sell your personal information to third parties. We may share your information with service providers who assist us in operating our business, or when required by law."
          />

          <Section
            title="Cookie Policy"
            content="We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
          />

          <Section
            title="Data Security"
            content="We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
          />

          <Section
            title="Your Rights"
            content="You have the right to access, correct, or delete your personal information. You can also object to processing of your personal information or request data portability."
          />

          <Section
            title="Contact Us"
            content={`For any questions about this Privacy Policy, please contact us at:
            \nEmail: privacy@artificialmedia.co.uk
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