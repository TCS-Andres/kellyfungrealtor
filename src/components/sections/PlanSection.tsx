"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren, { staggerItem } from "@/components/ui/StaggerChildren";

const steps = [
  {
    number: "01",
    title: "Schedule a Free Consultation",
    body: "Tell me about your goals — whether you're buying, selling, or investing. I'll listen carefully and create a personalized plan tailored to your timeline, budget, and vision.",
  },
  {
    number: "02",
    title: "Get an Expert Strategy",
    body: "I'll provide a detailed market analysis, neighborhood insights, and a step-by-step strategy. For sellers, that includes professional photography, staging advice, and a custom marketing plan.",
  },
  {
    number: "03",
    title: "Achieve Your Real Estate Goals",
    body: "With expert negotiation, constant communication, and meticulous attention to every detail, we'll close the deal and celebrate your success together.",
  },
];

export default function PlanSection() {
  return (
    <SectionWrapper bgColor="bg-bg-light">
      <SectionHeading
        eyebrow="HOW IT WORKS"
        title="Your Path to Real Estate Success"
        subtitle="Working with Kelly is simple. Here's how we'll get you where you want to be."
      />
      <StaggerChildren
        staggerDelay={0.2}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative"
      >
        {/* Connector line (desktop only) */}
        <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px border-t-2 border-dashed border-brand-gold/30" />

        {steps.map((step) => (
          <motion.div
            key={step.number}
            variants={staggerItem}
            className="text-center relative"
          >
            <span
              className="text-5xl font-bold text-brand-gold mb-4 block"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {step.number}
            </span>
            <h4 className="text-xl font-semibold text-text-primary mb-3">
              {step.title}
            </h4>
            <p className="text-base text-text-secondary leading-relaxed max-w-xs mx-auto">
              {step.body}
            </p>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
