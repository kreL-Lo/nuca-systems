const BASE_URL = "https://nucasystems.com";

const organizationSchema = {
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nuca Systems",
  url: BASE_URL,
  description:
    "Enterprise IT Consulting & Media. OpenText ECM, Infrastructure, Security & YouTube Content Creation. Frankfurt, Dublin, Vilnius.",
  publisher: {
    "@type": "Organization",
    name: "Nuca Systems",
    logo: `${BASE_URL}/logo.png`,
  },
  inLanguage: "en-IE",
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
