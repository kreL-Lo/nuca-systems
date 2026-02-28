"use client";

import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { Reveal } from "@/components/Reveal";

export function Media() {
  const { media } = siteContent;
  return (
    <section id="media" className="py-24 px-6 md:px-8 bg-navy">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-outfit text-xs font-semibold tracking-[0.2em] uppercase text-red mb-4">
            <span className="w-8 h-0.5 bg-red" />
            {media.tag}
          </div>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{media.title}</h2>
        </Reveal>
        <Reveal>
          <p className="text-gray text-lg max-w-[600px] mb-10">
            {media.description}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {media.channels.map((ch) => (
            <Reveal key={ch.title}>
              <div className="bg-navy-mid border border-white/5 rounded-xl p-8 text-center transition-all duration-300 hover:border-red/20 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-4xl mb-4">{ch.emoji}</div>
                <h4 className="text-lg font-semibold mb-2">{ch.title}</h4>
                <p className="text-gray text-sm mb-4">{ch.description}</p>
                <span className="inline-block mt-4 py-1 px-3 rounded-full text-xs font-semibold bg-red-subtle text-red border border-red/20">
                  {ch.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-12 p-8 bg-navy-mid rounded-xl border border-red/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">{media.makeMyThumb.title}</h4>
              <p className="text-gray text-[0.95rem]">
                {media.makeMyThumb.description}
              </p>
            </div>
            <a
              href={media.makeMyThumb.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-outfit font-semibold text-base bg-red text-white border-0 transition-all duration-300 hover:bg-red-bright hover:-translate-y-0.5 cursor-pointer"
            >
              {media.makeMyThumb.ctaLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
