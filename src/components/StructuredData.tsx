export default function StructuredData() {
  const realEstateAgent = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Kelly Fung",
    image: "https://kellyfungrealtor.com/images/kelly-headshot.jpg",
    telephone: "+1-727-488-9582",
    url: "https://kellyfungrealtor.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1625 SE 17th St Causeway",
      addressLocality: "Fort Lauderdale",
      addressRegion: "FL",
      postalCode: "33316",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.1003,
      longitude: -80.1373,
    },
    areaServed: [
      { "@type": "City", name: "Fort Lauderdale, FL" },
      { "@type": "City", name: "Weston, FL" },
      { "@type": "City", name: "Pembroke Pines, FL" },
      { "@type": "City", name: "South West Ranches, FL" },
      { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" },
      { "@type": "AdministrativeArea", name: "Broward County, FL" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: [
      "https://www.instagram.com/kellyfung.soldit/",
      "https://www.remax.com/real-estate-agents/kelly-fung-fort-lauderdale-fl/102378486",
    ],
    memberOf: {
      "@type": "Organization",
      name: "RE/MAX Consultants Realty I",
    },
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kelly Fung",
    jobTitle: "Real Estate Agent",
    worksFor: { "@type": "Organization", name: "RE/MAX Consultants Realty I" },
    url: "https://kellyfungrealtor.com",
    telephone: "+1-727-488-9582",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fort Lauderdale",
      addressRegion: "FL",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What areas in South Florida do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I serve Fort Lauderdale, Weston, Pembroke Pines, South West Ranches, Miami-Dade, and all of Broward County.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with buying a home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It starts with a free, no-obligation consultation. We'll discuss your goals, budget, timeline, and dream-home wish list.",
        },
      },
      {
        "@type": "Question",
        name: "What makes you different from other realtors in Fort Lauderdale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I combine the personal touch of a dedicated boutique agent with the global power of RE/MAX, professional photography, staging advice, and exceptional communication.",
        },
      },
      {
        "@type": "Question",
        name: "How do you determine the right listing price for my home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I conduct a thorough Comparative Market Analysis (CMA) examining recent sales, current listings, market trends, and your property's unique features.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with first-time home buyers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! I love working with first-time buyers and break the process down into simple, manageable steps.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help me find investment properties in South Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — investment properties are one of my specialties. I analyze market data, identify high-ROI opportunities, and help investors build profitable portfolios.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgent) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
