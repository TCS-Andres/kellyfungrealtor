"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const rows = [
  {
    title: "Your Property Deserves to Shine",
    body: "High-quality pictures and videos are essential for selling a home. They create a powerful first impression, attract more buyers online, and showcase your property's best features. I invest in professional photography and cinematic video for every listing — because your home deserves marketing that matches its value.",
    gradient: "from-brand-blue/20 to-brand-gold/20",
    alt: "Professional real estate photography services in Fort Lauderdale",
  },
  {
    title: "Staged to Sell — Faster & Higher",
    body: "A well-staged home helps buyers visualize themselves living there. I provide hands-on staging guidance to highlight your property's potential, maximize its appeal, and create an inviting atmosphere that leads to faster sales and higher offers.",
    gradient: "from-brand-gold/20 to-brand-red/10",
    alt: "Home staging services for South Florida real estate",
  },
  {
    title: "You'll Always Know What's Happening",
    body: "Real estate moves fast, and you deserve an agent who keeps you in the loop. I pride myself on exceptional communication — listening attentively, explaining clearly, and being available when you need me. You'll never feel left in the dark.",
    gradient: "from-success/10 to-brand-blue/15",
    alt: "Real estate agent providing exceptional client communication",
  },
  {
    title: "Fierce Negotiation, Better Results",
    body: "My negotiation skills combine strategic thinking with a deep understanding of both parties' needs. I navigate deals with finesse, maintain composure under pressure, and consistently find win-win solutions that protect your interests.",
    gradient: "from-brand-red/10 to-brand-gold/20",
    alt: "Expert real estate negotiation in Broward County",
  },
  {
    title: "Backed by the Power of RE/MAX",
    body: "As a RE/MAX agent, I bring you access to a global network, industry-leading technology, and a brand that has been voted the Most Trusted in Real Estate. That means more exposure for your listing and more resources for your search.",
    gradient: "from-brand-blue/15 to-brand-blue/5",
    alt: "RE/MAX global real estate network and resources",
  },
  {
    title: "An Agent Who Gives Back",
    body: "When I began my real estate career, I partnered with Dec My Room — an incredible organization that creates personalized healing spaces for long-term pediatric patients. I donate a portion of every commission to this cause and volunteer alongside my kids to decorate rooms and bring joy to children in need.",
    gradient: "from-brand-gold/15 to-success/10",
    alt: "Kelly Fung partnering with Dec My Room charity for pediatric patients",
  },
];

export default function WhyKellySection() {
  return (
    <SectionWrapper bgColor="bg-bg-alt">
      <SectionHeading
        eyebrow="WHY CHOOSE KELLY"
        title="The Kelly Fung Difference"
      />
      <div className="space-y-12 md:space-y-16">
        {rows.map((row, i) => {
          const imgLeft = i % 2 === 0;
          return (
            <div
              key={row.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
            >
              {/* Image placeholder */}
              <AnimatedSection
                direction={imgLeft ? "left" : "right"}
                className={imgLeft ? "" : "lg:order-2"}
              >
                <div
                  className={`rounded-xl shadow-lg overflow-hidden aspect-[4/3] bg-gradient-to-br ${row.gradient} flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]`}
                >
                  <p className="text-text-secondary/40 text-sm font-medium px-8 text-center">
                    {row.alt}
                  </p>
                </div>
              </AnimatedSection>

              {/* Text */}
              <AnimatedSection
                direction={imgLeft ? "right" : "left"}
                delay={0.2}
                className={imgLeft ? "" : "lg:order-1"}
              >
                <h3
                  className="text-2xl md:text-[28px] font-semibold text-text-primary mb-4"
                >
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
