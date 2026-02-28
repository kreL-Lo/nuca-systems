"use client";

import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

const { contact } = siteContent;

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-8 bg-navy-deep">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-outfit text-xs font-semibold tracking-[0.2em] uppercase text-blue mb-4">
            <span className="w-8 h-0.5 bg-blue" />
            {contact.tag}
          </div>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{contact.title}</h2>
        </Reveal>
        <Reveal>
          <p className="text-gray text-lg max-w-[600px] mb-12">{contact.description}</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <Reveal>
            <div className="flex flex-col gap-6">
              {contact.methods.map((method) => (
                <div key={method.title} className="flex items-start gap-4 p-5 bg-navy-mid rounded-xl border border-white/5 hover:border-blue/20 transition-all">
                  <div className="w-11 h-11 rounded-lg bg-blue-subtle flex items-center justify-center text-xl flex-shrink-0">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-[0.95rem] font-semibold mb-0.5">{method.title}</h4>
                    {"locations" in method ? (
                      method.locations?.map((loc) => (
                        <p key={loc} className="text-text text-sm">{loc}</p>
                      ))
                    ) : (() => {
                      const m = method as { content: string; href?: string; sub?: string };
                      return (
                        <>
                          <p>
                            {m.href ? (
                              <Link href={m.href} className="text-blue hover:underline" target={m.href.startsWith("http") ? "_blank" : undefined} rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                                {m.content}
                              </Link>
                            ) : (
                              m.content
                            )}
                          </p>
                          {m.sub && <p className="text-xs text-gray mt-1">{m.sub}</p>}
                        </>
                      );
                    })()}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-navy-mid border border-white/5 rounded-2xl p-10">
              <h3 className="text-xl font-semibold mb-6">{contact.form.title}</h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
