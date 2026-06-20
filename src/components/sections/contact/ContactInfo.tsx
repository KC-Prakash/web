"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactInfo() {
  const EXPO = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.12 },
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

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      description: "Call us directly",
      details: "+91 8447009390",
      href: "tel:+918447009390",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick response",
      details: "+91 8447009390",
      href: "https://wa.me/918447009390",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email",
      details: "contact@kotaacademy.com",
      href: "mailto:contact@kotaacademy.com",
    },
    {
      icon: Clock,
      title: "Available Hours",
      description: "Monday to Sunday",
      details: "9:00 AM - 6:00 PM",
      href: undefined,
    },
  ];

  const branches = [
    {
      name: "Alpha-I Branch",
      tag: "Main Centre",
      address: "Om Tower, Plot No. B, 5th Floor, 5 Alfa Marg, Alpha-I, Greater Noida 201310",
      phone: "+91 8447009390",
      mapsUrl: "https://maps.app.goo.gl/QdbcoaQDKwEG7ass7",
    },
    {
      name: "Omicron-III Branch",
      tag: "Branch 2",
      address: "NS-76, Pocket A, Omicron III, Mathurapur, Greater Noida 201310",
      phone: "+91 8447009390",
      mapsUrl: "https://maps.app.goo.gl/zM6pbuUjWaE5ynzc8",
    },
  ];

  return (
    <motion.div
      className="space-y-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
    >
      {/* Contact Methods */}
      <div>
        <h2 className="heading-lg text-on-light-primary mb-8">Get in Touch</h2>
        <div className="grid gap-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                {method.href ? (
                  <Link href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined}>
                    <div className="group rounded-lg border border-on-light-secondary/15 bg-section-light-card/40 p-5 transition-all duration-300 hover:border-brand/40 hover:bg-section-light-card/80 hover:shadow-md">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                          <Icon className="h-5 w-5 text-brand" strokeWidth={2} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-on-light-primary text-sm">
                            {method.title}
                          </h3>
                          <p className="text-xs text-on-light-secondary mt-0.5">
                            {method.description}
                          </p>
                          <p className="text-sm font-medium text-brand mt-1.5">
                            {method.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="rounded-lg border border-on-light-secondary/15 bg-section-light-card/40 p-5">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                        <Icon className="h-5 w-5 text-brand" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-on-light-primary text-sm">
                          {method.title}
                        </h3>
                        <p className="text-xs text-on-light-secondary mt-0.5">
                          {method.description}
                        </p>
                        <p className="text-sm font-medium text-on-light-primary mt-1.5">
                          {method.details}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Branches */}
      <div className="pt-4 border-t border-on-light-secondary/15">
        <h3 className="heading-md text-on-light-primary mb-6">Our Locations</h3>
        <div className="space-y-4">
          {branches.map((branch, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={branch.mapsUrl} target="_blank">
                <div className="group rounded-lg border border-on-light-secondary/15 bg-section-light-card/40 p-5 transition-all duration-300 hover:border-brand/40 hover:bg-section-light-card/80 hover:shadow-md">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-brand shrink-0 mt-0.5" strokeWidth={2} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-on-light-primary">
                          {branch.name}
                        </h4>
                        <span className="rounded-full border border-brand/40 bg-brand/5 px-2 py-0.5 text-xs font-medium text-brand">
                          {branch.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-on-light-secondary leading-relaxed pl-8 mb-3">
                    {branch.address}
                  </p>
                  <a
                    href={`tel:${branch.phone}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-active pl-8 transition-colors"
                  >
                    <Phone className="h-3 w-3" />
                    {branch.phone}
                  </a>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Note */}
      <motion.div
        variants={itemVariants}
        className="rounded-lg border border-brand/20 bg-brand/5 p-5 mt-6"
      >
        <p className="text-sm text-on-light-primary">
          <span className="font-semibold">Quick Response Time:</span> We typically respond to
          messages within 2-4 hours during business hours. For urgent matters, prefer WhatsApp.
        </p>
      </motion.div>
    </motion.div>
  );
}
