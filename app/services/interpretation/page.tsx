"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const Accent = "#54f5454";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-left">
    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" style={{ color: Accent }} />
    <span className="text-gray-700">{children}</span>
  </li>
);

export default function InterpretationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero: تم تحديث النصوص */}
      <Hero
        title="Interpretation Services"
        subtitle="Real-Time Communication without Borders."
        imageSrc="/images/interpretation-hero.jpg"
        rgb={true}
        overlayOpacity={0.45}
      />

      {/* Intro: تم تحديث النصوص وتطبيق المحاذاة */}
      <Section>
        <div className="max-w-5xl text-gray-700 leading-relaxed text-center mx-auto space-y-4">
           <p>
              Our interpreters provide flawless communication for events, meetings, and
              conferences—onsite or remote. We offer simultaneous, consecutive, whispered, phone, and video interpretation
              for any industry.
            </p>
            <p>
              At <strong>Ideolingo</strong>, we bridge language barriers in real time,
              ensuring smooth and accurate communication for meetings, conferences, events,
              and business negotiations. Our professional interpreters
              combine linguistic expertise with cultural awareness to deliver your message clearly,
              accurately, and naturally in any setting.
            </p>
            
        </div>
      </Section>

      {/* Types: تم تحديث النصوص والعناوين وتطبيق المحاذاة */}
      <Section title="Our Interpretation Modes">
        <div className="space-y-6 max-w-5xl text-gray-700 text-center mx-auto">
            <p className="mb-6">We offer a variety of interpretation solutions tailored to your needs:</p>
          <div>
            <h3 className="font-bold text-lg">1. Simultaneous Interpretation</h3>
            <p className="mt-2">
              Ideal for conferences, webinars, and large events. Interpreters translate the speaker’s message in real time without interrupting the flow. Requires specialized equipment for clear audio transmission.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg">2. Consecutive Interpretation</h3>
            <p className="mt-2">
              Suitable for small meetings, training sessions, and interviews. The speaker pauses to allow the interpreter to relay the message. Ensures a more in-depth and nuanced delivery.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg">3. Whispered Interpretation</h3>
            <p className="mt-2">
              Discreet, real-time interpretation for one or two listeners. Perfect for business negotiations, board meetings, or private tours.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg">4. Over-the-Phone Interpretation (OPI)</h3>
            <p className="mt-2">
              Quick and convenient interpretation through a phone connection. Ideal for urgent situations or remote communications.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg">5. Video Remote Interpretation (VRI)</h3>
            <p className="mt-2">
              Combines the convenience of remote access with visual communication cues. Suitable for teleconferences, virtual events, and online consultations.
            </p>
          </div>
        </div>
      </Section>

      {/* Process section repurposed for Industries: تم تحديث المحتوى وتطبيق المحاذاة */}
      <Section title="Industries We Support">
        <div className="max-w-5xl text-center mx-auto">
            <p className="text-gray-700 mb-6">
              Our interpreters are specialized in multiple sectors, including:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet>Legal proceedings and court hearings</Bullet>
              <Bullet>Medical consultations and healthcare events</Bullet>
              <Bullet>Technical and engineering conferences</Bullet>
              <Bullet>Financial and business meetings</Bullet>
              <Bullet>Government and public sector communication</Bullet>
              <Bullet>Media interviews and press conferences</Bullet>
            </ul>
        </div>
      </Section>

      {/* Why Us: تم تحديث النصوص وتطبيق المحاذاة */}
      <Section title="Why Choose Ideolingo for Interpretation?" subdued>
        <div className="max-w-5xl mx-auto text-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet>Native-level fluency in source and target languages.</Bullet>
              <Bullet>Subject-matter expertise for industry-specific accuracy.</Bullet>
              <Bullet>Cultural sensitivity to avoid misunderstandings.</Bullet>
              <Bullet>Professional ethics ensuring confidentiality and impartiality.</Bullet>
            </ul>
            <p className="mt-6 text-gray-700 font-semibold">
              Availability for on-site, hybrid, or fully remote events
            </p>
        </div>
      </Section>

      {/* CTA: تم تحديث زر الحث على اتخاذ إجراء */}
      <section className="py-16 lg:py-20 bg-primary" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Let’s Get Talking—In Every Language.
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Connect with your audience, partners, or clients instantly with seamless live interpretation.
          </p>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="border-0"
              style={{ backgroundColor: Accent, color: "#ffffffff" }}
            >
              <Link href="/contact">Book your interpreter now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}