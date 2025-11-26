"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Menu,
  X,
  Languages,
  Sparkles,
  AudioWaveform,
  Headphones,
  LayoutGrid,
  Bot,
  Clapperboard,
  Gavel,
  Stethoscope,
  Banknote,
  Cpu,
  ShoppingBag,
  Megaphone,
  Factory,
  GraduationCap,
  Car,
  Gamepad2,
  ChevronDown,
  Globe,
  PenSquare,
  Users,
  Workflow,
  SpellCheck,
  Leaf, // --- 1. تمت إضافة أيقونة جديدة ---
  FlaskConical, // --- 1. تمت إضافة أيقونة جديدة ---
} from "lucide-react";

const ACCENT = "rgba(253, 143, 143,.6)";
type Item = { href: string; label: string; Icon: React.ElementType };

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  const aboutMenu: Item[] = [
    { href: "/about", label: "About", Icon: Users },
    { href: "/workflow", label: "Our Workflow Process", Icon: Workflow },
  ];

  const services: Item[] = [
    { href: "/services/translation", label: "Translation", Icon: Languages },
    { href: "/services/localization", label: "Localization", Icon: Globe },
    { href: "/services/writing", label: "Writing", Icon: PenSquare },
    { href: "/services/transcreation", label: "Transcreation", Icon: Sparkles },
    {
      href: "/services/transcription",
      label: "Transcription",
      Icon: AudioWaveform,
    },
    {
      href: "/services/interpretation",
      label: "Interpretation",
      Icon: Headphones,
    },
    {
      href: "/services/dtp",
      label: "Desktop Publishing (DTP)",
      Icon: LayoutGrid,
    },
    {
      href: "/services/mtpe",
      label: "Machine Translation + Post-Editing",
      Icon: Bot,
    },
    {
      href: "/services/subtitling-voiceover",
      label: "Subtitling & Voice-over",
      Icon: Clapperboard,
    },
    {
      href: "/services/proofreading-editing",
      label: "Proofreading & Editing",
      Icon: SpellCheck,
    },
  ];

  // --- 2. تم إضافة القسمين الجديدين هنا ---
  const industries: Item[] = [
    { href: "/industries/legal", label: "Legal Translation", Icon: Gavel },
    {
      href: "/industries/medical-life-sciences",
      label: "Medical & Healthcare Translation",
      Icon: Stethoscope,
    },
    {
      href: "/industries/life-science",
      label: "Life Science Localization",
      Icon: FlaskConical,
    }, // تمت الإضافة هنا
    {
      href: "/industries/finance-banking",
      label: "Financial & Business Translation",
      Icon: Banknote,
    },
    {
      href: "/industries/technology-it",
      label: "Technical Translation",
      Icon: Cpu,
    },
    {
      href: "/industries/ecommerce-retail",
      label: "E-commerce & Retail",
      Icon: ShoppingBag,
    },
    {
      href: "/industries/marketing-media",
      label: "Marketing & Advertising Translation",
      Icon: Megaphone,
    },
    {
      href: "/industries/manufacturing-engineering",
      label: "Manufacturing & Engineering",
      Icon: Factory,
    },
    {
      href: "/industries/education-elearning",
      label: "Educational Translation & Localization",
      Icon: GraduationCap,
    },
    {
      href: "/industries/automotive",
      label: "Automotive Translation & Localization",
      Icon: Car,
    },
    {
      href: "/industries/gaming",
      label: "Gaming Translation & Localization",
      Icon: Gamepad2,
    },
    {
      href: "/industries/agriculture",
      label: "Agriculture Translation & Localization",
      Icon: Leaf,
    }, // تمت الإضافة هنا
  ];

  return (
    <header className="sticky top-0 z-[200] w-full border-b bg-white backdrop-blur ">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Ideolingo Logo"
              width={140}
              height={35}
            />
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="items-center gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="relative">
                <IndieDropdown
                  label="About"
                  panelWidth={250}
                  renderPanel={() => <HMenuVertical items={aboutMenu} />}
                />
              </NavigationMenuItem>
              <NavigationMenuItem className="relative">
                <IndieDropdown
                  label="Services"
                  panelWidth={980}
                  renderPanel={() => <HMenuRow3 items={services} />}
                />
              </NavigationMenuItem>
              <NavigationMenuItem className="relative">
                <IndieDropdown
                  label="Industries"
                  panelWidth={980}
                  renderPanel={() => <HMenuRow3 items={industries} />}
                />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/languages"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100"
                  >
                    Languages
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/quality-assurance"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100"
                  >
                    Quality Assurance
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  asChild
                  className="ml-1 border-0 bg-zinc-700"
                  style={{ color: "white" }}
                >
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <MobileDrawerPortal
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        aboutMenu={aboutMenu}
        services={services}
        industries={industries}
      />
    </header>
  );
}

// ... باقي الكود يبقى كما هو بدون تغيير ...

function IndieDropdown({
  label,
  renderPanel,
  panelWidth = 980,
}: {
  label: string;
  renderPanel: () => React.ReactNode;
  panelWidth?: number;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="inline-flex w-full items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute left-1/2 z-40 mt-2 -translate-x-1/2 rounded-xl border bg-white p-3 shadow-xl transition-all ${
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-1"
        }`}
        role="menu"
        style={{
          width: `min(96vw, ${panelWidth}px)`,
          maxHeight: "70vh",
          overflowY: "auto",
          overscrollBehavior: "contain",
        }}
      >
        {renderPanel()}
      </div>
    </div>
  );
}

function HMenuVertical({ items }: { items: Item[] }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          title={label}
          className="flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          aria-label={label}
        >
          <span
            className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg ic"
            style={{ background: ACCENT, color: ACCENT }}
            aria-hidden="true"
          >
            <Icon className="h-4 w-4" />
          </span>
          <span className="min-w-0 flex-1 text-sm font-medium leading-[1.2] text-slate-800 truncate">
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
}

function HMenuRow3({ items }: { items: Item[] }) {
  return (
    <div className="no-scrollbar overflow-x-auto overflow-y-hidden py-1 pr-1">
      <div className="grid grid-rows-3 grid-flow-col auto-cols-[minmax(230px,1fr)] gap-3">
        {items.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            title={label}
            className="flex h-full min-w-[230px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            aria-label={label}
          >
            <span
              className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg ic"
              style={{ background: ACCENT, color: ACCENT }}
              aria-hidden="true"
            >
              <Icon className="h-4 w-4" />
            </span>
            <span className="min-w-0 flex-1 text-sm font-medium leading-[1.2] text-slate-800 text-left truncate">
              {label}
            </span>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

function Collapsible({ title, items }: { title: string; items: Item[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200/70 py-3">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left text-sm font-semibold"
        aria-expanded={open}
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 ${
          open ? "" : "hidden"
        }`}
      >
        {items.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50"
            title={label}
          >
            <span
              className="grid place-items-center rounded-lg p-2 ic"
              style={{ background: ACCENT, color: ACCENT }}
              aria-hidden="true"
            >
              <Icon className="h-5 w-5" />
            </span>
            <span className="min-w-0 truncate text-sm">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileDrawerPortal({
  open,
  onClose,
  aboutMenu,
  services,
  industries,
}: {
  open: boolean;
  onClose: () => void;
  aboutMenu: Item[];
  services: Item[];
  industries: Item[];
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <>
      <div
        className={`fixed inset-0 z-[999] bg-black/45 transition-opacity ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`fixed inset-0 z-[1000] transform-gpu transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed left-0 right-0 top-0 z-[1001] h-16 border-b bg-white/95 backdrop-blur">
          <div className="flex h-full items-center justify-between px-4">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={onClose}
            >
              <Image
                src="/logo.png"
                alt="Ideolingo Logo"
                width={140}
                height={35}
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <nav
          className="absolute inset-0 top-16 bg-white px-4 pb-6 pt-3 overflow-y-auto"
          style={{
            WebkitOverflowScrolling: "touch",
            overscrollBehavior: "contain",
            touchAction: "pan-y",
          }}
        >
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-sm hover:bg-slate-100"
            onClick={onClose}
          >
            Home
          </Link>
          <Collapsible title="About" items={aboutMenu} />
          <Collapsible title="Services" items={services} />
          <Collapsible title="Industries" items={industries} />
          <Link
            href="/languages"
            className="block rounded-md px-3 py-2 text-sm hover:bg-slate-100"
            onClick={onClose}
          >
            Languages
          </Link>
          <Link
            href="/quality-assurance"
            className="block rounded-md px-3 py-2 text-sm hover:bg-slate-100"
            onClick={onClose}
          >
            Quality Assurance
          </Link>
          <Link
            href="/contact"
            className="block rounded-md px-3 py-2 text-sm hover:bg-slate-100"
            onClick={onClose}
          >
            Contact
          </Link>
          <Button
            asChild
            className="mt-3 w-full border-0 bg-zinc-700"
            style={{ color: "white" }}
          >
            <Link href="/contact" onClick={onClose}>
              Get a Quote
            </Link>
          </Button>
        </nav>
      </div>
    </>,
    document.body
  );
}
