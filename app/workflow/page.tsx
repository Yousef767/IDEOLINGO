"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ClipboardList,
  FileSearch,
  Settings2,
  Languages,
  FileText,
  FileEdit,
  SpellCheck,
  BadgeCheck,
  LayoutGrid,
  Eye,
  PackageCheck,
  Send
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const Accent = "#fff";

const workflowSteps = [
    {
        step: 1,
        title: "Project Management",
        description: "The process starts when the project manager receives a request from the client. Our PMs take charge of the project from the first step till the delivery.",
        icon: ClipboardList
    },
    {
        step: 2,
        title: "Material analysis",
        description: "The PM analyzes the project and identifies its scopes: size, timeframe, and tools, and chooses the needed resources who are most competent in this field. He also checks all the source files making sure they’re complete and not corrupted.",
        icon: FileSearch
    },
    {
        step: 3,
        title: "Materials preparation",
        description: "The production phase starts with the PM preparing and assigning the files to the resources, and sending the original source to the localization engineer who extracts the content and converts it into editable files.",
        icon: Settings2
    },
    {
        step: 4,
        title: "Linguistic development",
        description: "We create a standard glossary, translation memories, and reference materials that all translators can refer to while working on the materials if the client has no one to ensure the highest levels of quality and consistency.",
        icon: Languages
    },
    {
        step: 5,
        title: "Translation",
        description: "The materials are assigned to a team of native translators who start the translation process according to the given instructions which guarantee cultural adherence and high quality.",
        icon: FileText
    },
    {
        step: 6,
        title: "Editing & Reviewing",
        description: "Professional reviewers and SMEs check the translations for inconsistent terminology, grammatical mistakes, missing punctuations, and other inconsistencies, and make sure to resolve any kind of errors or low-quality.",
        icon: FileEdit
    },
    {
        step: 7,
        title: "Proofreading",
        description: "The files are checked by professional native proofreaders that make sure the translations are completely error-free and in line with the client’s instructions and cultural nuances. They make any needed stylistic changes and approve the final files.",
        icon: SpellCheck
    },
    {
        step: 8,
        title: "Quality Assurance",
        description: "Human and automated QA checks are run for in-context translation, layout orientation appropriateness, cultural issues, and any other language-related issues. They are responsible for the final approval of quality standards embedded in the files.",
        icon: BadgeCheck
    },
    {
        step: 9,
        title: "Formatting",
        description: "The files are sent to the DTP specialists to adjust the typesetting, graphics localization, layout design, and master pages according to the language specifications and conventions for both printed and online documents to adapt to the target culture.",
        icon: LayoutGrid
    },
    {
        step: 10,
        title: "LSO checks",
        description: "The LSO specialist simulates the reader experience to check the context, style, and formats, to scan and scam for any missing points or minor errors, and to ensure the text is identical to the original.",
        icon: Eye
    },
    {
        step: 11,
        title: "Verification",
        description: "The project manager finalizes the project components, compiles files, and ensures the completeness and validity of deliverables as per the client's requirements.",
        icon: PackageCheck
    },
    {
        step: 12,
        title: "Delivery & Follow-up",
        description: "The project files are all sent to the client via an online tool or email. We make sure that they are highly secured. Afterward, we carry out a follow-up plan to achieve the highest client satisfaction by implementing feedback or requested updates.",
        icon: Send
    },
];

export default function WorkflowPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Hero
        title="Our Workflow Process"
        subtitle="A Meticulously Structured Process for Uncompromising Quality"
        imageSrc="/images/workflow-hero.jpg"
        rgb={true}
        overlayOpacity={0.5}
      />

      {/* Intro */}
      <Section>
        <div className="max-w-4xl text-gray-700 leading-relaxed text-center mx-auto space-y-4">
            <p>
              At <strong>Ideolingo</strong>, we are proud of our reputation for providing exceptional translation and localization services. This success is due to our rigorous quality control procedures that ensure we meet the highest industry standards while maintaining consistency and accuracy in every project.
            </p>
            <p>
              Our meticulously structured workflow process guarantees that each project is handled with precision, preventing any potential issues like inconsistencies or errors. This process also allows us to continuously identify areas for improvement, which helps optimize our workflow for future projects, saving both time and effort.
            </p>
        </div>
      </Section>

      {/* Workflow Steps Section */}
      <Section title="Our Step-by-Step Process" subdued>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {workflowSteps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="bg-zinc-700 text-white p-6 rounded-lg relative flex flex-col items-center text-center shadow-lg">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center text-lg font-bold border-4 border-primary-foreground">
                  {item.step}
                </div>
                <Icon size={40} className="mb-4 text-white" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Need second to none quality? Search no more.
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Let's discuss how our rigorous process can benefit your next project.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="border-0 bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 shadow-lg"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}