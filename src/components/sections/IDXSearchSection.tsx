"use client";

import { Search } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { brand } from "@/config/brand";

export default function IDXSearchSection() {
  return (
    <SectionWrapper id="search" bgColor="bg-bg-alt">
      <SectionHeading
        eyebrow="FIND YOUR DREAM HOME"
        title="Search South Florida Properties"
        subtitle="Browse the latest listings across Fort Lauderdale, Weston, Pembroke Pines, and all of Broward County. Your dream home is just a search away."
      />
      <AnimatedSection>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-[900px] mx-auto">
          {/* TODO: Integrate actual IDX/MLS search when ready */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-text-primary mb-1">
                Location
              </label>
              <select
                id="location"
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm bg-bg-light"
              >
                <option>All Areas</option>
                <option>Fort Lauderdale</option>
                <option>Weston</option>
                <option>Pembroke Pines</option>
                <option>South West Ranches</option>
                <option>Miami-Dade</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-text-primary mb-1">
                Price Range
              </label>
              <select
                id="price"
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm bg-bg-light"
              >
                <option>Any Price</option>
                <option>$100K–$300K</option>
                <option>$300K–$500K</option>
                <option>$500K–$750K</option>
                <option>$750K–$1M</option>
                <option>$1M+</option>
              </select>
            </div>
            <div>
              <label htmlFor="beds" className="block text-sm font-medium text-text-primary mb-1">
                Bedrooms
              </label>
              <select
                id="beds"
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm bg-bg-light"
              >
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
              </select>
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-text-primary mb-1">
                Property Type
              </label>
              <select
                id="type"
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm bg-bg-light"
              >
                <option>All Types</option>
                <option>Single Family</option>
                <option>Condo</option>
                <option>Townhouse</option>
                <option>Multi-Family</option>
                <option>Land</option>
              </select>
            </div>
          </div>
          <a
            href={brand.remaxProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-lg bg-brand-blue px-6 py-3 text-white font-bold transition-all duration-200 hover:scale-[1.01] hover:shadow-lg"
          >
            <Search size={18} />
            Search Listings
          </a>
          <p className="text-center text-xs text-text-secondary mt-3">
            Powered by RE/MAX — Full MLS search coming soon
          </p>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
