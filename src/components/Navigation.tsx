"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { brand } from "@/config/brand";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Areas", href: "#areas" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-5 md:px-8 py-3">
        {/* Logo */}
        <a href="#home" className="block">
          <Image
            src="/images/logo-kelly-fung.png"
            alt="Kelly Fung Realtor"
            width={140}
            height={70}
            className={`h-12 md:h-14 w-auto transition-all duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-colors duration-200 hover:text-brand-blue ${
                scrolled ? "text-text-primary" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={brand.phoneLink}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              scrolled ? "text-text-primary" : "text-white"
            }`}
          >
            <Phone size={14} />
            {brand.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-brand-blue to-brand-navy px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-brand-blue/20"
          >
            Contact Kelly Today
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-text-primary" : "text-white"
          }`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 top-0 z-40 bg-brand-blue/98 backdrop-blur-md flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            {/* Logo in mobile menu */}
            <Image
              src="/images/logo-kelly-fung.png"
              alt="Kelly Fung Realtor"
              width={160}
              height={80}
              className="h-16 w-auto brightness-0 invert mb-4"
            />
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="text-2xl font-semibold text-white"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="flex flex-col items-center gap-4 mt-4"
            >
              <a
                href={brand.phoneLink}
                className="flex items-center gap-2 text-lg text-white font-medium"
              >
                <Phone size={18} />
                {brand.phone}
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-white px-6 py-3 text-brand-blue font-bold transition-all hover:scale-[1.03]"
              >
                Contact Kelly Today
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
