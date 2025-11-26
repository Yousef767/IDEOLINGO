"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    BookOpen,
    Laptop,
    BookMarked,
    Clapperboard,
    FileCheck,
    Globe,
    Users,
    Palette,
    BookCheck as BookCheckIcon, // Renamed to avoid conflict
    FileBox
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const Accent = "#27272a";

// A component for bullets with custom icons
const IconBullet = ({ icon: Icon, children }: { icon: React.ElementType, children: React.ReactNode }) => (
    <li className="flex items-start gap-3 text-left">
        <Icon className="mt-1 h-5 w-5 shrink-0" style={{ color: Accent }} />
        <span className="text-gray-700">{children}</span>
    </li>
);

export default function EducationElearningPage() {
    // تم الإبقاء على نفس الشعارات والمسار بناءً على طلبك
    const logos = [
        { name: "Lynda", file: "lynda.svg" },
        { name: "McGraw Hill", file: "mcgrawhill.svg" },
        { name: "NEO LMS", file: "neo.svg" },
        { name: "Pearson", file: "pearson.svg" },
        { name: "Scholastic", file: "scholastic.svg" },
        { name: "Udemy", file: "udemy.svg" },
    ];

    return (
        <div className="min-h-screen">
            <Hero
                title="Educational Translation & Localization"
                subtitle="Opening Doors to Learning, Worldwide"
                imageSrc="/images/industries-education-hero.jpg"
                rgb={false}
                overlayOpacity={0.45}
            />

            <Section subdued>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Education has no borders — and neither should your content. At <strong>Ideolingo</strong>,
                        we help schools, universities, e-learning platforms, and educational publishers
                        deliver accurate, engaging, and culturally adapted materials to learners across
                        the globe.
                    </p>
                </div>
            </Section>

            <Section title="Our Educational Services Include:">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    <IconBullet icon={BookOpen}>Textbooks, workbooks, and academic publications</IconBullet>
                    <IconBullet icon={Laptop}>E-learning platform localization and course translation</IconBullet>
                    <IconBullet icon={BookMarked}>Training manuals and instructional guides</IconBullet>
                    <IconBullet icon={Clapperboard}>Educational video subtitling and voice-over</IconBullet>
                    <IconBullet icon={FileCheck}>Examination papers and certification materials</IconBullet>
                    <IconBullet icon={Globe}>Multilingual websites for educational institutions</IconBullet>
                </ul>
            </Section>

            <Section title="Why Choose Ideolingo for Education?" subdued>
                <div className="max-w-5xl mx-auto text-center">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        <IconBullet icon={Users}>Linguists experienced in academic and pedagogical content</IconBullet>
                        <IconBullet icon={Palette}>Adaptation for different education systems and cultural contexts</IconBullet>
                        <IconBullet icon={BookCheckIcon}>Consistency in terminology across subjects and materials</IconBullet>
                        <IconBullet icon={FileBox}>Support for multimedia, digital, and print formats</IconBullet>
                    </ul>
                    <p className="mt-8 text-gray-800 font-semibold text-lg">
                        With Ideolingo, your educational content will inspire,
                        inform, and engage learners — no matter the language or location.
                    </p>
                </div>
            </Section>

            {/* --- شريط اللوجوهات المتحرك --- */}
            <Section>
                <div className="text-center">
                    <h3 className="text-xl font-extrabold text-gray-900">Trusted by Leading Educational Institutions</h3>
                    <div className="mx-auto mt-2 h-1 w-24 rounded" style={{ backgroundColor: Accent }} />
                </div>
                <div className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/education/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/education/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            <section className="py-16 lg:py-20 bg-primary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                        Let’s make your learning content globally accessible and locally meaningful.
                    </h2>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-zinc-900 hover:bg-zinc-200"
                        >
                            <Link href="/contact">Request a Quote for E-learning Translation</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}