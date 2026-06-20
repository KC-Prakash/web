"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const EXPO = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EXPO },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormState({ name: "", email: "", phone: "", subject: "", message: "" });

      // Reset to idle after 4 seconds
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
    >
      <h2 className="heading-lg text-on-light-primary mb-8">Send us a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <motion.div variants={itemVariants}>
          <label htmlFor="name" className="block text-sm font-medium text-on-light-primary mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full rounded-lg border border-on-light-secondary/20 bg-section-light-card/50 px-4 py-3 text-on-light-primary placeholder:text-on-light-secondary/50 transition-colors duration-200 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="email" className="block text-sm font-medium text-on-light-primary mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full rounded-lg border border-on-light-secondary/20 bg-section-light-card/50 px-4 py-3 text-on-light-primary placeholder:text-on-light-secondary/50 transition-colors duration-200 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="phone" className="block text-sm font-medium text-on-light-primary mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            required
            placeholder="+91 9876543210"
            className="w-full rounded-lg border border-on-light-secondary/20 bg-section-light-card/50 px-4 py-3 text-on-light-primary placeholder:text-on-light-secondary/50 transition-colors duration-200 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="subject" className="block text-sm font-medium text-on-light-primary mb-2">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            required
            placeholder="Inquiry about IIT-JEE Coaching"
            className="w-full rounded-lg border border-on-light-secondary/20 bg-section-light-card/50 px-4 py-3 text-on-light-primary placeholder:text-on-light-secondary/50 transition-colors duration-200 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="message" className="block text-sm font-medium text-on-light-primary mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your inquiry or question..."
            rows={5}
            className="w-full rounded-lg border border-on-light-secondary/20 bg-section-light-card/50 px-4 py-3 text-on-light-primary placeholder:text-on-light-secondary/50 transition-colors duration-200 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 resize-none"
          />
        </motion.div>

        <motion.button
          variants={itemVariants}
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full rounded-lg bg-brand px-6 py-3 font-semibold text-brand-ink transition-all duration-300 hover:bg-brand-hover hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-brand-ink border-t-transparent" />
              Sending...
            </>
          ) : status === "success" ? (
            <>
              <CheckCircle className="h-5 w-5" />
              Message Sent!
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </motion.button>

        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg bg-green-50 border border-green-200 p-4 flex gap-3 items-start"
          >
            <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-green-900">Message sent successfully!</p>
              <p className="text-sm text-green-700 mt-1">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg bg-red-50 border border-red-200 p-4 flex gap-3 items-start"
          >
            <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-red-900">Something went wrong</p>
              <p className="text-sm text-red-700 mt-1">
                Please try again or contact us directly via WhatsApp.
              </p>
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
