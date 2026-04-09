"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { images } from "@/config/images";

const credentials = [
  "Licensed Florida Realtor — #SL3549695",
  "RE/MAX Consultants Realty I — Global Network & Resources",
  "Specializing in Luxury Living, Investment & Relocation",
  "Featured in Bold Journey Magazine",
  "Proud charity partner with Dec My Room",
];

export default function GuideSection() {
  return (
    <SectionWrapper bgColor="bg-bg-alt">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <AnimatedSection direction="left" className="lg:col-span-2">
          <div className="relative max-w-[400px] mx-auto lg:mx-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-brand-gold/10">
              <Image
                src={images.kellyPortrait}
                alt="Kelly Fung, Fort Lauderdale RE/MAX Real Estate Agent"
                width={500}
                height={667}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-4 border-l-4 border-brand-gold rounded-bl-2xl" />
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-4 border-r-4 border-brand-gold/30 rounded-tr-2xl" />
          </div>
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection direction="right" delay={0.3} className="lg:col-span-3">
          <SectionHeading
            eyebrow="MEET YOUR GUIDE"
            title="Hi, I'm Kelly Fung"
            alignment="left"
          />
          <div className="space-y-4 text-base text-text-secondary leading-relaxed -mt-4">
            <p>
              After spending five years as a dedicated stay-at-home mom, I brought that
              same level of care, attention to detail, and commitment into the world of
              real estate. As a RE/MAX agent serving Fort Lauderdale and all of Broward
              County, I don&apos;t just help you buy or sell a property — I guide you through
              one of life&apos;s biggest decisions with patience, honesty, and relentless
              advocacy.
            </p>
            <p>
              Whether you&apos;re a first-time buyer feeling overwhelmed, a seller who wants
              top dollar, or an investor looking for your next opportunity, I&apos;ve been in
              your shoes. I understand the stress, the questions, and the excitement. My
              job is to make sure you feel confident and supported from our first
              conversation to closing day and beyond.
            </p>
          </div>

          <ul className="mt-6 space-y-3">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <Check className="text-brand-gold" size={12} />
                </div>
                <span className="text-sm font-medium text-text-primary">{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
