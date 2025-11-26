"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const Accent = "#fff";
const Pimary = "#C51431";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  // The text inside the bullet will remain aligned to the start for readability
  <li className="flex items-start gap-2 text-left">
    <CheckCircle2
      className="mt-1 h-5 w-5 shrink-0"
      style={{ color: Accent, stroke: Pimary }}
    />
    <span className="text-gray-700">{children}</span>
  </li>
);

export default function TranslationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero: تم تطبيق النصوص المطلوبة */}
      <Hero
        title="Translation Services"
        subtitle="Speak the Language of Your Audience."
        imageSrc="/images/translation-hero.jpg" // ضع الصورة في public/images
        rgb={true}
        overlayOpacity={0.5}
      />

      {/* Intro: تم تطبيق النصوص المطلوبة حرفيًا */}
      <Section>
        <div className="max-w-5xl text-gray-700 leading-relaxed text-center mx-auto space-y-4">
          <p>
            We deliver precise, culturally adapted translations in over 50
            languages—from legal contracts to creative ad campaigns.
          </p>
          <p>
            Specializations include legal, technical, marketing, medical,
            financial, educational, agricultural, automotive, and gaming.
          </p>
          <p>
            At <strong>Ideolingo</strong>, we deliver accurate, culturally
            adapted translations in over 50 languages, helping you communicate
            with confidence across global markets. Our team of native-speaking
            linguists and subject-matter experts ensures every word reflects
            your brand’s voice while meeting industry-specific requirements.
          </p>
        </div>
      </Section>

      {/* Workflow (Kept as is) */}
      <Section title="Our 3-Step Linguistic Workflow">
        <div className="space-y-6 max-w-5xl text-gray-700 mx-auto text-center">
          <div>
            <h3 className="font-bold text-lg text-primary">1. Translation</h3>
            <p className="mt-2">
              Native-speaking translators with subject-matter expertise
              translate your content with accuracy, clarity, and tone
              appropriate to your audience.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-primary">2. Editing</h3>
            <p className="mt-2">
              A second linguist reviews the translation for grammar,
              terminology, structure, and consistency to align with the
              project’s objectives and style guide.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-primary">3. Proofreading</h3>
            <p className="mt-2">
              A final language expert polishes the text, reviews formatting, and
              prepares it for delivery— ensuring a professional,
              publication-ready result.
            </p>
          </div>
        </div>
      </Section>

      {/* LQA (Kept as is) */}
      <Section title="Linguistic Quality Assurance (LQA)" subdued>
        <p className="text-gray-700 max-w-5xl mb-6 mx-auto text-center">
          After the core TEP process, our QA team performs a dedicated
          Linguistic QA check using both manual and automated tools to ensure:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-5xl mx-auto">
          <Bullet>Terminology consistency and style alignment</Bullet>
          <Bullet>Accurate formatting and layout</Bullet>
          <Bullet>Compliance with glossaries and client instructions</Bullet>
          <Bullet>
            Elimination of any remaining linguistic or technical issues
          </Bullet>
        </ul>
      </Section>

      {/* Why Us: تم تطبيق قائمة النصوص المطلوبة */}
      <Section title="Why Our Translation Services Stand Out">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-5xl mx-auto">
          <Bullet>Native-speaking, industry-specialized linguists</Bullet>
          <Bullet>Translation memory &amp; terminology management</Bullet>
          <Bullet>Scalable teams for high-volume or urgent projects</Bullet>
          <Bullet>Dedicated project managers for smooth communication</Bullet>
          <Bullet>
            Cultural adaptation for authentic, localized messaging
          </Bullet>
          <Bullet>Full post-delivery support and revision handling</Bullet>
        </ul>
      </Section>

      {/* CTA (Kept as is) */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Your Words Matter—Let’s Make Them Speak Globally.
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Reach new markets with translation that’s accurate, natural, and
            impactful.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="border-0 bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 shadow-lg"
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
