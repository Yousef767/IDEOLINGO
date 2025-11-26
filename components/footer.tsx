"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Mail, Phone, MapPin } from "lucide-react"

// Social Media SVG Icons
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);


export function Footer() {
  const { t } = useLanguage()

  // Define links here to ensure consistency
  const services = [
    { href: "/services/translation", label: "Translation" },
    { href: "/services/localization", label: "Localization" },
    { href: "/services/writing", label: "Writing" },
    { href: "/services/transcreation", label: "Transcreation" },
    { href: "/services/transcription", label: "Transcription" },
    { href: "/services/interpretation", label: "Interpretation" },
    { href: "/services/dtp", label: "Desktop Publishing (DTP)" },
    { href: "/services/mtpe", label: "Machine Translation + Post-Editing" },
    { href: "/services/subtitling-voiceover", label: "Subtitling & Voice-over" },
    { href: "/services/proofreading-editing", label: "Proofreading & Editing" },
  ];

  const industries = [
    { href: "/industries/legal", label: "Legal" },
    { href: "/industries/medical-life-sciences", label: "Medical & Life Sciences" },
    { href: "/industries/life-science", label: "Life Science Localization" },
    { href: "/industries/finance-banking", label: "Finance & Banking" },
    { href: "/industries/technology-it", label: "Technology & IT" },
    { href: "/industries/ecommerce-retail", label: "E-commerce & Retail" },
    { href: "/industries/marketing-media", label: "Marketing & Media" },
    { href: "/industries/manufacturing-engineering", label: "Manufacturing & Engineering" },
    { href: "/industries/education-elearning", label: "Education & E-learning" },
    { href: "/industries/automotive", label: "Automotive" },
    { href: "/industries/gaming", label: "Gaming" },
    { href: "/industries/agriculture", label: "Agriculture" },
  ];


  return (
    <footer  className="text-white bg-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info & Social */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/footer.png"
                alt="Ideolingo Logo"
                width={150}
                height={40}
                className="h-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transform your words into powerful messages that connect, engage, and convert in any market.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="https://www.facebook.com/share/17QpjGWis5/" target="_blank" rel="noreferrer noopener" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/ideolingo98?igsh=NW9pNmplMnV3aHB6" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="https://wa.me/201031155440" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp" className="text-gray-300 hover:text-white transition-colors">
                <WhatsappIcon className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/ideolingo/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* --- Services: تم تحديث القائمة بالكامل --- */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <div className="space-y-2 flex flex-col">
              {services.map(service => (
                <Link key={service.href} href={service.href} className="text-gray-300 hover:text-white text-sm transition-colors">{service.label}</Link>
              ))}
            </div>
          </div>

          {/* --- Industries: تم تصحيح وتحديث القائمة بالكامل --- */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">Industries</h3>
            <div className="space-y-2 flex flex-col">
              {industries.map(industry => (
                <Link key={industry.href} href={industry.href} className="text-gray-300 hover:text-white text-sm transition-colors">{industry.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">{t ? t("nav.contact") : "Contact Us"}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-gray-300 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{t ? t("contact.address") : "Your Address Here"}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-300" />
                <p className="text-gray-300 text-sm">{t ? t("contact.phone") : "+1 (234) 567-890"}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-300" />
                <p className="text-gray-300 text-sm">{t ? t("contact.email") : "info@ideolingo.com"}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white-700/50 mt-10 pt-8 flex justify-center text-center">
          <p className="text-white text-sm">© 2016 Ideolingo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}