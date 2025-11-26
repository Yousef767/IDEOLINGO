"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  AudioWaveform,
  Headphones,
  LayoutGrid,
  Bot,
  Clapperboard,
  SpellCheck,
  BadgeCheck,
  Gavel,
  Stethoscope,
  Banknote,
  Cpu,
  ShoppingBag,
  Megaphone,
  Factory,
  GraduationCap,
  Car,
  Gamepad2,
  Languages,
  ArrowRight,
} from "lucide-react";

//================================================================
// 1. Hero
//================================================================
function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="/image_648f59.jpg"
        alt="Ideolingo — translation & localization for global markets"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-900/40 to-secondary -z-10"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white"
        >
          Go Global with Confidence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="mt-6 text-lg leading-8 text-gray-300"
        >
          At Ideolingo, we transform your words into powerful messages that
          connect, engage, and convert in any market. With a team of expert
          linguists, project managers, and cultural consultants, we make sure
          your brand sounds local—everywhere. From fast accurate translations
          to complete localization strategies, we help you reach audiences
          worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <Link
            href="/contact"
            aria-label="Contact Ideolingo — let’s talk about your next project today"
            className="rounded-md bg-white/10 px-5 py-3 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
          >
            Let’s talk about your next project today
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

//================================================================
// 2. Section
//================================================================
function Section({
  title,
  children,
  subdued = false,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  subdued?: boolean;
  className?: string;
}) {
  return (
    <section className={`${subdued ? "bg-gray-100" : "bg-white"} py-16 lg:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {title ? (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-3xl lg:text-4xl font-extrabold text-sec mb-10 text-center"
          >
            {title}
          </motion.h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}

//================================================================
// 3. Services
//================================================================
function Services() {
  const servicesList = [
    { title: "Translation", description: "Accurate and culturally relevant translations for all content types.", href: "/services/translation", Icon: Languages },
    { title: "Transcreation", description: "Creative adaptation of marketing messages to resonate with local audiences.", href: "/services/transcreation", Icon: Sparkles },
    { title: "Interpretation", description: "Seamless consecutive and simultaneous interpretation services.", href: "/services/interpretation", Icon: Headphones },
    { title: "Desktop Publishing (DTP)", description: "Formatting and layout design for multilingual documents.", href: "/services/dtp", Icon: LayoutGrid },
    { title: "MT Post-Editing (MTPE)", description: "Human refinement of machine-translated content for quality.", href: "/services/mtpe", Icon: Bot },
    { title: "Subtitling & Voice-over", description: "Engaging multimedia localization for a global viewership.", href: "/services/subtitling", Icon: Clapperboard },
  ];

  return (
    <Section title="Professional Translation & Localization Services" subdued>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          // --- التغيير: تم تعديل الألوان هنا ---
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col rounded-lg bg-zinc-700 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 grid h-10 w-10 place-items-center rounded-full bg-zinc-600 text-white">
                <service.Icon className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-1 text-sm text-zinc-300">{service.description}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t-white border-zinc-600">
              <Link
                href={service.href}
                className="group inline-flex items-center gap-1 text-sm font-semibold text-zinc-200 hover:text-white transition-colors"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

//================================================================
// 4. Industries
//================================================================
function Industries() {
  const industriesList = [
    { title: "Legal", href: "/industries/legal", Icon: Gavel },
    { title: "Medical & Life Sciences", href: "/industries/medical-life-sciences", Icon: Stethoscope },
    { title: "Finance & Banking", href: "/industries/finance-banking", Icon: Banknote },
    { title: "Technology & IT", href: "/industries/technology-it", Icon: Cpu },
    { title: "E-commerce & Retail", href: "/industries/ecommerce-retail", Icon: ShoppingBag },
    { title: "Marketing & Media", href: "/industries/marketing-media", Icon: Megaphone },
    { title: "Manufacturing", href: "/industries/manufacturing-engineering", Icon: Factory },
    { title: "E-learning", href: "/industries/education-elearning", Icon: GraduationCap },
    { title: "Automotive", href: "/industries/automotive", Icon: Car },
    { title: "Gaming", href: "/industries/gaming", Icon: Gamepad2 },
  ];

  return (
    <Section title="Expertise Across Industries">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
        {industriesList.map((industry, index) => (
          <Link href={industry.href} key={industry.title}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex flex-col items-center gap-3 rounded-lg p-4 h-full hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="grid h-14 w-14 place-items-center rounded-full bg-gray-200 text-gray-700 group-hover:bg-gray-300 transition-colors ic" style={{background:"rgba(253, 143, 143,.6)"}}>
                <industry.Icon className="h-7 w-7" />
              </div>
              <h3 className="text-sm font-medium text-primary">{industry.title}</h3>
            </motion.div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

//================================================================
// 5. Call to Action
//================================================================
function CallToAction() {
  return (
    <div className="bg-primary">
      <div className="container mx-auto max-w-4xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Go Global with Confidence.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300"
        >
          From fast, accurate translations to complete localization strategies,
          we help you reach audiences worldwide.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <Link
            href="/contact"
            aria-label="Contact Ideolingo — let’s talk about your next project today"
            className="rounded-md bg-white px-5 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
          >
            Let’s talk about your next project today
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

//================================================================
// 6. Home Page
//================================================================
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Industries />
      <CallToAction />
    </main>
  );
}