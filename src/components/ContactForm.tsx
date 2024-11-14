import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Select from 'react-select';
import { User, MessageSquare, Send, ArrowRight, ArrowLeft, CheckCircle, Clock } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  budget: z.string().min(1, 'Please select a budget range'),
});

type FormData = z.infer<typeof formSchema>;

const services = [
  { value: 'ai-strategy', label: 'AI Strategy' },
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'social-media-ads', label: 'Social Media Ads' },
  { value: 'payg-leads', label: 'PAYG Leads' },
  { value: 'web-development', label: 'Web Development' },
];

const budgetRanges = [
  { value: '1000-5000', label: '£1,000 - £5,000' },
  { value: '5000-10000', label: '£5,000 - £10,000' },
  { value: '10000-25000', label: '£10,000 - £25,000' },
  { value: '25000+', label: '£25,000+' },
];

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const formSteps = [
    {
      title: 'Your Information',
      fields: ['name', 'email', 'phone'],
    },
    {
      title: 'Project Details',
      fields: ['service', 'budget'],
    },
    {
      title: 'Additional Information',
      fields: ['message'],
    },
  ];

  const handleNext = () => {
    const currentFields = formSteps[step].fields;
    let hasErrors = false;

    currentFields.forEach(field => {
      if (!watch(field)) {
        hasErrors = true;
      }
    });

    if (!hasErrors) {
      setStep(step + 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Send to Web3Forms
      const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          ...data,
        }),
      });

      if (!web3FormsResponse.ok) {
        throw new Error('Failed to submit to Web3Forms');
      }

      // Send to GoHighLevel webhook
      const webhookResponse = await fetch('https://services.leadconnectorhq.com/hooks/TQxPUTUTQRTMTRQxPUTMTQ/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: 'Website Contact Form',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!webhookResponse.ok) {
        console.warn('Webhook submission failed, but form was submitted successfully');
      }

      setIsSuccess(true);
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF0099]/10">
          <CheckCircle className="h-8 w-8 text-[#FF0099]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
        <div className="space-y-4 mb-8">
          <p className="text-gray-300">
            Thank you for reaching out to us. One of our expert marketing consultants will be in contact with you shortly to discuss your requirements in detail.
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <Clock className="h-5 w-5 mr-2" />
            <span>Expected response time: Within 24 hours</span>
          </div>
        </div>
        <button
          onClick={() => {
            setIsSuccess(false);
            setStep(0);
          }}
          className="inline-flex items-center px-6 py-3 rounded-lg bg-[#FF0099] text-white 
                   font-medium hover:bg-[#FF0099]/90 transition-colors"
        >
          Send Another Message
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </motion.div>
    );
  }

  return (
    <div className="relative">
      <Toaster position="top-right" />
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">
              {formSteps[step].title}
            </h3>
            <div className="flex space-x-2">
              {formSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full transition-colors duration-300 ${
                    index <= step ? 'bg-[#FF0099]' : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {step === 0 && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                               text-white placeholder-gray-400 focus:outline-none focus:border-[#FF0099]"
                      placeholder="John Doe"
                    />
                    <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                             text-white placeholder-gray-400 focus:outline-none focus:border-[#FF0099]"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                             text-white placeholder-gray-400 focus:outline-none focus:border-[#FF0099]"
                    placeholder="+44 20 1234 5678"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                  )}
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                    Service Required
                  </label>
                  <Select
                    options={services}
                    styles={customSelectStyles}
                    onChange={(option) => setValue('service', option?.value || '')}
                    placeholder="Select a service"
                    className="text-white"
                  />
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-400">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                    Budget Range
                  </label>
                  <Select
                    options={budgetRanges}
                    styles={customSelectStyles}
                    onChange={(option) => setValue('budget', option?.value || '')}
                    placeholder="Select your budget"
                    className="text-white"
                  />
                  {errors.budget && (
                    <p className="mt-1 text-sm text-red-400">{errors.budget.message}</p>
                  )}
                </div>
              </>
            )}

            {step === 2 && (
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Project Details
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                             text-white placeholder-gray-400 focus:outline-none focus:border-[#FF0099]"
                    placeholder="Tell us about your project..."
                  />
                  <MessageSquare className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between pt-4">
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="flex items-center space-x-2 text-white hover:text-[#FF0099] transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Previous</span>
            </button>
          )}
          
          {step < formSteps.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="ml-auto inline-flex items-center px-6 py-3 rounded-lg bg-[#FF0099] 
                       text-white font-medium hover:bg-[#FF0099]/90 transition-colors"
            >
              <span>Next</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="ml-auto inline-flex items-center px-6 py-3 rounded-lg bg-[#FF0099] 
                       text-white font-medium hover:bg-[#FF0099]/90 transition-colors 
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin mr-2">
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                  </div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

const customSelectStyles = {
  control: (base: any) => ({
    ...base,
    background: '#1F2937',
    borderColor: '#374151',
    '&:hover': {
      borderColor: '#FF0099',
    },
  }),
  menu: (base: any) => ({
    ...base,
    background: '#1F2937',
    border: '1px solid #374151',
  }),
  option: (base: any, state: any) => ({
    ...base,
    background: state.isFocused ? '#374151' : '#1F2937',
    color: 'white',
    '&:hover': {
      background: '#374151',
    },
  }),
  singleValue: (base: any) => ({
    ...base,
    color: 'white',
  }),
  input: (base: any) => ({
    ...base,
    color: 'white',
  }),
};