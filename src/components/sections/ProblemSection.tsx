"use client";

import { motion } from "framer-motion";
import { Search, DollarSign, TrendingUp } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren, { staggerItem } from "@/components/ui/StaggerChildren";

const problems = [
  {
    icon: Search,
    title: "Finding the Right Home Feels Impossible",
    body: "You've been searching online for weeks. Listings come and go before you can even schedule a showing. You're not sure if you're looking in the right neighborhoods or getting the best value for your budget.",
  },
  {
    icon: DollarSign,
    title: "Worried You'll Leave Money on the Table",
    body: "You know your home is worth something — but is your agent pricing it right? Are the photos doing it justice? You need someone who'll negotiate fiercely and market your property to the right buyers.",
  },
  {
    icon: TrendingUp,
    title: "Struggling to Find Profitable Opportunities",
    body: "South Florida's market moves fast. Without insider knowledge and a strategic approach, you could miss the best deals or end up with a property that doesn't deliver returns.",
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper id="about" bgColor="bg-bg-light">
      <SectionHeading
        eyebrow="NAVIGATING REAL ESTATE SHOULDN'T BE STRESSFUL"
        title="The Challenges You're Facing"
        subtitle="Buying or selling a home is one of the biggest decisions of your life. Without the right agent, it can feel overwhelming, confusing, and risky."
      />
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {problems.map((problem) => (
          <motion.div
            key={problem.title}
            variants={staggerItem}
            className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center mb-5">
              <problem.icon className="text-brand-blue" size={28} />
            </div>
            <h4 className="text-xl font-semibold text-text-primary mb-3">
              {problem.title}
            </h4>
            <p className="text-base text-text-secondary leading-relaxed">
              {problem.body}
            </p>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
