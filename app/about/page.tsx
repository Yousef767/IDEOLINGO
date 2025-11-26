"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"
import Hero from "@/components/Hero"
import { Users, Target, Award, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    { icon: Award, title: "Quality", description: "Delivering excellence in every project" },
    { icon: CheckCircle, title: "Integrity", description: "Honest and transparent in all our dealings" },
    { icon: Users, title: "Confidentiality", description: "Your information is always secure" },
    { icon: Target, title: "Client Success", description: "Your success is our primary goal" },
  ]

  const team = [
    {
      title: "Certified Translators",
      description:
        "Native-speaking language experts with proven track records of delivering accurate and culturally nuanced translations.",
    },
    {
      title: "Localization Engineers",
      description:
        "Skilled professionals who adapt websites, software, and digital products for seamless functionality in global markets.",
    },
    {
      title: "Desktop Publishing (DTP) Specialists",
      description:
        "Experts in formatting and layout who ensure your translated materials look just as polished as the original.",
    },
    {
      title: "Project Managers",
      description:
        "Experienced coordinators who oversee every stage of your project—ensuring smooth workflows, on-time delivery, and exceptional quality.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Hero
        title="About Us"
        subtitle="Your Strategic Language Partner."
        primaryCta={{ label: "Discover how our story can help yours.", href: "/contact" }}
        align="center"
        height="md"
      />

      {/* Intro */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid items-center gap-8 md:grid-cols-12">
            {/* Text */}
            <div className="md:col-span-7 lg:col-span-8">
              <div className="max-w-2xl md:text-left text-center md:mx-0 mx-auto">
                <h1 className="text-4xl lg:text-6xl font-bold text-secondary mb-6 text-balance">
                  Your Strategic Language Partner.
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  We believe language should never be a barrier to opportunity. At Ideolingo, we combine human expertise
                  with innovative technology to help brands grow globally.
                </p>

                <div className="mt-6 grid gap-3 text-gray-700">
                  <p><span className="font-semibold">Mission:</span> Break down language barriers and enable seamless cross-cultural communication.</p>
                  <p><span className="font-semibold">Vision:</span> Be a global leader in creative, impactful localization solutions.</p>
                  <p><span className="font-semibold">Values:</span> quality, integrity, confidentiality, and client success.</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 md:justify-start justify-center">
                  <Button asChild size="lg" className="bg-zinc-800 hover:bg-zinc-700">
                    <Link href="/contact">Discover how our story can help yours</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                    <Link href="/services">Services Overview</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Image Card (Left unchanged as it only contains an image) */}
            <div className="md:col-span-5 lg:col-span-4">
              <Card className="overflow-hidden border shadow-md md:ml-auto">
                <CardContent className="p-0">
                  <div className="relative w-full">
                    <Image
                      src="/images/about/intro.gif"
                      alt="About Ideolingo – strategic language partner"
                      width={800}
                      height={600}
                      sizes="(max-width: 768px) 100vw, 380px"
                      priority
                      className="h-auto w-full object-cover aspect-[4/3]"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values cards (Colors updated) */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-primary text-white border-transparent">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-gray-300">
                  Break down language barriers and enable seamless cross-cultural communication.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white border-transparent">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-gray-300">Be a global leader in creative, impactful localization solutions.</p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white border-transparent">
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Values</h3>
                <p className="text-gray-300">Quality, integrity, confidentiality, and client success.</p>
              </CardContent>
            </Card>
          </div>

          {/* Values detail grid (Colors updated) */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="text-center bg-primary text-white border-transparent">
                    <CardContent className="p-6">
                      <Icon className="h-10 w-10 text-white mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                      <p className="text-gray-300 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team (Colors updated) */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold  mb-4" text-secondary>Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experts Who Speak Your Industry. Our team includes native-speaking translators, localization engineers,
              desktop publishing specialists, and experienced project managers.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Every member is a subject-matter expert—ensuring accuracy, cultural relevance, and on-time delivery. We
              combine precision with creativity to make your message shine in every market. At Ideolingo, our strength
              lies in the people behind the work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {team.map((member, index) => (
              <Card key={index} className="bg-primary text-white border-transparent">
                <CardContent className="p-6 text-center">
                  <Users className="h-10 w-10 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{member.title}</h3>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* الفقرة المضافة */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-gray-600">
              Every team member brings years of experience, specialized industry knowledge, and a passion for helping
              businesses connect with audiences worldwide. We combine human expertise with cutting-edge tools to deliver
              content that is not only linguistically correct but also culturally relevant—every time.
            </p>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-zinc-800 hover:bg-zinc-700">
              <Link href="/contact">Meet the people who make it happen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}