"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  const EXPO = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EXPO },
    },
  };

  return (
    <section className="relative overflow-hidden bg-base pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48">
      {/* Background glow elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-secondary-brand/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="eyebrow inline-flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-brand" />
            Get in Touch
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="display-lg mt-4 max-w-4xl mx-auto text-text-primary"
          >
            We&apos;re Here to Answer Your Questions
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="body-lg mt-6 max-w-2xl mx-auto text-text-secondary"
          >
            Have questions about our IIT-JEE, NEET, or Foundation coaching programs?
            Reach out to us and our team will get back to you as soon as possible.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium"
          >
            <span className="inline-flex items-center gap-2 text-text-accent">
              <span className="h-2 w-2 rounded-full bg-brand" />
              24/7 Support Available
            </span>
            <span className="hidden text-text-muted sm:inline">·</span>
            <span className="inline-flex items-center gap-2 text-text-secondary">
              <span className="h-2 w-2 rounded-full bg-brand/40" />
              WhatsApp Us Anytime
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
