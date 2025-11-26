"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Sparkles,
    Globe,
    ThumbsUp,
    Newspaper,
    Clapperboard,
    Search,
    Users,
    Brush,
    Palette, // أيقونة جديدة
    Repeat   // أيقونة جديدة
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

export default function MarketingAdvertisingPage() {
    const logos = [
        { name: "Nielsen", file: "nielsen.svg" },
        { name: "Nike", file: "nike.svg" },
        { name: "OMG", file: "omg.svg" },
        { name: "Sephora", file: "sephora.svg" },
        { name: "BusinessWare", file: "businessware.svg" },
        { name: "WPP", file: "wpp.svg" },
    ];

    return (
        <div className="min-h-screen">
            <Hero
                title="Marketing & Advertising Translation"
                subtitle="Turning Words into Global Impact"
                imageSrc="/images/industries-marketing-hero.jpg"
                rgb
                overlayOpacity={0.45}
            />

            <Section>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-700 leading-relaxed">
                        Marketing is all about emotion, connection, and persuasion — and those don’t
                        always translate word-for-word. At <strong>Ideolingo</strong>, we go beyond
                        direct translation to deliver creative, culturally adapted messages that
                        resonate with your target audience in every market.
                    </p>
                </div>
            </Section>

            <Section title="Our Marketing & Advertising Services Include:" subdued>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    <IconBullet icon={Sparkles}>Brand slogans, taglines, and campaign messaging</IconBullet>
                    <IconBullet icon={Globe}>Website and landing page localization</IconBullet>
                    <IconBullet icon={ThumbsUp}>Social media content adaptation</IconBullet>
                    <IconBullet icon={Newspaper}>Brochures, flyers, and promotional materials</IconBullet>
                    <IconBullet icon={Clapperboard}>Video subtitling, voice-over, and transcreation</IconBullet>
                    <IconBullet icon={Search}>Multilingual SEO and keyword optimization</IconBullet>
                </ul>
            </Section>

            {/* --- التغيير: تم تحديث هذا القسم بالنصوص الجديدة --- */}
            <Section title="Why Choose Ideolingo for Marketing & Advertising?">
                <div className="max-w-5xl mx-auto text-center">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        <IconBullet icon={Users}>Native linguists with marketing and copywriting expertise</IconBullet>
                        <IconBullet icon={Brush}>Creative transcreation that keeps the tone, style, and impact intact</IconBullet>
                        <IconBullet icon={Palette}>Adaptation for cultural nuances, humor, and local trends</IconBullet>
                        <IconBullet icon={Repeat}>Consistent brand voice across all channels and languages</IconBullet>
                    </ul>
                    <p className="mt-8 text-gray-800 font-semibold text-lg">
                        With Ideolingo, your marketing messages will inspire,
                        engage, and convert — no matter where in the world your customers are.
                    </p>
                </div>
            </Section>
            
            <Section subdued>
                <div className="text-center">
                    <h3 className="text-xl font-extrabold text-secondary">Trusted by Leading Brands</h3>
                    <div className="mx-auto mt-2 h-1 w-24 rounded" style={{ backgroundColor: Accent }} />
                </div>
                <div className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/marketing/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/marketing/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            <section className="py-16 lg:py-20 bg-primary" >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                        Make Every Message Count—Everywhere.
                    </h2>
                    <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                        Let’s bring your campaigns to life in every market, without losing the spark.
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-zinc-900 hover:bg-zinc-200"
                        >
                            <Link href="/contact">Let’s Talk Marketing</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}