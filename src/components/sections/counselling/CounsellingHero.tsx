'use client';

import { motion } from 'framer-motion';

export default function CounsellingHero() {
  return (
    <section className="relative w-full bg-section py-16 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-lime-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-lime-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="inline-block px-3 py-1 bg-lime-400/20 text-lime-700 text-sm font-semibold rounded-full">
            ONE-ON-ONE GUIDANCE
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-balance leading-tight"
        >
          Book Your Free Counselling Session
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-center text-foreground/70 max-w-2xl mx-auto mb-8 text-balance"
        >
          Connect with our expert advisors for personalized guidance on your IIT-JEE and NEET preparation journey
        </motion.p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-lime-400 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-black">✓</span>
            </div>
            <span className="text-foreground/80">Completely Free</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-lime-400 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-black">✓</span>
            </div>
            <span className="text-foreground/80">No Commitment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-lime-400 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-black">✓</span>
            </div>
            <span className="text-foreground/80">Expert Guidance</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
