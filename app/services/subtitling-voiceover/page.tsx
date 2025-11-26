"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Presentation, 
  Lightbulb, 
  ScreenShare, 
  Film, 
  BookOpen, 
  ThumbsUp, 
  GraduationCap,
  Languages,
  Captions,
  MicVocal,
  BadgeCheck,
  Globe,
  UserRound,
  AudioLines,
  Layers,
  SearchCheck,
  Accessibility
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const Accent = "#fff";

// A new component for bullets with custom icons
const IconBullet = ({ icon: Icon, children }: { icon: React.ElementType, children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-left">
    <Icon className="mt-1 h-5 w-5 shrink-0" style={{ color: Accent }} />
    <span className="text-gray-700">{children}</span>
  </li>
);

export default function SubtitlingVoiceoverPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Hero
        title="Subtitling & Voice-Over Services"
        subtitle="Connect worldwide with authentically localized audio-visual media"
        imageSrc="/images/subtitling-hero.jpg"
        rgb={true}
        overlayOpacity={0.5}
      />

      {/* Intro */}
      <Section>
        <p className="max-w-5xl text-gray-700 leading-relaxed text-center mx-auto">
          Whether it's a corporate presentation, tutorial, or compelling social media
          asset, <strong>Ideolingo</strong> brings your content to life with precise
          subtitling and native voice-over in multiple languages.
        </p>
      </Section>

      {/* What We Serve */}
      <Section title="What We Serve" subdued>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-6xl mx-auto">
          <IconBullet icon={Presentation}>Corporate & Training Videos</IconBullet>
          {/* --- التغيير: تم تصحيح الخطأ المطبعي هنا --- */}
          <IconBullet icon={Lightbulb}>Marketing & Explainer Videos</IconBullet>
          <IconBullet icon={ScreenShare}>Product Demonstrations & Tutorials</IconBullet>
          <IconBullet icon={Film}>Documentaries & Interviews</IconBullet>
          <IconBullet icon={BookOpen}>E-Learning Courses & Webinars</IconBullet>
          <IconBullet icon={ThumbsUp}>Social Media Clips & Promotional Ads</IconBullet>
          <IconBullet icon={GraduationCap}>Entertainment & Educational Content</IconBullet>
        </ul>
      </Section>

      {/* How We Bring Your Media to Life */}
      <Section title="How We Bring Your Media to Life">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center">
                <Languages size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">1. Script Translation & Adaptation</h3>
                <p className="text-gray-600 text-sm">We translate and adapt scripts to suit timing, tone, and cultural nuances to ensure seamless viewer impact.</p>
            </div>
            <div className="flex flex-col items-center">
                <Captions size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">2. Subtitling</h3>
                <p className="text-gray-600 text-sm">Our native subtitlers meticulously time, style, and QC subtitles to meet platform standards for any media player or broadcast.</p>
            </div>
            <div className="flex flex-col items-center">
                <MicVocal size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">3. Voice-Over Recording</h3>
                <p className="text-gray-600 text-sm">We collaborate with industry vetted voice talents in 100+ languages and styles to match your brand’s emotional tone.</p>
            </div>
            <div className="flex flex-col items-center">
                <BadgeCheck size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">4. Post-Production & QA</h3>
                <p className="text-gray-600 text-sm">From audio syncing to subtitle embedding and multi-format delivery, we deliver polished, broadcast-ready media tailored to your specifications.</p>
            </div>
        </div>
      </Section>

      {/* Why Ideolingo Stands Out */}
      <Section title="Why Ideolingo Stands Out" subdued>
        <div className="max-w-5xl mx-auto text-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
              <IconBullet icon={Globe}>Multilingual subtitling & voice-over production in 100+ languages</IconBullet>
              <IconBullet icon={UserRound}>Native voice artists with diverse style options</IconBullet>
              <IconBullet icon={AudioLines}>Lip-sync, time-sync, or off-screen narration perfectly tailored</IconBullet>
              <IconBullet icon={Layers}>Full-spectrum media localization—script, audio, and on-screen text</IconBullet>
              <IconBullet icon={SearchCheck}>Rigorous quality control for flawless execution</IconBullet>
              <IconBullet icon={Accessibility}>Subtitles crafted to meet accessibility standards and international compliance</IconBullet>
            </ul>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Let Ideolingo ensure your message is clear, engaging, and culturally
              resonant—no matter the language or platform.
            </p>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Ready to Go Global?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Contact us today for a customized quote and fast turnaround.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="border-0"
              style={{ backgroundColor: Accent, color: "#ffffffff" }}
            >
              <Link href="/contact">Get a Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}