"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { Search, Edit, CheckCircle, FileText, Award, LifeBuoy } from "lucide-react" // تم إضافة أيقونة جديدة
import { Button } from "@/components/ui/button"
import Hero from "@/components/Hero"

export default function QualityAssurancePage() {
  const { t } = useLanguage()

  // تم تحديث القائمة لتشمل 6 خطوات مع الشرح الكامل
  const processSteps = [
    {
      icon: Search,
      title: "Initial Analysis",
      description:
        "We review source files, identify challenges, assess audience needs, and prepare glossaries and style guides for consistency.",
    },
    {
      icon: FileText,
      title: "Translation",
      description:
        "Our native-speaking linguists translate content using CAT tools, adhering to approved glossaries and industry terminology.",
    },
    {
      icon: Edit,
      title: "Editing",
      description:
        "A second linguist reviews the translation for accuracy of meaning, consistency, tone, grammar, and punctuation.",
    },
    {
      icon: CheckCircle,
      title: "Proofreading",
      description:
        "A third linguist performs a final surface-level review, focusing on typos, formatting, and layout integrity for publication.",
    },
    {
      icon: Award,
      title: "Linguistic QA",
      description:
        "Our LQA service ensures your translations are accurate, consistent, and culturally appropriate, preventing misunderstandings.",
    },
    {
      icon: LifeBuoy,
      title: "Post-Delivery Support",
      description:
        "We remain available after delivery for final tweaks, in-market reviews, and ongoing glossary and TM maintenance.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* === Hero Section === */}
      <Hero
        title="Quality Assurance Process"
        subtitle="At Ideolingo, quality is not an afterthought—it is embedded in every stage of our workflow. We follow a rigorous, multi-step quality control process to ensure that every project meets the highest linguistic, technical, and cultural standards."
        primaryCta={{ label: "Start Your Quality Project", href: "/contact" }}
        align="center"
        height="md"
      />

      {/* === Process Steps Section === */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our process includes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every stage follows strict quality controls for accuracy, consistency, and cultural fit.
            </p>
          </div>

          {/* تم تعديل الشبكة لعرض 6 كروت بشكل أفضل */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card
                  key={index}
                  className="text-center relative bg-zinc-700 text-white border-transparent"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-zinc-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary-foreground text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* === Linguistic QA Section === */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Linguistic QA (Quality Assurance)
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 text-center">
              <p>
                Ensuring Every Word Works Perfectly. In multilingual content, small errors can create big problems — from
                misunderstandings to damaged credibility. At Ideolingo, our Linguistic Quality Assurance services ensure
                your translations are accurate, consistent, culturally appropriate, and ready for publication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-zinc-700 text-white border-transparent">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-10 w-10 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Accuracy & Consistency</h3>
                  <p className="text-gray-300 text-sm">Consistent use of approved terminology and adherence to brand tone and style.</p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-700 text-white border-transparent">
                <CardContent className="p-6 text-center">
                  <Award className="h-10 w-10 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Publication Ready</h3>
                  <p className="text-gray-300 text-sm">Final verification of layout, formatting, and readiness for publication.</p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-700 text-white border-transparent">
                <CardContent className="p-6 text-center">
                  <Search className="h-10 w-10 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Cultural Review</h3>
                  <p className="text-gray-300 text-sm">Ensuring cultural appropriateness and adaptation for the local market.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section
        className="py-16 lg:py-24 text-white bg-primary"
  
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experience Our Quality Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            See how our rigorous quality assurance process can elevate your content and ensure perfect translations
            every time.
          </p>
          
          <Button asChild size="lg" className="bg-white text-zinc-900 hover:bg-zinc-200">
            <Link href="/contact">Start Your Quality Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}