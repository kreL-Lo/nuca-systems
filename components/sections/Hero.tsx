"use client";

import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/siteContent";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  const { hero } = siteContent;
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-[120px] pb-20 px-6 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow bg-no-repeat" aria-hidden />
      <div className="absolute inset-0 bg-grid-overlay bg-grid opacity-100" aria-hidden />
      <div className="max-w-[1200px] mx-auto relative z-10 w-full">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-7">
            <Image
              src="/logo.png"
              alt="Nuca Systems"
              width={200}
              height={80}
              className="w-[200px] h-auto flex-shrink-0"
              priority
            />
            <div className="flex flex-col gap-2">
              {hero.offices.map((office) => (
                <div key={office} className="font-outfit text-xs font-medium text-gray uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                  {office}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <span className="inline-flex items-center gap-2 bg-blue-subtle border border-blue/20 rounded-full py-1.5 px-4 font-outfit text-xs font-medium text-blue uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
            {hero.tag}
          </span>
        </Reveal>
        <Reveal>
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-extrabold mb-6 leading-tight">
            Enterprise <span className="bg-gradient-to-br from-[#1565c0] to-cyan bg-clip-text text-transparent">{hero.headlineHighlightBlue}</span>
            <br />
            & <span className="bg-gradient-to-br from-red to-red-bright bg-clip-text text-transparent">{hero.headlineHighlightRed}</span> That Delivers
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-lg text-gray max-w-[600px] mb-10">{hero.subhead}</p>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap gap-4">
            <Link href={hero.ctaPrimaryHref} className="inline-flex items-center gap-2 py-3.5 px-7 rounded-lg font-outfit font-semibold text-base bg-blue text-navy-deep border-0 transition-all duration-300 hover:bg-blue-bright hover:-translate-y-0.5">
              {hero.ctaPrimary}
            </Link>
            <Link href={hero.ctaSecondaryHref} className="inline-flex items-center gap-2 py-3.5 px-7 rounded-lg font-outfit font-semibold text-base bg-transparent text-white border border-white/15 transition-all duration-300 hover:border-blue hover:text-blue hover:-translate-y-0.5">
              {hero.ctaSecondary}
            </Link>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-16 pt-8 border-t border-white/10">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-outfit text-3xl font-bold text-white">{stat.value}<span className="text-blue">{stat.suffix}</span></div>
                <div className="text-sm text-gray mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
