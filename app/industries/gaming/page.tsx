"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    MessageSquare,
    MousePointerClick,
    FileText,
    Clapperboard,
    Megaphone,
    TestTube,
    Gamepad2,
    Smile,
    Laptop,
    BookCheck
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const Accent = "#27272a"; // Zinc 800

// A component for bullets with custom icons
const IconBullet = ({ icon: Icon, children }: { icon: React.ElementType, children: React.ReactNode }) => (
    <li className="flex items-start gap-3 text-left">
        <Icon className="mt-1 h-5 w-5 shrink-0" style={{ color: Accent }} />
        <span className="text-gray-700">{children}</span>
    </li>
);

export default function GamingIndustryPage() {
    // تم الإبقاء على نفس الشعارات والمسار بناءً على طلبك
    const logos = [
        { name: "Konami", file: "konami.svg" },
        { name: "SEGA", file: "sega.svg" },
        { name: "Sony Interactive Entertainment", file: "sie.svg" },
        { name: "Ubisoft", file: "ubisoft.svg" },
        { name: "Riot Games", file: "riot.svg" },
        { name: "Xbox Game Studios", file: "xbox.svg" },
    ];

    return (
        <div className="min-h-screen">
            <Hero
                title="Gaming Translation & Localization"
                subtitle="Level Up Your Game for Global Players"
                imageSrc="/images/industries-gaming-hero.jpg"
                rgb={false}
                overlayOpacity={0.45}
            />

            <Section subdued>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        At <strong>Ideolingo</strong>, we help game developers, publishers, and
                        studios bring their worlds to life across cultures. Gaming is more than just
                        words on a screen — it’s storytelling, emotion, and immersion. That’s why our gaming
                        localization services go beyond translation, ensuring your game feels
                        natural and exciting for players everywhere.
                    </p>
                </div>
            </Section>

            <Section title="Our Gaming Services Include:">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    <IconBullet icon={MessageSquare}>In-game text and dialogue translation</IconBullet>
                    <IconBullet icon={MousePointerClick}>User interface (UI) and menu localization</IconBullet>
                    <IconBullet icon={FileText}>Game script adaptation for cultural relevance</IconBullet>
                    <IconBullet icon={Clapperboard}>Subtitling and voice-over for cutscenes</IconBullet>
                    <IconBullet icon={Megaphone}>Marketing materials and app store description translation</IconBullet>
                    <IconBullet icon={TestTube}>Quality assurance (LQA) to test in-game language integration</IconBullet>
                </ul>
            </Section>

            <Section title="Why Choose Ideolingo for Gaming?" subdued>
                <div className="max-w-5xl mx-auto text-center">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        <IconBullet icon={Gamepad2}>Native linguists who are gamers themselves</IconBullet>
                        <IconBullet icon={Smile}>Expertise in maintaining tone, humor, and cultural references</IconBullet>
                        <IconBullet icon={Laptop}>Support for multiple platforms: PC, console, mobile, VR</IconBullet>
                        <IconBullet icon={BookCheck}>Consistent terminology through glossaries and CAT tools</IconBullet>
                    </ul>
                    <p className="mt-8 text-gray-800 font-semibold text-lg">
                        With Ideolingo, your game won’t just be translated — it
                        will be reborn for each audience, keeping the fun, thrill, and
                        adventure intact.
                    </p>
                </div>
            </Section>

            {/* --- شريط اللوجوهات المتحرك --- */}
            <Section>
                <div className="text-center">
                    <h3 className="text-xl font-extrabold text-gray-900">Trusted by Leading Game Studios</h3>
                    <div className="mx-auto mt-2 h-1 w-24 rounded" style={{ backgroundColor: Accent }} />
                </div>
                <div className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/gaming/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/gaming/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            <section className="py-16 lg:py-20 bg-primary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                        Ship Globally. Play Naturally.
                    </h2>
                    <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                        Launch immersive, on-brand experiences—localized by gamers for gamers.
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-zinc-900 hover:bg-zinc-200"
                        >
                            <Link href="/contact">Start Your Game Localization</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}