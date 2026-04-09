"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const rows = [
  {
    title: "Your Property Deserves to Shine",
    body: "High-quality pictures and videos are essential for selling a home. They create a powerful first impression, attract more buyers online, and showcase your property's best features. I invest in professional photography and cinematic video for every listing — because your home deserves marketing that matches its value.",
    image: "/images/listing-exterior.jpg",
    alt: "Professional real estate photography of a South Florida home listed by Kelly Fung",
  },
  {
    title: "Staged to Sell — Faster & Higher",
    body: "A well-staged home helps buyers visualize themselves living there. I provide hands-on staging guidance to highlight your property's potential, maximize its appeal, and create an inviting atmosphere that leads to faster sales and higher offers.",
    image: "/images/gallery-pool-interior.jpg",
    alt: "Beautifully staged home interior in South Florida listed by Kelly Fung",
  },
  {
    title: "You'll Always Know What's Happening",
    body: "Real estate moves fast, and you deserve an agent who keeps you in the loop. I pride myself on exceptional communication — listening attentively, explaining clearly, and being available when you need me. You'll never feel left in the dark.",
    image: "/images/kelly-portrait.jpg",
    alt: "Kelly Fung, dedicated Fort Lauderdale real estate agent providing exceptional communication",
  },
  {
    title: "Fierce Negotiation, Better Results",
    body: "My negotiation skills combine strategic thinking with a deep understanding of both parties' needs. I navigate deals with finesse, maintain composure under pressure, and consistently find win-win solutions that protect your interests.",
    image: "/images/listing-aerial.jpg",
    alt: "Aerial view of South Florida residential community with pool and lake",
  },
  {
    title: "Backed by the Power of RE/MAX",
    body: "As a RE/MAX agent, I bring you access to a global network, industry-leading technology, and a brand that has been voted the Most Trusted in Real Estate. That means more exposure for your listing and more resources for your search.",
    image: "/images/remax-badge.jpg",
    alt: "RE/MAX hot air balloon — global real estate network backing Kelly Fung",
  },
  {
    title: "An Agent Who Gives Back",
    body: "When I began my real estate career, I partnered with Dec My Room — an incredible organization that creates personalized healing spaces for long-term pediatric patients. I donate a portion of every commission to this cause and volunteer alongside my kids to decorate rooms and bring joy to children in need.",
    image: "/images/gallery-dec-room-kids.jpg",
    alt: "Decorated healing space for pediatric patient by Dec My Room and Kelly Fung",
  },
];

export default function WhyKellySection() {
  return (
    <SectionWrapper bgColor="bg-bg-light">
      <SectionHeading
        eyebrow="WHY CHOOSE KELLY"
        title="The Kelly Fung Difference"
      />
      <div className="space-y-16 md:space-y-24">
        {rows.map((row, i) => {
          const imgLeft = i % 2 === 0;
          return (
            <div
              key={row.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Image */}
              <AnimatedSection
                direction={imgLeft ? "left" : "right"}
                className={imgLeft ? "" : "lg:order-2"}
              >
                <div className="rounded-2xl shadow-xl overflow-hidden aspect-[4/3] relative transition-transform duration-300 hover:scale-[1.02] ring-1 ring-black/5">
                  <Image
                    src={row.image}
                    alt={row.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </AnimatedSection>

              {/* Text */}
              <AnimatedSection
                direction={imgLeft ? "right" : "left"}
                delay={0.2}
                className={imgLeft ? "" : "lg:order-1"}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="block w-8 h-px bg-brand-gold" />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-gold">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-2xl md:text-[28px] font-semibold text-text-primary mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  {row.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {row.body}
                </p>
              </AnimatedSection>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
