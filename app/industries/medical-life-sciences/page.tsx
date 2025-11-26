"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    FileText,
    Cog,
    TestTube,
    Package,
    GraduationCap,
    Megaphone,
    Users,
    BadgeCheck,
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

export default function MedicalHealthcarePage() {
    // تم الإبقاء على نفس الشعارات والمسار بناءً على طلبك
    const logos = [
        { name: "Abbott", file: "abbott.svg" },
        { name: "Amgen", file: "amgen.svg" },
        { name: "Molina Healthcare", file: "molina.svg" },
        { name: "ManaDR", file: "manadr.svg" },
        { name: "Healthcare Services Group", file: "hsg.svg" },
        { name: "Pfizer", file: "pfizer.svg" },
    ];

    return (
        <div className="min-h-screen">
            <Hero
                title="Medical & Healthcare Translation"
                subtitle="Where Accuracy Saves Lives"
                imageSrc="/images/industries-healthcare-hero.jpg"
                rgb={true}
                overlayOpacity={0.45}
            />

            <Section>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-700 leading-relaxed">
                        In the medical and healthcare sector, every word matters. At <strong>Ideolingo</strong>,
                        we provide precise, compliant, and culturally adapted translations for
                        healthcare providers, pharmaceutical companies, medical device manufacturers,
                        and research organizations. Our goal is to ensure that vital medical
                        information is understood clearly — in any language, anywhere.
                    </p>
                </div>
            </Section>

            <Section title="Our Medical & Healthcare Services Include:" subdued>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    <IconBullet icon={FileText}>Patient information leaflets and consent forms</IconBullet>
                    <IconBullet icon={Cog}>Medical device manuals and software localization</IconBullet>
                    <IconBullet icon={TestTube}>Clinical trial documentation and research papers</IconBullet>
                    <IconBullet icon={Package}>Pharmaceutical packaging and labeling</IconBullet>
                    <IconBullet icon={GraduationCap}>Hospital policies, training materials, and e-learning modules</IconBullet>
                    <IconBullet icon={Megaphone}>Medical marketing materials and websites</IconBullet>
                </ul>
            </Section>

            <Section title="Why Choose Ideolingo for Medical & Healthcare?">
                <div className="max-w-5xl mx-auto text-center">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        <IconBullet icon={Users}>Expert linguists with medical and scientific backgrounds</IconBullet>
                        <IconBullet icon={BadgeCheck}>Compliance with regulatory bodies (FDA, EMA, ISO 13485, etc.)</IconBullet>
                        <IconBullet icon={BookCheck}>Consistent, accurate medical terminology through glossaries and CAT tools</IconBullet>
                        <IconBullet icon={Lock}>Strict confidentiality and secure handling of sensitive data</IconBullet>
                    </ul>
                    <p className="mt-8 text-gray-800 font-semibold text-lg">
                        With Ideolingo, your medical and healthcare content will be
                        translated with the precision, care, and compliance it demands — because in
                        healthcare, clarity can be lifesaving.
                    </p>
                </div>
            </Section>

            {/* --- شريط اللوجوهات المتحرك --- */}
            <Section subdued>
                <div className="text-center">
                    <h3 className="text-xl font-extrabold text-gray-900">Trusted by Leading Healthcare Brands</h3>
                    <div className="mx-auto mt-2 h-1 w-24 rounded" style={{ backgroundColor: Accent }} />
                </div>
                <div className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/healthcare/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/healthcare/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            <section className="py-16 lg:py-20 bg-primary" >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                        Safer Communication. Better Outcomes.
                    </h2>
                    <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                        Start a compliant medical localization workflow built for accuracy and patient understanding.
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-zinc-900 hover:bg-zinc-200"
                        >
                            <Link href="/contact">Get a Medical Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}