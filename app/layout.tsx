import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Ideolingo - Professional Translation & Localization Services",
  description:
    "Transform your words into powerful messages that connect, engage, and convert in any market with Ideolingo's expert translation and localization services.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <LanguageProvider>
      <html lang="en" dir="ltr">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Ideolingo",
                url: "https://ideolingo.com",
                logo: "https://ideolingo.com/logo.png",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+20-1031155440",
                  contactType: "customer service",
                  email: "info@ideolingo.com",
                },
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "Office A1, Apartment 5, 7th Floor, Building 4, Al Obour Buildings, Salah Salem Street",
                  addressLocality: "Nasr City",
                  addressRegion: "Cairo",
                  addressCountry: "Egypt",
                },
                sameAs: ["https://www.linkedin.com/company/ideolingo/"],
              }),
            }}
          />
        </head>
        <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`} cz-shortcut-listen="true">
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <main>{children}</main>
            <Footer />
            <Analytics />
          </Suspense>
        </body>
      </html>
    </LanguageProvider>
  )
}
