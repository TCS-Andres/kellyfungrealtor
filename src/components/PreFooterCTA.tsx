"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { brand } from "@/config/brand";

export default function PreFooterCTA() {
  return (
    <section className="relative bg-gradient-to-r from-brand-blue via-brand-navy to-brand-blue py-16 md:py-20 overflow-hidden">
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <AnimatedSection>
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2
            className="text-3xl md:text-[42px] font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Make Your Move in South Florida?
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
            Whether you&apos;re buying your first home, selling your property, or
            investing — Kelly is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-brand-gold px-8 py-3.5 text-brand-blue font-bold transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-brand-gold/20"
            >
              Contact Kelly Today
            </a>
            <a
              href={brand.phoneLink}
              className="rounded-full border-2 border-white/30 px-8 py-3.5 text-white font-bold transition-all duration-200 hover:bg-white/10 hover:border-white/50"
            >
              Call {brand.phone}
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
