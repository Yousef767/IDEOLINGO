"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  FileText,
  Megaphone,
  Search,
  PenSquare,
  Award,
  Globe,
  BadgeCheck,
  Clock
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const Accent = "#C51431";

// A component for bullets with custom icons
const IconBullet = ({ icon: Icon, children }: { icon: React.ElementType, children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-left">
    <Icon className="mt-1 h-5 w-5 shrink-0" style={{ color: Accent }} />
    <span className="text-gray-700">{children}</span>
  </li>
);

export default function WritingServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero: تم تحديث النصوص */}
      <Hero
        title="Writing Services"
        subtitle="Words That Connect, Persuade, and Inspire"
        imageSrc="/images/lqa-hero.jpg"
        rgb={true}
        overlayOpacity={0.5}
      />

      {/* Intro: تم تحديث النص والمحاذاة */}
      <Section>
        <p className="max-w-5xl text-gray-700 leading-relaxed text-center mx-auto">
          At <strong>Ideolingo</strong>, we know that powerful, well-crafted content
          is key to connecting with your audience and making an impact. Our team of
          expert writers delivers clear, engaging, and culturally relevant content
          tailored to your unique needs.
        </p>
      </Section>

      {/* Our Writing Services Include: تم تحديث المحتوى مع الأيقونات والمحاذاة */}
      <Section title="Our Writing Services Include" subdued>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center">
                <FileText size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">Content Writing</h3>
                <p className="text-gray-600 text-sm">Informative, engaging content constructed to reflect your brand’s voice and resonate with your target market.</p>
            </div>
            <div className="flex flex-col items-center">
                <Megaphone size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">Copywriting</h3>
                <p className="text-gray-600 text-sm">Persuasive, action-driving copy designed for ads, websites, product descriptions, and more.</p>
            </div>
            <div className="flex flex-col items-center">
                <Search size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">SEO Writing</h3>
                <p className="text-gray-600 text-sm">Optimized content that boosts your search engine rankings and attracts the right visitors.</p>
            </div>
            <div className="flex flex-col items-center">
                <PenSquare size={40} className="mb-4" style={{ color: Accent }} />
                <h3 className="font-semibold text-lg mb-2">Article & Essay Writing</h3>
                <p className="text-gray-600 text-sm">Thoroughly researched, well-structured pieces that inform and captivate readers.</p>
            </div>
        </div>
      </Section>
      
      {/* Why Choose Ideolingo: تم تحديث المحتوى مع الأيقونات والمحاذاة */}
      <Section title="Why Choose Ideolingo?">
        <div className="max-w-5xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <IconBullet icon={Award}><strong>Experienced Writers:</strong> Expertise across diverse industries.</IconBullet>
              <IconBullet icon={Globe}><strong>Culturally Sensitive:</strong> Content adapted to your audience’s preferences.</IconBullet>
              <IconBullet icon={BadgeCheck}><strong>Strict Quality Assurance:</strong> Careful editing and proofreading.</IconBullet>
              <IconBullet icon={Clock}><strong>On-Time Delivery:</strong> Respecting your deadlines without compromise.</IconBullet>
            </ul>
        </div>
      </Section>

      {/* Pre-CTA section */}
      <Section subdued>
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Elevate Your Content?</h2>
            <p className="text-gray-700 text-lg">
              Collaborate with Ideolingo, and let us bring your message
              to life with words that truly connect.
            </p>
        </div>
      </Section>

      {/* CTA: تم تحديث النصوص وتصحيح الخطأ */}
      <section className="py-16 lg:py-20 bg-primary" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Let's Tell Your Story.
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Contact us today for a free consultation, and let us start
            constructing your success story!
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="border-0 bg-white hover:bg-white"
            >
              <Link href="/contact">Start Your Writing Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}