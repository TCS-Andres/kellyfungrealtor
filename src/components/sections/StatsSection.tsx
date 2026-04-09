"use client";

import CounterAnimation from "@/components/ui/CounterAnimation";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { target: 4, suffix: "+", label: "Years of Experience" },
  { target: 100, suffix: "+", label: "Happy Clients Served" },
  { target: 5, suffix: "", label: "Service Areas Across South Florida" },
  { target: 50, prefix: "$", suffix: "M+", label: "In Real Estate Transactions" },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-20 bg-bg-alt overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1000px] px-5 md:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-4xl md:text-5xl font-bold text-brand-blue mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <CounterAnimation
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-sm md:text-base font-medium text-text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="block w-12 h-px bg-brand-gold/40" />
            <p className="text-center text-sm text-text-secondary italic">
              Voted the Most Trusted Agents in Real Estate — RE/MAX
            </p>
            <span className="block w-12 h-px bg-brand-gold/40" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
