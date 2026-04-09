"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
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
        <div className="max-w-[900px] mx-auto rounded-2xl shadow-2xl overflow-hidden aspect-video bg-gradient-to-br from-brand-blue via-brand-navy to-brand-blue flex items-center justify-center relative ring-1 ring-brand-gold/10">
          <motion.button
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
            aria-label="Play property video"
          >
            <Play className="text-white ml-1" size={36} fill="white" />
          </motion.button>
          <p className="absolute bottom-6 text-white/60 text-sm font-medium">
            Property Videos Coming Soon
          </p>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
