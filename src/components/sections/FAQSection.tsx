"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "What areas in South Florida do you serve?",
    a: "I serve Fort Lauderdale, Weston, Pembroke Pines, South West Ranches, Miami-Dade, and all of Broward County. Whether you're looking for waterfront luxury in Fort Lauderdale or family-friendly neighborhoods in Weston, I know the local market inside and out.",
  },
  {
    q: "How do I get started with buying a home?",
    a: "It starts with a free, no-obligation consultation. We'll discuss your goals, budget, timeline, and dream-home wish list. From there, I'll create a personalized search strategy and guide you through every step — from showings to closing.",
  },
  {
    q: "What makes you different from other realtors in Fort Lauderdale?",
    a: "I combine the personal touch of a dedicated boutique agent with the global power of RE/MAX. I invest in professional photography and video for every listing, provide hands-on staging advice, and maintain exceptional communication throughout the process. Plus, I donate a portion of every commission to Dec My Room, a charity for hospitalized children.",
  },
  {
    q: "How do you determine the right listing price for my home?",
    a: "I conduct a thorough Comparative Market Analysis (CMA) that examines recent sales, current listings, market trends, and your property's unique features. My goal is to price your home competitively to attract strong offers quickly — not too high to sit on the market, not too low to leave money behind.",
  },
  {
    q: "Do you work with first-time home buyers?",
    a: "Absolutely! I love working with first-time buyers. The process can feel overwhelming, but I break it down into simple, manageable steps. I'll help you understand financing options, navigate inspections, and make confident decisions every step of the way.",
  },
  {
    q: "Can you help me find investment properties in South Florida?",
    a: "Yes — investment properties are one of my specialties. I analyze market data, identify high-ROI opportunities, and help investors build profitable portfolios across Broward County and Miami-Dade. Whether you're looking for rental income, fix-and-flip projects, or long-term appreciation, I've got you covered.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper bgColor="bg-bg-light">
      <SectionHeading
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        title="Everything You Need to Know"
      />
      <div className="max-w-[800px] mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm overflow-hidden ring-1 ring-black/[0.03]"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              aria-expanded={openIndex === i}
            >
              <span className="text-[17px] font-semibold text-text-primary pr-4">
                {faq.q}
              </span>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0"
              >
                <ChevronDown size={20} className="text-text-secondary" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <p className="px-5 pb-5 text-[15px] text-text-secondary leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
