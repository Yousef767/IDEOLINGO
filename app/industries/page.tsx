"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import {
  Scale,
  Heart,
  DollarSign,
  Monitor,
  ShoppingCart,
  Megaphone,
  Wrench,
  GraduationCap,
  Car,
  Gamepad2,
} from "lucide-react"

export default function IndustriesPage() {
  const { t } = useLanguage()

  const industries = [
    {
      href: "/industries/legal",
      label: t("industries.legal"),
      icon: Scale,
      description: "Contracts, compliance, and legal documentation",
    },
    {
      href: "/industries/medical-life-sciences",
      label: t("industries.medical"),
      icon: Heart,
      description: "Clinical trials, medical devices, and healthcare content",
    },
    {
      href: "/industries/finance-banking",
      label: t("industries.finance"),
      icon: DollarSign,
      description: "Financial reports, banking, and investment materials",
    },
    {
      href: "/industries/technology-it",
      label: t("industries.technology"),
      icon: Monitor,
      description: "Software, hardware, and technical documentation",
    },
    {
      href: "/industries/ecommerce-retail",
      label: t("industries.ecommerce"),
      icon: ShoppingCart,
      description: "Product catalogs, e-commerce platforms, and retail content",
    },
    {
      href: "/industries/marketing-media",
      label: t("industries.marketing"),
      icon: Megaphone,
      description: "Advertising campaigns, media content, and brand messaging",
    },
    {
      href: "/industries/manufacturing-engineering",
      label: t("industries.manufacturing"),
      icon: Wrench,
      description: "Technical manuals, specifications, and industrial content",
    },
    {
      href: "/industries/education-elearning",
      label: t("industries.education"),
      icon: GraduationCap,
      description: "Educational materials, courses, and academic content",
    },
    {
      href: "/industries/automotive",
      label: t("industries.automotive"),
      icon: Car,
      description: "Vehicle manuals, automotive technology, and industry content",
    },
    {
      href: "/industries/gaming",
      label: t("industries.gaming"),
      icon: Gamepad2,
      description: "Game localization, interactive content, and gaming platforms",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
              We Speak Your Industry's Language
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Specialized expertise and deep industry knowledge across diverse sectors, ensuring your content resonates
              with your target audience.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <Card key={industry.href} className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <Icon className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{industry.label}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{industry.description}</p>
                    <Button asChild variant="outline" className="mt-auto bg-transparent">
                      <Link href={industry.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We work across many more sectors. Contact us to discuss your specific industry needs and how we can help.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Discuss Your Industry</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
