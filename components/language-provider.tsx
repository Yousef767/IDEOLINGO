"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.industries": "Industries",
    "nav.languages": "Languages",
    "nav.quality": "Quality Assurance",
    "nav.contact": "Contact Us",
    "nav.languageSwitch": "🌐 English ⇆ عربي",

    // Home Page
    "home.hero.title": "Go Global with Confidence.",
    "home.hero.intro1":
      "At Ideolingo, we transform your words into powerful messages that connect, engage, and convert in any market.",
    "home.hero.intro2":
      "With a team of expert linguists, project managers, and cultural consultants, we make sure your brand sounds local—everywhere.",
    "home.hero.intro3":
      "From fast, accurate translations to complete localization strategies, we help you reach audiences worldwide.",
    "home.hero.cta": "Let us talk about your next project today",
    "home.services.title": "Our Services",
    "home.services.subtitle": "Comprehensive language solutions tailored to your business needs",
    "home.services.viewAll": "View All Services",
    "home.industries.title": "Industries We Serve",
    "home.industries.subtitle": "Specialized expertise across diverse sectors",
    "home.industries.viewAll": "View All Industries",
    "home.languages.title": "50+ Languages",
    "home.languages.subtitle": "We deliver accurate, culturally adapted translations in over 50 languages",
    "home.languages.cta": "Explore Our Languages",
    "home.cta.title": "Ready to Go Global?",
    "home.cta.subtitle": "Let's discuss how we can help you reach new markets and connect with audiences worldwide.",
    "home.cta.button": "Get Started Today",

    // About Page
    "about.hero.title": "Your Strategic Language Partner.",
    "about.hero.body":
      "We believe language should never be a barrier to opportunity. At Ideolingo, we combine human expertise with innovative technology to help brands grow globally.",
    "about.mission.title": "Our Mission",
    "about.mission.text": "Break down language barriers and enable seamless cross-cultural communication.",
    "about.vision.title": "Our Vision",
    "about.vision.text": "Be a global leader in creative, impactful localization solutions.",
    "about.values.title": "Our Values",
    "about.values.text": "Quality, integrity, confidentiality, and client success.",
    "about.team.title": "Experts Who Speak Your Industry",
    "about.team.subtitle": "Certified Translators, Localization Engineers, DTP Specialists, Project Managers",
    "about.team.cta": "Meet the people who make it happen",

    // Services
    "services.hero.title": "You are an all-in-one language solution.",
    "services.hero.cta": "Explore all our services and choose what fits your needs.",
    "services.translation": "Translation & Localization",
    "services.transcreation": "Transcreation",
    "services.transcription": "Transcription",
    "services.subtitling": "Subtitling & Voice-over",
    "services.interpretation": "Interpretation",
    "services.dtp": "Desktop Publishing (DTP)",
    "services.mtpe": "Machine Translation + Post-Editing (MTPE)",
    "services.proofreading": "Proofreading & Editing",
    "services.linguisticQa": "Linguistic QA",

    // Translation Service Page
    "services.translation.hero.title": "Speak the Language of Your Audience.",
    "services.translation.hero.subtitle":
      "We deliver precise, culturally adapted translations in over 50 languages—from legal contracts to creative ad campaigns.",
    "services.translation.specializations.title": "Our Specializations",
    "services.translation.legal.title": "Accuracy You Can Trust in Every Word",
    "services.translation.legal.body":
      "In the legal world, precision isn't just important — it's critical. At Ideolingo, we deliver accurate, reliable, and confidential legal translations...",
    "services.translation.legal.services.title": "Services Include",

    // Industries
    "industries.hero.title": "We Speak Your Industry's Language.",
    "industries.legal": "Legal",
    "industries.medical": "Medical & Life Sciences",
    "industries.finance": "Finance",
    "industries.technology": "Technology & IT",
    "industries.ecommerce": "Ecommerce & Retail",
    "industries.marketing": "Marketing & Media",
    "industries.manufacturing": "Manufacturing & Engineering",
    "industries.education": "Education & E-Learning",
    "industries.automotive": "Automotive",
    "industries.gaming": "Gaming",

    // Languages Page
    "languages.hero.title": "50+ Languages",
    "languages.hero.subtitle":
      "At Ideolingo, we deliver accurate, culturally adapted translations in over 50 languages...",
    "languages.groups.middleEastern": "Middle Eastern",
    "languages.groups.african": "African",
    "languages.groups.european": "European",
    "languages.groups.asian": "Asian",

    // Quality Assurance Page
    "quality.hero.title": "Quality Is Built Into Every Step.",
    "quality.process.title": "Our Process",
    "quality.process.step1": "Initial Analysis",
    "quality.process.step2": "Translation",
    "quality.process.step3": "Editing",
    "quality.process.step4": "Proofreading",
    "quality.process.step5": "Final Review & Delivery",
    "quality.linguisticQa.title": "Linguistic QA",

    // Contact Page
    "contact.hero.title": "Let's Take Your Message Global.",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.subject.inquiry": "Inquiry",
    "contact.form.subject.business": "Business Offer",
    "contact.form.subject.general": "General",
    "contact.form.subject.freelancers": "Freelancers",
    "contact.form.message": "Message",
    "contact.form.submit": "Submit",

    // Contact
    "contact.address":
      "Office A1, Apartment 5, 7th Floor, Building 4, Al Obour Buildings, Salah Salem Street, Nasr City, Cairo, Egypt",
    "contact.phone": "01031155440",
    "contact.email": "info@ideolingo.com",
    "contact.linkedin": "https://www.linkedin.com/company/ideolingo/",

    // Common
    "common.comingSoon": "Content coming soon",
    "common.getQuote": "Get Quote",
    "common.learnMore": "Learn More",
    "common.contactUs": "Contact Us",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.industries": "الصناعات",
    "nav.languages": "اللغات",
    "nav.quality": "ضمان الجودة",
    "nav.contact": "اتصل بنا",
    "nav.languageSwitch": "🌐 عربي ⇆ English",

    // Home Page
    "home.hero.title": "انطلق عالمياً بثقة.",
    "home.hero.intro1": "في إيديولينجو، نحول كلماتك إلى رسائل قوية تتواصل وتشارك وتحول في أي سوق.",
    "home.hero.intro2":
      "مع فريق من الخبراء اللغويين ومديري المشاريع والاستشاريين الثقافيين، نضمن أن تبدو علامتك التجارية محلية في كل مكان.",
    "home.hero.intro3":
      "من الترجمات السريعة والدقيقة إلى استراتيجيات التوطين الكاملة، نساعدك في الوصول إلى الجماهير في جميع أنحاء العالم.",
    "home.hero.cta": "دعنا نتحدث عن مشروعك القادم اليوم",
    "home.services.title": "خدماتنا",
    "home.services.subtitle": "حلول لغوية شاملة مصممة خصيصاً لاحتياجات عملك",
    "home.services.viewAll": "عرض جميع الخدمات",
    "home.industries.title": "الصناعات التي نخدمها",
    "home.industries.subtitle": "خبرة متخصصة عبر قطاعات متنوعة",
    "home.industries.viewAll": "عرض جميع الصناعات",
    "home.languages.title": "أكثر من 50 لغة",
    "home.languages.subtitle": "نقدم ترجمات دقيقة ومتكيفة ثقافياً بأكثر من 50 لغة",
    "home.languages.cta": "استكشف لغاتنا",
    "home.cta.title": "مستعد للانطلاق عالمياً؟",
    "home.cta.subtitle":
      "دعنا نناقش كيف يمكننا مساعدتك في الوصول إلى أسواق جديدة والتواصل مع الجماهير في جميع أنحاء العالم.",
    "home.cta.button": "ابدأ اليوم",

    // About Page
    "about.hero.title": "شريكك الاستراتيجي في اللغة.",
    "about.hero.body":
      "نؤمن أن اللغة يجب ألا تكون عائقاً أمام الفرص. في إيديولينجو، نجمع بين الخبرة البشرية والتكنولوجيا المبتكرة لمساعدة العلامات التجارية على النمو عالمياً.",
    "about.mission.title": "مهمتنا",
    "about.mission.text": "كسر الحواجز اللغوية وتمكين التواصل السلس عبر الثقافات.",
    "about.vision.title": "رؤيتنا",
    "about.vision.text": "أن نكون رائدين عالمياً في حلول التوطين الإبداعية والمؤثرة.",
    "about.values.title": "قيمنا",
    "about.values.text": "الجودة والنزاهة والسرية ونجاح العميل.",
    "about.team.title": "خبراء يتحدثون لغة صناعتك",
    "about.team.subtitle": "مترجمون معتمدون، مهندسو توطين، متخصصو النشر المكتبي، مديرو مشاريع",
    "about.team.cta": "تعرف على الأشخاص الذين يحققون النجاح",

    // Services
    "services.hero.title": "أنت حل لغوي شامل.",
    "services.hero.cta": "استكشف جميع خدماتنا واختر ما يناسب احتياجاتك.",
    "services.translation": "الترجمة والتوطين",
    "services.transcreation": "الإبداع الترجمي",
    "services.transcription": "التفريغ الصوتي",
    "services.subtitling": "الترجمة والتعليق الصوتي",
    "services.interpretation": "الترجمة الفورية",
    "services.dtp": "النشر المكتبي",
    "services.mtpe": "الترجمة الآلية والتحرير",
    "services.proofreading": "التدقيق والتحرير",
    "services.linguisticQa": "ضمان الجودة اللغوية",

    // Translation Service Page
    "services.translation.hero.title": "تحدث بلغة جمهورك.",
    "services.translation.hero.subtitle":
      "نقدم ترجمات دقيقة ومتكيفة ثقافياً بأكثر من 50 لغة - من العقود القانونية إلى الحملات الإعلانية الإبداعية.",
    "services.translation.specializations.title": "تخصصاتنا",
    "services.translation.legal.title": "دقة يمكنك الوثوق بها في كل كلمة",
    "services.translation.legal.body":
      "في العالم القانوني، الدقة ليست مهمة فحسب - بل حاسمة. في إيديولينجو، نقدم ترجمات قانونية دقيقة وموثوقة وسرية...",
    "services.translation.legal.services.title": "تشمل الخدمات",

    // Industries
    "industries.hero.title": "نتحدث لغة صناعتك.",
    "industries.legal": "القانونية",
    "industries.medical": "الطبية وعلوم الحياة",
    "industries.finance": "المالية",
    "industries.technology": "التكنولوجيا وتقنية المعلومات",
    "industries.ecommerce": "التجارة الإلكترونية والتجزئة",
    "industries.marketing": "التسويق والإعلام",
    "industries.manufacturing": "التصنيع والهندسة",
    "industries.education": "التعليم والتعلم الإلكتروني",
    "industries.automotive": "السيارات",
    "industries.gaming": "الألعاب",

    // Languages Page
    "languages.hero.title": "أكثر من 50 لغة",
    "languages.hero.subtitle": "في إيديولينجو، نقدم ترجمات دقيقة ومتكيفة ثقافياً بأكثر من 50 لغة...",
    "languages.groups.middleEastern": "الشرق الأوسط",
    "languages.groups.african": "الأفريقية",
    "languages.groups.european": "الأوروبية",
    "languages.groups.asian": "الآسيوية",

    // Quality Assurance Page
    "quality.hero.title": "الجودة مدمجة في كل خطوة.",
    "quality.process.title": "عمليتنا",
    "quality.process.step1": "التحليل الأولي",
    "quality.process.step2": "الترجمة",
    "quality.process.step3": "التحرير",
    "quality.process.step4": "التدقيق",
    "quality.process.step5": "المراجعة النهائية والتسليم",
    "quality.linguisticQa.title": "ضمان الجودة اللغوية",

    // Contact Page
    "contact.hero.title": "دعنا نأخذ رسالتك عالمياً.",
    "contact.form.name": "الاسم الكامل",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.subject": "الموضوع",
    "contact.form.subject.inquiry": "استفسار",
    "contact.form.subject.business": "عرض تجاري",
    "contact.form.subject.general": "عام",
    "contact.form.subject.freelancers": "المستقلون",
    "contact.form.message": "الرسالة",
    "contact.form.submit": "إرسال",

    // Contact
    "contact.address": "مكتب أ1، شقة 5، الطابق السابع، مبنى 4، مباني العبور، شارع صلاح سالم، مدينة نصر، القاهرة، مصر",
    "contact.phone": "01031155440",
    "contact.email": "info@ideolingo.com",
    "contact.linkedin": "https://www.linkedin.com/company/ideolingo/",

    // Common
    "common.comingSoon": "المحتوى سيضاف قريبًا",
    "common.getQuote": "احصل على عرض سعر",
    "common.learnMore": "اعرف المزيد",
    "common.contactUs": "اتصل بنا",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  useEffect(() => {
    const html = document.documentElement
    html.lang = language
    html.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
