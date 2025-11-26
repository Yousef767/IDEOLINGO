"use client";

import * as React from "react";
import Link from "next/link";
import { Globe2, Languages, MessageSquareText, ShieldCheck, Star, Sparkles } from "lucide-react";

type Align = "center" | "left";
type Height = "sm" | "md" | "lg" | "full";

export default function Hero({
  title,
  subtitle,
  primaryCta,
  align = "center",
  height = "md",
}: {
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  align?: Align;
  height?: Height;
}) {
  const heightClass =
    height === "full" ? "min-h-[100svh]" : height === "lg" ? "min-h-[64vh]" : height === "md" ? "min-h-[46vh]" : "min-h-[34vh]";
  const isCenter = align === "center";

  return (
    <section className={`relative ${heightClass} overflow-hidden`}>
      <div className="absolute inset-0 -z-50" style={{ background: "linear-gradient(180deg, #C51431 0%, #C51431 55%, #C51431 100%)" }} />
      <AuroraRibbons />
      <SoftFog />
      <SkewLines />
      <SubtleGrain />
      <EdgeIconsMinimal />

      <div className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          <div className={`grid ${heightClass} place-content-center`}>
            <div className={`mx-auto ${isCenter ? "max-w-3xl text-center" : "max-w-3xl lg:max-w-4xl text-left"}`}>
              <Spotlight behind />
              <h1 className="relative text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">{title}</h1>
              {subtitle ? (
                <p className={`mt-3 text-base md:text-lg lg:text-xl text-white/85 ${isCenter ? "" : "max-w-2xl"}`}>{subtitle}</p>
              ) : null}
              {primaryCta && (
                <div className={`mt-6 flex flex-wrap gap-3 ${isCenter ? "justify-center" : ""}`}>
                  <CTA_SoftGlow href={primaryCta.href} label={primaryCta.label} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .rb-anim, .fog-anim, .icon-anim, .lines-anim { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

function CTA_SoftGlow({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} aria-label={label} className="group relative inline-flex items-center justify-center rounded-full px-7 py-3">
      <span aria-hidden className="pointer-events-none absolute -inset-1 rounded-full blur-md transition-opacity duration-300 opacity-40 group-hover:opacity-70" style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,.42), rgba(255,255,255,.14) 60%, transparent 75%)", boxShadow: "0 0 14px rgba(255,255,255,.22)" }} />
      <span aria-hidden className="absolute inset-0 rounded-full transition-all duration-300" style={{ background: "linear-gradient(180deg, rgba(255,255,255,.85) 0%, rgba(255,255,255,.65) 100%)", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: "1.6px", borderRadius: "9999px", boxShadow: "0 0 0 1px rgba(255,255,255,.6)", filter: "drop-shadow(0 0 10px rgba(255,255,255,.25))" }} />
      <span aria-hidden className="absolute inset-[1.6px] rounded-full backdrop-blur-[1.5px] transition" style={{ background: "linear-gradient(180deg, rgba(255,255,255,.16) 0%, rgba(255,255,255,.10) 100%)" }} />
      <span className="relative z-10 text-sm md:text-base font-semibold tracking-tight text-white" style={{ textShadow: "0 0 6px rgba(255,255,255,.65)" }}>{label}</span>
      <style jsx>{`
        .group:hover span[style*="box-shadow"] {
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.8), 0 0 22px rgba(255, 255, 255, 0.35);
          filter: drop-shadow(0 0 14px rgba(255, 255, 255, 0.38));
        }
      `}</style>
    </Link>
  );
}

function Spotlight({ behind = false }: { behind?: boolean }) {
  return <div aria-hidden className={`pointer-events-none ${behind ? "-z-10" : ""} absolute left-1/2 -translate-x-1/2 -translate-y-[55%]`} style={{ top: "0", width: "min(92vw, 1100px)", height: "min(52vh, 520px)", borderRadius: "50% / 42%", background: "radial-gradient(ellipse at center, rgba(255,255,255,0.18), rgba(255,255,255,0.08) 45%, rgba(0,0,0,0) 70%)", filter: "saturate(106%) blur(0.5px)" }} />;
}

function AuroraRibbons() {
  return (
    <div className="absolute inset-0 -z-40 pointer-events-none overflow-hidden">
      <div className="rb-anim absolute -left-[10%] -top-[20%] h-[70vh] w-[65vw] opacity-[0.18]" style={{ background: "conic-gradient(from 140deg at 50% 50%, rgba(220,230,255,.9), rgba(255,255,255,.3), rgba(200,210,255,.85))", transform: "rotate(-18deg) skewY(-6deg)", filter: "blur(28px) saturate(110%)", animation: "ribbonShift 26s ease-in-out infinite", mixBlendMode: "screen" }} />
      <div className="rb-anim absolute -right-[12%] -bottom-[22%] h-[70vh] w-[70vw] opacity-[0.16]" style={{ background: "conic-gradient(from -20deg at 50% 50%, rgba(235,220,255,.9), rgba(255,255,255,.25), rgba(210,240,255,.85))", transform: "rotate(16deg) skewY(8deg)", filter: "blur(30px) saturate(112%)", animation: "ribbonShift 30s ease-in-out infinite reverse", mixBlendMode: "screen" }} />
      <style jsx>{`
        @keyframes ribbonShift {
          0% { transform: translate3d(0, 0, 0) rotate(-2deg) skewY(-6deg); filter: hue-rotate(-6deg) blur(28px) saturate(110%); }
          50% { transform: translate3d(1%, -1%, 0) rotate(2deg) skewY(-3deg); filter: hue-rotate(6deg) blur(32px) saturate(114%); }
          100% { transform: translate3d(0, 0, 0) rotate(-2deg) skewY(-6deg); filter: hue-rotate(-6deg) blur(28px) saturate(110%); }
        }
      `}</style>
    </div>
  );
}

function SoftFog() {
  return (
    <div className="absolute inset-0 -z-45 pointer-events-none">
      <div className="fog-anim absolute -left-[14%] -top-[10%] h-[45vh] w-[45vw] opacity-[.10]" style={{ background: "radial-gradient(40% 40% at 40% 40%, rgba(255,255,255,.9), rgba(255,255,255,.5) 45%, rgba(255,255,255,0) 75%)", filter: "blur(50px)", animation: "fogDrift 60s linear infinite", mixBlendMode: "screen" }} />
      <div className="fog-anim absolute -right-[12%] -bottom-[12%] h-[46vh] w-[46vw] opacity-[.09]" style={{ background: "radial-gradient(40% 40% at 60% 60%, rgba(255,255,255,.85), rgba(255,255,255,.45) 45%, rgba(255,255,255,0) 75%)", filter: "blur(52px)", animation: "fogDrift 68s linear infinite reverse", mixBlendMode: "screen" }} />
      <style jsx>{`
        @keyframes fogDrift {
          0% { transform: translate3d(0, 0, 0) scale(1) rotate(0deg); }
          50% { transform: translate3d(2%, -2%, 0) scale(1.03) rotate(4deg); }
          100% { transform: translate3d(0, 0, 0) scale(1) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}

function SkewLines() {
  return (
    <div className="lines-anim pointer-events-none absolute -z-40 inset-0 opacity-[.06]" style={{ backgroundImage: "repeating-linear-gradient( -24deg, rgba(255,255,255,.25) 0px, rgba(255,255,255,.25) 1px, transparent 1px, transparent 14px )", animation: "linesDrift 22s ease-in-out infinite" }}>
      <style jsx>{`
        @keyframes linesDrift {
          0% { transform: translateX(0px); }
          50% { transform: translateX(-10px); }
          100% { transform: translateX(0px); }
        }
      `}</style>
    </div>
  );
}

function SubtleGrain() {
  return <div aria-hidden className="pointer-events-none absolute inset-0 -z-30 opacity-[.05]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.12) 1px, transparent 1.5px)", backgroundSize: "3px 3px", mixBlendMode: "screen" }} />;
}

function EdgeIconsMinimal() {
  const cls = "icon-anim text-white/40 drop-shadow-[0_0_10px_rgba(255,255,255,0.16)]";
  const items = [ { C: Star, pos: "left-6 top-7", w: 18, d: 10 }, { C: Globe2, pos: "left-[14%] top-5", w: 22, d: 12, r: true }, { C: Sparkles, pos: "left-[78%] top-8", w: 18, d: 11 }, { C: ShieldCheck, pos: "right-8 bottom-10", w: 20, d: 12, r: true }, { C: Languages, pos: "left-8 bottom-9", w: 20, d: 13 }, { C: MessageSquareText, pos: "right-[14%] top-10", w: 20, d: 14 } ];
  return (
    <>
      {items.map(({ C, pos, w, d, r }, i) => (
        <div key={i} className={`pointer-events-none absolute -z-30 ${pos}`} style={{ animation: `driftXY ${d}s ${r ? "reverse" : "normal"} ease-in-out infinite` }}>
          <C className={cls} style={{ width: w, height: w }} />
        </div>
      ))}
      <style jsx>{`
        @keyframes driftXY {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(8px, -6px) rotate(1deg); }
          50% { transform: translate(-6px, 8px) rotate(-1deg); }
          75% { transform: translate(10px, 2px) rotate(0.5deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
      `}</style>
    </>
  );
}