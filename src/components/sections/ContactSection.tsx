"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons/SocialIcons";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import SilkBackground from "@/components/ui/SilkBackground";
import { brand } from "@/config/brand";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // TODO: Replace with Formspree endpoint — https://formspree.io/f/YOUR_FORM_ID
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-12 md:py-20 overflow-hidden">
      <SilkBackground colorR={18} colorG={28} colorB={48} speed={0.012} />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-blue/60 via-brand-blue/20 to-brand-blue/60" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 md:px-8">
        <SectionHeading
          eyebrow="LET'S CONNECT"
          title="Ready to Start Your Real Estate Journey?"
          subtitle="Whether you have a question, need a home valuation, or you're ready to make your move — I'm here for you."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left: Contact Info */}
          <AnimatedSection>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 ring-1 ring-brand-gold/10">
              <h3 className="text-2xl font-semibold text-text-primary mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Get in Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/5 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="text-brand-gold" size={16} />
                  </div>
                  <span className="text-sm text-text-secondary">{brand.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/5 flex items-center justify-center shrink-0">
                    <Phone className="text-brand-gold" size={16} />
                  </div>
                  <a
                    href={brand.phoneLink}
                    className="text-sm text-text-secondary hover:text-brand-blue transition-colors"
                  >
                    {brand.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/5 flex items-center justify-center shrink-0">
                    <Clock className="text-brand-gold" size={16} />
                  </div>
                  <span className="text-sm text-text-secondary">{brand.hours}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/5 flex items-center justify-center shrink-0">
                    <InstagramIcon className="text-brand-gold" size={16} />
                  </div>
                  <a
                    href={brand.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-brand-blue transition-colors"
                  >
                    {brand.instagram}
                  </a>
                </li>
              </ul>

              <div className="mt-6 rounded-xl overflow-hidden ring-1 ring-black/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.0!2d-80.1373!3d26.1003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA2JzAxLjEiTiA4MMKwMDgnMTQuMyJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kelly Fung RE/MAX Office Location - Fort Lauderdale"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Contact Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 ring-1 ring-brand-gold/10">
              <h3 className="text-2xl font-semibold text-text-primary mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Send Me a Message
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="text-success mb-4" size={48} />
                  <p className="text-lg font-semibold text-text-primary mb-2">
                    Thank you!
                  </p>
                  <p className="text-sm text-text-secondary">
                    I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name", { required: true })}
                      className={`w-full rounded-lg border px-3 py-2.5 text-sm bg-bg-light focus:outline-none focus:ring-2 focus:ring-brand-gold/30 ${
                        errors.name ? "border-brand-red" : "border-gray-200"
                      }`}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", { required: true })}
                      className={`w-full rounded-lg border px-3 py-2.5 text-sm bg-bg-light focus:outline-none focus:ring-2 focus:ring-brand-gold/30 ${
                        errors.email ? "border-brand-red" : "border-gray-200"
                      }`}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone-input" className="block text-sm font-medium text-text-primary mb-1">
                      Phone
                    </label>
                    <input
                      id="phone-input"
                      type="tel"
                      {...register("phone")}
                      className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm bg-bg-light focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      {...register("subject", { required: true })}
                      className={`w-full rounded-lg border px-3 py-2.5 text-sm bg-bg-light focus:outline-none focus:ring-2 focus:ring-brand-gold/30 ${
                        errors.subject ? "border-brand-red" : "border-gray-200"
                      }`}
                    >
                      <option value="">Select a topic...</option>
                      <option>I&apos;m looking to buy</option>
                      <option>I want to sell my home</option>
                      <option>Investment property inquiry</option>
                      <option>Rental inquiry</option>
                      <option>Relocation assistance</option>
                      <option>General question</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message", { required: true })}
                      className={`w-full rounded-lg border px-3 py-2.5 text-sm bg-bg-light resize-none focus:outline-none focus:ring-2 focus:ring-brand-gold/30 ${
                        errors.message ? "border-brand-red" : "border-gray-200"
                      }`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-navy px-6 py-3 text-white font-bold transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/20"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                  <p className="text-center text-xs text-text-secondary">
                    Or call me directly at{" "}
                    <a href={brand.phoneLink} className="text-brand-gold hover:underline">
                      {brand.phone}
                    </a>{" "}
                    — I&apos;d love to hear from you!
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
