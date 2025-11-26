"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const Accent = "#fff";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  // النص داخل النقاط سيبقى بمحاذاة لليسار لسهولة القراءة
  <li className="flex items-start gap-2 text-left">
    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" style={{ color: Accent }} />
    <span className="text-gray-700">{children}</span>
  </li>
);

export default function TranscreationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Hero
        title="Transcreation"
        subtitle="Where Translation Meets Creativity"
        imageSrc="/images/mtpe-hero.jpg"   // يمكنك تغيير الصورة لاحقًا
        rgb={true}
        overlayOpacity={0.5}
      />

      {/* Intro: تم تطبيق المحاذاة */}
      <Section>
        <p className="max-w-5xl text-gray-700 leading-relaxed text-center mx-auto">
          Sometimes, a direct translation just isn’t enough. When your message needs
          to inspire, persuade, and connect on an emotional level, transcreation
          is the answer. At <strong>Ideolingo</strong>, we adapt your content so it not
          only makes sense in another language but also captures the same tone, style,
          and impact as the original — ensuring it resonates with your target audience.
        </p>
      </Section>

      {/* Our Transcreation Services Include: تم تطبيق المحاذاة */}
      <Section title="Our Transcreation Services Include:">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-5xl mx-auto">
          <Bullet>Brand slogans and taglines</Bullet>
          <Bullet>Creative marketing campaigns</Bullet>
          <Bullet>Social media and ad copy</Bullet>
          <Bullet>Video scripts and multimedia content</Bullet>
          <Bullet>Product naming and brand messaging</Bullet>
          <Bullet>Cultural adaptation for humor, idioms, and local trends</Bullet>
        </ul>
      </Section>

      {/* Why Us: تم تطبيق المحاذاة */}
      <Section title="Why Choose Ideolingo for Transcreation?" subdued>
        <div className="max-w-5xl mx-auto text-center">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Bullet>Native linguists with copywriting and creative expertise</Bullet>
            <Bullet>Cultural sensitivity to keep your brand message authentic</Bullet>
            <Bullet>Balance between creativity and brand consistency</Bullet>
            <Bullet>Collaboration to capture your desired tone and intent</Bullet>
          </ul>
          <p className="mt-6 text-gray-700 leading-relaxed">
            With Ideolingo, your words won’t just be translated — they’ll be reborn
            for each market, preserving the power of your message wherever it goes.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            🚀 Ready to make your message unforgettable worldwide?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Contact us today to bring your ideas to life with creative transcreation
            that inspires, engages, and converts.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="border-0"
              style={{ backgroundColor: Accent }}
            >
              <Link href="/contact">Start Your Transcreation Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}