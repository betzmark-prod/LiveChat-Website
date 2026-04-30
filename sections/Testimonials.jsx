"use client";
import { TESTIMONIALS } from "@/constants";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by support teams
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Don&apos;t just take our word for it. Here&apos;s what our customers
            have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-bl-full -z-10 group-hover:bg-primary-500/10 transition-colors" />
              <Quote
                size={40}
                className="text-primary-100 dark:text-primary-900/50 absolute top-6 left-6"
              />
              <div className="relative z-10">
                <p className="text-gray-700 dark:text-gray-300 mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
