'use client';
import Button from '@/components/Button';
import WidgetPreview from '@/components/WidgetPreview';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-gray-950">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-500/10 dark:bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" 
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary-600 animate-pulse"></span>
              LiveChat 2.0 is live
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
              Automate Support.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-rose-400">
                Increase Conversions.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 text-balance mb-8 max-w-2xl mx-auto lg:mx-0">
              The embeddable AI chat widget that answers customer questions instantly and seamlessly escalates to human agents when needed. Works on any website.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button href="/signup" variant="primary" size="lg" className="w-full shadow-lg shadow-primary-500/20">
                  Start Free Trial
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button href="/demo" variant="outline" size="lg" className="w-full">
                  Book a Demo
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i, index) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`w-8 h-8 rounded-full border-2 border-white dark:border-gray-950 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-[10px]`}
                  >
                    👤
                  </motion.div>
                ))}
              </div>
              <p>Trusted by 10,000+ businesses</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 w-full max-w-xl lg:max-w-none relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-rose-400/20 rounded-[2.5rem] blur-3xl -z-10" />
            <WidgetPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
