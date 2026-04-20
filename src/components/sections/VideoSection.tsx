"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { images } from "@/config/images";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

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
        <div className="max-w-[900px] mx-auto rounded-2xl shadow-2xl overflow-hidden aspect-video ring-1 ring-brand-gold/10 relative">
          {isPlaying ? (
            <iframe
              src="https://player.vimeo.com/video/952948531?h=593e19ef80&title=0&portrait=0&byline=0&badge=0&autoplay=1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Kelly Fung — Professional Property Showcase Video"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="group absolute inset-0 w-full h-full cursor-pointer"
              aria-label="Play property showcase video"
            >
              <Image
                src={images.listingAerial}
                alt="Aerial view of a luxury listing showcased by Kelly Fung"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20 transition-opacity duration-300 group-hover:from-black/60" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 md:w-10 md:h-10 text-brand-gold ml-1"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
