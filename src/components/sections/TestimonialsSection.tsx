"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SilkBackground from "@/components/ui/SilkBackground";

// TODO: Replace these sample testimonials with actual client reviews from Kelly's website
const testimonials = [
  {
    quote:
      "Kelly made our first home purchase feel effortless. She was patient, knowledgeable, and always available to answer our questions. We couldn't have done it without her!",
    name: "The Martinez Family",
    location: "Fort Lauderdale, FL",
  },
  {
    quote:
      "We sold our home in Weston in just two weeks — above asking price! Kelly's staging advice and professional photography made all the difference. She's the real deal.",
    name: "David & Sarah Thompson",
    location: "Weston, FL",
  },
  {
    quote:
      "As an investor, I need an agent who understands the numbers and moves fast. Kelly consistently finds me properties with strong ROI potential. She's become my go-to agent for every deal.",
    name: "Michael Chen",
    location: "Pembroke Pines, FL",
  },
  {
    quote:
      "Kelly helped us relocate from New York to Fort Lauderdale, and she made what could have been an incredibly stressful process smooth and even enjoyable. She knew every neighborhood inside and out.",
    name: "The Andersons",
    location: "Fort Lauderdale, FL",
  },
  {
    quote:
      "What sets Kelly apart is that she genuinely cares. She's not just trying to close a deal — she's trying to find you the right home. That makes all the difference.",
    name: "Lisa Rodriguez",
    location: "South West Ranches, FL",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="relative py-12 md:py-20 overflow-hidden">
      <SilkBackground colorR={20} colorG={30} colorB={50} speed={0.01} noiseIntensity={0.6} />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-blue/50 via-transparent to-brand-blue/50" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeading
          eyebrow="WHAT MY CLIENTS SAY"
          title="Real Stories, Real Results"
          light
        />
        <div
          className="relative max-w-[800px] mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="min-h-[220px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-center w-full"
              >
                <span
                  className="text-6xl md:text-7xl text-brand-gold/40 block mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  &ldquo;
                </span>
                <p className="text-lg md:text-xl italic text-white/90 leading-relaxed mb-6 -mt-8">
                  {testimonials[current].quote}
                </p>
                <p className="font-semibold text-base text-brand-gold">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-white/60">
                  {testimonials[current].location}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-brand-gold hover:text-brand-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-brand-gold" : "bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-brand-gold hover:text-brand-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
