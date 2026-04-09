"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NeighborhoodCarousel from "@/components/ui/NeighborhoodCarousel";

export default function AreasSection() {
  return (
    <section id="areas" className="bg-brand-blue py-12 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeading
          eyebrow="SOUTH FLORIDA EXPERTISE"
          title="Neighborhoods I Know & Love"
          light
        />
      </div>
      <AnimatedSection>
        <NeighborhoodCarousel />
      </AnimatedSection>
    </section>
  );
}
