'use client';
import { PRICING_PLANS } from '@/constants';
import Button from '@/components/Button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } }
};

export default function PricingTable() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Start free, scale as you grow. All plans include 14-day free trial.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {PRICING_PLANS.map((plan, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl border ${
                plan.popular 
                  ? 'border-primary-500 shadow-2xl shadow-primary-500/20 z-10' 
                  : 'border-gray-200 dark:border-gray-800'
              } bg-white dark:bg-gray-900 flex flex-col transition-shadow`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-500 dark:text-gray-400">/mo</span>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-primary-500 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button 
                  href={plan.price === 'Custom' ? '/contact' : '/signup'} 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
