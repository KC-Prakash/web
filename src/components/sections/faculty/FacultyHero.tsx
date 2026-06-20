'use client';

import { motion } from 'framer-motion';

export default function FacultyHero() {
  return (
    <section className="bg-base px-4 py-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary-brand">
            ★ EXPERT EDUCATORS
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-center text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl"
        >
          Meet Our World-Class
          <span className="block text-balance bg-gradient-to-r from-brand to-brand-hover bg-clip-text text-transparent">
            Faculty Members
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-12 max-w-3xl text-center text-lg text-secondary"
        >
          Our faculty comprises seasoned educators, subject matter experts, and award-winning teachers dedicated to nurturing the next generation of leaders.
        </motion.p>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-8"
        >
          {[
            { label: 'Expert Educators', value: '50+' },
            { label: 'Avg. Experience', value: '15+ Yrs' },
            { label: 'Subject Experts', value: '100%' },
          ].map((highlight, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg border border-border-subtle bg-card px-4 py-6 text-center md:px-6 md:py-8"
            >
              <div className="text-3xl font-bold text-brand md:text-4xl">
                {highlight.value}
              </div>
              <div className="mt-2 text-sm text-secondary md:text-base">
                {highlight.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
