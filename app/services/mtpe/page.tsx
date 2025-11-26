"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bot, UserCheck, BadgeCheck, Zap, Award } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const Accent = "#C51431";

export default function MTPEPage() {
  return (
    <div className="min-h-screen">
      {/* Hero: تم تحديث النصوص */}
      <Hero
        title="Machine Translation & Post-Editing"
        subtitle="Faster Delivery, Human Quality. We combine AI-powered translation with expert human editing to balance speed and accuracy."
        imageSrc="/images/mtpe-hero.jpg"
        rgb={true}
        overlayOpacity={0.5}
      />

      {/* Intro: تم تحديث النص وتطبيق المحاذاة */}
      <Section>
        <div className="max-w-5xl text-gray-700 leading-relaxed text-center mx-auto space-y-4">
            <p>
              At <strong>Ideolingo</strong>, we understand that speed and cost-efficiency
              are crucial for many projects—but never at the expense of quality. Our Machine
              Translation + Post-Editing service combines the efficiency of
              advanced AI translation tools with the expertise of
              professional linguists to deliver accurate, natural-sounding results
              in record time.
            </p>
            <p className="font-semibold">
              Choose light or full post-editing based on your project’s needs.
            </p>
        </div>
      </Section>

      {/* How It Works: تم تحديث المحتوى مع الأيقونات والمحاذاة */}
      <Section title="How It Works" subdued>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center">
                <Bot size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">1. Initial Machine Translation</h3>
                <p className="text-gray-600 text-sm">Your content is processed through industry-leading neural machine translation (NMT) engines to generate a fast, preliminary translation.</p>
            </div>
            <div className="flex flex-col items-center">
                <UserCheck size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">2. Human Post-Editing</h3>
                <p className="text-gray-600 text-sm">Our experienced linguists review and refine the MT output, correcting errors, improving fluency, and ensuring the text reads naturally while preserving the original meaning.</p>
            </div>
            <div className="flex flex-col items-center">
                <BadgeCheck size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">3. Final Quality Check</h3>
                <p className="text-gray-600 text-sm">A thorough review ensures accuracy, consistency, and brand alignment before delivery.</p>
            </div>
        </div>
      </Section>

      {/* Levels of MTPE: تم تحديث المحتوى مع الأيقونات والمحاذاة */}
      <Section title="Levels of MTPE">
        <div className="max-w-5xl mx-auto text-center mb-6">
            <p className="text-gray-700">We offer two flexible options depending on your needs:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                <Zap size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-bold text-lg mb-2">Light Post-Editing</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Focuses on correcting only major errors for quick-turnaround projects where perfect style is not essential.
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  <span className="font-bold">Best for:</span> Large volumes, internal communications, and time-sensitive projects.
                </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                <Award size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-bold text-lg mb-2">Full Post-Editing</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Delivers publication-ready quality by refining tone, style, and accuracy to match professional human translation standards.
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  <span className="font-bold">Best for:</span> Customer-facing content, marketing materials, and official documents.
                </p>
            </div>
        </div>
      </Section>

      {/* CTA: تم تحديث النصوص وتصحيح الخطأ */}
      <section className="py-16 lg:py-20 bg-primary" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Ask us about cost-saving MTPE options.
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Get the best of both worlds—machine speed and human precision.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
            className="border-0 bg-white hover:bg-white"
            >
              <Link href="/contact">Request MTPE Options</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}