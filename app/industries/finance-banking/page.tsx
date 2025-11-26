"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    BarChart3,
    FileSignature,
    Megaphone,
    Presentation,
    Landmark,
    Search,
    Users,
    Lock,
    BadgeCheck,
    BookCheck
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

export default function FinancialBusinessPage() {
    // تم الإبقاء على نفس الشعارات والمسار بناءً على طلبك
    const logos = [
        { name: "QNB", file: "qnb.svg" },
        { name: "World Bank", file: "worldbank.svg" },
        { name: "VISA", file: "visa.svg" },
        { name: "Al Mal Capital", file: "almal.svg" },
        { name: "BNH", file: "bnh.svg" },
        { name: "Barclays", file: "barclays.svg" },
    ];

    return (
        <div className="min-h-screen">
            <Hero
                title="Financial & Business Translation"
                subtitle="Speaking the Language of Global Commerce"
                imageSrc="/images/industries-finance-hero.jpg" // You can change this image later
                rgb={true}
                overlayOpacity={0.45}
            />

            <Section subdued>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        In finance and business, accuracy isn’t optional — it’s essential. At <strong>Ideolingo</strong>,
                        we help banks, investment firms, corporations, and entrepreneurs communicate
                        clearly and confidently in any market. From legal contracts to annual reports,
                        our translations ensure your message remains precise, professional, and
                        culturally appropriate.
                    </p>
                </div>
            </Section>

            <Section title="Our Financial & Business Services Include:">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    <IconBullet icon={BarChart3}>Annual reports and financial statements</IconBullet>
                    <IconBullet icon={FileSignature}>Contracts, agreements, and corporate policies</IconBullet>
                    <IconBullet icon={Megaphone}>Marketing and corporate communications</IconBullet>
                    <IconBullet icon={Presentation}>Investor presentations and pitch decks</IconBullet>
                    <IconBullet icon={Landmark}>Banking and insurance documentation</IconBullet>
                    <IconBullet icon={Search}>Market research and business strategy materials</IconBullet>
                </ul>
            </Section>

            <Section title="Why Choose Ideolingo for Finance & Business?" subdued>
                <div className="max-w-5xl mx-auto text-center">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        <IconBullet icon={Users}>Linguists with expertise in finance, law, and corporate communications</IconBullet>
                        <IconBullet icon={Lock}>Strict confidentiality and data security protocols</IconBullet>
                        <IconBullet icon={BadgeCheck}>Compliance with international financial regulations and standards</IconBullet>
                        <IconBullet icon={BookCheck}>Clear, consistent terminology for professional impact</IconBullet>
                    </ul>
                    <p className="mt-8 text-gray-800 font-semibold text-lg">
                        With Ideolingo, your financial and business content will
                        cross borders with the same clarity, trust, and professionalism you deliver at home.
                    </p>
                </div>
            </Section>

            {/* --- شريط اللوجوهات المتحرك --- */}
            <Section>
                <div className="text-center">
                    <h3 className="text-xl font-extrabold text-gray-900">Trusted by Leading Financial Brands</h3>
                    <div className="mx-auto mt-2 h-1 w-24 rounded" style={{ backgroundColor: Accent }} />
                </div>
                <div className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/finance/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {logos.map((logo) => (
                            <li key={logo.name}>
                                <Image src={`/images/brands/finance/${logo.file}`} alt={`${logo.name} logo`} width={150} height={75} className="object-contain" />
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            <section className="py-16 lg:py-20 bg-primary" >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                        Clarity That Builds Confidence.
                    </h2>
                    <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                        Get compliant, investor-ready financial translations for reports, filings, and corporate communications.
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-zinc-900 hover:bg-zinc-200"
                        >
                            <Link href="/contact">Request a Financial Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}