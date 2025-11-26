"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2,
  LayoutTemplate,
  Text,
  AlignHorizontalJustifyStart,
  Type,
  Image as ImageIcon,
  Award,
  FileType,
  FileText,
  FileCode2,
  FileSignature,
  Plug,
  BookOpen,
  Globe,
  Copy,
  Printer,
  Megaphone,
  BookMarked,
  BarChart3,
  Laptop,
  Package,
  Presentation
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

export default function DTPPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Hero
        title="Desktop Publishing (DTP)"
        subtitle="You are design, perfect in any language."
        imageSrc="/images/dtp-hero.jpg"
        rgb={true}
        overlayOpacity={0.45}
      />

      {/* Intro */}
      <Section>
        <div className="max-w-5xl text-gray-700 leading-relaxed text-center mx-auto space-y-4">
            <p>
              At <strong>Ideolingo</strong>, we go beyond translation to ensure your
              documents are not only linguistically accurate but also professionally
              formatted for the target audience. Our Desktop Publishing
              (DTP) service makes sure your translated materials retain the original
              design, layout, and visual appeal—no matter the language or script.
            </p>
            <p className="font-semibold">
              We format and adapt multilingual documents for print and digital use—keeping
              layouts clean and professional. We handle right-to-left scripts, text expansion, and cultural design
              adjustments.
            </p>
        </div>
      </Section>

      {/* What We Do */}
      <Section title="What We Do">
        <div className="max-w-5xl text-center mx-auto">
            <p className="text-gray-700 mb-8">
              Our DTP experts work with various file types, formats, and design tools to adapt
              your content to the target market. This includes:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <IconBullet icon={LayoutTemplate}>Preserving original design and layout during translation.</IconBullet>
              <IconBullet icon={Text}>Adjusting text expansion or contraction due to language differences.</IconBullet>
              <IconBullet icon={AlignHorizontalJustifyStart}>Formatting right-to-left languages such as Arabic and Hebrew.</IconBullet>
              <IconBullet icon={Type}>Managing fonts, styles, and typography for each target language.</IconBullet>
              <IconBullet icon={ImageIcon}>Inserting translated images, graphics, and charts where applicable.</IconBullet>
              <IconBullet icon={Award}>Ensuring consistent branding and professional presentation.</IconBullet>
            </ul>
        </div>
      </Section>

      {/* Supported Tools */}
      <Section title="Supported File Formats & Tools" subdued>
        <div className="max-w-5xl text-center mx-auto">
            <p className="text-gray-700 mb-8">
              We work with industry-standard software such as:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <IconBullet icon={FileType}>Adobe InDesign, Illustrator, Photoshop</IconBullet>
              <IconBullet icon={FileText}>Microsoft Office Suite (Word, PowerPoint, Excel)</IconBullet>
              <IconBullet icon={FileCode2}>Frame Maker, QuarkXPress</IconBullet>
              <IconBullet icon={FileSignature}>PDF editing tools</IconBullet>
              <IconBullet icon={Plug}>CAT tool integrations for translation-ready layouts</IconBullet>
            </ul>
        </div>
      </Section>

      {/* Why DTP Matters */}
      <Section title="Why DTP Matters">
        <div className="max-w-5xl text-center mx-auto">
            <p className="text-gray-700 mb-8">
              A translation might be linguistically perfect, but if the formatting is
              broken, the impact is lost. DTP ensures:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <IconBullet icon={BookOpen}>Readability and professional appearance.</IconBullet>
              <IconBullet icon={Globe}>Cultural adaptation of visuals, symbols, and design elements.</IconBullet>
              <IconBullet icon={Copy}>Brand consistency across all languages.</IconBullet>
              <IconBullet icon={Printer}>Print- and digital-ready deliverables.</IconBullet>
            </ul>
        </div>
      </Section>

      {/* When to Use DTP */}
      <Section title="When to Use Our DTP Services" subdued>
        <div className="max-w-5xl text-center mx-auto">
            <p className="text-gray-700 mb-8">
              Our DTP services are ideal for:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <IconBullet icon={Megaphone}>Marketing brochures and flyers</IconBullet>
              <IconBullet icon={BookMarked}>Product manuals and technical documents</IconBullet>
              <IconBullet icon={BarChart3}>Corporate reports and proposals</IconBullet>
              <IconBullet icon={Laptop}>E-learning materials</IconBullet>
              <IconBullet icon={Package}>Packaging and labels</IconBullet>
              <IconBullet icon={Presentation}>Presentations and training guides</IconBullet>
            </ul>
        </div>
      </Section> {/* --- التغيير: تم تصحيح الخطأ المطبعي هنا --- */}

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Make your multilingual documents look perfect.
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Request professional Desktop Publishing that keeps your layout flawless in every language.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="border-0" style={{ backgroundColor: Accent, color: "#f8f8f8ff" }}>
              <Link href="/contact">Get a DTP Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}