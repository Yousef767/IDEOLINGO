"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    // Icons for the page
    BookText, FileCog, ShieldCheck, ListChecks, AlertTriangle, FileBadge,
    GraduationCap, AppWindow, PenTool, Factory, Cog, Car, Tractor,
    CircuitBoard, Package, Globe, Users, BookCheck, BadgeCheck,
    LayoutGrid, Shield, Scaling, FileBox,
    FileText // --- التغيير: تم إضافة الأيقونة المفقودة هنا ---
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

export default function ManufacturingIndustryPage() {
    const logos = [
        { name: "ABB", file: "abb.svg" },
        { name: "Siemens", file: "siemens.svg" },
        { name: "Bosch", file: "bosch.svg" },
        { name: "Caterpillar", file: "caterpillar.svg" },
        { name: "Honeywell", file: "honeywell.svg" },
        { name: "GE", file: "ge.svg" },
    ];

    return (
        <div className="min-h-screen">
            <Hero
                title="Manufacturing"
                subtitle="Language Solutions Built for Precision, Compliance, and Global Scale"
                imageSrc="/images/industries-manufacturing-hero.jpg"
                rgb
                overlayOpacity={0.45}
            />

            <Section>
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-gray-700 leading-relaxed">
                        In manufacturing, clear communication isn’t just helpful—it’s essential to safety, quality, and operational
                        efficiency. At <strong>Ideolingo</strong>, we help manufacturers localize complex technical content, standard
                        operating procedures, and product documentation to meet the highest standards of clarity and compliance across
                        languages.
                    </p>
                </div>
            </Section>

            <Section title="What We Translate & Localize" subdued>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    <IconBullet icon={BookText}>Technical Manuals &amp; User Guides</IconBullet>
                    <IconBullet icon={FileCog}>Standard Operating Procedures (SOPs)</IconBullet>
                    <IconBullet icon={ShieldCheck}>Safety Data Sheets (SDS) &amp; Compliance Documents</IconBullet>
                    <IconBullet icon={ListChecks}>Installation Instructions &amp; Maintenance Checklists</IconBullet>
                    <IconBullet icon={AlertTriangle}>Equipment Labels &amp; Warning Notices</IconBullet>
                    <IconBullet icon={FileText}>Product Catalogs &amp; Specifications</IconBullet>
                    <IconBullet icon={GraduationCap}>Training Materials for Technicians &amp; Operators</IconBullet>
                    <IconBullet icon={AppWindow}>Manufacturing Software UI &amp; ERP Interfaces</IconBullet>
                    <IconBullet icon={PenTool}>Engineering Drawings &amp; CAD Annotations</IconBullet>
                    <IconBullet icon={FileBadge}>Quality Control &amp; ISO Documentation</IconBullet>
                </ul>
            </Section>

            <Section title="Who We Work With">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    <IconBullet icon={Factory}>Industrial Manufacturers &amp; OEMs</IconBullet>
                    <IconBullet icon={Cog}>Engineering &amp; Automation Companies</IconBullet>
                    <IconBullet icon={Car}>Automotive &amp; Aerospace Suppliers</IconBullet>
                    <IconBullet icon={Tractor}>Construction &amp; Heavy Machinery Firms</IconBullet>
                    <IconBullet icon={CircuitBoard}>Electronics &amp; Component Manufacturers</IconBullet>
                    <IconBullet icon={Package}>Packaging &amp; Materials Producers</IconBullet>
                    <IconBullet icon={Globe}>Global Supply Chain &amp; Logistics Partners</IconBullet>
                </ul>
            </Section>

            <Section title="Why Ideolingo for Manufacturing?" subdued>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    <IconBullet icon={Users}>Translators with engineering and technical expertise</IconBullet>
                    <IconBullet icon={BookCheck}>Consistent terminology through custom glossaries and TM</IconBullet>
                    <IconBullet icon={BadgeCheck}>ISO 17100:2015 &amp; ISO 9001:2015 certified processes</IconBullet>
                    <IconBullet icon={LayoutGrid}>Multilingual DTP and formatting for technical layouts</IconBullet>
                    <IconBullet icon={Shield}>Support for safety-critical and regulatory-compliant content</IconBullet>
                    <IconBullet icon={Scaling}>Scalable support for international product rollouts</IconBullet>
                    <IconBullet icon={FileBox}>File compatibility with CAD, XML, InDesign, and more</IconBullet>
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
                                <Image src={`/images/brands/manufacturing/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/manufacturing/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            <section className="py-16 lg:py-20 bg-primary" >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                        From Factory Floor to Global Market—We Speak Your Language.
                    </h2>
                    <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                        Trust <strong>Ideolingo</strong> to deliver clear, compliant, and technically sound translations.
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-zinc-900 hover:bg-zinc-200"
                        >
                            <Link href="/contact">Request a Manufacturing Translation Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}