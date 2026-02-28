"use client";

import { siteContent } from "@/content/siteContent";
import { Reveal } from "@/components/Reveal";

export function About() {
  const { about } = siteContent;
  return (
    <section id="about" className="py-24 px-6 md:px-8 bg-navy-deep">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-outfit text-xs font-semibold tracking-[0.2em] uppercase text-blue mb-4">
            <span className="w-8 h-0.5 bg-blue" />
            {about.tag}
          </div>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{about.title}</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mt-8">
          <Reveal>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-gray text-[1.05rem] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col gap-5">
              {about.highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 p-5 bg-navy-mid rounded-xl border border-white/5 transition-all duration-300 hover:border-blue/20 hover:translate-x-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-subtle border border-blue/20 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-gray text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
