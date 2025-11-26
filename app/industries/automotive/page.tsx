"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    BookText,
    AppWindow,
    Megaphone,
    ClipboardCheck,
    GraduationCap,
    Globe,
    Users,
    BadgeCheck,
    BookCheck,
    Copy
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

export default function AutomotivePage() {
    // تم الإبقاء على نفس الشعارات والمسار بناءً على طلبك
    const logos = [
        { name: "Mitsubishi", file: "mitsubishi.svg" },
        { name: "Nissan", file: "nissan.svg" },
        { name: "Tesla", file: "tesla.svg" },
        { name: "Toyota", file: "toyota.svg" },
        { name: "Volkswagen", file: "vw.svg" },
        { name: "Volvo", file: "volvo.svg" },
    ];

    return (
        <div className="min-h-screen">
            <Hero
                title="Automotive Translation & Localization"
                subtitle="Driving Your Message Across Borders"
                imageSrc="/images/industries-automotive-hero.jpg" // You can change this image later
                rgb={true}
                overlayOpacity={0.45}
            />

            <Section subdued>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        The automotive industry is global, and your content needs to travel as fast
                        as your innovations. At <strong>Ideolingo</strong>, we provide precise and
                        industry-compliant translations for manufacturers, suppliers, and service
                        providers — ensuring technical accuracy and cultural relevance in every market.
                    </p>
                </div>
            </Section>

            <Section title="Our Automotive Services Include:">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    <IconBullet icon={BookText}>Technical manuals and user guides translation</IconBullet>
                    <IconBullet icon={AppWindow}>Vehicle software and onboard system localization</IconBullet>
                    <IconBullet icon={Megaphone}>Marketing materials and product catalogs</IconBullet>
                    <IconBullet icon={ClipboardCheck}>Safety documentation and compliance reports</IconBullet>
                    <IconBullet icon={GraduationCap}>Training materials for mechanics and technicians</IconBullet>
                    <IconBullet icon={Globe}>Multilingual websites and e-commerce platforms for automotive products</IconBullet>
                </ul>
            </Section>

            <Section title="Why Choose Ideolingo for Automotive?" subdued>
                <div className="max-w-5xl mx-auto text-center">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        <IconBullet icon={Users}>Expert linguists with automotive and engineering backgrounds</IconBullet>
                        <IconBullet icon={BadgeCheck}>Compliance with industry standards and safety regulations</IconBullet>
                        <IconBullet icon={BookCheck}>Terminology accuracy using specialized glossaries and CAT tools</IconBullet>
                        <IconBullet icon={Copy}>Consistent branding across all languages and regions</IconBullet>
                    </ul>
                    <p className="mt-8 text-gray-800 font-semibold text-lg">
                        With Ideolingo, your automotive content is translated with
                        the precision of an engineer and the care of a
                        craftsman — ready to hit the road in any market.
                    </p>
                </div>
            </Section>

            {/* --- شريط اللوجوهات المتحرك --- */}
            <Section>
                <div className="text-center">
                    <h3 className="text-xl font-extrabold text-gray-900">Trusted by Leading Automotive Brands</h3>
                    <div className="mx-auto mt-2 h-1 w-24 rounded" style={{ backgroundColor: Accent }} />
                </div>
                <div className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            <section className="py-16 lg:py-20 bg-primary" >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                        Precision, Safety, Innovation—In Every Language.
                    </h2>
                    <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                        Trust <strong>Ideolingo</strong> to power your automotive communications across borders.
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-zinc-900 hover:bg-zinc-200"
                        >
                            <Link href="/contact">Start Your Automotive Project</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}