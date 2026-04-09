"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

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
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
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

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return
    const interval = setInterval(() => {
      setActiveIndex((c) => (c + 1) % testimonials.length)
    }, autoRotateInterval)
    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  return (
    <div ref={sectionRef}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20"
      >
        {/* Left: Heading + navigation */}
        <motion.div variants={itemVariants} className="flex flex-col justify-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-brand-gold/10 text-brand-gold">
              <Star className="h-3.5 w-3.5 fill-brand-gold" />
              <span>Google Reviews — All 5 Stars</span>
            </div>

            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Real Stories, Real Results
            </h2>

            <p className="max-w-[520px] text-white/60 md:text-lg leading-relaxed">
              Don&apos;t just take my word for it — hear from clients who&apos;ve experienced the Kelly Fung difference firsthand.
            </p>

            <div className="flex items-center gap-3 pt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-10 bg-brand-gold"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Testimonial cards */}
        <motion.div variants={itemVariants} className="relative min-h-[360px] md:min-h-[420px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 80 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : 80,
                scale: activeIndex === index ? 1 : 0.92,
              }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              style={{
                zIndex: activeIndex === index ? 10 : 0,
                pointerEvents: activeIndex === index ? "auto" : "none",
              }}
            >
              <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full flex flex-col">
                <div className="mb-5 flex gap-1">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                    ))}
                </div>

                <div className="relative mb-6 flex-1">
                  <Quote className="absolute -top-1 -left-1 h-7 w-7 text-brand-gold/20 rotate-180" />
                  <p className="relative z-10 text-[15px] md:text-base font-normal leading-relaxed text-white/90 pl-4">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                <Separator className="my-4 bg-white/10" />

                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-white/10">
                    <AvatarFallback
                      className="text-sm font-semibold text-white"
                      style={{ background: testimonial.color }}
                    >
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-sm text-white">{testimonial.name}</h3>
                    <p className="text-xs text-white/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Decorative corners */}
          <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-xl bg-brand-gold/5" />
          <div className="absolute -top-4 -right-4 h-20 w-20 rounded-xl bg-brand-gold/5" />
        </motion.div>
      </motion.div>
    </div>
  )
}
