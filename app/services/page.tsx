"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Hero from "@/components/Hero"
import {
  Languages,
  Sparkles,
  FileText,
  Clapperboard,
  Headphones,
  LayoutGrid,
  Bot,
  PencilLine,
  BadgeCheck,
} from "lucide-react"

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>

export default function ServicesPage() {
  // للعناوين داخل الجريد (تقدر تغير الوصف لاحقًا لو حبيت)
  const services: { title: string; Icon: IconType; desc?: string }[] = [
    { title: "Translation & Localization", Icon: Languages, desc: "Accurate, consistent, and market-ready content." },
    { title: "Transcreation", Icon: Sparkles, desc: "Creative adaptation that keeps intent and impact." },
    { title: "Transcription", Icon: FileText, desc: "Clean transcripts for meetings, audio, and video." },
    { title: "Subtitling and Voice Over", Icon: Clapperboard, desc: "Engaging media for global audiences." },
    { title: "Interpretation", Icon: Headphones, desc: "Consecutive & simultaneous, onsite and remote." },
    { title: "Desktop Publishing (DTP)", Icon: LayoutGrid, desc: "Polished multilingual layout & formatting." },
    { title: "Machine Translation + Post-Editing (MTPE)", Icon: Bot, desc: "Speed plus human-grade quality." },
    { title: "Proofreading & Editing", Icon: PencilLine, desc: "Tone, style, and terminology alignment." },
    { title: "Linguistic QA", Icon: BadgeCheck, desc: "Final checks for accuracy & cultural fit." },
  ]

  // العناصر الخاصة بالقائمة أعلاه — هيتقسّموا عمودين تلقائيًا
  const listItems = [
    "Translation & Localization",
    "Transcreation",
    "Transcription",
    "Subtitling and voice over",
    "Interpretation",
    "Desktop Publishing (DTP)",
    "Machine Translation + Post-Editing (MTPE)",
    "Proofreading & Editing",
    "Linguistic QA",
  ]

  // تقسيم متوازن لعمودين
  const mid = Math.ceil(listItems.length / 2)
  const colA = listItems.slice(0, mid)
  const colB = listItems.slice(mid)

  return (
    <main className="min-h-screen">
      {/* ===== Hero ===== */}
      <Hero
        title="Services Overview"
        subtitle="You are an all-in-one language solution."
        primaryCta={{
          label: "Explore all our services and choose what fits your needs",
          href: "#all-services",
        }}
        align="center"
        height="md"
      />

      {/* ===== Intro List (مقاسات/تباعد محسّنة) ===== */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-xl sm:text-2xl font-semibold text-slate-700">
              We cover the entire spectrum of language services:
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {/* عمود 1 */}
              <ul className="list-disc pl-6 space-y-3 text-base sm:text-lg leading-relaxed text-slate-800 marker:text-slate-500">
                {colA.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {/* عمود 2 */}
              <ul className="list-disc pl-6 space-y-3 text-base sm:text-lg leading-relaxed text-slate-800 marker:text-slate-500">
                {colB.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* CTA (اللون المطلوب) */}
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg" className="bg-zinc-800 hover:bg-zinc-700">
                <Link href="#all-services">
                  Explore all our services and choose what fits your needs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Grid: All Services (تم تعديل الألوان هنا) ===== */}
      <section id="all-services" className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ title, Icon, desc }) => (
                <Card key={title} className="bg-[#545454] border-transparent">
                  <CardContent className="p-6 h-full">
                    <div className="flex h-full items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-600">
                        {/* أيقونة باللون الأبيض */}
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex min-h-full flex-col">
                        <h3 className="text-lg font-semibold text-white">{title}</h3>
                        {desc ? (
                          <p className="mt-1 text-sm text-gray-300">{desc}</p>
                        ) : null}
                        <div className="mt-auto pt-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA سفلي بنفس الألوان */}
            <div className="mt-10 text-center">
              <Button asChild size="lg" className="bg-zinc-900 hover:bg-zinc-700">
                <Link href="/contact">
                  Explore all our services and choose what fits your needs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}