'use client';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Add the Snippet',
      description: 'Copy and paste our lightweight JavaScript snippet into your website\'s <head> tag.',
    },
    {
      number: '02',
      title: 'Train Your AI',
      description: 'Connect your knowledge base, FAQs, and documentation. The AI learns instantly.',
    },
    {
      number: '03',
      title: 'Customize UI',
      description: 'Match the widget to your brand colors, logo, and preferred conversational tone.',
    },
    {
      number: '04',
      title: 'Go Live',
      description: 'Start automating support and capturing leads 24/7 with zero downtime.',
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live in minutes, not months</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            LiveChat is designed for speed and simplicity. No coding required for basic implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (visible on large screens) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 bg-gray-200 dark:bg-gray-800 origin-left" 
          />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 rounded-full bg-white dark:bg-gray-950 border-4 border-gray-50 dark:border-gray-900 shadow-xl flex items-center justify-center mb-6 transition-colors hover:border-primary-100 dark:hover:border-primary-900"
              >
                <span className="text-2xl font-bold text-primary-600">{step.number}</span>
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
