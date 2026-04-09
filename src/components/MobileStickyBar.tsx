"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { brand } from "@/config/brand";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.8;
      // Hide when near the bottom of the page (contact/footer area)
      const nearBottom =
        window.scrollY + window.innerHeight >
        document.documentElement.scrollHeight - 200;
      setVisible(pastHero && !nearBottom);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-gradient-to-r from-brand-blue/95 to-brand-navy/95 backdrop-blur-md px-4 pt-3 border-t border-white/10"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="flex gap-3">
            <a
              href={brand.phoneLink}
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-brand-gold py-2.5 text-brand-blue font-bold text-sm"
            >
              <Phone size={16} />
              Call Kelly
            </a>
            <a
              href="#contact"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 py-2.5 text-white font-bold text-sm"
            >
              <Mail size={16} />
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
