"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    FileSignature,
    ScrollText,
    Lightbulb,
    Landmark,
    Gavel,
    Building2,
    Users,
    Lock,
    BookCheck,
    BadgeCheck
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

export default function LegalTranslationPage() {
    const logos = [
        { name: "Fragomen", file: "fragomen.svg" },
        { name: "Hadef & Partners", file: "hadef-partners.svg" },
        { name: "OGH Legal", file: "ogh-legal.svg" },
        { name: "OPro", file: "opro.svg" },
        { name: "STA", file: "sta.svg" },
        { name: "TLG", file: "tlg.svg" },
    ];

    return (
        <div className="min-h-screen">
            <Hero
                title="Legal Translation"
                subtitle="Accuracy You Can Trust in Every Word"
                imageSrc="/images/industries-legal-hero.jpg"
                rgb={false}
                overlayOpacity={0.45}
            />

            <Section subdued>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        In the legal world, precision isn’t just important — it’s critical. At <strong>Ideolingo</strong>,
                        we deliver accurate, reliable, and confidential legal translations for law
                        firms, corporate legal departments, government agencies, and individuals. We
                        understand that a single mistranslation can have serious consequences, so we
                        ensure every document is handled with the utmost care and expertise.
                    </p>
                </div>
            </Section>

            <Section title="Our Legal Translation Services Include:">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    <IconBullet icon={FileSignature}>Contracts, agreements, and court documents</IconBullet>
                    <IconBullet icon={ScrollText}>Laws, regulations, and compliance materials</IconBullet>
                    <IconBullet icon={Lightbulb}>Patents and intellectual property documentation</IconBullet>
                    <IconBullet icon={Landmark}>Immigration and citizenship documents</IconBullet>
                    <IconBullet icon={Gavel}>Arbitration and litigation materials</IconBullet>
                    <IconBullet icon={Building2}>Corporate policies and legal correspondence</IconBullet>
                </ul>
            </Section>

            <Section title="Why Choose Ideolingo for Legal Translation?" subdued>
                <div className="max-w-5xl mx-auto text-center">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        <IconBullet icon={Users}>Legal linguists with expertise in different legal systems</IconBullet>
                        <IconBullet icon={Lock}>Strict confidentiality and secure document handling</IconBullet>
                        <IconBullet icon={BookCheck}>Terminology accuracy through legal glossaries and CAT tools</IconBullet>
                        <IconBullet icon={BadgeCheck}>Compliance with local and international legal standards</IconBullet>
                    </ul>
                    <p className="mt-8 text-gray-800 font-semibold text-lg">
                        With Ideolingo, your legal documents will be translated with the highest level of accuracy, confidentiality, and professionalism — protecting your interests across borders.
                    </p>
                </div>
            </Section>

            {/* --- شريط اللوجوهات المتحرك --- */}
            <Section>
                <div className="text-center">
                    <h3 className="text-xl font-extrabold text-gray-900">Trusted by Leading Legal Firms</h3>
                    <div className="mx-auto mt-2 h-1 w-24 rounded" style={{ backgroundColor: Accent }} />
                </div>
                <div className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/legal/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/legal/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            <section className="py-16 lg:py-20 bg-primary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                        Ensure Your Legal Documents are Flawless.
                    </h2>
                    <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                        Contact Ideolingo for a confidential consultation on your legal translation needs.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" className="bg-white text-zinc-900 hover:bg-zinc-200">
                            <Link href="/contact">Get a Secure Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}