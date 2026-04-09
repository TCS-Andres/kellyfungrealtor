"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Waves, TreePine, Home, Fence, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const NEIGHBORHOODS = [
  {
    id: "fort-lauderdale",
    label: "Fort Lauderdale",
    icon: Waves,
    image: "/images/area-fort-lauderdale.jpg",
    description:
      "The Venice of America. Waterfront living, vibrant nightlife, and world-class dining — from luxury condos on the beach to charming single-family homes in Victoria Park.",
  },
  {
    id: "weston",
    label: "Weston",
    icon: TreePine,
    image: "/images/area-weston.jpg",
    description:
      "Family-friendly, safe, and beautifully planned. One of Broward County's most sought-after communities, with top-rated schools and lush green spaces.",
  },
  {
    id: "pembroke-pines",
    label: "Pembroke Pines",
    icon: Home,
    image: "/images/area-pembroke-pines.jpg",
    description:
      "Affordable luxury meets convenience. Modern homes, excellent schools, and easy access to everything South Florida has to offer.",
  },
  {
    id: "sw-ranches",
    label: "South West Ranches",
    icon: Fence,
    image: "/images/area-sw-ranches.jpg",
    description:
      "Where space meets serenity. Estate-style living with large lots, equestrian properties, and a peaceful rural feel — just minutes from the city.",
  },
  {
    id: "miami-dade",
    label: "Miami-Dade Area",
    icon: Building2,
    image: "/images/area-miami.jpg",
    description:
      "The gateway to international culture. From Brickell's skyline to Coral Gables' charm, diverse real estate options for every lifestyle and budget.",
  },
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function NeighborhoodCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % NEIGHBORHOODS.length) + NEIGHBORHOODS.length) %
    NEIGHBORHOODS.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff =
      (index - currentIndex + NEIGHBORHOODS.length) % NEIGHBORHOODS.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = NEIGHBORHOODS.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-7xl mx-auto md:p-8">
      <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[600px] lg:aspect-video border border-white/10">
        {/* Left: Labels */}
        <div className="w-full lg:w-[40%] min-h-[350px] md:min-h-[450px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:pl-16 bg-brand-blue">
          <div className="absolute inset-x-0 top-0 h-12 md:h-20 lg:h-16 bg-gradient-to-b from-brand-blue via-brand-blue/80 to-transparent z-40" />
          <div className="absolute inset-x-0 bottom-0 h-12 md:h-20 lg:h-16 bg-gradient-to-t from-brand-blue via-brand-blue/80 to-transparent z-40" />
          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {NEIGHBORHOODS.map((area, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(NEIGHBORHOODS.length / 2),
                NEIGHBORHOODS.length / 2,
                distance
              );

              const Icon = area.icon;

              return (
                <motion.div
                  key={area.id}
                  style={{
                    height: ITEM_HEIGHT,
                    width: "fit-content",
                  }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-4 px-6 md:px-10 lg:px-8 py-3.5 md:py-5 lg:py-4 rounded-full transition-all duration-700 text-left group border",
                      isActive
                        ? "bg-white text-brand-blue border-white z-10"
                        : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-colors duration-500",
                        isActive ? "text-brand-blue" : "text-white/40"
                      )}
                    >
                      <Icon size={18} strokeWidth={2} />
                    </div>

                    <span className="font-medium text-sm md:text-[15px] tracking-tight whitespace-nowrap">
                      {area.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: Image cards */}
        <div className="flex-1 min-h-[500px] md:min-h-[600px] lg:h-full relative bg-bg-alt flex items-center justify-center py-16 md:py-24 lg:py-16 px-6 md:px-12 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
          <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
            {NEIGHBORHOODS.map((area, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={area.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive
                      ? ("auto" as const)
                      : ("none" as const),
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 rounded-[2rem] md:rounded-[2.8rem] overflow-hidden border-4 md:border-8 border-white bg-white origin-center"
                >
                  <img
                    src={area.image}
                    alt={`${area.label} Florida real estate neighborhood`}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive
                        ? "grayscale-0 blur-0"
                        : "grayscale blur-[2px] brightness-75"
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-10 pt-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        <div className="bg-white text-brand-blue px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] w-fit shadow-lg mb-3 flex items-center gap-2">
                          <MapPin size={12} />
                          {area.label}
                        </div>
                        <p className="text-white font-normal text-lg md:text-xl leading-tight drop-shadow-md tracking-tight">
                          {area.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
