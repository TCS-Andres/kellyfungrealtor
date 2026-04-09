"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState, useCallback } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  initials: string
  color: string
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[]
  autoRotateInterval?: number
}

export function AnimatedTestimonials({
  testimonials,
  autoRotateInterval = 6000,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })
  const controls = useAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  }

  useEffect(() => {
    if (isInView) controls.start("visible")
  }, [isInView, controls])

  const next = useCallback(() => {
    setActiveIndex((c) => (c + 1) % testimonials.length)
  }, [testimonials.length])

  const prev = useCallback(() => {
    setActiveIndex((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return
    const interval = setInterval(next, autoRotateInterval)
    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length, next])

  const active = testimonials[activeIndex]

  return (
    <div ref={sectionRef}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20"
      >
        {/* Left: Heading + navigation */}
        <motion.div variants={itemVariants} className="flex flex-col justify-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-brand-gold/10 text-brand-gold">
              <Star className="h-3.5 w-3.5 fill-brand-gold" />
              <span>Google Reviews — All 5 Stars</span>
            </div>

            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Real Stories, Real Results
            </h2>

            <p className="max-w-[520px] text-white/60 text-base lg:text-lg leading-relaxed">
              Don&apos;t just take my word for it — hear from clients who&apos;ve experienced the Kelly Fung difference firsthand.
            </p>

            {/* Navigation: arrows + counter on mobile, dots on desktop */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-brand-gold hover:text-brand-gold transition-colors lg:hidden"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-sm text-white/50 font-medium lg:hidden">
                {activeIndex + 1} / {testimonials.length}
              </span>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-brand-gold hover:text-brand-gold transition-colors lg:hidden"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>

              {/* Desktop dots */}
              <div className="hidden lg:flex items-center gap-2.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-brand-gold"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Active testimonial card — NOT absolute positioned */}
        <motion.div variants={itemVariants} className="relative">
          <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="mb-4 flex gap-1">
              {Array(active.rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                ))}
            </div>

            <div className="relative mb-5">
              <Quote className="absolute -top-1 -left-1 h-6 w-6 text-brand-gold/20 rotate-180" />
              <p className="text-[15px] md:text-base font-normal leading-relaxed text-white/90 pl-5">
                &ldquo;{active.content}&rdquo;
              </p>
            </div>

            <Separator className="my-4 bg-white/10" />

            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-white/10">
                <AvatarFallback
                  className="text-sm font-semibold text-white"
                  style={{ background: active.color }}
                >
                  {active.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-sm text-white">{active.name}</h3>
                <p className="text-xs text-white/50">{active.role}</p>
              </div>
            </div>
          </div>

          {/* Decorative — hidden on mobile to prevent overflow */}
          <div className="hidden md:block absolute -bottom-4 -left-4 h-16 w-16 rounded-xl bg-brand-gold/5" />
          <div className="hidden md:block absolute -top-4 -right-4 h-16 w-16 rounded-xl bg-brand-gold/5" />
        </motion.div>
      </motion.div>
    </div>
  )
}
