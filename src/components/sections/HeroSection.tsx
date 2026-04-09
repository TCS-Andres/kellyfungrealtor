"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { images } from "@/config/images";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const items = [
    { delay: 0.3, content: "eyebrow" },
    { delay: 0.5, content: "h1" },
    { delay: 0.7, content: "subtitle" },
    { delay: 0.9, content: "cta" },
    { delay: 1.1, content: "badges" },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen min-h-[600px] flex items-end justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src={images.heroBg}
          alt="Aerial view of Fort Lauderdale Florida waterfront luxury homes at golden hour"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-8 pb-16 md:pb-24 text-center">
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: items[0].delay, duration: 0.7, ease: "easeOut" }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4"
        >
          RE/MAX CONSULTANTS REALTY I — FORT LAUDERDALE, FL
        </motion.p>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: items[1].delay, duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-[56px] font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Your Trusted Fort Lauderdale
          <br className="hidden md:block" /> Real Estate Expert
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: items[2].delay, duration: 0.7, ease: "easeOut" }}
          className="text-base md:text-lg text-white/90 max-w-[700px] mx-auto mb-8 leading-relaxed"
        >
          Whether you&apos;re buying your dream home, selling for top dollar, or
          investing in South Florida&apos;s hottest market — Kelly Fung is your guide
          every step of the way.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: items[3].delay, duration: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#contact"
            className="rounded-full bg-white px-8 py-3.5 text-brand-blue font-bold transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
          >
            Contact Kelly Today
          </a>
          <a
            href="#services"
            className="rounded-full border-2 border-white px-8 py-3.5 text-white font-bold transition-all duration-200 hover:bg-white/10"
          >
            Explore My Services
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: items[4].delay, duration: 0.7, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/80 text-sm"
        >
          <Image
            src={images.remaxLogo}
            alt="RE/MAX logo"
            width={40}
            height={20}
            className="brightness-0 invert opacity-80"
          />
          <span className="hidden md:block w-px h-4 bg-white/40" />
          <span>4+ Years Experience</span>
          <span className="hidden md:block w-px h-4 bg-white/40" />
          <span>Broward County Specialist</span>
          <span className="hidden md:block w-px h-4 bg-white/40" />
          <span>License #SL3549695</span>
        </motion.div>
      </div>
    </section>
  );
}
