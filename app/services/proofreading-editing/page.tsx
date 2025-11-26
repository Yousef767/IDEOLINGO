"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  SpellCheck,
  Quote,
  Sparkles,
  Pilcrow,
  BookCheck,
  Palette,
  ClipboardCheck
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const Accent = "#fff";

// A component for bullets with custom icons
const IconBullet = ({ icon: Icon, children }: { icon: React.ElementType, children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-left">
    <Icon className="mt-1 h-5 w-5 shrink-0" style={{ color: Accent }} />
    <span className="text-gray-700">{children}</span>
  </li>
);

export default function ProofreadingEditingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero: تم تحديث النصوص */}
      <Hero
        title="Proofreading & Editing"
        subtitle="Good Translation Deserves a Perfect Finish. We polish every detail—from grammar to flow—so your text reads as if it were written in the target language."
        imageSrc="/images/proofreading-hero.jpg"
        rgb={true}
        overlayOpacity={0.5}
      />

      {/* Intro: تم تحديث النص والمحاذاة */}
      <Section>
        <div className="max-w-5xl text-gray-700 leading-relaxed text-center mx-auto space-y-4">
            <p>
              At <strong>Ideolingo</strong>, we believe that great translation is only
              complete when it is flawless in accuracy, tone, and presentation.
              Our dedicated proofreading and editing services ensure that your content is polished
              to perfection before it reaches your audience.
            </p>
            <p className="font-semibold">
              Editing ensures tone, clarity, and consistency. Proofreading guarantees
              perfection.
            </p>
        </div>
      </Section>

      {/* Proofreading Section: تم تحديث المحتوى مع الأيقونات والمحاذاة */}
      <Section title="Proofreading—the Final Quality Gate" subdued>
        <div className="max-w-5xl text-center mx-auto">
            <p className="text-gray-700 mb-8">
              Our proofreading process focuses on:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 mb-8">
              <IconBullet icon={SpellCheck}><strong>Grammar & Spelling:</strong> Correcting any typographical or grammatical errors.</IconBullet>
              <IconBullet icon={Quote}><strong>Punctuation & Formatting:</strong> Ensuring consistent style and formatting.</IconBullet>
              <IconBullet icon={Sparkles}><strong>Minor Language Refinements:</strong> Polishing the flow and readability without altering meaning.</IconBullet>
            </ul>
            <p className="text-gray-700 leading-relaxed font-medium bg-gray-100 p-4 rounded-lg">
              Proofreading is the final step before delivery, ensuring error-free,
              publication-ready content.
            </p>
        </div>
      </Section>

      {/* Editing Section: تم تحديث المحتوى مع الأيقونات والمحاذاة */}
      <Section title="Editing—Refining for Impact">
        <div className="max-w-5xl text-center mx-auto">
            <p className="text-gray-700 mb-8">
              Editing goes beyond basic error correction. It involves improving
              the structure, clarity, and tone of your content to better engage your
              audience. Our editors:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <IconBullet icon={Pilcrow}>Rework sentences for better readability and flow.</IconBullet>
              <IconBullet icon={BookCheck}>Ensure terminology accuracy for your specific industry.</IconBullet>
              <IconBullet icon={Palette}>Adapt tone and style for your target audience and market.</IconBullet>
              <IconBullet icon={ClipboardCheck}>Crosscheck facts, figures, and references for consistency and accuracy.</IconBullet>
            </ul>
        </div>
      </Section>

      {/* CTA: تم تحديث النصوص وتصحيح الخطأ */}
      <section className="py-16 lg:py-20 bg-primary" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Let us perfect your content.
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Get clean, consistent, publication-ready text—edited by experts.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
                className="border-0 bg-white hover:bg-white"
            >
              <Link href="/contact">Perfect Your Content</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}