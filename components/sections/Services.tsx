"use client";

import { siteContent } from "@/content/siteContent";
import { Reveal } from "@/components/Reveal";

export function Services() {
  const { services } = siteContent;
  return (
    <section id="services" className="py-24 px-6 md:px-8 bg-navy">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-outfit text-xs font-semibold tracking-[0.2em] uppercase text-blue mb-4">
            <span className="w-8 h-0.5 bg-blue" />
            {services.tag}
          </div>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{services.title}</h2>
        </Reveal>
        <Reveal>
          <p className="text-gray text-lg max-w-[600px] mb-12">{services.description}</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {services.pillars.map((pillar) => (
            <Reveal key={pillar.title}>
              <div className={"rounded-2xl p-10 border border-white/5 bg-navy-mid relative overflow-hidden transition-all duration-300 hover:-translate-y-1 " + (pillar.type === "blue" ? "hover:border-white/10 hover:shadow-[0_20px_60px_rgba(74,158,255,0.08)] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-[#1565c0] before:via-cyan before:to-transparent" : "hover:border-white/10 hover:shadow-[0_20px_60px_rgba(255,107,107,0.08)] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-red before:to-transparent")}>
                <div className={"w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 " + (pillar.type === "blue" ? "bg-blue-subtle border border-blue/20" : "bg-red-subtle border border-red/20")}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-gray leading-relaxed mb-6">{pillar.description}</p>
                <div className="flex flex-col gap-3">
                  {pillar.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 py-3 px-4 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                      <span className={"w-2 h-2 rounded-full mt-1.5 flex-shrink-0 " + (pillar.type === "blue" ? "bg-blue" : "bg-red")} />
                      <span className="text-text text-[0.95rem]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
