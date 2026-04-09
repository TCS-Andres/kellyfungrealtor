"use client";

import { motion } from "framer-motion";
import { Key, Home, TrendingUp, Diamond, Compass, KeyRound } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren, { staggerItem } from "@/components/ui/StaggerChildren";

const services = [
  {
    icon: Key,
    title: "Buying a Home",
    body: "Whether it's your first home or your forever home, I'll help you navigate listings, schedule showings, and negotiate the best price — all while keeping the process stress-free.",
  },
  {
    icon: Home,
    title: "Selling Your Property",
    body: "I'll price your home strategically, market it with professional photography and video, stage it to impress, and negotiate aggressively to get you top dollar.",
  },
  {
    icon: TrendingUp,
    title: "Investment Properties",
    body: "Looking for your next investment in South Florida? I analyze market trends, identify high-ROI opportunities, and help you build a profitable real estate portfolio.",
  },
  {
    icon: Diamond,
    title: "Luxury Living",
    body: "Fort Lauderdale's luxury market demands a specialized approach. I provide white-glove service for high-end buyers and sellers, with discretion and attention to every detail.",
  },
  {
    icon: Compass,
    title: "Relocation Services",
    body: "Moving to South Florida? I'll help you find the right neighborhood, school district, and community to match your lifestyle — even before you arrive.",
  },
  {
    icon: KeyRound,
    title: "Rentals",
    body: "Whether you're looking for a seasonal rental or a long-term lease, I'll connect you with the right property at the right price across Broward County.",
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" bgColor="bg-white">
      <SectionHeading
        eyebrow="WHAT I DO FOR YOU"
        title="Comprehensive Real Estate Services"
        subtitle="From your first showing to closing day and beyond — I've got you covered."
      />
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={staggerItem}
            className="group bg-white rounded-2xl border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:border-brand-gold/20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-navy to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center mb-5">
              <service.icon className="text-brand-gold" size={22} />
            </div>
            <h4 className="text-xl font-semibold text-text-primary mb-3">
              {service.title}
            </h4>
            <p className="text-[15px] text-text-secondary leading-relaxed">
              {service.body}
            </p>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
