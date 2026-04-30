'use client';
import { FEATURES } from '@/constants';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to scale support</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            LiveChat combines the speed of AI with the empathy of human agents to deliver an unparalleled customer experience.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, index) => {
            const Icon = Icons[feature.icon] || Icons.CheckCircle;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-primary-100 dark:hover:border-primary-900 transition-all group"
              >
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors border border-gray-200 dark:border-gray-700">
                  <Icon size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
