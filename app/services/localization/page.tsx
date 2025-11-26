"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    // Icons
    MonitorSmartphone, AppWindow, ShoppingCart, GraduationCap, Languages, Search, CalendarDays, Palette, MousePointerClick, Database, Users, Code, TestTube, FileJson, Waypoints, BadgeCheck, CreditCard, Percent, Megaphone, Briefcase, Codepen, BookOpen, Clapperboard, Image as ImageIcon, BookUser, Laptop, FileText
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

export default function LocalizationPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <Hero
                title="Localization Services"
                subtitle="Make Your Brand Feel Local, Anywhere."
                imageSrc="/images/localization-hero.jpg"
                rgb={true}
                overlayOpacity={0.5}
            />

            {/* Intro */}
            <Section>
                <div className="max-w-4xl text-gray-700 leading-relaxed text-center mx-auto space-y-4">
                    <p className="font-semibold">
                        We adapt websites, apps, e-commerce stores, and e-learning content to connect with local audiences. From SEO to cultural nuance, we ensure your message works in every market.
                    </p>
                    <p>
                        At <strong>Ideolingo</strong>, we go beyond word-for-word translation to
                        ensure your content truly connects with your target audience. Our localization
                        experts adapt your message to fit the language, culture,
                        market, and technical requirements of each region—helping you build
                        stronger global engagement and brand trust.
                    </p>
                </div>
            </Section>

            {/* Specializations List - تم إضافة هذا القسم لضمان اكتمال المحتوى */}
            <Section title="Our Specializations" subdued>
                <div className="max-w-4xl mx-auto space-y-6 text-center">
                    <div className="p-4 border-l-4 border-slate-300 text-left">
                        <h3 className="font-bold text-lg text-gray-800">Website Localization</h3>
                        <p className="text-gray-600 mt-1">We adapt your website content, navigation, and SEO keywords to suit the linguistic and cultural preferences of your target market, ensuring a seamless user experience across all languages.</p>
                    </div>
                    <div className="p-4 border-l-4 border-slate-300 text-left">
                        <h3 className="font-bold text-lg text-gray-800">Software & App Localization</h3>
                        <p className="text-gray-600 mt-1">Our team works closely with developers to translate and adapt user interfaces and in-app content and help documentation, ensuring your product feels native in every market.</p>
                    </div>
                    <div className="p-4 border-l-4 border-slate-300 text-left">
                        <h3 className="font-bold text-lg text-gray-800">E-commerce Platform Localization</h3>
                        <p className="text-gray-600 mt-1">We localize product descriptions, payment options, currency formats, and shipping details to boost conversion rates and create a smooth shopping experience for international customers.</p>
                    </div>
                    <div className="p-4 border-l-4 border-slate-300 text-left">
                        <h3 className="font-bold text-lg text-gray-800">E-learning Localization</h3>
                        <p className="text-gray-600 mt-1">From training modules to interactive learning platforms, we adapt text, audio, video, and graphics so learners everywhere can fully engage with your content.</p>
                    </div>
                </div>
            </Section>

            {/* --- Website Localization Detailed Section --- */}
            <Section>
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Website Localization</h2>
                    <p className="text-xl text-gray-600 mb-6">Making Your Website Speak Every Language</p>
                    <p className="text-gray-700 mb-10">Your website is often the first impression your brand makes — and in today’s global marketplace, it needs to resonate with audiences everywhere. At Ideolingo, we adapt your website’s content, design, and functionality so it feels native to each target market while staying true to your brand identity.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h4 className="font-bold text-lg mb-4">Our Website Localization Services Include:</h4>
                            <ul className="space-y-4">
                                <IconBullet icon={Languages}>Translation and cultural adaptation of web content</IconBullet>
                                <IconBullet icon={Search}>SEO keyword localization for better search ranking in each region</IconBullet>
                                <IconBullet icon={CalendarDays}>Adaptation of date, time, currency, and measurement formats</IconBullet>
                                <IconBullet icon={Palette}>Image, color, and design adjustments for cultural relevance</IconBullet>
                                <IconBullet icon={MousePointerClick}>Localization of navigation menus, forms, and UI elements</IconBullet>
                                <IconBullet icon={Database}>Integration with CMS platforms for smooth updates</IconBullet>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4">Why Choose Ideolingo for Website Localization?</h4>
                            <ul className="space-y-4">
                                <IconBullet icon={Users}>Native linguists with marketing and cultural expertise</IconBullet>
                                <IconBullet icon={Code}>Technical know-how to work with HTML, CMS, and e-commerce systems</IconBullet>
                                <IconBullet icon={Search}>SEO-driven localization to boost visibility in global markets</IconBullet>
                                <IconBullet icon={TestTube}>Rigorous QA to ensure perfect display and functionality across devices</IconBullet>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-10 text-gray-700 font-medium">With Ideolingo, your website won’t just be translated — it will be transformed into a culturally fluent, user-friendly experience for every audience.</p>
                    {/* --- Mini CTA: تم تعديل الألوان والتصميم --- */}
                    <div className="mt-8 bg-zinc-700 text-white p-6 rounded-lg">
                        <h3 className="text-2xl font-bold">🚀 Ready to go global with your website?</h3>
                        <p className="mt-2 text-gray-300">Let’s make your online presence truly international. Contact Ideolingo today to start your website localization project.</p>
                        <Button asChild size="lg" className="mt-4 bg-white text-gray-800 hover:bg-gray-200"><Link href="/contact">Start Your Project</Link></Button>
                    </div>
                </div>
            </Section>

            {/* --- Software & App Localization Detailed Section --- */}
            <Section subdued>
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Software & App Localization</h2>
                    <p className="text-xl text-gray-600 mb-6">Making Your Digital Products Feel Native Everywhere</p>
                    <p className="text-gray-700 mb-10">Software and apps succeed globally when they feel local. At Ideolingo, we adapt your software and mobile applications so they work seamlessly, look perfect, and read naturally in every target market — without compromising functionality or user experience.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h4 className="font-bold text-lg mb-4">Our Software & App Localization Services Include:</h4>
                            <ul className="space-y-4">
                                <IconBullet icon={MousePointerClick}>Translation of UI elements, menus, and notifications</IconBullet>
                                <IconBullet icon={BookUser}>Adaptation of in-app content, help files, and tutorials</IconBullet>
                                <IconBullet icon={CalendarDays}>Adjustment of date, time, currency, and number formats</IconBullet>
                                <IconBullet icon={Laptop}>Compatibility with multiple platforms (Windows, macOS, iOS, Android, web apps)</IconBullet>
                                <IconBullet icon={TestTube}>QA testing to ensure proper display and functionality after localization</IconBullet>
                                <IconBullet icon={FileJson}>String extraction and integration for smooth development cycles</IconBullet>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4">Why Choose Ideolingo for Software & App Localization?</h4>
                            <ul className="space-y-4">
                                <IconBullet icon={Users}>Native linguists with IT and UX expertise</IconBullet>
                                <IconBullet icon={FileJson}>Ability to work with resource files (.xml, .json, .resx, .po, etc.)</IconBullet>
                                <IconBullet icon={Waypoints}>Collaboration with your developers to prevent integration issues</IconBullet>
                                <IconBullet icon={BadgeCheck}>Functional and linguistic testing before final delivery</IconBullet>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-10 text-gray-700 font-medium">With Ideolingo, your software and apps won’t just be translated — they’ll be redesigned for local success while keeping the same performance, style, and usability your users expect.</p>
                    {/* --- Mini CTA: تم تعديل الألوان والتصميم --- */}
                    <div className="mt-8 bg-zinc-700 text-white p-6 rounded-lg">
                        <h3 className="text-2xl font-bold">🚀 Ready to launch your app or software worldwide?</h3>
                        <p className="mt-2 text-gray-300">Get in touch with Ideolingo today and let’s make your digital products truly global. Contact us now.</p>
                        <Button asChild size="lg" className="mt-4 bg-white text-gray-800 hover:bg-gray-200"><Link href="/contact">Contact Us Now</Link></Button>
                    </div>
                </div>
            </Section>

            {/* --- E-commerce Platform Localization Detailed Section --- */}
            <Section>
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">E-commerce Platform Localization</h2>
                    <p className="text-xl text-bg\-zinc-800-600 mb-6">Turning Your Online Store into a Global Marketplace</p>
                    <p className="text-gray-700 mb-10">Selling internationally means more than just translating product descriptions — it’s about creating a shopping experience that feels native to every customer. At Ideolingo, we adapt your e-commerce platform to match the language, culture, and buying habits of each target market, helping you boost conversions and customer trust worldwide.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h4 className="font-bold text-lg mb-4">Our E-commerce Localization Services Include:</h4>
                            <ul className="space-y-4">
                                <IconBullet icon={FileText}>Translation and adaptation of product descriptions, titles, and categories</IconBullet>
                                <IconBullet icon={CreditCard}>Localization of checkout processes, payment options, and shipping details</IconBullet>
                                <IconBullet icon={Percent}>Currency, measurement, and tax format adjustments</IconBullet>
                                <IconBullet icon={Search}>Multilingual SEO to increase visibility in local search engines</IconBullet>
                                <IconBullet icon={Megaphone}>Adaptation of marketing campaigns, banners, and promotional content</IconBullet>
                                <IconBullet icon={Database}>Integration with leading platforms (Shopify, WooCommerce, Magento, BigCommerce, etc.)</IconBullet>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4">Why Choose Ideolingo for E-commerce Localization?</h4>
                            <ul className="space-y-4">
                                <IconBullet icon={Users}>Native linguists with retail and marketing expertise</IconBullet>
                                <IconBullet icon={Palette}>Cultural adaptation to match local buying trends and preferences</IconBullet>
                                <IconBullet icon={Codepen}>Technical know-how to work directly with your e-commerce platform</IconBullet>
                                <IconBullet icon={TestTube}>Rigorous QA to ensure a flawless, user-friendly shopping experience</IconBullet>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-10 text-gray-700 font-medium">With Ideolingo, your e-commerce platform will be more than just translated — it will be custom-tailored for each market, making your brand a trusted choice worldwide.</p>
                    {/* --- Mini CTA: تم تعديل الألوان والتصميم --- */}
                    <div className="mt-8 bg-zinc-700 text-white p-6 rounded-lg">
                        <h3 className="text-2xl font-bold">🚀 Ready to sell without borders?</h3>
                        <p className="mt-2 text-gray-300">Contact Ideolingo today and let’s localize your online store for global success. Get started now.</p>
                        <Button asChild size="lg" className="mt-4 bg-white text-gray-800 hover:bg-gray-200"><Link href="/contact">Get Started Now</Link></Button>
                    </div>
                </div>
            </Section>

            {/* --- E-learning Localization Detailed Section --- */}
            <Section subdued>
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">E-learning Localization</h2>
                    <p className="text-xl text-gray-600 mb-6">Making Learning Accessible to Everyone, Everywhere</p>
                    <p className="text-gray-700 mb-10">Education has gone global — and your e-learning content should too. At Ideolingo, we adapt your training modules, courses, and educational platforms so learners can engage fully, no matter their language or location. We ensure that both the words and the learning experience feel natural and culturally relevant.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h4 className="font-bold text-lg mb-4">Our E-learning Localization Services Include:</h4>
                            <ul className="space-y-4">
                                <IconBullet icon={BookOpen}>Translation of course materials, assessments, and certificates</IconBullet>
                                <IconBullet icon={Clapperboard}>Voice-over and subtitling for training videos</IconBullet>
                                <IconBullet icon={ImageIcon}>Adaptation of images, examples, and references for cultural relevance</IconBullet>
                                <IconBullet icon={MousePointerClick}>Localization of user interfaces and navigation menus</IconBullet>
                                <IconBullet icon={Codepen}>Support for SCORM, xAPI, and other e-learning standards</IconBullet>
                                <IconBullet icon={TestTube}>QA testing for compatibility and usability across devices and LMS platforms</IconBullet>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4">Why Choose Ideolingo for E-learning Localization?</h4>
                            <ul className="space-y-4">
                                <IconBullet icon={Users}>Native linguists with educational and instructional design expertise</IconBullet>
                                <IconBullet icon={Code}>Technical knowledge to work with common e-learning formats and tools</IconBullet>
                                <IconBullet icon={Palette}>Cultural sensitivity to adapt training for different learner backgrounds</IconBullet>
                                <IconBullet icon={FileText}>Consistent terminology for professional and academic credibility</IconBullet>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-10 text-gray-700 font-medium">With Ideolingo, your e-learning content will be more than just translated — it will be transformed into a learning experience that truly connects with your audience.</p>
                    {/* --- Mini CTA: تم تعديل الألوان والتصميم --- */}
                    <div className="mt-8 bg-zinc-700 text-white p-6 rounded-lg">
                        <h3 className="text-2xl font-bold">🚀 Ready to take your training global?</h3>
                        <p className="mt-2 text-gray-300">Contact Ideolingo today and let’s make your e-learning content accessible and engaging for learners worldwide. Start your project now.</p>
                        <Button asChild size="lg" className="mt-4 bg-white text-gray-800 hover:bg-gray-200"><Link href="/contact">Start Your Project Now</Link></Button>
                    </div>
                </div>
            </Section>

            {/* --- Final Why Choose Us Section --- */}
            <Section title="Why Choose Ideolingo for Localization?">
                <div className="max-w-5xl mx-auto text-center">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        <IconBullet icon={Users}>Native linguists with deep cultural knowledge.</IconBullet>
                        <IconBullet icon={Briefcase}>Industry-specific expertise for accurate, relevant content.</IconBullet>
                        <IconBullet icon={Codepen}>Technical expertise to handle various file formats and CMS platforms.</IconBullet>
                        <IconBullet icon={BadgeCheck}>Quality assurance process to ensure accuracy, functionality, and cultural resonance.</IconBullet>
                    </ul>
                    <p className="mt-8 text-gray-800 font-semibold text-lg">
                        With Ideolingo Localization Services, your content does not just cross borders—it feels right at home in every market.
                    </p>
                </div>
            </Section>

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-primary" >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                        Let us localize your content today.
                    </h2>
                    <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                        Ensure your brand speaks the right language, everywhere.
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="border-0"
                            style={{ backgroundColor: Accent, color: "#ffffffff" }}
                        >
                            <Link href="/contact">Get a Localization Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}