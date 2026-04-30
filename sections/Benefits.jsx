"use client";
import { BENEFITS } from "@/constants";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Benefits() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform your customer experience while saving time
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
              LiveChat isn&apos;t just another chat widget. It&apos;s a
              comprehensive platform designed to elevate your brand and
              streamline your operations.
            </p>

            <div className="space-y-6">
              {BENEFITS.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <CheckCircle2
                    className="text-primary-500 shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl -z-10" />
            <motion.div
              whileHover={{ rotate: 2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8 transform rotate-2"
            >
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100 dark:border-gray-700">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Tickets Resolved
                  </p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl font-bold text-gray-900 dark:text-white"
                  >
                    12,492
                  </motion.p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Avg Response Time
                  </p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-4xl font-bold text-primary-500"
                  >
                    2s
                  </motion.p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-medium text-gray-900 dark:text-gray-100 mb-4">
                  Recent Escalations
                </p>
                {[1, 2, 3].map((i, idx) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 text-sm font-bold">
                        U{i}
                      </div>
                      <div>
                        <p className="text-sm font-medium">Pricing Inquiry</p>
                        <p className="text-xs text-gray-500">
                          Assigned to Sarah
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500 text-xs font-medium rounded-full">
                      Pending
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
