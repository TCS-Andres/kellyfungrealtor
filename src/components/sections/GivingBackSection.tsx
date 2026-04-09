"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function GivingBackSection() {
  return (
    <SectionWrapper bgColor="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Photos */}
        <AnimatedSection direction="left">
          <div className="grid gap-4">
            <div className="rounded-xl overflow-hidden shadow-md aspect-[4/3] bg-gradient-to-br from-brand-gold/15 to-success/10 flex items-center justify-center">
              <p className="text-text-secondary/40 text-sm font-medium px-8 text-center">
                Dec My Room charity photo — Kelly volunteering with children
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-[4/3] bg-gradient-to-br from-success/10 to-brand-blue/10 flex items-center justify-center">
              <p className="text-text-secondary/40 text-sm font-medium px-8 text-center">
                Dec My Room — Decorated healing space for pediatric patients
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection direction="right" delay={0.2}>
          <SectionHeading
            eyebrow="GIVING BACK"
            title="Making a Difference Beyond Real Estate"
            alignment="left"
          />
          <div className="space-y-4 text-base text-text-secondary leading-relaxed -mt-4">
            <p>
              When I started my real estate career, I knew I wanted to use it as a
              platform for good. That&apos;s why I partnered with{" "}
              <strong className="text-text-primary">Dec My Room</strong>, an incredible
              organization that creates personalized healing spaces for children in
              long-term hospital care.
            </p>
            <p>
              I donate a portion of every commission to this cause, and my kids and I
              volunteer together to decorate rooms and bring smiles to young patients.
              It&apos;s a reminder that real estate isn&apos;t just about transactions — it&apos;s
              about building a community and making a difference in people&apos;s lives.
            </p>
          </div>
          <a
            href="https://www.decmyroom.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-brand-blue font-semibold hover:underline transition-all"
          >
            Learn More About Dec My Room &rarr;
          </a>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
