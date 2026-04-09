"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function VideoSection() {
  return (
    <SectionWrapper bgColor="bg-bg-light">
      <SectionHeading
        eyebrow="SEE THE DIFFERENCE"
        title="Your Property, Professionally Showcased"
      />
      <AnimatedSection>
        <p className="text-center text-base text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10 -mt-4">
          Modern home sale videos offer immersive experiences, showcasing property
          features with cinematic flair. My listings get the spotlight they deserve —
          with professional video that drives engagement and expedites the sales
          process.
        </p>
        <div className="max-w-[900px] mx-auto rounded-2xl shadow-2xl overflow-hidden aspect-video ring-1 ring-brand-gold/10">
          <iframe
            src="https://player.vimeo.com/video/952948531?h=593e19ef80&title=0&portrait=0&byline=0&badge=0"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Kelly Fung — Professional Property Showcase Video"
            loading="lazy"
          />
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
