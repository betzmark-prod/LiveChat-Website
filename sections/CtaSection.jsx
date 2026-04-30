'use client';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-600 dark:bg-primary-900" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
      
      {/* Decorative animated blobs */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -30, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-96 h-96 bg-rose-500/30 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 0], 
          y: [0, 30, 0] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your customer support?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Join thousands of companies using LiveChat to increase conversions and reduce support costs. Takes 5 minutes to set up.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button href="/signup" variant="secondary" size="lg" className="w-full font-bold text-primary-600 hover:text-primary-700">
                Start Your Free Trial
              </Button>
            </motion.div>
            <p className="text-primary-200 text-sm sm:hidden mt-2">No credit card required</p>
          </div>
          <p className="text-primary-200 text-sm hidden sm:block mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  );
}
