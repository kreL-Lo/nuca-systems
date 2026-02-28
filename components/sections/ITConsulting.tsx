"use client";

import { siteContent } from "@/content/siteContent";
import { Reveal } from "@/components/Reveal";

export function ITConsulting() {
  const { itConsulting } = siteContent;
  return (
    <section id="it-consulting" className="py-24 px-6 md:px-8 bg-navy-deep">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-outfit text-xs font-semibold tracking-[0.2em] uppercase text-blue mb-4">
            <span className="w-8 h-0.5 bg-blue" />
            {itConsulting.tag}
          </div>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{itConsulting.title}</h2>
        </Reveal>
        <Reveal>
          <p className="text-gray text-lg max-w-[600px] mb-10">{itConsulting.description}</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {itConsulting.expertise.map((card) => (
            <Reveal key={card.title}>
              <div className="bg-navy-mid border border-white/5 rounded-xl p-8 transition-all duration-300 hover:border-blue/20 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
                <p className="text-gray text-sm leading-relaxed">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
