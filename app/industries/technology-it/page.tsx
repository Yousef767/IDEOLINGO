"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    FileText,
    Settings,
    ClipboardCheck,
    GraduationCap,
    Lightbulb,
    Code,
    Users,
    BookOpen,
    BookCheck,
    Lock
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

export default function TechnicalTranslationPage() {
    // تم الإبقاء على نفس الشعارات والمسار بناءً على طلبك
    const logos = [
        { name: "Etisalat", file: "etisalat.svg" },
        { name: "Orange", file: "orange.svg" },
        { name: "Intracom", file: "intracom.svg" },
        { name: "Omantel", file: "omantel.svg" },
        { name: "Vodafone", file: "vodafone.svg" },
        { name: "ZTE", file: "zte.svg" },
    ];

    return (
        <div className="min-h-screen">
            <Hero
                title="Technical Translation"
                subtitle="Precision in Every Detail"
                imageSrc="/images/industries-telecom-hero.jpg" // يمكنك تغيير هذه الصورة لاحقًا
                rgb
                overlayOpacity={0.45}
            />

            <Section>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-700 leading-relaxed">
                        In technical fields, even the smallest translation error can lead to costly
                        mistakes or safety risks. At <strong>Ideolingo</strong>, we specialize in
                        translating complex technical documents with absolute accuracy and clarity,
                        ensuring your content is understood exactly as intended — in any language.
                    </p>
                </div>
            </Section>

            <Section title="Our Technical Translation Services Include:" subdued>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    <IconBullet icon={FileText}>User manuals and product guides</IconBullet>
                    <IconBullet icon={Settings}>Engineering specifications and schematics</IconBullet>
                    <IconBullet icon={ClipboardCheck}>Safety documentation and compliance reports</IconBullet>
                    <IconBullet icon={GraduationCap}>Technical training materials and e-learning</IconBullet>
                    <IconBullet icon={Lightbulb}>Patents and technical research papers</IconBullet>
                    <IconBullet icon={Code}>Software and interface localization</IconBullet>
                </ul>
            </Section>

            <Section title="Why Choose Ideolingo for Technical Translation?">
                <div className="max-w-5xl mx-auto text-center">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        <IconBullet icon={Users}>Expert linguists with engineering and technical backgrounds</IconBullet>
                        <IconBullet icon={BookOpen}>Mastery of industry-specific terminology and standards</IconBullet>
                        <IconBullet icon={BookCheck}>Consistency ensured through glossaries and CAT tools</IconBullet>
                        <IconBullet icon={Lock}>Secure handling of proprietary and confidential information</IconBullet>
                    </ul>
                    <p className="mt-8 text-gray-800 font-semibold text-lg">
                        With Ideolingo, your technical content will be translated
                        with the same precision and reliability as the products and systems it
                        supports.
                    </p>
                </div>
            </Section>
            
            {/* --- شريط اللوجوهات المتحرك --- */}
            <Section subdued>
                <div className="text-center">
                    <h3 className="text-xl font-extrabold text-gray-900">Trusted by Leading Global Brands</h3>
                    <div className="mx-auto mt-2 h-1 w-24 rounded" style={{ backgroundColor: Accent }} />
                </div>
                <div className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/telecom/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/telecom/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            <section className="py-16 lg:py-20 bg-primary" >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                        Ensure Precision in Your Technical Content.
                    </h2>
                    <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                        Contact Ideolingo to discuss your technical translation project and get a confidential quote.
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-zinc-900 hover:bg-zinc-200"
                        >
                            <Link href="/contact">Get a Technical Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}