import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import GuideSection from "@/components/sections/GuideSection";
import PlanSection from "@/components/sections/PlanSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyKellySection from "@/components/sections/WhyKellySection";
import AreasSection from "@/components/sections/AreasSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VideoSection from "@/components/sections/VideoSection";
import IDXSearchSection from "@/components/sections/IDXSearchSection";
import GivingBackSection from "@/components/sections/GivingBackSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navigation />
      <main id="main">
        <HeroSection />
        <ProblemSection />
        <GuideSection />
        <PlanSection />
        <ServicesSection />
        <WhyKellySection />
        <AreasSection />
        <StatsSection />
        <TestimonialsSection />
        <VideoSection />
        <IDXSearchSection />
        <GivingBackSection />
        <FAQSection />
        <ContactSection />
      </main>
      <PreFooterCTA />
      <Footer />
      <MobileStickyBar />
    </>
  );
}
