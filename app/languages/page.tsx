"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";

export default function LanguagesPage() {
  const { t } = useLanguage();

  const languageGroups = {
    "Middle Eastern": ["Arabic", "Hebrew", "Persian (Farsi)", "Turkish", "Kurdish"],
    African: ["Swahili", "Amharic", "Yoruba", "Zulu", "Afrikaans"],
    European: [
      "Spanish", "French", "German", "Italian", "Portuguese", "Russian", "Dutch",
      "Polish", "Swedish", "Norwegian", "Danish", "Finnish", "Greek", "Czech",
      "Hungarian", "Romanian", "Bulgarian",
    ],
    Asian: [
      "Chinese (Simplified)", "Chinese (Traditional)", "Japanese", "Korean", "Hindi",
      "Bengali", "Urdu", "Thai", "Vietnamese", "Indonesian", "Malay", "Tagalog",
      "Tamil", "Telugu", "Gujarati",
    ],
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="50+ Languages"
        subtitle="At Ideolingo, we deliver accurate, culturally adapted translations in over 50 languages, connecting your message with audiences worldwide."
        primaryCta={{ label: "Ask About Your Language", href: "/contact" }}
        align="center"
        height="md"
      />

      {/* LANGUAGES BY REGION */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(languageGroups).map(([region, languages]) => (
              // --- التغيير: تم تعديل ألوان الكروت هنا ---
              <Card key={region} className="h-full bg-zinc-700 border-zinc-600">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">{region}</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {languages.map((language) => (
                      <div key={language} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span className="text-zinc-300">{language}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Language Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* --- التغيير: تم تعديل ألوان الكروت هنا --- */}
            <Card className="bg-zinc-700 border-zinc-600">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-zinc-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Native Speakers</h3>
                <p className="text-zinc-300">
                  All translations performed by native speakers with deep cultural understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-700 border-zinc-600">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-zinc-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cultural Adaptation</h3>
                <p className="text-zinc-300">
                  Beyond translation — we ensure your message resonates culturally.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-700 border-zinc-600">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-zinc-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Fast Delivery</h3>
                <p className="text-zinc-300">
                  Quick turnaround times without compromising on quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 lg:py-24 text-white bg-primary"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Don't See Your Language?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We work with a global network of translators. Contact us to discuss your specific language requirements.
          </p>
          
          <Button asChild size="lg" className="bg-white text-zinc-900 hover:bg-zinc-200">
            <Link href="/contact">Ask About Your Language</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}