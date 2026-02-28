/**
 * Site copy and data — source of truth from nuca-systems.html
 */

export const siteContent = {
  meta: {
    title: "NUCA SYSTEMS — Enterprise IT Consulting & Media",
    description:
      "Nuca Systems helps enterprises run OpenText ECM without the headaches. Infrastructure, Security & YouTube Content Creation. Offices in Frankfurt, Dublin & Vilnius.",
  },

  nav: {
    links: [
      { href: "#home", label: "Home" },
      { href: "#services", label: "Services" },
      { href: "#it-consulting", label: "ECM Solutions" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Get In Touch", cta: true },
    ],
  },

  hero: {
    tag: "Enterprise IT & Media",
    headline: "Enterprise Infrastructure & Media That Delivers",
    headlineHighlightBlue: "Infrastructure",
    headlineHighlightRed: "Media",
    subhead:
      "We help enterprises run OpenText ECM without the headaches — and build YouTube channels that grow. Two pillars, one trusted partner.",
    ctaPrimary: "Book a Consultation →",
    ctaPrimaryHref: "#contact",
    ctaSecondary: "Explore Services",
    ctaSecondaryHref: "#services",
    stats: [
      { value: "35+", suffix: "", label: "Years in Infrastructure" },
      { value: "24/7", suffix: "", label: "Enterprise Support" },
      { value: "YT", suffix: "", label: "Content Creation" },
      { value: "3", suffix: "", label: "European Offices" },
    ],
    offices: [
      "Frankfurt am Main",
      "Dublin, Ireland",
      "Vilnius, Lithuania",
    ],
  },

  services: {
    tag: "What We Do",
    tagColor: "blue",
    title: "Two Pillars. One Partner.",
    description:
      "Nuca Systems operates at the intersection of enterprise technology and digital media — delivering expertise where it matters most.",
    pillars: [
      {
        type: "blue",
        icon: "🔧",
        title: "Enterprise IT Consulting",
        description:
          "Infrastructure, security, and managed services for organisations running OpenText ECM, Oracle, and hybrid cloud environments.",
        items: [
          "OpenText Content Server — deployment, migration, performance tuning",
          "Identity & Access Management (IAM)",
          "Cloud & On-Premises Security",
          "Oracle Database & RAC Administration",
          "Kubernetes / OpenShift Infrastructure",
          "Hybrid Cloud Management",
        ],
      },
      {
        type: "red",
        icon: "🎬",
        title: "YouTube & Media Creation",
        description:
          "Strategy, production, and growth services for YouTube channels — from niche content creation to thumbnail optimisation and audience development.",
        items: [
          "YouTube Channel Strategy & Growth",
          "Content Production & Scripting",
          "Thumbnail Design (MakeMyThumb)",
          "Niche Selection & Audience Research",
          "Multi-Channel Management",
          "Video SEO & Analytics",
        ],
      },
    ],
  },

  itConsulting: {
    tag: "Infrastructure & Security",
    tagColor: "blue",
    title: "OpenText ECM, Done Right",
    description:
      "35+ years of enterprise infrastructure experience across banking, insurance, and financial services. We bring deep expertise in regulated, high-security environments.",
    expertise: [
      {
        icon: "📄",
        title: "OpenText ECM",
        description:
          "Content Server deployment, migration, performance tuning, and system sizing for enterprise workloads up to 1,000+ concurrent users.",
      },
      {
        icon: "🔐",
        title: "Identity & Access Management",
        description:
          "Design and implement IAM solutions that meet the stringent security requirements of financial institutions and regulatory bodies.",
      },
      {
        icon: "☁️",
        title: "Hybrid Cloud",
        description:
          "Bridge on-premises and cloud infrastructure with managed Kubernetes, OpenShift, and hybrid cloud architectures.",
      },
      {
        icon: "🗄️",
        title: "Oracle Database",
        description:
          "Oracle RAC administration, performance optimisation, and database management for mission-critical enterprise applications.",
      },
      {
        icon: "🐧",
        title: "Unix & Linux",
        description:
          "Deep Unix/Linux system administration expertise with enterprise-grade reliability and security hardening.",
      },
      {
        icon: "🛡️",
        title: "Security Consulting",
        description:
          "Cloud and on-premises security audits, hardening, and compliance consulting for regulated industries.",
      },
    ],
  },

  media: {
    tag: "Content & Media",
    tagColor: "red",
    title: "YouTube Channels That Grow",
    description:
      "We don't just create content — we build channels with strategy, storytelling, and data-driven growth.",
    channels: [
      {
        emoji: "📼",
        title: "Prime Time 80's",
        description:
          "Nostalgia-driven content celebrating the best of 1980s culture, music, and entertainment.",
        tag: "Nostalgia & Entertainment",
      },
      {
        emoji: "📈",
        title: "Channel Growth Services",
        description:
          "We help creators and brands launch, optimise, and scale YouTube channels from scratch.",
        tag: "Strategy & Production",
      },
    ],
    makeMyThumb: {
      title: "🎨 MakeMyThumb",
      description:
        "Professional, human-edited YouTube thumbnails designed to maximise click-through rates. Because your content deserves a thumbnail that actually gets clicked.",
      ctaLabel: "Get thumbnails →",
      href: "https://makemythumb.com/",
    },
  },

  about: {
    tag: "About Us",
    tagColor: "blue",
    title: "Built on Decades of Experience",
    paragraphs: [
      "Nuca Systems is a specialised consulting firm with offices in Frankfurt, Dublin, and Vilnius — operating at the intersection of enterprise technology and digital media across Europe.",
      "Founded by a Managing Partner with 35+ years in infrastructure consulting and experience as Unix team lead at Atos, Nuca Systems brings deep expertise to every engagement.",
      "We target IT decision-makers at banks, insurance companies, and financial institutions who need infrastructure and security expertise they can trust — from consultants who've already operated in their world.",
      "On the media side, we run multiple YouTube channels and offer content creation services, drawing on real-world production experience and data-driven growth strategies.",
    ],
    highlights: [
      {
        icon: "🏦",
        title: "Banking & Financial Services",
        description: "Deep expertise in regulated financial infrastructure",
      },
      {
        icon: "👥",
        title: "Atos / Major System Integrators",
        description: "Unix team lead with enterprise-scale delivery",
      },
      {
        icon: "🌍",
        title: "European Presence",
        description: "Offices in Frankfurt, Dublin & Vilnius",
      },
      {
        icon: "🎯",
        title: "Dual Expertise",
        description: "Enterprise IT consulting + YouTube content creation",
      },
    ],
  },

  contact: {
    tag: "Get In Touch",
    tagColor: "blue",
    title: "Let's Talk About Your Needs",
    description:
      "Whether it's OpenText infrastructure or YouTube strategy — we'd love to hear from you.",
    methods: [
      {
        icon: "📧",
        title: "Email",
        content: "info@nucasystems.com",
        href: "mailto:info@nucasystems.com",
      },
      {
        icon: "📞",
        title: "Phone",
        content: "+353 86 399 4525",
        href: "tel:+353863994525",
      },
      {
        icon: "💼",
        title: "LinkedIn",
        content: "Connect with us on LinkedIn",
        href: "https://linkedin.com/company/nuca-systems",
      },
      {
        icon: "📍",
        title: "Locations",
        locations: [
          "Frankfurt am Main, Germany",
          "Dublin, Ireland",
          "Vilnius, Lithuania",
        ],
      },
    ],
    form: {
      title: "Send Us a Message",
      nameLabel: "Full Name",
      namePlaceholder: "Your name",
      emailLabel: "Email Address",
      emailPlaceholder: "your@email.com",
      companyLabel: "Company",
      companyPlaceholder: "Your company name",
      interestLabel: "I'm interested in...",
      interestPlaceholder: "Select a service",
      interestOptions: [
        { value: "", label: "Select a service" },
        { value: "ecm", label: "OpenText ECM Consulting" },
        { value: "security", label: "Security & IAM" },
        { value: "cloud", label: "Cloud & Infrastructure" },
        { value: "youtube", label: "YouTube & Media Services" },
        { value: "thumbnails", label: "MakeMyThumb — Thumbnail Design" },
        { value: "other", label: "Other / General Enquiry" },
      ],
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your project or challenge...",
      submitLabel: "Send Message →",
    },
  },

  footer: {
    tagline: "Enterprise IT Consulting & Media",
    links: [
      { href: "#services", label: "Services" },
      { href: "#it-consulting", label: "IT Consulting" },
      { href: "#media", label: "Media" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    copyright: "© 2026 Nuca Systems. All rights reserved.",
  },
} as const;
