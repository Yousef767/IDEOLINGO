"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Tractor,
    BookOpen,
    Leaf,
    Megaphone,
    GraduationCap,
    Landmark,
    Users,
    BadgeCheck,
    BookCheck,
    Globe
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

export default function AgriculturePage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <Hero
                title="Agriculture Translation & Localization"
                subtitle="Cultivating Communication for a Global Harvest"
                imageSrc="/images/industries/agriculture-hero.jpg" // يمكنك تغيير هذه الصورة لاحقًا
                rgb={true}
                overlayOpacity={0.5}
            />

            {/* Intro Section */}
            <Section>
                <div className="max-w-4xl text-gray-700 leading-relaxed text-center mx-auto">
                    <p>
                        Agriculture is at the heart of feeding the world — and clear communication
                        ensures innovation, safety, and sustainability reach every corner of the globe.
                        At <strong>Ideolingo</strong>, we help agribusinesses, research institutes, and
                        agricultural technology companies connect with international markets through
                        precise, industry-specific translations.
                    </p>
                </div>
            </Section>

            {/* Our Agriculture Services Include Section */}
            <Section title="Our Agriculture Services Include:" subdued>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    <IconBullet icon={Tractor}>Farming equipment manuals and safety guides</IconBullet>
                    <IconBullet icon={BookOpen}>Agricultural research papers and reports</IconBullet>
                    <IconBullet icon={Leaf}>Seed, crop, and fertilizer product labels</IconBullet>
                    <IconBullet icon={Megaphone}>Marketing materials for global agricultural products</IconBullet>
                    <IconBullet icon={GraduationCap}>Training content for farmers and technicians</IconBullet>
                    <IconBullet icon={Landmark}>Government and NGO agricultural policy documents</IconBullet>
                </ul>
            </Section>
            
            {/* Why Choose Ideolingo Section */}
            <Section title="Why Choose Ideolingo for Agriculture?">
                <div className="max-w-5xl mx-auto text-center">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        <IconBullet icon={Users}>Linguists with agricultural and environmental expertise</IconBullet>
                        <IconBullet icon={BadgeCheck}>Compliance with local and international regulations</IconBullet>
                        <IconBullet icon={BookCheck}>Accurate terminology for crops, machinery, and farming practices</IconBullet>
                        <IconBullet icon={Globe}>Culturally adapted content for diverse farming communities</IconBullet>
                    </ul>
                    <p className="mt-8 text-gray-800 font-semibold text-lg">
                        With Ideolingo, your agricultural content will grow beyond
                        borders — sowing understanding, trust, and opportunity in every market.
                    </p>
                </div>
            </Section>

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-primary" >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                        Cultivate Your Global Reach.
                    </h2>
                    <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                        Let's help your agricultural innovations grow worldwide with clear, accurate communication.
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-zinc-900 hover:bg-zinc-200"
                        >
                            <Link href="/contact">Get an Agriculture Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}