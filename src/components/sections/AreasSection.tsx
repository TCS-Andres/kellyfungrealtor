"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren, { staggerItem } from "@/components/ui/StaggerChildren";
import { images } from "@/config/images";

const areas = [
  {
    name: "Fort Lauderdale",
    image: images.areaFortLauderdale,
    body: "The Venice of America. Waterfront living, vibrant nightlife, and world-class dining — from luxury condos on the beach to charming single-family homes in Victoria Park.",
  },
  {
    name: "Weston",
    image: images.areaWeston,
    body: "Family-friendly, safe, and beautifully planned. One of Broward County's most sought-after communities, with top-rated schools and lush green spaces.",
  },
  {
    name: "Pembroke Pines",
    image: images.areaPembrokePines,
    body: "Affordable luxury meets convenience. Modern homes, excellent schools, and easy access to everything South Florida has to offer.",
  },
  {
    name: "South West Ranches",
    image: images.areaSWRanches,
    body: "Where space meets serenity. Estate-style living with large lots, equestrian properties, and a peaceful rural feel — just minutes from the city.",
  },
  {
    name: "Miami-Dade Area",
    image: images.areaMiami,
    body: "The gateway to international culture. From Brickell's skyline to Coral Gables' charm, diverse real estate options for every lifestyle and budget.",
  },
];

export default function AreasSection() {
  return (
    <section id="areas" className="bg-brand-blue py-12 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeading
          eyebrow="SOUTH FLORIDA EXPERTISE"
          title="Neighborhoods I Know & Love"
          light
        />
        <StaggerChildren
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {areas.map((area) => (
            <motion.div
              key={area.name}
              variants={staggerItem}
              className="rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-48 md:h-56">
                <Image
                  src={area.image}
                  alt={`${area.name} Florida real estate neighborhood`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold text-text-primary mb-2">
                  {area.name}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {area.body}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
