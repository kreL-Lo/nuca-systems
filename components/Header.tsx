"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { siteContent } from "@/content/siteContent";

const NAV_OFFSET = 100;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveId(id);
          }
        });
      },
      { rootMargin: `-${NAV_OFFSET}px 0px -50% 0px`, threshold: 0 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] h-[72px] flex items-center justify-between px-6 md:px-8 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/95 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-navy-deep/85 backdrop-blur-[20px]"
      } border-b border-white/5`}
    >
      <Link
        href="#home"
        className="flex items-center gap-2.5 no-underline"
        aria-label="Nuca Systems home"
      >
        <Image
          src="/logo.png"
          alt=""
          width={36}
          height={36}
          className="flex-shrink-0"
          priority
        />
        <span className="font-outfit font-bold text-lg text-white tracking-[0.2em]">
          NUCA
        </span>
        <span className="font-outfit text-sm text-gray tracking-[0.15em]">
          SYSTEMS
        </span>
      </Link>

      <button
        type="button"
        className="md:hidden flex flex-col gap-1.5 p-1.5 text-white"
        onClick={() => setMobileOpen((o) => !o)}
        aria-expanded={mobileOpen}
        aria-label="Toggle menu"
      >
        <span className="w-6 h-0.5 bg-white block" />
        <span className="w-6 h-0.5 bg-white block" />
        <span className="w-6 h-0.5 bg-white block" />
      </button>

      <nav
        className={`absolute md:static top-[72px] left-0 right-0 md:block ${
          mobileOpen ? "block" : "hidden"
        } md:!block bg-navy-deep/97 md:bg-transparent border-b border-blue/10 md:border-0 py-4 px-6 md:py-0 md:px-0`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center list-none m-0 p-0">
          {siteContent.nav.links.map((item) => {
            const isActive = activeId === item.href.slice(1);
            const isCta = "cta" in item && item.cta === true;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-outfit font-medium text-sm tracking-wide uppercase transition-colors duration-300 relative pb-1 ${
                    isCta
                      ? "bg-blue text-navy-deep px-5 py-2 rounded-md no-underline hover:bg-blue-bright"
                      : isActive
                        ? "text-white"
                        : "text-gray hover:text-white"
                  } ${!isCta ? "after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-blue after:transition-all after:duration-300 " + (isActive ? "after:w-full" : "after:w-0 hover:after:w-full") : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
