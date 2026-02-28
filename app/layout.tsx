import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/siteContent";
import { Toaster } from "@/components/ui/Toaster";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const BASE_URL = "https://nucasystems.com";

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nuca Systems",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Nuca Systems helps enterprises run OpenText ECM without the headaches. Infrastructure, Security & YouTube Content Creation. Offices in Frankfurt, Dublin & Vilnius.",
  sameAs: ["https://linkedin.com/company/nuca-systems"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@nucasystems.com",
    contactType: "customer service",
    availableLanguage: "English",
    areaServed: ["DE", "IE", "LT"],
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nuca Systems",
  url: BASE_URL,
  description:
    "Enterprise IT Consulting & Media. OpenText ECM, Infrastructure, Security & YouTube Content Creation. Frankfurt, Dublin, Vilnius.",
  publisher: { "@type": "Organization", name: "Nuca Systems", logo: `${BASE_URL}/logo.png` },
  inLanguage: "en-IE",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: "Nuca Systems",
  title: {
    default: siteContent.meta.title,
    template: "%s | Nuca Systems",
  },
  description: siteContent.meta.description,
  keywords: [
    "OpenText ECM",
    "enterprise IT consulting",
    "YouTube media",
    "Frankfurt",
    "Dublin",
    "Vilnius",
    "content management",
    "infrastructure",
    "MakeMyThumb",
    "ECM consulting",
    "OpenText",
  ],
  authors: [{ name: "Nuca Systems", url: BASE_URL }],
  creator: "Nuca Systems",
  publisher: "Nuca Systems",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: BASE_URL,
    siteName: "Nuca Systems",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Nuca Systems logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: BASE_URL,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <Toaster>{children}</Toaster>
      </body>
    </html>
  );
}
