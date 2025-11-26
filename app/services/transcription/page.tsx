"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Lock, UserCheck, Award, FileCog, UploadCloud, PencilLine, SearchCheck, Send, Mic, Presentation, Briefcase } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const Accent = "#C51431";

// I've created a new Bullet component to accept custom icons
const IconBullet = ({ icon: Icon, children }: { icon: React.ElementType, children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-left">
    <Icon className="mt-1 h-5 w-5 shrink-0" style={{ color: Accent }} />
    <span className="text-gray-700">{children}</span>
  </li>
);

export default function TranscriptionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Hero
        title="Transcription Services"
        subtitle="Turn Speech into Precise, Readable Text"
        imageSrc="/images/transcription-hero.jpg"
        rgb={true}
        overlayOpacity={0.45}
      />

      {/* Intro Section: المحتوى الأساسي الذي قدمته */}
      <Section>
        <div className="max-w-4xl text-gray-700 leading-relaxed text-center mx-auto">
            <p className="text-lg mb-8">
              Our linguists ensure every word is captured faithfully, with optional time-coding
              and speaker identification. We also adapt transcriptions for
              clarity, grammar, and readability — perfect for publishing or archiving.
            </p>
        </div>
      </Section>

      {/* What We Transcribe: قسم جديد مع أيقونات */}
      <Section title="Fast, Accurate and Secure Transcription For:" subdued>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                  <Mic size={40} className="mx-auto mb-4" style={{ color: Accent }} />
                  <h3 className="font-semibold text-lg mb-2">Media & Interviews</h3>
                  <p className="text-gray-600 text-sm">Interviews, podcasts, and webinars captured with perfect clarity.</p>
              </div>
              <div className="text-center">
                  <Presentation size={40} className="mx-auto mb-4" style={{ color: Accent }} />
                  <h3 className="font-semibold text-lg mb-2">Academic & Corporate</h3>
                  <p className="text-gray-600 text-sm">Conferences, lectures, and training sessions for your records.</p>
              </div>
              <div className="text-center">
                  <Briefcase size={40} className="mx-auto mb-4" style={{ color: Accent }} />
                  <h3 className="font-semibold text-lg mb-2">Professional Recordings</h3>
                  <p className="text-gray-600 text-sm">Legal, medical, and business recordings handled with confidentiality.</p>
              </div>
          </div>
      </Section>

      {/* Why Choose Us: قسم جديد مع أيقونات */}
      <Section title="What Makes Our Service Stand Out?">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl mx-auto">
          <IconBullet icon={UserCheck}><strong>Human-Powered Accuracy:</strong> Our transcriptions are performed by expert linguists, ensuring nuanced understanding and eliminating errors common in automated services.</IconBullet>
          <IconBullet icon={Lock}><strong>Confidentiality Guaranteed:</strong> We handle your files with the utmost security, using encrypted platforms for uploads and delivery.</IconBullet>
          <IconBullet icon={Award}><strong>Expertise in Your Field:</strong> Whether it’s legal, medical, or technical content, our transcribers have the subject-matter knowledge to ensure terminology is always accurate.</IconBullet>
          <IconBullet icon={FileCog}><strong>Formatted for Your Needs:</strong> Receive your transcripts ready for any purpose, clean-read for publishing or verbatim for analysis, complete with timestamps and speaker labels.</IconBullet>
        </ul>
      </Section>

      {/* Our Process: قسم جديد مع أيقونات */}
      <Section title="Our Simple & Secure Process" subdued>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center">
                <UploadCloud size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">1. Secure File Upload</h3>
                <p className="text-gray-600 text-sm">Easily upload your audio or video files through our secure, encrypted portal.</p>
            </div>
            <div className="flex flex-col items-center">
                <PencilLine size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">2. Expert Transcription</h3>
                <p className="text-gray-600 text-sm">A native-speaking linguist, matched to your content's subject matter, transcribes your file with precision.</p>
            </div>
            <div className="flex flex-col items-center">
                <SearchCheck size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">3. Quality Review</h3>
                <p className="text-gray-600 text-sm">A second professional reviews the transcript against the source audio to guarantee accuracy.</p>
            </div>
            <div className="flex flex-col items-center">
                <Send size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">4. Timely Delivery</h3>
                <p className="text-gray-600 text-sm">We deliver the polished, finalized transcript to you in your desired format, on time.</p>
            </div>
        </div>
      </Section>
      
      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            From Spoken Word to Smart Text.
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Let us help you capture your message—word for word, language by language.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="border-0 bg-white hover:bg-white"
            >
              <Link href="/contact">Request Transcription</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}