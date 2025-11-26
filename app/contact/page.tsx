"use client";

import type React from "react";
import { useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/components/language-provider";
import { Mail, Phone, MapPin, Linkedin, Send, Clock } from "lucide-react";

// SVG Icons for Social Media (kept as-is)
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

// Keep your Hero component
import Hero from "@/components/Hero";

/** ===== Expanded International Calling Codes (unique values via code|iso) ===== */
const COUNTRY_CODES = [
  // MENA & nearby
  { code: "+20", iso: "EG", label: "Egypt (EG) +20" },
  { code: "+966", iso: "SA", label: "Saudi Arabia (SA) +966" },
  { code: "+971", iso: "AE", label: "United Arab Emirates (AE) +971" },
  { code: "+974", iso: "QA", label: "Qatar (QA) +974" },
  { code: "+973", iso: "BH", label: "Bahrain (BH) +973" },
  { code: "+968", iso: "OM", label: "Oman (OM) +968" },
  { code: "+965", iso: "KW", label: "Kuwait (KW) +965" },
  { code: "+962", iso: "JO", label: "Jordan (JO) +962" },
  { code: "+961", iso: "LB", label: "Lebanon (LB) +961" },
  { code: "+972", iso: "IL", label: "Israel (IL) +972" },
  { code: "+90", iso: "TR", label: "Türkiye (TR) +90" },

  // Europe
  { code: "+44", iso: "UK", label: "United Kingdom (UK) +44" },
  { code: "+49", iso: "DE", label: "Germany (DE) +49" },
  { code: "+33", iso: "FR", label: "France (FR) +33" },
  { code: "+34", iso: "ES", label: "Spain (ES) +34" },
  { code: "+39", iso: "IT", label: "Italy (IT) +39" },
  { code: "+31", iso: "NL", label: "Netherlands (NL) +31" },
  { code: "+41", iso: "CH", label: "Switzerland (CH) +41" },
  { code: "+43", iso: "AT", label: "Austria (AT) +43" },
  { code: "+30", iso: "GR", label: "Greece (GR) +30" },
  { code: "+46", iso: "SE", label: "Sweden (SE) +46" },
  { code: "+47", iso: "NO", label: "Norway (NO) +47" },
  { code: "+45", iso: "DK", label: "Denmark (DK) +45" },
  { code: "+353", iso: "IE", label: "Ireland (IE) +353" },
  { code: "+351", iso: "PT", label: "Portugal (PT) +351" },
  { code: "+32", iso: "BE", label: "Belgium (BE) +32" },
  { code: "+48", iso: "PL", label: "Poland (PL) +48" },
  { code: "+420", iso: "CZ", label: "Czechia (CZ) +420" },
  { code: "+36", iso: "HU", label: "Hungary (HU) +36" },
  { code: "+40", iso: "RO", label: "Romania (RO) +40" },
  { code: "+359", iso: "BG", label: "Bulgaria (BG) +359" },
  { code: "+380", iso: "UA", label: "Ukraine (UA) +380" },

  // Russia & CIS (share +7, but unique iso)
  { code: "+7", iso: "RU", label: "Russia (RU) +7" },
  { code: "+7", iso: "KZ", label: "Kazakhstan (KZ) +7" },

  // Asia
  { code: "+91", iso: "IN", label: "India (IN) +91" },
  { code: "+92", iso: "PK", label: "Pakistan (PK) +92" },
  { code: "+880", iso: "BD", label: "Bangladesh (BD) +880" },
  { code: "+86", iso: "CN", label: "China (CN) +86" },
  { code: "+81", iso: "JP", label: "Japan (JP) +81" },
  { code: "+82", iso: "KR", label: "South Korea (KR) +82" },
  { code: "+65", iso: "SG", label: "Singapore (SG) +65" },
  { code: "+60", iso: "MY", label: "Malaysia (MY) +60" },
  { code: "+62", iso: "ID", label: "Indonesia (ID) +62" },
  { code: "+63", iso: "PH", label: "Philippines (PH) +63" },
  { code: "+66", iso: "TH", label: "Thailand (TH) +66" },
  { code: "+84", iso: "VN", label: "Vietnam (VN) +84" },

  // Americas
  { code: "+1", iso: "US", label: "United States (US) +1" },
  { code: "+1", iso: "CA", label: "Canada (CA) +1" },
  { code: "+52", iso: "MX", label: "Mexico (MX) +52" },
  { code: "+55", iso: "BR", label: "Brazil (BR) +55" },
  { code: "+54", iso: "AR", label: "Argentina (AR) +54" },
  { code: "+56", iso: "CL", label: "Chile (CL) +56" },
  { code: "+57", iso: "CO", label: "Colombia (CO) +57" },
  { code: "+51", iso: "PE", label: "Peru (PE) +51" },

  // Oceania & Africa (extras)
  { code: "+61", iso: "AU", label: "Australia (AU) +61" },
  { code: "+64", iso: "NZ", label: "New Zealand (NZ) +64" },
  { code: "+27", iso: "ZA", label: "South Africa (ZA) +27" },
];

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneCode: "",
    phoneNumber: "",
    subject: "",
    message: "",
    // honeypot (anti-spam)
    company: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Extract the dial code from "code|iso"
    const [dial] = String(formData.phoneCode || "").split("|");
    const phone = `${dial || ""} ${formData.phoneNumber || ""}`.trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone,
          subject: formData.subject,
          message: formData.message,
          company: formData.company, // honeypot
        }),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus({
          ok: true,
          msg: "Your message has been sent successfully. We’ll get back to you within 24 hours.",
        });
        setFormData({
          fullName: "",
          email: "",
          phoneCode: "",
          phoneNumber: "",
          subject: "",
          message: "",
          company: "",
        });
      } else {
        setStatus({
          ok: false,
          msg: "Something went wrong while sending your message. Please try again in a minute or email us at info@ideolingo.com.",
        });
      }
    } catch (err: any) {
      setStatus({
        ok: false,
        msg: "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* === Hero === */}
      <Hero
        title="Let's Take Your Message Global"
        subtitle="Ready to expand your reach? Get in touch with our team of language experts and discover how we can help you connect with audiences worldwide."
        primaryCta={{ label: "Send a Message", href: "#contact-form" }}
        align="center"
        height="md"
      />

      {/* === Contact Section === */}
      <section className="py-16 lg:py-24" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  We're here to help you break down language barriers and reach
                  new markets. Contact us today to discuss your project. We look
                  forward to partnering with you!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-zinc-800 ic2 mt-1 flex-shrink-0 ic2" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">{t("contact.address")}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-zinc-800 ic2" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">{t("contact.phone")}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-zinc-800 ic2" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">{t("contact.email")}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <WhatsappIcon className="h-6 w-6 text-zinc-800 ic2" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/201031155440"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-zinc-700 hover:text-zinc-900"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FacebookIcon className="h-6 w-6 text-zinc-800 ic2" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Facebook
                    </h3>
                    <a
                      href="https://www.facebook.com/share/17QpjGWis5/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-zinc-700 hover:text-zinc-900"
                    >
                      Follow our page
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <InstagramIcon className="h-6 w-6 text-zinc-800 ic2" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Instagram
                    </h3>
                    <a
                      href="https://www.instagram.com/ideolingo98?igsh=NW9pNmplMnV3aHB6"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-zinc-700 hover:text-zinc-900"
                    >
                      See our updates
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-6 w-6 text-zinc-800 ic2" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      LinkedIn
                    </h3>
                    <a
                      href="https://www.linkedin.com/company/ideolingo/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-zinc-700 hover:text-zinc-900"
                    >
                      Connect with us on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
                    <div className="flex gap-2 mt-1">
                      <Select
                        value={formData.phoneCode}
                        onValueChange={(value) =>
                          handleInputChange("phoneCode", value)
                        }
                      >
                        <SelectTrigger className="w-[220px]">
                          <SelectValue placeholder="Country / Code" />
                        </SelectTrigger>
                        <SelectContent className="max-h-72">
                          {COUNTRY_CODES.map((c) => (
                            <SelectItem
                              key={`${c.iso}-${c.code}`}
                              value={`${c.code}|${c.iso}`} // unique value
                            >
                              {c.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          handleInputChange("phoneNumber", e.target.value)
                        }
                        className="flex-1"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) =>
                        handleInputChange("subject", value)
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inquiry">Inquiry</SelectItem>
                        <SelectItem value="business-offer">
                          Business Offer
                        </SelectItem>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="freelancers">Freelancers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* honeypot (anti-spam, hidden) */}
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-zinc-800 hover:bg-zinc-700 btn"
                    disabled={loading}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {loading ? "Sending…" : "Submit"}
                  </Button>

                  {status && (
                    <p
                      className={status.ok ? "text-green-600" : "text-red-600"}
                    >
                      {status.msg}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
