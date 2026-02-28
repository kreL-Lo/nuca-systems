import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 py-12 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              className="flex-shrink-0"
            />
            <span className="font-outfit font-bold text-base text-white tracking-[0.15em]">
              NUCA
            </span>
            <span className="font-outfit text-sm text-gray tracking-wide">
              SYSTEMS
            </span>
          </div>
          <p className="text-gray text-sm mt-1">{siteContent.footer.tagline}</p>
        </div>
        <nav className="flex gap-8">
          {siteContent.footer.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray text-sm transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-gray text-sm">{siteContent.footer.copyright}</p>
      </div>
    </footer>
  );
}
