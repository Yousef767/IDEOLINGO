"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    TestTube,
    Cog,
    BookOpen,
    Package,
    FileText,
    Microscope,
    BadgeCheck,
    Globe,
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

export default function LifeSciencePage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <Hero
                title="Life Science Localization"
                subtitle="Bringing Science to the World — One Language at a Time"
                imageSrc="/images/industries/life-science-hero.jpg" // يمكنك تغيير هذه الصورة لاحقًا
                rgb={true}
                overlayOpacity={0.5}
            />

            {/* Intro Section */}
            <Section>
                <div className="max-w-4xl text-gray-700 leading-relaxed text-center mx-auto">
                    <p>
                        At <strong>Ideolingo</strong>, we help life science companies communicate
                        their groundbreaking research, products, and innovations with global audiences.
                        The life sciences cover everything from biotechnology, pharmaceuticals, and
                        medical devices to research publications and clinical trials — all requiring
                        absolute accuracy, cultural sensitivity, and compliance with international
                        regulations.
                    </p>
                </div>
            </Section>

            {/* Our Expertise Includes Section */}
            <Section title="Our Expertise Includes:" subdued>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    <IconBullet icon={TestTube}>Translating clinical trial documentation</IconBullet>
                    <IconBullet icon={Cog}>Localizing medical device manuals and software</IconBullet>
                    <IconBullet icon={BookOpen}>Adapting scientific research papers</IconBullet>
                    <IconBullet icon={Package}>Translating pharmaceutical labels and packaging</IconBullet>
                    <IconBullet icon={FileText}>Multilingual patient information and consent forms</IconBullet>
                </ul>
            </Section>

            {/* Why Accuracy Matters Section */}
            <Section>
                <div className="max-w-4xl mx-auto text-center">
                    <Microscope size={48} className="mx-auto mb-4" style={{ color: "#C51431" }} />
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Accuracy Matters in Life Science</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Even a single mistranslation in life science content can lead to regulatory
                        setbacks, misinterpretations, or patient safety risks. That’s why we work with
                        expert linguists who have both language mastery and specialized
                        scientific knowledge.
                    </p>
                </div>
            </Section>

            {/* Our Promise Section */}
            <Section title="Our Promise:" subdued>
                <div className="max-w-5xl mx-auto text-center">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        <IconBullet icon={BadgeCheck}>ISO-level quality assurance</IconBullet>
                        <IconBullet icon={Globe}>Compliance with global regulatory standards (EMA, FDA, ISO 13485, etc.)</IconBullet>
                        <IconBullet icon={BookCheck}>Terminology consistency through advanced CAT tools and glossaries</IconBullet>
                        <IconBullet icon={Lock}>Fast, secure, and confidential handling of sensitive data</IconBullet>
                    </ul>
                    <p className="mt-8 text-gray-800 font-semibold text-lg">
                        With Ideolingo, you can ensure your life science content
                        speaks clearly, accurately, and confidently — no matter the language, no matter
                        the market.
                    </p>
                </div>
            </Section>

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-primary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                        Ensure Clarity and Compliance in Every Market.
                    </h2>
                    <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                        Contact us to discuss how our life science localization experts can support your global research and product launches.
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-zinc-900 hover:bg-zinc-200"
                        >
                            <Link href="/contact">Get a Life Science Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}