"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    // Icons for "What We Translate"
    FileText, Store, Megaphone, MessageSquare, Mail, MonitorSmartphone, FileSignature, MessageCircle, Package,
    // Icons for "Who We Work With"
    ShoppingBag, Target, Shirt, Plug, PackageCheck, Globe,
    // Icons for "Why Ideolingo"
    TrendingUp, Users, Search, FileCog, Network, TestTube
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const Accent = "#27272a"; // Zinc 800

// تم تعديل المكون ليقبل أيقونات مخصصة
const IconBullet = ({ icon: Icon, children }: { icon: React.ElementType, children: React.ReactNode }) => (
    <li className="flex items-start gap-3 text-left">
        <Icon className="mt-1 h-5 w-5 shrink-0" style={{ color: Accent }} />
        <span className="text-gray-700">{children}</span>
    </li>
);

export default function EcommerceRetailPage() {
    const logos = [
        { name: "StyIe", file: "style.svg" },
        { name: "Majid Al Futtaim", file: "maf.svg" },
        { name: "Puma", file: "puma.svg" },
        { name: "Sephora", file: "sephora.svg" },
        { name: "Zara", file: "zara.svg" },
        { name: "Alibaba", file: "alibaba.svg" },
    ];

    return (
        <div className="min-h-screen">
            <Hero
                title="E-commerce & Retail"
                subtitle="Sell Smarter. Sell Everywhere. In Every Language."
                imageSrc="/images/industries-ecommerce-hero.jpg"
                rgb={false}
                overlayOpacity={0.45}
            />

            <Section>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-xl font-bold text-gray-900">
                        Your Global Digital Storefront
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        In the world of e-commerce, your content is your storefront. At <strong> Ideolingo</strong>, we help brands break language barriers and connect with customers worldwide through culturally relevant, conversion-driven translations. We make your content feel local—wherever it goes.
                    </p>
                </div>
            </Section>

            <Section title="What We Translate & Localize" subdued>
                {/* تم تطبيق المحاذاة والأيقونات المخصصة */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 max-w-6xl mx-auto">
                    <IconBullet icon={FileText}>Product Descriptions &amp; Catalogs</IconBullet>
                    <IconBullet icon={Store}>Online Storefronts &amp; Checkout</IconBullet>
                    <IconBullet icon={Megaphone}>Digital Ads &amp; Banners</IconBullet>
                    <IconBullet icon={MessageSquare}>Customer Reviews &amp; UGC</IconBullet>
                    <IconBullet icon={Mail}>Email Campaigns &amp; Newsletters</IconBullet>
                    <IconBullet icon={MonitorSmartphone}>Mobile App &amp; Website Content</IconBullet>
                    <IconBullet icon={FileSignature}>Return Policies &amp; ToS</IconBullet>
                    <IconBullet icon={MessageCircle}>Customer Support Scripts &amp; FAQs</IconBullet>
                    <IconBullet icon={Package}>Packaging, Labels &amp; Inserts</IconBullet>
                </ul>
            </Section>

            <Section title="Who We Work With">
                {/* تم تطبيق المحاذاة والأيقونات المخصصة */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 max-w-6xl mx-auto">
                    <IconBullet icon={ShoppingBag}>Online Retailers &amp; Marketplaces</IconBullet>
                    <IconBullet icon={Target}>Direct-to-Consumer (DTC) Brands</IconBullet>
                    <IconBullet icon={Shirt}>Fashion, Beauty &amp; Lifestyle</IconBullet>
                    <IconBullet icon={Plug}>Home &amp; Electronics Retailers</IconBullet>
                    <IconBullet icon={PackageCheck}>Subscription Box Services</IconBullet>
                    <IconBullet icon={Globe}>Global E-fulfillment Providers</IconBullet>
                </ul>
            </Section>

            <Section title="Why Ideolingo for E-commerce & Retail?" subdued>
                {/* تم تطبيق المحاذاة والأيقونات المخصصة وتصحيح الاسم */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    <IconBullet icon={TrendingUp}>Language that drives conversions</IconBullet>
                    <IconBullet icon={Users}>Linguists who understand buyer behavior</IconBullet>
                    <IconBullet icon={Search}>SEO-friendly translations</IconBullet>
                    <IconBullet icon={FileCog}>Support for high-volume content</IconBullet>
                    <IconBullet icon={Network}>Integration with your CMS or PIM</IconBullet>
                    <IconBullet icon={TestTube}>Localization testing for usability</IconBullet>
                </ul>
            </Section>

            {/* --- شريط اللوجوهات المتحرك --- */}
            <Section>
                <div className="text-center">
                    <h3 className="text-xl font-extrabold text-secondary">Trusted by Leading Brands</h3>
                    <div className="mx-auto mt-2 h-1 w-24 rounded" style={{ backgroundColor: Accent }} />
                </div>
                <div className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/ecommerce/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/ecommerce/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            <section className="py-16 lg:py-20 bg-primary" >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                        Convert Across Borders.
                    </h2>
                    <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                        Launch products and campaigns that feel native in every market—without losing brand voice.
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-zinc-900 hover:bg-zinc-200"
                        >
                            <Link href="/contact">Start Your E-commerce Localization</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

// تعريف مصفوفة الشعارات هنا لتجنب خطأ التعريف
const logos = [
    { name: "StyIe", file: "style.svg" },
    { name: "Majid Al Futtaim", file: "maf.svg" },
    { name: "Puma", file: "puma.svg" },
    { name: "Sephora", file: "sephora.svg" },
    { name: "Zara", file: "zara.svg" },
    { name: "Alibaba", file: "alibaba.svg" },
];